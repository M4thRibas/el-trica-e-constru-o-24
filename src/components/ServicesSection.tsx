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
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-card to-card/80 border border-border hover:border-[#3b82f6]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#3b82f6]/10 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Decorative gradient */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#3b82f6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3b82f6]/20 to-[#3b82f6]/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-[#3b82f6]" />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-4 group-hover:text-[#3b82f6] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>;
};
export default ServicesSection;