import { syncPosts } from "../lib/linkedin.mts";

// Synchronisation automatique, toutes les heures.
export default async () => {
  const result = await syncPosts();
  console.log("[linkedin-sync]", JSON.stringify(result));
  return Response.json(result);
};

export const config = { schedule: "@hourly" };
