import { z } from "zod";

import { prisma } from "../../../server/prisma";
import { slugify } from "../../../server/slug";
import { json, badRequest, notFound } from "../../../server/vercel/http";
import { requireAuth } from "../../../server/vercel/auth";

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

  const post = await prisma.post.findUnique({ where: { id } });
  if (!post) return notFound();
  return json({ post });
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

export async function DELETE(request: Request) {
  const user = await requireAuth(request);
  if (user instanceof Response) return user;

  const id = getLastPathSegment(request);
  if (!id) return notFound();

  await prisma.post.delete({ where: { id } });
  return json({ ok: true });
}

