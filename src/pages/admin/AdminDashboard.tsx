import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BackOfficeLayout from '@/components/back-office/BackOfficeLayout';
import { adminApi, type Lead, type LinkedInState } from '@/lib/adminApi';
import { Inbox, Clock, CalendarDays, Linkedin } from 'lucide-react';

function sourceOf(lead: Lead) {
  try {
    const a = JSON.parse(lead.notes) as { source?: string; medium?: string };
    return a.source ? `${a.source} / ${a.medium ?? ''}`.trim() : 'direct';
  } catch {
    return 'direct';
  }
}

export default function AdminDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [linkedin, setLinkedin] = useState<LinkedInState | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([adminApi.leads(), adminApi.linkedin()])
      .then(([l, li]) => {
        setLeads(l);
        setLinkedin(li);
      })
      .catch(() => undefined)
      .finally(() => setLoading(false));
  }, []);

  const since30 = Date.now() - 30 * 86_400_000;
  const recent = leads.filter((l) => new Date(l.created_at).getTime() > since30);
  const fresh = leads.filter((l) => l.status === 'new');
  const sources = Object.entries(
    recent.reduce<Record<string, number>>((acc, l) => {
      const k = sourceOf(l);
      acc[k] = (acc[k] ?? 0) + 1;
      return acc;
    }, {}),
  ).sort((a, b) => b[1] - a[1]);
  const services = Object.entries(
    recent.reduce<Record<string, number>>((acc, l) => {
      const k = l.service || 'À qualifier';
      acc[k] = (acc[k] ?? 0) + 1;
      return acc;
    }, {}),
  ).sort((a, b) => b[1] - a[1]);

  return (
    <BackOfficeLayout title="Tableau de bord">
      {loading ? (
        <div className="text-gray-500">Chargement…</div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard label="Leads à traiter" value={fresh.length} icon={<Clock className="w-5 h-5" />} to="/admin/contacts" />
            <StatCard label="Leads (30 jours)" value={recent.length} icon={<CalendarDays className="w-5 h-5" />} to="/admin/contacts" />
            <StatCard label="Leads (total)" value={leads.length} icon={<Inbox className="w-5 h-5" />} to="/admin/contacts" />
            <StatCard label="Posts LinkedIn affichés" value={linkedin?.posts.length ?? 0} icon={<Linkedin className="w-5 h-5" />} to="/admin/linkedin" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            <Breakdown title="Sources des leads (30 jours)" rows={sources} />
            <Breakdown title="Services demandés (30 jours)" rows={services} />
          </div>
        </>
      )}
    </BackOfficeLayout>
  );
}

function Breakdown({ title, rows }: { title: string; rows: [string, number][] }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="font-semibold text-gray-900 mb-4">{title}</h3>
      {rows.length === 0 ? (
        <p className="text-sm text-gray-500">Aucune donnée pour le moment.</p>
      ) : (
        <ul className="space-y-2 text-sm">
          {rows.map(([k, v]) => (
            <li key={k} className="flex justify-between gap-4">
              <span className="text-gray-700 truncate">{k}</span>
              <strong className="text-nexia-primary">{v}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function StatCard({ label, value, icon, to }: { label: string; value: number; icon: React.ReactNode; to: string }) {
  return (
    <Link to={to} className="bg-white rounded-xl border border-gray-200 p-5 hover:border-nexia-secondary hover:shadow-sm transition-all">
      <div className="flex items-center justify-between text-gray-500 mb-2">
        <span className="text-xs uppercase tracking-wider font-semibold">{label}</span>
        <span className="text-nexia-secondary">{icon}</span>
      </div>
      <div className="text-3xl font-bold text-nexia-primary">{value}</div>
    </Link>
  );
}
