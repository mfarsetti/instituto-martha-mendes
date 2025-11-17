import { GraduationCap, FlaskConical, Heart, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import ScrollReveal from "@/components/animations/ScrollReveal";

const pillars = [
  {
    icon: GraduationCap,
    title: "Ensino de Excelência",
    description: "Cursos reconhecidos pelo MEC com metodologia diferenciada que une teoria e prática transformadora.",
    gradient: "gradient-gold",
  },
  {
    icon: FlaskConical,
    title: "Pesquisa Científica",
    description: "Publicações acadêmicas e pesquisas que validam as práticas integrativas no meio científico.",
    gradient: "gradient-purple",
  },
  {
    icon: Heart,
    title: "Psicobiosofia®",
    description: "Metodologia exclusiva que integra corpo, mente e espírito para o autoconhecimento profundo.",
    gradient: "gradient-mixed",
  },
  {
    icon: Sparkles,
    title: "Terapias Integrativas",
    description: "Formação completa em diversas modalidades terapêuticas reconhecidas pela OMS.",
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
