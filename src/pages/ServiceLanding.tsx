import { ArrowRight, Check, ChevronRight, Clock3, MessageCircle, ShieldCheck } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { servicePageBySlug } from "@/data/servicePages";
import { trackEvent } from "@/lib/analytics";
import NotFound from "@/pages/NotFound";

export default function ServiceLanding() {
  const { slug = "" } = useParams();
  const page = servicePageBySlug[slug];
  if (!page) return <NotFound />;

  const contactUrl = `/contact?service=${encodeURIComponent(page.serviceValue)}&source=${encodeURIComponent(page.slug)}`;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="relative overflow-hidden bg-nexia-primary text-white">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-bl from-nexia-secondary/25 to-transparent" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <nav aria-label="Fil d'Ariane" className="mb-8 flex items-center gap-2 text-sm text-white/70">
              <Link to="/" className="hover:text-white">Accueil</Link><ChevronRight className="h-4 w-4" />
              <Link to="/domaines-expertise" className="hover:text-white">Expertises</Link><ChevronRight className="h-4 w-4" />
              <span className="text-white">{page.eyebrow}</span>
            </nav>
            <div className="max-w-4xl">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-nexia-secondary">{page.eyebrow}</p>
              <h1 className="mb-7 text-4xl font-bold leading-tight text-white md:text-6xl">{page.title}</h1>
              <p className="max-w-3xl text-xl leading-relaxed text-white/85">{page.intro}</p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link to={contactUrl} data-tracking-location={`service_hero_${page.slug}`} className="inline-flex items-center justify-center gap-2 bg-nexia-secondary px-6 py-4 font-semibold text-nexia-primary transition hover:bg-white">
                  Parler à un expert <ArrowRight className="h-5 w-5" />
                </Link>
                <a href="tel:+212522364377" data-tracking-location={`service_hero_${page.slug}`} className="inline-flex items-center justify-center border border-white/40 px-6 py-4 font-semibold text-white transition hover:bg-white hover:text-nexia-primary">
                  +212 5 22 36 43 77
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b bg-slate-50">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 text-sm text-nexia-primary md:grid-cols-3 lg:px-8">
            <div className="flex items-center gap-3"><ShieldCheck className="h-6 w-6 text-nexia-secondary" /><span>Approche confidentielle et documentée</span></div>
            <div className="flex items-center gap-3"><Clock3 className="h-6 w-6 text-nexia-secondary" /><span>Calendrier défini dès le cadrage</span></div>
            <div className="flex items-center gap-3"><MessageCircle className="h-6 w-6 text-nexia-secondary" /><span>Interlocuteur dédié à votre mission</span></div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-nexia-secondary">Quand nous solliciter</p>
              <h2 className="mb-7 text-3xl font-bold text-nexia-primary">Des enjeux concrets, une réponse structurée</h2>
              <ul className="space-y-4">
                {page.situations.map((item) => <li key={item} className="flex gap-3 text-base leading-relaxed text-slate-700"><Check className="mt-1 h-5 w-5 shrink-0 text-nexia-secondary" />{item}</li>)}
              </ul>
            </div>
            <div className="rounded-[0_2.5rem_0_2.5rem] bg-nexia-primary p-8 text-white md:p-12">
              <h2 className="mb-7 text-3xl font-bold text-white">Notre accompagnement</h2>
              <div className="grid gap-x-8 gap-y-5 md:grid-cols-2">
                {page.services.map((item) => <div key={item} className="flex gap-3 border-b border-white/15 pb-4"><span className="font-semibold text-nexia-secondary">+</span><span>{item}</span></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12 max-w-3xl"><p className="mb-3 text-sm font-semibold uppercase tracking-wider text-nexia-secondary">Méthode</p><h2 className="mb-4 text-3xl font-bold text-nexia-primary md:text-4xl">Une mission lisible à chaque étape</h2><p className="text-slate-600">Le périmètre, les responsabilités et le calendrier sont convenus avant le démarrage.</p></div>
            <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {page.process.map((step, index) => <li key={step.title} className="border-t-4 border-nexia-secondary bg-white p-6 shadow-sm"><span className="mb-4 block text-sm font-bold text-nexia-secondary">0{index + 1}</span><h3 className="mb-3 text-xl font-bold text-nexia-primary">{step.title}</h3><p className="text-base leading-relaxed text-slate-600">{step.text}</p></li>)}
            </ol>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div><p className="mb-3 text-sm font-semibold uppercase tracking-wider text-nexia-secondary">Livrables</p><h2 className="mb-7 text-3xl font-bold text-nexia-primary">Ce que vous obtenez</h2><ul className="grid gap-4 sm:grid-cols-2">{page.deliverables.map((item) => <li key={item} className="flex gap-3 rounded-lg border p-4 text-base text-slate-700"><Check className="h-5 w-5 shrink-0 text-nexia-secondary" />{item}</li>)}</ul></div>
          <div><p className="mb-3 text-sm font-semibold uppercase tracking-wider text-nexia-secondary">Questions fréquentes</p><h2 className="mb-7 text-3xl font-bold text-nexia-primary">Avant de démarrer</h2><div className="space-y-5">{page.faq.map((item) => <details key={item.question} className="group border-b pb-5"><summary className="cursor-pointer list-none pr-8 font-semibold text-nexia-primary">{item.question}</summary><p className="mt-3 text-base leading-relaxed text-slate-600">{item.answer}</p></details>)}</div></div>
        </section>

        <section className="bg-nexia-secondary py-14">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-6 lg:flex-row lg:items-center lg:px-8">
            <div><h2 className="mb-3 text-3xl font-bold text-nexia-primary">Échangeons sur votre besoin</h2><p className="mb-0 max-w-2xl text-base text-nexia-primary/80">Décrivez votre contexte : notre équipe pourra qualifier le périmètre et les prochaines étapes.</p></div>
            <Link to={contactUrl} onClick={() => trackEvent("cta_click", { cta_label: "demander_un_echange", cta_location: page.slug })} className="inline-flex shrink-0 items-center gap-2 bg-nexia-primary px-7 py-4 font-semibold text-white hover:bg-white hover:text-nexia-primary">Demander un échange <ArrowRight className="h-5 w-5" /></Link>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold text-nexia-primary">Expertises complémentaires</h2>
          <div className="grid gap-4 md:grid-cols-3">{page.related.map((relatedSlug) => { const related = servicePageBySlug[relatedSlug]; return related ? <Link key={relatedSlug} to={`/${relatedSlug}`} className="group flex items-center justify-between border p-5 font-semibold text-nexia-primary transition hover:border-nexia-secondary hover:bg-slate-50"><span>{related.eyebrow}</span><ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" /></Link> : null; })}</div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
