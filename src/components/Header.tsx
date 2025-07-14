import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Nos domaines d'expertise", href: "/domaines-expertise" },
  { name: "Équipe dirigeante", href: "/equipe-dirigeante" },
  { name: "Perspectives mondiales", href: "/perspectives-mondiales" },
  { name: "About", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-nexia-primary border-none">
      {/* Desktop Header */}
      <div className="mx-auto max-w-[1350px] px-6 lg:px-8 xl:px-0">
        <div className="flex items-end justify-between py-[30px] border-none">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="block">
              <img 
                src="/images/2023-08-nexia-member-logo.svg" 
                alt="Nexia Templates" 
                className="h-[69px] w-auto"
                width="342"
                height="69"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-white font-poppins font-medium pb-1 border-b-4 transition-colors duration-300 ${
                  location.pathname === item.href
                    ? "border-nexia-secondary"
                    : "border-transparent hover:border-nexia-secondary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
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
        <div className="lg:hidden bg-nexia-primary">
          <div className="px-6 py-4 space-y-2">
            {navigation.map((item) => (
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
            ))}
          </div>
        </div>
      )}
    </header>
  );
}