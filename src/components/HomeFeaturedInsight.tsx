import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { useSimpleLanguage } from "@/hooks/useSimpleLanguage";

export default function HomeFeaturedInsight() {
  const { t } = useSimpleLanguage();
  
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-nexia-primary mb-4 lg:mb-6">
            {t('insights.title')}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-nexia-primary/80 max-w-3xl mx-auto leading-relaxed px-4">
            {t('insights.subtitle')}
          </p>
        </div>

        {/* Featured Article */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <img
                src="/uploads/cef4902e-b1e7-4925-9e79-9a625447ce65.png"
                alt="Le coût des médicaments au Maroc"
                className="w-full h-48 sm:h-56 md:h-full object-cover"
                style={{ objectPosition: '10% center' }}
              />
            </div>
            <div className="md:w-1/2 p-4 sm:p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-nexia-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                  Santé publique
                </span>
                <span className="bg-nexia-primary/10 text-nexia-primary px-3 py-1 rounded-full text-sm font-medium">
                  À la une
                </span>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-nexia-primary mb-3 lg:mb-4">
                {t('insights.featured.title')}
              </h3>
              <p className="text-gray-600 mb-4 lg:mb-6 leading-relaxed text-sm sm:text-base">
                {t('insights.featured.description')}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {t('common.author')}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Août 2025
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    12 {t('common.minutes')}
                  </div>
                </div>
                <Button 
                  className="bg-nexia-primary hover:bg-nexia-primary/90 text-sm sm:text-base"
                  onClick={() => {
                    window.location.href = '/perspectives-mondiales/cout-medicaments-maroc';
                    window.scrollTo(0, 0);
                  }}
                >
                  {t('insights.read')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA to all insights */}
        <div className="text-center mt-8 lg:mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="text-sm sm:text-base"
            onClick={() => {
              window.location.href = '/perspectives-mondiales';
              window.scrollTo(0, 0);
            }}
          >
            {t('insights.viewAll')}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}