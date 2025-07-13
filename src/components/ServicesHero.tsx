import heroBackground from "@/assets/hero-background.jpg";

export default function ServicesHero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBackground}
          alt="Services background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-white p-8 lg:p-12 max-w-3xl">
          <p className="text-nexia-primary font-bold text-lg mb-4">
            Services
          </p>
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-nexia-primary leading-tight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          </h1>
        </div>
      </div>
    </section>
  );
}