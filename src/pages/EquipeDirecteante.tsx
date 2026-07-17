import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, Linkedin } from "lucide-react";
import { useSimpleLanguage } from "@/hooks/useSimpleLanguage";

const teamMembers = [
  {
    id: 1,
    name: "M. Yassine EL MAGUIRI",
    title: "Président",
    specialties: ["Audit & Commissariat aux comptes", "Expertise comptable", "Présidence de l'ordre des Experts-Comptables"],
    description: "Une longue carrière à son actif, depuis 1998, chez ORSIA Finance, KPMG International puis DARLY & CO AUDITING. Yassine EL MAGUIRI est expert comptable – commissaire aux comptes, mais également le Président de l'ordre des Experts-Comptables, Conseil Région de Casablanca et Sud. Yassine est l'associé-fondateur du cabinet Advisoris à Casablanca, avant l'opération de regroupement avec NEXIA, donnant naissance à un nouveau géant marocain du métier de l'audit, commissariat aux comptes et du conseil.",
    image: "/uploads/0e997ed8-ef54-4573-a7e6-0b1be1b3bb22.png",
    email: "y.elmaguiri@nexiafiducia.ma"
  },
  {
    id: 2,
    name: "M. Jalal BENSAID",
    title: "Directeur Général",
    specialties: ["Expertise comptable", "Commissariat aux comptes", "Analyses économiques et financières", "Gestion déléguée"],
    description: "Ancien directeur de mission au sein de AETD Paris, et directeur du bureau d'AETD au Maroc, Jalal BENSAID est expert-comptable – commissaire aux comptes diplômé, titulaire d'un DESCF à l'ISEM Montpellier. Il possède une expertise dans la distribution, l'industrie, la gestion déléguée, les études de marché ainsi que les analyses économiques et financières. Jalal est l'associé historique dans le cabinet NEXIA, avant le regroupement avec ADVISORIS en 2022, où il a pu pérenniser la firme, et renforcer progressivement sa présence sur le marché marocain.",
    image: "/uploads/340c2c11-0db9-4dda-8759-2bbe8cc749c7.png",
    email: "J.bensaid@nexiafiducia.ma"
  }
];

const EquipeDirecteante = () => {
  const { t } = useSimpleLanguage();
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `url('/uploads/a46d6c8c-98d8-4527-bb95-23f3aa12e9e9.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('team.heroTitle')}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {t('team.heroSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary rounded-full blur-xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('team.partnersTitle')}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('team.partnersSubtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card 
                key={member.id} 
                className="group nexia-card-rounded overflow-hidden bg-gradient-to-br from-card to-card/90 border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-0">
                  {/* Header with gradient */}
                  <div className="bg-gradient-to-r from-primary to-primary/80 p-8 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/10 opacity-20"></div>
                    
                    <div className="relative z-10">
                      <div className="w-28 h-28 mx-auto mb-4 relative">
                        <div className="w-full h-full rounded-full overflow-hidden ring-4 ring-white/30 shadow-xl group-hover:ring-white/50 transition-all duration-300">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        {/* Decorative ring */}
                        <div className="absolute -inset-2 rounded-full border-2 border-white/20 group-hover:border-white/40 transition-all duration-300"></div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {member.name}
                      </h3>
                      <p className="text-white/90 font-semibold text-lg">
                        {member.title}
                      </p>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-4 text-center">
                        <span className="bg-primary/10 px-3 py-1 rounded-full text-primary">
                          {t('teamPage.specialties')}
                        </span>
                      </h4>
                      <div className="flex flex-wrap justify-center gap-2">
                        {member.specialties.map((specialty, index) => (
                          <span 
                            key={index}
                            className="bg-gradient-to-r from-primary/10 to-primary/5 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20 hover:border-primary/40 transition-colors duration-200"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-muted/50 to-muted/30 p-6 rounded-xl mb-6">
                      <p className="text-muted-foreground leading-relaxed text-justify text-sm">
                        {member.description}
                      </p>
                    </div>
                    
                    {/* Contact Info */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-center space-x-3 p-3 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors duration-200 group">
                        <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-200" />
                        <span className="text-sm font-medium text-foreground">{member.email}</span>
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
          backgroundImage: `url('/uploads/08470e3b-03ff-401c-abde-805b50c3c778.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-primary/85"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('team.ctaTitle')}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {t('team.ctaSubtitle')}
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center nexia-button-primary font-medium px-8 py-4 text-lg"
            >
              {t('team.ctaButton')}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EquipeDirecteante;