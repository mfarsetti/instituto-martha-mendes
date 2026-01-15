import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Instagram, ExternalLink, Heart, MessageCircle, Loader2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { socialMedia } from '@/lib/social-config';

/**
 * INSTAGRAM BASIC DISPLAY API - Configuração
 * 
 * Este componente usa a Instagram Basic Display API para buscar posts automaticamente
 * 
 * SETUP COMPLETO em: INSTAGRAM_API_SETUP.md
 * 
 * Resumo rápido:
 * 1. Criar app em: https://developers.facebook.com/apps/
 * 2. Adicionar Instagram Basic Display
 * 3. Gerar Access Token
 * 4. Adicionar token no .env
 */

interface InstagramPost {
  id: string;
  caption?: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
}

interface InstagramFeedAPIProps {
  username?: string;
  limit?: number;
}

const InstagramFeedAPI = ({ 
  username = socialMedia.instagram.username || 'institutomarthamendes',
  limit = 6,
}: InstagramFeedAPIProps) => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Token do Instagram (deve estar no .env)
  const accessToken = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN;

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      // Se não tiver token, mostrar instruções
      if (!accessToken) {
        setError('TOKEN_NOT_CONFIGURED');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        // Buscar posts da API do Instagram
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${accessToken}&limit=${limit}`
        );

        if (!response.ok) {
          throw new Error(`Erro na API do Instagram: ${response.status}`);
        }

        const data = await response.json();

        if (data.error) {
          throw new Error(data.error.message);
        }

        setPosts(data.data || []);
      } catch (err) {
        console.error('Erro ao buscar posts do Instagram:', err);
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, [accessToken, limit]);

  // Se token não configurado, esconder componente
  if (error === 'TOKEN_NOT_CONFIGURED') {
    // Componente escondido quando não configurado
    // Para instruções, veja: INSTAGRAM_API_SETUP.md
    return null;
  }

  // Se houver erro na API, também esconder
  if (error && error !== 'TOKEN_NOT_CONFIGURED') {
    console.error('Instagram API Error:', error);
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
      {loading ? (
        <div className="flex flex-col items-center justify-center py-12 space-y-3">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">Carregando posts...</p>
        </div>
      ) : posts.length === 0 ? (
        <div className="text-center py-12">
          <Instagram className="w-12 h-12 mx-auto text-muted-foreground mb-3" />
          <p className="text-muted-foreground">Nenhum post encontrado</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {posts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-lg bg-card shadow-soft hover:shadow-elegant transition-all duration-300"
            >
              {/* Thumbnail */}
              <img
                src={post.media_type === 'VIDEO' && post.thumbnail_url ? post.thumbnail_url : post.media_url}
                alt={post.caption || 'Instagram post'}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="w-full">
                  <p className="text-white text-sm line-clamp-2 mb-2">
                    {post.caption || 'Ver post'}
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

              {/* Video Badge */}
              {post.media_type === 'VIDEO' && (
                <div className="absolute top-2 left-2 px-2 py-1 rounded bg-black/70 backdrop-blur-sm">
                  <span className="text-xs text-white font-medium">▶ Vídeo</span>
                </div>
              )}

              {/* Carousel Badge */}
              {post.media_type === 'CAROUSEL_ALBUM' && (
                <div className="absolute top-2 left-2 px-2 py-1 rounded bg-black/70 backdrop-blur-sm">
                  <span className="text-xs text-white font-medium">📸 Álbum</span>
                </div>
              )}
            </motion.a>
          ))}
        </div>
      )}

      {/* Status */}
      <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span>Atualizado automaticamente via Instagram API</span>
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

export default InstagramFeedAPI;
