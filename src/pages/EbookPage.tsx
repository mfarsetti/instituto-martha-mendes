import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  BookOpen, 
  Star, 
  Check, 
  Download,
  ShoppingCart,
  Sparkles,
  FileText,
  Award
} from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

import ebook from "@/assets/ebook/ebook.png";

const EbookPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Pedido registrado!", {
      description: "Em breve entraremos em contato para finalizar sua compra.",
    });
    setFormData({ name: "", email: "" });
  };

  const benefits = [
    "Lorem ipsum dolor sit amet consectetur",
    "Adipiscing elit sed do eiusmod tempor",
    "Incididunt ut labore et dolore magna",
    "Aliqua enim ad minim veniam quis",
    "Nostrud exercitation ullamco laboris",
    "Nisi ut aliquip ex ea commodo consequat"
  ];

  const whatYouWillLearn = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "Sed do eiusmod tempor incididunt ut labore",
    "Dolore magna aliqua. Ut enim ad minim veniam",
    "Quis nostrud exercitation ullamco laboris nisi",
    "Ut aliquip ex ea commodo consequat duis",
    "Aute irure dolor in reprehenderit in voluptate"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/10 to-background">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(194,168,110,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(108,78,210,0.15),transparent_50%)]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left - Image */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={ebook}
                      alt="E-book Como Atrair Prosperidade e Abundância"
                      className="w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=1200&fit=crop";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  
                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="absolute -bottom-6 -right-6 bg-primary text-white rounded-2xl p-6 shadow-2xl"
                  >
                    <div className="text-center">
                      <p className="text-sm font-medium mb-1">Lançamento 2023</p>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-white" />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Right - Content */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">E-book Digital</span>
                  </div>

                  <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                    Como Atrair Prosperidade e Abundância
                  </h1>

                  <p className="text-xl text-muted-foreground leading-relaxed">
                    A Jornada em Busca da Consciência
                  </p>

                  <div className="flex items-center gap-4 py-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <span className="text-muted-foreground">Classificação 5.0</span>
                  </div>

                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 border border-primary/20">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-bold text-foreground">R$ 47,00</span>
                      <span className="text-lg text-muted-foreground line-through">R$ 97,00</span>
                    </div>
                    <p className="text-sm text-primary font-medium">Oferta por tempo limitado!</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="#comprar" className="flex-1">
                      <Button 
                        size="lg" 
                        className="w-full gradient-gold text-white shadow-elegant hover:shadow-glow transition-all group h-14 text-base font-semibold"
                      >
                        <ShoppingCart className="mr-2 w-5 h-5" />
                        Comprar Agora
                      </Button>
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  O que você vai encontrar neste e-book
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-soft hover:shadow-elegant transition-all border border-border"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-foreground">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Content Preview */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
                  <FileText className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-medium text-secondary">Conteúdo</span>
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  O que você vai aprender
                </h2>
              </div>

              <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elegant">
                <div className="space-y-4">
                  {whatYouWillLearn.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <p className="text-foreground pt-1">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Author */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 border border-primary/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-foreground">Martha Mendes</h3>
                    <p className="text-primary font-medium">Autora</p>
                  </div>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Purchase Form */}
        <section id="comprar" className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Garanta seu E-book Agora
                </h2>
                <p className="text-lg text-muted-foreground">
                  Preencha o formulário e entraremos em contato para finalizar sua compra
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-elegant border-2 border-primary/20">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Nome Completo *
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12 border-2 focus:border-primary"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      E-mail *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-12 border-2 focus:border-primary"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-foreground font-medium">E-book Digital</span>
                      <span className="text-2xl font-bold text-foreground">R$ 47,00</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Pagamento processado de forma segura
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full gradient-gold text-white font-semibold py-6 text-lg hover:opacity-90 transition-opacity"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Solicitar Compra
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    Ao solicitar, você concorda com nossos termos de uso e política de privacidade
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EbookPage;
