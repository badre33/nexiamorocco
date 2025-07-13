import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import treesBackground from "@/assets/trees-background.jpg";

export default function ImageWithCardSection() {
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
                Our people
              </p>
              <h4 className="text-3xl font-bold text-white mb-6">
                Promoting a Report
              </h4>
              <p className="text-white/90 mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Button variant="nexia" size="lg">
                Download
              </Button>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center space-x-4 mt-8 lg:mt-0">
              <Button
                variant="ghost"
                size="icon"
                className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm rounded-full w-12 h-12"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm rounded-full w-12 h-12"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
              <span className="text-white font-medium ml-4">2/3</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}