import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const ContactSection = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const whatsappLink = "https://api.whatsapp.com/send/?phone=5551993325296&text&type=phone_number&app_absent=0";
  const contactInfo = [{
    icon: Phone,
    label: "Telefone",
    value: "(51) 99332-5296",
    href: whatsappLink
  }, {
    icon: Mail,
    label: "E-mail",
    value: "studiomaisluz@gmail.com",
    href: "mailto:studiomaisluz@gmail.com"
  }, {
    icon: MapPin,
    label: "Endereço",
    value: "Porto Alegre, RS - Brasil",
    href: "#"
  }, {
    icon: Clock,
    label: "Horário",
    value: "Seg - Sex: 8h às 18h",
    href: "#"
  }];
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve."
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <section id="contato" className="py-20 md:py-32 bg-hero">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-semibold text-sm uppercase tracking-wider text-sidebar-ring">
            Contato
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-primary-foreground mt-2 mb-4">
            VAMOS CONVERSAR SOBRE{" "}
            <span className="text-gradient text-blue-500">SEU PROJETO</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Entre em contato conosco e solicite um orçamento sem compromisso. 
            Estamos prontos para atender você!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <h3 className="font-display text-3xl text-primary-foreground mb-8">
              INFORMAÇÕES DE CONTATO
            </h3>
            <div className="space-y-6">
              {contactInfo.map(info => <a key={info.label} href={info.href} className="flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center transition-colors bg-sidebar-ring">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-primary-foreground/60 text-sm block">
                      {info.label}
                    </span>
                    <span className="text-primary-foreground font-medium text-lg group-hover:text-secondary transition-colors">
                      {info.value}
                    </span>
                  </div>
                </a>)}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <h3 className="font-display text-2xl text-card-foreground mb-6">
              SOLICITE UM ORÇAMENTO
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Input name="name" placeholder="Seu nome" value={formData.name} onChange={handleChange} required className="h-12" />
                </div>
                <div>
                  <Input name="phone" placeholder="Telefone" value={formData.phone} onChange={handleChange} required className="h-12" />
                </div>
              </div>
              <Input name="email" type="email" placeholder="E-mail" value={formData.email} onChange={handleChange} required className="h-12" />
              <Textarea name="message" placeholder="Descreva seu projeto ou necessidade..." value={formData.message} onChange={handleChange} required className="min-h-[120px] resize-none" />
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block w-full">
                <Button variant="secondary" size="lg" className="w-full text-primary bg-sidebar-ring" type="button">
                  Enviar Mensagem
                  <Send className="w-4 h-4" />
                </Button>
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;