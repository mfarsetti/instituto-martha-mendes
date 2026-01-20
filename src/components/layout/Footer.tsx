import { Link } from "react-router-dom";
import { MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import logo from "@/assets/logo.svg";
import { socialMedia } from "@/lib/social-config";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Sobre o Instituto", href: "/sobre" },
    { label: "Metodologia", href: "/metodologia" },
    { label: "Equipe", href: "/equipe" },
    { label: "Cursos", href: "/cursos" },
  ];

  const supportLinks = [
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Contato", href: "/contato" },
    { label: "Política de Privacidade", href: "/privacidade" },
  ];

  const socialLinks = [
    { icon: Facebook, href: socialMedia.facebook.url, label: socialMedia.facebook.name },
    { icon: Instagram, href: socialMedia.instagram.url, label: socialMedia.instagram.name },
    { icon: Linkedin, href: socialMedia.linkedin.url, label: socialMedia.linkedin.name },
    { icon: Youtube, href: socialMedia.youtube.url, label: socialMedia.youtube.name },
  ];

  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Instituto Martha Mendes" className="h-12 w-auto" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Mais de 3 décadas dedicadas à formação de profissionais em terapias integrativas e desenvolvimento humano integral.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-white transition-smooth shadow-soft"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-base font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-heading text-base font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-base font-semibold mb-4">Localização</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Instituto Martha Mendes. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-4">
              <Link to="/termos" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Termos de Uso
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/privacidade" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Privacidade
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
