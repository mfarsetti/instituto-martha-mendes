import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-main.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Instituto Martha Mendes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 animate-fadeIn">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Mais de 3 décadas de excelência</span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-slideUp">
            Instituto Martha Mendes
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-2xl animate-slideUp" style={{ animationDelay: "0.1s" }}>
            Formação completa em <span className="text-primary font-semibold">terapias integrativas</span> e <span className="text-secondary font-semibold">desenvolvimento humano</span> para transformar vidas através da Psicobiosofia®.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slideUp" style={{ animationDelay: "0.2s" }}>
            <Link to="/cursos">
              <Button size="lg" className="gradient-gold text-white shadow-elegant hover:shadow-glow transition-all group">
                Conheça os Cursos
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contato">
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-soft">
                Fale Conosco
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 animate-fadeIn" style={{ animationDelay: "0.3s" }}>
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
          </div>
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
