// import heroBackground from "@/assets/hero-background.jpg";

export default function ServicesHero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/622c05eb-5be8-4d65-8337-8b1100601dbb.png"
          alt="Services background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-white p-8 lg:p-12 max-w-3xl">
          <p className="text-nexia-secondary font-bold text-lg mb-4">
            Nos Domaines d'Expertise
          </p>
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-nexia-primary leading-tight mb-6">
            Un accompagnement global, une expertise locale et internationale
          </h1>
          <p className="text-lg text-nexia-primary leading-relaxed">
            Chez Nexia Fiducia Maroc, nous offrons une palette complète de services conçus pour accompagner les entreprises à chaque étape de leur développement. Nos domaines d'expertise couvrent l'ensemble des enjeux stratégiques, financiers, fiscaux, réglementaires et organisationnels de nos clients.
          </p>
        </div>
      </div>
    </section>
  );
}