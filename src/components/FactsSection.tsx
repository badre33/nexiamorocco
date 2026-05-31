import { useSimpleLanguage } from "@/hooks/useSimpleLanguage";

/**
 * "Notre monde en chiffres" — refondue selon la **brochure officielle Nexia Morocco 2026**
 * (p.8-9 "Our world in numbers") + chiffres du document "Présentation Nexia Morocco 2026".
 *
 * Layout : grille sobre de chiffres, sans cartes colorées, sans icônes superflues.
 *   - À gauche : Nexia Morocco (4 chiffres)
 *   - À droite : Nexia International (8 chiffres)
 *
 * Charte Nexia Website Guidelines 2023 :
 *   - Chiffres en Dark Teal #00323C (font-bold, gros)
 *   - Labels en Dark Teal 80% (sobre)
 *   - Aucune couleur secondaire (respect strict du "1 secondary per layout")
 */

type Stat = {
  number: string;
  label: string;
};

const useMoroccoStats = (t: (k: string) => string): Stat[] => [
  { number: "1994", label: t('facts.moroccoSince') },
  { number: "60+", label: t('facts.moroccoProfessionals') },
  { number: "400+", label: t('facts.moroccoClients') },
  { number: "2", label: t('facts.moroccoOffices') },
];

/**
 * Chiffres Nexia International (récupérés sur nexia.com/network-stats, 31/05/2026).
 * Source officielle du réseau, à jour à la dernière publication annuelle.
 */
const useInternationalStats = (t: (k: string) => string): Stat[] => [
  { number: "186", label: t('facts.intlFirms') },
  { number: "519", label: t('facts.intlOffices') },
  { number: "1 942", label: t('facts.intlPartners') },
  { number: "119", label: t('facts.intlCountries') },
];

export default function FactsSection() {
  const { t } = useSimpleLanguage();
  const morocco = useMoroccoStats(t);
  const international = useInternationalStats(t);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header — Effra Bold, Dark Teal (guide p.5 — Title H2, 78px) */}
        <div className="mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-nexia-primary mb-4 font-poppins leading-tight">
            {t('facts.title')}
          </h2>
          <p className="text-lg text-nexia-primary/80 leading-relaxed font-poppins">
            {t('facts.description')}
          </p>
        </div>

        {/* Bloc Nexia Morocco */}
        <div className="mb-16">
          <div className="flex items-baseline gap-3 mb-8 pb-3 border-b border-nexia-primary/10">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-nexia-primary font-poppins">
              {t('facts.moroccoLabel')}
            </h3>
            <span className="text-sm text-nexia-primary/60 font-poppins">— {t('facts.moroccoTagline')}</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
            {morocco.map((stat) => (
              <Cell key={stat.label} stat={stat} />
            ))}
          </div>
        </div>

        {/* Bloc Nexia International */}
        <div>
          <div className="flex items-baseline gap-3 mb-8 pb-3 border-b border-nexia-primary/10">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-nexia-primary font-poppins">
              {t('facts.intlLabel')}
            </h3>
            <span className="text-sm text-nexia-primary/60 font-poppins">— {t('facts.intlTagline')}</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
            {international.map((stat) => (
              <Cell key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Cellule de chiffre — style brochure Nexia Morocco 2026 p.8-9 + impact typo nexia.com */
function Cell({ stat }: { stat: Stat }) {
  return (
    <div>
      <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-nexia-primary mb-3 font-poppins leading-none tracking-tight">
        {stat.number}
      </div>
      <div className="text-sm md:text-base text-nexia-primary/70 font-poppins leading-snug">
        {stat.label}
      </div>
    </div>
  );
}
