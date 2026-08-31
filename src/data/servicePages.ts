export type ServicePage = {
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
  serviceValue: string;
  situations: string[];
  services: string[];
  deliverables: string[];
  process: { title: string; text: string }[];
  faq: { question: string; answer: string }[];
  related: string[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "expertise-comptable-audit-casablanca",
    eyebrow: "Expertise comptable & audit",
    title: "Expertise comptable et audit à Casablanca",
    intro: "Sécurisez vos comptes, vos obligations et vos décisions avec une équipe locale capable de coordonner comptabilité, audit, fiscalité et reporting.",
    serviceValue: "expertise-comptable",
    situations: ["Clôture annuelle ou remise à niveau comptable", "Croissance, réorganisation ou besoin de reporting fiable", "Préparation d'un audit légal, contractuel ou d'une levée de fonds"],
    services: ["Tenue, révision et supervision comptable", "Établissement des comptes annuels et reporting", "Audit légal et contractuel", "Assistance fiscale et sociale", "Mise en place de procédures et contrôle interne"],
    deliverables: ["Comptes et états de synthèse", "Dossier de révision documenté", "Rapport d'audit ou de recommandations", "Tableaux de bord adaptés à la direction"],
    process: [{ title: "Cadrage", text: "Nous identifions vos obligations, vos échéances et les zones de risque." }, { title: "Diagnostic", text: "Nous analysons les données, procédures et points de contrôle existants." }, { title: "Exécution", text: "Une équipe dédiée réalise la mission et partage les points d'avancement." }, { title: "Restitution", text: "Vous recevez des livrables clairs et un plan d'actions priorisé." }],
    faq: [{ question: "Pouvez-vous reprendre une comptabilité en cours d'année ?", answer: "Oui. La reprise commence par un diagnostic des données disponibles, des déclarations et des rapprochements afin de définir le périmètre de régularisation." }, { question: "Intervenez-vous auprès de filiales de groupes étrangers ?", answer: "Oui. L'accompagnement peut intégrer les obligations marocaines et les exigences de reporting du groupe." }, { question: "Comment obtenir une proposition ?", answer: "Un premier échange permet de qualifier le volume, les délais et les livrables attendus avant l'envoi d'une proposition adaptée." }],
    related: ["commissaire-aux-comptes-maroc", "conseil-fiscal-maroc", "externalisation-comptable-maroc"]
  },
  {
    slug: "commissaire-aux-comptes-maroc",
    eyebrow: "Audit & assurance",
    title: "Commissaire aux comptes au Maroc",
    intro: "Faites certifier vos comptes et sécurisez l'information financière avec une démarche d'audit indépendante, structurée et adaptée à votre activité.",
    serviceValue: "audit",
    situations: ["Nomination obligatoire ou volontaire d'un commissaire aux comptes", "Renouvellement de mandat ou changement d'auditeur", "Besoin de fiabiliser les comptes avant une opération stratégique"],
    services: ["Commissariat aux comptes", "Audit contractuel et procédures convenues", "Revue du contrôle interne", "Audit d'acquisition", "Reporting à destination des actionnaires ou du groupe"],
    deliverables: ["Plan de mission et calendrier", "Synthèse des risques et points d'audit", "Rapports prévus par la mission", "Recommandations de contrôle interne"],
    process: [{ title: "Acceptation", text: "Vérification de l'indépendance, compréhension du besoin et cadrage du mandat." }, { title: "Planification", text: "Analyse des risques et définition des travaux à mener." }, { title: "Travaux", text: "Tests, échanges avec les équipes et revue des éléments probants." }, { title: "Conclusion", text: "Restitution des constats et émission des rapports applicables." }],
    faq: [{ question: "Quand faut-il nommer un commissaire aux comptes ?", answer: "L'obligation dépend notamment de la forme juridique et de la situation de l'entité. Nous vérifions avec vous les critères applicables au moment du cadrage." }, { question: "Quelle est la durée d'une mission ?", answer: "Le calendrier dépend de la taille, de la qualité des données et des échéances de gouvernance. Il est défini dès la planification." }, { question: "Pouvez-vous auditer une filiale marocaine pour son groupe ?", answer: "Oui, avec coordination possible des instructions et formats de reporting transmis par l'auditeur du groupe." }],
    related: ["expertise-comptable-audit-casablanca", "due-diligence-maroc", "ifrs-consolidation-maroc"]
  },
  {
    slug: "conseil-fiscal-maroc",
    eyebrow: "Fiscalité",
    title: "Conseil fiscal pour entreprises au Maroc",
    intro: "Anticipez vos risques fiscaux, sécurisez vos opérations et prenez vos décisions sur la base d'une lecture claire de leurs conséquences au Maroc.",
    serviceValue: "conseil-fiscal",
    situations: ["Opération exceptionnelle, investissement ou restructuration", "Contrôle fiscal ou revue de conformité", "Flux internationaux et transactions intragroupe"],
    services: ["Conseil fiscal courant", "Revue fiscale et diagnostic de risques", "Assistance lors des contrôles", "Fiscalité internationale", "Structuration d'opérations et prix de transfert"],
    deliverables: ["Note d'analyse et recommandations", "Cartographie des risques fiscaux", "Dossier documentaire", "Plan de mise en conformité"],
    process: [{ title: "Question", text: "Nous précisons l'opération, les faits et la décision à sécuriser." }, { title: "Analyse", text: "Nous examinons les textes, pièces et positions applicables." }, { title: "Options", text: "Nous présentons les scénarios, impacts et risques associés." }, { title: "Mise en œuvre", text: "Nous accompagnons la documentation et les démarches retenues." }],
    faq: [{ question: "Réalisez-vous des revues fiscales avant acquisition ?", answer: "Oui. Une revue ciblée permet d'identifier les principaux risques fiscaux et leurs impacts potentiels." }, { question: "Intervenez-vous en cas de contrôle fiscal ?", answer: "Oui, depuis la préparation des pièces et réponses jusqu'aux échanges liés à la procédure." }, { question: "Pouvez-vous traiter les flux avec une société étrangère ?", answer: "Oui. La mission peut couvrir les conventions, retenues, prix de transfert et obligations documentaires pertinentes." }],
    related: ["creer-societe-maroc", "due-diligence-maroc", "implantation-filiale-maroc"]
  },
  {
    slug: "externalisation-paie-casablanca",
    eyebrow: "Social & paie",
    title: "Externalisation de la paie à Casablanca",
    intro: "Fiabilisez la paie, les déclarations sociales et le suivi administratif avec un processus documenté et un interlocuteur dédié.",
    serviceValue: "social-paie",
    situations: ["Équipe RH contrainte ou croissance des effectifs", "Besoin de confidentialité et de continuité", "Filiale étrangère souhaitant déléguer la paie locale"],
    services: ["Production et contrôle des bulletins", "Déclarations sociales", "Gestion des entrées et sorties", "Suivi des variables et absences", "Reporting de paie"],
    deliverables: ["Bulletins et états de paie", "Fichiers de paiement et écritures comptables", "Déclarations et bordereaux", "Tableau de contrôle mensuel"],
    process: [{ title: "Reprise", text: "Collecte des dossiers, paramétrage et contrôle des cumuls." }, { title: "Variables", text: "Transmission sécurisée selon un calendrier partagé." }, { title: "Contrôle", text: "Production, revue des écarts et validation avant édition." }, { title: "Clôture", text: "Livraison des documents, déclarations et reporting." }],
    faq: [{ question: "Pouvez-vous reprendre la paie en cours d'année ?", answer: "Oui, après contrôle des cumuls, paramètres, dossiers salariés et déclarations déjà produites." }, { question: "Comment sont échangées les variables ?", answer: "Le circuit et les responsabilités sont définis au démarrage afin de sécuriser les données et les délais." }, { question: "Accompagnez-vous les filiales étrangères ?", answer: "Oui, avec un reporting pouvant être adapté aux attentes du siège." }],
    related: ["externalisation-comptable-maroc", "implantation-filiale-maroc", "expertise-comptable-audit-casablanca"]
  },
  {
    slug: "creer-societe-maroc",
    eyebrow: "Création & implantation",
    title: "Créer une société au Maroc",
    intro: "Structurez votre projet d'implantation avec un accompagnement coordonné, du choix de la forme juridique jusqu'aux premières obligations comptables, fiscales et sociales.",
    serviceValue: "conseil-juridique",
    situations: ["Création d'une entreprise marocaine", "Ouverture d'une filiale ou succursale", "Projet porté par des associés ou investisseurs étrangers"],
    services: ["Cadrage de la structure", "Coordination des formalités de constitution", "Immatriculations et obligations initiales", "Mise en place comptable et fiscale", "Organisation de la paie et du reporting"],
    deliverables: ["Feuille de route de création", "Liste des pièces et calendrier", "Dossier de constitution coordonné", "Plan des obligations post-création"],
    process: [{ title: "Projet", text: "Nous clarifions l'activité, l'actionnariat et les objectifs d'implantation." }, { title: "Structure", text: "Les options sont comparées au regard des besoins opérationnels et fiscaux." }, { title: "Formalités", text: "Nous coordonnons le dossier et son avancement avec les intervenants concernés." }, { title: "Démarrage", text: "Nous mettons en place les fonctions comptables, fiscales, sociales et de reporting." }],
    faq: [{ question: "Quelle forme juridique choisir ?", answer: "Le choix dépend de l'actionnariat, de la gouvernance, du financement et du projet. Il doit être validé après analyse de votre situation." }, { question: "Combien de temps faut-il prévoir ?", answer: "Le délai varie selon la structure, la disponibilité des pièces et les formalités nécessaires. Un calendrier réaliste est fourni après cadrage." }, { question: "Pouvez-vous accompagner un investisseur étranger ?", answer: "Oui, en coordonnant l'implantation locale et les besoins de reporting international." }],
    related: ["implantation-filiale-maroc", "conseil-fiscal-maroc", "externalisation-comptable-maroc"]
  },
  {
    slug: "due-diligence-maroc",
    eyebrow: "Transaction services",
    title: "Due diligence financière et fiscale au Maroc",
    intro: "Identifiez les risques, les ajustements et les points de négociation avant une acquisition, une prise de participation ou une cession.",
    serviceValue: "due-diligence",
    situations: ["Acquisition ou prise de participation", "Cession et préparation d'une data room", "Partenariat, levée de fonds ou réorganisation"],
    services: ["Due diligence financière", "Due diligence fiscale et sociale", "Analyse de la qualité des résultats", "Revue du besoin en fonds de roulement", "Assistance à la préparation vendeur"],
    deliverables: ["Rapport exécutif orienté décision", "Analyse des risques et ajustements", "Questions complémentaires et points de négociation", "Synthèse des actions post-opération"],
    process: [{ title: "Périmètre", text: "Définition des enjeux, seuils et informations prioritaires." }, { title: "Data room", text: "Analyse structurée des données et échanges avec le management." }, { title: "Constats", text: "Qualification des risques, ajustements et sujets à approfondir." }, { title: "Décision", text: "Restitution concise et appui aux discussions de transaction." }],
    faq: [{ question: "Travaillez-vous côté acquéreur et côté vendeur ?", answer: "Oui. Le périmètre et les livrables sont adaptés à la position et aux objectifs du client." }, { question: "La mission couvre-t-elle la fiscalité ?", answer: "Elle peut intégrer un volet fiscal et social, défini lors du cadrage." }, { question: "Pouvez-vous intervenir dans un calendrier court ?", answer: "Oui lorsque les informations et interlocuteurs sont disponibles. Les priorités et limites sont alors définies explicitement." }],
    related: ["corporate-finance-maroc", "conseil-fiscal-maroc", "commissaire-aux-comptes-maroc"]
  },
  {
    slug: "corporate-finance-maroc",
    eyebrow: "Corporate finance",
    title: "Corporate finance et M&A au Maroc",
    intro: "Préparez et pilotez vos opérations de financement, de cession ou d'acquisition avec des analyses financières orientées décision.",
    serviceValue: "evaluation",
    situations: ["Cession, acquisition ou rapprochement", "Levée de fonds ou recherche de financement", "Valorisation d'entreprise ou réorganisation capitalistique"],
    services: ["Évaluation d'entreprise", "Modélisation financière", "Préparation de business plan", "Assistance M&A", "Analyse de scénarios de financement"],
    deliverables: ["Modèle financier documenté", "Rapport de valorisation", "Mémorandum ou support investisseur", "Analyse des scénarios et sensibilités"],
    process: [{ title: "Objectif", text: "Clarification de la décision, des parties prenantes et du calendrier." }, { title: "Données", text: "Normalisation des historiques et construction des hypothèses." }, { title: "Analyse", text: "Modélisation, valorisation et comparaison des scénarios." }, { title: "Opération", text: "Préparation des supports et accompagnement des échanges." }],
    faq: [{ question: "Réalisez-vous des valorisations indépendantes ?", answer: "Oui, selon un périmètre, des hypothèses et des méthodes explicités dans le rapport." }, { question: "Pouvez-vous préparer un business plan bancaire ?", answer: "Oui. Le modèle est structuré autour des hypothèses opérationnelles, du financement et des indicateurs de remboursement." }, { question: "Accompagnez-vous les négociations ?", answer: "L'intervention peut inclure une assistance financière aux différentes étapes de l'opération." }],
    related: ["due-diligence-maroc", "ifrs-consolidation-maroc", "conseil-fiscal-maroc"]
  },
  {
    slug: "externalisation-comptable-maroc",
    eyebrow: "Outsourcing",
    title: "Externalisation comptable au Maroc",
    intro: "Déléguez tout ou partie de votre fonction comptable à une équipe locale, avec des responsabilités claires, un calendrier maîtrisé et un reporting exploitable.",
    serviceValue: "expertise-comptable",
    situations: ["Filiale sans équipe finance locale", "Croissance nécessitant un renfort fiable", "Besoin d'harmoniser clôture et reporting groupe"],
    services: ["Tenue et supervision comptable", "Clôtures périodiques", "Déclarations fiscales courantes", "Reporting groupe", "Assistance au contrôle interne"],
    deliverables: ["Balance et grand livre contrôlés", "États de synthèse et reporting", "Calendrier des obligations", "Tableau de suivi des points ouverts"],
    process: [{ title: "Transition", text: "Cartographie des flux, accès, responsabilités et données à reprendre." }, { title: "Organisation", text: "Mise en place du calendrier et des contrôles attendus." }, { title: "Production", text: "Traitement périodique et échanges avec vos équipes." }, { title: "Pilotage", text: "Restitution des chiffres, anomalies et actions à mener." }],
    faq: [{ question: "Peut-on externaliser seulement une partie de la comptabilité ?", answer: "Oui. Le périmètre peut être limité à certains cycles, clôtures, déclarations ou travaux de supervision." }, { question: "Le reporting peut-il suivre le format du groupe ?", answer: "Oui, sous réserve de cadrer les référentiels, délais et contrôles attendus." }, { question: "Comment organisez-vous la transition ?", answer: "Un plan de reprise détaille les données, interlocuteurs, contrôles et jalons avant le passage en production." }],
    related: ["expertise-comptable-audit-casablanca", "externalisation-paie-casablanca", "implantation-filiale-maroc"]
  },
  {
    slug: "implantation-filiale-maroc",
    eyebrow: "International business",
    title: "Implantation et gestion de filiale au Maroc",
    intro: "Disposez d'un point de coordination local pour créer, structurer et administrer votre filiale marocaine tout en répondant aux attentes du siège.",
    serviceValue: "conseil-gestion",
    situations: ["Groupe étranger entrant sur le marché marocain", "Filiale locale sans direction financière complète", "Besoin d'un reporting fiable entre le Maroc et le siège"],
    services: ["Cadrage de l'implantation", "Coordination juridique, fiscale et sociale", "Comptabilité et reporting groupe", "Paie et administration locale", "Appui aux fonctions finance"],
    deliverables: ["Feuille de route d'implantation", "Calendrier de conformité", "Reporting périodique", "Tableau des risques et décisions"],
    process: [{ title: "Entrée", text: "Analyse du modèle opérationnel et des contraintes du groupe." }, { title: "Installation", text: "Coordination de la structure et des obligations de démarrage." }, { title: "Exploitation", text: "Mise en place des processus comptables, fiscaux et sociaux." }, { title: "Coordination", text: "Reporting et échanges réguliers avec les responsables locaux et le siège." }],
    faq: [{ question: "Travaillez-vous en anglais avec les sièges étrangers ?", answer: "Oui. Les échanges et livrables peuvent être adaptés aux équipes internationales." }, { question: "Pouvez-vous centraliser plusieurs fonctions support ?", answer: "Oui, selon le périmètre retenu : comptabilité, fiscalité, paie, reporting et coordination locale." }, { question: "Accompagnez-vous aussi une filiale déjà créée ?", answer: "Oui. Un diagnostic initial permet de reprendre ou d'améliorer les processus existants." }],
    related: ["creer-societe-maroc", "externalisation-comptable-maroc", "ifrs-consolidation-maroc"]
  },
  {
    slug: "ifrs-consolidation-maroc",
    eyebrow: "Reporting & normes",
    title: "IFRS et consolidation au Maroc",
    intro: "Fiabilisez vos comptes consolidés, vos liasses de reporting et vos retraitements IFRS avec une méthode traçable et adaptée au calendrier du groupe.",
    serviceValue: "ifrs",
    situations: ["Première consolidation ou changement de périmètre", "Conversion vers les normes IFRS", "Accélération et sécurisation des clôtures groupe"],
    services: ["Assistance à la consolidation", "Conversion et retraitements IFRS", "Préparation des liasses", "Documentation des positions comptables", "Amélioration du processus de clôture"],
    deliverables: ["Liasses et tableaux de consolidation", "Écritures de retraitement documentées", "Notes de position comptable", "Manuel et calendrier de clôture"],
    process: [{ title: "Référentiel", text: "Identification des écarts, périmètres et exigences de reporting." }, { title: "Données", text: "Collecte, contrôle et rapprochement des informations sources." }, { title: "Retraitements", text: "Calcul, documentation et validation des ajustements." }, { title: "Clôture", text: "Production des livrables et suivi des points d'amélioration." }],
    faq: [{ question: "Pouvez-vous accompagner une première adoption IFRS ?", answer: "Oui, depuis le diagnostic des écarts jusqu'à la documentation et aux données comparatives nécessaires." }, { question: "Intervenez-vous sur une liasse groupe existante ?", answer: "Oui. Nous pouvons assister la filiale dans la production, le contrôle et la justification de sa liasse." }, { question: "Pouvez-vous former les équipes ?", answer: "La mission peut inclure des ateliers ciblés sur les normes et traitements pertinents pour l'entreprise." }],
    related: ["commissaire-aux-comptes-maroc", "externalisation-comptable-maroc", "corporate-finance-maroc"]
  }
];

export const servicePageBySlug = Object.fromEntries(servicePages.map((page) => [page.slug, page]));
