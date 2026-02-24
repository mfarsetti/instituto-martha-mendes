import { prisma } from "../../server/prisma";
import { json, badRequest } from "../../server/vercel/http";
import { requireAuth } from "../../server/vercel/auth";

export async function GET(request: Request) {
  const user = await requireAuth(request);
  if (user instanceof Response) return user;

  const url = new URL(request.url);
  const rawPage = url.searchParams.get("page");
  const rawPageSize = url.searchParams.get("pageSize");

  const pageNum = rawPage ? Number(rawPage) : 1;
  const pageSizeNum = rawPageSize ? Number(rawPageSize) : 15;

  const page = Number.isFinite(pageNum) ? Math.max(1, Math.floor(pageNum)) : 1;
  const pageSize = Number.isFinite(pageSizeNum)
    ? Math.min(Math.max(Math.floor(pageSizeNum), 1), 100)
    : 15;

  if (!Number.isFinite(page) || !Number.isFinite(pageSize)) return badRequest();

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

  return json({ leads, total, page: safePage, pageSize, totalPages });
}

