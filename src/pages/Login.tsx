import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Lock, GraduationCap } from "lucide-react";

const Login = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* Icon */}
            <div className="w-20 h-20 rounded-full gradient-gold flex items-center justify-center mx-auto mb-8 shadow-elegant animate-float">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>

            {/* Content */}
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Área do Aluno
            </h1>
            <div className="bg-card rounded-2xl p-12 shadow-elegant">
              <Lock className="w-16 h-16 text-primary mx-auto mb-6 opacity-50" />
              <p className="text-xl text-muted-foreground mb-4">
                Área em Desenvolvimento
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
                Em breve, alunos e professores terão acesso a uma plataforma completa com materiais de estudo, certificados, cronograma de aulas e muito mais.
              </p>
            </div>

            <p className="text-sm text-muted-foreground mt-8">
              Tem dúvidas? Entre em{" "}
              <a href="/contato" className="text-primary hover:underline font-medium">
                contato conosco
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
