import { getStore } from "@netlify/blobs";

export type StoredPost = { post_id: string; post_type: string; height: number; published_at?: number };

const STORE = "linkedin";
const ORG_ID = process.env.LINKEDIN_ORG_ID || "91059730"; // page LinkedIn Nexia Morocco
const MAX_POSTS = 7;

export const store = () => getStore(STORE);

// LinkedIn REST exige un en-tête de version AAAAMM ; on prend le mois courant moins 2.
function apiVersion() {
  if (process.env.LINKEDIN_API_VERSION) return process.env.LINKEDIN_API_VERSION;
  const d = new Date();
  d.setUTCMonth(d.getUTCMonth() - 2);
  return `${d.getUTCFullYear()}${String(d.getUTCMonth() + 1).padStart(2, "0")}`;
}

async function refreshAccessToken(): Promise<string | null> {
  const s = store();
  const refresh = (await s.get("refresh_token")) || process.env.LINKEDIN_REFRESH_TOKEN;
  const id = process.env.LINKEDIN_CLIENT_ID;
  const secret = process.env.LINKEDIN_CLIENT_SECRET;
  if (!refresh || !id || !secret) return null;
  const res = await fetch("https://www.linkedin.com/oauth/v2/accessToken", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "refresh_token", refresh_token: refresh, client_id: id, client_secret: secret }),
  });
  if (!res.ok) return null;
  const json = (await res.json()) as { access_token?: string; refresh_token?: string };
  if (!json.access_token) return null;
  await s.set("access_token", json.access_token);
  if (json.refresh_token) await s.set("refresh_token", json.refresh_token);
  return json.access_token;
}

async function accessToken(): Promise<string | null> {
  return (await store().get("access_token")) || process.env.LINKEDIN_ACCESS_TOKEN || null;
}

async function callPosts(token: string) {
  const url = `https://api.linkedin.com/rest/posts?q=author&author=${encodeURIComponent(`urn:li:organization:${ORG_ID}`)}&count=20&sortBy=LAST_MODIFIED`;
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      "LinkedIn-Version": apiVersion(),
      "X-Restli-Protocol-Version": "2.0.0",
    },
  });
}

/** Récupère les dernières publications de la page et les enregistre. */
export async function syncPosts(): Promise<{ ok: boolean; count?: number; error?: string }> {
  let token = await accessToken();
  if (!token) token = await refreshAccessToken();
  if (!token) return { ok: false, error: "Aucun jeton LinkedIn configuré" };

  let res = await callPosts(token);
  if (res.status === 401) {
    const fresh = await refreshAccessToken();
    if (fresh) res = await callPosts(fresh);
  }
  if (!res.ok) return { ok: false, error: `LinkedIn ${res.status}: ${(await res.text()).slice(0, 300)}` };

  const json = (await res.json()) as { elements?: Array<Record<string, unknown>> };
  const posts: StoredPost[] = (json.elements || [])
    .filter((p) => p.lifecycleState === "PUBLISHED" && (p.visibility === "PUBLIC" || !p.visibility) && !p.reshareContext)
    .map((p) => {
      const urn = String(p.id || ""); // urn:li:share:123 ou urn:li:ugcPost:123
      const [, , type, id] = urn.split(":");
      return { post_id: id, post_type: type, height: 600, published_at: Number(p.publishedAt || p.createdAt || 0) };
    })
    .filter((p) => p.post_id && p.post_type)
    .sort((a, b) => (b.published_at || 0) - (a.published_at || 0))
    .slice(0, MAX_POSTS);

  if (posts.length === 0) return { ok: false, error: "Aucune publication renvoyée" };
  await store().setJSON("posts", { updated_at: new Date().toISOString(), posts });
  return { ok: true, count: posts.length };
}
