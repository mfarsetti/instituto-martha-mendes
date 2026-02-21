import { Button } from "@/components/ui/button";
import { Presentation, Building2, Users, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { motion } from "framer-motion";
import somar from "@/assets/somar.jpeg";

const PalestrasConsultorias = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/5 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4"
              >
                <Presentation className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Levamos Conhecimento até Você
                </span>
              </motion.div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
                Palestras e Consultorias
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Nosso compromisso com a educação e pesquisa é um fator marcante na trajetória do 
                Instituto Martha Mendes. Por esse motivo consideramos que conectar mais mentes as 
                nossas seja o melhor caminho para que o conhecimento seja ampliado.
              </p>
            </div>
          </ScrollReveal>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Palestras Card */}
            <ScrollReveal delay={0.2}>
              <div className="bg-card rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-all duration-300 border-2 border-primary/20 hover:border-primary/40 group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl gradient-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Presentation className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                      Palestras Corporativas
                    </h3>
                    <p className="text-muted-foreground">
                      Inspire sua equipe com palestras transformadoras
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <Sparkles className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Temas personalizados para sua empresa</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <Sparkles className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Metodologia comprovada e inovadora</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <Sparkles className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Profissionais com vasta experiência</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Consultorias Card */}
            <ScrollReveal delay={0.3}>
              <div className="bg-card rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-all duration-300 border-2 border-secondary/20 hover:border-secondary/40 group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl gradient-purple flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                      Consultorias Especializadas
                    </h3>
                    <p className="text-muted-foreground">
                      Soluções personalizadas para seu negócio
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <Sparkles className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Diagnóstico completo e personalizado</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <Sparkles className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Estratégias práticas e aplicáveis</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <Sparkles className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Acompanhamento e suporte contínuo</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>

          {/* Parceria */}
          <ScrollReveal delay={0.4}>
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 mb-8 border border-primary/20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-4">
                    <Users className="w-12 h-12 text-primary" />
                    <div className="w-12 h-12 rounded-xl overflow-hidden border border-primary/20 shadow-soft bg-background">
                      <img
                        src={somar}
                        alt="Instituto Somar"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-primary mb-1">Parceria</p>
                    <p className="font-heading text-2xl font-bold text-foreground">
                      Instituto Somar
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground text-center md:text-right max-w-md">
                  Trabalhamos em parceria com o Instituto Somar para levar ainda mais qualidade e excelência aos nossos serviços
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal delay={0.5}>
            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Deseja uma palestra ou consultoria para sua empresa?
              </p>
              <Link to="/contato">
                <Button 
                  size="lg" 
                  className="gradient-gold text-white shadow-elegant hover:shadow-glow transition-all group px-10 h-14 text-base font-semibold"
                >
                  Peça uma visita à sua empresa
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default PalestrasConsultorias;
