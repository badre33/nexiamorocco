import { useSimpleLanguage } from "@/hooks/useSimpleLanguage";

export default function ContactMap() {
  const { t } = useSimpleLanguage();
  
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-nexia-primary mb-4">{t('contactMap.title')}</h2>
          <p className="text-nexia-primary">{t('contactMap.subtitle')}</p>
        </div>
        
        <div className="rounded-lg overflow-hidden shadow-professional">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6595.947!2d-7.6298!3d33.5890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0x8f5b0e85b6a9b9a9!2sCasablanca%2C%20Morocco!5e0!3m2!1sfr!2sma!4v1642765432198!5m2!1sfr!2sma&z=14"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={t('contactMap.mapTitle')}
          />
        </div>

        {/* Instructions pour voir les deux bureaux */}
        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-800 text-center">
            <strong>{t('contactMap.instructions')}</strong> {t('contactMap.instructionsDetails')}
          </p>
        </div>

        {/* Marqueurs visuels des bureaux */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-nexia-primary">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-nexia-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-nexia-primary mb-2">{t('contactMap.office1')}</h3>
                <p className="text-gray-600 text-sm mb-1">41 Rue Jbel Toudgha</p>
                <p className="text-gray-600 text-sm mb-1">CIL</p>
                <p className="text-gray-600 text-sm mb-3">Casablanca - Maroc</p>
                <div className="flex flex-col gap-2">
                  <a href="tel:+212522364377" className="text-nexia-secondary hover:text-nexia-primary font-medium">
                    05 22 364377
                  </a>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=41+Rue+Jbel+Toudgha+CIL+Casablanca+Morocco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-nexia-secondary hover:text-nexia-primary transition-colors"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {t('contactMap.viewOnMaps')}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-nexia-secondary">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-nexia-secondary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-nexia-primary mb-2">{t('contactMap.office2')}</h3>
                <p className="text-gray-600 text-sm mb-1">Lotissement New Center Lots 3</p>
                <p className="text-gray-600 text-sm mb-1">Etage 1, N°16</p>
                <p className="text-gray-600 text-sm mb-3">Tanger - Maroc</p>
                <div className="flex flex-col gap-2">
                  <a href="tel:+212531295075" className="text-nexia-secondary hover:text-nexia-primary font-medium">
                    0531295075
                  </a>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Lotissement+New+Center+Lots+3+Tanger+Morocco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-nexia-secondary hover:text-nexia-primary transition-colors"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {t('contactMap.viewOnMaps')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Légende pour aider l'utilisateur */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            {t('contactMap.helpText')}
          </p>
        </div>
      </div>
    </section>
  );
}