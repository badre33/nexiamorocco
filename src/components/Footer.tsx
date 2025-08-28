import { Linkedin } from "lucide-react";
import { useSimpleLanguage } from "@/hooks/useSimpleLanguage";

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
    <footer className="bg-nexia-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Logo */}
        <div className="mb-12">
          <div className="text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <img 
                src="/lovable-uploads/02c5e586-5b91-4d8e-a8d2-237890777f70.png" 
                alt="Nexia" 
                className="h-6 w-auto"
              />
              <span className="text-white text-sm font-bold mt-2">Fiducia Maroc</span>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mb-12">
          <p className="text-white/80 leading-relaxed max-w-4xl">
            {t('footer.description')}
          </p>
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
                  className="text-white/80 hover:text-nexia-secondary transition-colors duration-200"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>

          {/* Social Icons and WhatsApp */}
          <div className="flex space-x-4 lg:justify-end">
            <a
              href="https://www.linkedin.com/company/nexia-fiducia-maroc/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 hover:bg-nexia-secondary rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/212671702575"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors duration-200 group"
              title="Contact us on WhatsApp"
            >
              <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-white/60 text-sm">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}