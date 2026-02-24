import fs from "node:fs";
import path from "node:path";

export const UPLOADS_DIR = path.resolve(process.cwd(), "server", "uploads");

export function ensureUploadsDir() {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

