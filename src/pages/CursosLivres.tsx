import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { BookOpen, Scale, CheckCircle2, FileText, Award } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";

const CursosLivres = () => {
  const features = [
    {
      icon: CheckCircle2,
      title: "Sem Exigência de Escolaridade",
      description: "Não há necessidade de comprovação de escolaridade prévia para realizar cursos livres."
    },
    {
      icon: FileText,
      title: "Carga Horária Flexível",
      description: "Duração variável conforme o conteúdo e objetivos do curso."
    },
    {
      icon: Award,
      title: "Certificação Válida",
      description: "Certificados emitidos são válidos para diversos fins, como comprovação de capacitação profissional."
    },
    {
      icon: Scale,
      title: "Amparo Legal",
      description: "Previstos pelo Decreto Presidencial nº 5.154/2004 e pela Lei nº 9.394/96."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(194,168,110,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(108,78,210,0.1),transparent_50%)]" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center space-x-2 bg-white/10 border border-primary/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm"
              >
                <Scale className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">Legislação Educacional</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-heading text-5xl md:text-6xl font-bold mb-6 leading-tight"
              >
                <span className="text-foreground">Cursos </span>
                <span className="text-primary">Livres</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-muted-foreground leading-relaxed"
              >
                Entenda a legislação e os benefícios da modalidade de educação profissional não-formal
              </motion.p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elegant border-2 border-primary/20 mb-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-xl gradient-gold flex items-center justify-center">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="font-heading text-3xl font-bold text-foreground">
                        O que são Cursos Livres?
                      </h2>
                    </div>
                  </div>
                  
                  <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
                    <p>
                      Os cursos livres, previstos pelo <strong className="text-foreground">Decreto Presidencial nº 5.154/2004</strong> e pela <strong className="text-foreground">Lei nº 9.394/96</strong>, integram a modalidade de educação profissional não-formal. São de duração variável e têm o objetivo de oferecer rápida qualificação, atualização ou profissionalização, sem exigência de escolaridade prévia.
                    </p>
                    
                    <p>
                      A Constituição Federal garante a educação como direito de todos e assegura a liberdade de ensinar e aprender. Os cursos livres não necessitam de autorização ou reconhecimento prévios do Conselho de Educação competente e não possuem regulação específica pelo Ministério da Educação (MEC), nem vínculo ou reconhecimento do MEC/CAPES.
                    </p>
                    
                    <p>
                      Nessa modalidade, a carga horária, disciplinas, tempo de duração e exigência de diploma anterior são flexíveis. Abrangem áreas como Informática, Atendimento, Idiomas, Culinária e Beleza, entre outras. Escolas, cooperativas, empresas e profissionais autônomos podem ofertar esses cursos e emitir certificados válidos para diversos fins, embora não possam ser validados por instituições reconhecidas pelo MEC/CAPES.
                    </p>
                    
                    <p>
                      A jurisprudência do Conselho Nacional de Educação aceita a equivalência desses certificados, conforme regras amplas e flexíveis.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {features.map((feature, index) => (
                  <ScrollReveal key={index} delay={index * 0.1}>
                    <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-elegant transition-all border border-border">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg gradient-purple flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Legal Framework */}
              <ScrollReveal delay={0.4}>
                <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl p-8 border border-secondary/20">
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <Scale className="w-7 h-7 text-secondary" />
                    Base Legal
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white/50 dark:bg-black/20 rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-2">Decreto Presidencial nº 5.154/2004</h4>
                      <p className="text-sm text-muted-foreground">
                        Regulamenta o § 2º do art. 36 e os arts. 39 a 41 da Lei nº 9.394, de 20 de dezembro de 1996, que estabelece as diretrizes e bases da educação nacional.
                      </p>
                    </div>
                    <div className="bg-white/50 dark:bg-black/20 rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-2">Lei nº 9.394/96 (LDB)</h4>
                      <p className="text-sm text-muted-foreground">
                        Estabelece as diretrizes e bases da educação nacional, garantindo a liberdade de ensinar e aprender.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Source */}
              <ScrollReveal delay={0.5}>
                <div className="mt-8 text-center">
                  <p className="text-sm text-muted-foreground">
                    Fonte de consulta:{" "}
                    <a 
                      href="https://cursosposgraduacaoonline.com.br/noticias/legislacao-cursos-livres-capacitacao-profissional" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Legislação Cursos Livres e Capacitação Profissional
                    </a>
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CursosLivres;
