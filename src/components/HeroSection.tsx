import { Button } from "@/components/ui/button";
// import heroBackground from "@/assets/hero-background.jpg";

export default function HeroSection() {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/622c05eb-5be8-4d65-8337-8b1100601dbb.png"
          alt="Professional office building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-nexia-primary/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-professional">
          <p className="text-nexia-primary font-semibold text-sm uppercase tracking-wide mb-4">
            About Us
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-nexia-primary mb-6 leading-tight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          </h1>
          <Button variant="professional" size="lg" className="mt-4">
            Discover more
          </Button>
        </div>
      </div>
    </section>
  );
}