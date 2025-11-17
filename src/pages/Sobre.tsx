import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Rocket, Users, Award, Globe, BookOpen, Heart, Target } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TimelineItem from "@/components/about/TimelineItem";

const Sobre = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const timeline = [
    {
      year: "1990",
      title: "O Início",
      description: "Martha Mendes funda o instituto com a visão de unir conhecimento científico e sabedoria espiritual, criando um espaço revolucionário para terapias integrativas.",
      icon: Sparkles,
    },
    {
      year: "1995",
      title: "Metodologia Psicobiosofia®",
      description: "Lançamento da metodologia pioneira que integra psicologia, biologia e filosofia, transformando a forma de promover autoconhecimento e desenvolvimento pessoal.",
      icon: Rocket,
    },
    {
      year: "2000",
      title: "Expansão Nacional",
      description: "O instituto expande suas atividades para várias regiões do Brasil, formando centenas de terapeutas e transformando vidas em diferentes estados.",
      icon: Globe,
    },
    {
      year: "2005",
      title: "Reconhecimento MEC",
      description: "Nossos cursos recebem reconhecimento do Ministério da Educação, consolidando nossa excelência acadêmica e compromisso com a qualidade educacional.",
      icon: Award,
    },
    {
      year: "2010",
      title: "10 Mil Alunos",
      description: "Alcançamos a marca de 10 mil profissionais formados, criando uma rede global de terapeutas comprometidos com a saúde integral e humanizada.",
      icon: Users,
    },
    {
      year: "2015",
      title: "Inovação Digital",
      description: "Lançamento da plataforma de ensino online, democratizando o acesso ao conhecimento e permitindo que alunos de todo o mundo estudem conosco.",
      icon: BookOpen,
    },
    {
      year: "2020",
      title: "Comunidade Global",
      description: "Formação de uma comunidade internacional de ex-alunos, criando uma rede de apoio e troca de conhecimentos que transcende fronteiras.",
      icon: Heart,
    },
    {
      year: "2025",
      title: "Futuro em Construção",
      description: "Continuamos evoluindo, integrando novas tecnologias e metodologias para formar os terapeutas do futuro, sempre com foco no ser humano integral.",
      icon: Target,
    },
  ];

  const values = [
    {
      title: "Amor e Compaixão",
      description: "A transformação acontece através do amor incondicional e da compaixão genuína.",
    },
    {
      title: "Comunidade",
      description: "Uma rede de apoio mútuo onde todos crescem juntos no caminho do autoconhecimento.",
    },
    {
      title: "Conhecimento",
      description: "Unimos sabedoria ancestral com ciência moderna para oferecer formação completa.",
    },
    {
      title: "Excelência",
      description: "Compromisso com a qualidade em cada detalhe, do conteúdo ao atendimento.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background">
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
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">Mais de 30 Anos de História</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight"
              >
                Nossa Jornada de
                <span className="block gradient-gold bg-clip-text text-transparent">Transformação</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-muted-foreground leading-relaxed mb-8"
              >
                Descubra como uma visão se transformou em um legado que impacta milhares de vidas ao redor do mundo.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section ref={containerRef} className="relative py-32 overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
                Linha do Tempo
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Uma jornada de décadas dedicada à excelência em educação e transformação humana
              </p>
            </motion.div>

            <div className="relative max-w-6xl mx-auto">
              {/* Vertical Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 -translate-x-1/2" />
              
              {/* Animated Progress Line */}
              <motion.div
                style={{ height: lineHeight }}
                className="absolute left-1/2 top-0 w-1 bg-gradient-gold -translate-x-1/2 shadow-glow"
              />

              {/* Timeline Items */}
              <div className="relative">
                {timeline.map((item, index) => (
                  <TimelineItem key={item.year} {...item} index={index} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
                Nossos Valores
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Os princípios que guiam cada passo da nossa jornada
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-background border border-primary/20 rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-all"
                >
                  <h3 className="text-2xl font-bold text-foreground mb-3 font-heading">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                Faça Parte da Nossa História
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Junte-se a milhares de profissionais que transformaram suas vidas através do conhecimento e da sabedoria.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/cursos">
                  <Button size="lg" className="gradient-gold text-white shadow-elegant hover:shadow-glow">
                    Conheça Nossos Cursos
                  </Button>
                </Link>
                <Link to="/metodologia">
                  <Button size="lg" variant="outline" className="border-2 border-primary">
                    Nossa Metodologia
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sobre;
