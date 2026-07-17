import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSimpleLanguage } from "@/hooks/useSimpleLanguage";

const getSlides = (t: (key: string) => string) => [
  {
    id: 1,
    title: t('hero.slide1.title'),
    subtitle: t('hero.slide1.subtitle'),
    buttonText: t('hero.slide1.button'),
    link: "/domaines-expertise"
  },
  {
    id: 2,
    title: t('hero.slide2.title'),
    subtitle: t('hero.slide2.subtitle'),
    buttonText: t('hero.slide2.button'),
    link: "/a-propos"
  },
  {
    id: 3,
    title: t('hero.slide3.title'),
    subtitle: t('hero.slide3.subtitle'),
    buttonText: t('hero.slide3.button'),
    link: "/equipe-dirigeante"
  }
];

export default function RealHomeHero() {
  const { t } = useSimpleLanguage();
  const slides = getSlides(t);
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
          src="/uploads/622c05eb-5be8-4d65-8337-8b1100601dbb.png"
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