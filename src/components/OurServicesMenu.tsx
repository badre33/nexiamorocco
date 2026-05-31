import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Target,
  Award,
  Clock,
  CheckCircle,
  Users,
} from "lucide-react";
import { useSimpleLanguage } from "@/hooks/useSimpleLanguage";

/**
 * Nexia Website Guidelines 2023 — palette officielle Nexia (PDF p.17).
 *
 * Choix produit (Badre, 31/05/2026) : pour rendre les 10 domaines visuellement
 * distincts, on utilise les 8 couleurs officielles Nexia (2 primaires + 6
 * secondaires) + 2 tints primaires complémentaires pour atteindre 10 couleurs.
 *
 * Compromis assumé : la règle stricte "1 secondary colour per layout" (PDF p.17)
 * est ici interprétée au niveau de chaque CARTE individuelle, pas au niveau
 * de la page entière. Chaque carte = un layout indépendant avec sa couleur
 * secondaire unique. C'est une lecture courante dans l'industrie (PwC, KPMG, EY
 * utilisent toutes des palettes catégorielles structurées).
 *
 * Toutes les couleurs sont dans la palette officielle Nexia. Aucune couleur
 * Tailwind par défaut (purple-500, etc.) n'est utilisée.
 */
type DomainTint = {
  /** Background hex (toujours via inline style pour des couleurs non-tailwind) */
  bgHex: string;
  /** Si vrai → texte/icône blanc (fond sombre). Sinon → texte Dark Teal (fond clair). */
  invertContent: boolean;
  /** Nom lisible pour debug / tooltip */
  name: string;
};

const TINTS: DomainTint[] = [
  { bgHex: "#00323C", invertContent: true,  name: "Nexia Dark Teal"  },  // 1. Audit (primaire fondateur)
  { bgHex: "#00B9B9", invertContent: true,  name: "Nexia Light Teal" },  // 2. Comptable (primaire)
  { bgHex: "#479DCF", invertContent: true,  name: "Nexia Blue"       },  // 3. Fiscalité
  { bgHex: "#5775B3", invertContent: true,  name: "Nexia Dark Blue"  },  // 4. Corporate Finance
  { bgHex: "#9C4181", invertContent: true,  name: "Nexia Purple"     },  // 5. Outsourcing
  { bgHex: "#D44984", invertContent: true,  name: "Nexia Pink"       },  // 6. Digital
  { bgHex: "#F0A65C", invertContent: false, name: "Nexia Orange"     },  // 7. International
  { bgHex: "#FBCF40", invertContent: false, name: "Nexia Yellow"     },  // 8. Juridique
  { bgHex: "#66848A", invertContent: true,  name: "Dark Teal 60%"    },  // 9. Stratégie (tint primaire)
  { bgHex: "#66D5D5", invertContent: false, name: "Light Teal 60%"   },  // 10. Talent (tint primaire)
];

const getExpertiseDomains = (t: (key: string) => string) => {
  const raw = [
    {
      id: "audit",
      iconSrc: "/icons/audit.png",
      stats: { years: "34+", clients: "400+", certification: "IFRS" },
      titleKey: 'expertise.audit.title',
      badgeKey: 'expertise.audit.badge',
      descriptionKey: 'expertise.audit.description',
      serviceKeys: ['expertise.audit.service1','expertise.audit.service2','expertise.audit.service3','expertise.audit.service4','expertise.audit.service5'],
    },
    {
      id: "comptable",
      iconSrc: "/icons/books.png",
      stats: { years: "34+", clients: "400+", certification: "Expert" },
      titleKey: 'expertise.comptable.title',
      badgeKey: 'expertise.comptable.badge',
      descriptionKey: 'expertise.comptable.description',
      serviceKeys: ['expertise.comptable.service1','expertise.comptable.service2','expertise.comptable.service3','expertise.comptable.service4','expertise.comptable.service5'],
    },
    {
      id: "fiscalite",
      iconSrc: "/icons/piggy-bank.png",
      stats: { years: "34+", clients: "400+", certification: "Fiscal" },
      titleKey: 'expertise.fiscalite.title',
      badgeKey: 'expertise.fiscalite.badge',
      descriptionKey: 'expertise.fiscalite.description',
      serviceKeys: ['expertise.fiscalite.service1','expertise.fiscalite.service2','expertise.fiscalite.service3','expertise.fiscalite.service4','expertise.fiscalite.service5'],
    },
    {
      id: "corporate",
      iconSrc: "/icons/graph.png",
      stats: { years: "34+", clients: "400+", certification: "M&A" },
      titleKey: 'expertise.corporate.title',
      badgeKey: 'expertise.corporate.badge',
      descriptionKey: 'expertise.corporate.description',
      serviceKeys: ['expertise.corporate.service1','expertise.corporate.service2','expertise.corporate.service3','expertise.corporate.service4','expertise.corporate.service5'],
    },
    {
      id: "outsourcing",
      iconSrc: "/icons/people.png",
      stats: { years: "34+", clients: "400+", certification: "BPO" },
      titleKey: 'expertise.outsourcing.title',
      badgeKey: 'expertise.outsourcing.badge',
      descriptionKey: 'expertise.outsourcing.description',
      serviceKeys: ['expertise.outsourcing.service1','expertise.outsourcing.service2','expertise.outsourcing.service3','expertise.outsourcing.service4','expertise.outsourcing.service5'],
    },
    {
      id: "digital",
      iconSrc: "/icons/computer.png",
      stats: { years: "5", clients: "50", certification: "Digital" },
      titleKey: 'expertise.digital.title',
      badgeKey: 'expertise.digital.badge',
      descriptionKey: 'expertise.digital.description',
      serviceKeys: ['expertise.digital.service1','expertise.digital.service2','expertise.digital.service3','expertise.digital.service4','expertise.digital.service5'],
    },
    {
      id: "international",
      iconSrc: "/icons/globe.png",
      stats: { years: "34+", clients: "400+", certification: "Global" },
      titleKey: 'expertise.international.title',
      badgeKey: 'expertise.international.badge',
      descriptionKey: 'expertise.international.description',
      serviceKeys: ['expertise.international.service1','expertise.international.service2','expertise.international.service3','expertise.international.service4','expertise.international.service5'],
    },
    {
      id: "juridique",
      iconSrc: "/icons/briefcase.png",
      stats: { years: "34+", clients: "400+", certification: "Juridique" },
      titleKey: 'expertise.juridique.title',
      badgeKey: 'expertise.juridique.badge',
      descriptionKey: 'expertise.juridique.description',
      serviceKeys: ['expertise.juridique.service1','expertise.juridique.service2','expertise.juridique.service3','expertise.juridique.service4','expertise.juridique.service5'],
    },
    {
      id: "strategie",
      iconSrc: "/icons/lightbulb.png",
      stats: { years: "34+", clients: "400+", certification: "Strategy" },
      titleKey: 'expertise.strategie.title',
      badgeKey: 'expertise.strategie.badge',
      descriptionKey: 'expertise.strategie.description',
      serviceKeys: ['expertise.strategie.service1','expertise.strategie.service2','expertise.strategie.service3','expertise.strategie.service4','expertise.strategie.service5'],
    },
    {
      id: "talent-mobility",
      iconSrc: "/icons/handshake.png",
      stats: { years: "5+", clients: "30+", certification: "RH" },
      titleKey: 'expertise.talent.title',
      badgeKey: 'expertise.talent.badge',
      descriptionKey: 'expertise.talent.description',
      serviceKeys: ['expertise.talent.service1','expertise.talent.service2','expertise.talent.service3','expertise.talent.service4','expertise.talent.service5','expertise.talent.service6'],
    },
  ];
  return raw.map((d, i) => ({
    ...d,
    title: t(d.titleKey),
    badge: t(d.badgeKey),
    description: t(d.descriptionKey),
    services: d.serviceKeys.map((k) => t(k)),
    tint: TINTS[i],
  }));
};

export default function OurServicesMenu() {
  const { t } = useSimpleLanguage();
  const location = useLocation();
  const expertiseDomains = getExpertiseDomains(t);
  const [activeTab, setActiveTab] = useState(expertiseDomains[0]?.id || "audit");

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && expertiseDomains.some(domain => domain.id === hash)) {
      setActiveTab(hash);
      
      // D'abord, aller en haut de la page
      window.scrollTo(0, 0);
      
      // Ensuite, après un délai, scroll vers la section
      setTimeout(() => {
        const element = document.getElementById('our-services-menu');
        if (element) {
          const elementPosition = element.offsetTop;
          const offsetPosition = elementPosition - 100;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location.hash]);

  // Écouter les changements d'état du navigateur
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && expertiseDomains.some(domain => domain.id === hash)) {
        setActiveTab(hash);
        
        window.scrollTo(0, 0);
        
        setTimeout(() => {
          const element = document.getElementById('our-services-menu');
          if (element) {
            const elementPosition = element.offsetTop;
            const offsetPosition = elementPosition - 100;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const activeIndex = expertiseDomains.findIndex(domain => domain.id === activeTab);
  const progressPercentage = ((activeIndex + 1) / expertiseDomains.length) * 100;

  return (
    <section id="our-services-menu" className="nexia-section-padding bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Header avec impact visuel */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-nexia-secondary/10 rounded-full mb-6">
            <Award className="h-5 w-5 text-nexia-secondary" />
            <span className="text-nexia-secondary font-semibold">{t('servicesMenu.excellenceTitle')}</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-nexia-primary mb-6 font-poppins">
            {t('servicesMenu.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('servicesMenu.description')}
          </p>
          
          {/* Progress indicator amélioré */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-nexia-primary">
                {t('servicesMenu.domain')} {activeIndex + 1} {t('servicesMenu.on')} {expertiseDomains.length}
              </span>
              <span className="text-sm text-muted-foreground">
                {Math.round(progressPercentage)}%
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-2 overflow-hidden shadow-inner">
              <div 
                className="h-full bg-gradient-to-r from-nexia-primary to-nexia-secondary rounded-full transition-all duration-700 ease-out shadow-sm"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="overflow-x-auto pb-4 -mx-4 px-4">
            <TabsList className="inline-flex w-max min-w-full gap-2 md:gap-3 h-auto p-2 md:p-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-professional border border-border/50">
              {expertiseDomains.map((domain) => {
              const isActive = activeTab === domain.id;
              const tint = domain.tint;
              return (
                <TabsTrigger
                  key={domain.id}
                  value={domain.id}
                  style={isActive ? { backgroundColor: tint.bgHex } : undefined}
                  className={`
                    group relative flex flex-col items-center p-3 md:p-4 min-h-[90px] md:min-h-[110px] min-w-[100px] md:min-w-[120px]
                    transition-all duration-300 ease-out rounded-xl border-0
                    hover:scale-105 hover:shadow-hover hover:-translate-y-2
                    ${isActive
                      ? `shadow-hover transform scale-105 -translate-y-2 ${tint.invertContent ? 'text-white' : 'text-nexia-primary'}`
                      : 'bg-white text-nexia-primary hover:bg-gray-50'
                    }
                  `}
                >
                  <div
                    style={!isActive ? { backgroundColor: tint.bgHex } : undefined}
                    className={`
                      relative p-2 md:p-3 rounded-xl mb-1 md:mb-2 transition-all duration-300
                      ${isActive ? 'bg-white/20 backdrop-blur-sm' : 'group-hover:scale-110'}
                    `}
                  >
                    <img
                      src={domain.iconSrc}
                      alt={domain.title}
                      className={`h-5 w-5 md:h-7 md:w-7 transition-all duration-300 group-hover:scale-110 object-contain ${
                        tint.invertContent ? 'brightness-0 invert' : ''
                      }`}
                    />
                  </div>
                  <span className="text-[10px] md:text-xs font-bold text-center leading-tight transition-all duration-300 group-hover:scale-105 px-1">
                    {domain.title}
                  </span>
                  {isActive && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-white rounded-full shadow-sm" />
                  )}
                </TabsTrigger>
              );
            })}
          </TabsList>
          </div>

          {expertiseDomains.map((domain) => {
            const tint = domain.tint;
            return (
              <TabsContent
                key={domain.id}
                value={domain.id}
                className="mt-8 animate-fade-in"
              >
                <div className="bg-white rounded-3xl p-4 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 nexia-card-rounded">
                  {/* Header avec badge et stats — bandeau couleur du domaine */}
                  <div className="flex flex-col md:flex-row items-start justify-between mb-6 gap-4">
                    <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6 w-full">
                      <div
                        style={{ backgroundColor: tint.bgHex }}
                        className="relative p-4 md:p-6 rounded-2xl transition-all duration-500 hover:scale-105 hover:rotate-3 shadow-lg"
                      >
                        <img
                          src={domain.iconSrc}
                          alt={domain.title}
                          className={`h-8 w-8 md:h-12 md:w-12 transition-all duration-500 object-contain ${tint.invertContent ? 'brightness-0 invert' : ''}`}
                        />
                        <div className="absolute -top-1 -right-1 w-5 h-5 md:w-6 md:h-6 bg-nexia-primary rounded-full flex items-center justify-center">
                          <CheckCircle className="h-3 w-3 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 w-full">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-nexia-primary font-poppins">
                            {domain.title}
                          </h3>
                          <span className="inline-flex items-center gap-1 px-2 md:px-3 py-1 bg-nexia-secondary/10 text-nexia-primary rounded-full text-xs md:text-sm font-semibold w-fit">
                            <Award className="h-3 w-3" />
                            {domain.badge}
                          </span>
                        </div>

                        {/* Statistiques percutantes */}
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 md:gap-6 mb-4">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-nexia-primary flex-shrink-0" />
                            <span className="text-xs md:text-sm font-semibold text-nexia-primary">{domain.stats.years} {t('expertise.yearsExperience')}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-nexia-primary flex-shrink-0" />
                            <span className="text-xs md:text-sm font-semibold text-nexia-primary">{domain.stats.clients} {t('expertise.clientsSupported')}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-nexia-primary flex-shrink-0" />
                            <span className="text-xs md:text-sm font-semibold text-nexia-primary">Certification {domain.stats.certification}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm md:text-base lg:text-lg text-nexia-primary/80 mb-6 md:mb-8 leading-relaxed font-poppins">
                    {domain.description}
                  </p>

                  {/* Séparateur fin dans la teinte du domaine */}
                  <div style={{ backgroundColor: tint.bgHex }} className="w-16 h-1 rounded-full mb-6 md:mb-8" />

                  {/* Liste des services — fond très clair de la teinte du domaine */}
                  <div
                    style={{ backgroundColor: tint.invertContent ? `${tint.bgHex}10` : `${tint.bgHex}30` }}
                    className="relative rounded-2xl p-5 md:p-7 shadow-sm border border-gray-100"
                  >
                    <div className="relative z-10">
                      <h4 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-3 text-nexia-primary">
                        <div style={{ backgroundColor: tint.bgHex }} className="p-2 rounded-lg">
                          <Target className={`h-5 w-5 md:h-6 md:w-6 ${tint.invertContent ? 'text-white' : 'text-nexia-primary'}`} />
                        </div>
                        {t('expertise.servicesTitle')}
                      </h4>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">
                        {domain.services.map((service, serviceIndex) => (
                          <div
                            key={serviceIndex}
                            className="group flex items-start gap-3 p-4 md:p-5 rounded-xl bg-white hover:shadow-md transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 border border-gray-100 animate-fade-in"
                            style={{ animationDelay: `${serviceIndex * 50}ms` }}
                          >
                            <div
                              style={{ backgroundColor: tint.bgHex }}
                              className="flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                            >
                              <CheckCircle className={`w-4 h-4 ${tint.invertContent ? 'text-white' : 'text-nexia-primary'}`} />
                            </div>
                            <span className="text-sm md:text-base text-nexia-primary font-poppins font-medium leading-relaxed">
                              {service}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}