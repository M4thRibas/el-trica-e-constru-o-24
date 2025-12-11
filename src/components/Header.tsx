import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
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
          <a href="#inicio" className="flex items-center gap-2 group">
            
            <span className="font-display text-2xl text-primary-foreground tracking-wide">
            <span className="text-secondary"></span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(item => <a key={item.label} href={item.href} className="text-primary-foreground/80 hover:text-secondary transition-colors font-medium border-[#162a51]">
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