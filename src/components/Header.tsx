import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SimpleLanguageToggle from "@/components/SimpleLanguageToggle";
import { useSimpleLanguage } from "@/hooks/useSimpleLanguage";

const getNavigation = (t: (key: string) => string) => [
  { name: t('nav.home'), href: "/" },
  { name: t('nav.expertise'), href: "/domaines-expertise" },
  { name: t('nav.team'), href: "/equipe-dirigeante" },
  { 
    name: t('nav.insights'), 
    href: "#",
    dropdown: [
      { name: t('nav.globalPerspectives'), href: "/perspectives-mondiales" },
      { name: t('nav.caseStudies'), href: "/etudes-de-cas" }
    ]
  },
  { name: t('nav.about'), href: "/a-propos" },
  { name: t('nav.contact'), href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useSimpleLanguage();
  const navigation = getNavigation(t);

  const isInsightsActive = location.pathname === "/perspectives-mondiales" || location.pathname === "/etudes-de-cas";

  return (
    <header className="bg-nexia-primary border-none">
      {/* Desktop Header */}
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="flex items-end justify-between py-4 md:py-6 lg:py-[30px] border-none">
          {/* Logo (official Nexia Morocco logo — inverted to white via CSS for dark header) */}
          <div className="flex items-center">
            <Link to="/" className="block" aria-label="Nexia Morocco — Accueil">
              <img
                src="/nexia-morocco-logo.png"
                alt="Nexia Morocco"
                className="h-16 md:h-20 lg:h-28 w-auto brightness-0 invert"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <SimpleLanguageToggle />
            <a
              href="https://wa.me/212699024526?text=Bonjour%2C%20je%20souhaite%20échanger%20avec%20un%20expert%20Nexia%20Morocco."
              target="_blank"
              rel="noopener noreferrer"
              data-tracking-location="header"
              aria-label="Contacter Nexia Morocco sur WhatsApp"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-500 hover:bg-green-600 text-white text-sm xl:text-base font-poppins font-medium transition-colors duration-200"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              WhatsApp
            </a>
            <Link
              to="/contact"
              data-tracking-location="header"
              className="inline-flex items-center px-5 py-2 rounded-full border border-white/40 text-white text-sm xl:text-base font-poppins font-medium hover:bg-white hover:text-nexia-primary transition-colors duration-200"
            >
              {t('nav.contactCta')}
            </Link>
            {navigation.map((item) => {
              if (item.dropdown) {
                return (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger className={`flex items-center gap-1 text-white font-poppins font-medium pb-1 border-b-4 transition-colors duration-300 hover:border-nexia-secondary text-sm xl:text-base ${
                      isInsightsActive ? "border-nexia-secondary" : "border-transparent"
                    }`}>
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white border-none shadow-lg rounded-lg p-2 z-50">
                      {item.dropdown.map((subItem) => (
                        <DropdownMenuItem key={subItem.name} asChild className="cursor-pointer">
                          <Link
                            to={subItem.href}
                            className="block px-4 py-2 text-nexia-primary hover:bg-nexia-light hover:text-nexia-primary font-poppins font-medium rounded transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-white font-poppins font-medium pb-1 border-b-4 transition-colors duration-300 text-sm xl:text-base ${
                    location.pathname === item.href
                      ? "border-nexia-secondary"
                      : "border-transparent hover:border-nexia-secondary"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button and language toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <SimpleLanguageToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-nexia-secondary hover:bg-transparent"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-nexia-primary border-t border-white/10">
          <div className="px-4 sm:px-6 py-4 space-y-2">
            {/* WhatsApp mobile */}
            <a
              href="https://wa.me/212699024526?text=Bonjour%2C%20je%20souhaite%20échanger%20avec%20un%20expert%20Nexia%20Morocco."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 text-white font-poppins font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              WhatsApp
            </a>
            {navigation.map((item) => {
              if (item.dropdown) {
                return (
                  <div key={item.name}>
                    <div className="px-3 py-2 text-white font-poppins font-medium">
                      {item.name}
                    </div>
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className={`block px-6 py-2 text-white font-poppins font-medium transition-colors duration-200 ${
                          location.pathname === subItem.href
                            ? "text-nexia-secondary"
                            : "hover:text-nexia-secondary"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                );
              }
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-white font-poppins font-medium transition-colors duration-200 ${
                    location.pathname === item.href
                      ? "text-nexia-secondary"
                      : "hover:text-nexia-secondary"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
