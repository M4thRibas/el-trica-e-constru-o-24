import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
const AboutSection = () => {
  const highlights = ["Mais de 15 anos de experiência no mercado", "Equipe técnica certificada e qualificada", "Materiais de primeira qualidade", "Garantia em todos os serviços", "Atendimento personalizado", "Orçamentos sem compromisso"];
  const stats = [{
    value: "500+",
    label: "Projetos Realizados"
  }, {
    value: "15+",
    label: "Anos de Experiência"
  }, {
    value: "100%",
    label: "Clientes Satisfeitos"
  }, {
    value: "24h",
    label: "Suporte Técnico"
  }];
  return <section id="sobre" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div>
            <span className="font-semibold text-sm uppercase tracking-wider text-blue-500">
              Sobre Nós
            </span>
            <h2 className="font-display text-4xl mt-2 mb-6 text-primary md:text-7xl">
              EXCELÊNCIA EM{" "}
              <span className="text-gradient text-blue-500">
CADA DETALHE</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              A EletroBuild é uma empresa especializada em construção civil e instalações 
              elétricas, atuando há mais de 15 anos no mercado com compromisso, qualidade 
              e profissionalismo.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Nossa equipe é formada por profissionais altamente qualificados e certificados, 
              prontos para transformar seus projetos em realidade com total segurança e 
              eficiência.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {highlights.map(item => <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#142952] flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>)}
            </div>

            <Button variant="secondary" size="lg" className="bg-sidebar-ring text-primary">
              Conheça Nossa História
            </Button>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => <div key={stat.label} className={`bg-card border border-border rounded-2xl p-8 text-center shadow-card ${index % 2 === 1 ? "mt-8" : ""}`}>
                <span className="font-display text-5xl md:text-6xl text-gradient block mb-2">
                  {stat.value}
                </span>
                <span className="text-muted-foreground font-medium">
                  {stat.label}
                </span>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;