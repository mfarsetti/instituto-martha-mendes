import nodemailer from "nodemailer";

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing env var: ${name}`);
  return value;
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

  await transporter.sendMail({
    from,
    to: params.to,
    bcc: params.bcc,
    replyTo: params.replyTo,
    subject: params.subject,
    text: params.text,
    html: params.html,
  });
}

