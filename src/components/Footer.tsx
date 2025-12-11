import { Facebook, Instagram, Linkedin } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [{
    icon: Facebook,
    href: "#",
    label: "Facebook"
  }, {
    icon: Instagram,
    href: "#",
    label: "Instagram"
  }, {
    icon: Linkedin,
    href: "#",
    label: "LinkedIn"
  }];
  return <footer className="bg-primary border-t border-secondary/20 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2">
            
            
          </a>

          {/* Copyright */}
          <p className="text-primary-foreground/60 text-sm text-center">
            © {currentYear} Studio Mais Luz. Todos os direitos reservados.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
          {socialLinks.map(social => <a key={social.label} href={social.href} aria-label={social.label} className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors bg-blue-500">
                <social.icon className="w-5 h-5 text-[#142952]" />
              </a>)}
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;