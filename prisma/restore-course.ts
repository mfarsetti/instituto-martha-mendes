import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

import { seedCourses } from "../src/lib/seed-data";

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing env var: ${name}`);
  return value;
}

const adapter = new PrismaPg({ connectionString: requireEnv("DATABASE_URL") });
const prisma = new PrismaClient({ adapter });

async function main() {
  const slug = "psicoeducacao-terapeutica-integrativa";
  const course = seedCourses.find((c) => c.slug === slug);
  if (!course) throw new Error(`Course not found in seed-data: ${slug}`);

  await prisma.course.upsert({
    where: { slug },
    create: {
      title: course.title,
      slug: course.slug,
      summary: course.summary,
      category: course.category,
      duration: course.duration,
      modality: course.modality as never,
      certification: course.certification as never,
      investment: course.investment ?? null,
      startDates: course.startDates,
      image: course.image,
      hotmartUrl: (course as unknown as { hotmartUrl?: string | null }).hotmartUrl ?? null,
      hotmartText: (course as unknown as { hotmartText?: string | null }).hotmartText ?? null,
      content: course.content,
      status: "published",
      seoTitle: course.seoTitle ?? null,
      seoDescription: course.seoDescription ?? null,
      createdAt: new Date(course.createdAt),
      updatedAt: new Date(course.updatedAt),
      students: course.students ?? null,
      modules: {
        create: course.modules.map((m, idx) => ({
          title: m.title,
          topics: m.topics,
          order: idx,
        })),
      },
      teachers: {
        create: course.teachers.map((t, idx) => ({
          name: t.name,
          photo: t.photo,
          role: t.role,
          bio: t.bio,
          specialties: t.specialties,
          order: idx,
        })),
      },
      faqs: {
        create: course.faqs.map((f, idx) => ({
          question: f.question,
          answer: f.answer,
          order: idx,
        })),
      },
    },
    update: {
      title: course.title,
      summary: course.summary,
      category: course.category,
      duration: course.duration,
      modality: course.modality as never,
      certification: course.certification as never,
      investment: course.investment ?? null,
      startDates: course.startDates,
      image: course.image,
      hotmartUrl: (course as unknown as { hotmartUrl?: string | null }).hotmartUrl ?? null,
      hotmartText: (course as unknown as { hotmartText?: string | null }).hotmartText ?? null,
      content: course.content,
      status: "published",
      seoTitle: course.seoTitle ?? null,
      seoDescription: course.seoDescription ?? null,
      updatedAt: new Date(course.updatedAt),
      students: course.students ?? null,
      modules: {
        deleteMany: {},
        create: course.modules.map((m, idx) => ({
          title: m.title,
          topics: m.topics,
          order: idx,
        })),
      },
      teachers: {
        deleteMany: {},
        create: course.teachers.map((t, idx) => ({
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
        create: course.faqs.map((f, idx) => ({
          question: f.question,
          answer: f.answer,
          order: idx,
        })),
      },
    },
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });

