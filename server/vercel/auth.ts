import jwt from "jsonwebtoken";

import { prisma } from "../prisma";
import { requireEnv } from "../env";
import { parseCookies, serializeCookie } from "./cookies";
import { unauthorized } from "./http";

const COOKIE_NAME = "imm_session";
const JWT_SECRET = requireEnv("JWT_SECRET");

export type AuthedUser = {
  id: string;
  email: string;
  name: string;
  role: "admin" | "editor" | "viewer" | string;
};

export function setSessionCookieHeaders(userId: string): string[] {
  const token = jwt.sign({ sub: userId }, JWT_SECRET, { expiresIn: "7d" });
  const secure = process.env.NODE_ENV === "production";
  const cookie = serializeCookie(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure,
    path: "/",
    maxAge: 7 * 24 * 60 * 60,
  });
  return [cookie];
}

export function clearSessionCookieHeaders(): string[] {
  const secure = process.env.NODE_ENV === "production";
  const cookie = serializeCookie(COOKIE_NAME, "", {
    httpOnly: true,
    sameSite: "lax",
    secure,
    path: "/",
    maxAge: 0,
  });
  return [cookie];
}

export async function getUserFromRequest(request: Request): Promise<AuthedUser | null> {
  const cookies = parseCookies(request.headers.get("cookie"));
  const token = cookies[COOKIE_NAME];
  if (!token) return null;

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { sub?: string };
    const userId = decoded.sub;
    if (!userId) return null;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, email: true, name: true, role: true },
    });
    return user ?? null;
  } catch {
    return null;
  }
}

export async function requireAuth(request: Request): Promise<AuthedUser | Response> {
  const user = await getUserFromRequest(request);
  if (!user) return unauthorized();
  return user;
}

