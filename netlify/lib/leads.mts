import { getStore } from "@netlify/blobs";

export type LeadStatus = "new" | "in_review" | "replied" | "archived";

export type StoredLead = {
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
};

export const leadsStore = () => getStore({ name: "leads", consistency: "strong" });

export async function saveLead(lead: StoredLead) {
  await leadsStore().setJSON(lead.id, lead);
}

export async function listLeads(): Promise<StoredLead[]> {
  const s = leadsStore();
  const { blobs } = await s.list();
  const items = await Promise.all(blobs.map((b) => s.get(b.key, { type: "json" }) as Promise<StoredLead | null>));
  return items.filter((l): l is StoredLead => !!l).sort((a, b) => b.created_at.localeCompare(a.created_at));
}

export async function updateLeadStatus(id: string, status: LeadStatus) {
  const s = leadsStore();
  const lead = (await s.get(id, { type: "json" })) as StoredLead | null;
  if (!lead) return null;
  lead.status = status;
  await s.setJSON(id, lead);
  return lead;
}
