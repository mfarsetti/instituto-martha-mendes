import fs from "node:fs";
import path from "node:path";

const isVercel = Boolean(process.env.VERCEL);

// Em ambiente serverless (Vercel), o filesystem do projeto é read-only.
// O único local gravável é /tmp (não persistente entre deploys/instâncias).
export const UPLOADS_DIR = isVercel
  ? path.resolve("/tmp", "uploads")
  : path.resolve(process.cwd(), "server", "uploads");

export function ensureUploadsDir() {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}
