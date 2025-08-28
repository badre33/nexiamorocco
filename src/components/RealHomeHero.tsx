import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const slides = [
  {
    id: 1,
    title: "L'expertise de confiance, au service de votre performance",
    subtitle: "Audit, fiscalité, stratégie, conformité, corporate finance… Nos domaines d'expertise s'adaptent à vos enjeux au Maroc et à l'international.",
    buttonText: "Découvrir nos domaines d'expertise",
    link: "/domaines-expertise"
  },
  {
    id: 2,
    title: "Une signature locale, un réseau mondial",
    subtitle: "Nexia Fiducia Maroc, membre du réseau Nexia International, accompagne les entreprises marocaines et étrangères avec un engagement d'excellence, d'éthique et de proximité.",
    buttonText: "En savoir plus sur Nexia Fiducia Maroc",
    link: "/a-propos"
  },
  {
    id: 3,
    title: "Une équipe dirigeante engagée à vos côtés",
    subtitle: "Découvrez les profils et expertises des associés qui portent la vision de Nexia Fiducia Maroc et accompagnent nos clients au quotidien.",
    buttonText: "Rencontrer notre équipe",
    link: "/equipe-dirigeante"
  }
];

export default function RealHomeHero() {
  const [currentSlide, setCurrentSlide] = useState(1); // Start at slide 2 (index 1)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const current = slides[currentSlide];

  return (
    <section className="nexia-hero relative w-full flex">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/622c05eb-5be8-4d65-8337-8b1100601dbb.png"
          alt="Nexia professional background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1350px] mx-auto flex items-end lg:ml-auto lg:mr-0 lg:pl-0">
        <div className="nexia-hero-content">
          <p className="bolder text-nexia-primary mb-4 font-poppins">{current.subtitle}</p>
          
          <h1 className="nexia-hero-title font-poppins font-bold leading-tight mb-6">
            {current.title}
          </h1>
          
          <Button 
            asChild 
            className="nexia-button-secondary font-poppins font-medium px-10 py-3 mb-12"
          >
            <Link to={current.link}>{current.buttonText}</Link>
          </Button>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-5 mt-12">
            <span className="text-nexia-primary font-poppins font-medium">{currentSlide + 1}/{slides.length}</span>
            
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={prevSlide}
                className="text-nexia-primary hover:text-nexia-secondary p-0 h-auto w-auto hover:bg-transparent"
              >
                <ChevronLeft className="h-11 w-11" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={nextSlide}
                className="text-nexia-primary hover:text-nexia-secondary p-0 h-auto w-auto hover:bg-transparent"
              >
                <ChevronRight className="h-11 w-11" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}