import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Clock,
  Award,
  Users,
  Calendar,
  BookOpen,
  CheckCircle2,
  ArrowLeft,
  Mail,
} from "lucide-react";
import { toast } from "sonner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CursoDetalhes = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Mock course data
  const course = {
    id: 1,
    title: "Florais de Bach",
    category: "Terapia Floral",
    modality: "Online",
    duration: "120 horas",
    certification: "Certificado reconhecido pelo MEC",
    students: 2500,
    price: "R$ 1.997,00",
    installments: "12x de R$ 166,42",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1600&h=900&fit=crop",
    description:
      "Formação completa em Terapia Floral pelo Sistema Bach. Aprenda a teoria, diagnóstico, preparação e prescrição das 38 essências florais para equilíbrio emocional e bem-estar integral.",
    audience: [
      "Terapeutas holísticos iniciantes ou experientes",
      "Psicólogos e profissionais da saúde mental",
      "Profissionais de saúde em geral",
      "Pessoas em busca de autoconhecimento e desenvolvimento pessoal",
    ],
    program: [
      {
        title: "Módulo 1 - Fundamentos",
        topics: [
          "História e filosofia do Dr. Edward Bach",
          "Os 7 grupos emocionais",
          "Princípios da terapia floral",
        ],
      },
      {
        title: "Módulo 2 - As 38 Essências",
        topics: [
          "Estudo detalhado de cada essência",
          "Indicações e contraindicações",
          "Diferenciação entre essências similares",
        ],
      },
      {
        title: "Módulo 3 - Diagnóstico",
        topics: [
          "Técnicas de anamnese",
          "Identificação de estados emocionais",
          "Estudos de caso",
        ],
      },
      {
        title: "Módulo 4 - Prescrição e Prática",
        topics: [
          "Preparação de fórmulas",
          "Dosagem e posologia",
          "Ética profissional",
          "Atendimento na prática",
        ],
      },
    ],
    instructors: [
      {
        name: "Profª Ana Costa",
        role: "Terapeuta Floral Senior",
        experience: "15 anos de experiência",
      },
    ],
    nextClasses: [
      { date: "15 de Maio de 2024", vacancies: 12 },
      { date: "10 de Junho de 2024", vacancies: 20 },
      { date: "5 de Julho de 2024", vacancies: 20 },
    ],
    faqs: [
      {
        question: "Preciso ter formação prévia?",
        answer:
          "Não é necessário ter formação prévia em terapias. O curso é desenvolvido do básico ao avançado, sendo acessível a todos que têm interesse genuíno na área.",
      },
      {
        question: "O certificado é reconhecido?",
        answer:
          "Sim, nosso certificado é reconhecido pelo MEC e válido em todo território nacional. Você poderá atuar profissionalmente após a conclusão do curso.",
      },
      {
        question: "Como funcionam as aulas online?",
        answer:
          "As aulas são ao vivo via plataforma de videoconferência, com possibilidade de interação em tempo real. Todas as aulas ficam gravadas para revisão.",
      },
      {
        question: "Existe suporte durante o curso?",
        answer:
          "Sim, você terá acesso a um grupo exclusivo de alunos e suporte direto com os professores através de plantões de dúvidas semanais.",
      },
    ],
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Interesse registrado com sucesso!", {
      description: "Entraremos em contato em breve com mais informações.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
              <Link
                to="/cursos"
                className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Voltar para Cursos</span>
              </Link>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-4">
                    <span className="text-sm font-medium text-primary">{course.category}</span>
                  </div>
                  <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                    {course.title}
                  </h1>
                  <p className="text-lg text-muted-foreground mb-8">{course.description}</p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-card rounded-xl shadow-soft">
                      <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="text-sm font-medium text-foreground">{course.duration}</div>
                    </div>
                    <div className="text-center p-4 bg-card rounded-xl shadow-soft">
                      <Award className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="text-sm font-medium text-foreground">MEC</div>
                    </div>
                    <div className="text-center p-4 bg-card rounded-xl shadow-soft">
                      <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="text-sm font-medium text-foreground">
                        {course.students.toLocaleString()}
                      </div>
                    </div>
                    <div className="text-center p-4 bg-card rounded-xl shadow-soft">
                      <BookOpen className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="text-sm font-medium text-foreground">{course.modality}</div>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-8 shadow-elegant">
                  <div className="mb-6">
                    <div className="text-sm text-muted-foreground mb-2">Investimento</div>
                    <div className="text-4xl font-heading font-bold text-primary mb-1">
                      {course.price}
                    </div>
                    <div className="text-sm text-muted-foreground">ou {course.installments}</div>
                  </div>

                  <Button className="w-full gradient-gold text-white shadow-elegant mb-4 h-12">
                    Quero me Inscrever
                  </Button>

                  <div className="text-center text-sm text-muted-foreground">
                    Ou role para baixo e preencha o formulário de interesse
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* For Whom */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <SectionHeading title="Para Quem é Este Curso?" className="mb-8" />
              <div className="grid md:grid-cols-2 gap-4">
                {course.audience.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-card rounded-xl shadow-soft"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Program */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <SectionHeading title="Conteúdo Programático" className="mb-8" />
              <Accordion type="single" collapsible className="space-y-4">
                {course.program.map((module, index) => (
                  <AccordionItem
                    key={index}
                    value={`module-${index}`}
                    className="bg-card rounded-xl shadow-soft px-6 border-0"
                  >
                    <AccordionTrigger className="hover:no-underline">
                      <span className="font-heading text-lg font-semibold">{module.title}</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 pt-2">
                        {module.topics.map((topic, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span className="text-muted-foreground">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Instructors */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <SectionHeading title="Corpo Docente" className="mb-8" />
              <div className="space-y-4">
                {course.instructors.map((instructor, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-6 bg-card rounded-xl shadow-soft"
                  >
                    <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="font-heading text-lg font-semibold text-foreground">
                        {instructor.name}
                      </div>
                      <div className="text-sm text-muted-foreground">{instructor.role}</div>
                      <div className="text-xs text-primary mt-1">{instructor.experience}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Next Classes */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <SectionHeading title="Próximas Turmas" className="mb-8" />
              <div className="grid md:grid-cols-3 gap-4">
                {course.nextClasses.map((cls, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl p-6 shadow-soft text-center hover:shadow-elegant transition-all"
                  >
                    <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="font-semibold text-foreground mb-2">{cls.date}</div>
                    <div className="text-sm text-muted-foreground">
                      {cls.vacancies} vagas disponíveis
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <SectionHeading title="Perguntas Frequentes" className="mb-8" />
              <Accordion type="single" collapsible className="space-y-4">
                {course.faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="bg-card rounded-xl shadow-soft px-6 border-0"
                  >
                    <AccordionTrigger className="hover:no-underline text-left">
                      <span className="font-semibold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground pt-2">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Interest Form */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
                  Tenho Interesse
                </h2>
                <p className="text-muted-foreground">
                  Preencha o formulário e entraremos em contato com mais detalhes
                </p>
              </div>

              <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-elegant">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nome Completo *
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Seu nome"
                      className="h-12"
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        E-mail *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="seu@email.com"
                        className="h-12"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Telefone
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(11) 98765-4321"
                        className="h-12"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Mensagem (opcional)
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Conte-nos mais sobre seu interesse..."
                      rows={4}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full gradient-gold text-white shadow-elegant h-12"
                  >
                    Enviar Interesse
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CursoDetalhes;
