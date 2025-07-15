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
  Target 
} from "lucide-react";

const expertiseDomains = [
    {
      id: "audit",
      title: "Audit & Commissariat aux comptes",
      icon: ShieldCheck,
      color: "text-blue-600 bg-blue-50",
      gradient: "from-blue-500 to-blue-600",
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
      color: "text-yellow-600 bg-yellow-50",
      gradient: "from-yellow-500 to-orange-500",
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
      gradient: "from-orange-500 to-red-500",
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
      color: "text-purple-600 bg-purple-50",
      gradient: "from-purple-500 to-indigo-600",
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
      gradient: "from-green-500 to-emerald-600",
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
      color: "text-indigo-600 bg-indigo-50",
      gradient: "from-indigo-500 to-blue-600",
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
      gradient: "from-red-500 to-pink-600",
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
      gradient: "from-gray-500 to-slate-600",
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
      color: "text-blue-800 bg-blue-100",
      gradient: "from-blue-600 to-cyan-600",
      description: "Nous vous aidons à construire une vision claire et ambitieuse, puis à la transformer en résultats concrets. Nos consultants vous accompagnent dans les grands virages stratégiques, le développement de votre activité et la structuration de votre croissance.",
      services: [
        "Élaboration de plans stratégiques",
        "Études de marché & analyses sectorielles",
        "Développement commercial & stratégie Go-to-market",
        "Organisation & gestion du changement",
        "Accompagnement à l'internationalisation"
      ]
    }
  ];

export default function OurServicesMenu() {
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
    <section id="our-services-menu" className="nexia-section-padding bg-nexia-light">
      <div className="max-w-7xl mx-auto">
        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl font-bold text-nexia-primary font-poppins">
              Nos Domaines d'Expertise
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-nexia-primary font-medium">
                {activeIndex + 1} / {expertiseDomains.length}
              </span>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-nexia-primary to-nexia-secondary rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-9 gap-2 h-auto p-2 bg-white rounded-xl shadow-lg border-0">
            {expertiseDomains.map((domain, index) => {
              const IconComponent = domain.icon;
              const isActive = activeTab === domain.id;
              return (
                <TabsTrigger 
                  key={domain.id} 
                  value={domain.id}
                  className={`
                    group relative flex flex-col items-center p-4 min-h-[100px] 
                    transition-all duration-300 ease-out rounded-lg border-0
                    hover:scale-105 hover:shadow-lg hover:-translate-y-1
                    ${isActive 
                      ? 'bg-gradient-to-br from-nexia-primary to-nexia-secondary text-white shadow-lg transform scale-105 -translate-y-1' 
                      : 'bg-white text-nexia-primary hover:bg-gradient-to-br hover:from-gray-50 hover:to-white'
                    }
                  `}
                >
                  <div className={`
                    relative p-3 rounded-xl mb-2 transition-all duration-300
                    ${isActive 
                      ? 'bg-white/20 text-white' 
                      : `${domain.color} group-hover:scale-110`
                    }
                  `}>
                    <IconComponent className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
                    {isActive && (
                      <div className="absolute inset-0 rounded-xl bg-white/20 animate-pulse" />
                    )}
                  </div>
                  <span className="text-xs font-semibold text-center leading-tight transition-all duration-300">
                    {domain.title.split(' ')[0]}
                  </span>
                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-white rounded-full" />
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
                <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100">
                  <div className="flex items-start gap-6">
                    <div className={`
                      relative p-6 rounded-2xl transition-all duration-300 hover:scale-105
                      bg-gradient-to-br ${domain.gradient} text-white shadow-lg
                    `}>
                      <IconComponent className="h-10 w-10" />
                      <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-nexia-primary mb-4 font-poppins hover:text-nexia-secondary transition-colors duration-300">
                        {domain.title}
                      </h3>
                      <p className="text-lg text-nexia-primary mb-6 leading-relaxed font-poppins opacity-90">
                        {domain.description}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {domain.services.map((service, serviceIndex) => (
                          <div 
                            key={serviceIndex} 
                            className="group flex items-center gap-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-gray-50 hover:to-white transition-all duration-300 hover:shadow-sm"
                            style={{ animationDelay: `${serviceIndex * 100}ms` }}
                          >
                            <div className="w-3 h-3 bg-gradient-to-r from-nexia-secondary to-nexia-primary rounded-full transition-transform duration-300 group-hover:scale-125"></div>
                            <span className="text-nexia-primary font-poppins font-medium group-hover:text-nexia-secondary transition-colors duration-300">
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