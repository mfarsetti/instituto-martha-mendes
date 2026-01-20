import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { seedCourses } from "@/lib/seed-data";
import {
  Award,
  Calendar,
  BookOpen,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Star,
  GraduationCap,
  FileText,
  HelpCircle,
  Target,
} from "lucide-react";
import { toast } from "sonner";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const CursoDetalhes = () => {
  const { slug } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const course = slug ? seedCourses.find(c => c.slug === slug && c.status === 'published') : null;

  if (!course) {
    return <Navigate to="/cursos" replace />;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Interesse registrado! Entraremos em contato em breve.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Breadcrumbs */}
        <section className="bg-muted/30 py-4 border-b border-border/40">
          <div className="container mx-auto px-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/cursos">Cursos</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{course.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={course.image || 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1600&h=900&fit=crop'}
              alt={course.title}
              className="w-full h-full object-cover brightness-[0.35]"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm text-primary-foreground border border-primary/30 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                {course.category}
              </span>
              <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
                {course.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/95 mb-12 drop-shadow-lg max-w-3xl mx-auto leading-relaxed">
                {course.summary}
              </p>
              
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                  <Card className="border-2 shadow-lg overflow-hidden">
                    <Tabs defaultValue="sobre" className="w-full">
                      <TabsList className="w-full grid grid-cols-4 h-auto p-0 bg-muted/50 rounded-none">
                        <TabsTrigger 
                          value="sobre" 
                          className="flex flex-col items-center gap-2 py-4 data-[state=active]:bg-background data-[state=active]:shadow-md"
                        >
                          <Target className="w-5 h-5" />
                          <span className="text-xs md:text-sm font-medium">Sobre</span>
                        </TabsTrigger>
                        <TabsTrigger 
                          value="conteudo" 
                          className="flex flex-col items-center gap-2 py-4 data-[state=active]:bg-background data-[state=active]:shadow-md"
                        >
                          <FileText className="w-5 h-5" />
                          <span className="text-xs md:text-sm font-medium">Conteúdo</span>
                        </TabsTrigger>
                        <TabsTrigger 
                          value="docentes" 
                          className="flex flex-col items-center gap-2 py-4 data-[state=active]:bg-background data-[state=active]:shadow-md"
                        >
                          <GraduationCap className="w-5 h-5" />
                          <span className="text-xs md:text-sm font-medium">Docentes</span>
                        </TabsTrigger>
                        <TabsTrigger 
                          value="faq" 
                          className="flex flex-col items-center gap-2 py-4 data-[state=active]:bg-background data-[state=active]:shadow-md"
                        >
                          <HelpCircle className="w-5 h-5" />
                          <span className="text-xs md:text-sm font-medium">FAQ</span>
                        </TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="sobre" className="p-8 m-0">
                        <div className="space-y-6">
                          <div>
                            <h3 className="font-heading text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                              <Target className="w-6 h-6 text-primary" />
                              Sobre o Curso
                            </h3>
                            <div
                              className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-foreground prose-h3:text-xl prose-h3:font-semibold prose-h3:text-primary prose-p:text-foreground prose-p:leading-relaxed prose-ul:text-foreground prose-li:my-2"
                              dangerouslySetInnerHTML={{
                                __html: course.content
                                  .split('\n\n')
                                  .slice(0, 5)
                                  .map(p => {
                                    if (p.startsWith('### ')) return `<h3>${p.slice(4)}</h3>`;
                                    if (p.startsWith('- ')) {
                                      const items = p.split('\n').map(i => i.startsWith('- ') ? `<li>${i.slice(2)}</li>` : i).join('');
                                      return `<ul class="space-y-2">${items}</ul>`;
                                    }
                                    return `<p>${p}</p>`;
                                  })
                                  .join('')
                              }}
                            />
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="conteudo" className="p-8 m-0">
                        <div className="space-y-6">
                          <h3 className="font-heading text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                            <FileText className="w-6 h-6 text-primary" />
                            Conteúdo Programático
                          </h3>
                          {course.modules && course.modules.length > 0 ? (
                            <Accordion type="single" collapsible className="space-y-4">
                              {course.modules.map((module) => (
                                <AccordionItem 
                                  key={module.id} 
                                  value={module.id} 
                                  className="border-2 rounded-lg px-6 bg-gradient-to-r from-primary/5 to-transparent"
                                >
                                  <AccordionTrigger className="font-heading text-lg font-semibold hover:text-primary py-4">
                                    {module.title}
                                  </AccordionTrigger>
                                  <AccordionContent className="text-muted-foreground space-y-2 pb-4">
                                    <ul className="space-y-2 list-disc list-inside">
                                      {module.topics.map((topic, idx) => (
                                        <li key={idx}>{topic}</li>
                                      ))}
                                    </ul>
                                  </AccordionContent>
                                </AccordionItem>
                              ))}
                            </Accordion>
                          ) : (
                            <p className="text-muted-foreground text-center py-8">
                              Nenhum módulo cadastrado para este curso.
                            </p>
                          )}
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="docentes" className="p-8 m-0">
                        <div className="space-y-6">
                          <h3 className="font-heading text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                            <GraduationCap className="w-6 h-6 text-primary" />
                            Corpo Docente
                          </h3>
                          {course.teachers && course.teachers.length > 0 ? (
                            <div className="grid gap-6">
                              {course.teachers.map((teacher) => (
                                <Card key={teacher.id} className="overflow-hidden border-2 hover:shadow-xl transition-shadow">
                                  <div className="p-6">
                                    <Link to="/martha-mendes">
                                      <h4 className="font-heading text-xl font-bold text-foreground mb-2 hover:text-primary transition-colors cursor-pointer">
                                        {teacher.name}
                                      </h4>
                                    </Link>
                                    <p className="text-primary font-medium mb-3">{teacher.role}</p>
                                    <p className="text-muted-foreground leading-relaxed mb-3">
                                      {teacher.bio}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                      {teacher.specialties.map((specialty, idx) => (
                                        <span 
                                          key={idx}
                                          className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                                        >
                                          {specialty}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                </Card>
                              ))}
                            </div>
                          ) : (
                            <p className="text-muted-foreground text-center py-8">
                              Nenhum docente cadastrado para este curso.
                            </p>
                          )}
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="faq" className="p-8 m-0">
                        <div className="space-y-6">
                          <h3 className="font-heading text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                            <HelpCircle className="w-6 h-6 text-primary" />
                            Perguntas Frequentes
                          </h3>
                          {course.faqs && course.faqs.length > 0 ? (
                            <Accordion type="single" collapsible className="space-y-4">
                              {course.faqs.map((faq) => (
                                <AccordionItem 
                                  key={faq.id} 
                                  value={faq.id} 
                                  className="border-2 rounded-lg px-6 bg-background"
                                >
                                  <AccordionTrigger className="font-semibold text-left hover:text-primary py-4">
                                    {faq.question}
                                  </AccordionTrigger>
                                  <AccordionContent className="text-muted-foreground pb-4">
                                    {faq.answer}
                                  </AccordionContent>
                                </AccordionItem>
                              ))}
                            </Accordion>
                          ) : (
                            <p className="text-muted-foreground text-center py-8">
                              Nenhuma pergunta frequente cadastrada para este curso.
                            </p>
                          )}
                        </div>
                      </TabsContent>
                    </Tabs>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="sticky top-24 space-y-6">
                    {/* Course Info Card */}
                    <Card className="p-6 border-2 shadow-lg bg-gradient-to-br from-primary/5 to-transparent">
                      
                      
                      <a href="#formulario-inscricao" className="block">
                        <Button className="w-full gradient-gold text-white font-semibold py-6 text-base">
                          Quero me inscrever
                        </Button>
                      </a>
                    </Card>

                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Classes */}
        {course.startDates && course.startDates.length > 0 && (
          <section className="py-20 bg-gradient-to-br from-muted/50 to-muted/20">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
                    Próximas Turmas
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Inscrições abertas • Vagas limitadas
                  </p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {course.startDates.slice(0, 3).map((date, index) => (
                    <Card
                      key={index}
                      className="relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group"
                    >
                      <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-bl-full" />
                      <div className="relative p-6 space-y-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                            <Calendar className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">
                              Turma {index + 1}
                            </p>
                            <p className="font-bold text-foreground text-lg leading-tight">
                              {new Date(date + 'T00:00:00').toLocaleDateString('pt-BR', { 
                                day: '2-digit',
                                month: 'long',
                                year: 'numeric'
                              })}
                            </p>
                          </div>
                        </div>
                        
                        {course.investment && (
                          <div className="pt-4 border-t border-border/50">
                            <p className="text-sm text-muted-foreground mb-1">Investimento</p>
                            <p className="text-3xl font-bold text-foreground mb-1">{course.investment}</p>
                            <p className="text-xs text-muted-foreground">
                              ou em até 12x sem juros
                            </p>
                          </div>
                        )}
                        
                        <div className="pt-2">
                          <div className="flex items-center gap-2 text-xs text-primary font-medium mb-3">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Vagas disponíveis</span>
                          </div>
                          <a href="#formulario-inscricao" className="block">
                            <Button className="w-full gradient-gold text-white font-semibold hover:opacity-90 transition-opacity">
                              Inscrever-se agora
                            </Button>
                          </a>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Interest Form */}
        <section id="formulario-inscricao" className="py-20 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Manifestar Interesse
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Preencha o formulário abaixo e nossa equipe entrará em contato para fornecer mais informações sobre o curso
                </p>
              </div>
              
              <Card className="border-2 shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 border-b-2">
                  <h3 className="font-heading text-xl font-bold text-foreground flex items-center gap-2">
                    <Mail className="w-5 h-5 text-primary" />
                    {course.title}
                  </h3>
                </div>
                
                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                        Nome completo *
                      </label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="h-12 border-2 focus:border-primary"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                        Telefone *
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="h-12 border-2 focus:border-primary"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
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
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Mensagem (opcional)
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="min-h-[120px] border-2 focus:border-primary resize-none"
                      placeholder="Conte-nos um pouco sobre seu interesse neste curso..."
                    />
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      Ao enviar este formulário, você concorda em receber comunicações sobre este curso e outras informações relevantes do Instituto Martha Mendes.
                    </p>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full gradient-gold text-white font-semibold py-6 text-lg hover:opacity-90 transition-opacity"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Enviar mensagem
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CursoDetalhes;
