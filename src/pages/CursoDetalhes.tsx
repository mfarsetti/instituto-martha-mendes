import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useData } from "@/contexts/DataContext";
import {
  Clock,
  Award,
  Users,
  Calendar,
  BookOpen,
  ArrowLeft,
  Mail,
} from "lucide-react";
import { toast } from "sonner";

const CursoDetalhes = () => {
  const { id } = useParams();
  const { getCourseBySlug } = useData();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const course = getCourseBySlug(id || '');

  if (!course) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl font-heading font-bold mb-4">Curso não encontrado</h1>
            <p className="text-muted-foreground mb-8">O curso que você está procurando não existe ou foi removido.</p>
            <Link to="/cursos">
              <Button className="gradient-gold text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar para Cursos
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
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
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={course.image || 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1600&h=900&fit=crop'}
              alt={course.title}
              className="w-full h-full object-cover brightness-50"
            />
          </div>
          <div className="relative container mx-auto px-4">
            <Link to="/cursos">
              <Button variant="ghost" className="mb-6 text-white hover:bg-white/20">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            </Link>
            <div className="max-w-3xl">
              <span className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium mb-4">
                {course.category}
              </span>
              <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6">
                {course.title}
              </h1>
              <p className="text-xl text-white/90 mb-8">
                {course.summary}
              </p>
              <div className="flex flex-wrap gap-6 text-white/90">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5" />
                  <span>{course.certification}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5" />
                  <span>{course.modality}</span>
                </div>
                {course.students && (
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5" />
                    <span>{course.students}+ alunos</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div
                className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-foreground prose-ul:text-foreground"
                dangerouslySetInnerHTML={{
                  __html: course.content
                    .split('\n\n')
                    .map(p => {
                      if (p.startsWith('# ')) return `<h1>${p.slice(2)}</h1>`;
                      if (p.startsWith('## ')) return `<h2>${p.slice(3)}</h2>`;
                      if (p.startsWith('### ')) return `<h3>${p.slice(4)}</h3>`;
                      if (p.startsWith('- ')) {
                        const items = p.split('\n').map(i => i.startsWith('- ') ? `<li>${i.slice(2)}</li>` : i).join('');
                        return `<ul>${items}</ul>`;
                      }
                      return `<p>${p}</p>`;
                    })
                    .join('')
                }}
              />
            </div>
          </div>
        </section>

        {/* Next Classes */}
        {course.startDates.length > 0 && (
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <SectionHeading
                  title="Próximas Turmas"
                  subtitle="Vagas limitadas"
                />
                <div className="grid gap-6 md:grid-cols-3">
                  {course.startDates.slice(0, 3).map((date, index) => (
                    <div
                      key={index}
                      className="glass-effect rounded-xl p-6 hover:shadow-elegant transition-smooth"
                    >
                      <div className="flex items-center space-x-3 mb-4">
                        <Calendar className="w-6 h-6 text-primary" />
                        <div>
                          <p className="font-semibold text-foreground">
                            {new Date(date).toLocaleDateString('pt-BR', { dateStyle: 'long' })}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Inscrições abertas
                          </p>
                        </div>
                      </div>
                      {course.investment && (
                        <div className="mb-4">
                          <p className="text-2xl font-bold text-foreground">{course.investment}</p>
                          <p className="text-sm text-muted-foreground">ou em até 12x</p>
                        </div>
                      )}
                      <Button className="w-full gradient-gold text-white hover:opacity-90">
                        Inscrever-se
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Interest Form */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <SectionHeading
                title="Manifestar Interesse"
                subtitle="Preencha o formulário e entraremos em contato"
              />
              <form onSubmit={handleSubmit} className="glass-effect rounded-2xl p-8 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nome completo *
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-mail *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefone
                  </label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <Button type="submit" className="w-full gradient-gold text-white hover:opacity-90">
                  <Mail className="w-4 h-4 mr-2" />
                  Enviar
                </Button>
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
