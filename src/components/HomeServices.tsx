import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Calculator, 
  TrendingUp, 
  Users, 
  Shield, 
  BookOpen, 
  PiggyBank, 
  Laptop, 
  Globe, 
  Scale, 
  Target 
} from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Audit & Commissariat aux comptes",
    description: "Audit légal, contractuel et due diligence avec une rigueur absolue et méthodologie conforme aux normes internationales.",
  },
  {
    icon: BookOpen,
    title: "Expertise comptable & Conseil",
    description: "Tenue comptable, supervision et conseil opérationnel pour optimiser vos processus et performances financières.",
  },
  {
    icon: PiggyBank,
    title: "Fiscalité & Optimisation fiscale",
    description: "Conseil fiscal personnalisé, optimisation et conformité réglementaire dans un environnement en évolution.",
  },
  {
    icon: TrendingUp,
    title: "Corporate Finance & Transactions",
    description: "Accompagnement en M&A, levée de fonds, due diligence et structuration financière pour vos opérations stratégiques.",
  },
  {
    icon: Users,
    title: "Externalisation & gestion déléguée",
    description: "Solutions d'outsourcing flexibles et sécurisées pour vos fonctions support comptables, fiscales et RH.",
  },
  {
    icon: Laptop,
    title: "Digitalisation & systèmes d'information",
    description: "Transformation digitale, audit SI, conformité RGPD et accompagnement ERP pour moderniser vos processus.",
  },
  {
    icon: Globe,
    title: "Support aux investisseurs étrangers",
    description: "Accompagnement complet à l'implantation au Maroc : création d'entreprise, fiscalité et conformité locale.",
  },
  {
    icon: Scale,
    title: "Accompagnement juridique & social",
    description: "Conseil en droit des affaires, droit du travail et mise en conformité réglementaire pour votre sécurité juridique.",
  },
  {
    icon: Target,
    title: "Conseil en stratégie & développement",
    description: "Élaboration de plans stratégiques, études de marché et accompagnement à l'internationalisation.",
  },
  {
    icon: Calculator,
    title: "Talent & Mobility Solutions",
    description: "Recrutement – Accompagnement RH – Installation au Maroc. 10+ ans d'expérience, 100+ talents placés avec succès.",
  },
];

export default function HomeServices() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-nexia-primary mb-6">
            Nos Domaines d'Expertise
          </h2>
          <p className="text-xl text-nexia-primary/80 max-w-3xl mx-auto leading-relaxed">
            Nous fournissons des services professionnels complets pour aider les entreprises à prospérer dans le paysage concurrentiel d'aujourd'hui.
          </p>
        </div>

        {/* Services Grid - Première ligne */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {services.slice(0, 5).map((service, index) => (
            <div
              key={index}
              className="text-center group hover-scale cursor-pointer"
            >
              <div className="bg-nexia-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-nexia-secondary group-hover:text-white transition-all duration-300">
                <service.icon className="h-8 w-8 text-nexia-secondary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-nexia-primary mb-3">
                {service.title}
              </h3>
              <p className="text-nexia-primary/70 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Deuxième ligne - 5 services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {services.slice(5, 10).map((service, index) => (
            <div
              key={index + 5}
              className="text-center group hover-scale cursor-pointer"
            >
              <div className="bg-nexia-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-nexia-secondary group-hover:text-white transition-all duration-300">
                <service.icon className="h-8 w-8 text-nexia-secondary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-nexia-primary mb-3">
                {service.title}
              </h3>
              <p className="text-nexia-primary/70 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild variant="professional" size="lg">
            <Link to="/domaines-expertise">Découvrir Tous Nos Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}