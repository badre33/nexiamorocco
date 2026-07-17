import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useSimpleLanguage } from "@/hooks/useSimpleLanguage";

export default function HowCanWeHelp() {
  const { t } = useSimpleLanguage();
  
  return (
    <section className="w-full bg-nexia-secondary min-h-[500px] lg:h-[700px]">
      <div className="h-full flex flex-col lg:flex-row gap-0">
        {/* Image Column */}
        <div className="flex-1 h-[300px] lg:h-full">
          <img
            src="/uploads/d94f1f3b-e519-4e70-ac5b-aa9ce953e580.png"
            alt="How we can help you"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Column */}
        <div className="flex-1 flex items-center justify-center px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16">
          <div className="space-y-4 md:space-y-6 pr-0 lg:pr-[20%] pl-0 lg:pl-12 text-center lg:text-left">
            <p className="bolder text-nexia-primary font-poppins text-base md:text-lg">
              {t('help.title')}
            </p>
            <p className="text-nexia-primary font-poppins text-xl md:text-2xl lg:text-[28px] leading-relaxed">
              {t('help.description')}
            </p>
            <Button asChild className="nexia-button-primary font-poppins font-medium px-6 md:px-10">
              <Link to="/contact">{t('help.button')}</Link>
            </Button>
            <p className="text-nexia-primary/90 font-poppins text-sm md:text-base pt-2">
              <a href="/expertise-comptable-audit-casablanca" className="underline hover:text-white transition-colors">
                Expertise comptable &amp; audit à Casablanca
              </a>
              {" · "}
              <a href="/creer-societe-maroc" className="underline hover:text-white transition-colors">
                Créer une société au Maroc
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}