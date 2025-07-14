import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
// import caseStudyImage from "@/assets/case-study-image.jpg";

export default function CaseStudySection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-nexia-primary">
              Études de cas
            </h3>
            <p className="text-nexia-primary text-lg leading-relaxed">
              Découvrez comment nous accompagnons nos clients dans leurs défis les plus complexes à travers des missions concrètes et des résultats mesurables. Transformation digitale, restructuration fiscale, accompagnement IPO... nos études de cas illustrent notre expertise en action.
            </p>
            <Button asChild variant="professional" size="lg">
              <Link to="/etudes-de-cas" onClick={() => window.scrollTo(0, 0)}>Découvrir nos études de cas</Link>
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="/lovable-uploads/205e24d0-c46d-47e0-95e8-f94cd3c806a7.png"
              alt="Case Study"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}