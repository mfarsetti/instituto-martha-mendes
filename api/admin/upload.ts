import fs from "node:fs/promises";
import path from "node:path";

import { ensureUploadsDir, UPLOADS_DIR } from "../../server/upload";
import { requireAuth } from "../../server/vercel/auth";
import { badRequest, json } from "../../server/vercel/http";

export async function POST(request: Request) {
  const user = await requireAuth(request);
  if (user instanceof Response) return user;

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return badRequest("invalid_input");
  }

  const file = form.get("file");
  if (!(file instanceof File)) return badRequest("missing_file");

  const ext = path.extname(file.name || "").toLowerCase();
  const safeExt = ext && ext.length <= 10 ? ext : "";
  const filename = `${Date.now()}-${Math.random().toString(16).slice(2)}${safeExt}`;

  ensureUploadsDir();
  const bytes = new Uint8Array(await file.arrayBuffer());
  await fs.writeFile(path.join(UPLOADS_DIR, filename), bytes);

  return json({ url: `/api/uploads/${filename}` });
}

