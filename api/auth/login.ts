import bcrypt from "bcrypt";
import { z } from "zod";

import { prisma } from "../../server/prisma";
import { json, badRequest } from "../../server/vercel/http";
import { setSessionCookieHeaders } from "../../server/vercel/auth";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return badRequest();
  }

  const input = z
    .object({
      email: z.string().email(),
      password: z.string().min(1),
    })
    .safeParse(body);

  if (!input.success) return badRequest();

  const user = await prisma.user.findUnique({
    where: { email: input.data.email.toLowerCase() },
  });
  if (!user) return json({ error: "invalid_credentials" }, { status: 401 });

  const ok = await bcrypt.compare(input.data.password, user.passwordHash);
  if (!ok) return json({ error: "invalid_credentials" }, { status: 401 });

  const headers = new Headers();
  for (const c of setSessionCookieHeaders(user.id)) headers.append("set-cookie", c);

  return json(
    { user: { id: user.id, email: user.email, name: user.name, role: user.role } },
    { headers },
  );
}

