import { useSimpleLanguage } from "@/hooks/useSimpleLanguage";

/**
 * Bandeau tagline globale — calque le pattern de nexia.com :
 *   "Personal connections, global solutions."
 * affichée juste sous le hero comme accroche, en grand, sobre.
 *
 * En FR : "Connexions personnelles, solutions globales."
 */
export default function TaglineBanner() {
  const { t } = useSimpleLanguage();
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-nexia-primary font-poppins leading-tight tracking-tight">
          {t('tagline.global')}
        </h2>
      </div>
    </section>
  );
}
