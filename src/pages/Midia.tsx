import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Instagram, Youtube, Music2, X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/animations/PageTransition";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface MediaItem {
  id: string;
  title: string;
  thumbnail: string;
  type: "video" | "image" | "audio";
  platform: "youtube" | "instagram" | "tiktok" | "spotify";
  embedUrl?: string;
  externalUrl: string;
  duration?: string;
  views?: string;
}

// Mock data - em produção viria de uma API ou CMS
const mediaData: { [key: string]: MediaItem[] } = {
  youtube: [
    {
      id: "yt1",
      title: "Introdução à Psicobiosofia®",
      thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=340&fit=crop",
      type: "video",
      platform: "youtube",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      externalUrl: "https://youtube.com",
      duration: "15:32",
      views: "12.5K"
    },
    {
      id: "yt2",
      title: "Terapias Integrativas na Prática",
      thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=340&fit=crop",
      type: "video",
      platform: "youtube",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      externalUrl: "https://youtube.com",
      duration: "22:18",
      views: "8.2K"
    },
    {
      id: "yt3",
      title: "Live: Perguntas e Respostas",
      thumbnail: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=340&fit=crop",
      type: "video",
      platform: "youtube",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      externalUrl: "https://youtube.com",
      duration: "1:02:45",
      views: "5.8K"
    },
    {
      id: "yt4",
      title: "Meditação Guiada para Iniciantes",
      thumbnail: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=340&fit=crop",
      type: "video",
      platform: "youtube",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      externalUrl: "https://youtube.com",
      duration: "18:00",
      views: "15.3K"
    },
    {
      id: "yt5",
      title: "Entrevista: Jornada Terapêutica",
      thumbnail: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=340&fit=crop",
      type: "video",
      platform: "youtube",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      externalUrl: "https://youtube.com",
      duration: "45:20",
      views: "3.1K"
    },
  ],
  instagram: [
    {
      id: "ig1",
      title: "Dica do dia: Autocuidado",
      thumbnail: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=400&fit=crop",
      type: "image",
      platform: "instagram",
      externalUrl: "https://instagram.com",
      views: "2.3K"
    },
    {
      id: "ig2",
      title: "Reflexão da semana",
      thumbnail: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=400&h=400&fit=crop",
      type: "image",
      platform: "instagram",
      externalUrl: "https://instagram.com",
      views: "1.8K"
    },
    {
      id: "ig3",
      title: "Bastidores do Instituto",
      thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop",
      type: "image",
      platform: "instagram",
      externalUrl: "https://instagram.com",
      views: "3.5K"
    },
    {
      id: "ig4",
      title: "Frase inspiradora",
      thumbnail: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=400&h=400&fit=crop",
      type: "image",
      platform: "instagram",
      externalUrl: "https://instagram.com",
      views: "4.1K"
    },
    {
      id: "ig5",
      title: "Nossos alunos",
      thumbnail: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=400&fit=crop",
      type: "image",
      platform: "instagram",
      externalUrl: "https://instagram.com",
      views: "2.9K"
    },
    {
      id: "ig6",
      title: "Evento especial",
      thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=400&fit=crop",
      type: "image",
      platform: "instagram",
      externalUrl: "https://instagram.com",
      views: "5.2K"
    },
  ],
  tiktok: [
    {
      id: "tk1",
      title: "3 técnicas de respiração",
      thumbnail: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=700&fit=crop",
      type: "video",
      platform: "tiktok",
      externalUrl: "https://tiktok.com",
      duration: "0:45",
      views: "45.2K"
    },
    {
      id: "tk2",
      title: "Mitos sobre meditação",
      thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=700&fit=crop",
      type: "video",
      platform: "tiktok",
      externalUrl: "https://tiktok.com",
      duration: "0:58",
      views: "32.1K"
    },
    {
      id: "tk3",
      title: "Um dia no Instituto",
      thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=700&fit=crop",
      type: "video",
      platform: "tiktok",
      externalUrl: "https://tiktok.com",
      duration: "1:02",
      views: "28.7K"
    },
    {
      id: "tk4",
      title: "Dica rápida de bem-estar",
      thumbnail: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=400&h=700&fit=crop",
      type: "video",
      platform: "tiktok",
      externalUrl: "https://tiktok.com",
      duration: "0:32",
      views: "51.3K"
    },
    {
      id: "tk5",
      title: "Respondendo perguntas",
      thumbnail: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=700&fit=crop",
      type: "video",
      platform: "tiktok",
      externalUrl: "https://tiktok.com",
      duration: "0:48",
      views: "19.8K"
    },
  ],
  spotify: [
    {
      id: "sp1",
      title: "Ep. 01: O que é Psicobiosofia?",
      thumbnail: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=400&fit=crop",
      type: "audio",
      platform: "spotify",
      embedUrl: "https://open.spotify.com/embed/episode/example",
      externalUrl: "https://spotify.com",
      duration: "45:00"
    },
    {
      id: "sp2",
      title: "Ep. 02: Jornada de Autoconhecimento",
      thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
      type: "audio",
      platform: "spotify",
      embedUrl: "https://open.spotify.com/embed/episode/example",
      externalUrl: "https://spotify.com",
      duration: "38:20"
    },
    {
      id: "sp3",
      title: "Ep. 03: Entrevista com Martha Mendes",
      thumbnail: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&h=400&fit=crop",
      type: "audio",
      platform: "spotify",
      embedUrl: "https://open.spotify.com/embed/episode/example",
      externalUrl: "https://spotify.com",
      duration: "52:15"
    },
    {
      id: "sp4",
      title: "Ep. 04: Terapias Integrativas",
      thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop",
      type: "audio",
      platform: "spotify",
      embedUrl: "https://open.spotify.com/embed/episode/example",
      externalUrl: "https://spotify.com",
      duration: "41:30"
    },
  ],
};

const platformConfig = {
  youtube: {
    name: "YouTube",
    icon: Youtube,
    color: "from-red-600 to-red-700",
    bgColor: "bg-red-600/20",
  },
  instagram: {
    name: "Instagram",
    icon: Instagram,
    color: "from-pink-500 via-purple-500 to-orange-400",
    bgColor: "bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-orange-400/20",
  },
  tiktok: {
    name: "TikTok",
    icon: Music2,
    color: "from-cyan-400 to-pink-500",
    bgColor: "bg-gradient-to-r from-cyan-400/20 to-pink-500/20",
  },
  spotify: {
    name: "Spotify",
    icon: Music2,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-500/20",
  },
};

const MediaRow = ({ 
  platform, 
  items, 
  onItemClick 
}: { 
  platform: keyof typeof platformConfig; 
  items: MediaItem[];
  onItemClick: (item: MediaItem) => void;
}) => {
  const config = platformConfig[platform];
  const Icon = config.icon;
  
  const scrollContainer = (direction: "left" | "right") => {
    const container = document.getElementById(`scroll-${platform}`);
    if (container) {
      const scrollAmount = direction === "left" ? -400 : 400;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className={`p-2 rounded-lg bg-gradient-to-r ${config.color}`}>
            <Icon className="w-5 h-5 text-white" />
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
            {config.name}
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative group">
          {/* Navigation Buttons */}
          <button
            onClick={() => scrollContainer("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur-sm p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-background"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scrollContainer("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur-sm p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-background"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Items */}
          <div
            id={`scroll-${platform}`}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`flex-shrink-0 cursor-pointer group/card ${
                  platform === "tiktok" ? "w-[180px]" : platform === "youtube" ? "w-[320px]" : "w-[200px]"
                }`}
                onClick={() => onItemClick(item)}
              >
                <div className="relative overflow-hidden rounded-xl bg-card shadow-soft hover:shadow-elegant transition-all duration-300">
                  {/* Thumbnail */}
                  <div className={`relative overflow-hidden ${
                    platform === "tiktok" ? "aspect-[9/16]" : platform === "youtube" ? "aspect-video" : "aspect-square"
                  }`}>
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                    
                    {/* Play Button */}
                    {item.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-all duration-300">
                        <div className={`p-4 rounded-full bg-gradient-to-r ${config.color} shadow-lg transform scale-75 group-hover/card:scale-100 transition-transform duration-300`}>
                          <Play className="w-8 h-8 text-white fill-white" />
                        </div>
                      </div>
                    )}

                    {/* Duration Badge */}
                    {item.duration && (
                      <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 rounded text-xs text-white font-medium">
                        {item.duration}
                      </div>
                    )}

                    {/* Platform Badge */}
                    <div className={`absolute top-2 left-2 p-1.5 rounded-lg ${config.bgColor} backdrop-blur-sm`}>
                      <Icon className="w-4 h-4 text-foreground" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-3">
                    <h3 className="font-medium text-sm text-foreground line-clamp-2 group-hover/card:text-primary transition-colors">
                      {item.title}
                    </h3>
                    {item.views && (
                      <p className="text-xs text-muted-foreground mt-1">{item.views} visualizações</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Midia = () => {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />
          
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(var(--primary), 0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(var(--primary), 0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px"
            }} />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
              >
                <Play className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Conteúdo Exclusivo</span>
              </motion.div>

              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Nossa{" "}
                <span className="bg-gradient-to-r from-gold via-primary to-purple bg-clip-text text-transparent">
                  Central de Mídia
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore nosso conteúdo em vídeos, podcasts e publicações nas principais plataformas digitais
              </p>
            </motion.div>

            {/* Platform Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 mt-12"
            >
              {Object.entries(platformConfig).map(([key, config]) => {
                const Icon = config.icon;
                return (
                  <div
                    key={key}
                    className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-colors"
                  >
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${config.color}`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-medium text-foreground">{config.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {mediaData[key as keyof typeof mediaData]?.length || 0} conteúdos
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Content Rows */}
        <div className="pb-20">
          <MediaRow platform="youtube" items={mediaData.youtube} onItemClick={setSelectedItem} />
          <MediaRow platform="instagram" items={mediaData.instagram} onItemClick={setSelectedItem} />
          <MediaRow platform="tiktok" items={mediaData.tiktok} onItemClick={setSelectedItem} />
          <MediaRow platform="spotify" items={mediaData.spotify} onItemClick={setSelectedItem} />
        </div>

        {/* Modal */}
        <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden bg-card border-border">
            {selectedItem && (
              <div>
                {/* Embed or Image */}
                <div className={`relative ${selectedItem.type === "video" ? "aspect-video" : "aspect-square max-h-[70vh]"} bg-black`}>
                  {selectedItem.embedUrl ? (
                    <iframe
                      src={selectedItem.embedUrl}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <img
                      src={selectedItem.thumbnail}
                      alt={selectedItem.title}
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                        {selectedItem.title}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        {selectedItem.duration && <span>{selectedItem.duration}</span>}
                        {selectedItem.views && <span>{selectedItem.views} visualizações</span>}
                      </div>
                    </div>
                    <Button
                      onClick={() => window.open(selectedItem.externalUrl, "_blank")}
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Abrir no {platformConfig[selectedItem.platform].name}
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Midia;
