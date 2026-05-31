import { useEffect, useState } from 'react';
import BackOfficeLayout from '@/components/back-office/BackOfficeLayout';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Linkedin, Plus, Trash2, Eye, EyeOff, ArrowUp, ArrowDown } from 'lucide-react';

interface LinkedInPost {
  id: string;
  post_id: string;
  post_type: string;
  height: number;
  display_order: number;
  is_visible: boolean;
  created_at: string;
}

const POST_TYPES = ['activity', 'ugcPost', 'share'] as const;

export default function LinkedInManager() {
  const { toast } = useToast();
  const [posts, setPosts] = useState<LinkedInPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [postId, setPostId] = useState('');
  const [postType, setPostType] = useState<typeof POST_TYPES[number]>('activity');
  const [height, setHeight] = useState('600');
  const [submitting, setSubmitting] = useState(false);

  const load = async () => {
    setLoading(true);
    const { data, error } = await (supabase as unknown as {
      from: (t: string) => {
        select: (c: string) => {
          order: (c: string, o: { ascending: boolean }) => Promise<{
            data: LinkedInPost[] | null;
            error: { message: string } | null;
          }>;
        };
      };
    })
      .from('linkedin_posts')
      .select('*')
      .order('display_order', { ascending: true });
    if (error) {
      toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
    } else {
      setPosts(data ?? []);
    }
    setLoading(false);
  };

  useEffect(() => {
    void load();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const maxOrder = posts.length > 0 ? Math.max(...posts.map((p) => p.display_order)) : 0;
    const { error } = await (supabase as unknown as {
      from: (t: string) => { insert: (v: object) => Promise<{ error: { message: string } | null }> };
    })
      .from('linkedin_posts')
      .insert({
        post_id: postId.trim(),
        post_type: postType,
        height: parseInt(height, 10) || 600,
        display_order: maxOrder + 1,
        is_visible: true,
      });
    setSubmitting(false);
    if (error) {
      toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
      return;
    }
    toast({ title: 'Post ajouté', description: 'Visible immédiatement sur le site public.' });
    setPostId('');
    setHeight('600');
    setShowForm(false);
    void load();
  };

  const updatePost = async (id: string, patch: Partial<LinkedInPost>) => {
    const { error } = await (supabase as unknown as {
      from: (t: string) => {
        update: (v: object) => { eq: (c: string, v: string) => Promise<{ error: { message: string } | null }> };
      };
    })
      .from('linkedin_posts')
      .update(patch)
      .eq('id', id);
    if (error) {
      toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
    } else {
      void load();
    }
  };

  const deletePost = async (id: string) => {
    if (!confirm('Supprimer ce post de la liste ?')) return;
    const { error } = await (supabase as unknown as {
      from: (t: string) => {
        delete: () => { eq: (c: string, v: string) => Promise<{ error: { message: string } | null }> };
      };
    })
      .from('linkedin_posts')
      .delete()
      .eq('id', id);
    if (error) {
      toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Post supprimé' });
      void load();
    }
  };

  const moveUp = async (idx: number) => {
    if (idx === 0) return;
    const current = posts[idx];
    const prev = posts[idx - 1];
    await updatePost(current.id, { display_order: prev.display_order });
    await updatePost(prev.id, { display_order: current.display_order });
  };

  const moveDown = async (idx: number) => {
    if (idx === posts.length - 1) return;
    const current = posts[idx];
    const next = posts[idx + 1];
    await updatePost(current.id, { display_order: next.display_order });
    await updatePost(next.id, { display_order: current.display_order });
  };

  return (
    <BackOfficeLayout title="Posts LinkedIn">
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-gray-600 max-w-2xl">
          Liste des posts LinkedIn affichés sur le site public. Pour ajouter un post,
          copier l'ID dans l'URL d'un post (ex. <code className="bg-gray-100 px-1 rounded">…activity-<strong>7394411157484097537</strong>-…</code>)
          et coller ci-dessous.
        </p>
        <Button onClick={() => setShowForm((s) => !s)} className="bg-nexia-primary">
          <Plus className="w-4 h-4 mr-2" /> Ajouter un post
        </Button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 p-6 mb-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="post_id">ID du post LinkedIn *</Label>
              <Input
                id="post_id"
                value={postId}
                onChange={(e) => setPostId(e.target.value)}
                placeholder="ex: 7394411157484097537"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="post_type">Type</Label>
              <select
                id="post_type"
                value={postType}
                onChange={(e) => setPostType(e.target.value as typeof POST_TYPES[number])}
                className="w-full h-10 px-3 border border-gray-300 rounded-md text-sm"
              >
                {POST_TYPES.map((tp) => (
                  <option key={tp} value={tp}>{tp}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="height">Hauteur (px) — laisser 600 par défaut</Label>
            <Input
              id="height"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              min={300}
              max={1200}
            />
          </div>
          <div className="flex gap-2 justify-end">
            <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
              Annuler
            </Button>
            <Button type="submit" disabled={submitting} className="bg-nexia-primary">
              {submitting ? 'Ajout…' : 'Ajouter'}
            </Button>
          </div>
        </form>
      )}

      {loading ? (
        <p className="text-gray-500">Chargement…</p>
      ) : posts.length === 0 ? (
        <div className="bg-white rounded-xl border border-dashed border-gray-300 p-12 text-center text-gray-500">
          <Linkedin className="w-10 h-10 mx-auto mb-3 text-gray-300" />
          <p>Aucun post LinkedIn enregistré.</p>
          <p className="text-xs mt-1">La section publique affichera la liste de secours (FALLBACK_POSTS).</p>
        </div>
      ) : (
        <ul className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100">
          {posts.map((post, idx) => (
            <li key={post.id} className="p-4 flex items-center justify-between gap-4 hover:bg-gray-50">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm text-gray-900 truncate">{post.post_id}</span>
                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-nexia-secondary/15 text-nexia-primary font-semibold">
                    {post.post_type}
                  </span>
                  {!post.is_visible && (
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-gray-200 text-gray-600 font-semibold">
                      caché
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Ordre : {post.display_order} · Hauteur : {post.height}px
                </p>
              </div>
              <div className="flex items-center gap-1">
                <Button size="sm" variant="outline" onClick={() => moveUp(idx)} disabled={idx === 0}>
                  <ArrowUp className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" onClick={() => moveDown(idx)} disabled={idx === posts.length - 1}>
                  <ArrowDown className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => updatePost(post.id, { is_visible: !post.is_visible })}
                >
                  {post.is_visible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
                <Button size="sm" variant="outline" onClick={() => deletePost(post.id)} className="text-red-600 hover:text-red-700">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </BackOfficeLayout>
  );
}
