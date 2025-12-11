import { Zap, Building2, Wrench, Lightbulb, ShieldCheck, Gauge } from "lucide-react";
const ServicesSection = () => {
  const services = [{
    icon: Zap,
    title: "Instalação Elétrica",
    description: "Instalações elétricas residenciais, comerciais e industriais com total segurança e conformidade com normas técnicas."
  }, {
    icon: Building2,
    title: "Construção Civil",
    description: "Projetos de construção completos, desde a fundação até o acabamento, com materiais de primeira qualidade."
  }, {
    icon: Wrench,
    title: "Manutenção Predial",
    description: "Serviços de manutenção preventiva e corretiva para manter seu imóvel sempre em perfeitas condições."
  }, {
    icon: Lightbulb,
    title: "Projetos Luminotécnicos",
    description: "Design de iluminação personalizado para valorizar ambientes e otimizar o consumo de energia."
  }, {
    icon: ShieldCheck,
    title: "Laudos e Certificações",
    description: "Emissão de laudos técnicos e certificações de conformidade para instalações elétricas."
  }, {
    icon: Gauge,
    title: "Automação Residencial",
    description: "Soluções inteligentes para automatizar sua casa ou empresa, proporcionando conforto e economia."
  }];
  return <section id="servicos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-semibold text-sm uppercase tracking-wider text-sidebar-ring">
            Nossos Serviços
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mt-2 mb-4">
            SOLUÇÕES COMPLETAS PARA{" "}
            <span className="text-gradient text-sidebar-ring">SUA OBRA</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos uma ampla gama de serviços especializados em construção civil e 
            instalações elétricas, sempre com foco em qualidade e segurança.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {})}
        </div>
      </div>
    </section>;
};
export default ServicesSection;