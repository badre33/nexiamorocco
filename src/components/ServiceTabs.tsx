import { ExternalLink } from "lucide-react";
// import auditService from "@/assets/audit-service.jpg";
// import taxService from "@/assets/tax-service.jpg";
// import advisoryService from "@/assets/advisory-service.jpg";

const expertiseDomains = [
  {
    title: "Audit & Commissariat aux comptes",
    image: "/lovable-uploads/01471ff8-a45a-4917-9e88-21cc4de0456d.png",
    href: "/domaines-expertise#audit"
  },
  {
    title: "Expertise comptable & Conseil",
    image: "/lovable-uploads/31bfa1ea-3054-4d56-967c-b20714ac5574.png",
    href: "/domaines-expertise#expertise-comptable"
  },
  {
    title: "Fiscalité & Optimisation fiscale",
    image: "/lovable-uploads/53f46a0f-ef88-4282-bd21-b005312754ce.png",
    href: "/domaines-expertise#fiscalite"
  },
  {
    title: "Corporate Finance & M&A",
    image: "/lovable-uploads/4bed1dd7-b5f8-4423-abf2-a25ceac03f9d.png",
    href: "/domaines-expertise#corporate-finance"
  },
  {
    title: "Accompagnement juridique & social",
    image: "/lovable-uploads/a7f22a1b-43e9-4c44-a47d-df43bbab5901.png",
    href: "/domaines-expertise#juridique-social"
  },
  {
    title: "Outsourcing & Externalisation",
    image: "/lovable-uploads/0506b088-dd85-416f-a9a3-bc15fac33d20.png",
    href: "/domaines-expertise#outsourcing"
  },
  {
    title: "Digitalisation et systèmes d'information",
    image: "/lovable-uploads/c77098e9-3f18-4389-b9e1-012be59e78dd.png",
    href: "/domaines-expertise#digitalisation"
  },
  {
    title: "Support aux investisseurs étrangers",
    image: "/lovable-uploads/622c05eb-5be8-4d65-8337-8b1100601dbb.png",
    href: "/domaines-expertise#investisseurs-etrangers"
  },
  {
    title: "Conseil en stratégie & développement",
    image: "/lovable-uploads/4c28863e-d429-476b-ab43-4c6a6e22bdf9.png",
    href: "/domaines-expertise#conseil-strategie"
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