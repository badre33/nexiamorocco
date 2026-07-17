import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HowCanWeHelp from "@/components/HowCanWeHelp";
import { useSimpleLanguage } from "@/hooks/useSimpleLanguage";

const EtudesDeCas = () => {
  const { t } = useSimpleLanguage();
  
  const getCaseStudies = (t: (key: string) => string) => [
    {
      title: t('caseStudies.study1.title') || "Due diligence financière et fiscale pour une fusion stratégique dans la santé",
      description: t('caseStudies.study1.description') || "Accompagnement complet dans la fusion stratégique entre PHL Group et Malling Health, incluant due diligence financière et fiscale approfondie.",
      sector: t('caseStudies.study1.sector') || "Santé",
      services: [t('caseStudies.study1.service1') || "Due diligence", t('caseStudies.study1.service2') || "Fiscalité", t('caseStudies.study1.service3') || "Fusion-acquisition"],
      image: "/uploads/f9a9ffbc-dfd6-41ee-8f0a-4b081a69b3f6.png",
      duration: "6 mois",
      results: [
        "Fusion réussie de deux groupes de santé",
        "Optimisation fiscale de l'opération",
        "Structuration juridique optimale"
      ],
      source: "https://nexia.com/insights/uk-financial-and-tax-due-diligence-for-a-strategic-healthcare-merger-between-phl-group-and-malling-health/"
    },
    {
      title: "Conseil fiscal et conformité pour un prêteur spécialisé néo-zélandais",
      description: "Services de conseil fiscal et de conformité pour un prêteur spécialisé non-bancaire et fournisseur d'investissements en Nouvelle-Zélande.",
      sector: "Services financiers",
      services: ["Fiscalité", "Conformité", "Conseil stratégique"],
      image: "/uploads/bd99796a-f609-4596-9da6-b52d88335565.png",
      duration: "Ongoing",
      results: [
        "Conformité réglementaire assurée",
        "Optimisation de la structure fiscale",
        "Support continu pour la croissance"
      ],
      source: "https://nexia.com/insights/new-zealand-tax-advisory-and-compliance-services-for-a-specialist-non-bank-lender-and-investment-provider/"
    },
    {
      title: "Services globaux pour une société minière canadienne",
      description: "Accompagnement complet d'une société minière domiciliée au Canada dans ses opérations internationales et sa structure fiscale.",
      sector: "Mines et ressources",
      services: ["Fiscalité internationale", "Audit", "Conseil stratégique"],
      image: "/uploads/62424296-4463-4444-8768-830bed080c2c.png",
      duration: "18 mois",
      results: [
        "Structuration fiscale internationale",
        "Optimisation des opérations globales",
        "Conformité multi-juridictionnelle"
      ],
      source: "https://nexia.com/insights/global-services-to-a-canadian-domiciled-mining-company/"
    },
    {
      title: "Conseil TVA polonaise pour un fabricant britannique de fours industriels",
      description: "Expertise en TVA polonaise pour un fabricant britannique de fours industriels et équipements de chauffage spécialisés.",
      sector: "Industrie",
      services: ["TVA internationale", "Conformité", "Conseil fiscal"],
      image: "/uploads/4f1c034e-ed7b-4fc6-b4fe-3ce249ccb763.png",
      duration: "4 mois",
      results: [
        "Conformité TVA polonaise",
        "Optimisation des flux commerciaux",
        "Réduction des risques fiscaux"
      ],
      source: "https://nexia.com/insights/poland-polish-vat-advice-for-uk-based-industrial-oven-and-furnace-manufacturer/"
    },
    {
      title: "Conseil d'expert pour une société de production d'événements argentine",
      description: "Accompagnement d'une société de divertissement et de production d'événements basée en Argentine dans sa structuration et développement.",
      sector: "Divertissement",
      services: ["Structuration", "Conseil stratégique", "Fiscalité"],
      image: "/uploads/73661ed9-5340-4b07-b8a6-5234fe52dcbb.png",
      duration: "8 mois",
      results: [
        "Structuration optimisée",
        "Développement international",
        "Conformité réglementaire"
      ],
      source: "https://nexia.com/insights/expert-advice-for-an-argentinian-entertainment-and-event-production-company/"
    },
    {
      title: "Accompagnement d'un fabricant international d'équipements de golf américain",
      description: "Support complet pour un fabricant d'équipements de golf incorporé aux États-Unis avec des opérations internationales.",
      sector: "Sport et loisirs",
      services: ["Fiscalité internationale", "Audit", "Conseil stratégique"],
      image: "/uploads/823f190c-49d7-43a4-9359-54d2406a61eb.png",
      duration: "12 mois",
      results: [
        "Optimisation fiscale internationale",
        "Amélioration de la rentabilité",
        "Expansion géographique facilitée"
      ],
      source: "https://nexia.com/insights/u-s-incorporated-international-golf-equipment-manufacturer/"
    },
    {
      title: "Accompagnement d'une entreprise d'ingénierie globale britannique",
      description: "Services complets pour une entreprise d'ingénierie domiciliée au Royaume-Uni avec des opérations mondiales.",
      sector: "Ingénierie",
      services: ["Audit", "Fiscalité", "Conseil opérationnel"],
      image: "/uploads/e942bb5a-c552-4079-b062-2bedfd6c4efd.png",
      duration: "Ongoing",
      results: [
        "Optimisation des opérations globales",
        "Amélioration de la gouvernance",
        "Croissance internationale soutenue"
      ],
      source: "https://nexia.com/insights/uk-domiciled-global-engineering-business/"
    },
    {
      title: "Due diligence fiscale pour l'acquisition d'une société espagnole agroalimentaire",
      description: "Due diligence fiscale approfondie dans le cadre de l'acquisition d'une société espagnole du secteur agroalimentaire.",
      sector: "Agroalimentaire",
      services: ["Due diligence", "Fiscalité", "Fusion-acquisition"],
      image: "/uploads/90ae2755-c626-4fca-9dab-c7c8b88e7a97.png",
      duration: "5 mois",
      results: [
        "Acquisition réussie",
        "Identification des risques fiscaux",
        "Structuration optimale de l'opération"
      ],
      source: "https://nexia.com/insights/tax-due-diligence-for-an-acquisition-of-a-spanish-company-in-the-food-sector/"
    }
  ];
  
  const caseStudies = getCaseStudies(t);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="nexia-section-padding bg-nexia-primary text-white">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-poppins">
              {t('caseStudiesPage.title')}
            </h1>
            <p className="text-xl leading-relaxed font-poppins opacity-90">
              {t('caseStudiesPage.subtitle')}
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="nexia-section-padding bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-64 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-nexia-secondary bg-nexia-secondary/10 px-3 py-1 rounded-full">
                      {study.sector}
                    </span>
                    <span className="text-xs text-nexia-primary/60">
                      {study.duration}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-nexia-primary mb-3 font-poppins leading-tight">
                    {study.title}
                  </h3>
                  
                  <p className="text-nexia-primary/80 mb-4 leading-relaxed">
                    {study.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-nexia-primary mb-2">{t('caseStudiesPage.services')}</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.services.map((service, idx) => (
                        <span key={idx} className="text-xs text-nexia-primary bg-gray-100 px-2 py-1 rounded">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-nexia-primary mb-2">{t('caseStudiesPage.results')}</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-nexia-primary/80">
                          <div className="w-1.5 h-1.5 bg-nexia-secondary rounded-full mt-2 flex-shrink-0"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <a
                      href={study.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-nexia-primary hover:text-nexia-secondary transition-colors duration-200 font-medium"
                    >
                      <span>{t('caseStudiesPage.readFull')}</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="nexia-section-padding bg-nexia-light">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-nexia-primary mb-6 font-poppins">
              {t('caseStudiesPage.ctaTitle')}
            </h2>
            <p className="text-lg text-nexia-primary mb-8 leading-relaxed font-poppins">
              {t('caseStudiesPage.ctaDescription')}
            </p>
          </div>
        </section>

        <HowCanWeHelp />
      </main>
      <Footer />
    </div>
  );
};

export default EtudesDeCas;