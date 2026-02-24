import { json } from "../server/vercel/http";

export function GET() {
  return json({ ok: true });
}

