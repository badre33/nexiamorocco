export type Language = 'fr' | 'en';

export const translations = {
  fr: {
    // Header
    'nav.home': 'Accueil',
    'nav.expertise': 'Domaines d\'Expertise',
    'nav.team': 'Équipe Dirigeante',
    'nav.insights': 'Perspectives',
    'nav.globalPerspectives': 'Perspectives Mondiales',
    'nav.caseStudies': 'Études de Cas',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.slide1.title': 'L\'expertise de confiance, au service de votre performance',
    'hero.slide1.subtitle': 'Audit, fiscalité, stratégie, conformité, corporate finance… Nos domaines d\'expertise s\'adaptent à vos enjeux au Maroc et à l\'international.',
    'hero.slide1.button': 'Découvrir nos domaines d\'expertise',
    'hero.slide2.title': 'Une signature locale, un réseau mondial',
    'hero.slide2.subtitle': 'Nexia Fiducia Maroc, membre du réseau Nexia International, accompagne les entreprises marocaines et étrangères avec un engagement d\'excellence, d\'éthique et de proximité.',
    'hero.slide2.button': 'En savoir plus sur Nexia Fiducia Maroc',
    'hero.slide3.title': 'Une équipe dirigeante engagée à vos côtés',
    'hero.slide3.subtitle': 'Découvrez les profils et expertises des associés qui portent la vision de Nexia Fiducia Maroc et accompagnent nos clients au quotidien.',
    'hero.slide3.button': 'Rencontrer notre équipe',
    
    // About Section
    'about.title': 'À propos de nous',
    'about.description': 'Chez Nexia Fiducia Maroc, notre mission est d\'accompagner les entreprises marocaines et internationales dans toutes les étapes de leur croissance, de leur structuration et de leur mise en conformité. Grâce à notre ancrage local fort, allié à la puissance du réseau Nexia International, nous offrons des expertises pluridisciplinaires, rigoureuses et adaptées à vos enjeux réels.',
    'about.link': 'En savoir plus sur nous',
    'about.service1': 'Audit',
    'about.service2': 'Fiscalité', 
    'about.service3': 'Conseil',
    
    // Hero About Page
    'aboutHero.tagline': 'À PROPOS DE NOUS',
    'aboutHero.title': 'Expertise et proximité au service de votre réussite',
    'aboutHero.button': 'En savoir plus',
    
    // About Page Section
    'aboutPage.tagline': 'À PROPOS DE NOUS',
    'aboutPage.title': 'Nexia Fiducia Maroc, votre partenaire de confiance',
    'aboutPage.description': 'Nexia Fiducia Maroc est né de la fusion entre le cabinet Advisoris et Nexia Maroc en 2022, créant ainsi un acteur majeur de l\'audit, du commissariat aux comptes et du conseil au Maroc. Forts de notre expertise reconnue et de notre appartenance au réseau international Nexia, nous accompagnons nos clients dans leur développement avec une approche personnalisée et des solutions innovantes.',
    'aboutPage.videoTitle': 'Présentation Nexia Fiducia Maroc',
    
    // Services Page
    'servicesHero.tagline': 'Nos Domaines d\'Expertise',
    'servicesHero.title': 'Un accompagnement global, une expertise locale et internationale',
    'servicesHero.description': 'Chez Nexia Fiducia Maroc, nous offrons une palette complète de services conçus pour accompagner les entreprises à chaque étape de leur développement. Nos domaines d\'expertise couvrent l\'ensemble des enjeux stratégiques, financiers, fiscaux, réglementaires et organisationnels de nos clients.',
    
    // Services
    'services.title': 'Nos domaines d\'expertise',
    'services.subtitle': 'Découvrez l\'ensemble de nos services professionnels conçus pour accompagner votre entreprise dans sa croissance et sa réussite.',
    
    // Capabilities Section
    'capabilities.title': 'Vous avez un projet ou une problématique spécifique ?',
    'capabilities.description': 'Nos équipes sont à votre écoute pour construire avec vous des solutions sur-mesure, efficaces et conformes aux meilleures pratiques.',
    'capabilities.button': 'Contactez-nous',
    
    // Team Page
    'team.heroTitle': 'Notre Équipe Dirigeante',
    'team.heroSubtitle': 'Découvrez les profils et expertises des associés qui portent la vision de Nexia Fiducia Maroc et accompagnent nos clients au quotidien.',
    'team.partnersTitle': 'Nos Associés',
    'team.partnersSubtitle': 'Une expertise reconnue au service de votre succès',
    'team.specialties': 'Domaines d\'expertise',
    'team.ctaTitle': 'Prêt à collaborer avec notre équipe ?',
    'team.ctaSubtitle': 'Contactez-nous pour découvrir comment notre expertise peut accompagner votre développement au Maroc et à l\'international.',
    'team.ctaButton': 'Nous contacter',
    
    // Case Study Section
    'caseStudy.title': 'Études de cas',
    'caseStudy.description': 'Découvrez comment nous accompagnons nos clients dans leurs défis les plus complexes à travers des missions concrètes et des résultats mesurables. Transformation digitale, restructuration fiscale, accompagnement IPO... nos études de cas illustrent notre expertise en action.',
    'caseStudy.button': 'Découvrir nos études de cas',
    
    // Latest Insights Section  
    'latestInsights.title': 'Perspectives Mondiales',
    'latestInsights.description': 'Découvrez nos dernières analyses d\'experts sur les tendances qui façonnent l\'avenir des entreprises au Maroc et à l\'international.',
    'latestInsights.button': 'Voir plus d\'insights',
    
    // Facts Section
    'facts.title': 'Notre Monde en Chiffres',
    'facts.description': 'Nexia International est un réseau mondial de premier plan regroupant des cabinets indépendants d\'expertise comptable et de conseil. Lorsque vous choisissez un cabinet Nexia, vous bénéficiez d\'un service plus réactif, plus personnalisé et dirigé par des associés, partout dans le monde.',
    'facts.globalStats': 'Statistiques Globales',
    'facts.regionalStats': 'Répartition par Région',
    'facts.services': 'Lignes de services',
    'facts.achievements': 'Récompenses et Accréditations',
    'facts.globalPeople': 'personnes',
    'facts.globalCountries': 'pays',
    'facts.globalRatio': 'Ratio associé/employé',
    'facts.northAmerica': 'Amérique du Nord',
    'facts.emeaRegion': 'Europe, Moyen-Orient et Afrique',
    'facts.asiaPacific': 'Asie-Pacifique',
    'facts.latinAmerica': 'Amérique Latine',
    'facts.businessGroups': 'Comités et Groupes d\'Affaires',
    'facts.center': 'Centre',
    'facts.offices': 'Bureaux',
    'facts.partners': 'Associés',
    'facts.serviceConsulting': 'Conseil',
    'facts.serviceAudit': 'Audit',
    'facts.serviceTax': 'Fiscalité',
    'facts.revenue': '4.3 milliards USD de revenus pour 2019',
    'facts.worldwideOffices': '727 bureaux dans le monde',
    'facts.globalNetwork': 'Réseau mondial étendu',
    
    // Our Services Menu
    'servicesMenu.excellenceTitle': 'Excellence & Expertise',
    'servicesMenu.title': 'Nos Domaines d\'Expertise',
    'servicesMenu.description': 'Plus de 25 ans d\'expérience au service de votre croissance. 10 domaines d\'expertise pour accompagner tous vos projets.',
    'servicesMenu.domain': 'Domaine',
    'servicesMenu.on': 'sur',
    'servicesMenu.experience': 'Années d\'expérience',
    'servicesMenu.clients': 'Clients satisfaits',
    'servicesMenu.services': 'Notre approche',
    
    // Insights Page
    'insightsPage.title': 'Perspectives Mondiales',
    'insightsPage.subtitle': 'Découvrez nos analyses d\'experts sur les tendances mondiales qui façonnent l\'avenir des entreprises au Maroc et à l\'international',
    'insightsPage.search': 'Rechercher un article...',
    'insightsPage.featured': 'Article mis en avant',
    'insightsPage.featuredBadge': 'À la une',
    'insightsPage.readArticle': 'Lire l\'article',
    'insightsPage.category.all': 'Tous',
    'insightsPage.category.health': 'Santé publique',
    'insightsPage.category.international': 'Réseau international',
    'insightsPage.category.trade': 'Commerce international',
    'insightsPage.category.investment': 'Investissement international',
    'insightsPage.category.tax': 'Fiscalité internationale',
    'insightsPage.category.audit': 'Audit & conformité',
    'insightsPage.category.strategy': 'Stratégie d\'entreprise',
    'insightsPage.category.finance': 'Corporate Finance',
    'insightsPage.category.regulation': 'Réglementation',
    
    // Contact Form
    'contactForm.title': 'Contactez nos experts',
    'contactForm.description': 'Parlez-nous de votre projet. Notre équipe d\'experts vous accompagnera dans toutes vos démarches comptables et fiscales.',
    'contactForm.firstName': 'Prénom',
    'contactForm.lastName': 'Nom',
    'contactForm.email': 'Email',
    'contactForm.company': 'Entreprise',
    'contactForm.phone': 'Téléphone',
    'contactForm.service': 'Service souhaité',
    'contactForm.message': 'Message',
    'contactForm.submit': 'Envoyer le message',
    'contactForm.required': 'requis',
    'contactForm.sending': 'Envoi en cours...',
    'contactForm.success': 'Message envoyé avec succès !',
    'contactForm.successDesc': 'Nous vous répondrons dans les plus brefs délais.',
    'contactForm.yourFirstName': 'Votre prénom',
    'contactForm.yourLastName': 'Votre nom',
    'contactForm.yourMessage': 'Votre message...',
    'contactForm.selectService': 'Sélectionnez un service',
    'contactForm.errors.firstName': 'Le prénom est requis',
    'contactForm.errors.lastName': 'Le nom est requis',
    'contactForm.errors.email': 'L\'email est requis',
    'contactForm.errors.emailInvalid': 'Format email invalide',
    'contactForm.errors.phone': 'Le téléphone est requis',
    'contactForm.errors.message': 'Le message est requis',
    
    // Insights
    'insights.title': 'Perspectives Mondiales',
    'insights.subtitle': 'Découvrez nos analyses d\'experts sur les tendances mondiales qui façonnent l\'avenir des entreprises au Maroc et à l\'international',
    'insights.featured.title': 'Le coût des médicaments au Maroc : un enjeu économique et stratégique qui persiste',
    'insights.featured.description': 'Plus de deux ans après l\'annonce de mesures visant à réduire les prix des médicaments, la question reste d\'une brûlante actualité.',
    'insights.read': 'Lire l\'article',
    'insights.viewAll': 'Voir Toutes Nos Perspectives',
    
    // Why Nexia Section
    'whyNexia.title': 'Pourquoi',
    'whyNexia.subtitle': 'Nexia Fiducia Maroc',
    'whyNexia.description1': 'Fort de notre appartenance au réseau international Nexia, nous combinons l\'expertise locale approfondie du marché marocain avec les standards internationaux les plus exigeants.',
    'whyNexia.description2': 'Notre approche personnalisée et notre engagement envers l\'excellence nous permettent d\'accompagner efficacement nos clients dans leurs défis financiers et stratégiques.',
    'whyNexia.stats.experience': 'Années d\'expérience',
    'whyNexia.stats.clients': 'Clients satisfaits',
    'whyNexia.stats.offices': 'Bureaux Nexia mondial',
    'whyNexia.button': 'En savoir plus',
    
    // How Can We Help Section
    'help.title': 'Comment pouvons-nous vous aider ?',
    'help.description': 'Nos équipes sont à votre écoute pour construire avec vous des solutions sur-mesure, efficaces et conformes aux meilleures pratiques.',
    'help.button': 'Contactez-nous',
    
    // Service Cards
    'service.audit.title': 'Audit & Commissariat aux comptes',
    'service.expertise.title': 'Expertise comptable & Conseil',
    'service.fiscal.title': 'Fiscalité & Optimisation fiscale',
    'service.finance.title': 'Corporate Finance & M&A',
    'service.legal.title': 'Accompagnement juridique & social',
    'service.outsourcing.title': 'Outsourcing & Externalisation',
    'service.digitalization.title': 'Digitalisation et systèmes d\'information',
    'service.support.title': 'Support aux investisseurs étrangers',
    'service.strategy.title': 'Conseil en stratégie & développement',
    'service.talent.title': 'Talent & Mobility',
    
    // Footer
    'footer.description': 'Nexia Fiducia Maroc est membre de Nexia, un réseau mondial de premier plan de cabinets indépendants de comptabilité et de conseil.',
    'footer.disclaimer': 'Member firm disclaimer',
    'footer.privacy': 'Privacy policy', 
    'footer.cookie': 'Cookie Policy',
    'footer.email': 'Email disclaimer',
    'footer.copyright': '© 2024 Nexia Templates. All rights reserved.',
    
    
    // Detailed Expertise Domains
    'expertise.audit.title': 'Audit & Commissariat aux comptes',
    'expertise.audit.badge': 'Certification ISA',
    'expertise.audit.description': 'Parce que la transparence financière est aujourd\'hui un levier stratégique de confiance, nous réalisons vos audits avec une rigueur absolue et une méthodologie conforme aux normes internationales (IFRS, ISA). Notre approche combine exigence technique, indépendance professionnelle et compréhension sectorielle, pour garantir la fiabilité de vos états financiers et renforcer votre crédibilité auprès des investisseurs, partenaires et régulateurs.',
    'expertise.audit.service1': 'Audit légal et contractuel',
    'expertise.audit.service2': 'Commissariat aux comptes',
    'expertise.audit.service3': 'Audit d\'acquisition et due diligence',
    'expertise.audit.service4': 'Audit interne et contrôle permanent',
    'expertise.audit.service5': 'Audit des systèmes d\'information',
    
    'expertise.comptable.title': 'Expertise comptable & Conseil opérationnel',
    'expertise.comptable.badge': 'Expertise Certifiée',
    'expertise.comptable.description': 'Une comptabilité bien tenue est plus qu\'une obligation : c\'est un outil de pilotage. Nos experts-comptables vous accompagnent dans la structuration, la supervision et l\'optimisation de vos processus comptables, tout en vous apportant un éclairage stratégique sur vos performances et marges. Nous intervenons à la fois en mode externalisé ou collaboratif, selon vos besoins.',
    'expertise.comptable.service1': 'Tenue comptable, supervision & reporting',
    'expertise.comptable.service2': 'Établissement des états financiers',
    'expertise.comptable.service3': 'Révision comptable & tableaux de bord',
    'expertise.comptable.service4': 'Conseil en gestion & aide à la décision',
    'expertise.comptable.service5': 'Accompagnement à la transformation digitale des fonctions financières',
    
    'expertise.fiscalite.title': 'Fiscalité & Optimisation fiscale',
    'expertise.fiscalite.badge': 'Expertise Fiscale',
    'expertise.fiscalite.description': 'Dans un environnement fiscal en constante évolution, nous vous aidons à anticiper, sécuriser et optimiser vos obligations fiscales, tout en veillant à la conformité réglementaire. Notre approche personnalisée prend en compte la structure de votre entreprise, vos flux internationaux et vos enjeux de croissance.',
    'expertise.fiscalite.service1': 'Fiscalité marocaine & internationale',
    'expertise.fiscalite.service2': 'Déclarations fiscales & suivi réglementaire',
    'expertise.fiscalite.service3': 'Prix de transfert',
    'expertise.fiscalite.service4': 'Optimisation fiscale & stratégie patrimoniale',
    'expertise.fiscalite.service5': 'Contentieux fiscal & relations avec l\'administration',
    
    'expertise.corporate.title': 'Corporate Finance & Transactions',
    'expertise.corporate.badge': 'Spécialiste M&A',
    'expertise.corporate.description': 'Que ce soit pour céder, acquérir, fusionner ou lever des fonds, Nexia Fiducia Maroc vous accompagne dans vos opérations stratégiques avec discrétion, rigueur et méthode. Nos équipes expertes en finance d\'entreprise vous apportent une vision claire, chiffrée et orientée résultats.',
    'expertise.corporate.service1': 'Fusions & acquisitions',
    'expertise.corporate.service2': 'Levée de fonds (equity & dette)',
    'expertise.corporate.service3': 'Due diligence financière',
    'expertise.corporate.service4': 'Évaluation d\'entreprise',
    'expertise.corporate.service5': 'Conseil en structuration financière',
    
    'expertise.outsourcing.title': 'Externalisation & gestion déléguée (Outsourcing)',
    'expertise.outsourcing.badge': 'Expert BPO',
    'expertise.outsourcing.description': 'Gagnez en productivité et recentrez-vous sur votre cœur de métier en nous confiant la gestion de vos fonctions support. Nos solutions d\'externalisation sont flexibles, sécurisées et adaptées à votre secteur d\'activité.',
    'expertise.outsourcing.service1': 'Externalisation comptable',
    'expertise.outsourcing.service2': 'Externalisation de la paie et des déclarations sociales',
    'expertise.outsourcing.service3': 'Gestion administrative RH',
    'expertise.outsourcing.service4': 'Suivi des obligations légales et fiscales',
    'expertise.outsourcing.service5': 'Reporting financier périodique',
    
    'expertise.digital.title': 'Digitalisation & systèmes d\'information',
    'expertise.digital.badge': 'Innovation Tech',
    'expertise.digital.description': 'Le digital transforme en profondeur les métiers du chiffre, de la conformité et du conseil. Nous vous accompagnons dans la mise en place d\'outils performants, la sécurisation de vos systèmes, la conformité RGPD et la transition vers des modèles agiles et connectés.',
    'expertise.digital.service1': 'Audit des systèmes d\'information',
    'expertise.digital.service2': 'Conseil en transformation digitale',
    'expertise.digital.service3': 'Conformité RGPD & cybersécurité',
    'expertise.digital.service4': 'Accompagnement à l\'implémentation d\'ERP',
    'expertise.digital.service5': 'Stratégie de pilotage & dashboards',
    
    'expertise.international.title': 'Support aux investisseurs étrangers',
    'expertise.international.badge': 'Expertise Internationale',
    'expertise.international.description': 'Vous souhaitez vous implanter, investir ou développer vos activités au Maroc ? Nous mettons à votre service notre connaissance des règles locales et notre capacité d\'interface avec l\'écosystème institutionnel et financier pour vous garantir un atterrissage fluide et sécurisé.',
    'expertise.international.service1': 'Création d\'entreprise & choix de structure',
    'expertise.international.service2': 'Fiscalité adaptée aux groupes internationaux',
    'expertise.international.service3': 'Gestion des obligations réglementaires locales',
    'expertise.international.service4': 'Services de représentation & domiciliation',
    'expertise.international.service5': 'Due diligence juridique & administrative',
    
    'expertise.juridique.title': 'Accompagnement juridique & social',
    'expertise.juridique.badge': 'Conseil Juridique',
    'expertise.juridique.description': 'La conformité juridique est au cœur de votre pérennité. Notre équipe vous assiste sur toutes les problématiques de droit des affaires, droit social et conformité, en lien direct avec vos enjeux opérationnels.',
    'expertise.juridique.service1': 'Création & suivi juridique des sociétés',
    'expertise.juridique.service2': 'Conseil en droit du travail',
    'expertise.juridique.service3': 'Gestion des contrats commerciaux',
    'expertise.juridique.service4': 'Mise en conformité réglementaire',
    'expertise.juridique.service5': 'Assistance lors de contrôles ou litiges',
    
    'expertise.strategie.title': 'Conseil en stratégie & développement',
    'expertise.strategie.badge': 'Conseil Stratégique',
    'expertise.strategie.description': 'Nous vous aidons à construire une vision claire et ambitieuse, puis à la transformer en résultats concrets. Nos consultants vous accompagnent dans les grands virages stratégiques, le développement de votre activité et la structuration de votre croissance.',
    'expertise.strategie.service1': 'Élaboration de plans stratégiques',
    'expertise.strategie.service2': 'Études de marché & analyses sectorielles',
    'expertise.strategie.service3': 'Développement commercial & stratégie Go-to-market',
    'expertise.strategie.service4': 'Organisation & gestion du changement',
    'expertise.strategie.service5': 'Accompagnement à l\'internationalisation',
    
    'expertise.talent.title': 'Talent & Mobility Solutions',
    'expertise.talent.badge': 'Expert RH',
    'expertise.talent.description': 'Parce que le capital humain est au cœur de la réussite des entreprises, Nexia Fiducia Maroc propose une offre complète de Talent & Mobility Solutions, alliant recrutement spécialisé, accompagnement RH et services d\'installation au Maroc. Notre approche repose sur l\'expertise locale et la force de notre réseau international pour garantir une intégration fluide, sécurisée et performante des talents et des entreprises.',
    'expertise.talent.service1': 'Recrutement & Executive Search : chasse de têtes, sélection de cadres dirigeants et profils techniques rares',
    'expertise.talent.service2': 'Programmes jeunes talents : partenariats campus, stages, alternances et graduate programs',
    'expertise.talent.service3': 'Accompagnement RH : structuration des politiques de rémunération, benchmarks salariaux, gestion de la performance',
    'expertise.talent.service4': 'Onboarding & intégration culturelle : formation interculturelle, accompagnement des talents étrangers et diaspora',
    'expertise.talent.service5': 'Mobilité & Installation : démarches administratives (visas, permis de travail, cartes de séjour), recherche de logement, scolarité, mobilité familiale',
    'expertise.talent.service6': 'Soft Landing Package : accompagnement clé en main pour l\'implantation d\'investisseurs et d\'entreprises',
    
    // Common expertise terms
    'expertise.yearsExperience': 'ans d\'expérience',
    'expertise.clientsSupported': 'clients accompagnés',
    'expertise.servicesTitle': 'Nos Services',
    
    // Case Studies
    'caseStudies.study1.title': 'Due diligence financière et fiscale pour une fusion stratégique dans la santé',
    'caseStudies.study1.description': 'Accompagnement complet dans la fusion stratégique entre PHL Group et Malling Health, incluant due diligence financière et fiscale approfondie.',
    'caseStudies.study1.sector': 'Santé',
    'caseStudies.study1.service1': 'Due diligence',
    'caseStudies.study1.service2': 'Fiscalité',
    'caseStudies.study1.service3': 'Fusion-acquisition',
    
    // Case Studies Page
    'caseStudiesPage.title': 'Nos Études de Cas',
    'caseStudiesPage.subtitle': 'Découvrez comment nous avons aidé nos clients à surmonter leurs défis',
    'caseStudiesPage.sector': 'Secteur',
    'caseStudiesPage.duration': 'Durée',
    'caseStudiesPage.services': 'Services mobilisés :',
    'caseStudiesPage.results': 'Résultats obtenus',
    'caseStudiesPage.readFull': 'Lire l\'article complet',
    'caseStudiesPage.ctaTitle': 'Votre projet mérite une approche sur-mesure',
    'caseStudiesPage.ctaDescription': 'Chaque mission est unique. Découvrez comment nous pouvons vous accompagner dans vos défis spécifiques.',
    
    // Services page - Our Capabilities
    'ourCapabilities.title': 'Nos Domaines d\'Expertise',
    'ourCapabilities.subtitle': 'Plus de 25 ans d\'expérience au service de votre croissance. 10 domaines d\'expertise pour accompagner tous vos projets.',
    
    // Our Clients Section
    'clients.title': 'Ils nous font confiance',
    'clients.subtitle': 'Des partenaires de renom qui témoignent de notre expertise',
    
    // Services page - Global Perspectives
    'servicesInsights.title': 'Nos Dernières Perspectives',
    'servicesInsights.subtitle': 'Découvrez nos derniers articles et analyses sur les enjeux business contemporains',
    'servicesInsights.button': 'Voir toutes les perspectives',
    
    // About page - Video section
    'aboutVideo.tagline': 'DÉCOUVRIR NEXIA',
    'aboutVideo.title': 'Nexia - Notre monde en chiffres 2024',
    'aboutVideo.description': 'Découvrez les performances et l\'impact global du réseau Nexia International dans le monde.',
    'aboutVideo.videoTitle': 'Vidéo de présentation Nexia Fiducia Maroc',
    
    // Services Section (About page)
    'servicesSection.title': 'Nos Domaines d\'Expertise',
    'servicesSection.subtitle': 'Une gamme complète de services pour accompagner votre croissance',
    
    // Image with Card Section
    'imageCard.title': 'Excellence & Gouvernance',
    'imageCard.description': 'Chez Nexia Fiducia Maroc, nous nous engageons à maintenir les plus hauts standards de gouvernance et d\'excellence professionnelle, conformément aux valeurs du réseau international Nexia.',
    
    // LinkedIn Posts
    'linkedinPosts.title': 'Actualités LinkedIn',
    'linkedinPosts.subtitle': 'Suivez nos dernières publications et actualités sur LinkedIn',
    'linkedinPosts.viewProfile': 'Voir le profil LinkedIn',
    
    // Governance Section / Team
    'governance.title': 'Équipe Dirigeante',
    'governance.subtitle': 'Rencontrez notre équipe de direction et découvrez leur expertise.',
    'governance.ceo.name': 'Yassine SQALLI HOUSSAINI',
    'governance.ceo.title': 'Associé Directeur Général',
    'governance.ceo.description': 'Expert en audit, corporate finance et conseil stratégique avec plus de 20 ans d\'expérience.',
    'governance.partner1.name': 'Mourad OUBELLA',
    'governance.partner1.title': 'Associé',
    'governance.partner1.description': 'Spécialisé en fiscalité et droit des affaires avec une expertise approfondie du marché marocain.',
    'governance.partner2.name': 'Ahmed BERRADA',
    'governance.partner2.title': 'Associé',
    'governance.partner2.description': 'Expert en audit et commissariat aux comptes, garant de la qualité et de la méthodologie.',
    'governance.partner3.name': 'Sarah BENNANI',
    'governance.partner3.title': 'Directrice Générale Adjointe',
    'governance.partner3.description': 'Responsable du développement commercial et des relations clients.',
    'governance.viewTeam': 'Voir l\'équipe complète',
    
    // Team Page
    'teamPage.specialties': 'Spécialités',
    
    // Contact Map Section
    'contactMap.title': 'Nos Bureaux',
    'contactMap.subtitle': 'Retrouvez-nous dans nos bureaux à Casablanca',
    'contactMap.instructions': 'Pour localiser nos bureaux :',
    'contactMap.instructionsDetails': 'Utilisez les liens "Voir sur Google Maps" ci-dessous pour accéder directement à chaque adresse avec géolocalisation précise.',
    'contactMap.office1': 'Bureau Casablanca 1',
    'contactMap.office2': 'Bureau Casablanca 2',
    'contactMap.viewOnMaps': 'Voir sur Google Maps',
    'contactMap.helpText': 'Pour voir les deux bureaux sur la carte, utilisez les liens individuels ci-dessus ou recherchez directement les adresses.',
    'contactMap.mapTitle': 'Localisation des bureaux Nexia Fiducia Maroc',
    
    // Contact Hero Section
    'contactHero.title': 'Contactez-nous',
    'contactHero.ourOffices': 'Nos Bureaux',
    'contactHero.managerContact': 'Contact Manager Direct',
    
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
    'hero.slide1.title': 'Trusted expertise, at the service of your performance',
    'hero.slide1.subtitle': 'Audit, taxation, strategy, compliance, corporate finance... Our areas of expertise adapt to your challenges in Morocco and internationally.',
    'hero.slide1.button': 'Discover our areas of expertise',
    'hero.slide2.title': 'A local signature, a global network',
    'hero.slide2.subtitle': 'Nexia Fiducia Morocco, member of the Nexia International network, supports Moroccan and foreign companies with a commitment to excellence, ethics and proximity.',
    'hero.slide2.button': 'Learn more about Nexia Fiducia Morocco',
    'hero.slide3.title': 'A management team committed to your side',
    'hero.slide3.subtitle': 'Discover the profiles and expertise of the partners who carry the vision of Nexia Fiducia Morocco and support our clients on a daily basis.',
    'hero.slide3.button': 'Meet our team',
    
    // About Section  
    'about.title': 'About us',
    'about.description': 'At Nexia Fiducia Morocco, our mission is to support Moroccan and international companies in all stages of their growth, structuring and compliance. Thanks to our strong local roots, combined with the power of the Nexia International network, we offer multidisciplinary, rigorous expertise adapted to your real challenges.',
    'about.link': 'Learn more about us',
    'about.service1': 'Audit',
    'about.service2': 'Taxation', 
    'about.service3': 'Advisory',
    
    // Hero About Page
    'aboutHero.tagline': 'ABOUT US',
    'aboutHero.title': 'Expertise and proximity at the service of your success',
    'aboutHero.button': 'Learn more',
    
    // About Page Section
    'aboutPage.tagline': 'ABOUT US',
    'aboutPage.title': 'Nexia Fiducia Morocco, your trusted partner',
    'aboutPage.description': 'Nexia Fiducia Morocco was born from the merger between Advisoris and Nexia Morocco in 2022, creating a major player in audit, statutory audit and advisory in Morocco. With our recognized expertise and membership in the Nexia international network, we support our clients in their development with a personalized approach and innovative solutions.',
    'aboutPage.videoTitle': 'Nexia Fiducia Morocco Presentation',
    
    // Services Page
    'servicesHero.tagline': 'Our Areas of Expertise',
    'servicesHero.title': 'Global support, local and international expertise',
    'servicesHero.description': 'At Nexia Fiducia Morocco, we offer a complete range of services designed to support companies at every stage of their development. Our areas of expertise cover all strategic, financial, tax, regulatory and organizational challenges of our clients.',
    
    // Services
    'services.title': 'Our areas of expertise',
    'services.subtitle': 'Discover our comprehensive range of professional services designed to support your business growth and success.',
    
    // Capabilities Section
    'capabilities.title': 'Do you have a specific project or issue?',
    'capabilities.description': 'Our teams are here to work with you to build tailor-made, effective solutions that comply with best practices.',
    'capabilities.button': 'Contact us',
    
    // Team Page
    'team.heroTitle': 'Our Leadership Team',
    'team.heroSubtitle': 'Discover the profiles and expertise of the partners who carry the vision of Nexia Fiducia Morocco and support our clients on a daily basis.',
    'team.partnersTitle': 'Our Partners',
    'team.partnersSubtitle': 'Recognized expertise at the service of your success',
    'team.specialties': 'Areas of expertise',
    'team.ctaTitle': 'Ready to collaborate with our team?',
    'team.ctaSubtitle': 'Contact us to discover how our expertise can support your development in Morocco and internationally.',
    'team.ctaButton': 'Contact us',
    
    // Case Study Section
    'caseStudy.title': 'Case Studies',
    'caseStudy.description': 'Discover how we support our clients in their most complex challenges through concrete missions and measurable results. Digital transformation, tax restructuring, IPO support... our case studies illustrate our expertise in action.',
    'caseStudy.button': 'Discover our case studies',
    
    // Latest Insights Section  
    'latestInsights.title': 'Global Perspectives',
    'latestInsights.description': 'Discover our latest expert analyses on trends shaping the future of businesses in Morocco and internationally.',
    'latestInsights.button': 'See more insights',
    
    // Facts Section
    'facts.title': 'Our World in Numbers',
    'facts.description': 'Nexia International is a leading global network of independent accounting and advisory firms. When you choose a Nexia firm, you benefit from more responsive, personalized and partner-led service worldwide.',
    'facts.globalStats': 'Global Statistics',
    'facts.regionalStats': 'Regional Breakdown',
    'facts.services': 'Service Lines',
    'facts.achievements': 'Awards and Accreditations',
    'facts.globalPeople': 'people',
    'facts.globalCountries': 'countries',
    'facts.globalRatio': 'Partner/staff ratio',
    'facts.northAmerica': 'North America',
    'facts.emeaRegion': 'Europe, Middle East and Africa',
    'facts.asiaPacific': 'Asia Pacific',
    'facts.latinAmerica': 'Latin America',
    'facts.businessGroups': 'Business Committees and Groups',
    'facts.center': 'Center',
    'facts.offices': 'Offices',
    'facts.partners': 'Partners',
    'facts.serviceConsulting': 'Consulting',
    'facts.serviceAudit': 'Audit',
    'facts.serviceTax': 'Tax',
    'facts.revenue': 'US$ 4.3 billion revenue for 2019',
    'facts.worldwideOffices': '727 offices worldwide',
    'facts.globalNetwork': 'Extended global network',
    
    // Our Services Menu
    'servicesMenu.excellenceTitle': 'Excellence & Expertise',
    'servicesMenu.title': 'Our Areas of Expertise',
    'servicesMenu.description': 'Over 25 years of experience serving your growth. 10 areas of expertise to support all your projects.',
    'servicesMenu.domain': 'Domain',
    'servicesMenu.on': 'of',
    'servicesMenu.experience': 'Years of experience',
    'servicesMenu.clients': 'Satisfied clients',
    'servicesMenu.services': 'Our approach',
    
    // Insights Page
    'insightsPage.title': 'Global Perspectives',
    'insightsPage.subtitle': 'Discover our expert analyses on global trends shaping the future of businesses in Morocco and internationally',
    'insightsPage.search': 'Search for an article...',
    'insightsPage.featured': 'Featured article',
    'insightsPage.featuredBadge': 'Featured',
    'insightsPage.readArticle': 'Read article',
    'insightsPage.category.all': 'All',
    'insightsPage.category.health': 'Public health',
    'insightsPage.category.international': 'International network',
    'insightsPage.category.trade': 'International trade',
    'insightsPage.category.investment': 'International investment',
    'insightsPage.category.tax': 'International taxation',
    'insightsPage.category.audit': 'Audit & compliance',
    'insightsPage.category.strategy': 'Business strategy',
    'insightsPage.category.finance': 'Corporate Finance',
    'insightsPage.category.regulation': 'Regulation',
    
    // Contact Form
    'contactForm.title': 'Contact our experts',
    'contactForm.description': 'Tell us about your project. Our team of experts will support you in all your accounting and tax procedures.',
    'contactForm.firstName': 'First name',
    'contactForm.lastName': 'Last name',
    'contactForm.email': 'Email',
    'contactForm.company': 'Company',
    'contactForm.phone': 'Phone',
    'contactForm.service': 'Desired service',
    'contactForm.message': 'Message',
    'contactForm.submit': 'Send message',
    'contactForm.required': 'required',
    'contactForm.sending': 'Sending...',
    'contactForm.success': 'Message sent successfully!',
    'contactForm.successDesc': 'We will respond to you as soon as possible.',
    'contactForm.yourFirstName': 'Your first name',
    'contactForm.yourLastName': 'Your last name',
    'contactForm.yourMessage': 'Your message...',
    'contactForm.selectService': 'Select a service',
    'contactForm.errors.firstName': 'First name is required',
    'contactForm.errors.lastName': 'Last name is required',
    'contactForm.errors.email': 'Email is required',
    'contactForm.errors.emailInvalid': 'Invalid email format',
    'contactForm.errors.phone': 'Phone is required',
    'contactForm.errors.message': 'Message is required',
    
    // Insights
    'insights.title': 'Global Perspectives',
    'insights.subtitle': 'Discover our expert analyses on global trends shaping the future of businesses in Morocco and internationally',
    'insights.featured.title': 'The cost of medicines in Morocco: a persistent economic and strategic challenge',
    'insights.featured.description': 'More than two years after the announcement of measures aimed at reducing drug prices, the issue remains of burning relevance.',
    'insights.read': 'Read article',
    'insights.viewAll': 'View All Our Perspectives',
    
    // Why Nexia Section
    'whyNexia.title': 'Why',
    
    // Case Studies Page
    'caseStudiesPage.title': 'Our Case Studies',
    'caseStudiesPage.subtitle': 'Discover how we helped our clients overcome their challenges',
    'caseStudiesPage.sector': 'Sector',
    'caseStudiesPage.duration': 'Duration',
    'caseStudiesPage.services': 'Services mobilized:',
    'caseStudiesPage.results': 'Key results:',
    'caseStudiesPage.readFull': 'Read full article',
    'caseStudiesPage.ctaTitle': 'Your project deserves a tailored approach',
    'caseStudiesPage.ctaDescription': 'Each mission is unique. Discover how we can support you in your specific challenges.',
    
    // Services page - Our Capabilities
    'ourCapabilities.title': 'Our Areas of Expertise',
    'ourCapabilities.subtitle': 'Over 25 years of experience serving your growth. 10 areas of expertise to support all your projects.',
    
    // Our Clients Section
    'clients.title': 'They trust us',
    'clients.subtitle': 'Renowned partners who testify to our expertise',
    
    // Services page - Global Perspectives
    'servicesInsights.title': 'Our Latest Insights',
    'servicesInsights.subtitle': 'Discover our latest articles and insights on contemporary business challenges',
    'servicesInsights.button': 'View all insights',
    
    // About page - Video section (rename conflicting keys)
    'aboutVideo.tagline': 'DISCOVER NEXIA',
    'aboutVideo.title': 'Nexia - Our world in numbers 2024',
    'aboutVideo.description': 'Discover the global performance and impact of the Nexia International network worldwide.',
    'aboutVideo.videoTitle': 'Nexia Fiduciaire Maroc Presentation Video',
    
    // Services Section (About page)
    'servicesSection.title': 'Our Areas of Expertise',
    'servicesSection.subtitle': 'A complete range of services to support your growth',
    
    // Image with Card Section
    'imageCard.title': 'Excellence & Governance',
    'imageCard.description': 'At Nexia Fiducia Morocco, we are committed to maintaining the highest standards of governance and professional excellence, in line with the values of the Nexia international network.',
    
    // LinkedIn Posts
    'linkedinPosts.title': 'LinkedIn News',
    'linkedinPosts.subtitle': 'Follow our latest posts and news on LinkedIn',
    'linkedinPosts.viewProfile': 'View LinkedIn profile',
    
    // Governance Section / Team
    'governance.title': 'Executive Team',
    'governance.subtitle': 'Meet our management team and discover their expertise.',
    'governance.ceo.name': 'Yassine SQALLI HOUSSAINI',
    'governance.ceo.title': 'Managing Partner & CEO',
    'governance.ceo.description': 'Expert in audit, corporate finance and strategic advisory with over 20 years of experience.',
    'governance.cfo.name': 'Jalel LAHBIB',
    'governance.cfo.title': 'Managing Partner',
    'governance.cfo.description': 'Specialist in taxation, corporate law and compliance with extensive international experience.',
    'governance.ctaTitle': 'Our Partners',
    'governance.ctaDescription': 'Our management team brings together complementary expertise to offer you comprehensive and high-quality service.',
    'governance.ctaButton': 'Contact us',
    'whyNexia.subtitle': 'Nexia Fiducia Morocco',
    'whyNexia.description1': 'Through our membership in the Nexia international network, we combine deep local expertise of the Moroccan market with the most demanding international standards.',
    'whyNexia.description2': 'Our personalized approach and commitment to excellence enable us to effectively support our clients in their financial and strategic challenges.',
    'whyNexia.stats.experience': 'Years of experience',
    'whyNexia.stats.clients': 'Satisfied clients',
    'whyNexia.stats.offices': 'Nexia offices worldwide',
    'whyNexia.button': 'Learn more',
    
    // How Can We Help Section
    'help.title': 'How can we help you?',
    'help.description': 'Our teams are here to work with you to build tailor-made, effective solutions that comply with best practices.',
    'help.button': 'Contact us',
    
    // Service Cards
    'service.audit.title': 'Audit & Statutory Audit',
    'service.expertise.title': 'Accounting Expertise & Advisory',
    'service.fiscal.title': 'Taxation & Tax Optimization',
    'service.finance.title': 'Corporate Finance & M&A',
    'service.legal.title': 'Legal & Social Support',
    'service.outsourcing.title': 'Outsourcing & Externalization',
    'service.digitalization.title': 'Digitalization & Information Systems',
    'service.support.title': 'Support for Foreign Investors',
    'service.strategy.title': 'Strategy & Development Advisory',
    'service.talent.title': 'Talent & Mobility',
    
    // Footer
    'footer.description': 'Nexia Fiducia Morocco is a member of Nexia, a leading global network of independent accounting and advisory firms.',
    'footer.disclaimer': 'Member firm disclaimer',
    'footer.privacy': 'Privacy policy',
    'footer.cookie': 'Cookie Policy', 
    'footer.email': 'Email disclaimer',
    'footer.copyright': '© 2024 Nexia Templates. All rights reserved.',
    
    // Case Studies Data
    'caseStudies.study1.title': 'Financial and tax due diligence for a strategic healthcare merger',
    'caseStudies.study1.description': 'Complete support in the strategic merger between PHL Group and Malling Health, including comprehensive financial and tax due diligence.',
    'caseStudies.study1.sector': 'Healthcare',
    'caseStudies.study1.service1': 'Due diligence',
    'caseStudies.study1.service2': 'Taxation',
    'caseStudies.study1.service3': 'Mergers & acquisitions',
    
    // Common
    'common.readMore': 'Learn more',
    'common.contact': 'Contact us',
    'common.minutes': 'min',
    'common.author': 'Nexia Fiducia Morocco',
    
    // Navigation
    'nav.expertise': 'Our Areas of Expertise',
    'nav.team': 'Executive Team',
    'nav.globalPerspectives': 'Global Perspectives',
    'nav.caseStudies': 'Case Studies',
    
    // Team Page
    'teamPage.specialties': 'Specialties',
    
    // Contact Map Section
    'contactMap.title': 'Our Offices',
    'contactMap.subtitle': 'Find us in our offices in Casablanca',
    'contactMap.instructions': 'To locate our offices:',
    'contactMap.instructionsDetails': 'Use the "View on Google Maps" links below to access each address directly with precise geolocation.',
    'contactMap.office1': 'Casablanca Office 1',
    'contactMap.office2': 'Casablanca Office 2',
    'contactMap.viewOnMaps': 'View on Google Maps',
    'contactMap.helpText': 'To see both offices on the map, use the individual links above or search for the addresses directly.',
    'contactMap.mapTitle': 'Nexia Fiducia Morocco offices location',
    
    // Contact Hero Section  
    'contactHero.title': 'Contact us',
    'contactHero.ourOffices': 'Our Offices',
    'contactHero.managerContact': 'Direct Manager Contact',
    
    // Contact Form Section
    'contactForm.tabContact': 'Send Message',
    'contactForm.tabPrivacy': 'Guaranteed Privacy',
    'contactForm.privacyTitle': 'Your data is protected',
    'contactForm.privacyContent': 'All information shared through this form is treated with the strictest confidentiality. We are committed to protecting your personal data in accordance with applicable regulations.',
    
    // Detailed Expertise Domains
    'expertise.audit.title': 'Audit & Statutory Audit',
    'expertise.audit.badge': 'ISA Certification',
    'expertise.audit.description': 'Because financial transparency is now a strategic confidence lever, we carry out your audits with absolute rigor and methodology compliant with international standards (IFRS, ISA). Our approach combines technical requirements, professional independence and sectoral understanding, to guarantee the reliability of your financial statements and strengthen your credibility with investors, partners and regulators.',
    'expertise.audit.service1': 'Legal and contractual audit',
    'expertise.audit.service2': 'Statutory audit',
    'expertise.audit.service3': 'Acquisition audit and due diligence',
    'expertise.audit.service4': 'Internal audit and permanent control',
    'expertise.audit.service5': 'Information systems audit',
    
    'expertise.comptable.title': 'Accounting Expertise & Operational Consulting',
    'expertise.comptable.badge': 'Certified Expertise',
    'expertise.comptable.description': 'Well-maintained accounting is more than an obligation: it is a management tool. Our chartered accountants support you in structuring, supervising and optimizing your accounting processes, while providing you with strategic insight into your performance and margins. We intervene both in outsourced or collaborative mode, according to your needs.',
    'expertise.comptable.service1': 'Accounting, supervision & reporting',
    'expertise.comptable.service2': 'Preparation of financial statements',
    'expertise.comptable.service3': 'Accounting review & dashboards',
    'expertise.comptable.service4': 'Management consulting & decision support',
    'expertise.comptable.service5': 'Support for digital transformation of financial functions',
    
    'expertise.fiscalite.title': 'Taxation & Tax Optimization',
    'expertise.fiscalite.badge': 'Tax Expertise',
    'expertise.fiscalite.description': 'In a constantly evolving tax environment, we help you anticipate, secure and optimize your tax obligations, while ensuring regulatory compliance. Our personalized approach takes into account your company structure, your international flows and your growth challenges.',
    'expertise.fiscalite.service1': 'Moroccan & international taxation',
    'expertise.fiscalite.service2': 'Tax returns & regulatory monitoring',
    'expertise.fiscalite.service3': 'Transfer pricing',
    'expertise.fiscalite.service4': 'Tax optimization & asset strategy',
    'expertise.fiscalite.service5': 'Tax litigation & relations with administration',
    
    'expertise.corporate.title': 'Corporate Finance & Transactions',
    'expertise.corporate.badge': 'M&A Specialist',
    'expertise.corporate.description': 'Whether to sell, acquire, merge or raise funds, Nexia Fiducia Morocco supports you in your strategic operations with discretion, rigor and method. Our teams of corporate finance experts provide you with a clear, quantified and results-oriented vision.',
    'expertise.corporate.service1': 'Mergers & acquisitions',
    'expertise.corporate.service2': 'Fundraising (equity & debt)',
    'expertise.corporate.service3': 'Financial due diligence',
    'expertise.corporate.service4': 'Company valuation',
    'expertise.corporate.service5': 'Financial structuring advice',
    
    'expertise.outsourcing.title': 'Outsourcing & Delegated Management',
    'expertise.outsourcing.badge': 'BPO Expert',
    'expertise.outsourcing.description': 'Gain productivity and refocus on your core business by entrusting us with the management of your support functions. Our outsourcing solutions are flexible, secure and adapted to your sector of activity.',
    'expertise.outsourcing.service1': 'Accounting outsourcing',
    'expertise.outsourcing.service2': 'Payroll and social declaration outsourcing',
    'expertise.outsourcing.service3': 'HR administrative management',
    'expertise.outsourcing.service4': 'Monitoring legal and tax obligations',
    'expertise.outsourcing.service5': 'Periodic financial reporting',
    
    'expertise.digital.title': 'Digitalization & Information Systems',
    'expertise.digital.badge': 'Tech Innovation',
    'expertise.digital.description': 'Digital is profoundly transforming the professions of figures, compliance and consulting. We support you in the implementation of efficient tools, securing your systems, GDPR compliance and the transition to agile and connected models.',
    'expertise.digital.service1': 'Information systems audit',
    'expertise.digital.service2': 'Digital transformation consulting',
    'expertise.digital.service3': 'GDPR compliance & cybersecurity',
    'expertise.digital.service4': 'ERP implementation support',
    'expertise.digital.service5': 'Management strategy & dashboards',
    
    'expertise.international.title': 'Foreign Investor Support',
    'expertise.international.badge': 'International Expertise',
    'expertise.international.description': 'Do you want to establish, invest or develop your activities in Morocco? We put at your service our knowledge of local rules and our ability to interface with the institutional and financial ecosystem to guarantee you a smooth and secure landing.',
    'expertise.international.service1': 'Company creation & structure choice',
    'expertise.international.service2': 'Taxation adapted to international groups',
    'expertise.international.service3': 'Management of local regulatory obligations',
    'expertise.international.service4': 'Representation & domiciliation services',
    'expertise.international.service5': 'Legal & administrative due diligence',
    
    'expertise.juridique.title': 'Legal & Social Support',
    'expertise.juridique.badge': 'Legal Consulting',
    'expertise.juridique.description': 'Legal compliance is at the heart of your sustainability. Our team assists you on all business law, labor law and compliance issues, directly linked to your operational challenges.',
    'expertise.juridique.service1': 'Creation & legal monitoring of companies',
    'expertise.juridique.service2': 'Labor law consulting',
    'expertise.juridique.service3': 'Commercial contract management',
    'expertise.juridique.service4': 'Regulatory compliance implementation',
    'expertise.juridique.service5': 'Assistance during controls or disputes',
    
    'expertise.strategie.title': 'Strategy & Development Consulting',
    'expertise.strategie.badge': 'Strategic Consulting',
    'expertise.strategie.description': 'We help you build a clear and ambitious vision, then transform it into concrete results. Our consultants support you in major strategic turns, the development of your activity and the structuring of your growth.',
    'expertise.strategie.service1': 'Strategic plan development',
    'expertise.strategie.service2': 'Market studies & sector analyses',
    'expertise.strategie.service3': 'Commercial development & Go-to-market strategy',
    'expertise.strategie.service4': 'Organization & change management',
    'expertise.strategie.service5': 'Internationalization support',
    
    'expertise.talent.title': 'Talent & Mobility Solutions',
    'expertise.talent.badge': 'HR Expert',
    'expertise.talent.description': 'Because human capital is at the heart of business success, Nexia Fiducia Morocco offers a complete range of Talent & Mobility Solutions, combining specialized recruitment, HR support and installation services in Morocco. Our approach is based on local expertise and the strength of our international network to guarantee smooth, secure and efficient integration of talents and companies.',
    'expertise.talent.service1': 'Recruitment & Executive Search: headhunting, selection of executives and rare technical profiles',
    'expertise.talent.service2': 'Young talent programs: campus partnerships, internships, work-study programs and graduate programs',
    'expertise.talent.service3': 'HR support: structuring compensation policies, salary benchmarks, performance management',
    'expertise.talent.service4': 'Onboarding & cultural integration: intercultural training, support for foreign talents and diaspora',
    'expertise.talent.service5': 'Mobility & Installation: administrative procedures (visas, work permits, residence cards), housing search, schooling, family mobility',
    'expertise.talent.service6': 'Soft Landing Package: turnkey support for investor and company establishment',
    
    // Common expertise terms
    'expertise.yearsExperience': 'years of experience',
    'expertise.clientsSupported': 'clients supported',
    'expertise.servicesTitle': 'Our Services',
  }
} as const;

export const translate = (language: Language, key: string): string => {
  const translation = translations[language]?.[key as keyof typeof translations['fr']];
  return translation || key;
};