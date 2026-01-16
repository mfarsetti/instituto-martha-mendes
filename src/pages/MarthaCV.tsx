import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Briefcase, 
  Radio, 
  Trophy,
  Globe,
  Users,
  Instagram,
  Facebook,
  Linkedin,
  Youtube
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import marthaAbout from "@/assets/martha-about.jpg";

const MarthaCV = () => {
  const academicDegrees = [
    {
      title: "Doutora em Ciências da Educação",
      institution: "Facultad Interamericana de Ciencias Sociales – FICS",
      year: "2024"
    },
    {
      title: "Doutorado em Psicanálise Aplicada à Educação",
      institution: "UNIDERC – União de Instituições para o Desenvolvimento Educacional, Religioso e Cultural",
      year: "2019"
    },
    {
      title: "Mestrado em Bioeletrografia",
      institution: "IUMAB – International Union of Medical and Applied Bioelectrography",
      year: ""
    },
    {
      title: "Graduação em Pedagogia",
      institution: "Diretora e Proprietária de Escolas de Educação Infantil",
      year: ""
    }
  ];

  const specializations = [
    "Pós-graduação em Psicossomática",
    "Pós-graduação em Terapia Regressiva",
    "Pós-graduação em Psicobiofísica: Neuroanatomia Funcional e Transpessoal",
    "Bioeletrografia",
    "Formação Internacional em Terapia Regressiva – Hans TenDam (Tasso International)",
    "Hipnose Clínica",
    "Psicanálise Transpessoal",
    "Arte Terapia",
    "Practitioner em Programação Neurolinguística – Richard Bandler",
    "Negócios Exponenciais – Casa do Saber",
    "UPW – Unleash The Power Within – Tony Robbins",
    "Especialista em Florais de Bach, decodificação onírica"
  ];

  const extensions = [
    "Deus e a Psique Humana (PUC)",
    "Neuropsicologia (PUC)",
    "Ressonância Psicoterapêutica e PDI",
    "Constelação Familiar",
    "Traços de Caráter",
    "Cromoterapia",
    "Mestrado em Reiki (Japonês e Tibetano)",
    "Auriculoterapia"
  ];

  const professionalRoles = [
    "Diretora e Proprietária de Escolas de Educação Infantil (há mais de 30 anos)",
    "Consultório particular em Terapias Integrativas, Florais de Bach, Hipnose, Psicobiosofia®",
    "Coordenadora Pedagógica de projetos educacionais e institucionais",
    "Docente e coordenadora de cursos de Pós-graduação Lato Sensu no Brasil e exterior",
    "Coordenadora e palestrante em eventos nacionais e internacionais",
    "Organizadora de congressos, simpósios e eventos científicos/terapêuticos",
    "Coordenadora pedagógica da Feira de Saúde no Colégio Padre Moye",
    "Coordenadora Pedagógica do Curso de Pós-graduação Lato Sensu em Terapia Regressiva (MEC)"
  ];

  const publications = [
    {
      title: "Reiki: Uma Experiência de Autolibertação",
      event: "Bienal do Livro SP",
      year: "2000"
    },
    {
      title: "Reiki: Um Processo Alquímico",
      event: "Bienal do Livro SP",
      year: "2002"
    },
    {
      title: "Aquarela: O Palhaço que Tinha Medo do Escuro – Auto Hipnose para crianças",
      event: "Livraria da Vila, SP",
      year: "2009"
    },
    {
      title: "Como Atrair Prosperidade e Abundância: a Jornada em Busca da Consciência",
      event: "Ebook",
      year: "2023"
    }
  ];

  const awards = [
    {
      title: "Placa de Honrosa Participação no 1º Simpósio Nacional de Bioenergologia",
      location: "SP",
      year: "1999"
    },
    {
      title: "Placa de Presidência do 2º Congresso Nacional de Terapia Regressiva",
      location: "SP",
      year: "2010"
    },
    {
      title: "Placa de Coordenadora e Palestrante no 5º Congresso Nacional de Terapia Regressiva",
      location: "SP",
      year: "2015"
    },
    {
      title: "Troféu e Quadro Quality Premium Brasil",
      location: "SP",
      year: "2018"
    },
    {
      title: "Medalha e Quadro de Honra de Mérito Internacional como Dama Comendadora",
      organization: "International Quality Company",
      location: "SP",
      year: "2018"
    },
    {
      title: "Troféu de Presidente do 7º Congresso Nacional de Hipnoterapia e Terapia Regressiva",
      location: "SP",
      year: "2019"
    },
    {
      title: "Quadro: Dama Comendadora",
      year: ""
    }
  ];

  const socialMedia = [
    { 
      icon: Instagram, 
      label: "Instagram Pessoal", 
      handle: "@martha_mendes1",
      url: "https://instagram.com/martha_mendes1"
    },
    { 
      icon: Instagram, 
      label: "Instagram Instituto", 
      handle: "@institutomarthamendes",
      url: "https://instagram.com/institutomarthamendes"
    },
    { 
      icon: Facebook, 
      label: "Facebook Pessoal", 
      handle: "martha.mendes.35",
      url: "https://facebook.com/martha.mendes.35"
    },
    { 
      icon: Facebook, 
      label: "Facebook Instituto", 
      handle: "Instituto Martha Mendes",
      url: "https://facebook.com/InstitutoMarthaMendes"
    },
    { 
      icon: Linkedin, 
      label: "LinkedIn", 
      handle: "martha-mendes-94581a21",
      url: "https://linkedin.com/in/martha-mendes-94581a21"
    },
    { 
      icon: Youtube, 
      label: "YouTube", 
      handle: "@SimplesMenteMartha",
      url: "https://youtube.com/@SimplesMenteMartha"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(194,168,110,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(108,78,210,0.1),transparent_50%)]" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12 items-start">
                {/* Photo */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="lg:col-span-1"
                >
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-elegant sticky top-24">
                    <img 
                      src={marthaAbout} 
                      alt="Dra. Martha Mendes" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* Header Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="lg:col-span-2 space-y-6"
                >
                  <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                    Dra. Martha Mendes
                  </h1>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Esposa, mãe, avó e profissional apaixonada pela vida e profundamente grata pela oportunidade 
                    de trilhar uma jornada de dedicação à família e à educação. Com mais de três décadas de 
                    experiência, é reconhecida pela sólida atuação na área de educação infantil, terapias 
                    integrativas e desenvolvimento humano.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Sua missão, diariamente, é inspirar pessoas, compartilhar conhecimento e promover uma 
                    evolução integral, seja por meio da docência, da pesquisa ou de práticas clínicas inovadoras.
                  </p>

                  <div className="pt-4">
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Conecte-se</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {socialMedia.map((social) => (
                        <a
                          key={social.handle}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-soft transition-all group"
                        >
                          <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                            <social.icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="text-left">
                            <div className="text-xs text-muted-foreground">{social.label}</div>
                            <div className="text-sm font-medium text-foreground">{social.handle}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Academic Degrees */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                    Formação Acadêmica
                  </h2>
                </div>
              </ScrollReveal>

              <div className="space-y-4">
                {academicDegrees.map((degree, index) => (
                  <ScrollReveal key={index} delay={index * 0.1}>
                    <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-elegant transition-all border border-border">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-foreground mb-2">{degree.title}</h3>
                          <p className="text-muted-foreground">{degree.institution}</p>
                        </div>
                        {degree.year && (
                          <span className="text-primary font-semibold text-sm bg-primary/10 px-3 py-1 rounded-full">
                            {degree.year}
                          </span>
                        )}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Specializations */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl gradient-purple flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                    Pós-Graduações & Especializações
                  </h2>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 gap-4">
                {specializations.map((spec, index) => (
                  <ScrollReveal key={index} delay={index * 0.05}>
                    <div className="flex items-start gap-3 bg-card rounded-xl p-4 shadow-soft border border-border">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">{spec}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Extensions */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl gradient-mixed flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                    Extensões & Cursos Livres
                  </h2>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 gap-4">
                {extensions.map((ext, index) => (
                  <ScrollReveal key={index} delay={index * 0.05}>
                    <div className="flex items-start gap-3 bg-card rounded-xl p-4 shadow-soft border border-border">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">{ext}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Professional Roles */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                    Atuação Profissional
                  </h2>
                </div>
              </ScrollReveal>

              <div className="space-y-3">
                {professionalRoles.map((role, index) => (
                  <ScrollReveal key={index} delay={index * 0.05}>
                    <div className="flex items-start gap-3 bg-card rounded-xl p-4 shadow-soft border border-border">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">{role}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={0.4}>
                <div className="mt-8 bg-card rounded-xl p-6 shadow-soft border border-primary/30">
                  <div className="flex items-start gap-4">
                    <Radio className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-3">
                        Atividades Complementares
                      </h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Participação em programas de rádio (Rádio Mundial) e televisão (TV Mundo Maior, TV Bandeirantes)</li>
                        <li>• Matéria sobre Bioeletrografia na Revista Espiritismo e Ciência</li>
                        <li>• Youtuber — Autora e editora do canal "SimplesMente Martha®"</li>
                        <li>• Escritora e pesquisadora</li>
                        <li>• Autora da metodologia Psicobiosofia®</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Publications */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl gradient-purple flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                    Obras Publicadas
                  </h2>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 gap-6">
                {publications.map((pub, index) => (
                  <ScrollReveal key={index} delay={index * 0.1}>
                    <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-elegant transition-all border border-border">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="font-semibold text-lg text-foreground">{pub.title}</h3>
                        <span className="text-primary font-semibold text-sm bg-primary/10 px-3 py-1 rounded-full flex-shrink-0">
                          {pub.year}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm">{pub.event}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Congress & Societies */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl gradient-mixed flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                    Congressos & Sociedades
                  </h2>
                </div>
              </ScrollReveal>

              <div className="space-y-3">
                {[
                  "Presidente do 2º Congresso Nacional de Terapia Regressiva (2009/SP)",
                  "Presidente do 7º Congresso Nacional de Hipnoterapia e Terapia Regressiva (2019/SP)",
                  "Ex-presidente da ABHTR – Associação Brasileira de Hipnoterapia e Terapia Regressiva",
                  "Ex-presidente da ASTREAM – Terapeutas no Mundo",
                  "Ex-presidente do Harmonia Cursos e Terapias Complementares",
                  "Presidente do Instituto Martha Mendes",
                  "Organizadora de eventos nacionais e internacionais",
                  "Membro certificada da EARTh Association for Regression Therapy"
                ].map((item, index) => (
                  <ScrollReveal key={index} delay={index * 0.05}>
                    <div className="flex items-start gap-3 bg-card rounded-xl p-4 shadow-soft border border-border">
                      <Users className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground">{item}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Awards */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                    Reconhecimentos & Prêmios
                  </h2>
                </div>
              </ScrollReveal>

              <div className="space-y-4">
                {awards.map((award, index) => (
                  <ScrollReveal key={index} delay={index * 0.05}>
                    <div className="bg-card rounded-xl p-6 shadow-soft border border-border hover:border-primary/50 transition-all">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-2">{award.title}</h3>
                          <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                            {award.location && <span>📍 {award.location}</span>}
                            {award.organization && <span>• {award.organization}</span>}
                          </div>
                        </div>
                        {award.year && (
                          <span className="text-primary font-semibold text-sm bg-primary/10 px-3 py-1 rounded-full flex-shrink-0">
                            {award.year}
                          </span>
                        )}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Professional Summary */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elegant border border-primary/20">
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
                    Resumo Profissional
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed text-center">
                    Profissional multidisciplinar com sólidas competências em Educação, Saúde Integrativa e 
                    Desenvolvimento Humano, atuando por mais de três décadas como educadora, terapeuta, 
                    pesquisadora e escritora. Dedica-se a promover transformações e consciências através do 
                    cuidado, inovação e compartilhamento do conhecimento, tendo impactado milhares de pessoas 
                    em diferentes contextos educacionais e terapêuticos. Comprometida com a excelência, o 
                    aprendizado contínuo e a valorização das relações humanas.
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

export default MarthaCV;
