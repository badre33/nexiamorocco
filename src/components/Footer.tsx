import { Linkedin } from "lucide-react";

const footerLinks = [
  { text: "Member firm disclaimer", url: "https://nexia.com/member-firm-disclaimer/" },
  { text: "Privacy policy", url: "https://nexia.com/privacy-policy/" },
  { text: "Cookie Policy", url: "https://nexia.com/cookie-policy/" },
  { text: "Email disclaimer", url: "https://nexia.com/email-disclaimer/" },
];

export default function Footer() {
  return (
    <footer className="bg-nexia-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Logo */}
        <div className="mb-12">
          <div className="text-center md:text-left">
            <img 
              src="/images/nexia-fiducia-maroc-logo.svg" 
              alt="Nexia Fiducia Maroc" 
              className="h-[50px] w-auto mx-auto md:mx-0"
            />
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mb-12">
          <p className="text-white/80 leading-relaxed max-w-4xl">
            Nexia Fiducia Maroc est membre de{" "}
            <a 
              href="https://nexia.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-nexia-secondary hover:text-white transition-colors duration-200 underline"
            >
              Nexia
            </a>
            , un réseau mondial de premier plan de cabinets indépendants de comptabilité et de conseil.
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

          {/* Social Icons */}
          <div className="flex space-x-4 lg:justify-end">
            <a
              href="https://www.linkedin.com/company/nexia-fiducia-maroc/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 hover:bg-nexia-secondary rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-white/60 text-sm">
            © 2024 Nexia Templates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}