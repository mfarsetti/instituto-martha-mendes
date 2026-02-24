import { json } from "../../server/vercel/http";
import { clearSessionCookieHeaders } from "../../server/vercel/auth";

export async function POST() {
  const headers = new Headers();
  for (const c of clearSessionCookieHeaders()) headers.append("set-cookie", c);
  return json({ ok: true }, { headers });
}

