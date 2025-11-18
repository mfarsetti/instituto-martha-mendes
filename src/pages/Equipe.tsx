import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/section-heading";
import { Users, Award, GraduationCap } from "lucide-react";
import marthaProfile from "@/assets/martha-profile.jpg";

const team = [
  {
    name: "Dra. Martha Mendes",
    role: "Fundadora e Diretora",
    specialties: "Psicobiosofia®, Hipnose, Florais",
    image: marthaProfile,
    bio: "Mais de 30 anos de experiência em terapias integrativas. Criadora da metodologia Psicobiosofia® e autora de diversos livros na área.",
  },
  {
    name: "Dr. João Silva",
    role: "Coordenador Acadêmico",
    specialties: "Bioeletrografia, Pesquisa",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    bio: "PhD em Neurociências. Responsável pela coordenação dos programas acadêmicos e validação científica das práticas.",
  },
  {
    name: "Profª Ana Costa",
    role: "Docente Senior",
    specialties: "Florais de Bach, Aromaterapia",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    bio: "Especialista em terapias naturais com formação internacional. Mais de 15 anos ministrando cursos no instituto.",
  },
  {
    name: "Dr. Carlos Eduardo",
    role: "Professor e Terapeuta",
    specialties: "Hipnose Clínica, Regressão",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bio: "Especialista em hipnose ericsoniana e terapia regressiva. Formação internacional e mais de 5000 atendimentos realizados.",
  },
  {
    name: "Profª Mariana Santos",
    role: "Coordenadora de Pesquisa",
    specialties: "Psicologia, Pesquisa Acadêmica",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    bio: "Doutora em Psicologia com foco em terapias integrativas. Lidera os projetos de pesquisa científica do instituto.",
  },
  {
    name: "Prof. Ricardo Alves",
    role: "Professor e Praticante",
    specialties: "Reiki, Energias Sutis",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    bio: "Mestre Reiki com linhagem tradicional. Especialista em trabalhos energéticos e desenvolvimento da sensibilidade sutil.",
  },
];

const Equipe = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Nosso Time</span>
              </div>
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
                Equipe de Especialistas
              </h1>
              <p className="text-xl text-muted-foreground">
                Profissionais altamente qualificados dedicados à sua formação e desenvolvimento
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-background border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-xl gradient-gold flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-heading font-bold text-foreground mb-2">20+</div>
                <div className="text-sm text-muted-foreground">Professores Qualificados</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-xl gradient-purple flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-heading font-bold text-foreground mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Certificações Internacionais</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-xl gradient-mixed flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-heading font-bold text-foreground mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência Combinada</div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <SectionHeading
                title="Conheça Nossa Equipe"
                subtitle="Profissionais apaixonados por ensinar e transformar vidas"
                centered
                className="mb-16"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {team.map((member, index) => (
                  <div
                    key={member.name}
                    className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fadeIn"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      {/* Name Overlay */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="font-heading text-xl font-bold text-white mb-1">
                          {member.name}
                        </h3>
                        <p className="text-sm text-white/90">{member.role}</p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="mb-4">
                        <div className="inline-flex items-center space-x-1 bg-primary/10 rounded-full px-3 py-1">
                          <Award className="w-3 h-3 text-primary" />
                          <span className="text-xs text-primary font-medium">{member.specialties}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-4xl font-bold text-foreground mb-6">
                Quer Fazer Parte do Nosso Time?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Estamos sempre em busca de profissionais qualificados e apaixonados por ensinar. Entre em contato para saber sobre oportunidades.
              </p>
              <a href="/contato">
                <button className="px-8 py-4 gradient-gold text-white rounded-xl font-medium shadow-elegant hover:shadow-glow transition-all">
                  Enviar Currículo
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Equipe;
