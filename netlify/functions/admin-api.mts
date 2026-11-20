import { checkPassword, clearCookie, isAuthenticated, sessionCookie } from "../lib/admin-auth.mts";
import { listLeads, updateLeadStatus, type LeadStatus } from "../lib/leads.mts";
import { store as linkedinStore, syncPosts, type StoredPost } from "../lib/linkedin.mts";

const STATUSES: LeadStatus[] = ["new", "in_review", "replied", "archived"];
const json = (body: unknown, init: ResponseInit = {}) =>
  Response.json(body, { ...init, headers: { "Cache-Control": "no-store", ...(init.headers || {}) } });

async function readBody(request: Request): Promise<Record<string, unknown>> {
  try {
    return (await request.json()) as Record<string, unknown>;
  } catch {
    return {};
  }
}

// Extrait l'URN d'un lien ou identifiant de post LinkedIn (activity, ugcPost, share).
function parsePost(input: string): { post_type: string; post_id: string } | null {
  const urn = input.match(/urn:li:(activity|ugcPost|share):(\d{10,})/);
  if (urn) return { post_type: urn[1], post_id: urn[2] };
  const slug = input.match(/(activity|ugcPost|share)[-:](\d{10,})/);
  if (slug) return { post_type: slug[1], post_id: slug[2] };
  const bare = input.match(/^\d{10,}$/);
  if (bare) return { post_type: "activity", post_id: bare[0] };
  return null;
}

async function readPosts(): Promise<{ updated_at: string | null; posts: StoredPost[] }> {
  const data = (await linkedinStore().get("posts", { type: "json" })) as { updated_at?: string; posts?: StoredPost[] } | null;
  return { updated_at: data?.updated_at ?? null, posts: data?.posts ?? [] };
}

export default async (request: Request) => {
  const url = new URL(request.url);
  const route = url.pathname.replace(/^\/api\/admin\/?/, "").replace(/\/$/, "");
  const method = request.method;

  if (route === "login" && method === "POST") {
    if (!process.env.ADMIN_PASSWORD) return json({ error: "Back-office non configuré" }, { status: 503 });
    const { password } = await readBody(request);
    if (typeof password !== "string" || !checkPassword(password)) {
      await new Promise((r) => setTimeout(r, 800));
      return json({ error: "Mot de passe incorrect" }, { status: 401 });
    }
    return json({ ok: true }, { headers: { "Set-Cookie": sessionCookie() } });
  }

  if (route === "logout" && method === "POST") {
    return json({ ok: true }, { headers: { "Set-Cookie": clearCookie() } });
  }

  if (!isAuthenticated(request)) return json({ error: "Non autorisé" }, { status: 401 });

  if (route === "me" && method === "GET") return json({ ok: true });

  if (route === "leads" && method === "GET") return json(await listLeads());

  const leadMatch = route.match(/^leads\/([\w.-]+)$/);
  if (leadMatch && method === "PATCH") {
    const { status } = await readBody(request);
    if (!STATUSES.includes(status as LeadStatus)) return json({ error: "Statut invalide" }, { status: 422 });
    const lead = await updateLeadStatus(leadMatch[1], status as LeadStatus);
    return lead ? json(lead) : json({ error: "Introuvable" }, { status: 404 });
  }

  if (route === "linkedin" && method === "GET") {
    const data = await readPosts();
    const apiConfigured = !!(process.env.LINKEDIN_ACCESS_TOKEN || process.env.LINKEDIN_REFRESH_TOKEN || (await linkedinStore().get("access_token")));
    return json({ ...data, api_configured: apiConfigured });
  }

  if (route === "linkedin/sync" && method === "POST") return json(await syncPosts());

  if (route === "linkedin/posts" && method === "PUT") {
    const { posts } = await readBody(request);
    if (!Array.isArray(posts)) return json({ error: "Liste invalide" }, { status: 422 });
    const clean: StoredPost[] = [];
    for (const p of posts.slice(0, 12)) {
      const raw = typeof p === "string" ? p : `urn:li:${(p as StoredPost).post_type}:${(p as StoredPost).post_id}`;
      const parsed = parsePost(raw.trim());
      if (!parsed) return json({ error: `Lien non reconnu : ${raw}` }, { status: 422 });
      const height = typeof p === "object" && p && Number((p as StoredPost).height) > 0 ? Number((p as StoredPost).height) : 600;
      clean.push({ ...parsed, height });
    }
    const data = { updated_at: new Date().toISOString(), posts: clean };
    await linkedinStore().setJSON("posts", data);
    return json(data);
  }

  return json({ error: "Not found" }, { status: 404 });
};

export const config = { path: ["/api/admin", "/api/admin/*"] };
