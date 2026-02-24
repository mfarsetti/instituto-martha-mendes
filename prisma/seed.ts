import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcrypt";

import { seedCourses, seedPosts } from "../src/lib/seed-data";

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing env var: ${name}`);
  return value;
}

const adapter = new PrismaPg({ connectionString: requireEnv("DATABASE_URL") });
const prisma = new PrismaClient({ adapter });

const certificationMap: Record<string, string> = {
  Extensão: "Extensao",
  "Pós": "Pos",
};

const modalityMap: Record<string, string> = {
  "Híbrido": "Hibrido",
};

async function main() {
  await prisma.$transaction([
    prisma.courseFAQ.deleteMany({}),
    prisma.courseTeacher.deleteMany({}),
    prisma.courseModule.deleteMany({}),
    prisma.course.deleteMany({}),
    prisma.post.deleteMany({}),
    prisma.user.deleteMany({}),
  ]);

  const adminEmail = process.env.ADMIN_EMAIL?.toLowerCase().trim();
  const adminPassword = process.env.ADMIN_PASSWORD;
  const adminName = process.env.ADMIN_NAME ?? "Admin";

  if (adminEmail && adminPassword) {
    const passwordHash = await bcrypt.hash(adminPassword, 12);
    await prisma.user.upsert({
      where: { email: adminEmail },
      create: {
        email: adminEmail,
        name: adminName,
        role: "admin",
        passwordHash,
      },
      update: {
        name: adminName,
        role: "admin",
        passwordHash,
      },
    });
  }

  for (const post of seedPosts) {
    await prisma.post.upsert({
      where: { slug: post.slug },
      create: {
        title: post.title,
        slug: post.slug,
        summary: post.summary,
        image: post.image,
        tags: post.tags,
        content: post.content,
        status: post.status,
        publishedAt: post.publishedAt ? new Date(post.publishedAt) : null,
        createdAt: new Date(post.createdAt),
        updatedAt: new Date(post.updatedAt),
        author: post.author ?? null,
        readTime: post.readTime ?? null,
      },
      update: {
        title: post.title,
        summary: post.summary,
        image: post.image,
        tags: post.tags,
        content: post.content,
        status: post.status,
        publishedAt: post.publishedAt ? new Date(post.publishedAt) : null,
        updatedAt: new Date(post.updatedAt),
        author: post.author ?? null,
        readTime: post.readTime ?? null,
      },
    });
  }

  for (const course of seedCourses) {
    const certification =
      certificationMap[course.certification] ?? course.certification;
    const modality = modalityMap[course.modality] ?? course.modality;

    await prisma.course.upsert({
      where: { slug: course.slug },
      create: {
        title: course.title,
        slug: course.slug,
        summary: course.summary,
        category: course.category,
        duration: course.duration,
        modality: modality as never,
        certification: certification as never,
        investment: course.investment ?? null,
        startDates: course.startDates,
        image: course.image,
        hotmartUrl: (course as unknown as { hotmartUrl?: string | null }).hotmartUrl ?? null,
        hotmartText: (course as unknown as { hotmartText?: string | null }).hotmartText ?? null,
        content: course.content,
        status: course.status,
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
        modality: modality as never,
        certification: certification as never,
        investment: course.investment ?? null,
        startDates: course.startDates,
        image: course.image,
        hotmartUrl: (course as unknown as { hotmartUrl?: string | null }).hotmartUrl ?? null,
        hotmartText: (course as unknown as { hotmartText?: string | null }).hotmartText ?? null,
        content: course.content,
        status: course.status,
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
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });

