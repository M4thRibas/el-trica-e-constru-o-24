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
          {services.map((service, index) => <div key={service.title} className="group bg-card border border-border rounded-2xl p-8 hover:border-secondary/50 hover:shadow-card transition-all duration-300 hover:-translate-y-1" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all bg-blue-500">
                <service.icon className="w-7 h-7 text-[#142952]" />
              </div>
              <h3 className="font-display text-2xl text-card-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default ServicesSection;