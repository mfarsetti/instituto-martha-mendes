import "dotenv/config";
import "./express";

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { z } from "zod";
import multer from "multer";
import { prisma } from "./prisma";
import {
  authOptional,
  authRequired,
  clearSessionCookie,
  setSessionCookie,
  verifyPassword,
} from "./auth";
import { slugify } from "./slug";
import { ensureUploadsDir, UPLOADS_DIR } from "../api/lib/upload";
import { uploadFile } from "../api/lib/upload-handler";
import { buildCourseInterestMail, getCourseLeadRecipients, isMailerConfigured, sendMail } from "../api/lib/mailer";

const app = express();

const webOrigin = process.env.WEB_ORIGIN ?? "http://localhost:8080";
const corsOrigin = process.env.NODE_ENV === "production" ? webOrigin : true;

ensureUploadsDir();
app.use("/api/uploads", express.static(UPLOADS_DIR, { maxAge: "7d" }));

app.use(
  cors({
    origin: corsOrigin,
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(express.json({ limit: "2mb" }));

app.get("/api/health", (_req, res) => res.json({ ok: true }));

app.use(authOptional);

app.post("/api/auth/login", async (req, res) => {
  const input = z
    .object({
      email: z.string().email(),
      password: z.string().min(1),
    })
    .safeParse(req.body);

  if (!input.success) return res.status(400).json({ error: "invalid_input" });

  const user = await prisma.user.findUnique({
    where: { email: input.data.email.toLowerCase() },
  });
  if (!user) return res.status(401).json({ error: "invalid_credentials" });

  const ok = await verifyPassword(input.data.password, user.passwordHash);
  if (!ok) return res.status(401).json({ error: "invalid_credentials" });

  setSessionCookie(res, user.id);
  return res.json({
    user: { id: user.id, email: user.email, name: user.name, role: user.role },
  });
});

app.post("/api/auth/logout", async (_req, res) => {
  clearSessionCookie(res);
  return res.json({ ok: true });
});

app.get("/api/auth/me", authRequired, async (req, res) => {
  return res.json({ user: req.user });
});

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    const ok =
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/webp";
    if (!ok) return cb(new Error("invalid_file_type"));
    return cb(null, true);
  },
});

app.post("/api/admin/upload", authRequired, upload.single("file"), async (req, res) => {
  const file = req.file;
  if (!file?.buffer) return res.status(400).json({ error: "missing_file" });
  try {
    const { url } = await uploadFile(file.buffer, file.originalname || "image", file.mimetype);
    return res.json({ url });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "upload_failed";
    return res.status(500).json({ error: msg });
  }
});

app.use((err: unknown, _req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (!err) return next();

  if (err instanceof Error) {
    if (err.message === "invalid_file_type") {
      return res.status(400).json({ error: "invalid_file_type" });
    }
    if ((err as { code?: string }).code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({ error: "file_too_large" });
    }
  }

  // eslint-disable-next-line no-console
  console.error(err);
  return res.status(500).json({ error: "server_error" });
});

app.get("/api/posts", async (_req, res) => {
  const posts = await prisma.post.findMany({
    where: { status: "published" },
    orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
  });
  return res.json({ posts });
});

app.get("/api/posts/:slug", async (req, res) => {
  const slug = Array.isArray(req.params.slug) ? req.params.slug[0] : req.params.slug;
  const post = await prisma.post.findFirst({
    where: { slug, status: "published" },
  });
  if (!post) return res.status(404).json({ error: "not_found" });
  return res.json({ post });
});

app.get("/api/courses", async (_req, res) => {
  const courses = await prisma.course.findMany({
    where: { status: "published" },
    orderBy: [{ createdAt: "desc" }],
  });
  return res.json({ courses });
});

app.get("/api/courses/:slug", async (req, res) => {
  const slug = Array.isArray(req.params.slug) ? req.params.slug[0] : req.params.slug;
  const course = await prisma.course.findFirst({
    where: { slug, status: "published" },
    include: { modules: true, teachers: true, faqs: true },
  });
  if (!course) return res.status(404).json({ error: "not_found" });
  return res.json({ course });
});

const adminPostInput = z.object({
  title: z.string().min(1),
  slug: z.string().min(1).optional(),
  summary: z.string().min(1),
  image: z.string().min(1),
  tags: z.array(z.string()).default([]),
  content: z.string().min(1),
  status: z.enum(["draft", "published"]).default("draft"),
  publishedAt: z.string().datetime().nullable().optional(),
  author: z.string().nullable().optional(),
  readTime: z.string().nullable().optional(),
});

app.get("/api/admin/posts", authRequired, async (_req, res) => {
  const posts = await prisma.post.findMany({
    orderBy: [{ updatedAt: "desc" }],
  });
  return res.json({ posts });
});

app.get("/api/admin/posts/:id", authRequired, async (req, res) => {
  const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  const post = await prisma.post.findUnique({ where: { id } });
  if (!post) return res.status(404).json({ error: "not_found" });
  return res.json({ post });
});

app.post("/api/admin/posts", authRequired, async (req, res) => {
  const parsed = adminPostInput.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "invalid_input" });

  const baseSlug = slugify(parsed.data.slug ?? parsed.data.title);
  let slug = baseSlug || `post-${Date.now()}`;

  const existing = await prisma.post.findUnique({ where: { slug } });
  if (existing) slug = `${slug}-${Date.now()}`;

  const post = await prisma.post.create({
    data: {
      title: parsed.data.title,
      slug,
      summary: parsed.data.summary,
      image: parsed.data.image,
      tags: parsed.data.tags,
      content: parsed.data.content,
      status: parsed.data.status,
      publishedAt: parsed.data.publishedAt ? new Date(parsed.data.publishedAt) : null,
      author: parsed.data.author ?? null,
      readTime: parsed.data.readTime ?? null,
    },
  });

  return res.json({ post });
});

app.put("/api/admin/posts/:id", authRequired, async (req, res) => {
  const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  const parsed = adminPostInput.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "invalid_input" });

  const post = await prisma.post.update({
    where: { id },
    data: {
      title: parsed.data.title,
      slug: parsed.data.slug ? slugify(parsed.data.slug) : undefined,
      summary: parsed.data.summary,
      image: parsed.data.image,
      tags: parsed.data.tags,
      content: parsed.data.content,
      status: parsed.data.status,
      publishedAt: parsed.data.publishedAt ? new Date(parsed.data.publishedAt) : null,
      author: parsed.data.author ?? null,
      readTime: parsed.data.readTime ?? null,
    },
  });
  return res.json({ post });
});

app.delete("/api/admin/posts/:id", authRequired, async (req, res) => {
  const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  await prisma.post.delete({ where: { id } });
  return res.json({ ok: true });
});

const adminCourseInput = z.object({
  title: z.string().min(1),
  slug: z.string().min(1).optional(),
  summary: z.string().min(1),
  category: z.string().min(1),
  duration: z.string().min(1),
  modality: z.enum(["Presencial", "EAD", "Hibrido"]),
  certification: z.enum(["Extensao", "Pos", "Mestrado", "Outro"]),
  investment: z.string().nullable().optional(),
  startDates: z.array(z.string()).default([]),
  image: z.string().min(1),
  hotmartUrl: z.preprocess((v) => {
    if (typeof v !== "string") return v;
    const trimmed = v.trim();
    if (!trimmed) return null;
    if (!/^https?:\/\//i.test(trimmed)) return `https://${trimmed}`;
    return trimmed;
  }, z.string().url().nullable().optional()),
  hotmartText: z.preprocess((v) => {
    if (typeof v !== "string") return v;
    const trimmed = v.trim();
    return trimmed ? trimmed : null;
  }, z.string().min(1).max(80).nullable().optional()),
  content: z.string().min(1),
  status: z.enum(["draft", "published"]).default("draft"),
  seoTitle: z.string().nullable().optional(),
  seoDescription: z.string().nullable().optional(),
  students: z.number().int().nullable().optional(),
  modules: z
    .array(z.object({ title: z.string().min(1), topics: z.array(z.string()).default([]) }))
    .default([]),
  teachers: z
    .array(
      z.object({
        name: z.string().min(1),
        photo: z.string().min(1),
        role: z.string().min(1),
        bio: z.string().min(1),
        specialties: z.array(z.string()).default([]),
      }),
    )
    .default([]),
  faqs: z
    .array(z.object({ question: z.string().min(1), answer: z.string().min(1) }))
    .default([]),
});

app.get("/api/admin/courses", authRequired, async (_req, res) => {
  const courses = await prisma.course.findMany({
    include: { modules: true, teachers: true, faqs: true },
    orderBy: [{ updatedAt: "desc" }],
  });
  return res.json({ courses });
});

app.get("/api/admin/courses/:id", authRequired, async (req, res) => {
  const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  const course = await prisma.course.findUnique({
    where: { id },
    include: { modules: true, teachers: true, faqs: true },
  });
  if (!course) return res.status(404).json({ error: "not_found" });
  return res.json({ course });
});

app.post("/api/admin/courses", authRequired, async (req, res) => {
  const parsed = adminCourseInput.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({
      error: "invalid_input",
      ...(process.env.NODE_ENV === "production" ? {} : { issues: parsed.error.flatten() }),
    });
  }

  const baseSlug = slugify(parsed.data.slug ?? parsed.data.title);
  let slug = baseSlug || `course-${Date.now()}`;

  const existing = await prisma.course.findUnique({ where: { slug } });
  if (existing) slug = `${slug}-${Date.now()}`;

  const course = await prisma.course.create({
    data: {
      title: parsed.data.title,
      slug,
      summary: parsed.data.summary,
      category: parsed.data.category,
      duration: parsed.data.duration,
      modality: parsed.data.modality,
      certification: parsed.data.certification,
      investment: parsed.data.investment ?? null,
      startDates: parsed.data.startDates,
      image: parsed.data.image,
      hotmartUrl: parsed.data.hotmartUrl ?? null,
      hotmartText: parsed.data.hotmartText ?? null,
      content: parsed.data.content,
      status: parsed.data.status,
      seoTitle: parsed.data.seoTitle ?? null,
      seoDescription: parsed.data.seoDescription ?? null,
      students: parsed.data.students ?? null,
      modules: {
        create: parsed.data.modules.map((m, idx) => ({
          title: m.title,
          topics: m.topics,
          order: idx,
        })),
      },
      teachers: {
        create: parsed.data.teachers.map((t, idx) => ({
          name: t.name,
          photo: t.photo,
          role: t.role,
          bio: t.bio,
          specialties: t.specialties,
          order: idx,
        })),
      },
      faqs: {
        create: parsed.data.faqs.map((f, idx) => ({
          question: f.question,
          answer: f.answer,
          order: idx,
        })),
      },
    },
    include: { modules: true, teachers: true, faqs: true },
  });

  return res.json({ course });
});

app.put("/api/admin/courses/:id", authRequired, async (req, res) => {
  const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  const parsed = adminCourseInput.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({
      error: "invalid_input",
      ...(process.env.NODE_ENV === "production" ? {} : { issues: parsed.error.flatten() }),
    });
  }

  const course = await prisma.course.update({
    where: { id },
    data: {
      title: parsed.data.title,
      slug: parsed.data.slug ? slugify(parsed.data.slug) : undefined,
      summary: parsed.data.summary,
      category: parsed.data.category,
      duration: parsed.data.duration,
      modality: parsed.data.modality,
      certification: parsed.data.certification,
      investment: parsed.data.investment ?? null,
      startDates: parsed.data.startDates,
      image: parsed.data.image,
      hotmartUrl: parsed.data.hotmartUrl ?? null,
      hotmartText: parsed.data.hotmartText ?? null,
      content: parsed.data.content,
      status: parsed.data.status,
      seoTitle: parsed.data.seoTitle ?? null,
      seoDescription: parsed.data.seoDescription ?? null,
      students: parsed.data.students ?? null,
      modules: {
        deleteMany: {},
        create: parsed.data.modules.map((m, idx) => ({
          title: m.title,
          topics: m.topics,
          order: idx,
        })),
      },
      teachers: {
        deleteMany: {},
        create: parsed.data.teachers.map((t, idx) => ({
          name: t.name,
          photo: t.photo,
          role: t.role,
          bio: t.bio,
          specialties: t.specialties,
          order: idx,
        })),
      },
      faqs: {
        deleteMany: {},
        create: parsed.data.faqs.map((f, idx) => ({
          question: f.question,
          answer: f.answer,
          order: idx,
        })),
      },
    },
    include: { modules: true, teachers: true, faqs: true },
  });

  return res.json({ course });
});

app.delete("/api/admin/courses/:id", authRequired, async (req, res) => {
  const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  await prisma.course.delete({ where: { id } });
  return res.json({ ok: true });
});

app.get("/api/admin/leads", authRequired, async (req, res) => {
  const rawPage = Array.isArray(req.query.page) ? req.query.page[0] : req.query.page;
  const rawPageSize = Array.isArray(req.query.pageSize) ? req.query.pageSize[0] : req.query.pageSize;

  const pageNum = rawPage ? Number(rawPage) : 1;
  const pageSizeNum = rawPageSize ? Number(rawPageSize) : 15;

  const page = Number.isFinite(pageNum) ? Math.max(1, Math.floor(pageNum)) : 1;
  const pageSize = Number.isFinite(pageSizeNum)
    ? Math.min(Math.max(Math.floor(pageSizeNum), 1), 100)
    : 15;

  const total = await prisma.courseLead.count();
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(page, totalPages);

  const leads = await prisma.courseLead.findMany({
    skip: (safePage - 1) * pageSize,
    take: pageSize,
    orderBy: [{ createdAt: "desc" }],
    include: {
      course: {
        select: { id: true, title: true, slug: true },
      },
    },
  });

  return res.json({ leads, total, page: safePage, pageSize, totalPages });
});

app.post("/api/course-interest", async (req, res) => {
  const input = z
    .object({
      courseSlug: z.string().min(1),
      name: z.string().min(1),
      email: z.string().email(),
      phone: z.string().min(5),
      message: z.string().optional(),
    })
    .safeParse(req.body);

  if (!input.success) return res.status(400).json({ error: "invalid_input" });

  const course = await prisma.course.findUnique({
    where: { slug: input.data.courseSlug },
    select: { id: true },
  });

  await prisma.courseLead.create({
    data: {
      courseId: course?.id ?? null,
      name: input.data.name,
      email: input.data.email,
      phone: input.data.phone,
      message: input.data.message?.trim() ? input.data.message : null,
    },
  });
  console.info("[course-interest] lead salvo", {
    courseSlug: input.data.courseSlug,
    email: input.data.email,
    hasCourse: Boolean(course?.id),
  });

  if (isMailerConfigured()) {
    try {
      const { to, bcc } = getCourseLeadRecipients();
      const { subject, text } = buildCourseInterestMail(input.data);
      console.info("[course-interest] enviando email", {
        to,
        bcc: bcc ?? null,
        replyTo: input.data.email,
        subject,
      });

      const info = await sendMail({
        to,
        bcc,
        subject,
        text,
        replyTo: input.data.email,
      });
      console.info("[course-interest] email enviado", {
        messageId: info.messageId,
        accepted: info.accepted,
        rejected: info.rejected,
      });
    } catch (err) {
      // não bloquear o lead por falha de e-mail
      console.error("Mailer error (course-interest)", err);
    }
  } else {
    console.warn(
      "[course-interest] SMTP não configurado. Adicione SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS e SMTP_FROM."
    );
  }

  return res.json({ ok: true });
});

app.post("/api/contact", async (req, res) => {
  const input = z
    .object({
      name: z.string().min(1),
      email: z.string().email(),
      phone: z.string().optional(),
      subject: z.string().min(1),
      message: z.string().min(1),
    })
    .safeParse(req.body);

  if (!input.success) return res.status(400).json({ error: "invalid_input" });

  const to = "contato@institutomarthamendes.com.br";
  const bcc = "matheus.farsetti@gmail.com";
  const subject = `Fale Conosco: ${input.data.subject}`;
  const text = [
    "Nova mensagem de contato recebida.",
    "",
    `Nome: ${input.data.name}`,
    `E-mail: ${input.data.email}`,
    `Telefone: ${input.data.phone ?? ""}`,
    "",
    input.data.message,
    "",
    "— Instituto Martha Mendes",
  ].join("\n");

  try {
    await sendMail({
      to,
      bcc,
      subject,
      text,
      replyTo: input.data.email,
    });
    return res.json({ ok: true });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Mailer error (contact)", err);
    return res.status(500).json({ error: "email_failed" });
  }
});

export default app;

