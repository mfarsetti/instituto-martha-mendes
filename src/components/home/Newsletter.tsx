import { useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    
    if (!agreed) {
      toast.error("Por favor, aceite a política de privacidade");
      return;
    }

    if (!email) {
      toast.error("Por favor, insira um e-mail válido");
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, agreed }),
      });

      if (!res.ok) throw new Error("failed");

      toast.success("Inscrição realizada com sucesso!", {
        description: "Você receberá nossas novidades em breve.",
      });
      setEmail("");
      setAgreed(false);
    } catch {
      toast.error("Não foi possível concluir sua inscrição. Tente novamente.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-40 h-40 bg-primary rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-secondary rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center mx-auto mb-6 shadow-elegant">
            <Mail className="w-8 h-8 text-white" />
          </div>

          {/* Heading */}
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Fique por Dentro das Novidades
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Receba conteúdos exclusivos, dicas e informações sobre novos cursos diretamente no seu e-mail.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 bg-background shadow-soft"
                required
              />
              <Button
                type="submit"
                size="lg"
                disabled={submitting}
                className="gradient-gold text-white shadow-elegant hover:shadow-glow transition-all"
              >
                <CheckCircle2 className="mr-2 w-5 h-5" />
                {submitting ? "Enviando..." : "Inscrever-se"}
              </Button>
            </div>

            {/* LGPD Consent */}
            <label className="flex items-start space-x-3 text-left max-w-xl mx-auto cursor-pointer">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                required
              />
              <span className="text-sm text-muted-foreground">
                Concordo em receber comunicações do Instituto Martha Mendes e estou ciente da{" "}
                <a href="/privacidade" className="text-primary hover:underline">
                  Política de Privacidade
                </a>
                . Posso cancelar a qualquer momento.
              </span>
            </label>
          </form>

          <p className="text-xs text-muted-foreground mt-6">
            🔒 Seus dados estão seguros conosco. Não compartilhamos com terceiros.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
