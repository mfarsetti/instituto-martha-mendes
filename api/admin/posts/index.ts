import { z } from "zod";

import { prisma } from "../../../server/prisma";
import { slugify } from "../../../server/slug";
import { json, badRequest } from "../../../server/vercel/http";
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

export async function GET(request: Request) {
  const user = await requireAuth(request);
  if (user instanceof Response) return user;

  const posts = await prisma.post.findMany({
    orderBy: [{ updatedAt: "desc" }],
  });
  return json({ posts });
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

