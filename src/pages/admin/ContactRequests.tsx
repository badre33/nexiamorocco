import { useEffect, useState } from 'react';
import BackOfficeLayout from '@/components/back-office/BackOfficeLayout';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, Building2, Calendar } from 'lucide-react';
import type { LeadAttribution } from '@/lib/analytics';

interface ContactRequest {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  company: string | null;
  country_code: string | null;
  phone: string | null;
  service: string | null;
  message: string;
  status: string;
  notes: string | null;
  created_at: string;
}

const STATUS_LABELS: Record<string, { label: string; color: string }> = {
  new: { label: 'Nouveau', color: 'bg-blue-100 text-blue-700' },
  in_review: { label: 'En cours', color: 'bg-yellow-100 text-yellow-700' },
  replied: { label: 'Répondu', color: 'bg-green-100 text-green-700' },
  archived: { label: 'Archivé', color: 'bg-gray-100 text-gray-600' },
};

function parseAttribution(notes: string | null): LeadAttribution | null {
  if (!notes) return null;
  try {
    const value = JSON.parse(notes) as LeadAttribution;
    return value.type === 'lead_attribution_v1' ? value : null;
  } catch {
    return null;
  }
}

function leadAge(createdAt: string) {
  const hours = Math.max(0, Math.floor((Date.now() - new Date(createdAt).getTime()) / 3_600_000));
  if (hours < 1) return "Moins d’une heure";
  if (hours < 24) return `${hours} h`;
  return `${Math.floor(hours / 24)} j`;
}

function isLeadOverdue(request: ContactRequest) {
  return request.status === 'new' && Date.now() - new Date(request.created_at).getTime() > 4 * 3_600_000;
}

export default function ContactRequests() {
  const { toast } = useToast();
  const [requests, setRequests] = useState<ContactRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    const { data, error } = await (supabase as unknown as {
      from: (t: string) => {
        select: (c: string) => {
          order: (c: string, o: { ascending: boolean }) => Promise<{
            data: ContactRequest[] | null;
            error: { message: string } | null;
          }>;
        };
      };
    })
      .from('contact_requests')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) {
      toast({ title: 'Erreur de chargement', description: error.message, variant: 'destructive' });
    } else {
      setRequests(data ?? []);
    }
    setLoading(false);
  };

  useEffect(() => {
    void load();
  }, []);

  const updateStatus = async (id: string, status: string) => {
    const { error } = await (supabase as unknown as {
      from: (t: string) => {
        update: (v: object) => { eq: (c: string, v: string) => Promise<{ error: { message: string } | null }> };
      };
    })
      .from('contact_requests')
      .update({ status })
      .eq('id', id);
    if (error) {
      toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Mis à jour', description: 'Statut modifié.' });
      void load();
    }
  };

  const selected = requests.find((r) => r.id === selectedId);
  const selectedAttribution = selected ? parseAttribution(selected.notes) : null;

  return (
    <BackOfficeLayout title="Demandes de contact">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Liste */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 overflow-hidden">
          {loading ? (
            <div className="p-8 text-center text-gray-500">Chargement…</div>
          ) : requests.length === 0 ? (
            <div className="p-8 text-center text-gray-500">Aucune demande pour le moment.</div>
          ) : (
            <ul className="divide-y divide-gray-100">
              {requests.map((r) => {
                const status = STATUS_LABELS[r.status] ?? STATUS_LABELS.new;
                return (
                  <li
                    key={r.id}
                    onClick={() => setSelectedId(r.id)}
                    className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                      selectedId === r.id ? 'bg-nexia-secondary/5 border-l-4 border-nexia-secondary' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="font-semibold text-gray-900 truncate">
                          {r.first_name} {r.last_name}
                        </p>
                        <p className="text-sm text-gray-500 truncate">{r.email}</p>
                        {r.company && (
                          <p className="text-xs text-gray-400 truncate">{r.company}</p>
                        )}
                      </div>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-semibold whitespace-nowrap ${status.color}`}
                      >
                        {status.label}
                      </span>
                    </div>
                    <p className={`text-xs mt-1 ${isLeadOverdue(r) ? 'font-semibold text-red-600' : 'text-gray-400'}`}>
                      {new Date(r.created_at).toLocaleString('fr-FR')} · {leadAge(r.created_at)}
                      {isLeadOverdue(r) ? ' · À traiter' : ''}
                    </p>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Détail */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 h-fit sticky top-6">
          {!selected ? (
            <p className="text-gray-500 text-sm">Sélectionnez une demande pour voir les détails.</p>
          ) : (
            <>
              <h3 className="font-semibold text-gray-900 mb-1">
                {selected.first_name} {selected.last_name}
              </h3>
              <div className="space-y-2 text-sm text-gray-700 mb-4">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-nexia-secondary" />
                  <a href={`mailto:${selected.email}`} className="text-nexia-secondary hover:underline">
                    {selected.email}
                  </a>
                </p>
                {selected.phone && (
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-nexia-secondary" />
                    <a href={`tel:${selected.country_code ?? ''}${selected.phone.replace(/\s/g, '')}`} className="text-nexia-secondary hover:underline">
                      {selected.country_code} {selected.phone}
                    </a>
                  </p>
                )}
                {selected.company && (
                  <p className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-nexia-secondary" /> {selected.company}
                  </p>
                )}
                <p className="flex items-center gap-2 text-xs text-gray-500">
                  <Calendar className="w-4 h-4" />
                  {new Date(selected.created_at).toLocaleString('fr-FR')}
                </p>
                {selected.service && (
                  <p className="text-xs">
                    Service&nbsp;: <strong className="text-gray-900">{selected.service}</strong>
                  </p>
                )}
              </div>
              <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-800 whitespace-pre-wrap mb-4">
                {selected.message}
              </div>
              {selectedAttribution && (
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 text-xs text-blue-900 mb-4 space-y-1">
                  <p className="font-semibold uppercase tracking-wide">Acquisition</p>
                  <p>Source : <strong>{selectedAttribution.source}</strong> / {selectedAttribution.medium}</p>
                  {selectedAttribution.campaign && <p>Campagne : {selectedAttribution.campaign}</p>}
                  <p className="break-all">Page d’entrée : {selectedAttribution.landing_page || 'Non disponible'}</p>
                  {selectedAttribution.referrer && <p className="break-all">Référent : {selectedAttribution.referrer}</p>}
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                {selected.email && (
                  <Button asChild size="sm" className="bg-nexia-primary">
                    <a href={`mailto:${selected.email}?subject=Votre demande — Nexia Morocco`}>Répondre par email</a>
                  </Button>
                )}
                {selected.phone && (
                  <Button asChild size="sm" variant="outline">
                    <a
                      href={`https://wa.me/${`${selected.country_code ?? ''}${selected.phone}`.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Répondre sur WhatsApp
                    </a>
                  </Button>
                )}
              </div>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Statut</p>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(STATUS_LABELS).map(([key, val]) => (
                    <Button
                      key={key}
                      size="sm"
                      variant={selected.status === key ? 'default' : 'outline'}
                      onClick={() => updateStatus(selected.id, key)}
                      className={selected.status === key ? 'bg-nexia-primary' : ''}
                    >
                      {val.label}
                    </Button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </BackOfficeLayout>
  );
}
