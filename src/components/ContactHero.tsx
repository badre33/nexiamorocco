// import heroBackground from "@/assets/hero-background.jpg";

import { useSimpleLanguage } from "@/hooks/useSimpleLanguage";

export default function ContactHero() {
  const { t } = useSimpleLanguage();
  
  return (
    <section className="relative min-h-[600px] py-12 md:py-16 lg:py-20 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/cd1d5d63-1fdb-4d40-9016-a19aaeb69709.png"
          alt="Contact us hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-nexia-primary/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/95 backdrop-blur-sm p-4 sm:p-6 md:p-8 lg:p-12 rounded-lg shadow-professional">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-nexia-primary mb-6 md:mb-8 text-center">
            {t('contactHero.title')}
          </h1>
          
          <div className="mb-6 md:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-nexia-primary mb-4 md:mb-6 text-center">Nos Bureaux</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {/* Bureau 1 */}
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-bold text-nexia-primary mb-3 sm:mb-4">Bureau 1</h3>
              <div className="space-y-2">
                <p className="text-nexia-primary text-sm sm:text-base">3, Rue Bab El Mansour</p>
                <p className="text-nexia-primary text-sm sm:text-base">Résidence Imrane - RDC Bureau n°15</p>
                <p className="text-nexia-primary text-sm sm:text-base">Espace Porte d'Anfa</p>
                <p className="text-nexia-primary text-sm sm:text-base">Casablanca - Maroc</p>
                <p className="text-nexia-primary font-medium mt-3 text-sm sm:text-base">
                  Tél: <a href="tel:+212522364588" className="text-nexia-secondary hover:underline break-all">+(212) 05 22 36 45 88/89</a>
                </p>
              </div>
            </div>

            {/* Bureau 2 */}
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-bold text-nexia-primary mb-3 sm:mb-4">Bureau 2</h3>
              <div className="space-y-2">
                <p className="text-nexia-primary text-sm sm:text-base">Rue des Pléaides</p>
                <p className="text-nexia-primary text-sm sm:text-base">Quartier des Hôpitaux</p>
                <p className="text-nexia-primary text-sm sm:text-base">Casablanca - Maroc</p>
                <p className="text-nexia-primary font-medium mt-3 text-sm sm:text-base">
                  Tél: <a href="tel:+212522863715" className="text-nexia-secondary hover:underline break-all">+(212) 522 863 715</a>
                </p>
              </div>
            </div>
          </div>

          {/* Manager Contact Section */}
          <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-200">
            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-bold text-nexia-primary mb-3 sm:mb-4">{t('contactHero.managerContact')}</h3>
              <div className="bg-gradient-to-br from-nexia-secondary/10 to-nexia-primary/10 p-4 sm:p-6 rounded-lg">
                <h4 className="text-base sm:text-lg font-semibold text-nexia-primary mb-2">Mohammed EZZAHIR</h4>
                <p className="text-sm sm:text-base text-nexia-primary mb-3">Manager</p>
                <a 
                  href="https://wa.me/212671702575"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm sm:text-base font-medium"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp: +212 671-702575
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}