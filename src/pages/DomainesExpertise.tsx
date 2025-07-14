import Header from "@/components/Header";
import LatestInsights from "@/components/LatestInsights";
import HowCanWeHelp from "@/components/HowCanWeHelp";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
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

const DomainesExpertise = () => {
  const expertiseDomains = [
    {
      id: "audit",
      title: "Audit & Commissariat aux comptes",
      icon: FileCheck,
      color: "text-blue-600 bg-blue-50",
      description: "Une approche rigoureuse et indépendante, alignée sur les normes internationales (IFRS, ISA), pour garantir la transparence, la fiabilité et la conformité financière de votre entreprise.",
      services: [
        "Audit légal et contractuel",
        "Commissariat aux comptes",
        "Audit d'acquisition et due diligence",
        "Audit interne & contrôle permanent"
      ]
    },
    {
      id: "comptable",
      title: "Expertise comptable & Conseil",
      icon: Calculator,
      color: "text-yellow-600 bg-yellow-50",
      description: "Un accompagnement comptable sur-mesure pour assurer la conformité, la lisibilité et la bonne gestion de vos flux financiers.",
      services: [
        "Tenue comptable et reporting",
        "Révision et supervision",
        "Établissement des états financiers",
        "Conseil opérationnel & tableaux de bord"
      ]
    },
    {
      id: "fiscalite",
      title: "Fiscalité & Optimisation",
      icon: Receipt,
      color: "text-orange-600 bg-orange-50",
      description: "Des solutions fiscales personnalisées pour optimiser la charge fiscale tout en assurant la conformité avec la législation marocaine et internationale.",
      services: [
        "Fiscalité nationale et internationale",
        "Optimisation et ingénierie fiscale",
        "Prix de transfert",
        "Déclarations fiscales & veille réglementaire"
      ]
    },
    {
      id: "corporate",
      title: "Corporate Finance & Transactions",
      icon: TrendingUp,
      color: "text-purple-600 bg-purple-50",
      description: "Conseil stratégique dans vos opérations de financement, de croissance ou de transmission.",
      services: [
        "Fusions & acquisitions",
        "Évaluation financière",
        "Levée de fonds & ingénierie financière",
        "Due diligence financière"
      ]
    },
    {
      id: "outsourcing",
      title: "Externalisation (Outsourcing)",
      icon: Users,
      color: "text-green-600 bg-green-50",
      description: "Déléguez la gestion de vos fonctions supports à des experts, pour gagner en efficacité et vous concentrer sur l'essentiel.",
      services: [
        "Comptabilité externalisée",
        "Paie & gestion sociale externalisée",
        "Gestion administrative",
        "Reporting consolidé"
      ]
    },
    {
      id: "digital",
      title: "Digitalisation & systèmes d'information",
      icon: Monitor,
      color: "text-indigo-600 bg-indigo-50",
      description: "Des solutions sur-mesure pour accompagner la transformation numérique de votre organisation.",
      services: [
        "Audit SI & cybersécurité",
        "Conformité RGPD",
        "Outils de pilotage & ERP",
        "Conseil en stratégie digitale"
      ]
    },
    {
      id: "international",
      title: "Support aux investisseurs étrangers",
      icon: Globe,
      color: "text-red-600 bg-red-50",
      description: "Un accompagnement dédié aux entreprises et groupes internationaux souhaitant s'implanter ou se développer au Maroc.",
      services: [
        "Création de structure & fiscalité adaptée",
        "Démarches administratives & juridiques",
        "Représentation locale",
        "Interface avec les autorités marocaines"
      ]
    },
    {
      id: "juridique",
      title: "Accompagnement juridique & social",
      icon: Scale,
      color: "text-gray-600 bg-gray-50",
      description: "Une assistance complète sur les volets juridiques, sociaux et réglementaires de vos projets.",
      services: [
        "Droit des sociétés",
        "Droit du travail & gestion RH",
        "Conformité réglementaire",
        "Contrats commerciaux"
      ]
    },
    {
      id: "strategie",
      title: "Conseil en stratégie & développement",
      icon: Target,
      color: "text-blue-800 bg-blue-100",
      description: "Des missions à forte valeur ajoutée pour accélérer votre croissance, améliorer votre performance et anticiper vos enjeux futurs.",
      services: [
        "Diagnostic stratégique",
        "Développement commercial",
        "Stratégie d'entrée sur le marché",
        "Gestion du changement & conduite de projet"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="nexia-section-padding bg-white">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-nexia-primary mb-6 font-poppins">
              Nos domaines d'expertise
            </h1>
            <p className="text-2xl text-nexia-primary mb-8 font-poppins font-medium">
              Un accompagnement global, une expertise locale et internationale
            </p>
            <p className="text-lg text-nexia-primary leading-relaxed font-poppins">
              Chez Nexia Fiducia Maroc, nous offrons une palette complète de services conçus pour accompagner les entreprises à chaque étape de leur développement. Nos domaines d'expertise couvrent l'ensemble des enjeux stratégiques, financiers, fiscaux, réglementaires et organisationnels de nos clients.
            </p>
          </div>
        </section>

        {/* Expertise Domains */}
        <section className="nexia-section-padding bg-nexia-light">
          <Tabs defaultValue={expertiseDomains[0].id} className="w-full">
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

        {/* CTA Section */}
        <section className="nexia-section-padding bg-white">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-nexia-primary mb-6 font-poppins">
              Vous avez un projet ou une problématique spécifique ?
            </h2>
            <p className="text-lg text-nexia-primary mb-8 leading-relaxed font-poppins">
              Nos équipes sont à votre écoute pour construire avec vous des solutions sur-mesure, efficaces et conformes aux meilleures pratiques.
            </p>
            <Button asChild className="nexia-button font-poppins font-medium px-10 text-lg">
              <Link to="/contact">Contactez-nous</Link>
            </Button>
          </div>
        </section>

        <LatestInsights />
        <HowCanWeHelp />
      </main>
      <Footer />
    </div>
  );
};

export default DomainesExpertise;