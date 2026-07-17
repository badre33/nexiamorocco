import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useSimpleLanguage } from "@/hooks/useSimpleLanguage";
// import auditService from "@/assets/audit-service.jpg";
// import taxService from "@/assets/tax-service.jpg";
// import advisoryService from "@/assets/advisory-service.jpg";

const getExpertiseDomains = (t: (key: string) => string) => [
  {
    title: t("service.audit.title"),
    image: "/uploads/01471ff8-a45a-4917-9e88-21cc4de0456d.png",
    href: "/domaines-expertise#audit"
  },
  {
    title: t("service.expertise.title"),
    image: "/uploads/31bfa1ea-3054-4d56-967c-b20714ac5574.png",
    href: "/domaines-expertise#comptable"
  },
  {
    title: t("service.fiscal.title"),
    image: "/uploads/53f46a0f-ef88-4282-bd21-b005312754ce.png",
    href: "/domaines-expertise#fiscalite"
  },
  {
    title: t("service.finance.title"),
    image: "/uploads/4bed1dd7-b5f8-4423-abf2-a25ceac03f9d.png",
    href: "/domaines-expertise#corporate"
  },
  {
    title: t("service.legal.title"),
    image: "/uploads/a7f22a1b-43e9-4c44-a47d-df43bbab5901.png",
    href: "/domaines-expertise#juridique"
  },
  {
    title: t("service.outsourcing.title"),
    image: "/uploads/0506b088-dd85-416f-a9a3-bc15fac33d20.png",
    href: "/domaines-expertise#outsourcing"
  },
  {
    title: t("service.digitalization.title"),
    image: "/uploads/c77098e9-3f18-4389-b9e1-012be59e78dd.png",
    href: "/domaines-expertise#digital"
  },
  {
    title: t("service.support.title"),
    image: "/uploads/622c05eb-5be8-4d65-8337-8b1100601dbb.png",
    href: "/domaines-expertise#international"
  },
  {
    title: t("service.strategy.title"),
    image: "/uploads/90493dfc-c495-4692-97e9-4d6c1478d8e1.png",
    href: "/domaines-expertise#strategie"
  },
  {
    title: t("service.talent.title"),
    image: "/uploads/888e9d03-6404-4ee8-871e-6b4893b19f2a.png",
    href: "/domaines-expertise#talent-mobility"
  }
];

export default function ServiceTabs() {
  const { t } = useSimpleLanguage();
  const expertiseDomains = getExpertiseDomains(t);
  
  const handleDomainClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const [path, hash] = href.split('#');
    
    // Naviguer vers la page sans l'ancre d'abord
    window.history.pushState(null, '', path);
    
    // Ensuite naviguer avec l'ancre pour déclencher notre useEffect
    setTimeout(() => {
      window.history.pushState(null, '', href);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }, 50);
  };

  return (
    <section className="nexia-section-padding bg-white">
      {/* Section Title */}
      <div className="text-center mb-8 lg:mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-nexia-primary font-poppins mb-4">
          {t('services.title')}
        </h2>
        <p className="text-sm md:text-base lg:text-lg text-nexia-primary/80 max-w-3xl mx-auto px-4">
          {t('services.subtitle')}
        </p>
      </div>

      {/* Expertise Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 px-4 lg:px-0">
        {expertiseDomains.map((domain, index) => (
          <Link
            key={index}
            to={domain.href}
            onClick={(e) => handleDomainClick(e, domain.href)}
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 block"
          >
            <div className="relative h-48 sm:h-56 md:h-64 lg:h-72">
              <img
                src={domain.image}
                alt={domain.title}
                className="w-full h-full object-cover"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <div className="flex items-end justify-between">
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg md:text-xl font-poppins leading-tight mb-2">
                      {domain.title}
                    </h3>
                  </div>
                  <div className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ExternalLink className="h-4 w-4 md:h-5 md:w-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}