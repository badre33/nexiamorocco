import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

export default function HomeFeaturedInsight() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-nexia-primary mb-6">
            Perspectives Mondiales
          </h2>
          <p className="text-xl text-nexia-primary/80 max-w-3xl mx-auto leading-relaxed">
            Découvrez nos analyses d'experts sur les tendances mondiales qui façonnent l'avenir des entreprises au Maroc et à l'international
          </p>
        </div>

        {/* Featured Article */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src="/lovable-uploads/cef4902e-b1e7-4925-9e79-9a625447ce65.png"
                alt="Le coût des médicaments au Maroc"
                className="w-full h-64 md:h-full object-cover object-center"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-nexia-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                  Santé publique
                </span>
                <span className="bg-nexia-primary/10 text-nexia-primary px-3 py-1 rounded-full text-sm font-medium">
                  À la une
                </span>
              </div>
              <h3 className="text-2xl font-bold text-nexia-primary mb-4">
                Le coût des médicaments au Maroc : un enjeu économique et stratégique qui persiste
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Plus de deux ans après l'annonce de mesures visant à réduire les prix des médicaments, 
                la question reste d'une brûlante actualité. Ce décalage n'est pas uniquement une problématique 
                budgétaire pour les ménages mais un enjeu systémique qui concerne la souveraineté sanitaire du Maroc.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    Nexia Fiducia Maroc
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Août 2025
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    12 min
                  </div>
                </div>
                <Button asChild className="bg-nexia-primary hover:bg-nexia-primary/90">
                  <Link to="/perspectives-mondiales/cout-medicaments-maroc">
                    Lire l'article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA to all insights */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link to="/perspectives-mondiales">
              Voir Toutes Nos Perspectives
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}