import { Star, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const testimonials = [
  {
    name: "Ana Paula Silva",
    role: "Terapeuta Floral",
    course: "Florais de Bach",
    text: "O Instituto Martha Mendes transformou minha carreira. A metodologia é completa e os professores são extremamente capacitados. Hoje atuo com confiança e segurança.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    rating: 5,
  },
  {
    name: "Carlos Eduardo",
    role: "Psicobiosofista",
    course: "Psicobiosofia®",
    text: "A Psicobiosofia® mudou minha forma de ver o ser humano. É uma abordagem profunda que integra diversos conhecimentos de forma única e transformadora.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    rating: 5,
  },
  {
    name: "Mariana Costa",
    role: "Hipnoterapeuta",
    course: "Hipnose e Regressão",
    text: "Excelente formação! As técnicas são ensinadas com profundidade e ética. Saí preparada para atender meus clientes com responsabilidade e competência.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Depoimentos"
            subtitle="O que nossos alunos dizem sobre suas experiências"
            centered
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-all duration-300 relative animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Quote Icon */}
                <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />

                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-primary mt-0.5">{testimonial.course}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
