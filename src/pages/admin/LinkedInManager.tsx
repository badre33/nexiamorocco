import { useEffect, useState } from 'react';
import BackOfficeLayout from '@/components/back-office/BackOfficeLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { adminApi, type AdminPost, type LinkedInState } from '@/lib/adminApi';
import { RefreshCw, Plus, Trash2, ArrowUp, ArrowDown, ExternalLink } from 'lucide-react';

export default function LinkedInManager() {
  const { toast } = useToast();
  const [state, setState] = useState<LinkedInState | null>(null);
  const [posts, setPosts] = useState<AdminPost[]>([]);
  const [link, setLink] = useState('');
  const [busy, setBusy] = useState(false);

  const load = async () => {
    try {
      const data = await adminApi.linkedin();
      setState(data);
      setPosts(data.posts);
    } catch (error) {
      toast({ title: 'Erreur', description: error instanceof Error ? error.message : '', variant: 'destructive' });
    }
  };

  useEffect(() => {
    void load();
  }, []);

  const save = async (next: (AdminPost | string)[]) => {
    setBusy(true);
    try {
      const data = await adminApi.savePosts(next);
      setPosts(data.posts);
      setState((s) => (s ? { ...s, ...data } : s));
      toast({ title: 'Enregistré', description: 'Les posts affichés sur le site sont à jour.' });
      return true;
    } catch (error) {
      toast({ title: 'Erreur', description: error instanceof Error ? error.message : '', variant: 'destructive' });
      return false;
    } finally {
      setBusy(false);
    }
  };

  const sync = async () => {
    setBusy(true);
    try {
      const res = await adminApi.syncLinkedIn();
      if (res.ok) {
        toast({ title: 'Synchronisé', description: `${res.count ?? 0} posts récupérés depuis LinkedIn.` });
        await load();
      } else {
        toast({ title: 'Synchronisation impossible', description: res.error, variant: 'destructive' });
      }
    } finally {
      setBusy(false);
    }
  };

  const move = (i: number, d: -1 | 1) => {
    const next = [...posts];
    const j = i + d;
    if (j < 0 || j >= next.length) return;
    [next[i], next[j]] = [next[j], next[i]];
    void save(next);
  };

  return (
    <BackOfficeLayout title="Posts LinkedIn">
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="text-sm text-gray-700">
          <p>
            Synchronisation automatique (toutes les heures) :{' '}
            <strong className={state?.api_configured ? 'text-green-700' : 'text-amber-700'}>
              {state?.api_configured ? 'active' : 'en attente de l’accès API LinkedIn'}
            </strong>
          </p>
          {state?.updated_at && (
            <p className="text-xs text-gray-500 mt-1">Dernière mise à jour : {new Date(state.updated_at).toLocaleString('fr-FR')}</p>
          )}
        </div>
        <Button onClick={sync} disabled={busy || !state?.api_configured} variant="outline">
          <RefreshCw className="w-4 h-4 mr-2" /> Synchroniser maintenant
        </Button>
      </div>

      <form
        className="bg-white rounded-xl border border-gray-200 p-6 mb-6 flex gap-3"
        onSubmit={async (e) => {
          e.preventDefault();
          if (!link.trim()) return;
          if (await save([link.trim(), ...posts])) setLink('');
        }}
      >
        <Input value={link} onChange={(e) => setLink(e.target.value)} placeholder="Coller le lien d’un post LinkedIn de la page Nexia Morocco" />
        <Button type="submit" disabled={busy} className="bg-nexia-primary whitespace-nowrap">
          <Plus className="w-4 h-4 mr-2" /> Ajouter en tête
        </Button>
      </form>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        {posts.length === 0 ? (
          <p className="p-8 text-center text-gray-500 text-sm">
            Aucun post enregistré ici : le site affiche la liste intégrée par défaut.
          </p>
        ) : (
          <ul className="divide-y divide-gray-100">
            {posts.map((p, i) => (
              <li key={`${p.post_type}-${p.post_id}`} className="p-4 flex items-center justify-between gap-4">
                <a
                  href={`https://www.linkedin.com/feed/update/urn:li:${p.post_type}:${p.post_id}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-nexia-secondary hover:underline flex items-center gap-2 truncate"
                >
                  {i + 1}. urn:li:{p.post_type}:{p.post_id} <ExternalLink className="w-3 h-3" />
                </a>
                <div className="flex gap-1">
                  <Button size="icon" variant="ghost" disabled={busy || i === 0} onClick={() => move(i, -1)}>
                    <ArrowUp className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="ghost" disabled={busy || i === posts.length - 1} onClick={() => move(i, 1)}>
                    <ArrowDown className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="ghost" disabled={busy} onClick={() => void save(posts.filter((_, k) => k !== i))}>
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </BackOfficeLayout>
  );
}
