import { useEffect } from "react";
import { motion } from "framer-motion";
import { Instagram, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { socialMedia } from "@/lib/social-config";

interface InstagramFeedEmbedProps {
  widgetId?: string; // ID do widget do EmbedSocial
  username?: string;
}

/**
 * Componente de Feed do Instagram usando EmbedSocial
 * 
 * SETUP (5 minutos):
 * 1. Cadastre em: https://embedsocial.com/products/embedfeed/
 * 2. Conecte conta do Instagram
 * 3. Crie um widget de feed
 * 4. Copie o Widget ID
 * 5. Cole abaixo na constante EMBEDSOCIAL_WIDGET_ID
 */

// ⚠️ CONFIGURAR AQUI - Adicione seu Widget ID do EmbedSocial
const EMBEDSOCIAL_WIDGET_ID = 'seu-widget-id-aqui'; // Exemplo: 'abc123def456'

const InstagramFeedEmbed = ({ 
  widgetId = EMBEDSOCIAL_WIDGET_ID,
  username = socialMedia.instagram.username || 'institutomarthamendes',
}: InstagramFeedEmbedProps) => {
  
  useEffect(() => {
    // Carregar script do EmbedSocial
    const script = document.createElement('script');
    script.src = 'https://embedsocial.com/cdn/ht.js';
    script.id = 'EmbedSocialHashtagScript';
    script.async = true;
    
    // Verificar se script já existe
    if (!document.getElementById('EmbedSocialHashtagScript')) {
      document.body.appendChild(script);
    }

    return () => {
      // Cleanup (opcional)
      const existingScript = document.getElementById('EmbedSocialHashtagScript');
      if (existingScript && document.body.contains(existingScript)) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  // Se ainda não configurou o widget, não renderizar nada
  if (!widgetId || widgetId === 'seu-widget-id-aqui') {
    // Esconder componente quando não configurado
    // Para ver instruções de configuração, veja: INSTAGRAM_CHOICE.md
    return null;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400">
            <Instagram className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-heading text-xl font-bold text-foreground">
              Nosso Instagram
            </h3>
            <p className="text-sm text-muted-foreground">
              @{username}
            </p>
          </div>
        </div>
        <Button
          variant="outline"
          asChild
          className="gap-2"
        >
          <a
            href={socialMedia.instagram.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Seguir</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </Button>
      </div>

      {/* EmbedSocial Widget */}
      <div 
        className="embedsocial-hashtag" 
        data-ref={widgetId}
      >
        <a 
          className="feed-powered-by-es feed-powered-by-es-feed-new" 
          href="https://embedsocial.com/social-media-aggregator/" 
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram feed"
        >
          <div>
            <span>Powered by </span>
            EmbedSocial
          </div>
          <div className="es-logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" transform="translate(1 1)"><circle cx="10" cy="10" r="10"></circle><path d="M6.562 6.562h6.876v6.876H6.562z"></path><path d="M10 5v10"></path><path d="M15 10H5"></path></g></svg>
          </div>
        </a>
      </div>

      {/* CTA */}
      <div className="text-center pt-4">
        <Button
          variant="outline"
          asChild
          className="gap-2 hover:bg-gradient-to-r hover:from-pink-500/10 hover:via-purple-500/10 hover:to-orange-400/10"
        >
          <a
            href={socialMedia.instagram.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-4 h-4" />
            <span>Ver todos os posts no Instagram</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default InstagramFeedEmbed;
