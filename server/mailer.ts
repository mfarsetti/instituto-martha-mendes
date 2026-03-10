import nodemailer from "nodemailer";

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing env var: ${name}`);
  return value;
}

function getOptionalEnv(name: string): string | undefined {
  const value = process.env[name]?.trim();
  return value ? value : undefined;
}

function getTransport() {
  const host = requireEnv("SMTP_HOST");
  const port = Number(requireEnv("SMTP_PORT"));
  const secure = (process.env.SMTP_SECURE ?? "false").toLowerCase() === "true";
  const user = requireEnv("SMTP_USER");
  const pass = requireEnv("SMTP_PASS");

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}

export async function sendMail(params: {
  to: string;
  bcc?: string;
  subject: string;
  text: string;
  html?: string;
  replyTo?: string;
}) {
  const transporter = getTransport();
  const from = requireEnv("SMTP_FROM");

  return transporter.sendMail({
    from,
    to: params.to,
    bcc: params.bcc,
    replyTo: params.replyTo,
    subject: params.subject,
    text: params.text,
    html: params.html,
  });
}

const DEFAULT_COURSE_LEADS_TO = "contato@institutomarthamendes.com.br";

export function getCourseLeadRecipients() {
  return {
    to: getOptionalEnv("COURSE_LEADS_TO") ?? DEFAULT_COURSE_LEADS_TO,
    bcc: getOptionalEnv("MAIL_BCC"),
  };
}

export function buildCourseInterestMail(input: {
  courseSlug: string;
  name: string;
  email: string;
  phone: string;
  message?: string | null;
}) {
  return {
    subject: `Novo interesse em curso: ${input.courseSlug}`,
    text: [
      "Novo formulário de interesse recebido.",
      "",
      `Curso (slug): ${input.courseSlug}`,
      `Nome: ${input.name}`,
      `E-mail: ${input.email}`,
      `Telefone: ${input.phone}`,
      `Mensagem: ${input.message ?? ""}`,
      "",
      "— Instituto Martha Mendes",
    ].join("\n"),
  };
}

