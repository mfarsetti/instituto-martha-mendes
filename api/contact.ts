import { z } from "zod";

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
      name: z.string().min(1),
      email: z.string().email(),
      phone: z.string().optional(),
      subject: z.string().min(1),
      message: z.string().min(1),
    })
    .safeParse(body);

  if (!input.success) return badRequest();

  const to = "contato@institutomarthamendes.com.br";
  const bcc = "matheus.farsetti@gmail.com";
  const subject = `Fale Conosco: ${input.data.subject}`;
  const text = [
    "Nova mensagem de contato recebida.",
    "",
    `Nome: ${input.data.name}`,
    `E-mail: ${input.data.email}`,
    `Telefone: ${input.data.phone ?? ""}`,
    "",
    input.data.message,
    "",
    "— Instituto Martha Mendes",
  ].join("\n");

  try {
    await sendMail({
      to,
      bcc,
      subject,
      text,
      replyTo: input.data.email,
    });
    return json({ ok: true });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Mailer error (contact)", err);
    return json({ error: "email_failed" }, { status: 500 });
  }
}

