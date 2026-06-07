import { useState } from "react";
import { useSimpleLanguage } from "@/hooks/useSimpleLanguage";

// Embeds Google Maps correspondant exactement aux fiches Google Business Profile
// (q = nom de l'établissement + adresse => affiche le pin de la fiche, pas une simple coordonnée)
const OFFICE_MAPS = {
  casablanca:
    "https://www.google.com/maps?q=Nexia+Morocco,+41+Rue+Jbel+Toudgha,+Casablanca+20000&z=16&output=embed",
  tanger:
    "https://www.google.com/maps?q=Nexia+Fiducia,+Lotissement+New+Center,+Tanger&z=16&output=embed",
} as const;

type OfficeKey = keyof typeof OFFICE_MAPS;

export default function ContactMap() {
  const { t } = useSimpleLanguage();
  const [activeOffice, setActiveOffice] = useState<OfficeKey>("casablanca");

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-nexia-primary mb-4">{t('contactMap.title')}</h2>
          <p className="text-nexia-primary">{t('contactMap.subtitle')}</p>
        </div>

        {/* Sélecteur de bureau — bascule la carte embarquée entre les deux fiches GBP */}
        <div className="flex justify-center gap-3 mb-6">
          <button
            type="button"
            onClick={() => setActiveOffice("casablanca")}
            aria-pressed={activeOffice === "casablanca"}
            className={`px-6 py-2.5 rounded-full font-medium transition-colors ${
              activeOffice === "casablanca"
                ? "bg-nexia-primary text-white shadow-md"
                : "bg-white text-nexia-primary border border-nexia-primary/30 hover:border-nexia-primary"
            }`}
          >
            {t('contactMap.office1')}
          </button>
          <button
            type="button"
            onClick={() => setActiveOffice("tanger")}
            aria-pressed={activeOffice === "tanger"}
            className={`px-6 py-2.5 rounded-full font-medium transition-colors ${
              activeOffice === "tanger"
                ? "bg-nexia-secondary text-white shadow-md"
                : "bg-white text-nexia-primary border border-nexia-primary/30 hover:border-nexia-primary"
            }`}
          >
            {t('contactMap.office2')}
          </button>
        </div>

        <div className="rounded-lg overflow-hidden shadow-professional">
          <iframe
            key={activeOffice}
            src={OFFICE_MAPS[activeOffice]}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={
              activeOffice === "casablanca"
                ? "Nexia Morocco — Cabinet d'expertise comptable, 41 Rue Jbel Toudgha, Casablanca"
                : "Nexia Morocco — Bureau de Tanger, Lotissement New Center"
            }
          />
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
                    05 22 36 43 77
                  </a>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Nexia+Morocco+41+Rue+Jbel+Toudgha+CIL+Casablanca"
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
                    05 31 29 50 75
                  </a>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Nexia+Fiducia+Lotissement+New+Center+Tanger"
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
      </div>
    </section>
  );
}
