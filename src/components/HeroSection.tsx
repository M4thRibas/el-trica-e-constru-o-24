import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";
const HeroSection = () => {
  const features = [{
    icon: Shield,
    label: "Segurança Garantida"
  }, {
    icon: Clock,
    label: "Pontualidade"
  }, {
    icon: Award,
    label: "Qualidade Premium"
  }];
  return <section id="inicio" className="relative min-h-screen flex items-center bg-hero overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Serviços de construção e instalação elétrica" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="text-secondary text-sm font-medium">Mais de 500 projetos realizados</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-primary-foreground leading-none mb-6 animate-fade-in" style={{
          animationDelay: "0.1s"
        }}>
            CONSTRUÇÃO &{" "}
            <span className="text-gradient text-sidebar-ring bg-primary">INSTALAÇÃO ELÉTRICA</span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/70 max-w-2xl mb-8 animate-fade-in" style={{
          animationDelay: "0.2s"
        }}>
            Transformamos projetos em realidade com excelência, segurança e compromisso. 
            Soluções completas para sua obra.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{
          animationDelay: "0.3s"
        }}>
            <Button variant="hero" size="xl" className="text-primary-foreground bg-sidebar-ring">
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl" className="text-primary-foreground border bg-sidebar-ring border-primary-foreground">
              Nossos Serviços
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{
          animationDelay: "0.4s"
        }}>
            {features.map(({
            icon: Icon,
            label
          }) => <div key={label} className="flex items-center gap-2 bg-primary-foreground/5 border border-primary-foreground/10 rounded-full px-4 py-2">
                <Icon className="w-4 h-4 text-[#3b82f6]" />
                <span className="text-primary-foreground/80 text-sm">{label}</span>
              </div>)}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-[#3b82f6] rounded-full" />
        </div>
      </div>
    </section>;
};
export default HeroSection;