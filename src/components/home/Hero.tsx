import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-main.jpg";
import { motion } from "framer-motion";
import ParallaxSection from "@/components/animations/ParallaxSection";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay - Parallax */}
      <ParallaxSection speed={-0.3} className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Instituto Martha Mendes"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B6F47]/60 via-[#A0826D]/50 to-[#C2A86E]/40" />
      </ParallaxSection>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Conectando Propósitos
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            Transforme sua carreira com conhecimento de ponta e uma visão humanizada. Bem-vindo ao futuro da educação.
          </motion.p>

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            <Link to="/cursos">
              <Button size="lg" className="gradient-gold text-white shadow-elegant hover:shadow-glow transition-all rounded-full px-8 py-6 text-lg font-semibold">
                Explore Nossos Cursos
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
