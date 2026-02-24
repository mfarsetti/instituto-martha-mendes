import { prisma } from "../../server/prisma";
import { json } from "../../server/vercel/http";

export async function GET() {
  const courses = await prisma.course.findMany({
    where: { status: "published" },
    orderBy: [{ createdAt: "desc" }],
  });
  return json({ courses });
}

