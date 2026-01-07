import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/animations/PageTransition";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqCategories = [
    {
      category: "Sobre os Cursos",
      questions: [
        {
          question: "Os cursos são certificados?",
          answer: "Sim, todos os nossos cursos oferecem certificados de conclusão válidos em todo território nacional, seguindo padrões de excelência acadêmica."
        },
        {
          question: "Qual é a duração média dos cursos?",
          answer: "A duração varia de acordo com o curso. Cursos de extensão têm carga horária entre 40h e 180h, enquanto as pós-graduações têm duração de 18 a 24 meses."
        },
        {
          question: "Os cursos são presenciais ou online?",
          answer: "Oferecemos modalidades presenciais, online ao vivo e híbridas. Cada curso especifica suas modalidades disponíveis na página de detalhes."
        },
        {
          question: "Preciso ter formação prévia para me matricular?",
          answer: "Para cursos de extensão, não há pré-requisitos. Para pós-graduações, é necessário diploma de nível superior."
        }
      ]
    },
    {
      category: "Matrícula e Pagamento",
      questions: [
        {
          question: "Como faço para me matricular?",
          answer: "Você pode se inscrever diretamente pelo site clicando em 'Quero me inscrever' na página do curso desejado. Nossa equipe entrará em contato para finalizar o processo."
        },
        {
          question: "Quais são as formas de pagamento?",
          answer: "Aceitamos pagamento via PIX, boleto bancário, cartão de crédito (em até 12x) e débito em conta. Também oferecemos condições especiais para pagamento à vista."
        },
        {
          question: "Posso cancelar minha matrícula?",
          answer: "Sim, seguindo nossa política de cancelamento. Você tem até 7 dias após a matrícula para solicitar o cancelamento com reembolso integral, conforme o Código de Defesa do Consumidor."
        }
      ]
    },
    {
      category: "Certificação",
      questions: [
        {
          question: "Como recebo meu certificado?",
          answer: "O certificado digital é emitido automaticamente após a conclusão do curso e aprovação em todas as avaliações. Certificados impressos podem ser solicitados mediante pagamento de taxa."
        },
        {
          question: "O certificado é válido em todo o Brasil?",
          answer: "Sim, nossos certificados têm validade nacional e são emitidos seguindo os mais altos padrões de qualidade educacional."
        },
        {
          question: "Quanto tempo demora para receber o certificado?",
          answer: "O certificado digital é disponibilizado em até 30 dias após a conclusão do curso. Certificados impressos são enviados em até 60 dias."
        }
      ]
    },
    {
      category: "Metodologia Psicobiosofia®",
      questions: [
        {
          question: "O que é a Psicobiosofia®?",
          answer: "A Psicobiosofia® é nossa metodologia exclusiva que integra conhecimentos da psicologia, biologia e filosofia para promover o desenvolvimento humano integral."
        },
        {
          question: "Todos os cursos seguem essa metodologia?",
          answer: "Sim, a Psicobiosofia® é a base de todos os nossos cursos, garantindo uma abordagem integrativa e humanizada do conhecimento."
        },
        {
          question: "Posso aplicar a metodologia profissionalmente?",
          answer: "Sim, após concluir nossos cursos de formação, você estará habilitado a aplicar a metodologia em sua prática profissional."
        }
      ]
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
                Perguntas <span className="text-primary">Frequentes</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Encontre respostas para as dúvidas mais comuns sobre nossos cursos, metodologia e processos.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="mb-12"
              >
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                  {category.category}
                </h2>
                
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, index) => (
                    <AccordionItem key={index} value={`${categoryIndex}-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
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
              <MessageCircle className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                Não encontrou sua resposta?
              </h2>
              <p className="text-muted-foreground mb-8">
                Nossa equipe está pronta para ajudar você com qualquer dúvida adicional.
              </p>
              <Button asChild size="lg" className="shadow-elegant">
                <Link to="/contato">Entre em Contato</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default FAQ;
