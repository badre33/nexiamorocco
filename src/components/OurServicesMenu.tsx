import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileCheck, 
  Calculator, 
  Receipt, 
  TrendingUp, 
  Users, 
  Monitor, 
  Globe, 
  Scale, 
  Target 
} from "lucide-react";

const expertiseDomains = [
    {
      id: "audit",
      title: "Audit & Commissariat aux comptes",
      icon: FileCheck,
      color: "text-blue-600 bg-blue-50",
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
      icon: Calculator,
      color: "text-yellow-600 bg-yellow-50",
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
      icon: Receipt,
      color: "text-orange-600 bg-orange-50",
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
      icon: Monitor,
      color: "text-indigo-600 bg-indigo-50",
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
      // Scroll vers la section après un petit délai pour permettre le rendu
      setTimeout(() => {
        const element = document.getElementById('our-services-menu');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location.hash]);

  return (
    <section id="our-services-menu" className="nexia-section-padding bg-nexia-light">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:grid-cols-9 gap-2 h-auto p-2 bg-white rounded-xl shadow-sm">
          {expertiseDomains.map((domain) => {
            const IconComponent = domain.icon;
            return (
              <TabsTrigger 
                key={domain.id} 
                value={domain.id}
                className="flex flex-col items-center p-4 min-h-[80px] data-[state=active]:bg-nexia-primary data-[state=active]:text-white transition-all duration-200"
              >
                <IconComponent className="h-6 w-6 mb-2" />
                <span className="text-xs font-medium text-center leading-tight">
                  {domain.title.split(' ')[0]}
                </span>
              </TabsTrigger>
            );
          })}
        </TabsList>

        {expertiseDomains.map((domain) => {
          const IconComponent = domain.icon;
          return (
            <TabsContent key={domain.id} value={domain.id} className="mt-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-start gap-6">
                  <div className={`p-4 rounded-xl ${domain.color}`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-nexia-primary mb-4 font-poppins">
                      {domain.title}
                    </h3>
                    <p className="text-lg text-nexia-primary mb-6 leading-relaxed font-poppins">
                      {domain.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {domain.services.map((service, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-nexia-secondary rounded-full"></div>
                          <span className="text-nexia-primary font-poppins">
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
    </section>
  );
}