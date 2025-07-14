import { Facebook, Linkedin, Twitter } from "lucide-react";

const footerLinks = [
  "Disclaimer",
  "Member firm Disclaimer",
  "Privacy Policy",
  "Cookie Policy",
  "Email Disclaimer",
];

export default function Footer() {
  return (
    <footer className="bg-nexia-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Logo */}
        <div className="mb-12">
          <div className="text-center md:text-left">
            <div className="text-sm font-medium text-nexia-secondary mb-1">
              Fiducia Maroc
            </div>
            <div className="text-2xl font-bold text-white">
              NEXIA
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mb-12">
          <p className="text-white/80 leading-relaxed max-w-4xl">
            [Insert member firm name] is a member of Nexia, a leading, global network of independent 
            accounting and consulting firms. Please see the "
            <a 
              href="#" 
              className="text-nexia-secondary hover:text-white transition-colors duration-200 underline"
            >
              Member firm disclaimer
            </a>
            " for further details.
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
                  href="#"
                  className="text-white/80 hover:text-nexia-secondary transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 lg:justify-end">
            <a
              href="#"
              className="w-10 h-10 bg-white/10 hover:bg-nexia-secondary rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/10 hover:bg-nexia-secondary rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/10 hover:bg-nexia-secondary rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <Facebook className="h-5 w-5" />
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