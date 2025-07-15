const publications = [
  {
    id: 1,
    title: "Tax Guide for Ukraine 2024",
    description: "Guide fiscal complet pour l'Ukraine en 2024, incluant les dernières réglementations et opportunités d'investissement.",
    category: "Publication",
    author: "Nexia International",
    date: "February 2024",
    readTime: "15 min",
    image: "https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/02/ukraine-tax-guide-2024.jpg",
    excerpt: "Un guide complet sur la fiscalité ukrainienne pour les entreprises internationales en 2024..."
  },
  {
    id: 2,
    title: "EMEA Holding Company Analysis Update 2023",
    description: "Analyse mise à jour des structures de holding en région EMEA pour l'année 2023.",
    category: "Publication",
    author: "Nexia International",
    date: "June 2023",
    readTime: "12 min",
    image: "https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2023/06/emea-holding-analysis-2023.jpg",
    excerpt: "Découvrez les dernières tendances et évolutions des structures de holding en EMEA..."
  },
  {
    id: 3,
    title: "Turnaround Restructuring Insolvency – Service brochure",
    description: "Brochure de services spécialisés en restructuration et insolvabilité d'entreprises.",
    category: "Publication",
    author: "Nexia International",
    date: "June 2021",
    readTime: "10 min",
    image: "https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2021/06/turnaround-restructuring-brochure.jpg",
    excerpt: "Nos services spécialisés pour accompagner les entreprises en difficulté..."
  },
  {
    id: 4,
    title: "Doing business in the Netherlands",
    description: "Guide pratique pour établir et développer son activité aux Pays-Bas.",
    category: "Publication",
    author: "Nexia International",
    date: "May 2025",
    readTime: "18 min",
    image: "https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2025/05/doing-business-netherlands.jpg",
    excerpt: "Tout ce qu'il faut savoir pour réussir son implantation aux Pays-Bas..."
  },
  {
    id: 5,
    title: "Investing in Germany",
    description: "Guide complet pour les investissements et opportunités d'affaires en Allemagne.",
    category: "Publication",
    author: "Nexia International",
    date: "April 2025",
    readTime: "16 min",
    image: "https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2025/04/investing-in-germany.jpg",
    excerpt: "Découvrez les opportunités d'investissement et le climat des affaires en Allemagne..."
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-nexia-primary mb-6">
            Publications Nexia International
          </h3>
          <p className="text-nexia-primary text-lg max-w-3xl mx-auto leading-relaxed">
            Découvrez nos dernières publications et analyses du réseau international Nexia. 
            Restez informé des tendances du marché, des évolutions réglementaires et de nos insights sectoriels.
          </p>
        </div>

        {/* Publications avec scroll horizontal */}
        <div className="relative">
          <style dangerouslySetInnerHTML={{
            __html: `
              .scroll-container::-webkit-scrollbar {
                display: none;
              }
              .scroll-container {
                scrollbar-width: none;
                -ms-overflow-style: none;
              }
            `
          }} />
          <div className="flex gap-6 overflow-x-auto pb-4 scroll-container">
            {publications.map((publication, index) => (
              <div
                key={publication.id}
                className="flex-none w-80 bg-white rounded-lg shadow-professional hover:shadow-hover transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={publication.image}
                    alt={publication.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-nexia-accent bg-nexia-accent/10 px-2 py-1 rounded">
                      {publication.category}
                    </span>
                    <span className="text-xs text-nexia-primary/60">
                      {publication.readTime}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-nexia-primary mb-3 line-clamp-2">
                    {publication.title}
                  </h4>
                  <p className="text-nexia-primary/80 text-sm mb-4 line-clamp-3">
                    {publication.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-nexia-primary/60">
                    <span>{publication.author}</span>
                    <span>{publication.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA pour voir toutes les publications */}
        <div className="text-center mt-12">
          <a
            href="/publications-nexia-international"
            className="inline-flex items-center gap-2 bg-nexia-secondary text-white px-8 py-3 rounded-lg font-medium hover:bg-nexia-primary transition-colors duration-200"
          >
            Voir toutes les publications Nexia International
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}