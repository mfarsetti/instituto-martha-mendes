import { GraduationCap, FlaskConical, Heart, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import ScrollReveal from "@/components/animations/ScrollReveal";

const pillars = [
  {
    icon: GraduationCap,
    title: "Ensino de Excelência",
    description: "Nossos cursos são direcionados a quem já possui nível acadêmico, com elevado padrão de qualidade, metodologia inovadora e a integração essencial entre teoria e prática. Transforme seu conhecimento prévio em competências terapêuticas sólidas. Aqui, acreditamos que todos conseguem aprender, apreender e empreender, evoluindo continuamente em sua jornada profissional. ",
    gradient: "gradient-gold",
  },
  {
    icon: FlaskConical,
    title: "Visão Científica",
    description: "Nossa proposta visa despertar o olhar crítico e científico: incentivamos a escuta ativa, a reflexão fundamentada e a escrita como ferramentas para um profissional mais preparado e consciente.",
    gradient: "gradient-purple",
  },
  {
    icon: Heart,
    title: "Psicobiosofia®",
    description: "Mergulhar em uma abordagem exclusiva que integra corpo, mente e espírito. Descobrir o indivíduo terapeuta para desvendar as dores do indivíduo em terapia.  Vivenciar o autoconhecimento profundo com uma metodologia pioneira na formação e estruturação do processo terapêutico. Metodologia de Martha Mendes.",
    gradient: "gradient-mixed",
  },
  {
    icon: Sparkles,
    title: "Terapias Integrativas",
    description: "Formação completa e rigorosa em múltiplas modalidades reconhecidas no Brasil e no exterior, integrando psicoeducação, práticas somáticas e alinhamento corpo-mente-espírito. Cursos livres com qualidade comparável à pós-graduação, orientados à prática clínica, ética e pesquisa. ",
    gradient: "gradient-gold",
  },
];

const Pillars = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Nossos Pilares"
            subtitle="A base sólida que sustenta mais de 30 anos de transformação e conhecimento"
            centered
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => (
              <ScrollReveal key={pillar.title} direction="up" delay={index * 0.1}>
                <div className="group relative bg-card rounded-2xl p-6 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl ${pillar.gradient} flex items-center justify-center mb-4 shadow-soft group-hover:scale-110 transition-transform`}>
                    <pillar.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pillars;
