import { z } from "zod";

import { prisma } from "../server/prisma";
import { sendMail } from "../server/mailer";
import { json, badRequest } from "../server/vercel/http";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return badRequest();
  }

  const input = z
    .object({
      courseSlug: z.string().min(1),
      name: z.string().min(1),
      email: z.string().email(),
      phone: z.string().min(5),
      message: z.string().optional(),
    })
    .safeParse(body);

  if (!input.success) return badRequest();

  const course = await prisma.course.findUnique({
    where: { slug: input.data.courseSlug },
    select: { id: true },
  });

  await prisma.courseLead.create({
    data: {
      courseId: course?.id ?? null,
      name: input.data.name,
      email: input.data.email,
      phone: input.data.phone,
      message: input.data.message?.trim() ? input.data.message : null,
    },
  });

  try {
    const to = "contato@institutomarthamendes.com.br";
    const bcc = "matheus.farsetti@gmail.com";
    const subject = `Novo interesse em curso: ${input.data.courseSlug}`;
    const text = [
      "Novo formulário de interesse recebido.",
      "",
      `Curso (slug): ${input.data.courseSlug}`,
      `Nome: ${input.data.name}`,
      `E-mail: ${input.data.email}`,
      `Telefone: ${input.data.phone}`,
      `Mensagem: ${input.data.message ?? ""}`,
      "",
      "— Instituto Martha Mendes",
    ].join("\n");

    await sendMail({
      to,
      bcc,
      subject,
      text,
      replyTo: input.data.email,
    });
  } catch (err) {
    // não bloquear o lead por falha de e-mail
    // eslint-disable-next-line no-console
    console.error("Mailer error (course-interest)", err);
  }

  return json({ ok: true });
}

