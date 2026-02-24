import app from "../server/app";

export default function handler(req: { url?: string }, res: unknown) {
  // Em algumas configurações o path pode chegar sem o prefixo "/api"
  // mesmo sendo invocado via rota /api/*.
  if (req.url && !req.url.startsWith("/api")) {
    req.url = `/api${req.url.startsWith("/") ? "" : "/"}${req.url}`;
  }
  return (app as unknown as (req: unknown, res: unknown) => unknown)(req, res);
}

