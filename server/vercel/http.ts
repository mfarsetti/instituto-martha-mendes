export function json(data: unknown, init: ResponseInit = {}): Response {
  const headers = new Headers(init.headers);
  if (!headers.has("content-type")) headers.set("content-type", "application/json; charset=utf-8");
  return new Response(JSON.stringify(data), { ...init, headers });
}

export function text(body: string, init: ResponseInit = {}): Response {
  const headers = new Headers(init.headers);
  if (!headers.has("content-type")) headers.set("content-type", "text/plain; charset=utf-8");
  return new Response(body, { ...init, headers });
}

export function methodNotAllowed(): Response {
  return text("Method Not Allowed", { status: 405 });
}

export function badRequest(code = "invalid_input", extra?: Record<string, unknown>): Response {
  return json({ error: code, ...(extra ?? {}) }, { status: 400 });
}

export function unauthorized(): Response {
  return json({ error: "unauthorized" }, { status: 401 });
}

export function notFound(): Response {
  return json({ error: "not_found" }, { status: 404 });
}

export function serverError(): Response {
  return json({ error: "server_error" }, { status: 500 });
}

