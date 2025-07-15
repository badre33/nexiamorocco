import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowRight, Filter } from "lucide-react";
import { useState } from "react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const insightCategories = [
  "Tous",
  "Réseau international",
  "Commerce international", 
  "Investissement international",
  "Fiscalité internationale",
  "Audit & conformité", 
  "Stratégie d'entreprise",
  "Corporate Finance",
  "Réglementation"
];

const globalInsights = [
  {
    id: 1,
    title: "Nexia Experts discuss the current Global Tariffs from the USA",
    description: "Dans ce podcast, nous abordons l'importance pour les entreprises de se tenir au courant des changements fréquents de tarifs dans le monde. Nous examinons les récents changements tarifaires américains et leur impact sur différentes industries, ainsi que les tactiques que les entreprises peuvent utiliser pour réduire le fardeau tarifaire.",
    category: "Commerce international",
    author: "Christina Lee, Nick Carofano, Harold Grunfeld",
    date: "Juillet 2025",
    readTime: "8 min",
    image: "/public/lovable-uploads/e819835e-38b7-425e-917b-276faa067599.png",
    featured: true,
    source: "https://nexia.com/insights/nexia-experts-discuss-the-current-global-tariffs-from-the-usa/"
  },
  {
    id: 2,
    title: "Switzerland – Commercial investment trading",
    description: "En Suisse, les gains en capital réalisés par un particulier sur des biens mobiliers ne sont généralement pas soumis à l'impôt sur le revenu. Cependant, ces gains en capital sont imposés si l'actif vendu est classé comme actif commercial. Deux récents jugements du Tribunal fédéral illustrent les critères décisifs pour une telle classification.",
    category: "Fiscalité internationale",
    author: "Experts Nexia Suisse",
    date: "Juin 2025",
    readTime: "6 min",
    image: "/public/lovable-uploads/3ee486b2-8d9a-4f08-b3a6-37819c7f9273.png",
    featured: false,
    source: "https://nexia.com/insights/switzerland-commercial-investment-trading/"
  },
  {
    id: 3,
    title: "Diversity, Equity and Inclusion focused webinars",
    description: "Série de webinaires axés sur la diversité, l'équité et l'inclusion dans le milieu professionnel, abordant les meilleures pratiques et stratégies d'implémentation pour créer des environnements de travail plus inclusifs.",
    category: "Ressources humaines",
    author: "Experts Nexia International",
    date: "Mai 2025",
    readTime: "45 min",
    image: "/public/lovable-uploads/ed4ab84d-ff57-4a60-983a-ae7fe9a6254a.png",
    featured: false,
    source: "https://nexia.com/insights/diversity-equity-and-inclusion-focused-webinars/"
  },
  {
    id: 4,
    title: "Compilation of tax laws and regulations in China as of 30 April, 2025",
    description: "Ce document est une traduction anglaise non officielle préparée par l'équipe fiscale de Glen Wei du Chung Rui Tax Group, en Chine, et est fournie à des fins d'information uniquement. Il vise à fournir aux lecteurs anglophones une compréhension générale des principes et réglementations fiscaux chinois.",
    category: "Fiscalité internationale",
    author: "Glen Wei",
    date: "Mai 2025",
    readTime: "15 min",
    image: "/public/lovable-uploads/6b84a4c9-de19-45d9-9cae-7d14878afd56.png",
    featured: false,
    source: "https://nexia.com/insights/compilation-of-tax-laws-and-regulations-in-china-as-of-30-april-2025/"
  },
  {
    id: 5,
    title: "Mining and the future: Strategic perspectives on global resource management",
    description: "À une époque de transformation rapide, le secteur minier mondial fait face à un examen intensifié, à des réglementations en évolution et à des attentes croissantes en matière de transparence, de durabilité et de résilience. Cette publication rassemble des perspectives d'experts de professionnels Nexia du monde entier.",
    category: "Secteur minier",
    author: "Experts Nexia International",
    date: "Mai 2025",
    readTime: "12 min",
    image: "/public/lovable-uploads/6b743136-5ea7-43a5-959d-0cdcee6f4b63.png",
    featured: false,
    source: "https://nexia.com/insights/mining-and-the-future-strategic-perspectives-on-global-resource-management/"
  },
  {
    id: 6,
    title: "Capital contribution principle – Leading decision of the Federal Supreme Court of 21 March 2025",
    description: "Dans une décision historique datée du 21 mars 2025, la Cour suprême fédérale suisse a clarifié des aspects clés du principe de contribution de capital selon l'Art. 5 para. 1bis VStG. Cette décision marque un changement significatif par rapport à la pratique administrative précédente.",
    category: "Droit des sociétés",
    author: "Michael Felber",
    date: "Avril 2025",
    readTime: "8 min",
    image: "/public/lovable-uploads/3ee486b2-8d9a-4f08-b3a6-37819c7f9273.png",
    featured: false,
    source: "https://nexia.com/insights/capital-contribution-principle-leading-decision-of-the-federal-supreme-court-of-21-march-2025/"
  },
  {
    id: 7,
    title: "Communicating your ESG story to stakeholders",
    description: "Les facteurs environnementaux, sociaux et de gouvernance (ESG) sont devenus critiques pour évaluer la durabilité à long terme et l'impact sociétal des pratiques commerciales. Les organisations doivent considérer comment communiquer leur histoire ESG d'une manière qui mettra en valeur leurs valeurs fondamentales, leur culture et leur vision.",
    category: "ESG",
    author: "Experts Nexia International",
    date: "Mars 2025",
    readTime: "10 min",
    image: "/public/lovable-uploads/bc52453e-7581-4a37-b09c-62f1f38dd695.png",
    featured: false,
    source: "https://nexia.com/insights/communicating-your-esg-story-to-stakeholders/"
  },
  {
    id: 8,
    title: "Implementing ESG best practices in your supply chain",
    description: "Les chaînes d'approvisionnement restent un point focal critique pour les organisations engagées dans les objectifs environnementaux, sociaux et de gouvernance (ESG). Implémenter les meilleures pratiques ESG dans la chaîne d'approvisionnement n'est plus une activité optionnelle — c'est une nécessité pour les entreprises engagées dans le succès et la résilience à long terme.",
    category: "ESG",
    author: "Experts Nexia International",
    date: "Février 2025",
    readTime: "9 min",
    image: "/public/lovable-uploads/0b2291f3-b8ee-4ac8-bb4b-ca08457d1215.png",
    featured: false,
    source: "https://nexia.com/insights/implementing-esg-best-practices-in-your-supply-chain/"
  }
];

export default function Insights() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;

  const filteredInsights = globalInsights.filter(insight => {
    const matchesSearch = insight.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         insight.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Tous" || insight.category === selectedCategory;
    return matchesSearch && matchesCategory;
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
              Perspectives Mondiales
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Découvrez nos analyses d'experts sur les tendances mondiales qui façonnent 
              l'avenir des entreprises au Maroc et à l'international
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
                placeholder="Rechercher un article..."
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
            <h2 className="text-2xl font-bold text-nexia-primary mb-8">Article mis en avant</h2>
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredInsight.image}
                    alt={featuredInsight.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="secondary" className="bg-nexia-secondary text-white">
                      {featuredInsight.category}
                    </Badge>
                    <Badge variant="outline">À la une</Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-nexia-primary mb-4">
                    {featuredInsight.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredInsight.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {featuredInsight.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {featuredInsight.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredInsight.readTime}
                      </div>
                    </div>
                    <Button 
                      className="bg-nexia-primary hover:bg-nexia-primary/90"
                      onClick={() => window.open(featuredInsight.source, '_blank')}
                    >
                      Lire l'article
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
                    alt={insight.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-nexia-secondary text-white">
                      {insight.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-nexia-primary line-clamp-2">
                    {insight.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 line-clamp-3">
                    {insight.description}
                  </CardDescription>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {insight.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {insight.readTime}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 text-sm text-gray-500 mb-4">
                    <Calendar className="w-4 h-4" />
                    {insight.date}
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full group"
                    onClick={() => insight.source && window.open(insight.source, '_blank')}
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