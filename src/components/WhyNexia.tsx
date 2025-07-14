import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function WhyNexia() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Title */}
          <div>
            <h3 className="text-3xl font-bold text-nexia-primary">
              Pourquoi Nexia Fiducia Maroc
            </h3>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-nexia-primary text-lg leading-relaxed">
              Fort de notre appartenance au réseau international Nexia, nous combinons l'expertise locale approfondie du marché marocain avec les standards internationaux les plus exigeants.
            </p>
            <p className="text-nexia-primary text-lg leading-relaxed">
              Notre approche personnalisée et notre engagement envers l'excellence nous permettent d'accompagner efficacement nos clients dans leurs défis financiers et stratégiques.
            </p>
            <Button asChild variant="professional" size="lg">
              <Link to="/about">En savoir plus</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}