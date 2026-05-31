import { useSimpleLanguage } from "@/hooks/useSimpleLanguage";

/**
 * "Notre monde en chiffres" — refondue selon Nexia Website Guidelines 2023.
 * Règle du guide (p.16) : "Never use more than one secondary colour within a single layout."
 * On utilise donc UNIQUEMENT la palette primaire Nexia (Dark Teal + Light Teal) + grisâtre,
 * sans purple/orange/pink/teal Tailwind par défaut.
 */

const getGlobalStats = (t: (key: string) => string) => [
  { number: "35 000+", label: t('facts.globalPeople'), region: "global" },
  { number: "122", label: t('facts.globalCountries'), region: "global" },
  { number: "1:10", label: t('facts.globalRatio'), region: "global" },
];

const getRegionalStats = (t: (key: string) => string) => [
  { number: "206", label: t('facts.offices'), region: t('facts.northAmerica') },
  { number: "1372", label: t('facts.partners'), region: t('facts.northAmerica') },
  { number: "361", label: t('facts.offices'), region: t('facts.emeaRegion') },
  { number: "1252", label: t('facts.partners'), region: t('facts.emeaRegion') },
  { number: "106", label: t('facts.offices'), region: t('facts.asiaPacific') },
  { number: "708", label: t('facts.partners'), region: t('facts.asiaPacific') },
  { number: "54", label: t('facts.offices'), region: t('facts.latinAmerica') },
  { number: "110", label: t('facts.partners'), region: t('facts.latinAmerica') },
  { number: "50", label: t('facts.businessGroups'), region: t('facts.center') },
];

const getServices = (t: (key: string) => string) => [
  { name: t('facts.serviceConsulting') },
  { name: t('facts.serviceAudit') },
  { name: t('facts.serviceTax') },
];

interface Achievement {
  iconSrc: string;
  iconAlt: string;
  badge: string;
  title: string;
  subtitle?: string;
}

const getAchievements = (t: (key: string) => string): Achievement[] => [
  {
    iconSrc: "/icons/graph.png",
    iconAlt: "Croissance",
    badge: "9th",
    title: "International Accounting Bulletin Survey 2019",
  },
  {
    iconSrc: "/icons/lightbulb.png",
    iconAlt: "Distinction",
    badge: "★",
    title: "Prix du Réseau Étoile Montante — IAB Awards 2019",
  },
  {
    iconSrc: "/icons/money.png",
    iconAlt: "Revenu global",
    badge: "$",
    title: t('facts.revenue'),
  },
  {
    iconSrc: "/icons/globe.png",
    iconAlt: "Bureaux mondiaux",
    badge: "727",
    title: t('facts.worldwideOffices'),
    subtitle: t('facts.globalNetwork'),
  },
];

export default function FactsSection() {
  const { t } = useSimpleLanguage();
  const globalStats = getGlobalStats(t);
  const regionalStats = getRegionalStats(t);
  const services = getServices(t);
  const achievements = getAchievements(t);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header — Effra Bold, Nexia Dark Teal (guide p.4) */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-nexia-primary mb-6 font-poppins">
            {t('facts.title')}
          </h2>
          <p className="text-lg text-nexia-primary/80 max-w-5xl leading-relaxed font-poppins">
            {t('facts.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Statistics Section */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              {/* Global Stats — fond teal léger, chiffres en Light Teal */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-nexia-primary mb-6 font-poppins">
                  {t('facts.globalStats')}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {globalStats.map((stat, index) => (
                    <div
                      key={index}
                      className="text-center p-6 rounded-lg bg-nexia-secondary/10 border border-nexia-secondary/20"
                    >
                      <div className="text-3xl font-bold text-nexia-secondary mb-2 font-poppins">
                        {stat.number}
                      </div>
                      <div className="text-nexia-primary font-medium font-poppins">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Regional Stats — grille neutre, chiffres en Dark Teal */}
              <div>
                <h3 className="text-2xl font-bold text-nexia-primary mb-6 font-poppins">
                  {t('facts.regionalStats')}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {regionalStats.map((stat, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 p-4 rounded-lg text-center border border-gray-100"
                    >
                      <div className="text-2xl font-bold text-nexia-primary mb-1 font-poppins">
                        {stat.number}
                      </div>
                      <div className="text-sm text-nexia-primary/80 font-medium font-poppins">
                        {stat.label}
                      </div>
                      <div className="text-xs text-nexia-primary/50 mt-1 font-poppins">
                        ({stat.region})
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Services and Achievements */}
          <div className="space-y-6">
            {/* Services — tag pills Dark Teal (Nexia primary) */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-nexia-primary mb-4 font-poppins">
                {t('facts.services')}
              </h3>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-nexia-primary text-white px-4 py-2 rounded-full text-sm font-medium text-center font-poppins"
                  >
                    {service.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements — icônes officielles Nexia + badge Light Teal */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-nexia-primary mb-4 font-poppins">
                {t('facts.achievements')}
              </h3>
              <div className="space-y-4">
                {achievements.map((a, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="relative w-12 h-12 bg-nexia-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <img
                        src={a.iconSrc}
                        alt={a.iconAlt}
                        className="w-7 h-7 object-contain"
                      />
                      <span className="absolute -bottom-1 -right-1 text-[10px] font-bold text-white bg-nexia-secondary rounded-full px-1.5 py-0.5 leading-none">
                        {a.badge}
                      </span>
                    </div>
                    <div className="flex-1 text-sm text-nexia-primary/80 font-poppins">
                      <div className="font-medium">{a.title}</div>
                      {a.subtitle && (
                        <div className="text-xs text-nexia-primary/50 mt-0.5">
                          {a.subtitle}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
