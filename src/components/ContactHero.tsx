// import heroBackground from "@/assets/hero-background.jpg";

export default function ContactHero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/cd1d5d63-1fdb-4d40-9016-a19aaeb69709.png"
          alt="Contact us hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-nexia-primary/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-6xl bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-professional">
          <h1 className="text-4xl lg:text-5xl font-bold text-nexia-primary mb-8">
            Contactez-nous
          </h1>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-nexia-primary mb-6">Nos Bureaux</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Bureau Principal */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-nexia-primary mb-4">Bureau Principal</h3>
              <div className="space-y-2">
                <p className="text-nexia-primary">3, Rue Bab El Mansour</p>
                <p className="text-nexia-primary">Résidence Imrane - RDC Bureau n°15</p>
                <p className="text-nexia-primary">Espace Porte d'Anfa</p>
                <p className="text-nexia-primary">Casablanca - Maroc</p>
                <p className="text-nexia-primary font-medium mt-3">
                  Tél: <a href="tel:+212522364588" className="text-nexia-secondary hover:underline">+(212) 05 22 36 45 88/89</a>
                </p>
              </div>
            </div>

            {/* Bureau Secondaire */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-nexia-primary mb-4">Bureau Secondaire</h3>
              <div className="space-y-2">
                <p className="text-nexia-primary">Rue des Pléaides</p>
                <p className="text-nexia-primary">Quartier des Hôpitaux</p>
                <p className="text-nexia-primary">Casablanca - Maroc</p>
                <p className="text-nexia-primary font-medium mt-3">
                  Tél: <a href="tel:+212522863715" className="text-nexia-secondary hover:underline">+(212) 522 863 715</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}