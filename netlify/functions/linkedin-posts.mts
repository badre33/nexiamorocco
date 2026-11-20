import { store } from "../lib/linkedin.mts";

// Liste publique des dernières publications LinkedIn affichées sur le site.
export default async () => {
  const data = (await store().get("posts", { type: "json" })) as { posts?: unknown[] } | null;
  return Response.json(data?.posts || [], {
    headers: { "Cache-Control": "public, max-age=300" },
  });
};

export const config = { path: "/api/linkedin-posts", method: "GET" };
