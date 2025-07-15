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
  // Page 1 - Articles récupérés du site Nexia International
  {
    id: 1,
    title: "Nexia welcomes a new member firm in Uzbekistan",
    description: "Nexia International continue son expansion avec l'arrivée d'un nouveau membre en Ouzbékistan, renforçant notre présence en Asie centrale.",
    category: "Réseau international",
    author: "Nexia International",
    date: "Juillet 2025",
    readTime: "5 min",
    image: "https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2025/07/shutterstock_2341786405.jpg",
    featured: true,
    source: "https://nexia.com/insights/nexia-welcomes-a-new-member-firm-in-uzbekistan/"
  },
  {
    id: 2,
    title: "Nexia welcomes a new member firm in Mexico",
    description: "Le réseau Nexia accueille un nouveau cabinet membre au Mexique, élargissant notre couverture en Amérique latine pour mieux servir nos clients internationaux.",
    category: "Réseau international",
    author: "Nexia International",
    date: "Juillet 2025",
    readTime: "5 min",
    image: "https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2025/07/shutterstock_188040947.jpg",
    featured: false,
    source: "https://nexia.com/insights/nexia-welcomes-a-new-member-firm-in-mexico/"
  },
  {
    id: 3,
    title: "Nexia Experts discuss the current Global Tariffs from the USA",
    description: "Dans ce podcast, nous abordons l'importance pour les entreprises de se tenir au courant des changements fréquents de tarifs dans le monde. Nous examinons les récents changements tarifaires américains et leur impact sur différentes industries, ainsi que les tactiques que les entreprises peuvent utiliser pour réduire le fardeau tarifaire.",
    category: "Commerce international",
    author: "Christina Lee, Nick Carofano, Harold Grunfeld",
    date: "Juillet 2025",
    readTime: "8 min",
    image: "/src/assets/tariffs-global-usa.jpg",
    featured: false,
    source: "https://nexia.com/insights/nexia-experts-discuss-the-current-global-tariffs-from-the-usa/"
  },
  {
    id: 4,
    title: "Switzerland – Commercial investment trading",
    description: "Guide complet sur les investissements commerciaux en Suisse, incluant les réglementations, avantages fiscaux et meilleures pratiques pour les investisseurs internationaux.",
    category: "Investissement international",
    author: "Nexia Suisse",
    date: "2025",
    readTime: "10 min",
    image: "/lovable-uploads/8c894aa9-9338-4bb3-bea0-2df5eee6fcee.png",
    featured: false,
    source: "https://nexia.com/insights/switzerland-commercial-investment-trading/"
  },
  {
    id: 5,
    title: "The future of Accounting: Exploring the impact of artificial intelligence and automation",
    description: "Exploration approfondie de l'impact de l'intelligence artificielle et de l'automatisation sur l'avenir de la comptabilité et des services financiers.",
    category: "Innovation technologique",
    author: "Nexia Research",
    date: "Décembre 2023",
    readTime: "12 min",
    image: "/lovable-uploads/360a023f-90b9-44bd-a356-aa15e34c698b.png",
    featured: false
  },
  {
    id: 6,
    title: "Recording: European E-Invoicing Trends: Insights for Financial Executives",
    description: "Tendances européennes de la facturation électronique et insights essentiels pour les dirigeants financiers dans un environnement réglementaire en évolution.",
    category: "Transformation digitale",
    author: "Nexia Europe",
    date: "Novembre 2023",
    readTime: "9 min",
    image: "/lovable-uploads/4884c761-427d-4a89-af8c-99f6ba0325aa.png",
    featured: false
  },
  {
    id: 7,
    title: "France is implementing an attractive tax credit for investments in favour of green industry (C3IV)",
    description: "Analyse détaillée du nouveau crédit d'impôt français pour les investissements dans l'industrie verte et ses implications pour les entreprises.",
    category: "Fiscalité environnementale",
    author: "Nexia France",
    date: "Novembre 2023",
    readTime: "7 min",
    image: "/lovable-uploads/683558d0-ea3d-4016-81a3-c31382efa76b.png",
    featured: false
  },
  {
    id: 8,
    title: "The Global Shift to E-Invoicing: Key takeaways from Mexico, Hungary and Poland",
    description: "Leçons clés de la transition vers la facturation électronique au Mexique, en Hongrie et en Pologne, et implications pour d'autres marchés.",
    category: "Transformation digitale",
    author: "Nexia Global",
    date: "Mai 2024",
    readTime: "11 min",
    image: "/lovable-uploads/31bfa1ea-3054-4d56-967c-b20714ac5574.png",
    featured: false
  },
  {
    id: 9,
    title: "Singapore budget highlights 2024",
    description: "Points saillants du budget singapourien 2024 et ses implications pour les entreprises opérant dans la région Asie-Pacifique.",
    category: "Politique fiscale",
    author: "Nexia Singapour",
    date: "Mars 2024",
    readTime: "8 min",
    image: "/lovable-uploads/622c05eb-5be8-4d65-8337-8b1100601dbb.png",
    featured: false
  },
  
  // Page 2 - Articles supplémentaires
  {
    id: 10,
    title: "Sleepless in the C-suite: What matters keep CFOs / CEOs up at night?",
    description: "Enquête approfondie sur les préoccupations principales des dirigeants financiers et exécutifs dans l'environnement économique actuel.",
    category: "Leadership exécutif",
    author: "Nexia Leadership",
    date: "Mars 2024",
    readTime: "10 min",
    image: "/lovable-uploads/8c894aa9-9338-4bb3-bea0-2df5eee6fcee.png",
    featured: false
  },
  {
    id: 11,
    title: "ESG Reporting Standards: Global Convergence and Local Challenges",
    description: "Analyse de la convergence mondiale des normes de reporting ESG et des défis spécifiques aux juridictions locales.",
    category: "Réglementation ESG",
    author: "Nexia Sustainability",
    date: "Avril 2024",
    readTime: "13 min",
    image: "/lovable-uploads/4884c761-427d-4a89-af8c-99f6ba0325aa.png",
    featured: false
  },
  {
    id: 12,
    title: "Digital Asset Taxation: Navigating the Regulatory Landscape",
    description: "Guide complet sur la fiscalité des actifs numériques et crypto-monnaies dans différentes juridictions mondiales.",
    category: "Fiscalité digitale",
    author: "Nexia Digital",
    date: "Février 2024",
    readTime: "15 min",
    image: "/lovable-uploads/360a023f-90b9-44bd-a356-aa15e34c698b.png",
    featured: false
  },
  {
    id: 13,
    title: "Supply Chain Resilience: Post-Pandemic Strategic Considerations",
    description: "Stratégies pour renforcer la résilience de la chaîne d'approvisionnement dans l'ère post-pandémique.",
    category: "Stratégie opérationnelle",
    author: "Nexia Supply Chain",
    date: "Janvier 2024",
    readTime: "9 min",
    image: "/lovable-uploads/683558d0-ea3d-4016-81a3-c31382efa76b.png",
    featured: false
  },
  {
    id: 14,
    title: "Cross-Border M&A: Tax Planning in a Complex Global Environment",
    description: "Stratégies de planification fiscale pour les fusions-acquisitions transfrontalières dans un environnement réglementaire complexe.",
    category: "Fiscalité internationale",
    author: "Nexia M&A",
    date: "Décembre 2023",
    readTime: "12 min",
    image: "/lovable-uploads/31bfa1ea-3054-4d56-967c-b20714ac5574.png",
    featured: false
  },
  {
    id: 15,
    title: "Cybersecurity for Financial Services: Emerging Threats and Solutions",
    description: "Menaces cybersécuritaires émergentes dans les services financiers et solutions innovantes pour la protection des données.",
    category: "Sécurité financière",
    author: "Nexia Cyber",
    date: "Novembre 2023",
    readTime: "8 min",
    image: "/lovable-uploads/622c05eb-5be8-4d65-8337-8b1100601dbb.png",
    featured: false
  },
  {
    id: 16,
    title: "Sustainable Finance: Green Bonds and Impact Investment Trends",
    description: "Tendances des obligations vertes et investissements à impact dans le paysage financier durable.",
    category: "Finance durable",
    author: "Nexia Green Finance",
    date: "Octobre 2023",
    readTime: "11 min",
    image: "/lovable-uploads/8c894aa9-9338-4bb3-bea0-2df5eee6fcee.png",
    featured: false
  },
  {
    id: 17,
    title: "International Transfer Pricing: OECD Guidelines Update 2024",
    description: "Mise à jour des directives OCDE sur les prix de transfert international et implications pour les entreprises multinationales.",
    category: "Prix de transfert",
    author: "Nexia Transfer Pricing",
    date: "Septembre 2023",
    readTime: "14 min",
    image: "/lovable-uploads/4884c761-427d-4a89-af8c-99f6ba0325aa.png",
    featured: false
  },
  {
    id: 18,
    title: "Family Office Governance: Best Practices for Wealth Management",
    description: "Meilleures pratiques de gouvernance pour les family offices et gestion patrimoniale de haute qualité.",
    category: "Gestion patrimoniale",
    author: "Nexia Wealth",
    date: "Août 2023",
    readTime: "10 min",
    image: "/lovable-uploads/360a023f-90b9-44bd-a356-aa15e34c698b.png",
    featured: false
  },

  // Page 3 - Articles supplémentaires
  {
    id: 19,
    title: "Real Estate Investment Trusts: Global Market Analysis 2024",
    description: "Analyse complète du marché mondial des REIT et opportunités d'investissement dans l'immobilier commercial.",
    category: "Investissement immobilier",
    author: "Nexia Real Estate",
    date: "Juillet 2023",
    readTime: "12 min",
    image: "/lovable-uploads/683558d0-ea3d-4016-81a3-c31382efa76b.png",
    featured: false
  },
  {
    id: 20,
    title: "Artificial Intelligence in Audit: Transforming Risk Assessment",
    description: "Transformation de l'évaluation des risques d'audit grâce à l'intelligence artificielle et aux technologies émergentes.",
    category: "Audit & conformité",
    author: "Nexia Audit Tech",
    date: "Juin 2023",
    readTime: "9 min",
    image: "/lovable-uploads/31bfa1ea-3054-4d56-967c-b20714ac5574.png",
    featured: false
  },
  {
    id: 21,
    title: "Corporate Governance in Emerging Markets: Key Challenges",
    description: "Défis principaux de la gouvernance d'entreprise dans les marchés émergents et solutions adaptées.",
    category: "Gouvernance d'entreprise",
    author: "Nexia Emerging Markets",
    date: "Mai 2023",
    readTime: "11 min",
    image: "/lovable-uploads/622c05eb-5be8-4d65-8337-8b1100601dbb.png",
    featured: false
  },
  {
    id: 22,
    title: "Private Equity Fund Structures: Optimizing Tax Efficiency",
    description: "Structures de fonds de private equity et optimisation de l'efficacité fiscale dans différentes juridictions.",
    category: "Private Equity",
    author: "Nexia Private Capital",
    date: "Avril 2023",
    readTime: "13 min",
    image: "/lovable-uploads/8c894aa9-9338-4bb3-bea0-2df5eee6fcee.png",
    featured: false
  },
  {
    id: 23,
    title: "Blockchain Technology in Financial Reporting: Future Prospects",
    description: "Perspectives d'avenir de la technologie blockchain dans le reporting financier et la transparence comptable.",
    category: "Innovation technologique",
    author: "Nexia Blockchain",
    date: "Mars 2023",
    readTime: "10 min",
    image: "/lovable-uploads/4884c761-427d-4a89-af8c-99f6ba0325aa.png",
    featured: false
  },
  {
    id: 24,
    title: "International Banking Regulations: Basel IV Implementation",
    description: "Implémentation de Bâle IV et implications pour les institutions bancaires internationales.",
    category: "Réglementation bancaire",
    author: "Nexia Banking",
    date: "Février 2023",
    readTime: "15 min",
    image: "/lovable-uploads/360a023f-90b9-44bd-a356-aa15e34c698b.png",
    featured: false
  },
  {
    id: 25,
    title: "Climate Risk Disclosure: Regulatory Requirements Worldwide",
    description: "Exigences réglementaires mondiales pour la divulgation des risques climatiques et meilleures pratiques.",
    category: "Risque climatique",
    author: "Nexia Climate Risk",
    date: "Janvier 2023",
    readTime: "8 min",
    image: "/lovable-uploads/683558d0-ea3d-4016-81a3-c31382efa76b.png",
    featured: false
  },
  {
    id: 26,
    title: "Fintech Innovation: Regulatory Sandboxes and Market Entry",
    description: "Innovation fintech, bacs à sable réglementaires et stratégies d'entrée sur le marché pour les nouvelles technologies.",
    category: "Innovation financière",
    author: "Nexia Fintech",
    date: "Décembre 2022",
    readTime: "12 min",
    image: "/lovable-uploads/31bfa1ea-3054-4d56-967c-b20714ac5574.png",
    featured: false
  },
  {
    id: 27,
    title: "Global Economic Outlook 2024: Opportunities and Challenges",
    description: "Perspectives économiques mondiales 2024 avec analyse des opportunités et défis pour les entreprises internationales.",
    category: "Économie mondiale",
    author: "Nexia Economics",
    date: "Novembre 2022",
    readTime: "16 min",
    image: "/lovable-uploads/622c05eb-5be8-4d65-8337-8b1100601dbb.png",
    featured: false
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