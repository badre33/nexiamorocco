import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";

const services = [
  {
    title: "Relations Personnalisées",
    description: "Chez Nexia Fiducia Maroc, nous privilégions des relations de proximité avec nos clients, basées sur la confiance mutuelle et une compréhension approfondie de leurs enjeux business.",
    image: service1,
  },
  {
    title: "Vision Business",
    description: "Notre approche orientée business nous permet d'accompagner nos clients avec des solutions pragmatiques et adaptées à leurs objectifs de croissance et de performance.",
    image: service2,
  },
  {
    title: "Réseau International",
    description: "Grâce à notre appartenance au réseau mondial Nexia, nous offrons à nos clients un accès privilégié à une expertise internationale et des opportunités de développement à l'étranger.",
    image: service3,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-bold text-nexia-primary">Nos Services</h3>
          </div>
          <div className="lg:col-span-2">
            <p className="text-nexia-primary text-lg leading-relaxed">
              Fort de notre expertise et de notre appartenance au réseau international Nexia, nous proposons des services d'audit, de conseil et d'accompagnement adaptés aux défis de votre entreprise.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-professional hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-nexia-primary mb-4">
                  {service.title}
                </h4>
                <p className="text-nexia-primary/80 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="text-nexia-secondary font-medium hover:text-nexia-primary transition-colors duration-200"
                >
                  En savoir plus →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}