import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/animations/PageTransition";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BlogPost = () => {
  const { id } = useParams();
  const { toast } = useToast();

  // Mock data - em produção viria de uma API ou CMS
  const post = {
    id: id,
    title: "O Poder Transformador das Terapias Integrativas",
    author: "Dra. Martha Mendes",
    date: "15 de Novembro, 2024",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200",
    category: "Terapias Integrativas",
    content: `
      <h2>Introdução</h2>
      <p>As terapias integrativas representam uma abordagem revolucionária no cuidado com a saúde e o bem-estar humano. Ao contrário do modelo tradicional que foca apenas nos sintomas físicos, estas práticas consideram o ser humano em sua totalidade – corpo, mente e espírito.</p>

      <h2>O Que São Terapias Integrativas?</h2>
      <p>Terapias integrativas são práticas terapêuticas que complementam o tratamento convencional, promovendo o equilíbrio e a harmonia do indivíduo. Elas incluem técnicas milenares e contemporâneas como:</p>
      <ul>
        <li>Acupuntura e medicina tradicional chinesa</li>
        <li>Aromaterapia e florais</li>
        <li>Meditação e mindfulness</li>
        <li>Reiki e terapias energéticas</li>
        <li>Yoga e práticas corporais</li>
      </ul>

      <h2>Benefícios Comprovados</h2>
      <p>Estudos científicos têm demonstrado consistentemente os benefícios das terapias integrativas em diversas condições:</p>
      
      <h3>Saúde Mental</h3>
      <p>Redução significativa de sintomas de ansiedade, depressão e estresse. A integração de práticas como meditação e yoga tem mostrado resultados comparáveis a tratamentos farmacológicos em casos leves a moderados.</p>

      <h3>Dor Crônica</h3>
      <p>Técnicas como acupuntura e massoterapia têm demonstrado eficácia no manejo de dores crônicas, reduzindo a necessidade de medicação analgésica.</p>

      <h3>Qualidade de Vida</h3>
      <p>Pacientes que incorporam terapias integrativas em seu tratamento relatam melhor qualidade de sono, mais energia e maior sensação de bem-estar geral.</p>

      <h2>A Abordagem Psicobiosofia®</h2>
      <p>No Instituto Martha Mendes, desenvolvemos a metodologia Psicobiosofia®, que integra conhecimentos da psicologia, biologia e filosofia em uma abordagem única. Esta metodologia considera:</p>
      
      <ul>
        <li><strong>Dimensão Psicológica:</strong> Compreensão dos processos mentais e emocionais</li>
        <li><strong>Dimensão Biológica:</strong> Respeito aos processos naturais do corpo</li>
        <li><strong>Dimensão Filosófica:</strong> Busca por sentido e propósito existencial</li>
      </ul>

      <h2>Evidências Científicas</h2>
      <p>A Organização Mundial da Saúde (OMS) reconhece oficialmente diversas práticas integrativas e complementares. No Brasil, o SUS oferece 29 Práticas Integrativas e Complementares em Saúde (PICS), demonstrando o reconhecimento institucional destas abordagens.</p>

      <p>Pesquisas recentes mostram que:</p>
      <ul>
        <li>70% dos pacientes que utilizam terapias integrativas relatam melhora significativa</li>
        <li>Redução de até 40% no uso de medicamentos quando combinadas com tratamento convencional</li>
        <li>Aumento de 60% na adesão ao tratamento de doenças crônicas</li>
      </ul>

      <h2>Como Começar</h2>
      <p>Se você se interessa por esta área transformadora, o Instituto Martha Mendes oferece cursos de formação completos em terapias integrativas. Nossa abordagem combina teoria fundamentada cientificamente com prática supervisionada, preparando profissionais éticos e competentes.</p>

      <h2>Conclusão</h2>
      <p>As terapias integrativas não são apenas uma tendência, mas uma resposta às necessidades humanas fundamentais de cuidado holístico. Elas nos lembram que somos seres multidimensionais que merecem um cuidado que vá além do sintoma, alcançando as raízes do desequilíbrio e promovendo verdadeira transformação.</p>

      <p>O futuro da saúde está na integração – unindo o melhor da medicina convencional com as sabedorias ancestrais e as descobertas contemporâneas sobre o ser humano integral.</p>
    `
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: post.title,
          url: window.location.href,
        });
        toast({
          title: "Compartilhado!",
          description: "Artigo compartilhado com sucesso.",
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast({
          title: "Link copiado!",
          description: "O link do artigo foi copiado para a área de transferência.",
        });
      }
    } catch (error) {
      // Se o usuário cancelar o compartilhamento ou houver erro
      if (error instanceof Error && error.name !== 'AbortError') {
        toast({
          title: "Erro",
          description: "Não foi possível compartilhar o artigo.",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-12">
          <div className="container mx-auto px-4">
            <Link to="/blog">
              <Button variant="ghost" className="mb-8">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar para o Blog
              </Button>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                {post.category}
              </span>
              
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime} de leitura</span>
                </div>
              </div>

              <Button onClick={handleShare} variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Compartilhar
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="pb-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-elegant"
              />
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-3xl mx-auto prose prose-xl prose-headings:font-heading prose-h2:text-3xl prose-h2:font-bold prose-h2:text-foreground prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:font-semibold prose-h3:text-foreground prose-h3:mt-8 prose-h3:mb-4 prose-p:text-muted-foreground prose-p:text-lg prose-p:leading-relaxed prose-p:mb-6 prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-strong:font-semibold prose-ul:text-muted-foreground prose-ul:text-lg prose-ul:my-6 prose-li:mb-3 prose-li:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                Gostou deste conteúdo?
              </h2>
              <p className="text-muted-foreground mb-8">
                Explore nossos cursos e mergulhe profundamente no universo das terapias integrativas.
              </p>
              <Button asChild size="lg" className="shadow-elegant">
                <Link to="/cursos">Ver Nossos Cursos</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default BlogPost;
