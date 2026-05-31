import { useSimpleLanguage } from "@/hooks/useSimpleLanguage";

/**
 * Section "Secteurs" — calque le pattern nexia.com "Industries" mais avec
 * des icônes officielles Nexia (sans photos, Badre n'en a pas pour l'instant).
 *
 * Le set d'icônes vient de /public/icons/ (assets officiels Nexia déposés
 * dans le repo).
 */

type Sector = {
  iconSrc: string;
  titleKey: string;
};

const SECTORS: Sector[] = [
  { iconSrc: "/icons/briefcase.png",  titleKey: "sectors.financial"  },
  { iconSrc: "/icons/computer.png",   titleKey: "sectors.tech"       },
  { iconSrc: "/icons/cashflow.png",   titleKey: "sectors.industry"   },
  { iconSrc: "/icons/compass.png",    titleKey: "sectors.realestate" },
  { iconSrc: "/icons/heart.png",      titleKey: "sectors.health"     },
  { iconSrc: "/icons/people.png",     titleKey: "sectors.services"   },
  { iconSrc: "/icons/globe.png",      titleKey: "sectors.export"     },
  { iconSrc: "/icons/esg.png",        titleKey: "sectors.esg"        },
];

export default function SectorsSection() {
  const { t } = useSimpleLanguage();
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-nexia-secondary mb-3 font-poppins">
              {t('sectors.eyebrow')}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-nexia-primary font-poppins leading-tight">
              {t('sectors.title')}
            </h2>
          </div>
          <p className="text-nexia-primary/70 text-base md:text-lg max-w-md leading-relaxed font-poppins">
            {t('sectors.description')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {SECTORS.map((sector) => (
            <div
              key={sector.titleKey}
              className="group bg-white border border-nexia-primary/10 rounded-2xl p-6 md:p-8 hover:border-nexia-secondary hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 mb-4 rounded-xl bg-nexia-secondary/10 flex items-center justify-center group-hover:bg-nexia-secondary/20 transition-colors">
                <img
                  src={sector.iconSrc}
                  alt=""
                  className="w-7 h-7 md:w-8 md:h-8 object-contain"
                />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-nexia-primary font-poppins leading-snug">
                {t(sector.titleKey)}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
