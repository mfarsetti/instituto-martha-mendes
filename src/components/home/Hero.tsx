import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedBackground from "@/components/animations/AnimatedBackground";
import marthaImage from "@/assets/martha-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Main Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Eyebrow */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-3"
              >
                <div className="h-px w-12 bg-primary" />
                <span className="text-sm font-medium tracking-wider uppercase text-primary">
                  Mais de 3 décadas de excelência
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="space-y-4"
              >
                <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1]">
                  Conectando
                  <span className="block mt-2 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                    Propósitos
                  </span>
                </h1>
              </motion.div>

              {/* Subtitle */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
              >
                Transforme sua carreira com conhecimento de ponta e uma visão humanizada. 
                Bem-vindo ao futuro da educação em terapias integrativas.
              </motion.p>

              {/* CTAs */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Link to="/cursos">
                  <Button 
                    size="lg" 
                    className="gradient-gold text-white shadow-elegant hover:shadow-glow transition-all group px-8 h-14 text-base font-semibold"
                  >
                    Explore Nossos Cursos
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contato">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-border hover:bg-muted transition-all px-8 h-14 text-base font-semibold"
                  >
                    Fale Conosco
                  </Button>
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="flex flex-wrap items-center gap-8 pt-8 border-t border-border/50"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Certificado Nacional</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">+5.000 Alunos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">100% Online</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative hidden lg:block"
            >
              {/* Decorative Card */}
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elegant">
                  <img 
                    src={marthaImage} 
                    alt="Martha Mendes - Fundadora do Instituto Martha Mendes" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                </div>
                
                {/* Floating Stats Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.8 }}
                  className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-6 shadow-elegant backdrop-blur-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">30+</div>
                      <div className="text-sm text-muted-foreground">Anos de História</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
