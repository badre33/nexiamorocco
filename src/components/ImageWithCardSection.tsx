import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";

const documents = [
  {
    id: 1,
    category: "ADHÉSION",
    title: "Brochure d'Adhésion Nexia 2025",
    description: "Découvrez les avantages de rejoindre le réseau international Nexia et comment notre adhésion peut bénéficier à votre organisation.",
    downloadUrl: "https://fltpndxdtovgjuqarfsh.supabase.co/storage/v1/object/public/nexia-files//Nexia-Membership-Brochure-2025.pdf",
    buttonText: "Télécharger la brochure"
  },
  {
    id: 2,
    category: "PRÉSENTATION",
    title: "Présentation Nexia 2025",
    description: "Notre présentation institutionnelle détaillant nos services, notre expertise et notre vision pour accompagner votre croissance.",
    downloadUrl: "https://fltpndxdtovgjuqarfsh.supabase.co/storage/v1/object/public/nexia-files//Presentation%20Nexia%202025.pdf",
    buttonText: "Télécharger la présentation"
  }
];

export default function ImageWithCardSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === documents.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? documents.length - 1 : prev - 1));
  };

  const currentDocument = documents[currentSlide];

  const handleDownload = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className="relative py-0">
      {/* Background Image */}
      <div className="relative h-[600px] overflow-hidden">
        <img
          src="/lovable-uploads/70705004-8cef-46fe-9378-b9ad705aaf93.png"
          alt="Professional forest background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Overlaid Card */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Card Content */}
            <div className="bg-nexia-primary p-8 rounded-lg shadow-professional max-w-lg">
              <p className="text-nexia-secondary text-sm uppercase tracking-wide mb-4">
                {currentDocument.category}
              </p>
              <h4 className="text-3xl font-bold text-white mb-6">
                {currentDocument.title}
              </h4>
              <p className="text-white/90 mb-8 leading-relaxed">
                {currentDocument.description}
              </p>
              <Button 
                variant="nexia" 
                size="lg"
                onClick={() => handleDownload(currentDocument.downloadUrl)}
                className="flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                {currentDocument.buttonText}
              </Button>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center space-x-4 mt-8 lg:mt-0">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevSlide}
                className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm rounded-full w-12 h-12"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={nextSlide}
                className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm rounded-full w-12 h-12"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
              <span className="text-white font-medium ml-4">
                {currentSlide + 1}/{documents.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}