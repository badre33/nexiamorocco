export type ArticleSection =
  | { type: "intro"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "bullets"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "callout"; text: string }
  | { type: "cta"; title: string; description: string; button: string };

export interface ArticleData {
  slug: string;
  title: { fr: string; en: string };
  description: { fr: string; en: string };
  author: string;
  date: { fr: string; en: string };
  readTime: { fr: string; en: string };
  category: { fr: string; en: string };
  image: string;
  sections: { fr: ArticleSection[]; en: ArticleSection[] };
}

export const articleData: Record<string, ArticleData> = {
  "commissaire-aux-comptes-maroc-2027": {
    slug: "commissaire-aux-comptes-maroc-2027",
    title: {
      fr: "Commissaire aux comptes au Maroc : seuils, obligations et honoraires 2027",
      en: "Statutory auditor in Morocco: thresholds, obligations and fees 2027",
    },
    description: {
      fr: "Quelles sociétés sont soumises au commissariat aux comptes ? Seuils légaux, missions, honoraires et responsabilités : tout ce que les dirigeants doivent savoir en 2027.",
      en: "Which companies are subject to statutory audit in Morocco? Legal thresholds, missions, fees and responsibilities: everything directors need to know in 2027.",
    },
    author: "Nexia Morocco",
    date: { fr: "7 Novembre 2026", en: "November 7, 2026" },
    readTime: { fr: "9 min", en: "9 min" },
    category: { fr: "Audit & Conformité", en: "Audit & Compliance" },
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1200&q=80",
    sections: {
      fr: [
        {
          type: "intro",
          text: "Le commissariat aux comptes est une obligation légale pour de nombreuses sociétés marocaines — et pourtant, les dirigeants confondent souvent les seuils applicables, les missions réelles du CAC et les conséquences d'une nomination absente ou irrégulière. Tour d'horizon complet des règles en vigueur en 2027.",
        },
        {
          type: "h2",
          text: "Quelles sociétés sont obligées de nommer un commissaire aux comptes ?",
        },
        {
          type: "paragraph",
          text: "La loi n° 17-95 sur les sociétés anonymes (SA) et la loi n° 5-96 sur les autres formes de sociétés fixent les obligations de nomination d'un commissaire aux comptes. Les règles varient selon la forme juridique.",
        },
        {
          type: "h3",
          text: "Sociétés anonymes (SA)",
        },
        {
          type: "paragraph",
          text: "Toutes les SA sont obligatoirement soumises au commissariat aux comptes, sans condition de seuil. Une SA faisant appel public à l'épargne doit nommer deux commissaires aux comptes issus de cabinets distincts. Cette obligation s'applique dès la constitution de la société.",
        },
        {
          type: "h3",
          text: "SARL — les seuils déclencheurs",
        },
        {
          type: "paragraph",
          text: "Pour les SARL, l'obligation de nomination d'un commissaire aux comptes est déclenchée lorsque deux des trois seuils suivants sont dépassés sur deux exercices consécutifs :",
        },
        {
          type: "table",
          headers: ["Critère", "Seuil"],
          rows: [
            ["Chiffre d'affaires hors taxes", "50 millions MAD"],
            ["Total bilan", "25 millions MAD"],
            ["Nombre de salariés permanents", "50"],
          ],
        },
        {
          type: "paragraph",
          text: "Une SARL dont l'un des associés détient plus du tiers du capital dans une SA est également concernée. En pratique, beaucoup de SARL en croissance ignorent ce seuil jusqu'au premier contrôle fiscal — moment où l'absence de CAC devient un risque réel.",
        },
        {
          type: "h3",
          text: "Autres formes : SNC, SCS, groupes",
        },
        {
          type: "paragraph",
          text: "Les sociétés en nom collectif (SNC) et en commandite (SCS) ne sont soumises à l'obligation que si elles contrôlent ou sont contrôlées par une SA. Les groupes consolidés doivent nommer un commissaire aux comptes pour les comptes consolidés en plus des comptes sociaux.",
        },
        {
          type: "h2",
          text: "Les missions du commissaire aux comptes : au-delà de la certification",
        },
        {
          type: "paragraph",
          text: "Le rôle du CAC dépasse la simple signature des comptes annuels. Ses missions légales comprennent :",
        },
        {
          type: "bullets",
          items: [
            "La certification des comptes annuels (régularité, sincérité, image fidèle) — mission principale, se traduisant par un rapport général",
            "La vérification des informations destinées aux actionnaires et associés (rapport de gestion, documents de convocation)",
            "Le contrôle des conventions réglementées (conventions entre la société et ses dirigeants ou associés)",
            "La révélation des faits délictueux au Procureur du Roi — obligation légale en cas de découverte de faits susceptibles de constituer une infraction pénale",
            "L'alerte en cas de menace sur la continuité d'exploitation",
            "Le rapport sur les augmentations de capital et les opérations de fusion",
          ],
        },
        {
          type: "callout",
          text: "Le commissaire aux comptes n'est pas un conseil. Il ne peut pas cumuler sa mission de certification avec une mission de conseil comptable ou fiscal au profit de la même entité. Cette incompatibilité est absolue.",
        },
        {
          type: "h2",
          text: "Durée du mandat et renouvellement",
        },
        {
          type: "paragraph",
          text: "Le mandat d'un commissaire aux comptes est de trois exercices comptables (renouvelable). La nomination doit être formalisée en assemblée générale ordinaire, avec mention au registre de commerce. La révocation d'un CAC avant l'expiration de son mandat est strictement encadrée : elle nécessite une décision de justice sauf accord amiable justifié.",
        },
        {
          type: "h2",
          text: "Honoraires : quels niveaux attendre en 2027 ?",
        },
        {
          type: "paragraph",
          text: "Les honoraires de commissariat aux comptes ne sont pas réglementés au Maroc (contrairement à certains pays européens). Ils sont librement négociés entre la société et le cabinet. En pratique, plusieurs facteurs déterminent le niveau :",
        },
        {
          type: "bullets",
          items: [
            "Taille de la société (chiffre d'affaires, total bilan, nombre d'entités consolidées)",
            "Complexité de l'activité (secteur réglementé, opérations internationales, instruments financiers)",
            "Niveau de risque perçu (qualité des systèmes d'information, historique des contrôles fiscaux)",
            "Appartenance du cabinet à un réseau international",
          ],
        },
        {
          type: "paragraph",
          text: "À titre indicatif (ces fourchettes sont construites sur la base de pratiques de marché observées, non de tarifs officiels) : pour une SARL atteignant le seuil d'obligation, les honoraires se situent généralement entre 30 000 et 80 000 MAD par exercice. Pour une SA de taille moyenne, entre 80 000 et 250 000 MAD. Pour les groupes consolidés ou les sociétés faisant appel public à l'épargne, les missions dépassent fréquemment 500 000 MAD.",
        },
        {
          type: "h2",
          text: "Risques en cas d'absence ou d'irrégularité",
        },
        {
          type: "paragraph",
          text: "L'absence de commissaire aux comptes dans une société soumise à cette obligation n'est pas une simple irrégularité administrative. Les conséquences peuvent être sérieuses :",
        },
        {
          type: "bullets",
          items: [
            "Nullité des décisions d'assemblée générale prises en l'absence de CAC régulièrement nommé",
            "Responsabilité civile des dirigeants pour le préjudice subi par les associés ou les tiers",
            "Obstacle au financement bancaire : beaucoup d'établissements de crédit exigent des comptes certifiés pour les dossiers de crédit significatifs",
            "Risque accru lors d'une cession ou d'une due diligence : l'absence de certification est un signal négatif pour les acquéreurs",
            "Difficultés en cas de contrôle fiscal : les vérifications approfondies sur des exercices non certifiés sont plus fréquentes",
          ],
        },
        {
          type: "h2",
          text: "Choisir son commissaire aux comptes : les bons critères",
        },
        {
          type: "paragraph",
          text: "Au-delà de l'inscription au tableau de l'Ordre des Experts-Comptables du Maroc (condition nécessaire), plusieurs critères permettent d'évaluer la pertinence d'un cabinet pour votre mission :",
        },
        {
          type: "bullets",
          items: [
            "Expérience sectorielle : un cabinet qui connaît votre secteur ira plus vite et posera les bonnes questions",
            "Appartenance à un réseau international : pour les groupes ayant des filiales étrangères ou les sociétés en relation avec des investisseurs étrangers, l'appartenance à un réseau (Nexia, RSM, BDO, etc.) facilite la coordination et la cohérence des travaux",
            "Équipe dédiée : vérifiez que le signataire est effectivement impliqué dans les travaux et pas seulement en bout de chaîne",
            "Capacité de communication : un bon CAC communique régulièrement avec la direction, pas seulement lors du dépôt du rapport",
          ],
        },
        {
          type: "cta",
          title: "Vous avez besoin d'un commissaire aux comptes ?",
          description: "Nexia Morocco accompagne les sociétés marocaines dans leur obligation de commissariat aux comptes. Membre du réseau Nexia International (186 cabinets dans 119 pays), nous intervenons sur des missions d'audit légal, de certification de comptes et de conseil en gouvernance.",
          button: "Prendre contact",
        },
      ],
      en: [
        {
          type: "intro",
          text: "Statutory audit is a legal obligation for many Moroccan companies — yet directors often confuse the applicable thresholds, the actual missions of the statutory auditor, and the consequences of an absent or irregular appointment. A complete overview of the rules in force in 2027.",
        },
        {
          type: "h2",
          text: "Which companies are required to appoint a statutory auditor?",
        },
        {
          type: "paragraph",
          text: "Law 17-95 on joint stock companies (SA) and Law 5-96 on other company forms set the obligations for appointing a statutory auditor. The rules vary by legal form.",
        },
        {
          type: "h3",
          text: "Joint Stock Companies (SA)",
        },
        {
          type: "paragraph",
          text: "All SAs are mandatorily subject to statutory audit, with no threshold condition. An SA making a public appeal for savings must appoint two statutory auditors from separate firms. This obligation applies from the company's incorporation.",
        },
        {
          type: "h3",
          text: "SARL — triggering thresholds",
        },
        {
          type: "paragraph",
          text: "For SARLs, the obligation to appoint a statutory auditor is triggered when two of the following three thresholds are exceeded over two consecutive financial years:",
        },
        {
          type: "table",
          headers: ["Criterion", "Threshold"],
          rows: [
            ["Turnover excl. VAT", "MAD 50 million"],
            ["Total balance sheet", "MAD 25 million"],
            ["Permanent employees", "50"],
          ],
        },
        {
          type: "paragraph",
          text: "A SARL in which one of the partners holds more than a third of the capital in an SA is also concerned. In practice, many growing SARLs ignore this threshold until the first tax audit — when the absence of a statutory auditor becomes a real risk.",
        },
        {
          type: "h2",
          text: "The statutory auditor's missions: beyond certification",
        },
        {
          type: "paragraph",
          text: "The role of the statutory auditor goes beyond simply signing the annual accounts. Legal missions include:",
        },
        {
          type: "bullets",
          items: [
            "Certification of annual accounts (regularity, sincerity, true and fair view) — primary mission",
            "Verification of information intended for shareholders and partners",
            "Control of regulated agreements (between the company and its directors or partners)",
            "Reporting of criminal offences to the Public Prosecutor — legal obligation upon discovery",
            "Alert in case of threat to going concern",
            "Report on capital increases and merger operations",
          ],
        },
        {
          type: "callout",
          text: "The statutory auditor is not an advisor. They cannot combine their certification mission with an accounting or tax advisory mission for the same entity. This incompatibility is absolute.",
        },
        {
          type: "h2",
          text: "Fees: what levels to expect in 2027?",
        },
        {
          type: "paragraph",
          text: "Statutory audit fees are not regulated in Morocco. They are freely negotiated between the company and the firm. As a market indicator (these ranges are based on observed market practices, not official rates): for an SARL reaching the obligation threshold, fees generally range between MAD 30,000 and 80,000 per financial year. For a medium-sized SA, between MAD 80,000 and 250,000. For consolidated groups or companies making a public appeal for savings, missions frequently exceed MAD 500,000.",
        },
        {
          type: "h2",
          text: "Risks in case of absence or irregularity",
        },
        {
          type: "bullets",
          items: [
            "Nullity of general meeting decisions taken without a duly appointed statutory auditor",
            "Civil liability of directors for harm suffered by partners or third parties",
            "Obstacle to bank financing: many lenders require certified accounts for significant credit files",
            "Risk during acquisition or due diligence: absence of certification is a negative signal for buyers",
            "Difficulties during tax audits: deep audits on uncertified years are more frequent",
          ],
        },
        {
          type: "cta",
          title: "Do you need a statutory auditor?",
          description: "Nexia Morocco supports Moroccan companies in their statutory audit obligations. As a member of the Nexia International network (186 firms in 119 countries), we provide statutory audit, account certification and governance advisory services.",
          button: "Get in touch",
        },
      ],
    },
  },

  "creer-sarl-maroc-2027": {
    slug: "creer-sarl-maroc-2027",
    title: {
      fr: "Créer une SARL au Maroc en 2027 : guide complet pour investisseurs",
      en: "Setting up a SARL in Morocco in 2027: complete guide for investors",
    },
    description: {
      fr: "Étapes, coûts, délais, capital minimum, obligations post-création : tout ce qu'il faut savoir pour créer une SARL au Maroc, que vous soyez résident ou investisseur étranger.",
      en: "Steps, costs, timelines, minimum capital, post-incorporation obligations: everything you need to know to set up a SARL in Morocco, whether you are a resident or foreign investor.",
    },
    author: "Nexia Morocco",
    date: { fr: "7 Novembre 2026", en: "November 7, 2026" },
    readTime: { fr: "10 min", en: "10 min" },
    category: { fr: "Création d'entreprise", en: "Company Formation" },
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80",
    sections: {
      fr: [
        {
          type: "intro",
          text: "La SARL (Société à Responsabilité Limitée) est la forme juridique la plus répandue au Maroc. Elle offre une responsabilité limitée aux associés, une souplesse de gestion et des formalités allégées par rapport à la SA. Ce guide couvre l'ensemble du processus de création en 2027 — de la rédaction des statuts au premier dépôt fiscal.",
        },
        {
          type: "h2",
          text: "Pourquoi choisir la SARL ?",
        },
        {
          type: "paragraph",
          text: "La SARL s'impose comme la structure de référence pour les PME, les filiales de groupes internationaux et les startups au Maroc, pour plusieurs raisons :",
        },
        {
          type: "bullets",
          items: [
            "Responsabilité limitée : les associés ne sont responsables des dettes qu'à hauteur de leurs apports",
            "Capital minimum symbolique : 1 MAD depuis la réforme de 2018, sans obligation de libération immédiate totale",
            "Nombre d'associés : de 1 (SARL à associé unique) à 50",
            "Pas de conseil d'administration obligatoire : structure de gouvernance allégée",
            "Pas d'obligation de CAC jusqu'aux seuils légaux (50 M MAD de CA, 25 M MAD de bilan, 50 salariés)",
          ],
        },
        {
          type: "h2",
          text: "Les étapes de création",
        },
        {
          type: "h3",
          text: "1. Rédaction des statuts",
        },
        {
          type: "paragraph",
          text: "Les statuts définissent l'objet social, le siège, le capital, la répartition des parts et les règles de fonctionnement. Pour une SARL unipersonnelle, l'acte est rédigé sous seing privé ou par notaire. Pour une SARL pluripersonnelle avec apports en nature, le notaire est obligatoire. L'objet social doit être précis mais pas trop restrictif : un objet trop étroit peut bloquer l'activité si elle évolue sans modification statutaire.",
        },
        {
          type: "h3",
          text: "2. Dépôt du capital et certificat bancaire",
        },
        {
          type: "paragraph",
          text: "Le capital doit être déposé dans un compte bancaire bloqué ouvert au nom de la société en formation. La banque délivre un certificat de dépôt de capital, document indispensable au dossier d'immatriculation. Pour les investisseurs étrangers, ce compte doit être ouvert en dirhams convertibles (compte étranger en dirhams) pour permettre le rapatriement futur des dividendes.",
        },
        {
          type: "h3",
          text: "3. Immatriculation au Registre de Commerce",
        },
        {
          type: "paragraph",
          text: "Le dossier d'immatriculation est déposé auprès du Centre Régional d'Investissement (CRI) ou directement au greffe du Tribunal de Commerce. Les documents requis comprennent : statuts signés, certificat de dépôt de capital, pièces d'identité des associés et gérants, contrat de bail ou attestation de domiciliation, et formulaires d'immatriculation.",
        },
        {
          type: "h3",
          text: "4. Identifiant fiscal et TVA",
        },
        {
          type: "paragraph",
          text: "L'immatriculation génère automatiquement l'identifiant fiscal (IF) auprès de la Direction Régionale des Impôts. L'assujettissement à la TVA est automatique si votre activité est soumise à la TVA. L'ICE (Identifiant Commun de l'Entreprise) est attribué par la Direction Générale des Impôts et sert de numéro unique pour toutes les administrations.",
        },
        {
          type: "h3",
          text: "5. Affiliation CNSS et CIMR",
        },
        {
          type: "paragraph",
          text: "Dès l'embauche du premier salarié, l'affiliation à la CNSS (Caisse Nationale de Sécurité Sociale) est obligatoire. L'adhésion à la CIMR (Caisse Interprofessionnelle Marocaine de Retraite) est en principe optionnelle mais fortement recommandée pour l'attractivité employeur.",
        },
        {
          type: "h2",
          text: "Délais et coûts réels",
        },
        {
          type: "table",
          headers: ["Étape", "Délai moyen", "Coût indicatif (MAD)"],
          rows: [
            ["Rédaction des statuts (avocat/notaire)", "2–5 jours", "2 000 – 8 000"],
            ["Dépôt capital + certificat bancaire", "1–3 jours", "0 (frais de tenue de compte)"],
            ["Immatriculation RC (CRI)", "3–7 jours ouvrés", "350 – 500 (frais de greffe)"],
            ["Enregistrement des statuts (Direction des Impôts)", "1–2 jours", "1% du capital (min. 1 000)"],
            ["Publication légale (BALO)", "1–3 jours", "1 000 – 1 500"],
            ["Délai total réaliste", "10–20 jours ouvrés", "5 000 – 15 000 tout compris"],
          ],
        },
        {
          type: "paragraph",
          text: "Ces coûts et délais sont indicatifs et peuvent varier selon la complexité de la structure, la localisation et le recours ou non à un professionnel. Le CRI de Casablanca traite les dossiers standard en 5 à 7 jours ouvrés.",
        },
        {
          type: "h2",
          text: "Ce que les fondateurs étrangers oublient souvent",
        },
        {
          type: "paragraph",
          text: "Pour un investisseur étranger, la création d'une SARL au Maroc soulève des questions spécifiques que les fondateurs locaux n'ont pas à gérer :",
        },
        {
          type: "bullets",
          items: [
            "Compte étranger en dirhams (CED) ou en devises : obligatoire pour les associés non-résidents, il conditionne la convertibilité future des dividendes et le rapatriement du capital",
            "Autorisation de change pour certains secteurs : les activités dans l'immobilier, le secteur financier ou la défense requièrent des autorisations préalables de l'Office des Changes",
            "Choix du gérant : un gérant non-résident doit obtenir un titre de séjour professionnel avant d'exercer au Maroc",
            "Objet social et agrément : certaines activités (banque, assurance, pharmacie, télécoms) nécessitent un agrément sectoriel avant ou après l'immatriculation",
            "Prix de transfert : dès que la SARL est liée à une entité étrangère (maison mère, filiale sœur), les transactions entre entités liées sont soumises aux règles de prix de transfert marocaines",
          ],
        },
        {
          type: "h2",
          text: "Obligations post-création à ne pas négliger",
        },
        {
          type: "paragraph",
          text: "La création n'est que le début. Les premières semaines après l'immatriculation concentrent plusieurs obligations qui, si elles sont ignorées, créent des risques dès le premier exercice :",
        },
        {
          type: "bullets",
          items: [
            "Déclaration d'existence à la Direction des Impôts (dans les 30 jours)",
            "Ouverture de registres légaux obligatoires : livre-journal, grand livre, livre d'inventaire",
            "Mise en place d'un système comptable conforme au CGNC (Code Général de Normalisation Comptable)",
            "Contrat de travail des dirigeants et déclaration CNSS des salaires",
            "Déclaration de la taxe de patente auprès de la commune",
            "Première acompte IS si l'exercice est en cours",
          ],
        },
        {
          type: "cta",
          title: "Créer votre société au Maroc avec Nexia Morocco",
          description: "Nexia Morocco accompagne les investisseurs locaux et internationaux dans la création et la structuration de leurs sociétés au Maroc. De la rédaction des statuts à la mise en conformité fiscale et sociale, notre équipe prend en charge l'ensemble du processus.",
          button: "Discuter de votre projet",
        },
      ],
      en: [
        {
          type: "intro",
          text: "The SARL (Société à Responsabilité Limitée, or limited liability company) is the most common legal form in Morocco. It offers limited liability for partners, management flexibility and simplified formalities compared to the SA (joint stock company). This guide covers the entire creation process in 2027 — from drafting the articles of association to the first tax filing.",
        },
        {
          type: "h2",
          text: "Why choose a SARL?",
        },
        {
          type: "bullets",
          items: [
            "Limited liability: partners are only responsible for debts up to the amount of their contributions",
            "Symbolic minimum capital: MAD 1 since the 2018 reform, with no obligation for immediate full payment",
            "Number of partners: from 1 (sole-partner SARL) to 50",
            "No mandatory board of directors: simplified governance structure",
            "No statutory auditor obligation until legal thresholds (MAD 50M turnover, MAD 25M balance sheet, 50 employees)",
          ],
        },
        {
          type: "h2",
          text: "What foreign founders often overlook",
        },
        {
          type: "bullets",
          items: [
            "Foreign dirham account (CED): mandatory for non-resident partners, it conditions the future convertibility of dividends and capital repatriation",
            "Foreign exchange authorisation for certain sectors: real estate, financial sector and defence activities require prior authorisations from the Office des Changes",
            "Non-resident manager: must obtain a professional residence permit before operating in Morocco",
            "Sector-specific licences: banking, insurance, pharmacy, telecoms require sectoral approval before or after incorporation",
            "Transfer pricing: once the SARL is linked to a foreign entity (parent company, sister subsidiary), transactions between related entities are subject to Moroccan transfer pricing rules",
          ],
        },
        {
          type: "h2",
          text: "Realistic timelines and costs",
        },
        {
          type: "table",
          headers: ["Step", "Average time", "Indicative cost (MAD)"],
          rows: [
            ["Drafting articles (lawyer/notary)", "2–5 days", "2,000 – 8,000"],
            ["Capital deposit + bank certificate", "1–3 days", "0 (account fees)"],
            ["Commercial register (CRI)", "3–7 working days", "350 – 500"],
            ["Articles registration (Tax Dept.)", "1–2 days", "1% of capital (min. 1,000)"],
            ["Legal publication (BALO)", "1–3 days", "1,000 – 1,500"],
            ["Realistic total", "10–20 working days", "MAD 5,000 – 15,000"],
          ],
        },
        {
          type: "cta",
          title: "Set up your company in Morocco with Nexia Morocco",
          description: "Nexia Morocco supports local and international investors in creating and structuring their companies in Morocco. From drafting articles of association to tax and social compliance, our team handles the entire process.",
          button: "Discuss your project",
        },
      ],
    },
  },

  "prix-de-transfert-maroc": {
    slug: "prix-de-transfert-maroc",
    title: {
      fr: "Prix de transfert au Maroc : documentation obligatoire et risques de contrôle",
      en: "Transfer pricing in Morocco: mandatory documentation and audit risks",
    },
    description: {
      fr: "Documentation obligatoire dès 50 M MAD de CA ou de bilan, 30 jours pour la produire en contrôle, pénalité de 0,5 % sur transactions non documentées : guide complet pour les groupes internationaux opérant au Maroc.",
      en: "Mandatory documentation from MAD 50M in revenue or gross assets, 30 days to produce during audit, 0.5% penalty on undocumented transactions: complete guide for international groups operating in Morocco.",
    },
    author: "Nexia Morocco",
    date: { fr: "5 Février 2027", en: "February 5, 2027" },
    readTime: { fr: "8 min", en: "8 min" },
    category: { fr: "Fiscalité internationale", en: "International Tax" },
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    sections: {
      fr: [
        {
          type: "intro",
          text: "Le Maroc a renforcé son dispositif de prix de transfert avec la Loi de Finances 2019, alignant ses exigences sur les standards OCDE/BEPS. Pour les groupes multinationaux opérant au Maroc, l'enjeu est de taille : une documentation insuffisante peut déclencher un redressement fiscal lourd, avec des pénalités qui s'accumulent au-delà des simples ajustements de prix.",
        },
        {
          type: "h2",
          text: "Qui est concerné ?",
        },
        {
          type: "paragraph",
          text: "L'obligation de documentation de prix de transfert s'applique aux entreprises marocaines qui entretiennent des relations de dépendance ou de contrôle avec des entités étrangères, dès lors qu'elles dépassent l'un des deux seuils suivants sur l'exercice en cours :",
        },
        {
          type: "table",
          headers: ["Critère", "Seuil"],
          rows: [
            ["Chiffre d'affaires hors taxes", "50 millions MAD"],
            ["Actif brut total (bilan)", "50 millions MAD"],
          ],
        },
        {
          type: "paragraph",
          text: "Dès lors qu'un de ces seuils est atteint, l'entité marocaine doit être en mesure de justifier, à tout moment et sur demande de l'administration fiscale, que ses transactions intragroupes respectent le principe de pleine concurrence (arm's length principle).",
        },
        {
          type: "h2",
          text: "Le contenu de la documentation exigée",
        },
        {
          type: "paragraph",
          text: "Le Code Général des Impôts (article 214-III) distingue deux niveaux de documentation :",
        },
        {
          type: "h3",
          text: "1. Le fichier principal (Master File)",
        },
        {
          type: "bullets",
          items: [
            "Description de l'activité du groupe et de sa structure",
            "Politique de prix de transfert appliquée au niveau du groupe",
            "Actifs incorporels détenus par le groupe (marques, brevets, savoir-faire)",
            "Accords préalables en matière de prix de transfert (APA)",
            "Flux financiers intragroupes et conditions des financements",
          ],
        },
        {
          type: "h3",
          text: "2. Le fichier local (Local File)",
        },
        {
          type: "bullets",
          items: [
            "Description détaillée de l'entité marocaine et de ses activités",
            "Liste et description de toutes les transactions intragroupes réalisées sur l'exercice",
            "Méthode de prix de transfert choisie et analyse économique justificative",
            "Comparables utilisés (étude de benchmarking)",
            "Analyse financière de la rentabilité de l'entité marocaine par rapport aux comparables",
          ],
        },
        {
          type: "callout",
          text: "Le délai légal pour produire la documentation en cas de contrôle est de 30 jours à compter de la demande de l'administration. Ce délai est court pour construire une analyse économique robuste : la documentation doit être préparée en amont, exercice par exercice.",
        },
        {
          type: "h2",
          text: "Les pénalités applicables",
        },
        {
          type: "paragraph",
          text: "En l'absence de documentation ou si la documentation est jugée insuffisante, l'administration fiscale peut :",
        },
        {
          type: "bullets",
          items: [
            "Procéder à un redressement des bénéfices en réintégrant les bénéfices transférés à l'étranger — avec application de l'IS au taux normal sur les montants réintégrés",
            "Appliquer une pénalité de 0,5 % du montant des transactions intragroupes non documentées (introduite par la LF 2019)",
            "Appliquer une majoration de 15 % à 100 % selon le degré d'infraction et le caractère répété ou de mauvaise foi",
            "Requalifier les redevances ou intérêts versés à l'étranger en distribution de bénéfices, entraînant une retenue à la source au taux conventionnel ou de droit commun (10 % à 15 %)",
          ],
        },
        {
          type: "h2",
          text: "Les méthodes de prix de transfert acceptées au Maroc",
        },
        {
          type: "paragraph",
          text: "Le Maroc a adopté les cinq méthodes OCDE :",
        },
        {
          type: "bullets",
          items: [
            "CUP (Comparable Uncontrolled Price) : prix de pleine concurrence comparable — méthode privilégiée",
            "Prix de revente minoré (Resale Minus)",
            "Coût majoré (Cost Plus)",
            "Méthode transactionnelle de la marge nette (TNMM) — la plus utilisée en pratique",
            "Partage des bénéfices (Profit Split) — pour les transactions très intégrées",
          ],
        },
        {
          type: "paragraph",
          text: "En pratique, la TNMM est la méthode la plus couramment appliquée pour les filiales de distribution ou de prestation de services. Elle compare la rentabilité nette de l'entité marocaine (marge opérationnelle / marge sur coûts) à un panel de sociétés comparables indépendantes.",
        },
        {
          type: "h2",
          text: "Accords préalables de prix (APA)",
        },
        {
          type: "paragraph",
          text: "Le Maroc permet la conclusion d'accords préalables en matière de prix de transfert (APA — Advance Pricing Agreements) avec la Direction Générale des Impôts (DGI). Un APA bilatéral ou unilatéral sécurise la politique de prix pour 3 à 5 ans. C'est une option particulièrement pertinente pour les groupes ayant des transactions intragroupes significatives et récurrentes.",
        },
        {
          type: "h2",
          text: "Les secteurs et transactions les plus exposés",
        },
        {
          type: "bullets",
          items: [
            "Redevances de marque et de savoir-faire versées à une société mère étrangère",
            "Intérêts sur prêts intragroupes (surtout en cas de sous-capitalisation)",
            "Prestations de services rendus par un siège étranger à la filiale marocaine (management fees)",
            "Achats de marchandises ou de matières premières auprès d'entités liées",
            "Cessions d'actifs incorporels entre entités du groupe",
          ],
        },
        {
          type: "cta",
          title: "Sécuriser votre politique de prix de transfert au Maroc",
          description: "L'équipe fiscale de Nexia Morocco accompagne les groupes internationaux dans la structuration et la documentation de leurs prix de transfert au Maroc. Analyse économique, benchmarking, préparation de la documentation réglementaire et assistance en cas de contrôle.",
          button: "Contacter notre équipe fiscale",
        },
      ],
      en: [
        {
          type: "intro",
          text: "Morocco strengthened its transfer pricing framework with the 2019 Finance Act, aligning its requirements with OECD/BEPS standards. For multinational groups operating in Morocco, the stakes are high: insufficient documentation can trigger a significant tax reassessment, with penalties accumulating beyond simple price adjustments.",
        },
        {
          type: "h2",
          text: "Who is concerned?",
        },
        {
          type: "table",
          headers: ["Criterion", "Threshold"],
          rows: [
            ["Turnover excl. VAT", "MAD 50 million"],
            ["Total gross assets (balance sheet)", "MAD 50 million"],
          ],
        },
        {
          type: "h2",
          text: "Required documentation",
        },
        {
          type: "h3",
          text: "Master File",
        },
        {
          type: "bullets",
          items: [
            "Description of the group's business and structure",
            "Group-level transfer pricing policy",
            "Intangible assets held by the group (brands, patents, know-how)",
            "Advance Pricing Agreements (APA)",
            "Intragroup financial flows and financing terms",
          ],
        },
        {
          type: "h3",
          text: "Local File",
        },
        {
          type: "bullets",
          items: [
            "Detailed description of the Moroccan entity and its activities",
            "List and description of all intragroup transactions for the year",
            "Transfer pricing method chosen and supporting economic analysis",
            "Comparables used (benchmarking study)",
            "Financial analysis of the Moroccan entity's profitability vs comparables",
          ],
        },
        {
          type: "callout",
          text: "The legal deadline to produce documentation upon audit request is 30 days. This is short to build a robust economic analysis: documentation must be prepared in advance, year by year.",
        },
        {
          type: "h2",
          text: "Applicable penalties",
        },
        {
          type: "bullets",
          items: [
            "Profit reassessment — with CIT applied at normal rate on reintegrated amounts",
            "0.5% penalty on the amount of undocumented intragroup transactions (introduced by the 2019 Finance Act)",
            "15% to 100% surcharge depending on degree of infringement",
            "Reclassification of royalties or interest paid abroad as profit distribution, triggering withholding tax at 10% to 15%",
          ],
        },
        {
          type: "cta",
          title: "Secure your transfer pricing policy in Morocco",
          description: "Nexia Morocco's tax team supports international groups in structuring and documenting their transfer pricing in Morocco. Economic analysis, benchmarking, regulatory documentation and audit assistance.",
          button: "Contact our tax team",
        },
      ],
    },
  },

  "facturation-electronique-maroc-2027": {
    slug: "facturation-electronique-maroc-2027",
    title: {
      fr: "Facturation électronique au Maroc : obligations actuelles et décret à venir",
      en: "E-invoicing in Morocco: current obligations and upcoming decree",
    },
    description: {
      fr: "Comptabilité électronique obligatoire depuis 2018, facturation électronique en attente de décret : ce que les entreprises doivent anticiper maintenant pour éviter les pénalités de 50 000 MAD par exercice.",
      en: "Electronic accounting mandatory since 2018, e-invoicing awaiting its implementing decree: what companies must anticipate now to avoid MAD 50,000 annual penalties.",
    },
    author: "Nexia Morocco",
    date: { fr: "15 Janvier 2027", en: "January 15, 2027" },
    readTime: { fr: "6 min", en: "6 min" },
    category: { fr: "Conformité", en: "Compliance" },
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80",
    sections: {
      fr: [
        {
          type: "intro",
          text: "Beaucoup d'entreprises marocaines font la confusion entre deux obligations distinctes : la comptabilité sous forme électronique (obligatoire depuis la LF 2018) et la facturation électronique au sens strict (toujours en attente de son décret d'application). Cette confusion crée deux types de risques opposés : des entreprises sanctionnées pour non-conformité sur ce qui est déjà obligatoire, et des entreprises qui font des investissements prématurés sur ce qui ne l'est pas encore.",
        },
        {
          type: "h2",
          text: "Ce qui est déjà obligatoire : la comptabilité électronique",
        },
        {
          type: "paragraph",
          text: "L'article 145 du Code Général des Impôts, tel que modifié par la LF 2018, impose à toute entreprise tenant sa comptabilité sous forme dématérialisée (logiciel comptable) de conserver ses fichiers dans un format structuré et de les remettre à l'administration en cas de contrôle.",
        },
        {
          type: "h3",
          text: "Le Fichier des Écritures Comptables (FEC)",
        },
        {
          type: "paragraph",
          text: "En cas de vérification générale de comptabilité, l'entreprise doit remettre son FEC sous 30 jours. Ce fichier contient l'ensemble des écritures comptables de l'exercice au format CSV ou XML. Les erreurs les plus fréquentes constatées lors des contrôles :",
        },
        {
          type: "bullets",
          items: [
            "FEC incomplet ou ne couvrant pas l'ensemble des exercices vérifiés",
            "Format non conforme aux spécifications de la DGI",
            "Incohérence entre le FEC et la liasse fiscale déposée",
            "Écritures d'extourne ou de régularisation absentes du fichier",
          ],
        },
        {
          type: "callout",
          text: "La pénalité pour refus de remettre le FEC ou pour FEC non conforme est de 50 000 MAD par exercice vérifié. Elle s'applique même si la comptabilité est par ailleurs régulière.",
        },
        {
          type: "h2",
          text: "Ce qui n'est pas encore obligatoire : la facturation électronique",
        },
        {
          type: "paragraph",
          text: "La LF 2024 a introduit le cadre légal de la facturation électronique au Maroc, créant l'obligation de principe. Mais l'entrée en vigueur effective est conditionnée à la publication d'un décret d'application précisant les modalités techniques, les formats acceptés, les délais de déploiement par catégorie d'entreprise et les sanctions applicables. À la date de publication de cet article, ce décret n'a pas encore été publié.",
        },
        {
          type: "paragraph",
          text: "Ce que l'on sait déjà sur le futur dispositif :",
        },
        {
          type: "bullets",
          items: [
            "Obligation de passer par une plateforme dématérialisée agréée par l'État",
            "Facturation structurée en XML ou UBL (format international)",
            "Conservation des factures pendant 10 ans minimum",
            "Déploiement probablement progressif : grandes entreprises d'abord, PME ensuite",
            "Interconnexion avec le système TVA pour préremplissage des déclarations",
          ],
        },
        {
          type: "h2",
          text: "Ce que les entreprises doivent anticiper maintenant",
        },
        {
          type: "paragraph",
          text: "Même si l'obligation n'est pas encore en vigueur, l'anticipation est stratégique pour deux raisons : d'abord, les migrations de systèmes informatiques prennent du temps (3 à 18 mois selon la taille) ; ensuite, certains clients — notamment les grandes entreprises et les administrations publiques — exigent déjà des factures dématérialisées pour leurs processus internes.",
        },
        {
          type: "bullets",
          items: [
            "Auditer le système d'information comptable actuel : votre logiciel génère-t-il déjà un FEC conforme ? Peut-il exporter en XML structuré ?",
            "Inventorier les flux de facturation : nombre de factures émises et reçues, canaux actuels, clients et fournisseurs concernés",
            "Évaluer les options de plateforme : solutions intégrées à votre ERP, plateformes SaaS dédiées, prestataires agréés",
            "Former les équipes comptables et commerciales au nouveau processus",
            "Prévoir un budget de mise en conformité : les estimations de marché pour une PME se situent entre 30 000 et 150 000 MAD selon la complexité",
          ],
        },
        {
          type: "h2",
          text: "Les mentions obligatoires sur les factures actuelles",
        },
        {
          type: "paragraph",
          text: "En attendant le décret, les mentions obligatoires sur les factures restent régies par l'article 145 du CGI et le Code de Commerce. Une facture irrégulière expose à l'exclusion du droit à déduction de TVA pour le client. Les mentions minimales obligatoires :",
        },
        {
          type: "bullets",
          items: [
            "Numéro de facture (séquence chronologique ininterrompue)",
            "Date d'émission",
            "Identité complète du vendeur/prestataire (raison sociale, adresse, IF, ICE, RC)",
            "Identité du client (raison sociale, adresse, IF si assujetti)",
            "Description précise des produits/services",
            "Prix unitaire HT, quantité, montant HT par ligne",
            "Taux de TVA applicable par ligne, montant de TVA",
            "Total HT, total TVA, total TTC",
          ],
        },
        {
          type: "cta",
          title: "Préparer votre conformité FEC et facturation électronique",
          description: "Nexia Morocco accompagne les entreprises dans l'audit de leur système comptable, la mise en conformité FEC et la préparation aux futures obligations de facturation électronique au Maroc.",
          button: "Parler à un expert",
        },
      ],
      en: [
        {
          type: "intro",
          text: "Many Moroccan companies confuse two distinct obligations: electronic accounting (mandatory since the 2018 Finance Act) and e-invoicing in the strict sense (still awaiting its implementing decree). This confusion creates two opposing risks: companies penalised for non-compliance with what is already mandatory, and companies making premature investments in what is not yet required.",
        },
        {
          type: "h2",
          text: "What is already mandatory: electronic accounting",
        },
        {
          type: "callout",
          text: "The penalty for refusing to submit the electronic accounting file (FEC) or for a non-compliant FEC is MAD 50,000 per audited financial year. It applies even if the accounting is otherwise regular.",
        },
        {
          type: "h2",
          text: "What is not yet mandatory: e-invoicing",
        },
        {
          type: "paragraph",
          text: "The 2024 Finance Act introduced the legal framework for e-invoicing in Morocco, creating the obligation in principle. But actual entry into force is conditional on publication of an implementing decree specifying technical modalities, accepted formats, deployment timelines by company category, and applicable penalties. As of this article's publication date, this decree has not yet been published.",
        },
        {
          type: "h2",
          text: "What companies should anticipate now",
        },
        {
          type: "bullets",
          items: [
            "Audit your current accounting system: does your software already generate a compliant FEC? Can it export to structured XML?",
            "Map your invoicing flows: number of invoices issued and received, current channels, affected customers and suppliers",
            "Evaluate platform options: ERP-integrated solutions, dedicated SaaS platforms, approved providers",
            "Train accounting and sales teams on the new process",
            "Budget for compliance: market estimates for an SME range from MAD 30,000 to 150,000 depending on complexity",
          ],
        },
        {
          type: "cta",
          title: "Prepare your FEC compliance and e-invoicing readiness",
          description: "Nexia Morocco supports companies in auditing their accounting systems, FEC compliance and preparing for future e-invoicing obligations in Morocco.",
          button: "Speak to an expert",
        },
      ],
    },
  },

  "implanter-filiale-maroc": {
    slug: "implanter-filiale-maroc",
    title: {
      fr: "Implanter une filiale au Maroc : guide pour investisseurs étrangers",
      en: "Setting up a subsidiary in Morocco: guide for foreign investors",
    },
    description: {
      fr: "SARL, SA, succursale ou bureau de représentation : comment choisir la bonne structure, quelles autorisations obtenir et quelles obligations gérer dès l'ouverture.",
      en: "SARL, SA, branch or representative office: how to choose the right structure, which authorisations to obtain and which obligations to manage from day one.",
    },
    author: "Nexia Morocco",
    date: { fr: "25 Avril 2027", en: "April 25, 2027" },
    readTime: { fr: "10 min", en: "10 min" },
    category: { fr: "International", en: "International" },
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80",
    sections: {
      fr: [
        {
          type: "intro",
          text: "Le Maroc accueille chaque année plusieurs milliers d'investissements étrangers directs. Mais entre l'intention d'implantation et la société opérationnelle, les dirigeants étrangers rencontrent systématiquement les mêmes obstacles : choix de structure inadapté, comptes bancaires mal configurés, obligations post-création ignorées. Ce guide répond aux questions que les fondateurs étrangers posent le plus souvent — et à celles qu'ils auraient dû poser avant de signer les statuts.",
        },
        {
          type: "h2",
          text: "Quelle structure choisir ?",
        },
        {
          type: "paragraph",
          text: "Le choix de la structure d'implantation est la première décision stratégique. Il conditionne la fiscalité, la gouvernance, la responsabilité des dirigeants et les options de sortie.",
        },
        {
          type: "table",
          headers: ["Structure", "Capital", "Gouvernance", "Fiscalité", "Idéal pour"],
          rows: [
            ["SARL", "1 MAD min.", "Gérant(s)", "IS 20–35%", "Filiale opérationnelle, PME, startups"],
            ["SA", "300 000 MAD min.", "CA + DG", "IS 20–35%", "Levées de fonds, cotation, >50 associés"],
            ["Succursale", "Aucun", "Siège étranger", "IS sur bénéfices locaux", "Phase test, activité limitée"],
            ["Bureau de représentation", "Aucun", "Siège étranger", "Exonéré IS (non lucratif)", "Prospection, représentation commerciale"],
          ],
        },
        {
          type: "paragraph",
          text: "Dans la grande majorité des cas, la SARL est la structure optimale pour une filiale opérationnelle. La succursale est parfois choisie pour des raisons de gouvernance de groupe (elle n'a pas de personnalité juridique distincte), mais elle présente des inconvénients : sa responsabilité remonte au siège étranger, et certains clients et banques marocains la perçoivent moins favorablement qu'une filiale.",
        },
        {
          type: "h2",
          text: "Le compte bancaire : un point bloquant sous-estimé",
        },
        {
          type: "paragraph",
          text: "Pour les investisseurs étrangers, l'ouverture d'un compte bancaire adapté est souvent le premier point de friction. Il existe deux types de comptes pour les sociétés à capital étranger :",
        },
        {
          type: "bullets",
          items: [
            "Compte étranger en dirhams (CED) : permet de recevoir des virements de l'étranger, de payer des fournisseurs et salaires en dirhams, et de rapatrier librement les dividendes et le capital vers l'étranger — sous réserve de produire les justificatifs requis par l'Office des Changes",
            "Compte en devises : pour les sociétés dont l'activité est principalement en devises (export, offshore). Permet de recevoir et de payer en devises sans conversion systématique",
          ],
        },
        {
          type: "callout",
          text: "Un compte courant ordinaire (non configuré comme CED) bloque le rapatriement des dividendes. Beaucoup d'investisseurs étrangers le découvrent seulement au moment de distribuer leurs premiers bénéfices, plusieurs années après la création.",
        },
        {
          type: "h2",
          text: "Les autorisations spécifiques par secteur",
        },
        {
          type: "paragraph",
          text: "Certains secteurs exigent des autorisations préalables à l'immatriculation ou concomitantes :",
        },
        {
          type: "bullets",
          items: [
            "Banque et finance : agrément Bank Al-Maghrib (délai : 6 à 18 mois)",
            "Assurance : agrément Direction des Assurances",
            "Télécommunications : autorisation ANRT",
            "Pharmacie et santé : autorisation Ministère de la Santé",
            "Immobilier : immatriculation ANCFCC, agrément promoteur immobilier",
            "Enseignement privé : autorisation Ministère de l'Enseignement",
            "Activités réglementées par l'Office des Changes : IDE dans certains secteurs, rapatriement des capitaux",
          ],
        },
        {
          type: "h2",
          text: "Le gérant étranger : titre de séjour et carte de travail",
        },
        {
          type: "paragraph",
          text: "Un ressortissant étranger qui souhaite gérer sa filiale depuis le Maroc doit obtenir :",
        },
        {
          type: "bullets",
          items: [
            "Une carte d'immatriculation auprès de la Direction Générale de la Sûreté Nationale (DGSN) — titre de séjour pour étrangers résidant au Maroc",
            "Une autorisation de travail délivrée par l'ANAPEC (Agence Nationale de Promotion de l'Emploi et des Compétences) — sauf exceptions pour certaines nationalités dans le cadre d'accords bilatéraux",
            "Un contrat de travail avec la filiale marocaine (si rémunéré localement) ou une lettre de détachement (si rémunéré par le siège étranger)",
          ],
        },
        {
          type: "paragraph",
          text: "Les ressortissants de l'UE, des USA, du Canada et de quelques autres pays bénéficient de procédures allégées. Les délais d'obtention varient entre 1 et 6 mois selon la nationalité et le secteur.",
        },
        {
          type: "h2",
          text: "Les prix de transfert dès le premier exercice",
        },
        {
          type: "paragraph",
          text: "Dès que la filiale marocaine réalise des transactions avec sa maison mère ou des sociétés sœurs à l'étranger (facturation de services, redevances de marque, prêts intragroupes, achats de marchandises), les règles de prix de transfert marocaines s'appliquent si les seuils sont atteints (50 M MAD de CA ou de bilan).",
        },
        {
          type: "paragraph",
          text: "Une filiale en démarrage dont le CA est en dessous des seuils n'est pas immédiatement concernée — mais la documentation doit être construite dès le départ, car les transactions des premières années seront auditées sur la base du dossier de création si un contrôle intervient ultérieurement.",
        },
        {
          type: "h2",
          text: "Le reporting groupe : IFRS, consolidation et déclaration pays par pays",
        },
        {
          type: "paragraph",
          text: "Pour les filiales de groupes significatifs, plusieurs obligations de reporting s'ajoutent aux comptes locaux :",
        },
        {
          type: "bullets",
          items: [
            "Reporting IFRS pour consolidation : si la maison mère consolide en IFRS, la filiale marocaine doit produire des états financiers de remontée en IFRS en plus des comptes locaux en CGNC",
            "Déclaration pays par pays (CbCR) : si le groupe dépasse le seuil de 750 M EUR de CA consolidé, une déclaration CbCR doit être déposée au Maroc pour les exercices concernés",
            "Liasse de consolidation : reporting interne groupe mensuel ou trimestriel — souvent sous-estimé dans les budgets de mise en place",
          ],
        },
        {
          type: "cta",
          title: "Implanter votre filiale au Maroc avec Nexia Morocco",
          description: "Nexia Morocco accompagne les investisseurs étrangers dans toutes les étapes de l'implantation : choix de structure, constitution, ouverture de comptes, conformité fiscale et sociale, reporting groupe. Membre du réseau Nexia International dans 119 pays.",
          button: "Parler à notre équipe",
        },
      ],
      en: [
        {
          type: "intro",
          text: "Morocco attracts thousands of foreign direct investments each year. But between the intention to invest and an operational company, foreign directors systematically encounter the same obstacles: unsuitable structure choice, poorly configured bank accounts, ignored post-incorporation obligations. This guide answers the questions foreign founders ask most often — and those they should have asked before signing the articles.",
        },
        {
          type: "h2",
          text: "Which structure to choose?",
        },
        {
          type: "table",
          headers: ["Structure", "Capital", "Governance", "Tax", "Best for"],
          rows: [
            ["SARL", "MAD 1 min.", "Manager(s)", "CIT 20–35%", "Operating subsidiary, SMEs, startups"],
            ["SA", "MAD 300,000 min.", "Board + CEO", "CIT 20–35%", "Fundraising, listing, >50 shareholders"],
            ["Branch", "None", "Foreign HQ", "CIT on local profits", "Test phase, limited activity"],
            ["Representative office", "None", "Foreign HQ", "CIT exempt (non-profit)", "Prospecting, commercial representation"],
          ],
        },
        {
          type: "callout",
          text: "An ordinary current account (not configured as a foreign dirham account) blocks dividend repatriation. Many foreign investors discover this only when distributing their first profits, years after incorporation.",
        },
        {
          type: "h2",
          text: "Transfer pricing from the first financial year",
        },
        {
          type: "paragraph",
          text: "As soon as the Moroccan subsidiary transacts with its parent company or sister companies abroad (service billing, brand royalties, intragroup loans, goods purchases), Moroccan transfer pricing rules apply if thresholds are reached (MAD 50M in revenue or balance sheet).",
        },
        {
          type: "h2",
          text: "Group reporting: IFRS, consolidation and country-by-country reporting",
        },
        {
          type: "bullets",
          items: [
            "IFRS reporting for consolidation: if the parent consolidates under IFRS, the Moroccan subsidiary must produce IFRS reporting packages in addition to local CGNC accounts",
            "Country-by-Country Report (CbCR): if the group exceeds EUR 750M consolidated revenue, a CbCR declaration must be filed in Morocco",
            "Consolidation package: internal monthly or quarterly group reporting — often underestimated in setup budgets",
          ],
        },
        {
          type: "cta",
          title: "Set up your subsidiary in Morocco with Nexia Morocco",
          description: "Nexia Morocco supports foreign investors through all stages of establishment: structure choice, incorporation, account opening, tax and social compliance, group reporting. Member of the Nexia International network in 119 countries.",
          button: "Talk to our team",
        },
      ],
    },
  },
};
