import { prisma } from "../../server/prisma";
import { json, notFound } from "../../server/vercel/http";

function getLastPathSegment(request: Request): string | null {
  const url = new URL(request.url);
  const parts = url.pathname.split("/").filter(Boolean);
  const last = parts.at(-1);
  return last ? decodeURIComponent(last) : null;
}

export async function GET(request: Request) {
  const slug = getLastPathSegment(request);
  if (!slug) return notFound();

  const course = await prisma.course.findFirst({
    where: { slug, status: "published" },
    include: { modules: true, teachers: true, faqs: true },
  });
  if (!course) return notFound();

  return json({ course });
}

