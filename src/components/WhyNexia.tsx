import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function WhyNexia() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/461ab464-dd40-429d-aa6b-df6c27d93c9e.png"
          alt="Professionnels collaborant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-nexia-primary/90"></div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-nexia-accent/10 rounded-full -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-nexia-accent/10 rounded-full translate-x-24 translate-y-24"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Title Section */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/59726acf-0a45-496a-88e6-79f58a0fb51d.png" 
                alt="Nexia Logo" 
                className="h-16 w-auto object-contain"
              />
            </div>
            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Pourquoi
              <span className="block text-nexia-accent">Nexia Fiducia Maroc</span>
            </h3>
            <div className="w-24 h-1 bg-nexia-accent mx-auto lg:mx-0 rounded-full"></div>
          </div>

          {/* Content Section */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 lg:p-10 shadow-2xl">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-3 h-3 bg-nexia-accent rounded-full mt-2"></div>
                <p className="text-nexia-primary text-lg leading-relaxed">
                  Fort de notre appartenance au <strong>réseau international Nexia</strong>, nous combinons l'expertise locale approfondie du marché marocain avec les standards internationaux les plus exigeants.
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-3 h-3 bg-nexia-accent rounded-full mt-2"></div>
                <p className="text-nexia-primary text-lg leading-relaxed">
                  Notre <strong>approche personnalisée</strong> et notre engagement envers l'excellence nous permettent d'accompagner efficacement nos clients dans leurs défis financiers et stratégiques.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-nexia-primary">25+</div>
                  <div className="text-sm text-gray-600">Années d'expérience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-nexia-primary">500+</div>
                  <div className="text-sm text-gray-600">Clients satisfaits</div>
                </div>
              </div>

              <div className="pt-4">
                <Button asChild variant="professional" size="lg" className="w-full lg:w-auto shadow-lg hover:shadow-xl transition-all duration-300">
                  <Link to="/about" className="inline-flex items-center justify-center">
                    En savoir plus
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}