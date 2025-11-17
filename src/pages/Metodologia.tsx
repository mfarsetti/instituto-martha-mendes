import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Brain, Heart, Sparkles, BookOpen, Users, Target } from "lucide-react";

const Metodologia = () => {
  const pillars = [
    {
      icon: Brain,
      title: "Psicologia",
      description: "Compreensão profunda dos processos mentais, emocionais e comportamentais do ser humano.",
    },
    {
      icon: Heart,
      title: "Biologia",
      description: "Conhecimento do funcionamento biológico e energético do corpo humano.",
    },
    {
      icon: Sparkles,
      title: "Filosofia",
      description: "Reflexões existenciais e espirituais sobre o propósito e sentido da vida.",
    },
  ];

  const benefits = [
    "Autoconhecimento profundo e transformação pessoal",
    "Integração entre corpo, mente e espírito",
    "Desenvolvimento de consciência expandida",
    "Cura de traumas e padrões limitantes",
    "Conexão com seu propósito de vida",
    "Equilíbrio emocional e bem-estar integral",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10" />
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <Target className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Metodologia Exclusiva</span>
              </div>
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
                Psicobiosofia<span className="text-primary">®</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Uma abordagem revolucionária que integra psicologia, biologia e filosofia para o autoconhecimento e transformação integral do ser humano.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  A Psicobiosofia® é uma metodologia exclusiva desenvolvida pela Dra. Martha Mendes ao longo de mais de 30 anos de pesquisa e prática clínica. Esta abordagem inovadora une três pilares fundamentais do conhecimento humano para promover uma compreensão holística e profunda do ser.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Diferente de outras metodologias que trabalham aspectos isolados, a Psicobiosofia® reconhece que o ser humano é uma unidade indivisível, onde corpo, mente e espírito estão intrinsecamente conectados e influenciam-se mutuamente.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Através desta integração, alcançamos níveis de cura e transformação que vão muito além do convencional, acessando as camadas mais profundas da consciência e promovendo mudanças duradouras e significativas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Three Pillars */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <SectionHeading
                title="Os Três Pilares"
                subtitle="A base que sustenta a metodologia Psicobiosofia®"
                centered
                className="mb-16"
              />

              <div className="grid md:grid-cols-3 gap-8">
                {pillars.map((pillar, index) => (
                  <div
                    key={pillar.title}
                    className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 text-center animate-fadeIn"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-20 h-20 rounded-full gradient-gold flex items-center justify-center mx-auto mb-6 shadow-soft">
                      <pillar.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <SectionHeading
                title="Como Funciona"
                subtitle="O processo de transformação através da Psicobiosofia®"
                centered
                className="mb-16"
              />

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center flex-shrink-0 shadow-soft">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                        Avaliação Integral
                      </h3>
                      <p className="text-muted-foreground">
                        Análise completa dos aspectos psicológicos, biológicos e existenciais do indivíduo.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg gradient-purple flex items-center justify-center flex-shrink-0 shadow-soft">
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                        Integração Consciente
                      </h3>
                      <p className="text-muted-foreground">
                        Trabalho profundo para integrar as descobertas e promover a cura em múltiplas dimensões.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg gradient-mixed flex items-center justify-center flex-shrink-0 shadow-soft">
                      <span className="text-white font-bold text-lg">3</span>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                        Transformação Duradoura
                      </h3>
                      <p className="text-muted-foreground">
                        Consolidação das mudanças e desenvolvimento de novos padrões saudáveis e conscientes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 p-8 shadow-elegant">
                    <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center p-8">
                      <div className="text-center">
                        <BookOpen className="w-20 h-20 text-primary mx-auto mb-6" />
                        <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                          Metodologia Científica
                        </h3>
                        <p className="text-muted-foreground">
                          Validada por pesquisas acadêmicas e resultados comprovados em milhares de atendimentos.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <SectionHeading
                title="Benefícios"
                subtitle="O que você pode alcançar com a Psicobiosofia®"
                centered
                className="mb-12"
              />

              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 bg-card p-4 rounded-xl shadow-soft hover:shadow-elegant transition-all animate-fadeIn"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="w-6 h-6 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Users className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="font-heading text-4xl font-bold text-foreground mb-6">
                Aprenda a Psicobiosofia®
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Torne-se um profissional certificado nesta metodologia transformadora e leve cura e consciência para milhares de pessoas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/cursos">
                  <Button size="lg" className="gradient-gold text-white shadow-elegant">
                    Ver Curso de Psicobiosofia®
                  </Button>
                </Link>
                <Link to="/contato">
                  <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
                    Saiba Mais
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Metodologia;
