import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
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
    'services.audit': 'Audit & Commissariat aux comptes',
    'services.accounting': 'Expertise comptable & Conseil',
    'services.tax': 'Fiscalité & Optimisation fiscale',
    'services.corporate': 'Corporate Finance & M&A',
    'services.legal': 'Accompagnement juridique & social',
    'services.outsourcing': 'Outsourcing & Externalisation',
    'services.digital': 'Digitalisation et systèmes d\'information',
    'services.international': 'Support aux investisseurs étrangers',
    'services.strategy': 'Conseil en stratégie & développement',
    'services.talent': 'Talent & Mobility Solutions',
    
    // Insights
    'insights.title': 'Perspectives Mondiales',
    'insights.subtitle': 'Découvrez nos analyses d\'experts sur les tendances mondiales qui façonnent l\'avenir des entreprises au Maroc et à l\'international',
    'insights.featured.title': 'Le coût des médicaments au Maroc : un enjeu économique et stratégique qui persiste',
    'insights.featured.description': 'Plus de deux ans après l\'annonce de mesures visant à réduire les prix des médicaments, la question reste d\'une brûlante actualité. Ce décalage n\'est pas uniquement une problématique budgétaire pour les ménages mais un enjeu systémique qui concerne la souveraineté sanitaire du Maroc.',
    'insights.read': 'Lire l\'article',
    'insights.viewAll': 'Voir Toutes Nos Perspectives',
    
    // About
    'about.title': 'Qui sommes-nous ?',
    'about.subtitle': 'Nexia Fiducia Maroc est un cabinet d\'expertise comptable et de conseil reconnu, membre du réseau international Nexia.',
    
    // Contact
    'contact.title': 'Contactez-nous',
    'contact.subtitle': 'Notre équipe d\'experts est à votre disposition pour répondre à vos questions et vous accompagner dans vos projets.',
    
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
    'services.audit': 'Audit & Statutory Audit',
    'services.accounting': 'Accounting Expertise & Advisory',
    'services.tax': 'Taxation & Tax Optimization',
    'services.corporate': 'Corporate Finance & M&A',
    'services.legal': 'Legal & Social Support',
    'services.outsourcing': 'Outsourcing & Externalization',
    'services.digital': 'Digitalization and Information Systems',
    'services.international': 'Foreign Investor Support',
    'services.strategy': 'Strategy & Development Consulting',
    'services.talent': 'Talent & Mobility Solutions',
    
    // Insights
    'insights.title': 'Global Perspectives',
    'insights.subtitle': 'Discover our expert analyses on global trends shaping the future of businesses in Morocco and internationally',
    'insights.featured.title': 'The cost of medicines in Morocco: a persistent economic and strategic challenge',
    'insights.featured.description': 'More than two years after the announcement of measures aimed at reducing drug prices, the issue remains of burning relevance. This gap is not just a budgetary problem for households but a systemic issue that concerns Morocco\'s health sovereignty.',
    'insights.read': 'Read article',
    'insights.viewAll': 'View All Our Perspectives',
    
    // About
    'about.title': 'Who are we?',
    'about.subtitle': 'Nexia Fiducia Morocco is a recognized accounting and consulting firm, member of the Nexia international network.',
    
    // Contact
    'contact.title': 'Contact us',
    'contact.subtitle': 'Our team of experts is at your disposal to answer your questions and support you in your projects.',
    
    // Common
    'common.readMore': 'Learn more',
    'common.contact': 'Contact us',
    'common.minutes': 'min',
    'common.author': 'Nexia Fiducia Morocco',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    const translation = translations[language]?.[key as keyof typeof translations['fr']];
    return translation || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};