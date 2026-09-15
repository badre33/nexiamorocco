import { ArrowRight, Building2, Globe2, Handshake } from "lucide-react";
import { Link } from "react-router-dom";

const paths = [
  {
    title: "Entreprise implantée au Maroc",
    description: "Audit, conformité, fiscalité, comptabilité et pilotage pour sécuriser votre activité et accompagner sa croissance.",
    href: "/accompagnement-entreprises-maroc",
    cta: "Développer votre entreprise",
    icon: Building2,
  },
  {
    title: "Groupe étranger s’implantant au Maroc",
    description: "Un point de coordination local pour structurer la filiale, organiser ses obligations et répondre aux attentes du siège.",
    href: "/s-implanter-au-maroc",
    cta: "Préparer votre implantation",
    icon: Globe2,
  },
  {
    title: "Investisseur ou acquéreur",
    description: "Due diligence, fiscalité et analyses financières pour éclairer une acquisition, une participation ou une cession.",
    href: "/investir-acquerir-entreprise-maroc",
    cta: "Sécuriser votre opération",
    icon: Handshake,
  },
];

export default function AcquisitionPaths() {
  return (
    <section className="bg-nexia-primary py-16 text-white lg:py-24" aria-labelledby="client-paths-title">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-nexia-secondary">Votre situation</p>
          <h2 id="client-paths-title" className="mb-5 text-3xl font-bold text-white md:text-4xl">Un parcours adapté à votre projet au Maroc</h2>
          <p className="text-lg leading-relaxed text-white/80">Accédez directement aux expertises, étapes et interlocuteurs correspondant à votre contexte.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {paths.map(({ title, description, href, cta, icon: Icon }) => (
            <article key={href} className="flex flex-col border-t-4 border-nexia-secondary bg-white p-7 text-nexia-primary shadow-lg">
              <Icon className="mb-6 h-9 w-9 text-nexia-secondary" aria-hidden="true" />
              <h3 className="mb-4 text-2xl font-bold">{title}</h3>
              <p className="mb-7 flex-1 leading-relaxed text-slate-600">{description}</p>
              <Link to={href} className="inline-flex items-center gap-2 font-semibold text-nexia-primary hover:text-nexia-secondary" data-tracking-location="client_path">
                {cta} <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
