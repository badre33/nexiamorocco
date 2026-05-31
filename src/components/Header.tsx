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
            {/* Language toggle for mobile - moved to top right near burger */}
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