// Configuração centralizada das redes sociais do Instituto Martha Mendes

export const socialMedia = {
  instagram: {
    name: 'Instagram',
    handle: '@institutomarthamendes',
    username: 'institutomarthamendes',
    url: 'https://instagram.com/institutomarthamendes',
    description: 'Conteúdo diário sobre desenvolvimento pessoal e terapias integrativas',
    embedCode: '', // Adicionar código de embed do Instagram quando disponível
    profileUrl: 'https://www.instagram.com/institutomarthamendes/',
  },
  youtube: {
    name: 'YouTube',
    handle: '@SimplesMenteMartha',
    url: 'https://www.youtube.com/@SimplesMenteMartha',
    channelId: '', // Adicionar ID do canal quando disponível
    description: 'Vídeos educativos, meditações guiadas e entrevistas',
  },
  facebook: {
    name: 'Facebook',
    handle: 'Instituto Martha Mendes',
    url: 'https://facebook.com/institutomarthamendes',
    pageId: '', // Adicionar ID da página quando disponível
    description: 'Atualizações e eventos do instituto',
  },
  linkedin: {
    name: 'LinkedIn',
    handle: 'Martha Mendes',
    url: 'https://www.linkedin.com/in/martha-mendes-94581a21',
    description: 'Conteúdo profissional e oportunidades',
  },
  tiktok: {
    name: 'TikTok',
    handle: '@institutomarthamendes',
    url: 'https://tiktok.com/@institutomarthamendes',
    description: 'Dicas rápidas e conteúdo dinâmico',
  },
  spotify: {
    name: 'Spotify',
    handle: 'Instituto Martha Mendes Podcast',
    url: 'https://open.spotify.com/show/institutomarthamendes',
    showId: '', // Adicionar ID do show quando disponível
    description: 'Podcast sobre psicologia, autoconhecimento e bem-estar',
  },
  whatsapp: {
    name: 'WhatsApp',
    phone: '+5511987654321', // Atualizar com número real
    url: 'https://wa.me/5511987654321',
    description: 'Atendimento direto',
  },
  email: {
    name: 'E-mail',
    address: 'contato@institutomarthamendes.com.br',
    url: 'mailto:contato@institutomarthamendes.com.br',
    description: 'Contato institucional',
  },
};

// Links diretos para facilitar uso
export const socialLinks = {
  instagram: socialMedia.instagram.url,
  youtube: socialMedia.youtube.url,
  facebook: socialMedia.facebook.url,
  linkedin: socialMedia.linkedin.url,
  tiktok: socialMedia.tiktok.url,
  spotify: socialMedia.spotify.url,
  whatsapp: socialMedia.whatsapp.url,
  email: socialMedia.email.url,
};

// Configuração para widgets embarcados
export const socialEmbeds = {
  // Instagram Feed Widget
  // Para usar: https://embedsocial.com/products/embedfeed/
  instagram: {
    enabled: false, // Alterar para true quando configurar
    widgetId: '', // Adicionar widget ID
  },
  
  // YouTube Channel Widget
  // Para usar: https://developers.google.com/youtube/player_parameters
  youtube: {
    enabled: false,
    playlistId: '', // Adicionar playlist ID para mostrar últimos vídeos
  },
  
  // Spotify Podcast Widget
  spotify: {
    enabled: false,
    embedUrl: '', // Adicionar URL de embed do podcast
  },
};

// Função auxiliar para obter links de compartilhamento
export const getShareUrl = (platform: keyof typeof socialMedia, content?: { title?: string; url?: string; text?: string }) => {
  const { title = '', url = window.location.href, text = '' } = content || {};
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedText = encodeURIComponent(text);

  const shareUrls: Record<string, string> = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedText}%0A%0A${encodedUrl}`,
  };

  return shareUrls[platform] || encodedUrl;
};
