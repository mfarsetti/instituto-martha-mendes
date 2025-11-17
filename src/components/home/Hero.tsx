import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-main.jpg";
import { motion } from "framer-motion";
import ParallaxSection from "@/components/animations/ParallaxSection";
import FloatingParticles from "@/components/animations/FloatingParticles";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay - Parallax */}
      <ParallaxSection speed={-0.3} className="absolute inset-0 z-0">
        <div className="absolute inset-0 animate-slow-zoom">
          <img
            src={heroImage}
            alt="Instituto Martha Mendes"
            className="w-full h-full object-cover brightness-75"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/75 to-background/50" />
        <FloatingParticles />
      </ParallaxSection>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Mais de 3 décadas de excelência</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
          >
            Conectando Propósitos
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-2xl"
          >
            Transforme sua carreira com conhecimento de ponta e uma visão humanizada. Bem-vindo ao futuro da educação.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/cursos">
              <Button size="lg" className="gradient-gold text-white shadow-elegant hover:shadow-glow transition-all group">
                Explore Nossos Cursos
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contato">
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-soft">
                Fale Conosco
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16"
          >
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">30+</div>
              <div className="text-sm text-muted-foreground">Anos de História</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-2">10k+</div>
              <div className="text-sm text-muted-foreground">Alunos Formados</div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="text-4xl md:text-5xl font-heading font-bold gradient-gold bg-clip-text text-transparent mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Cursos Disponíveis</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
