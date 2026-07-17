import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useSimpleLanguage } from "@/hooks/useSimpleLanguage";

export default function CaseStudySection() {
  const { t } = useSimpleLanguage();
  
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-nexia-primary">
              {t('caseStudy.title')}
            </h3>
            <p className="text-nexia-primary text-lg leading-relaxed">
              {t('caseStudy.description')}
            </p>
            <Button asChild variant="professional" size="lg">
              <Link to="/etudes-de-cas" onClick={() => window.scrollTo(0, 0)}>{t('caseStudy.button')}</Link>
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="/uploads/205e24d0-c46d-47e0-95e8-f94cd3c806a7.png"
              alt="Case Study"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}