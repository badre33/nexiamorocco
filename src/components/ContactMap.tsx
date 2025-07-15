export default function ContactMap() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-nexia-primary mb-4">Localisation de nos bureaux</h2>
          <p className="text-nexia-primary">Trouvez-nous facilement grâce à notre carte interactive</p>
        </div>
        
        <div className="rounded-lg overflow-hidden shadow-professional">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13291.89424494893!2d-7.6298!3d33.5916!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0x8f5b0e85b6a9b9a9!2s3%20Rue%20Bab%20El%20Mansour%2C%20Casablanca%2020250%2C%20Morocco!5e0!3m2!1sen!2sus!4v1673890123456!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localisation des bureaux Nexia Fiducia Maroc"
          />
        </div>

        {/* Liens directs vers les adresses */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-nexia-primary mb-3">Bureau Principal</h3>
            <p className="text-gray-600 text-sm mb-3">3, Rue Bab El Mansour, Résidence Imrane - RDC Bureau n°15, Espace Porte d'Anfa, Casablanca</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=3+Rue+Bab+El+Mansour+Casablanca+Morocco"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-nexia-secondary hover:text-nexia-primary transition-colors font-medium"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Voir sur Google Maps
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-nexia-primary mb-3">Bureau Secondaire</h3>
            <p className="text-gray-600 text-sm mb-3">Rue des Pléaides, Quartier des Hôpitaux, Casablanca</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rue+des+Pleaides+Quartier+des+Hopitaux+Casablanca+Morocco"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-nexia-secondary hover:text-nexia-primary transition-colors font-medium"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Voir sur Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}