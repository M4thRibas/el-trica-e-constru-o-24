import { CheckCircle2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const highlights = [
    "Equipe técnica certificada e qualificada",
    "Materiais de primeira qualidade",
    "Garantia em todos os serviços",
    "Atendimento personalizado",
    "Orçamentos sem compromisso"
  ];

  return (
    <section id="sobre" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div>
            <span className="font-semibold text-sm uppercase tracking-wider text-[#3b82f6]">
              Sobre Nós
            </span>
            <h2 className="font-display text-4xl mt-2 mb-6 text-primary md:text-6xl">
              EXCELÊNCIA EM{" "}
              <span className="text-[#3b82f6]">CADA DETALHE</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              O Studio Mais Luz é uma empresa especializada em construção civil e instalações 
              elétricas, atuando com compromisso, qualidade e profissionalismo.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Nossa equipe é formada por profissionais altamente qualificados e certificados, 
              prontos para transformar seus projetos em realidade com total segurança e 
              eficiência.
            </p>

            {/* Highlights */}
            <div className="space-y-4 mb-8">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-6 h-6 rounded-full bg-[#3b82f6]/10 flex items-center justify-center group-hover:bg-[#3b82f6]/20 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-[#3b82f6]" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-[#3b82f6] text-white hover:bg-[#3b82f6]/90 transition-all duration-300 hover:shadow-lg hover:shadow-[#3b82f6]/25"
            >
              Conheça Nossa História
            </Button>
          </div>

          {/* Right Column - Featured Stat */}
          <div className="flex items-center justify-center">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/20 to-[#3b82f6]/5 rounded-full blur-3xl scale-150" />
              
              {/* Main stat card */}
              <div className="relative bg-gradient-to-br from-card to-card/80 border border-border rounded-3xl p-12 md:p-16 text-center shadow-2xl">
                {/* Stars decoration */}
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                
                <span className="font-display text-7xl md:text-8xl bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] bg-clip-text text-transparent block mb-3">
                  100%
                </span>
                <span className="text-xl md:text-2xl text-foreground font-medium block mb-2">
                  Clientes Satisfeitos
                </span>
                <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                  Nosso compromisso é com a sua total satisfação em cada projeto
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;