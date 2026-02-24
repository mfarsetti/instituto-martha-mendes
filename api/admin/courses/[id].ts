import { z } from "zod";

import { prisma } from "../../../server/prisma";
import { slugify } from "../../../server/slug";
import { json, badRequest, notFound } from "../../../server/vercel/http";
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

function getLastPathSegment(request: Request): string | null {
  const url = new URL(request.url);
  const parts = url.pathname.split("/").filter(Boolean);
  const last = parts.at(-1);
  return last ? decodeURIComponent(last) : null;
}

export async function GET(request: Request) {
  const user = await requireAuth(request);
  if (user instanceof Response) return user;

  const id = getLastPathSegment(request);
  if (!id) return notFound();

  const course = await prisma.course.findUnique({
    where: { id },
    include: { modules: true, teachers: true, faqs: true },
  });
  if (!course) return notFound();

  return json({ course });
}

export async function PUT(request: Request) {
  const user = await requireAuth(request);
  if (user instanceof Response) return user;

  const id = getLastPathSegment(request);
  if (!id) return notFound();

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

export async function DELETE(request: Request) {
  const user = await requireAuth(request);
  if (user instanceof Response) return user;

  const id = getLastPathSegment(request);
  if (!id) return notFound();

  await prisma.course.delete({ where: { id } });
  return json({ ok: true });
}

