import path from "node:path";
import fs from "node:fs/promises";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import {
  buildCourseInterestMail,
  getCourseLeadRecipients,
  isMailerConfigured,
  sendMail,
} from "../server/mailer";
import { uploadFile } from "../server/upload-handler";

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing env var: ${name}`);
  return value;
}

function addCorsHeaders(headers: Headers, request: Request): void {
  const origin = request.headers.get("origin");
  const webOrigin = process.env.WEB_ORIGIN?.trim();
  const allowed = webOrigin ? webOrigin.split(",").map((o) => o.trim().replace(/\/$/, "")) : [];
  if (origin) {
    const originClean = origin.replace(/\/$/, "");
    if (allowed.length === 0 || allowed.includes("*") || allowed.includes(originClean) || allowed.includes(origin)) {
      headers.set("Access-Control-Allow-Origin", origin);
    }
  }
  headers.set("Access-Control-Allow-Credentials", "true");
  headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
}

function withCors(response: Response, request: Request): Response {
  const headers = new Headers(response.headers);
  addCorsHeaders(headers, request);
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}

function json(data: unknown, init: ResponseInit = {}): Response {
  const headers = new Headers(init.headers);
  if (!headers.has("content-type")) headers.set("content-type", "application/json; charset=utf-8");
  return new Response(JSON.stringify(data), { ...init, headers });
}

function text(body: string, init: ResponseInit = {}): Response {
  const headers = new Headers(init.headers);
  if (!headers.has("content-type")) headers.set("content-type", "text/plain; charset=utf-8");
  return new Response(body, { ...init, headers });
}

function notFound() {
  return json({ error: "not_found" }, { status: 404 });
}

function badRequest(extra?: Record<string, unknown>) {
  return json({ error: "invalid_input", ...(extra ?? {}) }, { status: 400 });
}

function unauthorized() {
  return json({ error: "unauthorized" }, { status: 401 });
}

function methodNotAllowed() {
  return text("Method Not Allowed", { status: 405 });
}

function slugify(input: string): string {
  return input
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

type CookieOptions = {
  httpOnly?: boolean;
  secure?: boolean;
  sameSite?: "lax" | "strict" | "none";
  path?: string;
  maxAge?: number;
};

function parseCookies(header: string | null): Record<string, string> {
  if (!header) return {};
  const out: Record<string, string> = {};
  for (const part of header.split(";")) {
    const [k, ...rest] = part.trim().split("=");
    if (!k) continue;
    out[k] = decodeURIComponent(rest.join("=") ?? "");
  }
  return out;
}

function serializeCookie(name: string, value: string, opts: CookieOptions = {}): string {
  const parts: string[] = [`${name}=${encodeURIComponent(value)}`];
  if (opts.maxAge != null) parts.push(`Max-Age=${Math.floor(opts.maxAge)}`);
  parts.push(`Path=${opts.path ?? "/"}`);
  if (opts.httpOnly) parts.push("HttpOnly");
  if (opts.secure) parts.push("Secure");
  if (opts.sameSite) parts.push(`SameSite=${opts.sameSite[0].toUpperCase()}${opts.sameSite.slice(1)}`);
  return parts.join("; ");
}

const COOKIE_NAME = "imm_session";
const JWT_SECRET = process.env.JWT_SECRET; // não chamar requireEnv na inicialização do módulo

declare global {
  var __immPrisma: PrismaClient | undefined;
}

function getPrisma(): PrismaClient {
  if (globalThis.__immPrisma) return globalThis.__immPrisma;
  const adapter = new PrismaPg({ connectionString: requireEnv("DATABASE_URL") });
  globalThis.__immPrisma = new PrismaClient({ adapter });
  return globalThis.__immPrisma;
}

function setSessionCookieHeaders(userId: string): string[] {
  const secret = JWT_SECRET ?? requireEnv("JWT_SECRET");
  const token = jwt.sign({ sub: userId }, secret, { expiresIn: "7d" });
  const secure = process.env.NODE_ENV === "production";
  const cookie = serializeCookie(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure,
    path: "/",
    maxAge: 7 * 24 * 60 * 60,
  });
  return [cookie];
}

function clearSessionCookieHeaders(): string[] {
  const secure = process.env.NODE_ENV === "production";
  const cookie = serializeCookie(COOKIE_NAME, "", {
    httpOnly: true,
    sameSite: "lax",
    secure,
    path: "/",
    maxAge: 0,
  });
  return [cookie];
}

async function getUserFromRequest(request: Request) {
  const secret = JWT_SECRET ?? requireEnv("JWT_SECRET");
  const cookies = parseCookies(request.headers.get("cookie"));
  const token = cookies[COOKIE_NAME];
  if (!token) return null;

  try {
    const decoded = jwt.verify(token, secret) as { sub?: string };
    const userId = decoded.sub;
    if (!userId) return null;

    const user = await getPrisma().user.findUnique({
      where: { id: userId },
      select: { id: true, email: true, name: true, role: true },
    });
    return user ?? null;
  } catch {
    return null;
  }
}

async function requireAuth(request: Request) {
  const user = await getUserFromRequest(request);
  if (!user) return unauthorized();
  return user;
}

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

const UPLOADS_DIR = path.resolve("/tmp", "uploads");

function contentTypeFromExt(ext: string): string {
  switch (ext) {
    case ".png":
      return "image/png";
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".webp":
      return "image/webp";
    default:
      return "application/octet-stream";
  }
}

async function handle(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const pathname = request.headers.get("x-imm-path") ?? url.pathname;
  const method = request.method.toUpperCase();

  // CORS preflight
  if (method === "OPTIONS") {
    const headers = new Headers();
    addCorsHeaders(headers, request);
    return new Response(null, { status: 204, headers });
  }

  // health
  if (pathname === "/api/health") {
    if (method !== "GET") return methodNotAllowed();
    return json({ ok: true });
  }

  // auth
  if (pathname === "/api/auth/login") {
    if (method !== "POST") return methodNotAllowed();

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return badRequest();
    }

    const input = z
      .object({ email: z.string().email(), password: z.string().min(1) })
      .safeParse(body);
    if (!input.success) return badRequest();

    const prisma = getPrisma();
    const user = await prisma.user.findUnique({
      where: { email: input.data.email.toLowerCase() },
    });
    if (!user) return json({ error: "invalid_credentials" }, { status: 401 });

    const ok = await bcrypt.compare(input.data.password, user.passwordHash);
    if (!ok) return json({ error: "invalid_credentials" }, { status: 401 });

    const headers = new Headers();
    for (const c of setSessionCookieHeaders(user.id)) headers.append("set-cookie", c);

    return json(
      { user: { id: user.id, email: user.email, name: user.name, role: user.role } },
      { headers },
    );
  }

  if (pathname === "/api/auth/logout") {
    if (method !== "POST") return methodNotAllowed();
    const headers = new Headers();
    for (const c of clearSessionCookieHeaders()) headers.append("set-cookie", c);
    return json({ ok: true }, { headers });
  }

  if (pathname === "/api/auth/me") {
    if (method !== "GET") return methodNotAllowed();
    const user = await requireAuth(request);
    if (user instanceof Response) return user;
    return json({ user });
  }

  // uploads (via rewrite /uploads/* -> /api/uploads/*)
  if (pathname.startsWith("/api/uploads/")) {
    if (method !== "GET") return methodNotAllowed();
    const filename = decodeURIComponent(pathname.slice("/api/uploads/".length));
    if (!filename) return notFound();

    const filePath = path.join(UPLOADS_DIR, filename);
    try {
      const buf = await fs.readFile(filePath);
      const ext = path.extname(filename).toLowerCase();
      const body = Uint8Array.from(buf).buffer;
      return new Response(body, {
        headers: {
          "content-type": contentTypeFromExt(ext),
          "cache-control": "public, max-age=604800",
        },
      });
    } catch {
      return notFound();
    }
  }

  // public posts
  if (pathname === "/api/posts") {
    if (method !== "GET") return methodNotAllowed();
    const posts = await getPrisma().post.findMany({
      where: { status: "published" },
      orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
    });
    return json({ posts });
  }

  if (pathname.startsWith("/api/posts/")) {
    if (method !== "GET") return methodNotAllowed();
    const slug = decodeURIComponent(pathname.slice("/api/posts/".length));
    if (!slug) return notFound();
    const post = await getPrisma().post.findFirst({
      where: { slug, status: "published" },
    });
    if (!post) return notFound();
    return json({ post });
  }

  // public courses
  if (pathname === "/api/courses") {
    if (method !== "GET") return methodNotAllowed();
    const courses = await getPrisma().course.findMany({
      where: { status: "published" },
      orderBy: [{ createdAt: "desc" }],
    });
    return json({ courses });
  }

  if (pathname.startsWith("/api/courses/")) {
    if (method !== "GET") return methodNotAllowed();
    const slug = decodeURIComponent(pathname.slice("/api/courses/".length));
    if (!slug) return notFound();
    const course = await getPrisma().course.findFirst({
      where: { slug, status: "published" },
      include: { modules: true, teachers: true, faqs: true },
    });
    if (!course) return notFound();
    return json({ course });
  }

  // leads + email
  if (pathname === "/api/course-interest") {
    if (method !== "POST") return methodNotAllowed();

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return badRequest();
    }

    const input = z
      .object({
        courseSlug: z.string().min(1),
        name: z.string().min(1),
        email: z.string().email(),
        phone: z.string().min(5),
        message: z.string().optional(),
      })
      .safeParse(body);
    if (!input.success) return badRequest();

    const prisma = getPrisma();
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
        const { subject, text: mailText } = buildCourseInterestMail(input.data);
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
          text: mailText,
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
        "[course-interest] SMTP não configurado. Adicione SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS e SMTP_FROM no Vercel Dashboard > Settings > Environment Variables."
      );
    }

    return json({ ok: true });
  }

  if (pathname === "/api/contact") {
    if (method !== "POST") return methodNotAllowed();

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return badRequest();
    }

    const input = z
      .object({
        name: z.string().min(1),
        email: z.string().email(),
        phone: z.string().optional(),
        subject: z.string().min(1),
        message: z.string().min(1),
      })
      .safeParse(body);
    if (!input.success) return badRequest();

    const to = "contato@institutomarthamendes.com.br";
    const bcc = "matheus.farsetti@gmail.com";
    const subject = `Fale Conosco: ${input.data.subject}`;
    const mailText = [
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

    if (!isMailerConfigured()) {
      console.warn("[contact] SMTP não configurado no Vercel.");
      return json({ error: "email_failed" }, { status: 500 });
    }
    try {
      await sendMail({
        to,
        bcc,
        subject,
        text: mailText,
        replyTo: input.data.email,
      });
      return json({ ok: true });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Mailer error (contact)", err);
      return json({ error: "email_failed" }, { status: 500 });
    }
  }

  // admin upload (multipart)
  if (pathname === "/api/admin/upload") {
    if (method !== "POST") return methodNotAllowed();
    const user = await requireAuth(request);
    if (user instanceof Response) return user;

    let form: FormData;
    try {
      form = await request.formData();
    } catch {
      return badRequest();
    }
    const file = form.get("file");
    if (!(file instanceof File)) return badRequest({ error: "missing_file" });

    const ok =
      file.type === "image/png" || file.type === "image/jpeg" || file.type === "image/webp";
    if (!ok) return badRequest({ error: "invalid_file_type" });

    try {
      const bytes = new Uint8Array(await file.arrayBuffer());
      const { url } = await uploadFile(Buffer.from(bytes), file.name || "image", file.type);
      return json({ url });
    } catch (err) {
      const msg = err instanceof Error ? err.message : "upload_failed";
      return json({ error: msg }, { status: 500 });
    }
  }

  // admin posts
  if (pathname === "/api/admin/posts") {
    const user = await requireAuth(request);
    if (user instanceof Response) return user;

    const prisma = getPrisma();

    if (method === "GET") {
      const posts = await prisma.post.findMany({ orderBy: [{ updatedAt: "desc" }] });
      return json({ posts });
    }

    if (method === "POST") {
      let body: unknown;
      try {
        body = await request.json();
      } catch {
        return badRequest();
      }
      const parsed = adminPostInput.safeParse(body);
      if (!parsed.success) return badRequest();

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
      return json({ post });
    }

    return methodNotAllowed();
  }

  if (pathname.startsWith("/api/admin/posts/")) {
    const user = await requireAuth(request);
    if (user instanceof Response) return user;

    const id = decodeURIComponent(pathname.slice("/api/admin/posts/".length));
    if (!id) return notFound();

    const prisma = getPrisma();

    if (method === "GET") {
      const post = await prisma.post.findUnique({ where: { id } });
      if (!post) return notFound();
      return json({ post });
    }

    if (method === "PUT") {
      let body: unknown;
      try {
        body = await request.json();
      } catch {
        return badRequest();
      }
      const parsed = adminPostInput.safeParse(body);
      if (!parsed.success) return badRequest();

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
      return json({ post });
    }

    if (method === "DELETE") {
      await prisma.post.delete({ where: { id } });
      return json({ ok: true });
    }

    return methodNotAllowed();
  }

  // admin courses
  if (pathname === "/api/admin/courses") {
    const user = await requireAuth(request);
    if (user instanceof Response) return user;

    const prisma = getPrisma();

    if (method === "GET") {
      const courses = await prisma.course.findMany({
        include: { modules: true, teachers: true, faqs: true },
        orderBy: [{ updatedAt: "desc" }],
      });
      return json({ courses });
    }

    if (method === "POST") {
      let body: unknown;
      try {
        body = await request.json();
      } catch {
        return badRequest();
      }
      const parsed = adminCourseInput.safeParse(body);
      if (!parsed.success) {
        return badRequest(
          process.env.NODE_ENV === "production" ? undefined : { issues: parsed.error.flatten() },
        );
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
      return json({ course });
    }

    return methodNotAllowed();
  }

  if (pathname.startsWith("/api/admin/courses/")) {
    const user = await requireAuth(request);
    if (user instanceof Response) return user;

    const id = decodeURIComponent(pathname.slice("/api/admin/courses/".length));
    if (!id) return notFound();

    const prisma = getPrisma();

    if (method === "GET") {
      const course = await prisma.course.findUnique({
        where: { id },
        include: { modules: true, teachers: true, faqs: true },
      });
      if (!course) return notFound();
      return json({ course });
    }

    if (method === "PUT") {
      let body: unknown;
      try {
        body = await request.json();
      } catch {
        return badRequest();
      }
      const parsed = adminCourseInput.safeParse(body);
      if (!parsed.success) {
        return badRequest(
          process.env.NODE_ENV === "production" ? undefined : { issues: parsed.error.flatten() },
        );
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
      return json({ course });
    }

    if (method === "DELETE") {
      await prisma.course.delete({ where: { id } });
      return json({ ok: true });
    }

    return methodNotAllowed();
  }

  // admin leads
  if (pathname === "/api/admin/leads") {
    if (method !== "GET") return methodNotAllowed();
    const user = await requireAuth(request);
    if (user instanceof Response) return user;

    const rawPage = url.searchParams.get("page");
    const rawPageSize = url.searchParams.get("pageSize");

    const pageNum = rawPage ? Number(rawPage) : 1;
    const pageSizeNum = rawPageSize ? Number(rawPageSize) : 15;

    const page = Number.isFinite(pageNum) ? Math.max(1, Math.floor(pageNum)) : 1;
    const pageSize = Number.isFinite(pageSizeNum)
      ? Math.min(Math.max(Math.floor(pageSizeNum), 1), 100)
      : 15;

    const prisma = getPrisma();
    const total = await prisma.courseLead.count();
    const totalPages = Math.max(1, Math.ceil(total / pageSize));
    const safePage = Math.min(page, totalPages);

    const leads = await prisma.courseLead.findMany({
      skip: (safePage - 1) * pageSize,
      take: pageSize,
      orderBy: [{ createdAt: "desc" }],
      include: {
        course: { select: { id: true, title: true, slug: true } },
      },
    });

    return json({ leads, total, page: safePage, pageSize, totalPages });
  }

  return notFound();
}

export default {
  async fetch(request: Request) {
    try {
      const response = await handle(request);
      return withCors(response, request);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      const stack = err instanceof Error ? err.stack : undefined;
      // eslint-disable-next-line no-console
      console.error("API error:", msg, stack ?? "");
      const errorResponse = json({ error: "server_error" }, { status: 500 });
      return withCors(errorResponse, request);
    }
  },
};

