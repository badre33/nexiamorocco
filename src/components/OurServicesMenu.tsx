import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ShieldCheck, 
  BookOpen, 
  PiggyBank, 
  TrendingUp, 
  Users, 
  Laptop, 
  Globe, 
  Scale, 
  Target,
  Award,
  Clock,
  CheckCircle
} from "lucide-react";
import { useSimpleLanguage } from "@/hooks/useSimpleLanguage";

const expertiseDomains = [
    {
      id: "audit",
      title: "Audit & Commissariat aux comptes",
      icon: ShieldCheck,
      color: "text-nexia-blue bg-blue-50",
      stats: { years: "25+", clients: "200+", certification: "IFRS" },
      badge: "Certification ISA",
      description: "Parce que la transparence financière est aujourd'hui un levier stratégique de confiance, nous réalisons vos audits avec une rigueur absolue et une méthodologie conforme aux normes internationales (IFRS, ISA). Notre approche combine exigence technique, indépendance professionnelle et compréhension sectorielle, pour garantir la fiabilité de vos états financiers et renforcer votre crédibilité auprès des investisseurs, partenaires et régulateurs.",
      services: [
        "Audit légal et contractuel",
        "Commissariat aux comptes",
        "Audit d'acquisition et due diligence",
        "Audit interne et contrôle permanent",
        "Audit des systèmes d'information"
      ]
    },
    {
      id: "comptable",
      title: "Expertise comptable & Conseil opérationnel",
      icon: BookOpen,
      color: "text-nexia-yellow bg-yellow-50",
      stats: { years: "20+", clients: "300+", certification: "Expert" },
      badge: "Expertise Certifiée",
      description: "Une comptabilité bien tenue est plus qu'une obligation : c'est un outil de pilotage. Nos experts-comptables vous accompagnent dans la structuration, la supervision et l'optimisation de vos processus comptables, tout en vous apportant un éclairage stratégique sur vos performances et marges. Nous intervenons à la fois en mode externalisé ou collaboratif, selon vos besoins.",
      services: [
        "Tenue comptable, supervision & reporting",
        "Établissement des états financiers",
        "Révision comptable & tableaux de bord",
        "Conseil en gestion & aide à la décision",
        "Accompagnement à la transformation digitale des fonctions financières"
      ]
    },
    {
      id: "fiscalite",
      title: "Fiscalité & Optimisation fiscale",
      icon: PiggyBank,
      color: "text-orange-600 bg-orange-50",
      stats: { years: "15+", clients: "150+", certification: "Fiscal" },
      badge: "Expertise Fiscale",
      description: "Dans un environnement fiscal en constante évolution, nous vous aidons à anticiper, sécuriser et optimiser vos obligations fiscales, tout en veillant à la conformité réglementaire. Notre approche personnalisée prend en compte la structure de votre entreprise, vos flux internationaux et vos enjeux de croissance.",
      services: [
        "Fiscalité marocaine & internationale",
        "Déclarations fiscales & suivi réglementaire",
        "Prix de transfert",
        "Optimisation fiscale & stratégie patrimoniale",
        "Contentieux fiscal & relations avec l'administration"
      ]
    },
    {
      id: "corporate",
      title: "Corporate Finance & Transactions",
      icon: TrendingUp,
      color: "text-nexia-pink bg-pink-50",
      stats: { years: "10+", clients: "100+", certification: "M&A" },
      badge: "Spécialiste M&A",
      description: "Que ce soit pour céder, acquérir, fusionner ou lever des fonds, Nexia Fiducia Maroc vous accompagne dans vos opérations stratégiques avec discrétion, rigueur et méthode. Nos équipes expertes en finance d'entreprise vous apportent une vision claire, chiffrée et orientée résultats.",
      services: [
        "Fusions & acquisitions",
        "Levée de fonds (equity & dette)",
        "Due diligence financière",
        "Évaluation d'entreprise",
        "Conseil en structuration financière"
      ]
    },
    {
      id: "outsourcing",
      title: "Externalisation & gestion déléguée (Outsourcing)",
      icon: Users,
      color: "text-green-600 bg-green-50",
      stats: { years: "12+", clients: "250+", certification: "BPO" },
      badge: "Expert BPO",
      description: "Gagnez en productivité et recentrez-vous sur votre cœur de métier en nous confiant la gestion de vos fonctions support. Nos solutions d'externalisation sont flexibles, sécurisées et adaptées à votre secteur d'activité.",
      services: [
        "Externalisation comptable",
        "Externalisation de la paie et des déclarations sociales",
        "Gestion administrative RH",
        "Suivi des obligations légales et fiscales",
        "Reporting financier périodique"
      ]
    },
    {
      id: "digital",
      title: "Digitalisation & systèmes d'information",
      icon: Laptop,
      color: "text-nexia-blue bg-indigo-50",
      stats: { years: "8+", clients: "80+", certification: "Digital" },
      badge: "Innovation Tech",
      description: "Le digital transforme en profondeur les métiers du chiffre, de la conformité et du conseil. Nous vous accompagnons dans la mise en place d'outils performants, la sécurisation de vos systèmes, la conformité RGPD et la transition vers des modèles agiles et connectés.",
      services: [
        "Audit des systèmes d'information",
        "Conseil en transformation digitale",
        "Conformité RGPD & cybersécurité",
        "Accompagnement à l'implémentation d'ERP",
        "Stratégie de pilotage & dashboards"
      ]
    },
    {
      id: "international",
      title: "Support aux investisseurs étrangers",
      icon: Globe,
      color: "text-red-600 bg-red-50",
      stats: { years: "18+", clients: "120+", certification: "Global" },
      badge: "Expertise Internationale",
      description: "Vous souhaitez vous implanter, investir ou développer vos activités au Maroc ? Nous mettons à votre service notre connaissance des règles locales et notre capacité d'interface avec l'écosystème institutionnel et financier pour vous garantir un atterrissage fluide et sécurisé.",
      services: [
        "Création d'entreprise & choix de structure",
        "Fiscalité adaptée aux groupes internationaux",
        "Gestion des obligations réglementaires locales",
        "Services de représentation & domiciliation",
        "Due diligence juridique & administrative"
      ]
    },
    {
      id: "juridique",
      title: "Accompagnement juridique & social",
      icon: Scale,
      color: "text-gray-600 bg-gray-50",
      stats: { years: "22+", clients: "180+", certification: "Juridique" },
      badge: "Conseil Juridique",
      description: "La conformité juridique est au cœur de votre pérennité. Notre équipe vous assiste sur toutes les problématiques de droit des affaires, droit social et conformité, en lien direct avec vos enjeux opérationnels.",
      services: [
        "Création & suivi juridique des sociétés",
        "Conseil en droit du travail",
        "Gestion des contrats commerciaux",
        "Mise en conformité réglementaire",
        "Assistance lors de contrôles ou litiges"
      ]
    },
    {
      id: "strategie",
      title: "Conseil en stratégie & développement",
      icon: Target,
      color: "text-nexia-primary bg-blue-100",
      stats: { years: "15+", clients: "90+", certification: "Strategy" },
      badge: "Conseil Stratégique",
      description: "Nous vous aidons à construire une vision claire et ambitieuse, puis à la transformer en résultats concrets. Nos consultants vous accompagnent dans les grands virages stratégiques, le développement de votre activité et la structuration de votre croissance.",
      services: [
        "Élaboration de plans stratégiques",
        "Études de marché & analyses sectorielles",
        "Développement commercial & stratégie Go-to-market",
        "Organisation & gestion du changement",
        "Accompagnement à l'internationalisation"
      ]
    },
    {
      id: "talent-mobility",
      title: "Talent & Mobility Solutions",
      icon: Users,
      color: "text-purple-600 bg-purple-50",
      stats: { years: "10+", clients: "100+", certification: "RH" },
      badge: "Expert RH",
      description: "Parce que le capital humain est au cœur de la réussite des entreprises, Nexia Fiducia Maroc propose une offre complète de Talent & Mobility Solutions, alliant recrutement spécialisé, accompagnement RH et services d'installation au Maroc. Notre approche repose sur l'expertise locale et la force de notre réseau international pour garantir une intégration fluide, sécurisée et performante des talents et des entreprises.",
      services: [
        "Recrutement & Executive Search : chasse de têtes, sélection de cadres dirigeants et profils techniques rares",
        "Programmes jeunes talents : partenariats campus, stages, alternances et graduate programs",
        "Accompagnement RH : structuration des politiques de rémunération, benchmarks salariaux, gestion de la performance",
        "Onboarding & intégration culturelle : formation interculturelle, accompagnement des talents étrangers et diaspora",
        "Mobilité & Installation : démarches administratives (visas, permis de travail, cartes de séjour), recherche de logement, scolarité, mobilité familiale",
        "Soft Landing Package : accompagnement clé en main pour l'implantation d'investisseurs et d'entreprises"
      ]
    }
  ];

export default function OurServicesMenu() {
  const { t } = useSimpleLanguage();
  const location = useLocation();
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
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-10 gap-3 h-auto p-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-professional border border-border/50">
            {expertiseDomains.map((domain, index) => {
              const IconComponent = domain.icon;
              const isActive = activeTab === domain.id;
              return (
                <TabsTrigger 
                  key={domain.id} 
                  value={domain.id}
                  className={`
                    group relative flex flex-col items-center p-4 min-h-[110px] 
                    transition-all duration-300 ease-out rounded-xl border-0
                    hover:scale-105 hover:shadow-hover hover:-translate-y-2
                    ${isActive 
                      ? 'bg-gradient-to-br from-nexia-primary to-nexia-blue text-white shadow-hover transform scale-105 -translate-y-2' 
                      : 'bg-white text-nexia-primary hover:bg-gradient-to-br hover:from-gray-50 hover:to-white hover:text-nexia-secondary'
                    }
                  `}
                >
                  <div className={`
                    relative p-3 rounded-xl mb-2 transition-all duration-300
                    ${isActive 
                      ? 'bg-white/20 text-white backdrop-blur-sm' 
                      : `${domain.color} group-hover:scale-110 group-hover:rotate-3`
                    }
                  `}>
                    <IconComponent className="h-7 w-7 transition-all duration-300 group-hover:scale-110" />
                    {isActive && (
                      <div className="absolute inset-0 rounded-xl bg-white/10 animate-pulse" />
                    )}
                  </div>
                  <span className="text-xs font-bold text-center leading-tight transition-all duration-300 group-hover:scale-105">
                    {domain.title.split(' ')[0]}
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

          {expertiseDomains.map((domain, index) => {
            const IconComponent = domain.icon;
            return (
              <TabsContent 
                key={domain.id} 
                value={domain.id} 
                className="mt-8 animate-fade-in"
              >
                <div className="bg-white rounded-2xl p-8 shadow-professional hover:shadow-hover transition-all duration-500 transform hover:-translate-y-1 border border-border/20 nexia-card-rounded">
                  {/* Header avec badge et stats */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start gap-6">
                      <div className={`
                        relative p-6 rounded-2xl transition-all duration-300 hover:scale-105
                        bg-gradient-to-br from-nexia-primary to-nexia-blue text-white shadow-professional
                      `}>
                        <IconComponent className="h-12 w-12" />
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-nexia-yellow rounded-full flex items-center justify-center">
                          <CheckCircle className="h-3 w-3 text-nexia-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-3xl font-bold text-nexia-primary font-poppins hover:text-nexia-secondary transition-colors duration-300">
                            {domain.title}
                          </h3>
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-nexia-secondary/10 text-nexia-secondary rounded-full text-sm font-semibold">
                            <Award className="h-3 w-3" />
                            {domain.badge}
                          </span>
                        </div>
                        
                        {/* Statistiques percutantes */}
                        <div className="flex gap-6 mb-4">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-nexia-secondary" />
                            <span className="text-sm font-semibold text-nexia-primary">{domain.stats.years} ans d'expérience</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-nexia-secondary" />
                            <span className="text-sm font-semibold text-nexia-primary">{domain.stats.clients} clients accompagnés</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-nexia-secondary" />
                            <span className="text-sm font-semibold text-nexia-primary">Certification {domain.stats.certification}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg text-nexia-primary/80 mb-8 leading-relaxed font-poppins">
                    {domain.description}
                  </p>
                  
                  {/* Services avec design amélioré */}
                  <div className="bg-gradient-to-br from-muted/30 to-transparent rounded-xl p-6">
                    <h4 className="text-xl font-bold text-nexia-primary mb-4 flex items-center gap-2">
                      <Target className="h-5 w-5 text-nexia-secondary" />
                      Nos Services
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {domain.services.map((service, serviceIndex) => (
                        <div 
                          key={serviceIndex} 
                          className="group flex items-center gap-3 p-4 rounded-lg bg-white hover:bg-gradient-to-r hover:from-nexia-secondary/5 hover:to-nexia-primary/5 transition-all duration-300 hover:shadow-sm hover:scale-[1.02] border border-transparent hover:border-nexia-secondary/20"
                          style={{ animationDelay: `${serviceIndex * 100}ms` }}
                        >
                          <div className="w-3 h-3 bg-gradient-to-r from-nexia-secondary to-nexia-primary rounded-full transition-transform duration-300 group-hover:scale-125 flex-shrink-0"></div>
                          <span className="text-nexia-primary font-poppins font-medium group-hover:text-nexia-secondary transition-colors duration-300 group-hover:font-semibold">
                            {service}
                          </span>
                        </div>
                      ))}
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