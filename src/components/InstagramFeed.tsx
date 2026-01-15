import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Instagram, ExternalLink, Heart, MessageCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { socialMedia } from "@/lib/social-config";
import { useInstagramPosts, instagramPostUrls } from "@/lib/instagram-helper";

interface InstagramFeedProps {
  username?: string;
  limit?: number;
  useRealPosts?: boolean; // Se true, tenta buscar posts reais via oEmbed
}

const InstagramFeed = ({ 
  username = socialMedia.instagram.username || 'institutomarthamendes',
  limit = 6,
  useRealPosts = false,
}: InstagramFeedProps) => {
  const [loading, setLoading] = useState(true);

  // Buscar posts reais se configurado
  const { posts: realPosts, loading: loadingReal } = useInstagramPosts(
    useRealPosts ? instagramPostUrls : []
  );

  useEffect(() => {
    // Carregar script do Instagram Embed
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    const timer = setTimeout(() => {
      setLoading(false);
      // Processar embeds do Instagram
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
      document.body.removeChild(script);
    };
  }, []);

  // Posts de exemplo (fallback) - serão usados se useRealPosts = false
  const mockPosts = [
    {
      id: '1',
      url: `https://www.instagram.com/institutomarthamendes/`,
      caption: 'Conteúdo sobre autoconhecimento e desenvolvimento pessoal',
      thumbnail: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=400&fit=crop',
    },
    {
      id: '2',
      url: `https://www.instagram.com/institutomarthamendes/`,
      caption: 'Dica do dia sobre terapias integrativas',
      thumbnail: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=400&h=400&fit=crop',
    },
    {
      id: '3',
      url: `https://www.instagram.com/institutomarthamendes/`,
      caption: 'Reflexão da semana: o caminho do autoconhecimento',
      thumbnail: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop',
    },
    {
      id: '4',
      url: `https://www.instagram.com/institutomarthamendes/`,
      caption: 'Bastidores do Instituto Martha Mendes',
      thumbnail: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=400&h=400&fit=crop',
    },
    {
      id: '5',
      url: `https://www.instagram.com/institutomarthamendes/`,
      caption: 'Frase inspiradora sobre transformação pessoal',
      thumbnail: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=400&fit=crop',
    },
    {
      id: '6',
      url: `https://www.instagram.com/institutomarthamendes/`,
      caption: 'Evento especial - Formação em Psicobiosofia',
      thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=400&fit=crop',
    },
  ];

  // Usar posts reais se disponíveis, senão usar mock
  const instagramPosts = (useRealPosts && realPosts.length > 0 ? realPosts : mockPosts)
    .slice(0, limit);

  const isLoading = loading || (useRealPosts && loadingReal);

  // Se useRealPosts está ativado mas não há URLs configurados, esconder
  if (useRealPosts && instagramPostUrls.length === 0) {
    // Componente escondido - configure URLs em: src/lib/instagram-helper.ts
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

      {/* Posts Grid */}
      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-lg bg-card shadow-soft hover:shadow-elegant transition-all duration-300"
            >
              {/* Thumbnail */}
              <img
                src={post.thumbnail}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="w-full">
                  <p className="text-white text-sm line-clamp-2 mb-2">
                    {post.caption}
                  </p>
                  <div className="flex items-center gap-4 text-white/80 text-xs">
                    <span className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Instagram Badge */}
              <div className="absolute top-2 right-2 p-1.5 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity">
                <Instagram className="w-4 h-4 text-white" />
              </div>
            </motion.a>
          ))}
        </div>
      )}

      {/* Info sobre atualização */}
      {!useRealPosts && (
        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            💡 Mostrando posts de exemplo. Para posts reais, veja{" "}
            <code className="px-1 py-0.5 bg-muted rounded text-primary">
              QUICK_INSTAGRAM.md
            </code>
          </p>
        </div>
      )}

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

// Declaração para TypeScript
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

export default InstagramFeed;
