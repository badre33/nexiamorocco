export type LeadStatus = 'new' | 'in_review' | 'replied' | 'archived';

export interface Lead {
  id: string;
  created_at: string;
  status: LeadStatus;
  first_name: string;
  last_name: string;
  email: string;
  company: string;
  country_code: string;
  phone: string;
  service: string;
  client_profile: string;
  project_stage: string;
  message: string;
  notes: string;
}

export interface AdminPost {
  post_id: string;
  post_type: string;
  height: number;
}

export interface LinkedInState {
  updated_at: string | null;
  posts: AdminPost[];
  api_configured: boolean;
}

export class UnauthorizedError extends Error {}

async function call<T>(path: string, init: RequestInit = {}): Promise<T> {
  const res = await fetch(`/api/admin/${path}`, {
    credentials: 'same-origin',
    ...init,
    headers: { 'Content-Type': 'application/json', ...(init.headers || {}) },
  });
  if (res.status === 401) throw new UnauthorizedError('Session expirée');
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error((data as { error?: string }).error || `Erreur ${res.status}`);
  return data as T;
}

export const adminApi = {
  login: (password: string) => call<{ ok: true }>('login', { method: 'POST', body: JSON.stringify({ password }) }),
  logout: () => call<{ ok: true }>('logout', { method: 'POST' }),
  me: () => call<{ ok: true }>('me'),
  leads: () => call<Lead[]>('leads'),
  setLeadStatus: (id: string, status: LeadStatus) =>
    call<Lead>(`leads/${encodeURIComponent(id)}`, { method: 'PATCH', body: JSON.stringify({ status }) }),
  linkedin: () => call<LinkedInState>('linkedin'),
  syncLinkedIn: () => call<{ ok: boolean; count?: number; error?: string }>('linkedin/sync', { method: 'POST' }),
  savePosts: (posts: (AdminPost | string)[]) =>
    call<{ updated_at: string; posts: AdminPost[] }>('linkedin/posts', { method: 'PUT', body: JSON.stringify({ posts }) }),
};
