import { useSimpleLanguage } from "@/hooks/useSimpleLanguage";

export default function GovernanceSection() {
  const { t } = useSimpleLanguage();
  
  return (
    <section className="relative py-32">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/uploads/031a3c04-ca5d-4ca8-b276-f114c99bd54f.png"
          alt="Vue aérienne de la médina marocaine"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              {t('imageCard.title')}
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              {t('imageCard.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}