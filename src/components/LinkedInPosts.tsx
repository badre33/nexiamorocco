import { useEffect, useState } from "react";
import { useSimpleLanguage } from "@/hooks/useSimpleLanguage";
import { supabase } from "@/integrations/supabase/client";

interface LinkedInPost {
  post_id: string;
  post_type: string;
  height: number;
}

/**
 * Liste des posts LinkedIn affichés sur le site.
 *
 * Source : table `linkedin_posts` de Supabase (gérée depuis /admin/linkedin).
 * Fallback : `FALLBACK_POSTS` ci-dessous, utilisé si Supabase est indisponible
 * ou si la table est vide. Permet de ne jamais avoir une section vide.
 *
 * Pour ajouter / supprimer / réordonner les posts visibles, utiliser
 * la page admin `/admin/linkedin` (rôle admin ou collaborator).
 */
const FALLBACK_POSTS: LinkedInPost[] = [
  { post_id: "7394411157484097537", post_type: "activity", height: 600 },
  { post_id: "7395133774478409730", post_type: "activity", height: 600 },
  { post_id: "7392603637279055872", post_type: "activity", height: 600 },
  { post_id: "7339350208171962369", post_type: "ugcPost", height: 896 },
  { post_id: "7319334843929022464", post_type: "ugcPost", height: 568 },
  { post_id: "7290746116101328896", post_type: "share", height: 532 },
  { post_id: "7308097941490024450", post_type: "activity", height: 600 },
];

export default function LinkedInPosts() {
  const { t } = useSimpleLanguage();
  const [posts, setPosts] = useState<LinkedInPost[]>(FALLBACK_POSTS);

  useEffect(() => {
    const load = async () => {
      try {
        const { data, error } = await (supabase as unknown as {
          from: (t: string) => {
            select: (c: string) => {
              eq: (col: string, val: boolean) => {
                order: (c: string, o: { ascending: boolean }) => Promise<{
                  data: LinkedInPost[] | null;
                  error: { message: string } | null;
                }>;
              };
            };
          };
        })
          .from("linkedin_posts")
          .select("post_id, post_type, height")
          .eq("is_visible", true)
          .order("display_order", { ascending: true });
        if (!error && data && data.length > 0) {
          setPosts(data);
        }
        // Si error ou vide → on garde FALLBACK_POSTS
      } catch {
        // Garder le fallback en cas d'erreur réseau
      }
    };
    void load();
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-nexia-primary mb-6 font-poppins">
            {t('linkedinPosts.title')}
          </h2>
          <p className="text-nexia-primary/80 text-lg max-w-3xl mx-auto leading-relaxed font-poppins">
            {t('linkedinPosts.subtitle')}
          </p>
        </div>

        <div className="relative">
          <style dangerouslySetInnerHTML={{
            __html: `
              .scroll-container::-webkit-scrollbar { display: none; }
              .scroll-container { scrollbar-width: none; -ms-overflow-style: none; }
            `
          }} />
          <div className="flex gap-6 overflow-x-auto pb-4 scroll-container">
            {posts.map((post, index) => (
              <div
                key={post.post_id}
                className="flex-none w-80 bg-white rounded-lg shadow-professional hover:shadow-hover transition-all duration-300 overflow-hidden"
              >
                <iframe
                  src={`https://www.linkedin.com/embed/feed/update/urn:li:${post.post_type}:${post.post_id}?collapsed=1`}
                  height={Math.min(post.height, 500)}
                  width="100%"
                  frameBorder="0"
                  allowFullScreen
                  title={`Publication LinkedIn ${index + 1}`}
                  className="w-full"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.linkedin.com/company/nexia-morocco/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-nexia-secondary text-white px-8 py-3 rounded-lg font-medium hover:bg-nexia-primary transition-colors duration-200 font-poppins"
          >
            {t('linkedinPosts.viewProfile')}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
