import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HowCanWeHelp from "@/components/HowCanWeHelp";

const EtudesDeCas = () => {
  const caseStudies = [
    {
      title: "Transformation digitale d'un groupe industriel marocain",
      description: "Accompagnement complet dans la digitalisation des processus financiers et comptables d'un leader de l'industrie manufacturière.",
      sector: "Industrie",
      services: ["Audit", "Conseil digital", "Optimisation"],
      image: "/lovable-uploads/39143591-1dc1-4223-a2f1-480dd592d440.png",
      duration: "12 mois",
      results: [
        "Réduction de 40% du temps de traitement",
        "Amélioration de la traçabilité financière",
        "Mise en conformité IFRS"
      ]
    },
    {
      title: "Restructuration fiscale internationale",
      description: "Optimisation de la structure fiscale d'un groupe multinational présent au Maroc et en Europe.",
      sector: "Services financiers",
      services: ["Fiscalité internationale", "Corporate Finance", "Due diligence"],
      image: "/lovable-uploads/683558d0-ea3d-4016-81a3-c31382efa76b.png",
      duration: "8 mois",
      results: [
        "Économie fiscale de 25%",
        "Simplification de la structure holding",
        "Conformité réglementaire assurée"
      ]
    },
    {
      title: "Accompagnement IPO d'une entreprise technologique",
      description: "Support complet pour l'introduction en bourse d'une startup tech marocaine en forte croissance.",
      sector: "Technologie",
      services: ["Audit", "Évaluation", "Conseil stratégique"],
      image: "/lovable-uploads/36d7db3b-24d7-4f04-aaed-d9f2509146f0.png",
      duration: "18 mois",
      results: [
        "Levée de fonds réussie de 50M MAD",
        "Certification des comptes",
        "Mise en place de la gouvernance"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="nexia-section-padding bg-nexia-primary text-white">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-poppins">
              Études de cas
            </h1>
            <p className="text-xl leading-relaxed font-poppins opacity-90">
              Découvrez comment nous accompagnons nos clients dans leurs défis les plus complexes à travers des missions concrètes et des résultats mesurables.
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
                    <h4 className="text-sm font-semibold text-nexia-primary mb-2">Services mobilisés :</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.services.map((service, idx) => (
                        <span key={idx} className="text-xs text-nexia-primary bg-gray-100 px-2 py-1 rounded">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-nexia-primary mb-2">Résultats clés :</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-nexia-primary/80">
                          <div className="w-1.5 h-1.5 bg-nexia-secondary rounded-full mt-2 flex-shrink-0"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
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
              Votre projet mérite une approche sur-mesure
            </h2>
            <p className="text-lg text-nexia-primary mb-8 leading-relaxed font-poppins">
              Chaque mission est unique. Découvrez comment nous pouvons vous accompagner dans vos défis spécifiques.
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