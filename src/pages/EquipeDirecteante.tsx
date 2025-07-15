import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, Linkedin } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "M. Yassine EL MAGUIRI",
    title: "Président",
    specialties: ["Audit & Commissariat aux comptes", "Expertise comptable", "Présidence de l'ordre des Experts-Comptables"],
    description: "Une longue carrière à son actif, depuis 1998, chez ORSIA Finance, KPMG International puis DARLY & CO AUDITING. Yassine EL MAGUIRI est expert comptable – commissaire aux comptes, mais également le Président de l'ordre des Experts-Comptables, Conseil Région de Casablanca et Sud. Yassine est l'associé-fondateur du cabinet Advisoris à Casablanca, avant l'opération de regroupement avec NEXIA, donnant naissance à un nouveau géant marocain du métier de l'audit, commissariat aux comptes et du conseil.",
    image: "/lovable-uploads/0e997ed8-ef54-4573-a7e6-0b1be1b3bb22.png",
    email: "y.elmaguiri@nexiafiducia.ma",
    phone: "+212 (0) 661 909 901"
  },
  {
    id: 2,
    name: "M. Jalal BENSAID",
    title: "Directeur Général",
    specialties: ["Expertise comptable", "Commissariat aux comptes", "Analyses économiques et financières", "Gestion déléguée"],
    description: "Ancien directeur de mission au sein de AETD Paris, et directeur du bureau d'AETD au Maroc, Jalal BENSAID est expert-comptable – commissaire aux comptes diplômé, titulaire d'un DESCF à l'ISEM Montpellier. Il possède une expertise dans la distribution, l'industrie, la gestion déléguée, les études de marché ainsi que les analyses économiques et financières. Jalal est l'associé historique dans le cabinet NEXIA, avant le regroupement avec ADVISORIS en 2022, où il a pu pérenniser la firme, et renforcer progressivement sa présence sur le marché marocain.",
    image: "/lovable-uploads/340c2c11-0db9-4dda-8759-2bbe8cc749c7.png",
    email: "J.bensaid@nexiafiducia.ma",
    phone: "+212 (0) 662 188 875"
  }
];

const EquipeDirecteante = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `url('/lovable-uploads/a46d6c8c-98d8-4527-bb95-23f3aa12e9e9.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Notre Équipe Dirigeante
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
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
                <CardContent className="p-8">
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-4 ring-4 ring-primary/20 shadow-lg">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                  </div>
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold mb-4">
                      {member.title}
                    </p>
                    
                     <div className="mb-6">
                       <h4 className="font-semibold text-foreground mb-3">Domaines d'expertise :</h4>
                       <div className="flex flex-wrap justify-center gap-2">
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
                     
                     <p className="text-muted-foreground mb-6 leading-relaxed text-justify">
                       {member.description}
                     </p>
                     
                     <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                       <div className="flex items-center justify-center space-x-3 text-muted-foreground">
                         <Mail className="h-4 w-4 text-primary" />
                         <span className="text-sm">{member.email}</span>
                       </div>
                       <div className="flex items-center justify-center space-x-3 text-muted-foreground">
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
      <section 
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `url('/lovable-uploads/08470e3b-03ff-401c-abde-805b50c3c778.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-primary/85"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à collaborer avec notre équipe ?
            </h2>
            <p className="text-xl text-white/90 mb-8">
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