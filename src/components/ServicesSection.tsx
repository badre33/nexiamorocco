import { useSimpleLanguage } from "@/hooks/useSimpleLanguage";

const publications = [
  {
    id: 1,
    title: "Présentation Nexia Morocco 2025",
    description: "Découvrez notre cabinet, nos services et notre expertise à travers cette présentation complète.",
    category: "Présentation",
    author: "Nexia Morocco",
    date: "2025",
    readTime: "10 min",
    image: "/uploads/nexia-morocco-logo.png",
    excerpt: "Présentation officielle de Nexia Morocco pour l'année 2025...",
    link: "https://fltpndxdtovgjuqarfsh.supabase.co/storage/v1/object/public/nexia-files//Presentation%20Nexia%202025.pdf"
  },
  {
    id: 2,
    title: "Doing business in the Netherlands",
    description: "Guide pratique pour établir et développer son activité aux Pays-Bas.",
    category: "Publication",
    author: "Nexia International",
    date: "May 2025",
    readTime: "18 min",
    image: "/uploads/442433af-b60b-4c8b-adf1-f0247180f25a.png",
    excerpt: "Tout ce qu'il faut savoir pour réussir son implantation aux Pays-Bas...",
    link: "https://nexia.com/insights/doing-business-in-the-netherlands/"
  },
  {
    id: 3,
    title: "Investing in Germany",
    description: "Guide complet pour les investissements et opportunités d'affaires en Allemagne.",
    category: "Publication",
    author: "Nexia International",
    date: "April 2025",
    readTime: "16 min",
    image: "/uploads/fa6c42de-4300-4bf8-a271-71b40df7cf91.png",
    excerpt: "Découvrez les opportunités d'investissement et le climat des affaires en Allemagne...",
    link: "https://nexia.com/insights/investing-in-germany/"
  },
  {
    id: 4,
    title: "Doing business and investing in Albania 2024 edition",
    description: "Guide complet pour faire des affaires et investir en Albanie édition 2024.",
    category: "Publication",
    author: "Nexia International",
    date: "March 2024",
    readTime: "14 min",
    image: "/uploads/426bc007-ebb3-4cf3-8991-d229001ea6f1.png",
    excerpt: "Découvrez les opportunités d'affaires et d'investissement en Albanie...",
    link: "https://nexia.com/insights/doing-business-and-investing-in-albania-2024-edition/"
  },
  {
    id: 5,
    title: "Tax Guide for Ukraine 2024",
    description: "Guide fiscal complet pour l'Ukraine en 2024, incluant les dernières réglementations et opportunités d'investissement.",
    category: "Publication",
    author: "Nexia International",
    date: "February 2024",
    readTime: "15 min",
    image: "/uploads/83429b5e-b956-4053-9d8c-a6e88013b91a.png",
    excerpt: "Un guide complet sur la fiscalité ukrainienne pour les entreprises internationales en 2024...",
    link: "https://nexia.com/insights/tax-guide-for-ukraine-2024/"
  },
];

export default function ServicesSection() {
  const { t } = useSimpleLanguage();
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-nexia-primary mb-6">
            {t('servicesSection.title')}
          </h3>
          <p className="text-nexia-primary text-lg max-w-3xl mx-auto leading-relaxed">
            {t('servicesSection.subtitle')}
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
              <a
                key={publication.id}
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-none w-80 bg-white rounded-lg shadow-professional hover:shadow-hover transition-all duration-300 overflow-hidden cursor-pointer"
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
              </a>
            ))}
          </div>
        </div>

        {/* CTA pour voir toutes les publications */}
        <div className="text-center mt-12">
          <a
            href="https://nexia.com/insights/?_sft_insight_type=publication#insightLoop"
            target="_blank"
            rel="noopener noreferrer"
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
