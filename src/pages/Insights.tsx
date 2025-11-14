import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowRight, Filter } from "lucide-react";
import { useState } from "react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { useSimpleLanguage } from "@/hooks/useSimpleLanguage";

const getInsightCategories = (t: (key: string) => string) => [
  t('insightsPage.category.all'),
  t('insightsPage.category.health'),
  t('insightsPage.category.international'),
  t('insightsPage.category.trade'), 
  t('insightsPage.category.investment'),
  t('insightsPage.category.tax'),
  t('insightsPage.category.audit'), 
  t('insightsPage.category.strategy'),
  t('insightsPage.category.finance'),
  t('insightsPage.category.regulation')
];

const globalInsights = [
  {
    id: 1,
    title: {
      fr: "Les petites et moyennes entreprises au Maroc : un potentiel important limité par des obstacles structurels",
      en: "Small and medium-sized enterprises in Morocco: significant potential limited by structural obstacles"
    },
    description: {
      fr: "Le récent rapport du Conseil Économique, Social et Environnemental (CESE) met en lumière les difficultés persistantes auxquelles sont confrontées les petites et moyennes entreprises (PME) au Maroc. Bien qu'elles constituent la majorité du tissu entrepreneurial national et contribuent de manière déterminante à la dynamique économique, une grande partie d'entre elles ne parviennent pas à inscrire leur activité dans une trajectoire de croissance durable.",
      en: "The recent report by the Economic, Social and Environmental Council (CESE) highlights the persistent difficulties faced by small and medium-sized enterprises (SMEs) in Morocco. Although they constitute the majority of the national entrepreneurial fabric and contribute decisively to the economic dynamics, a large part of them fail to establish their activity in a sustainable growth trajectory."
    },
    category: {
      fr: "Stratégie d'entreprise",
      en: "Business Strategy"
    },
    author: "Nexia Morocco",
    date: {
      fr: "Novembre 2025",
      en: "November 2025"
    },
    readTime: {
      fr: "8 min",
      en: "8 min"
    },
    image: "https://media.licdn.com/dms/image/v2/D4E12AQHIpX8I5WvWMA/article-cover_image-shrink_720_1280/B4EZqDJK.NIwAI-/0/1763136814513?e=2147483647&v=beta&t=3hLRNecmitrG_jloFriZJ1diUiqLZUNNJOMnetayWao",
    featured: false,
    source: "https://www.linkedin.com/pulse/les-petites-et-moyennes-entreprises-au-maroc-un-potentiel-h0bfe"
  },
  {
    id: 2,
    title: {
      fr: "Le coût des médicaments au Maroc : un enjeu économique et stratégique qui persiste",
      en: "The cost of medicines in Morocco: a persistent economic and strategic challenge"
    },
    description: {
      fr: "Plus de deux ans après l'annonce de mesures visant à réduire les prix des médicaments, la question reste d'une brûlante actualité. Ce décalage n'est pas uniquement une problématique budgétaire pour les ménages. Il s'agit d'un enjeu systémique qui concerne la souveraineté sanitaire du Maroc, la compétitivité de son industrie pharmaceutique et la soutenabilité des politiques publiques de santé.",
      en: "More than two years after the announcement of measures aimed at reducing drug prices, the issue remains of burning relevance. This gap is not only a budgetary problem for households. It is a systemic issue that concerns Morocco's health sovereignty, the competitiveness of its pharmaceutical industry and the sustainability of public health policies."
    },
    category: {
      fr: "Santé publique",
      en: "Public Health"
    },
    author: "Nexia Morocco",
    date: {
      fr: "Août 2025",
      en: "August 2025"
    },
    readTime: {
      fr: "12 min",
      en: "12 min"
    },
    image: "/lovable-uploads/cef4902e-b1e7-4925-9e79-9a625447ce65.png",
    featured: true,
    content: {
      fr: `Casablanca, 28 août 2025 – Plus de deux ans après l'annonce de mesures visant à réduire les prix des médicaments, la question reste d'une brûlante actualité. Malgré certains ajustements réglementaires et l'introduction progressive de génériques, les prix de nombreux traitements demeurent élevés, parfois trois à quatre fois supérieurs à ceux pratiqués dans des pays comparables.

Ce décalage n'est pas uniquement une problématique budgétaire pour les ménages. Il s'agit d'un enjeu systémique qui concerne la souveraineté sanitaire du Maroc, la compétitivité de son industrie pharmaceutique et la soutenabilité des politiques publiques de santé.

Un constat partagé, des causes multiples

Les avancées récentes, notamment la mise en place d'un cadre incitatif pour les génériques et quelques initiatives de production locale, n'ont pas suffi à modifier en profondeur la structure des coûts. Plusieurs facteurs continuent de peser sur le marché :

Une forte dépendance aux importations : près de 80 % des matières premières pharmaceutiques utilisées sont importées. Les fluctuations du change et les tensions sur les chaînes logistiques internationales se répercutent directement sur les prix.

Des capacités industrielles encore limitées : bien que des investissements aient été réalisés, la production nationale ne couvre pas l'ensemble des besoins, en particulier sur les segments stratégiques comme l'oncologie ou les biotechnologies.

Un cadre fiscal et réglementaire contraignant : la structure des marges et la fiscalité appliquée aux produits pharmaceutiques continuent d'alourdir le coût pour le consommateur final.

Une pénétration insuffisante des génériques : malgré des campagnes de sensibilisation, la confiance du grand public et des prescripteurs reste faible, limitant leur part de marché.

Des réformes nécessaires pour une industrie compétitive

La question du prix des médicaments dépasse la seule équation économique. Elle interroge la capacité du Maroc à se doter d'une véritable stratégie industrielle et sanitaire, capable de garantir un accès équitable aux soins tout en renforçant l'attractivité du pays pour les investisseurs.

Plusieurs pistes se dessinent :

consolider les investissements dans la production locale, notamment à travers des partenariats public-privé,

favoriser la montée en gamme vers les biotechnologies et la recherche clinique,

réviser la structure fiscale et les marges de distribution afin de rendre le marché plus compétitif,

renforcer la pédagogie et la confiance autour des génériques.

L'accompagnement de Nexia Morocco

Face à ces défis, Nexia Morocco accompagne les acteurs du secteur – industriels, investisseurs, décideurs publics – dans la conception et la mise en œuvre de solutions adaptées. Notre expertise couvre l'optimisation de la chaîne d'approvisionnement, la structuration de projets d'investissement, la mise en place de stratégies fiscales et réglementaires, ainsi que le développement de modèles de financement innovants.

Notre rôle est d'apporter une vision claire et opérationnelle, en alliant analyse stratégique et accompagnement concret, afin de contribuer à l'émergence d'un secteur pharmaceutique marocain plus compétitif, durable et accessible.

Une opportunité à saisir

Le Maroc dispose d'atouts considérables : une position géographique stratégique, un marché en croissance et une volonté politique affirmée de renforcer la souveraineté sanitaire. Mais pour transformer ce potentiel en résultats tangibles, il est indispensable d'adopter une approche cohérente et intégrée, où l'ensemble des parties prenantes travaillent de concert.

Le coût des médicaments est à la fois un symptôme et un révélateur. Derrière lui se joue une question essentielle : celle de la place du Maroc dans la nouvelle cartographie mondiale de l'industrie pharmaceutique. C'est à ce défi que nous contribuons chaque jour, en plaçant l'expertise et l'innovation au service d'un objectif commun : rendre les soins plus accessibles et renforcer la compétitivité du pays.`,
      en: `Casablanca, August 28, 2025 – More than two years after the announcement of measures aimed at reducing drug prices, the issue remains of burning relevance. Despite some regulatory adjustments and the gradual introduction of generics, the prices of many treatments remain high, sometimes three to four times higher than those practiced in comparable countries.

This gap is not only a budgetary problem for households. It is a systemic issue that concerns Morocco's health sovereignty, the competitiveness of its pharmaceutical industry and the sustainability of public health policies.

A shared observation, multiple causes

Recent advances, notably the establishment of an incentive framework for generics and some local production initiatives, have not been sufficient to fundamentally change the cost structure. Several factors continue to weigh on the market:

A strong dependence on imports: nearly 80% of the pharmaceutical raw materials used are imported. Exchange rate fluctuations and tensions on international logistics chains directly impact prices.

Still limited industrial capacities: although investments have been made, national production does not cover all needs, particularly in strategic segments such as oncology or biotechnology.

A constraining fiscal and regulatory framework: the margin structure and taxation applied to pharmaceutical products continue to increase the cost for the final consumer.

Insufficient penetration of generics: despite awareness campaigns, confidence among the general public and prescribers remains low, limiting their market share.

Necessary reforms for a competitive industry

The question of drug prices goes beyond the simple economic equation. It questions Morocco's ability to develop a true industrial and health strategy, capable of guaranteeing equitable access to care while strengthening the country's attractiveness for investors.

Several avenues are emerging:

consolidate investments in local production, particularly through public-private partnerships,

promote upgrading to biotechnology and clinical research,

revise the tax structure and distribution margins to make the market more competitive,

strengthen education and confidence around generics.

Nexia Morocco's support

Faced with these challenges, Nexia Morocco supports sector players – industrialists, investors, public decision-makers – in the design and implementation of adapted solutions. Our expertise covers supply chain optimization, investment project structuring, the implementation of fiscal and regulatory strategies, as well as the development of innovative financing models.

Our role is to provide a clear and operational vision, combining strategic analysis and concrete support, in order to contribute to the emergence of a more competitive, sustainable and accessible Moroccan pharmaceutical sector.

An opportunity to seize

Morocco has considerable assets: a strategic geographical position, a growing market and a stated political will to strengthen health sovereignty. But to transform this potential into tangible results, it is essential to adopt a coherent and integrated approach, where all stakeholders work together.

The cost of medicines is both a symptom and a revealer. Behind it lies an essential question: that of Morocco's place in the new global map of the pharmaceutical industry. This is the challenge we contribute to every day, by placing expertise and innovation at the service of a common objective: making care more accessible and strengthening the country's competitiveness.`
    }
  },
  {
    id: 2,
    title: {
      fr: "Nexia Experts discuss the current Global Tariffs from the USA",
      en: "Nexia Experts discuss the current Global Tariffs from the USA"
    },
    description: {
      fr: "Dans ce podcast, nous abordons l'importance pour les entreprises de se tenir au courant des changements fréquents de tarifs dans le monde. Nous examinons les récents changements tarifaires américains et leur impact sur différentes industries, ainsi que les tactiques que les entreprises peuvent utiliser pour réduire le fardeau tarifaire.",
      en: "In this podcast, we discuss the importance for businesses to keep up with frequent tariff changes around the world. We examine recent US tariff changes and their impact on different industries, as well as tactics businesses can use to reduce the tariff burden."
    },
    category: {
      fr: "Commerce international",
      en: "International Trade"
    },
    author: "Christina Lee, Nick Carofano, Harold Grunfeld",
    date: {
      fr: "Juillet 2025",
      en: "July 2025"
    },
    readTime: {
      fr: "8 min",
      en: "8 min"
    },
    image: "/lovable-uploads/e819835e-38b7-425e-917b-276faa067599.png",
    featured: false,
    source: "https://nexia.com/insights/nexia-experts-discuss-the-current-global-tariffs-from-the-usa/"
  },
  {
    id: 3,
    title: "Switzerland – Commercial investment trading",
    description: "En Suisse, les gains en capital réalisés par un particulier sur des biens mobiliers ne sont généralement pas soumis à l'impôt sur le revenu. Cependant, ces gains en capital sont imposés si l'actif vendu est classé comme actif commercial. Deux récents jugements du Tribunal fédéral illustrent les critères décisifs pour une telle classification.",
    category: "Fiscalité internationale",
    author: "Experts Nexia Suisse",
    date: "Juin 2025",
    readTime: "6 min",
    image: "/lovable-uploads/3ee486b2-8d9a-4f08-b3a6-37819c7f9273.png",
    featured: false,
    source: "https://nexia.com/insights/switzerland-commercial-investment-trading/"
  },
  {
    id: 4,
    title: "Diversity, Equity and Inclusion focused webinars",
    description: "Série de webinaires axés sur la diversité, l'équité et l'inclusion dans le milieu professionnel, abordant les meilleures pratiques et stratégies d'implémentation pour créer des environnements de travail plus inclusifs.",
    category: "Ressources humaines",
    author: "Experts Nexia International",
    date: "Mai 2025",
    readTime: "45 min",
    image: "/lovable-uploads/ed4ab84d-ff57-4a60-983a-ae7fe9a6254a.png",
    featured: false,
    source: "https://nexia.com/insights/diversity-equity-and-inclusion-focused-webinars/"
  },
  {
    id: 5,
    title: "Compilation of tax laws and regulations in China as of 30 April, 2025",
    description: "Ce document est une traduction anglaise non officielle préparée par l'équipe fiscale de Glen Wei du Chung Rui Tax Group, en Chine, et est fournie à des fins d'information uniquement. Il vise à fournir aux lecteurs anglophones une compréhension générale des principes et réglementations fiscaux chinois.",
    category: "Fiscalité internationale",
    author: "Glen Wei",
    date: "Mai 2025",
    readTime: "15 min",
    image: "/lovable-uploads/6b84a4c9-de19-45d9-9cae-7d14878afd56.png",
    featured: false,
    source: "https://nexia.com/insights/compilation-of-tax-laws-and-regulations-in-china-as-of-30-april-2025/"
  },
  {
    id: 6,
    title: "Mining and the future: Strategic perspectives on global resource management",
    description: "À une époque de transformation rapide, le secteur minier mondial fait face à un examen intensifié, à des réglementations en évolution et à des attentes croissantes en matière de transparence, de durabilité et de résilience. Cette publication rassemble des perspectives d'experts de professionnels Nexia du monde entier.",
    category: "Secteur minier",
    author: "Experts Nexia International",
    date: "Mai 2025",
    readTime: "12 min",
    image: "/lovable-uploads/6b743136-5ea7-43a5-959d-0cdcee6f4b63.png",
    featured: false,
    source: "https://nexia.com/insights/mining-and-the-future-strategic-perspectives-on-global-resource-management/"
  },
  {
    id: 7,
    title: "Capital contribution principle – Leading decision of the Federal Supreme Court of 21 March 2025",
    description: "Dans une décision historique datée du 21 mars 2025, la Cour suprême fédérale suisse a clarifié des aspects clés du principe de contribution de capital selon l'Art. 5 para. 1bis VStG. Cette décision marque un changement significatif par rapport à la pratique administrative précédente.",
    category: "Droit des sociétés",
    author: "Michael Felber",
    date: "Avril 2025",
    readTime: "8 min",
    image: "/lovable-uploads/3ee486b2-8d9a-4f08-b3a6-37819c7f9273.png",
    featured: false,
    source: "https://nexia.com/insights/capital-contribution-principle-leading-decision-of-the-federal-supreme-court-of-21-march-2025/"
  },
  {
    id: 8,
    title: "Communicating your ESG story to stakeholders",
    description: "Les facteurs environnementaux, sociaux et de gouvernance (ESG) sont devenus critiques pour évaluer la durabilité à long terme et l'impact sociétal des pratiques commerciales. Les organisations doivent considérer comment communiquer leur histoire ESG d'une manière qui mettra en valeur leurs valeurs fondamentales, leur culture et leur vision.",
    category: "ESG",
    author: "Experts Nexia International",
    date: "Mars 2025",
    readTime: "10 min",
    image: "/lovable-uploads/bc52453e-7581-4a37-b09c-62f1f38dd695.png",
    featured: false,
    source: "https://nexia.com/insights/communicating-your-esg-story-to-stakeholders/"
  },
  {
    id: 9,
    title: "Implementing ESG best practices in your supply chain",
    description: "Les chaînes d'approvisionnement restent un point focal critique pour les organisations engagées dans les objectifs environnementaux, sociaux et de gouvernance (ESG). Implémenter les meilleures pratiques ESG dans la chaîne d'approvisionnement n'est plus une activité optionnelle — c'est une nécessité pour les entreprises engagées dans le succès et la résilience à long terme.",
    category: "ESG",
    author: "Experts Nexia International",
    date: "Février 2025",
    readTime: "9 min",
    image: "/lovable-uploads/0b2291f3-b8ee-4ac8-bb4b-ca08457d1215.png",
    featured: false,
    source: "https://nexia.com/insights/implementing-esg-best-practices-in-your-supply-chain/"
  }
];

export default function Insights() {
  const { t, language } = useSimpleLanguage();
  const insightCategories = getInsightCategories(t);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(insightCategories[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;

const filteredInsights = globalInsights.filter(insight => {
    const currentTitle = typeof insight.title === 'object' ? insight.title[language] || insight.title.fr : insight.title;
    const currentDescription = typeof insight.description === 'object' ? insight.description[language] || insight.description.fr : insight.description;
    
    const matchesSearch = currentTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         currentDescription.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesSearch;
  });

  const featuredInsight = filteredInsights.find(insight => insight.featured);
  const allRegularInsights = filteredInsights.filter(insight => !insight.featured);
  
  // Pagination logic
  const totalPages = Math.ceil(allRegularInsights.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const regularInsights = allRegularInsights.slice(startIndex, startIndex + articlesPerPage);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when changing category
  };

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1); // Reset to first page when searching
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-nexia-primary py-16">
        <div className="mx-auto max-w-[1350px] px-6 lg:px-8 xl:px-0">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('insightsPage.title')}
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              {t('insightsPage.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 border-b">
        <div className="mx-auto max-w-[1350px] px-6 lg:px-8 xl:px-0">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder={t('insightsPage.search')}
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nexia-primary focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {insightCategories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleCategoryChange(category)}
                  className={selectedCategory === category ? "bg-nexia-primary hover:bg-nexia-primary/90" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Insight */}
      {featuredInsight && (
        <section className="py-12">
          <div className="mx-auto max-w-[1350px] px-6 lg:px-8 xl:px-0">
            <h2 className="text-2xl font-bold text-nexia-primary mb-8">{t('insightsPage.featured')}</h2>
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="md:flex">
                <div className="md:w-1/2 relative overflow-hidden">
                  <img
                    src={featuredInsight.image}
                    alt={typeof featuredInsight.title === 'object' ? featuredInsight.title[language] || featuredInsight.title.fr : featuredInsight.title}
                    className="w-full h-64 md:h-full object-cover object-[25%_center]"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="secondary" className="bg-nexia-secondary text-white">
                      {typeof featuredInsight.category === 'object' ? featuredInsight.category[language] || featuredInsight.category.fr : featuredInsight.category}
                    </Badge>
                    <Badge variant="outline">{t('insightsPage.featuredBadge')}</Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-nexia-primary mb-4">
                    {typeof featuredInsight.title === 'object' ? featuredInsight.title[language] || featuredInsight.title.fr : featuredInsight.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {typeof featuredInsight.description === 'object' ? featuredInsight.description[language] || featuredInsight.description.fr : featuredInsight.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {featuredInsight.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {typeof featuredInsight.date === 'object' ? featuredInsight.date[language] || featuredInsight.date.fr : featuredInsight.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {typeof featuredInsight.readTime === 'object' ? featuredInsight.readTime[language] || featuredInsight.readTime.fr : featuredInsight.readTime}
                      </div>
                    </div>
                     <Button 
                       className="bg-nexia-primary hover:bg-nexia-primary/90"
                       onClick={() => {
                         if (featuredInsight.id === 1) {
                           window.location.href = '/perspectives-mondiales/cout-medicaments-maroc';
                         } else if (featuredInsight.source) {
                           window.open(featuredInsight.source, '_blank');
                         }
                       }}
                     >
                       {t('insightsPage.readArticle')}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Insights Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-[1350px] px-6 lg:px-8 xl:px-0">
          <h2 className="text-2xl font-bold text-nexia-primary mb-8">
            Toutes les perspectives ({allRegularInsights.length})
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularInsights.map((insight) => (
              <Card key={insight.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={insight.image}
                    alt={typeof insight.title === 'object' ? insight.title[language] || insight.title.fr : insight.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-nexia-secondary text-white">
                      {typeof insight.category === 'object' ? insight.category[language] || insight.category.fr : insight.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-nexia-primary line-clamp-2">
                    {typeof insight.title === 'object' ? insight.title[language] || insight.title.fr : insight.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 line-clamp-3">
                    {typeof insight.description === 'object' ? insight.description[language] || insight.description.fr : insight.description}
                  </CardDescription>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {insight.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {typeof insight.readTime === 'object' ? insight.readTime[language] || insight.readTime.fr : insight.readTime}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 text-sm text-gray-500 mb-4">
                    <Calendar className="w-4 h-4" />
                    {typeof insight.date === 'object' ? insight.date[language] || insight.date.fr : insight.date}
                  </div>

                   <Button 
                     variant="outline" 
                     className="w-full group"
                     onClick={() => {
                       if (insight.id === 1) {
                         window.location.href = '/perspectives-mondiales/cout-medicaments-maroc';
                       } else if (insight.source) {
                         window.open(insight.source, '_blank');
                       }
                     }}
                   >
                    Lire l'article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {allRegularInsights.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Aucun article trouvé pour cette recherche.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage > 1) setCurrentPage(currentPage - 1);
                      }}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                  
                  {[...Array(totalPages)].map((_, index) => (
                    <PaginationItem key={index + 1}>
                      <PaginationLink
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage(index + 1);
                        }}
                        isActive={currentPage === index + 1}
                      >
                        {index + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  
                  <PaginationItem>
                    <PaginationNext 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                      }}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}