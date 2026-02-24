import { z } from "zod";

import { prisma } from "../../../server/prisma";
import { slugify } from "../../../server/slug";
import { json, badRequest } from "../../../server/vercel/http";
import { requireAuth } from "../../../server/vercel/auth";

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

export async function GET(request: Request) {
  const user = await requireAuth(request);
  if (user instanceof Response) return user;

  const courses = await prisma.course.findMany({
    include: { modules: true, teachers: true, faqs: true },
    orderBy: [{ updatedAt: "desc" }],
  });
  return json({ courses });
}

export async function POST(request: Request) {
  const user = await requireAuth(request);
  if (user instanceof Response) return user;

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return badRequest();
  }

  const parsed = adminCourseInput.safeParse(body);
  if (!parsed.success) {
    return badRequest(
      "invalid_input",
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

