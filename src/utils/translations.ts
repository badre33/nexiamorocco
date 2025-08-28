export type Language = 'fr' | 'en';

export const translations = {
  fr: {
    // Header
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.services': 'Services', 
    'nav.insights': 'Perspectives',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Votre partenaire de confiance pour une expertise comptable et financière de premier plan',
    'hero.subtitle': 'Nexia Fiducia Maroc accompagne les entreprises dans leur développement avec des solutions sur mesure, une expertise reconnue et un service client d\'exception.',
    'hero.cta': 'Découvrir nos services',
    'hero.contact': 'Nous contacter',
    
    // Services
    'services.title': 'Nos domaines d\'expertise',
    'services.subtitle': 'Découvrez l\'ensemble de nos services professionnels conçus pour accompagner votre entreprise dans sa croissance et sa réussite.',
    
    // Insights
    'insights.title': 'Perspectives Mondiales',
    'insights.subtitle': 'Découvrez nos analyses d\'experts sur les tendances mondiales qui façonnent l\'avenir des entreprises au Maroc et à l\'international',
    'insights.featured.title': 'Le coût des médicaments au Maroc : un enjeu économique et stratégique qui persiste',
    'insights.featured.description': 'Plus de deux ans après l\'annonce de mesures visant à réduire les prix des médicaments, la question reste d\'une brûlante actualité.',
    'insights.read': 'Lire l\'article',
    'insights.viewAll': 'Voir Toutes Nos Perspectives',
    
    // Common
    'common.readMore': 'En savoir plus',
    'common.contact': 'Nous contacter',
    'common.minutes': 'min',
    'common.author': 'Nexia Fiducia Maroc',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.insights': 'Insights', 
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Your trusted partner for premier accounting and financial expertise',
    'hero.subtitle': 'Nexia Fiducia Morocco supports companies in their development with tailor-made solutions, recognized expertise and exceptional customer service.',
    'hero.cta': 'Discover our services',
    'hero.contact': 'Contact us',
    
    // Services
    'services.title': 'Our areas of expertise',
    'services.subtitle': 'Discover our comprehensive range of professional services designed to support your business growth and success.',
    
    // Insights
    'insights.title': 'Global Perspectives',
    'insights.subtitle': 'Discover our expert analyses on global trends shaping the future of businesses in Morocco and internationally',
    'insights.featured.title': 'The cost of medicines in Morocco: a persistent economic and strategic challenge',
    'insights.featured.description': 'More than two years after the announcement of measures aimed at reducing drug prices, the issue remains of burning relevance.',
    'insights.read': 'Read article',
    'insights.viewAll': 'View All Our Perspectives',
    
    // Common
    'common.readMore': 'Learn more',
    'common.contact': 'Contact us',
    'common.minutes': 'min',
    'common.author': 'Nexia Fiducia Morocco',
  }
} as const;

export const translate = (language: Language, key: string): string => {
  const translation = translations[language]?.[key as keyof typeof translations['fr']];
  return translation || key;
};