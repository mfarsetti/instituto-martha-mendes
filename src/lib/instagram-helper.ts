/**
 * Utilitário para buscar informações de posts do Instagram
 * Usa a API pública oEmbed do Instagram (não requer autenticação)
 */

export interface InstagramPost {
  id: string;
  url: string;
  caption: string;
  thumbnail: string;
  author: string;
  timestamp?: string;
}

/**
 * Busca informações de um post do Instagram via oEmbed
 * @param postUrl URL completa do post (ex: https://www.instagram.com/p/CODIGO/)
 */
export const fetchInstagramPost = async (postUrl: string): Promise<InstagramPost | null> => {
  try {
    // API pública oEmbed do Instagram
    const oembedUrl = `https://graph.instagram.com/oembed?url=${encodeURIComponent(postUrl)}`;
    
    const response = await fetch(oembedUrl);
    
    if (!response.ok) {
      console.error('Erro ao buscar post do Instagram:', response.status);
      return null;
    }

    const data = await response.json();

    // Extrair ID do post da URL
    const postId = postUrl.match(/\/p\/([^\/]+)\//)?.[1] || '';

    return {
      id: postId,
      url: postUrl,
      caption: data.title || '',
      thumbnail: data.thumbnail_url || '',
      author: data.author_name || '',
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    console.error('Erro ao processar post do Instagram:', error);
    return null;
  }
};

/**
 * Busca múltiplos posts do Instagram
 * @param postUrls Array de URLs dos posts
 */
export const fetchMultipleInstagramPosts = async (
  postUrls: string[]
): Promise<InstagramPost[]> => {
  const promises = postUrls.map(url => fetchInstagramPost(url));
  const results = await Promise.all(promises);
  return results.filter((post): post is InstagramPost => post !== null);
};

/**
 * Exemplo de uso:
 * 
 * // URLs dos últimos posts (obter manualmente do perfil @institutomarthamendes)
 * const postUrls = [
 *   'https://www.instagram.com/p/CODIGO1/',
 *   'https://www.instagram.com/p/CODIGO2/',
 *   'https://www.instagram.com/p/CODIGO3/',
 * ];
 * 
 * const posts = await fetchMultipleInstagramPosts(postUrls);
 * console.log(posts);
 */

/**
 * Hook React para usar no componente
 */
import { useState, useEffect } from 'react';

export const useInstagramPosts = (postUrls: string[]) => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const fetchedPosts = await fetchMultipleInstagramPosts(postUrls);
        setPosts(fetchedPosts);
        setError(null);
      } catch (err) {
        setError('Erro ao carregar posts do Instagram');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (postUrls.length > 0) {
      loadPosts();
    }
  }, [postUrls.join(',')]);

  return { posts, loading, error };
};

/**
 * Posts configurados do Instagram @institutomarthamendes
 * IMPORTANTE: Atualizar esses URLs manualmente com os últimos posts
 */
export const instagramPostUrls = [
  // Adicione os URLs dos últimos posts aqui
  // Formato: 'https://www.instagram.com/p/CODIGO_DO_POST/'
  
  // Exemplo (substituir pelos posts reais):
  // 'https://www.instagram.com/p/ABC123/',
  // 'https://www.instagram.com/p/DEF456/',
  // 'https://www.instagram.com/p/GHI789/',
  // 'https://www.instagram.com/p/JKL012/',
  // 'https://www.instagram.com/p/MNO345/',
  // 'https://www.instagram.com/p/PQR678/',
];

/**
 * COMO USAR:
 * 
 * 1. Vá até https://www.instagram.com/institutomarthamendes/
 * 2. Abra os últimos 6 posts
 * 3. Copie o link de cada post
 * 4. Cole nos instagramPostUrls acima
 * 5. O componente InstagramFeed vai buscar automaticamente os dados
 */
