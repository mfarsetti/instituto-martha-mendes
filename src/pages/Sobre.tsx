import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Users, BookOpen, Award } from "lucide-react";
import aboutBg from "@/assets/about-bg.jpg";

const Sobre = () => {
  const values = [
    {
      icon: Heart,
      title: "Amor e Compaixão",
      description: "Acreditamos que a transformação acontece através do amor incondicional e da compaixão genuína.",
    },
    {
      icon: Users,
      title: "Comunidade",
      description: "Criamos uma rede de apoio mútuo onde todos crescem juntos no caminho do autoconhecimento.",
    },
    {
      icon: BookOpen,
      title: "Conhecimento",
      description: "Unimos sabedoria ancestral com ciência moderna para oferecer formação completa e atualizada.",
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Compromisso com a qualidade em cada detalhe, desde o conteúdo até o atendimento ao aluno.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={aboutBg} alt="Sobre" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-medium text-primary">Nossa História</span>
              </div>
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
                Sobre o Instituto
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Há mais de três décadas dedicados à formação de profissionais em terapias integrativas e desenvolvimento humano integral.
              </p>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  O Instituto Martha Mendes nasceu da visão de criar um espaço onde o conhecimento científico e a sabedoria espiritual pudessem se encontrar, proporcionando uma formação completa para aqueles que desejam atuar no campo das terapias integrativas.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Fundado pela renomada terapeuta e pesquisadora Martha Mendes, o instituto pioneirou a metodologia Psicobiosofia®, uma abordagem revolucionária que integra psicologia, biologia e filosofia para promover o autoconhecimento e a transformação pessoal.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ao longo dos anos, formamos mais de 10 mil profissionais que hoje atuam em diversas partes do Brasil e do mundo, levando os princípios de uma saúde integral e humanizada para milhares de pessoas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-heading text-4xl font-bold text-foreground mb-6">
                    Nossa Missão
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Formar profissionais qualificados em terapias integrativas, oferecendo conhecimento científico aliado à sabedoria milenar, promovendo saúde, bem-estar e transformação pessoal através da educação de excelência.
                  </p>
                  <Link to="/metodologia">
                    <Button className="gradient-gold text-white shadow-elegant">
                      Conheça a Psicobiosofia®
                    </Button>
                  </Link>
                </div>
                <div className="relative">
                  <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 p-8 shadow-elegant">
                    <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="text-6xl font-heading font-bold gradient-gold bg-clip-text text-transparent mb-4">
                          30+
                        </div>
                        <p className="text-lg text-muted-foreground">
                          Anos de Excelência em Educação
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <SectionHeading
                title="Nossos Valores"
                subtitle="Os princípios que guiam nossa jornada"
                centered
                className="mb-16"
              />

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <div
                    key={value.title}
                    className="text-center animate-fadeIn"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-16 h-16 rounded-2xl gradient-gold flex items-center justify-center mx-auto mb-4 shadow-soft">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-4xl font-bold text-foreground mb-6">
                Faça Parte da Nossa História
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Junte-se a milhares de alunos que transformaram suas vidas e carreiras através dos nossos cursos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/cursos">
                  <Button size="lg" className="gradient-gold text-white shadow-elegant">
                    Ver Cursos Disponíveis
                  </Button>
                </Link>
                <Link to="/contato">
                  <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
                    Fale Conosco
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

export default Sobre;
