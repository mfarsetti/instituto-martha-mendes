import fs from "node:fs/promises";
import path from "node:path";

import { UPLOADS_DIR } from "../../server/upload";
import { notFound } from "../../server/vercel/http";

function contentTypeFromExt(ext: string): string {
  switch (ext) {
    case ".png":
      return "image/png";
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".webp":
      return "image/webp";
    default:
      return "application/octet-stream";
  }
}

function getLastPathSegment(request: Request): string | null {
  const url = new URL(request.url);
  const parts = url.pathname.split("/").filter(Boolean);
  const last = parts.at(-1);
  return last ? decodeURIComponent(last) : null;
}

export async function GET(request: Request) {
  const filename = getLastPathSegment(request);
  if (!filename) return notFound();

  const filePath = path.join(UPLOADS_DIR, filename);
  try {
    const buf = await fs.readFile(filePath);
    const ext = path.extname(filename).toLowerCase();
    return new Response(buf, {
      headers: {
        "content-type": contentTypeFromExt(ext),
        "cache-control": "public, max-age=604800",
      },
    });
  } catch {
    return notFound();
  }
}

