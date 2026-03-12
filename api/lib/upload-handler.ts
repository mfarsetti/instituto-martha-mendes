import path from "node:path";
import fs from "node:fs/promises";

import { put } from "@vercel/blob";

import { UPLOADS_DIR } from "./upload.js";

const BLOB_TOKEN = process.env.BLOB_READ_WRITE_TOKEN;
const IS_VERCEL = Boolean(process.env.VERCEL);

/**
 * Faz upload de um arquivo. Em produção (Vercel) usa Blob Storage persistente.
 * Em desenvolvimento local, usa disco (server/uploads).
 */
export async function uploadFile(
  buffer: Buffer,
  originalFilename: string,
  contentType: string
): Promise<{ url: string }> {
  const ext = path.extname(originalFilename || "").toLowerCase();
  const safeExt = ext && ext.length <= 10 ? ext : ".bin";
  const pathname = `uploads/${Date.now()}-${Math.random().toString(16).slice(2)}${safeExt}`;

  if (BLOB_TOKEN) {
    const blob = await put(pathname, buffer, {
      access: "public",
      addRandomSuffix: true,
      contentType: contentType || undefined,
    });
    return { url: blob.url };
  }

  if (IS_VERCEL) {
    throw new Error(
      "BLOB_READ_WRITE_TOKEN não configurado. Crie um Blob Store no Vercel Dashboard (Storage) e adicione a variável de ambiente."
    );
  }

  await fs.mkdir(UPLOADS_DIR, { recursive: true });
  const filename = `${Date.now()}-${Math.random().toString(16).slice(2)}${safeExt}`;
  const filePath = path.join(UPLOADS_DIR, filename);
  await fs.writeFile(filePath, buffer);
  return { url: `/api/uploads/${filename}` };
}
