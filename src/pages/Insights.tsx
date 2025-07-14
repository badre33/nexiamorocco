import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowRight, Filter } from "lucide-react";
import { useState } from "react";

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
  // Articles récupérés du site Nexia International
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
    description: "Analyse approfondie des experts Nexia sur l'impact des tarifs douaniers américains sur le commerce international et les stratégies d'adaptation pour les entreprises.",
    category: "Commerce international",
    author: "Experts Nexia",
    date: "Février 2025",
    readTime: "8 min",
    image: "https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2025/02/shutterstock_2145128675.jpg",
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
    title: "Nouvelles réglementations fiscales internationales 2024",
    description: "Analyse des dernières évolutions fiscales mondiales et leur impact sur les entreprises marocaines opérant à l'international.",
    category: "Fiscalité internationale",
    author: "Ahmed Benali",
    date: "15 Mars 2024",
    readTime: "8 min",
    image: "/lovable-uploads/31bfa1ea-3054-4d56-967c-b20714ac5574.png",
    featured: false
  },
  {
    id: 6,
    title: "Transformation digitale de l'audit : enjeux et opportunités",
    description: "Comment les nouvelles technologies transforment les pratiques d'audit et améliorent la qualité des missions.",
    category: "Audit & conformité",
    author: "Fatima Zahra Alami",
    date: "10 Mars 2024",
    readTime: "6 min",
    image: "/lovable-uploads/360a023f-90b9-44bd-a356-aa15e34c698b.png",
    featured: false
  },
  {
    id: 7,
    title: "Stratégies de financement pour les PME marocaines",
    description: "Guide complet des options de financement disponibles pour accompagner la croissance des entreprises marocaines.",
    category: "Corporate Finance",
    author: "Youssef Kettani",
    date: "5 Mars 2024",
    readTime: "10 min",
    image: "/lovable-uploads/4884c761-427d-4a89-af8c-99f6ba0325aa.png",
    featured: false
  },
  {
    id: 8,
    title: "ESG et reporting durable : nouvelles exigences",
    description: "Les nouvelles obligations en matière de reporting ESG et leur impact sur les entreprises marocaines.",
    category: "Réglementation",
    author: "Laila Benkirane",
    date: "28 Février 2024",
    readTime: "7 min",
    image: "/lovable-uploads/622c05eb-5be8-4d65-8337-8b1100601dbb.png",
    featured: false
  },
  {
    id: 9,
    title: "Intelligence artificielle dans les services financiers",
    description: "L'impact de l'IA sur les métiers de l'audit, du conseil et de la finance, et les opportunités d'innovation.",
    category: "Stratégie d'entreprise",
    author: "Omar Fassi",
    date: "20 Février 2024",
    readTime: "9 min",
    image: "/lovable-uploads/683558d0-ea3d-4016-81a3-c31382efa76b.png",
    featured: true
  },
  {
    id: 10,
    title: "Optimisation fiscale internationale post-BEPS",
    description: "Stratégies d'optimisation fiscale conformes aux nouvelles règles BEPS de l'OCDE.",
    category: "Fiscalité internationale",
    author: "Rachid Tazi",
    date: "15 Février 2024",
    readTime: "12 min",
    image: "/lovable-uploads/8c894aa9-9338-4bb3-bea0-2df5eee6fcee.png",
    featured: false
  }
];

export default function Insights() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredInsights = globalInsights.filter(insight => {
    const matchesCategory = selectedCategory === "Tous" || insight.category === selectedCategory;
    const matchesSearch = insight.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         insight.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredInsight = filteredInsights.find(insight => insight.featured);
  const regularInsights = filteredInsights.filter(insight => !insight.featured);

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
                onChange={(e) => setSearchTerm(e.target.value)}
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
                  onClick={() => setSelectedCategory(category)}
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
                    <Button className="bg-nexia-primary hover:bg-nexia-primary/90">
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
            Toutes les perspectives ({filteredInsights.length})
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

                  <Button variant="outline" className="w-full group">
                    Lire l'article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredInsights.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Aucun article trouvé pour cette recherche.</p>
            </div>
          )}

          {/* Load More Button */}
          {filteredInsights.length > 0 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Charger plus d'articles
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}