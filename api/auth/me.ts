import { json } from "../../server/vercel/http";
import { requireAuth } from "../../server/vercel/auth";

export async function GET(request: Request) {
  const user = await requireAuth(request);
  if (user instanceof Response) return user;
  return json({ user });
}

