import { motion } from "framer-motion";
import { Sparkles, Star } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const slogans = [
  {
    text: "Aprender, Apreender e Empreender, vem com a gente!",
    icon: Sparkles,
    gradient: "gradient-gold",
  },
  {
    text: "O Planeta Terra conta com a sua LUZ, então brilhe, brilhe, brilhe...",
    icon: Star,
    gradient: "gradient-purple",
  },
];

const Slogans = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal direction="up">
            <div className="text-center mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Palavras de Martha Mendes
                </span>
              </motion.div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {slogans.map((slogan, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.2}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div
                      className={`w-16 h-16 rounded-full ${slogan.gradient} flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform`}
                    >
                      <slogan.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-center">
                    <p className="font-heading text-xl md:text-2xl font-semibold text-foreground leading-relaxed italic">
                      "{slogan.text}"
                    </p>
                  </blockquote>

                  {/* Decorative elements */}
                  <div className="absolute top-4 left-4 text-6xl font-serif text-primary/10 leading-none">
                    "
                  </div>
                  <div className="absolute bottom-4 right-4 text-6xl font-serif text-primary/10 leading-none rotate-180">
                    "
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slogans;
