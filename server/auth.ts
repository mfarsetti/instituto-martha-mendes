import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import type { Response, Request, NextFunction } from "express";

import { prisma } from "./prisma";
import { requireEnv } from "./env";

const COOKIE_NAME = "imm_session";
const JWT_SECRET = requireEnv("JWT_SECRET");

type JwtPayload = {
  sub: string;
};

export async function verifyPassword(
  password: string,
  passwordHash: string,
): Promise<boolean> {
  return bcrypt.compare(password, passwordHash);
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

export function setSessionCookie(res: Response, userId: string) {
  const token = jwt.sign({ sub: userId } satisfies JwtPayload, JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
}

export function clearSessionCookie(res: Response) {
  res.clearCookie(COOKIE_NAME, { path: "/" });
}

export async function authOptional(req: Request, _res: Response, next: NextFunction) {
  const token = req.cookies?.[COOKIE_NAME];
  if (!token) return next();

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    const userId = decoded.sub;
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, email: true, name: true, role: true },
    });
    if (user) req.user = user;
  } catch {
    // ignore invalid token
  }

  next();
}

export function authRequired(req: Request, res: Response, next: NextFunction) {
  if (!req.user) return res.status(401).json({ error: "unauthorized" });
  next();
}

