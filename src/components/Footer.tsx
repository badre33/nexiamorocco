import { Linkedin } from "lucide-react";
import { useSimpleLanguage } from "@/hooks/useSimpleLanguage";
import { trackWhatsAppClick } from "@/lib/analytics";

const getFooterLinks = (t: (key: string) => string) => [
  { text: t('footer.disclaimer'), url: "https://nexia.com/member-firm-disclaimer/" },
  { text: t('footer.privacy'), url: "https://nexia.com/privacy-policy/" },
  { text: t('footer.cookie'), url: "https://nexia.com/cookie-policy/" },
  { text: t('footer.email'), url: "https://nexia.com/email-disclaimer/" },
];

export default function Footer() {
  const { t } = useSimpleLanguage();
  const footerLinks = getFooterLinks(t);
  
  return (
    <footer className="bg-nexia-secondary text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Logo + tagline (style nexia.com officiel : logo + 'Audit. Tax. Advisory.') */}
        <div className="mb-12 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <img
            src="/nexia-morocco-logo.png"
            alt="Nexia Morocco"
            className="h-20 md:h-24 lg:h-28 w-auto brightness-0 invert"
          />
          <div className="hidden md:block w-px h-12 bg-white/30" aria-hidden />
          <p className="text-xl md:text-2xl font-poppins font-medium text-white">
            {t('footer.tagline')}
          </p>
        </div>

        {/* Disclaimer */}
        <div className="mb-12">
          <p className="text-white/90 leading-relaxed max-w-4xl font-poppins">
            {t('footer.description')}
          </p>
        </div>

        {/* Maillage interne — pages piliers (SEO) */}
        <div className="mb-10 border-t border-white/20 pt-8">
          <h3 className="text-lg font-semibold font-poppins mb-3">Nos expertises</h3>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="/expertise-comptable-audit-casablanca" className="text-white/90 hover:text-nexia-primary transition-colors font-poppins">
              Expertise comptable &amp; audit à Casablanca
            </a>
            <a href="/creer-societe-maroc" className="text-white/90 hover:text-nexia-primary transition-colors font-poppins">
              Créer une société au Maroc
            </a>
            <a href="/domaines-expertise" className="text-white/90 hover:text-nexia-primary transition-colors font-poppins">
              Nos domaines d'expertise
            </a>
          </nav>
        </div>

        {/* Coordonnées des bureaux — NAP cohérent (référencement local Google) */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/20 pt-8">
          <address className="not-italic">
            <h3 className="text-lg font-semibold font-poppins mb-2">Cabinet d'expertise comptable — Casablanca</h3>
            <p className="text-white/90 font-poppins text-sm leading-relaxed">
              41 Rue Jbel Toudgha, CIL, Casablanca 20000, Maroc<br />
              <a href="tel:+212522364377" className="hover:text-nexia-primary transition-colors">+212 5 22 36 43 77</a>
            </p>
          </address>
          <address className="not-italic">
            <h3 className="text-lg font-semibold font-poppins mb-2">Bureau de Tanger</h3>
            <p className="text-white/90 font-poppins text-sm leading-relaxed">
              Lotissement New Center, Lots 3, Étage 1 N°16, Tanger, Maroc<br />
              <a href="tel:+212531295075" className="hover:text-nexia-primary transition-colors">+212 5 31 29 50 75</a>
            </p>
          </address>
        </div>

        {/* Footer Links and Social */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Links */}
          <div className="lg:col-span-2">
            <div className="flex flex-wrap gap-6">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-nexia-primary transition-colors duration-200 font-poppins"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>

          {/* Social Icons and WhatsApp */}
          <div className="flex space-x-4 lg:justify-end">
            <a
              href="https://www.linkedin.com/company/nexia-fiducia-maroc/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Suivre Nexia Morocco sur LinkedIn"
              className="w-14 h-14 md:w-16 md:h-16 bg-white/15 hover:bg-nexia-primary rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <Linkedin className="h-7 w-7 md:h-8 md:w-8" />
            </a>
            <a
              href="https://wa.me/212630300386"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("footer")}
              aria-label="Contacter Nexia Morocco sur WhatsApp"
              className="w-14 h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors duration-200 group"
              title="Contact us on WhatsApp"
            >
              <svg className="h-7 w-7 md:h-8 md:w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Legal name + Copyright */}
        <div className="mt-12 pt-8 border-t border-white/30 text-center space-y-1">
          <p className="text-white text-sm font-medium font-poppins">
            {t('footer.legalName')}
          </p>
          <p className="text-white/80 text-sm font-poppins">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}