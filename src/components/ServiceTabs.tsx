import { ExternalLink } from "lucide-react";
// import auditService from "@/assets/audit-service.jpg";
// import taxService from "@/assets/tax-service.jpg";
// import advisoryService from "@/assets/advisory-service.jpg";

const expertiseDomains = [
  {
    title: "Audit et Commissariat aux Comptes",
    image: "/lovable-uploads/ae4b3ada-ab5f-4b1c-ab7f-32b8bf6df87c.png",
    href: "/services#audit"
  },
  {
    title: "Conseil financier & optimisation",
    image: "/lovable-uploads/ae4b3ada-ab5f-4b1c-ab7f-32b8bf6df87c.png",
    href: "/services#conseil-financier"
  },
  {
    title: "Inspection, Investigation & Fraude",
    image: "/lovable-uploads/ae4b3ada-ab5f-4b1c-ab7f-32b8bf6df87c.png",
    href: "/services#investigation"
  },
  {
    title: "Fiscalité & Tax Management",
    image: "/lovable-uploads/ae4b3ada-ab5f-4b1c-ab7f-32b8bf6df87c.png",
    href: "/services#fiscalite"
  },
  {
    title: "Analyses financières et évaluation d'entreprises",
    image: "/lovable-uploads/ae4b3ada-ab5f-4b1c-ab7f-32b8bf6df87c.png",
    href: "/services#analyses-financieres"
  },
  {
    title: "Consolidation selon les normes Marocaines & IFRS",
    image: "/lovable-uploads/ae4b3ada-ab5f-4b1c-ab7f-32b8bf6df87c.png",
    href: "/services#consolidation"
  },
  {
    title: "Conseils et accompagnement stratégique",
    image: "/lovable-uploads/ae4b3ada-ab5f-4b1c-ab7f-32b8bf6df87c.png",
    href: "/services#conseil-strategique"
  }
];

export default function ServiceTabs() {
  return (
    <section className="nexia-section-padding bg-white">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-nexia-primary font-poppins mb-4">
          Nos domaines d'expertise
        </h2>
        <p className="text-lg text-nexia-primary/80 max-w-3xl mx-auto">
          Découvrez l'ensemble de nos services professionnels conçus pour accompagner votre entreprise dans sa croissance et sa réussite.
        </p>
      </div>

      {/* Expertise Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {expertiseDomains.map((domain, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="relative h-80">
              <img
                src={domain.image}
                alt={domain.title}
                className="w-full h-full object-cover"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-end justify-between">
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-xl font-poppins leading-tight mb-2">
                      {domain.title}
                    </h3>
                  </div>
                  <div className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ExternalLink className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}