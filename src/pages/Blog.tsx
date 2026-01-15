import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, Calendar, Clock, Search, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { seedPosts } from "@/lib/seed-data";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  const publishedPosts = seedPosts.filter(p => p.status === 'published');
  const categories = ["Todas", ...Array.from(new Set(publishedPosts.flatMap(p => p.tags)))];

  const filteredArticles = publishedPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todas" || post.tags.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Conhecimento e Inspiração</span>
              </div>
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
                Blog
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Artigos, pesquisas e conteúdos sobre terapias integrativas e desenvolvimento humano
              </p>

              {/* Search */}
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Buscar artigos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-14 bg-background shadow-soft"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-background border-b border-border sticky top-20 z-40 glass-effect">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-3 flex-wrap">
              {categories.map(category => (
                <Button
                  key={category}
                  size="sm"
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "gradient-gold text-white" : ""}
                >
                  <Tag className="w-4 h-4 mr-1" />
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {filteredArticles.length === 0 ? (
                <div className="text-center py-20">
                  <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                  <p className="text-lg text-muted-foreground">Nenhum artigo encontrado</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredArticles.map((article, index) => (
                    <Link
                      key={article.id}
                      to={`/blog/${article.slug}`}
                      className="group animate-fadeIn"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <article className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                        {/* Image */}
                        <div className="relative h-52 overflow-hidden">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          {article.tags && article.tags.length > 0 && (
                            <div className="absolute top-4 left-4">
                              <span className="bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                                {article.tags[0]}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-1 flex flex-col">
                          <h2 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                            {article.title}
                          </h2>
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
                            {article.summary}
                          </p>

                          {/* Meta */}
                          <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-3 h-3" />
                                <span>{new Date(article.publishedAt || article.createdAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="w-3 h-3" />
                                <span>{article.readTime}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-xs text-primary mt-2 font-medium">
                            Por {article.author}
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-4xl font-bold text-foreground mb-6">
                Receba Novos Artigos
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Inscreva-se na nossa newsletter e receba os melhores conteúdos diretamente no seu e-mail.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="h-12 bg-background"
                />
                <Button className="gradient-gold text-white shadow-elegant h-12">
                  Inscrever
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
