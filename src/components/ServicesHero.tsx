import { useSimpleLanguage } from "@/hooks/useSimpleLanguage";

export default function ServicesHero() {
  const { t } = useSimpleLanguage();
  
  return (
    <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/622c05eb-5be8-4d65-8337-8b1100601dbb.png"
          alt="Services background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full">
        <div className="bg-white p-6 md:p-8 lg:p-12 max-w-3xl">
          <p className="text-nexia-secondary font-bold text-base md:text-lg mb-3 md:mb-4">
            {t('servicesHero.tagline')}
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-nexia-primary leading-tight mb-4 md:mb-6">
            {t('servicesHero.title')}
          </h1>
          <p className="text-base md:text-lg text-nexia-primary leading-relaxed">
            {t('servicesHero.description')}
          </p>
        </div>
      </div>
    </section>
  );
}