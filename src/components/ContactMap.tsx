export default function ContactMap() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-nexia-primary mb-4">Localisation de nos bureaux</h2>
          <p className="text-nexia-primary">Carte interactive avec les deux bureaux</p>
        </div>
        
        <div className="rounded-lg overflow-hidden shadow-professional">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26583.78884989789!2d-7.6398!3d33.5916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM1JzI5LjgiTiA3wrAzNyc0Ny4yIlc!5e0!3m2!1sfr!2sma!4v1642765432198!5m2!1sfr!2sma"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localisation des bureaux Nexia Fiducia Maroc"
          />
        </div>

        {/* Marqueurs visuels des bureaux */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-nexia-primary">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-nexia-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-nexia-primary mb-2">Bureau Principal</h3>
                <p className="text-gray-600 text-sm mb-1">3, Rue Bab El Mansour</p>
                <p className="text-gray-600 text-sm mb-1">Résidence Imrane - RDC Bureau n°15</p>
                <p className="text-gray-600 text-sm mb-1">Espace Porte d'Anfa</p>
                <p className="text-gray-600 text-sm mb-3">Casablanca - Maroc</p>
                <div className="flex flex-col gap-2">
                  <a href="tel:+212522364588" className="text-nexia-secondary hover:text-nexia-primary font-medium">
                    +(212) 05 22 36 45 88/89
                  </a>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=3+Rue+Bab+El+Mansour+Casablanca+Morocco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-nexia-secondary hover:text-nexia-primary transition-colors"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Voir sur Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-nexia-secondary">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-nexia-secondary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-nexia-primary mb-2">Bureau Secondaire</h3>
                <p className="text-gray-600 text-sm mb-1">Rue des Pléaides</p>
                <p className="text-gray-600 text-sm mb-1">Quartier des Hôpitaux</p>
                <p className="text-gray-600 text-sm mb-3">Casablanca - Maroc</p>
                <div className="flex flex-col gap-2">
                  <a href="tel:+212522863715" className="text-nexia-secondary hover:text-nexia-primary font-medium">
                    +(212) 522 863 715
                  </a>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Rue+des+Pleaides+Quartier+des+Hopitaux+Casablanca+Morocco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-nexia-secondary hover:text-nexia-primary transition-colors"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Voir sur Google Maps
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