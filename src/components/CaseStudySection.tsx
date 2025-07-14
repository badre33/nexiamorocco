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
              Case Study
            </h3>
            <p className="text-nexia-primary text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ex sem, dictum vitae imperdiet ac, finibus quis libero. Phasellus imperdiet nec sem et facilisis. Morbi in pellentesque mauris, quis hendrerit tortor.
            </p>
            <Button asChild variant="professional" size="lg">
              <Link to="/domaines-expertise">Read more</Link>
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