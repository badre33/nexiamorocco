import { useEffect, useState } from "react";
import { Linkedin, ExternalLink } from "lucide-react";
import { useSimpleLanguage } from "@/hooks/useSimpleLanguage";

interface LinkedInPost {
  post_id: string;
  post_type: string;
  height: number;
}

/**
 * Liste des posts LinkedIn affichés sur le site.
 *
 * Source primaire : /api/linkedin-posts (fonction Netlify), alimentée chaque heure
 * par l'API LinkedIn (netlify/functions/linkedin-sync.mts).
 * Fallback : `FALLBACK_POSTS` ci-dessous, utilisés tant que la synchronisation
 * n'a rien enregistré.
 *
 * Les IDs FALLBACK ont été récupérés le 20/11/2026 depuis la page LinkedIn
 * Nexia Morocco : les 7 dernières publications.
 *
 * Pour gérer la liste : /admin/linkedin (rôle admin ou collaborator).
 */
const FALLBACK_POSTS: LinkedInPost[] = [
  { post_id: "7529578769154662400", post_type: "activity", height: 600 }, // Investisseur étranger, 20/11
  { post_id: "7528751392338132992", post_type: "activity", height: 600 }, // Fête de l'Indépendance, 18/11
  { post_id: "7528450797660176384", post_type: "activity", height: 600 }, // Capital étranger ép. 2, 17/11
  { post_id: "7527052923646812161", post_type: "activity", height: 600 }, // Subventions ép. 2, 13/11
  { post_id: "7526258409000828928", post_type: "activity", height: 600 }, // Capital étranger ép. 1
  { post_id: "7524822484727283713", post_type: "activity", height: 600 }, // Subventions ép. 1
  { post_id: "7524161821503655936", post_type: "activity", height: 600 }, // Marche Verte, 06/11
];

const LINKEDIN_PROFILE_URL = "https://www.linkedin.com/company/nexiamorocco/";

export default function LinkedInPosts() {
  const { t } = useSimpleLanguage();
  const [posts, setPosts] = useState<LinkedInPost[]>(FALLBACK_POSTS);

  useEffect(() => {
    fetch("/api/linkedin-posts")
      .then((r) => (r.ok ? r.json() : []))
      .then((data: LinkedInPost[]) => {
        if (Array.isArray(data) && data.length > 0) setPosts(data);
      })
      .catch(() => {
        // fallback
      });
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* En-tête section */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0077B5]/10 rounded-full mb-4">
              <Linkedin className="h-4 w-4 text-[#0077B5]" />
              <span className="text-xs font-semibold text-[#0077B5] uppercase tracking-wider font-poppins">
                LinkedIn
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-nexia-primary mb-3 font-poppins leading-tight">
              {t('linkedinPosts.title')}
            </h2>
            <p className="text-nexia-primary/70 text-base md:text-lg max-w-2xl leading-relaxed font-poppins">
              {t('linkedinPosts.subtitle')}
            </p>
          </div>
          <a
            href={LINKEDIN_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-nexia-primary text-white rounded-lg font-medium hover:bg-nexia-secondary transition-colors duration-200 font-poppins text-sm whitespace-nowrap"
          >
            {t('linkedinPosts.viewProfile')}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Grille des posts — carousel horizontal scrollable */}
        <div className="relative">
          <style dangerouslySetInnerHTML={{
            __html: `
              .ln-scroll::-webkit-scrollbar { display: none; }
              .ln-scroll { scrollbar-width: none; -ms-overflow-style: none; }
            `
          }} />
          <div className="flex gap-6 overflow-x-auto pb-6 ln-scroll snap-x snap-mandatory -mx-6 lg:-mx-8 px-6 lg:px-8">
            {posts.map((post, index) => (
              <article
                key={post.post_id}
                className="flex-none w-[340px] md:w-[380px] bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-gray-100 snap-start group"
              >
                {/* Header carte — bandeau Nexia Light Teal + logo LinkedIn */}
                <div className="flex items-center justify-between gap-3 px-5 py-3 bg-nexia-primary text-white">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Linkedin className="w-4 h-4 text-white" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold font-poppins truncate">Nexia Morocco</div>
                      <div className="text-[10px] text-white/70 font-poppins uppercase tracking-wider">
                        Publication récente
                      </div>
                    </div>
                  </div>
                  <a
                    href={`https://www.linkedin.com/feed/update/urn:li:${post.post_type}:${post.post_id}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 p-1.5 rounded-md hover:bg-white/10 transition-colors"
                    aria-label="Ouvrir sur LinkedIn"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-white/80" />
                  </a>
                </div>

                {/* Embed LinkedIn */}
                <div className="relative bg-white">
                  <iframe
                    src={`https://www.linkedin.com/embed/feed/update/urn:li:${post.post_type}:${post.post_id}?collapsed=1`}
                    height={Math.min(post.height, 480)}
                    width="100%"
                    frameBorder="0"
                    allowFullScreen
                    title={`Publication LinkedIn ${index + 1}`}
                    className="w-full block"
                    loading="lazy"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTA mobile */}
        <div className="md:hidden text-center mt-10">
          <a
            href={LINKEDIN_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-nexia-primary text-white rounded-lg font-medium hover:bg-nexia-secondary transition-colors duration-200 font-poppins"
          >
            {t('linkedinPosts.viewProfile')}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
