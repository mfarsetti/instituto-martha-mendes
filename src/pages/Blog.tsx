import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, Calendar, Clock, Search, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const articles = [
  {
    id: 1,
    title: "Os Benefícios Científicos da Meditação",
    excerpt: "Descubra como a prática meditativa regular transforma o cérebro e promove bem-estar físico e mental.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop",
    category: "Bem-estar",
    date: "15 Mar 2024",
    readTime: "8 min",
    author: "Dra. Martha Mendes",
  },
  {
    id: 2,
    title: "Florais de Bach: Ciência ou Placebo?",
    excerpt: "Uma análise científica sobre como as essências florais atuam no equilíbrio emocional.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop",
    category: "Terapias",
    date: "10 Mar 2024",
    readTime: "10 min",
    author: "Profª Ana Costa",
  },
  {
    id: 3,
    title: "Hipnose Clínica no Tratamento da Ansiedade",
    excerpt: "Como a hipnoterapia tem se mostrado eficaz no manejo de transtornos de ansiedade.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop",
    category: "Saúde Mental",
    date: "5 Mar 2024",
    readTime: "12 min",
    author: "Dr. Carlos Eduardo",
  },
  {
    id: 4,
    title: "Energia Sutil: O Que a Física Quântica Tem a Dizer",
    excerpt: "Explorando as conexões entre física moderna e práticas energéticas milenares.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    category: "Ciência",
    date: "1 Mar 2024",
    readTime: "15 min",
    author: "Prof. Ricardo Alves",
  },
  {
    id: 5,
    title: "Aromaterapia na Prática Clínica",
    excerpt: "Protocolos e aplicações terapêuticas de óleos essenciais baseados em evidências.",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&h=600&fit=crop",
    category: "Terapias",
    date: "25 Fev 2024",
    readTime: "7 min",
    author: "Profª Ana Costa",
  },
  {
    id: 6,
    title: "Psicobiosofia®: Uma Nova Visão do Ser Humano",
    excerpt: "Compreendendo a integração entre psicologia, biologia e filosofia na prática terapêutica.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
    category: "Metodologia",
    date: "20 Fev 2024",
    readTime: "20 min",
    author: "Dra. Martha Mendes",
  },
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  const categories = ["Todas", ...Array.from(new Set(articles.map(a => a.category)))];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todas" || article.category === selectedCategory;
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
                      to={`/blog/${article.id}`}
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
                          <div className="absolute top-4 left-4">
                            <span className="bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                              {article.category}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-1 flex flex-col">
                          <h2 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                            {article.title}
                          </h2>
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
                            {article.excerpt}
                          </p>

                          {/* Meta */}
                          <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-3 h-3" />
                                <span>{article.date}</span>
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
