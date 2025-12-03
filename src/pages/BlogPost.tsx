import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Share2, Tag } from "lucide-react";
import { toast } from "sonner";
import { useData } from "@/contexts/DataContext";
import { renderMarkdown } from "@/lib/markdown";
import WatermarkedImage from "@/components/blog/WatermarkedImage";
import ContentProtection from "@/components/blog/ContentProtection";

const BlogPost = () => {
  const { id } = useParams();
  const { getPostBySlug } = useData();

  const post = getPostBySlug(id || '');

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl font-heading font-bold mb-4">Post não encontrado</h1>
            <p className="text-muted-foreground mb-8">O post que você está procurando não existe ou foi removido.</p>
            <Link to="/blog">
              <Button className="gradient-gold text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar para o Blog
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: post.title,
          url: window.location.href,
        });
        toast.success("Compartilhado com sucesso!");
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast.success("Link copiado para a área de transferência!");
      }
    } catch (error) {
      if (error instanceof Error && error.name !== 'AbortError') {
        toast.error("Não foi possível compartilhar o artigo.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link to="/blog">
                <Button variant="ghost" className="mb-6">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar para o Blog
                </Button>
              </Link>

              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                {post.title}
              </h1>

              <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-6">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.publishedAt || post.createdAt).toLocaleDateString('pt-BR')}</span>
                </div>
                {post.readTime && (
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center space-x-1 bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full"
                  >
                    <Tag className="w-3 h-3" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-border pt-6">
                <span className="text-sm text-muted-foreground">
                  Por {post.author || 'Instituto Martha Mendes'}
                </span>
                <Button variant="outline" onClick={handleShare}>
                  <Share2 className="w-4 h-4 mr-2" />
                  Compartilhar
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Article Image */}
        {post.image && (
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <WatermarkedImage
                  src={post.image}
                  alt={post.title}
                  className="w-full h-[400px] rounded-2xl shadow-elegant"
                />
              </div>
            </div>
          </section>
        )}

        {/* Article Content */}
        <ContentProtection>
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <article
                  className="prose prose-xl max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-foreground prose-p:leading-relaxed prose-a:text-primary prose-strong:text-foreground prose-ul:text-foreground prose-ol:text-foreground prose-li:text-foreground"
                  dangerouslySetInnerHTML={{
                    __html: renderMarkdown(post.content)
                  }}
                />
              </div>
            </div>
          </section>
        </ContentProtection>

        {/* Share Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-foreground mb-4">Gostou deste artigo?</p>
              <Button className="gradient-gold text-white hover:opacity-90" onClick={handleShare}>
                <Share2 className="w-4 h-4 mr-2" />
                Compartilhar com amigos
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
