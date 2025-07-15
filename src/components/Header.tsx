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

const navigation = [
  { name: "Home", href: "/" },
  { name: "Nos domaines d'expertise", href: "/domaines-expertise" },
  { name: "Équipe dirigeante", href: "/equipe-dirigeante" },
  { 
    name: "Insights", 
    href: "#",
    dropdown: [
      { name: "Perspectives Mondiales", href: "/perspectives-mondiales" },
      { name: "Études de cas", href: "/etudes-de-cas" }
    ]
  },
  { name: "About", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isInsightsActive = location.pathname === "/perspectives-mondiales" || location.pathname === "/etudes-de-cas";

  return (
    <header className="bg-nexia-primary border-none">
      {/* Desktop Header */}
      <div className="mx-auto max-w-[1350px] px-6 lg:px-8 xl:px-0">
        <div className="flex items-end justify-between py-[30px] border-none">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="block">
              <img 
                src="/images/nexia-fiducia-maroc-logo.svg" 
                alt="Nexia Fiducia Maroc" 
                className="h-[60px] w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => {
              if (item.dropdown) {
                return (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger className={`flex items-center gap-1 text-white font-poppins font-medium pb-1 border-b-4 transition-colors duration-300 hover:border-nexia-secondary ${
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
                  className={`text-white font-poppins font-medium pb-1 border-b-4 transition-colors duration-300 ${
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