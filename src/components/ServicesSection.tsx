import { Zap, Building2, Lightbulb, Gauge } from "lucide-react";
const ServicesSection = () => {
  const services = [{
    icon: Zap,
    title: "Instalação Elétrica",
    description: "Instalações elétricas residenciais, comerciais e industriais com total segurança e conformidade com normas técnicas."
  }, {
    icon: Lightbulb,
    title: "Projetos Luminotécnicos",
    description: "Design de iluminação personalizado para valorizar ambientes e otimizar o consumo de energia."
  }, {
    icon: Gauge,
    title: "Automação Residencial",
    description: "Soluções inteligentes para automatizar sua casa ou empresa, proporcionando conforto e economia."
  }, {
    icon: Building2,
    title: "Construção a Seco",
    description: "Sistemas construtivos modernos com drywall e steel frame, oferecendo agilidade, limpeza e excelente acabamento."
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
            <span className="text-gradient text-blue-500">SUA OBRA</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos uma ampla gama de serviços especializados em construção civil e 
            instalações elétricas, sempre com foco em qualidade e segurança.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-[#142952]" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>;
};
export default ServicesSection;