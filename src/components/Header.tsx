import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-studio-mais-luz-transparent.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [{
    label: "Início",
    href: "#inicio"
  }, {
    label: "Serviços",
    href: "#servicos"
  }, {
    label: "Sobre",
    href: "#sobre"
  }, {
    label: "Contato",
    href: "#contato"
  }];
  return <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-secondary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center group">
            <img src={logo} alt="Studio Mais Luz" className="h-12 md:h-14 w-auto" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(item => <a key={item.label} href={item.href} className="text-primary-foreground/80 hover:text-[#3b82f6] transition-colors font-medium">
                {item.label}
              </a>)}
            <Button variant="hero" size="lg" className="bg-primary-foreground text-primary">
              Orçamento Grátis
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-primary-foreground p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && <nav className="md:hidden py-4 border-t border-secondary/20 animate-fade-in">
            {navItems.map(item => <a key={item.label} href={item.href} className="block py-3 text-primary-foreground/80 hover:text-secondary transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </a>)}
            <Button variant="hero" className="w-full mt-4">
              Orçamento Grátis
            </Button>
          </nav>}
      </div>
    </header>;
};
export default Header;