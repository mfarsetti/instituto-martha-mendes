import { prisma } from "../../server/prisma";
import { json } from "../../server/vercel/http";

export async function GET() {
  const posts = await prisma.post.findMany({
    where: { status: "published" },
    orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
  });
  return json({ posts });
}

