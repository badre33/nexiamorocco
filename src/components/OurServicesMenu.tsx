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
 * Nexia Website Guidelines 2023 (p.16) :
 *   "Never use more than one secondary colour within a single layout."
 *
 * Tous les domaines utilisent donc la même palette : Nexia Light Teal #00B9B9
 * (couleur d'accent du primary set) sur fond clair. Les icônes sont les icônes
 * officielles Nexia stockées dans /public/icons/.
 */
const NEXIA_DOMAIN_COLOR = "text-nexia-secondary bg-nexia-secondary/10";

const getExpertiseDomains = (t: (key: string) => string) => [
    {
      id: "audit",
      title: t('expertise.audit.title'),
      iconSrc: "/icons/audit.png",
      color: NEXIA_DOMAIN_COLOR,
      stats: { years: "34+", clients: "400+", certification: "IFRS" },
      badge: t('expertise.audit.badge'),
      description: t('expertise.audit.description'),
      services: [
        t('expertise.audit.service1'),
        t('expertise.audit.service2'),
        t('expertise.audit.service3'),
        t('expertise.audit.service4'),
        t('expertise.audit.service5')
      ]
    },
    {
      id: "comptable",
      title: t('expertise.comptable.title'),
      iconSrc: "/icons/books.png",
      color: NEXIA_DOMAIN_COLOR,
      stats: { years: "34+", clients: "400+", certification: "Expert" },
      badge: t('expertise.comptable.badge'),
      description: t('expertise.comptable.description'),
      services: [
        t('expertise.comptable.service1'),
        t('expertise.comptable.service2'),
        t('expertise.comptable.service3'),
        t('expertise.comptable.service4'),
        t('expertise.comptable.service5')
      ]
    },
    {
      id: "fiscalite",
      title: t('expertise.fiscalite.title'),
      iconSrc: "/icons/piggy-bank.png",
      color: NEXIA_DOMAIN_COLOR,
      stats: { years: "34+", clients: "400+", certification: "Fiscal" },
      badge: t('expertise.fiscalite.badge'),
      description: t('expertise.fiscalite.description'),
      services: [
        t('expertise.fiscalite.service1'),
        t('expertise.fiscalite.service2'),
        t('expertise.fiscalite.service3'),
        t('expertise.fiscalite.service4'),
        t('expertise.fiscalite.service5')
      ]
    },
    {
      id: "corporate",
      title: t('expertise.corporate.title'),
      iconSrc: "/icons/graph.png",
      color: NEXIA_DOMAIN_COLOR,
      stats: { years: "34+", clients: "400+", certification: "M&A" },
      badge: t('expertise.corporate.badge'),
      description: t('expertise.corporate.description'),
      services: [
        t('expertise.corporate.service1'),
        t('expertise.corporate.service2'),
        t('expertise.corporate.service3'),
        t('expertise.corporate.service4'),
        t('expertise.corporate.service5')
      ]
    },
    {
      id: "outsourcing",
      title: t('expertise.outsourcing.title'),
      iconSrc: "/icons/people.png",
      color: NEXIA_DOMAIN_COLOR,
      stats: { years: "34+", clients: "400+", certification: "BPO" },
      badge: t('expertise.outsourcing.badge'),
      description: t('expertise.outsourcing.description'),
      services: [
        t('expertise.outsourcing.service1'),
        t('expertise.outsourcing.service2'),
        t('expertise.outsourcing.service3'),
        t('expertise.outsourcing.service4'),
        t('expertise.outsourcing.service5')
      ]
    },
    {
      id: "digital",
      title: t('expertise.digital.title'),
      iconSrc: "/icons/computer.png",
      color: NEXIA_DOMAIN_COLOR,
      stats: { years: "5", clients: "50", certification: "Digital" },
      badge: t('expertise.digital.badge'),
      description: t('expertise.digital.description'),
      services: [
        t('expertise.digital.service1'),
        t('expertise.digital.service2'),
        t('expertise.digital.service3'),
        t('expertise.digital.service4'),
        t('expertise.digital.service5')
      ]
    },
    {
      id: "international",
      title: t('expertise.international.title'),
      iconSrc: "/icons/globe.png",
      color: NEXIA_DOMAIN_COLOR,
      stats: { years: "34+", clients: "400+", certification: "Global" },
      badge: t('expertise.international.badge'),
      description: t('expertise.international.description'),
      services: [
        t('expertise.international.service1'),
        t('expertise.international.service2'),
        t('expertise.international.service3'),
        t('expertise.international.service4'),
        t('expertise.international.service5')
      ]
    },
    {
      id: "juridique",
      title: t('expertise.juridique.title'),
      iconSrc: "/icons/briefcase.png",
      color: NEXIA_DOMAIN_COLOR,
      stats: { years: "34+", clients: "400+", certification: "Juridique" },
      badge: t('expertise.juridique.badge'),
      description: t('expertise.juridique.description'),
      services: [
        t('expertise.juridique.service1'),
        t('expertise.juridique.service2'),
        t('expertise.juridique.service3'),
        t('expertise.juridique.service4'),
        t('expertise.juridique.service5')
      ]
    },
    {
      id: "strategie",
      title: t('expertise.strategie.title'),
      iconSrc: "/icons/lightbulb.png",
      color: NEXIA_DOMAIN_COLOR,
      stats: { years: "34+", clients: "400+", certification: "Strategy" },
      badge: t('expertise.strategie.badge'),
      description: t('expertise.strategie.description'),
      services: [
        t('expertise.strategie.service1'),
        t('expertise.strategie.service2'),
        t('expertise.strategie.service3'),
        t('expertise.strategie.service4'),
        t('expertise.strategie.service5')
      ]
    },
    {
      id: "talent-mobility",
      title: t('expertise.talent.title'),
      iconSrc: "/icons/handshake.png",
      color: NEXIA_DOMAIN_COLOR,
      stats: { years: "5+", clients: "30+", certification: "RH" },
      badge: t('expertise.talent.badge'),
      description: t('expertise.talent.description'),
      services: [
        t('expertise.talent.service1'),
        t('expertise.talent.service2'),
        t('expertise.talent.service3'),
        t('expertise.talent.service4'),
        t('expertise.talent.service5'),
        t('expertise.talent.service6')
      ]
    }
  ];

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
              {expertiseDomains.map((domain, index) => {
              const isActive = activeTab === domain.id;
              return (
                <TabsTrigger
                  key={domain.id}
                  value={domain.id}
                  className={`
                    group relative flex flex-col items-center p-3 md:p-4 min-h-[90px] md:min-h-[110px] min-w-[100px] md:min-w-[120px]
                    transition-all duration-300 ease-out rounded-xl border-0
                    hover:scale-105 hover:shadow-hover hover:-translate-y-2
                    ${isActive
                      ? 'bg-gradient-to-br from-nexia-primary to-nexia-secondary text-white shadow-hover transform scale-105 -translate-y-2'
                      : 'bg-white text-nexia-primary hover:bg-gradient-to-br hover:from-gray-50 hover:to-white hover:text-nexia-secondary'
                    }
                  `}
                >
                  <div className={`
                    relative p-2 md:p-3 rounded-xl mb-1 md:mb-2 transition-all duration-300
                    ${isActive
                      ? 'bg-white/20 backdrop-blur-sm'
                      : `${domain.color} group-hover:scale-110 group-hover:rotate-3`
                    }
                  `}>
                    <img
                      src={domain.iconSrc}
                      alt={domain.title}
                      className={`h-5 w-5 md:h-7 md:w-7 transition-all duration-300 group-hover:scale-110 object-contain ${isActive ? 'brightness-0 invert' : ''}`}
                    />
                    {isActive && (
                      <div className="absolute inset-0 rounded-xl bg-white/10 animate-pulse" />
                    )}
                  </div>
                  <span className="text-[10px] md:text-xs font-bold text-center leading-tight transition-all duration-300 group-hover:scale-105 px-1">
                    {domain.title}
                  </span>
                  {isActive && (
                    <>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-white rounded-full shadow-sm" />
                      <div className="absolute top-2 right-2 w-2 h-2 bg-nexia-yellow rounded-full animate-pulse" />
                    </>
                  )}
                </TabsTrigger>
              );
            })}
          </TabsList>
          </div>

          {expertiseDomains.map((domain, index) => {
            return (
              <TabsContent
                key={domain.id}
                value={domain.id}
                className="mt-8 animate-fade-in"
              >
                <div className="bg-gradient-to-br from-white to-gray-50/50 rounded-3xl p-4 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-border/30 nexia-card-rounded">
                  {/* Header avec badge et stats */}
                  <div className="flex flex-col md:flex-row items-start justify-between mb-6 gap-4">
                    <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6 w-full">
                      <div className={`
                        relative p-4 md:p-6 rounded-2xl transition-all duration-500 hover:scale-105 hover:rotate-3
                        ${domain.color.split(' ')[1]} shadow-lg
                      `}>
                        <img
                          src={domain.iconSrc}
                          alt={domain.title}
                          className="h-8 w-8 md:h-12 md:w-12 transition-all duration-500 object-contain"
                        />
                        <div className="absolute -top-1 -right-1 w-5 h-5 md:w-6 md:h-6 bg-nexia-secondary rounded-full flex items-center justify-center animate-pulse">
                          <CheckCircle className="h-3 w-3 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 w-full">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-nexia-primary font-poppins hover:text-nexia-secondary transition-colors duration-300">
                            {domain.title}
                          </h3>
                          <span className="inline-flex items-center gap-1 px-2 md:px-3 py-1 bg-nexia-secondary/10 text-nexia-secondary rounded-full text-xs md:text-sm font-semibold w-fit">
                            <Award className="h-3 w-3" />
                            {domain.badge}
                          </span>
                        </div>
                        
                        {/* Statistiques percutantes */}
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 md:gap-6 mb-4">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-nexia-secondary flex-shrink-0" />
                            <span className="text-xs md:text-sm font-semibold text-nexia-primary">{domain.stats.years} {t('expertise.yearsExperience')}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-nexia-secondary flex-shrink-0" />
                            <span className="text-xs md:text-sm font-semibold text-nexia-primary">{domain.stats.clients} {t('expertise.clientsSupported')}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-nexia-secondary flex-shrink-0" />
                            <span className="text-xs md:text-sm font-semibold text-nexia-primary">Certification {domain.stats.certification}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm md:text-base lg:text-lg text-nexia-primary/80 mb-6 md:mb-8 leading-relaxed font-poppins">
                    {domain.description}
                  </p>
                  
                  {/* Séparateur visuel avec dégradé dynamique */}
                  <div className={`relative w-full h-1 rounded-full mb-6 md:mb-8 overflow-hidden`}>
                    <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-current to-transparent opacity-30 ${domain.color.split(' ')[0]}`}></div>
                  </div>
                  
                  {/* Services avec design amélioré et couleurs dynamiques */}
                  <div className={`relative bg-gradient-to-br ${domain.color.split(' ')[1].replace('bg-', 'from-')}/20 to-white/50 rounded-2xl p-5 md:p-7 border-2 ${domain.color.split(' ')[0].replace('text-', 'border-')}/20 shadow-lg backdrop-blur-sm overflow-hidden`}>
                    {/* Effet de fond animé */}
                    <div className={`absolute top-0 right-0 w-32 h-32 ${domain.color.split(' ')[1]} opacity-5 rounded-full blur-3xl`}></div>
                    
                    <div className="relative z-10">
                      <h4 className={`text-xl md:text-2xl font-bold mb-6 flex items-center gap-3 ${domain.color.split(' ')[0]}`}>
                        <div className={`p-2 rounded-lg ${domain.color.split(' ')[1]}`}>
                          <Target className="h-5 w-5 md:h-6 md:w-6" />
                        </div>
                        {t('expertise.servicesTitle')}
                      </h4>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">
                        {domain.services.map((service, serviceIndex) => (
                          <div 
                            key={serviceIndex} 
                            className={`group flex items-start gap-3 p-4 md:p-5 rounded-xl bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-md transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 border-2 border-transparent hover:${domain.color.split(' ')[0].replace('text-', 'border-')}/30 animate-fade-in`}
                            style={{ animationDelay: `${serviceIndex * 50}ms` }}
                          >
                            <div className={`flex-shrink-0 w-6 h-6 rounded-lg ${domain.color.split(' ')[1]} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                              <CheckCircle className={`w-4 h-4 ${domain.color.split(' ')[0]}`} />
                            </div>
                            <span className="text-sm md:text-base text-nexia-primary font-poppins font-medium group-hover:text-nexia-secondary transition-all duration-300 leading-relaxed">
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