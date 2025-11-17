import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Clock, Award, Users, BookOpen, Filter } from "lucide-react";
import { Link } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Florais de Bach",
    category: "Terapia Floral",
    modality: "Online",
    duration: "120h",
    certification: "Certificado MEC",
    students: 2500,
    description: "Formação completa em terapia floral com as 38 essências do Dr. Edward Bach. Aprenda diagnóstico, preparação e prescrição floral.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Psicobiosofia®",
    category: "Metodologia Exclusiva",
    modality: "Híbrido",
    duration: "200h",
    certification: "Certificado MEC",
    students: 1800,
    description: "Metodologia exclusiva que integra psicologia, biologia e filosofia para o autoconhecimento e transformação pessoal profunda.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Hipnose e Regressão",
    category: "Terapia Regressiva",
    modality: "Online",
    duration: "160h",
    certification: "Certificado MEC",
    students: 3200,
    description: "Técnicas avançadas de hipnose clínica, terapia regressiva e ericsoniana para transformação profunda do inconsciente.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Bioeletrografia",
    category: "Diagnóstico Energético",
    modality: "Presencial",
    duration: "80h",
    certification: "Certificado MEC",
    students: 950,
    description: "Análise do campo bioelétrico humano através de tecnologia científica. Diagnóstico energético de alta precisão.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    title: "Aromaterapia Clínica",
    category: "Terapia Natural",
    modality: "Online",
    duration: "100h",
    certification: "Certificado MEC",
    students: 2100,
    description: "Uso terapêutico de óleos essenciais puros. Propriedades, aplicações clínicas e protocolos de tratamento.",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    title: "Reiki Tradicional",
    category: "Terapia Energética",
    modality: "Híbrido",
    duration: "60h",
    certification: "Certificado MEC",
    students: 4500,
    description: "Sistema Usui de cura natural. Níveis 1, 2 e 3 com iniciação presencial e prática supervisionada.",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&h=600&fit=crop",
  },
];

const Cursos = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedModality, setSelectedModality] = useState("Todos");

  const categories = ["Todos", ...Array.from(new Set(courses.map(c => c.category)))];
  const modalities = ["Todos", "Online", "Presencial", "Híbrido"];

  const filteredCourses = courses.filter(course => {
    const categoryMatch = selectedCategory === "Todos" || course.category === selectedCategory;
    const modalityMatch = selectedModality === "Todos" || course.modality === selectedModality;
    return categoryMatch && modalityMatch;
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
                <span className="text-sm font-medium text-primary">Formação Profissional</span>
              </div>
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
                Nossos Cursos
              </h1>
              <p className="text-xl text-muted-foreground">
                Formações reconhecidas pelo MEC que transformam vidas e carreiras
              </p>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 bg-background border-b border-border sticky top-20 z-40 glass-effect">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">Filtrar por:</span>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <div className="flex gap-2">
                  {categories.map(category => (
                    <Button
                      key={category}
                      size="sm"
                      variant={selectedCategory === category ? "default" : "outline"}
                      onClick={() => setSelectedCategory(category)}
                      className={selectedCategory === category ? "gradient-gold text-white" : ""}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  {modalities.map(modality => (
                    <Button
                      key={modality}
                      size="sm"
                      variant={selectedModality === modality ? "default" : "outline"}
                      onClick={() => setSelectedModality(modality)}
                      className={selectedModality === modality ? "gradient-purple text-white" : ""}
                    >
                      {modality}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="mb-8 text-center">
                <p className="text-muted-foreground">
                  {filteredCourses.length} {filteredCourses.length === 1 ? 'curso encontrado' : 'cursos encontrados'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map((course, index) => (
                  <div
                    key={course.id}
                    className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fadeIn"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      
                      {/* Badges */}
                      <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                        <div className="bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                          {course.category}
                        </div>
                        <div className="bg-secondary text-white text-xs font-medium px-3 py-1 rounded-full">
                          {course.modality}
                        </div>
                      </div>

                      {/* Title Overlay */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="font-heading text-2xl font-bold text-white mb-1">
                          {course.title}
                        </h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                        {course.description}
                      </p>

                      {/* Meta Info */}
                      <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-border">
                        <div className="text-center">
                          <Clock className="w-5 h-5 text-primary mx-auto mb-1" />
                          <div className="text-xs font-medium text-foreground">{course.duration}</div>
                        </div>
                        <div className="text-center">
                          <Award className="w-5 h-5 text-primary mx-auto mb-1" />
                          <div className="text-xs font-medium text-foreground">MEC</div>
                        </div>
                        <div className="text-center">
                          <Users className="w-5 h-5 text-primary mx-auto mb-1" />
                          <div className="text-xs font-medium text-foreground">{course.students.toLocaleString()}</div>
                        </div>
                      </div>

                      {/* CTA */}
                      <Link to={`/curso/${course.id}`}>
                        <Button className="w-full gradient-gold text-white group-hover:shadow-elegant transition-all">
                          Saiba Mais
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Cursos;
