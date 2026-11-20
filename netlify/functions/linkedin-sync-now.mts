import { syncPosts } from "../lib/linkedin.mts";

// Synchronisation manuelle : POST /api/linkedin-sync avec l'en-tête x-sync-key = LINKEDIN_SYNC_KEY.
export default async (request: Request) => {
  const key = process.env.LINKEDIN_SYNC_KEY;
  if (!key || request.headers.get("x-sync-key") !== key) {
    return Response.json({ error: "Forbidden" }, { status: 403 });
  }
  return Response.json(await syncPosts());
};

export const config = { path: "/api/linkedin-sync", method: "POST" };
