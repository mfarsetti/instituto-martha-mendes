import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";

const Contato = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock submission
    toast.success("Mensagem enviada com sucesso!", {
      description: "Responderemos em breve. Obrigado pelo contato!",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@institutomarthamendes.com.br",
      link: "mailto:contato@institutomarthamendes.com.br",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(11) 98765-4321",
      link: "tel:+5511987654321",
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Av. Paulista, 1000 - São Paulo, SP",
      link: "https://maps.google.com",
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Seg-Sex: 9h-18h | Sáb: 9h-13h",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Fale Conosco</span>
              </div>
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
                Entre em Contato
              </h1>
              <p className="text-xl text-muted-foreground">
                Estamos prontos para esclarecer suas dúvidas e ajudá-lo em sua jornada
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div>
                  <SectionHeading
                    title="Envie sua Mensagem"
                    subtitle="Preencha o formulário e retornaremos em breve"
                    className="mb-8"
                  />

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Nome Completo *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Seu nome"
                          className="h-12"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          E-mail *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="seu@email.com"
                          className="h-12"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Telefone
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(11) 98765-4321"
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                          Assunto *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Assunto da mensagem"
                          className="h-12"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Mensagem *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Digite sua mensagem..."
                        rows={6}
                        className="resize-none"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full gradient-gold text-white shadow-elegant hover:shadow-glow transition-all group"
                    >
                      <Send className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      Enviar Mensagem
                    </Button>
                  </form>
                </div>

                {/* Contact Info */}
                <div className="lg:pl-8">
                  <SectionHeading
                    title="Informações de Contato"
                    subtitle="Outras formas de entrar em contato"
                    className="mb-8"
                  />

                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div
                        key={info.title}
                        className="flex items-start space-x-4 p-6 bg-card rounded-xl shadow-soft hover:shadow-elegant transition-all animate-fadeIn"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                            {info.title}
                          </h3>
                          {info.link ? (
                            <a
                              href={info.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{info.content}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Map Placeholder */}
                  <div className="mt-8 rounded-2xl overflow-hidden shadow-elegant h-64 bg-muted">
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                      <div className="text-center">
                        <MapPin className="w-12 h-12 mx-auto mb-2 text-primary" />
                        <p>Mapa Interativo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Quick Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <SectionHeading
                title="Perguntas Frequentes"
                subtitle="Confira as respostas para as dúvidas mais comuns"
                centered
                className="mb-8"
              />
              <p className="text-muted-foreground mb-6">
                Antes de entrar em contato, que tal verificar nossa seção de perguntas frequentes? Você pode encontrar a resposta que procura lá.
              </p>
              <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
                Ver FAQ Completo
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contato;
