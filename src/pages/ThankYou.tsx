import { CheckCircle2, Clock3, Home, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ThankYou() {
  const service = window.sessionStorage.getItem("nexia_last_lead_service");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="bg-gradient-to-br from-white via-gray-50 to-nexia-secondary/10 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-xl md:p-14">
          <CheckCircle2 className="mx-auto mb-6 h-16 w-16 text-green-600" aria-hidden="true" />
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-nexia-secondary">
            Demande bien reçue
          </p>
          <h1 className="mb-5 text-3xl font-bold text-nexia-primary md:text-5xl">
            Merci de votre confiance
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-600">
            Votre demande{service && service !== "non_precise" ? ` concernant « ${service} »` : ""} a été transmise à l’équipe Nexia Morocco.
          </p>

          <div className="mx-auto mb-10 flex max-w-xl items-start gap-4 rounded-2xl bg-blue-50 p-5 text-left text-blue-950">
            <Clock3 className="mt-0.5 h-6 w-6 shrink-0 text-nexia-secondary" aria-hidden="true" />
            <div>
              <p className="font-semibold">Prochaine étape</p>
              <p className="text-sm leading-relaxed">Un membre de notre équipe examinera votre besoin et vous contactera dans les meilleurs délais ouvrés.</p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="https://wa.me/212699024526"
              target="_blank"
              rel="noopener noreferrer"
              data-tracking-location="thank_you"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-700"
            >
              <MessageCircle className="h-5 w-5" />
              Écrire sur WhatsApp
            </a>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-nexia-primary px-6 py-3 font-semibold text-nexia-primary transition-colors hover:bg-nexia-primary hover:text-white"
            >
              <Home className="h-5 w-5" />
              Retour à l’accueil
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
