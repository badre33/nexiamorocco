import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSimpleLanguage } from "@/hooks/useSimpleLanguage";

const insights = [
  {
    image: "/uploads/e819835e-38b7-425e-917b-276faa067599.png",
    title: "Nexia Experts discuss the current Global Tariffs from the USA",
    description: "Dans ce podcast, nous abordons l'importance pour les entreprises de se tenir au courant des changements fréquents de tarifs dans le monde.",
    date: "Juillet 2025",
    source: "https://nexia.com/insights/nexia-experts-discuss-the-current-global-tariffs-from-the-usa/"
  },
  {
    image: "/uploads/3ee486b2-8d9a-4f08-b3a6-37819c7f9273.png",
    title: "Switzerland – Commercial investment trading",
    description: "En Suisse, les gains en capital réalisés par un particulier sur des biens mobiliers ne sont généralement pas soumis à l'impôt sur le revenu.",
    date: "Juin 2025",
    source: "https://nexia.com/insights/switzerland-commercial-investment-trading/"
  },
  {
    image: "/uploads/6b743136-5ea7-43a5-959d-0cdcee6f4b63.png",
    title: "Mining and the future: Strategic perspectives on global resource management",
    description: "À une époque de transformation rapide, le secteur minier mondial fait face à un examen intensifié, à des réglementations en évolution.",
    date: "Mai 2025",
    source: "https://nexia.com/insights/mining-and-the-future-strategic-perspectives-on-global-resource-management/"
  }
];

export default function ServicesInsights() {
  const { t } = useSimpleLanguage();
  
  return (
    <section className="nexia-section-padding bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-8">
        {/* Left Column - Content */}
        <div className="lg:col-span-1 space-y-6 flex flex-col">
          <h3 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-nexia-primary font-poppins leading-tight">
            {t('servicesInsights.title')}
          </h3>
          <p className="text-nexia-primary font-poppins leading-relaxed text-base md:text-lg">
            {t('servicesInsights.subtitle')}
          </p>
          <div className="flex-grow"></div>
          <Button asChild className="nexia-button-outline font-poppins font-medium px-6 lg:px-10 text-base w-fit">
            <Link to="/perspectives-mondiales" onClick={() => window.scrollTo(0, 0)}>{t('servicesInsights.button')}</Link>
          </Button>
          
          {/* Navigation Controls */}
          <div className="flex gap-2 pt-4 cursor-pointer">
            <Button variant="ghost" size="icon" className="text-nexia-primary hover:text-nexia-secondary p-0 h-auto w-auto hover:bg-transparent">
              <ChevronLeft className="h-10 w-10 lg:h-11 lg:w-11" />
            </Button>
            <Button variant="ghost" size="icon" className="text-nexia-primary hover:text-nexia-secondary p-0 h-auto w-auto hover:bg-transparent">
              <ChevronRight className="h-10 w-10 lg:h-11 lg:w-11" />
            </Button>
          </div>
        </div>

        {/* Right Columns - Insights */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6">
          {insights.map((insight, index) => (
            <div 
              key={index} 
              className="group cursor-pointer flex flex-col"
              onClick={() => window.open(insight.source, '_blank')}
            >
              <div className="overflow-hidden mb-4 rounded-lg">
                <img
                  src={insight.image}
                  alt={`Insight ${index + 1}`}
                  className="nexia-card-rounded w-full h-[280px] sm:h-[300px] lg:h-[320px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="font-bold text-nexia-primary font-poppins mb-3 leading-snug group-hover:text-nexia-secondary transition-colors duration-200 line-clamp-2 text-base md:text-lg">
                {insight.title}
              </h4>
              <p className="text-nexia-primary font-poppins text-sm md:text-base mt-auto">
                {insight.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}