import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, Linkedin } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Mohamed ALAMI",
    title: "Associé Fondateur",
    specialties: ["Audit & Commissariat aux comptes", "Corporate Finance & M&A"],
    description: "Expert-comptable et commissaire aux comptes avec plus de 20 ans d'expérience dans l'audit et le conseil financier.",
    image: "/lovable-uploads/01471ff8-a45a-4917-9e88-21cc4de0456d.png",
    email: "m.alami@nexiafiducia.ma",
    phone: "+212 522 XX XX XX"
  },
  {
    id: 2,
    name: "Fatima BENALI",
    title: "Associée",
    specialties: ["Fiscalité & Optimisation fiscale", "Accompagnement juridique & social"],
    description: "Spécialiste en droit fiscal et social, accompagne les entreprises dans leurs stratégies d'optimisation fiscale.",
    image: "/lovable-uploads/0506b088-dd85-416f-a9a3-bc15fac33d20.png",
    email: "f.benali@nexiafiducia.ma",
    phone: "+212 522 XX XX XX"
  },
  {
    id: 3,
    name: "Ahmed TAZI",
    title: "Associé",
    specialties: ["Expertise comptable & Conseil", "Digitalisation et systèmes d'information"],
    description: "Expert en transformation digitale et systèmes d'information, pilote la modernisation des processus comptables.",
    image: "/lovable-uploads/205e24d0-c46d-47e0-95e8-f94cd3c806a7.png",
    email: "a.tazi@nexiafiducia.ma",
    phone: "+212 522 XX XX XX"
  },
  {
    id: 4,
    name: "Khadija OUALI",
    title: "Associée",
    specialties: ["Support aux investisseurs étrangers", "Conseil en stratégie & développement"],
    description: "Accompagne les investisseurs étrangers dans leurs projets d'implantation et de développement au Maroc.",
    image: "/lovable-uploads/31bfa1ea-3054-4d56-967c-b20714ac5574.png",
    email: "k.ouali@nexiafiducia.ma",
    phone: "+212 522 XX XX XX"
  }
];

const EquipeDirecteante = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Notre Équipe Dirigeante
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez les profils et expertises des associés qui portent la vision de 
              Nexia Fiducia Maroc et accompagnent nos clients au quotidien.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member) => (
              <Card key={member.id} className="nexia-card-rounded overflow-hidden hover:shadow-xl transition-all duration-300 bg-card border-border">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold mb-4">
                      {member.title}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-2">Domaines d'expertise :</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, index) => (
                          <span 
                            key={index}
                            className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {member.description}
                    </p>
                    
                    <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                      <div className="flex items-center space-x-3 text-muted-foreground">
                        <Mail className="h-4 w-4 text-primary" />
                        <span className="text-sm">{member.email}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-muted-foreground">
                        <Phone className="h-4 w-4 text-primary" />
                        <span className="text-sm">{member.phone}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Prêt à collaborer avec notre équipe ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contactez-nous pour découvrir comment notre expertise peut accompagner 
              votre développement au Maroc et à l'international.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center nexia-button-primary font-medium px-8 py-4 text-lg"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EquipeDirecteante;