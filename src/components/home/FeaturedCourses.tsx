import { Clock, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Link } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Florais de Bach",
    category: "Terapia Floral",
    duration: "120h",
    certification: "Certificado MEC",
    description: "Aprenda a arte de usar as essências florais para equilíbrio emocional e bem-estar integral.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Psicobiosofia®",
    category: "Metodologia Exclusiva",
    duration: "200h",
    certification: "Certificado MEC",
    description: "Mergulhe na metodologia que integra psicologia, biologia e filosofia para o autoconhecimento.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Hipnose e Regressão",
    category: "Terapia Regressiva",
    duration: "160h",
    certification: "Certificado MEC",
    description: "Técnicas avançadas de hipnose clínica e terapia regressiva para transformação profunda.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Bioeletrografia",
    category: "Diagnóstico Energético",
    duration: "80h",
    certification: "Certificado MEC",
    description: "Análise do campo bioelétrico humano através de tecnologia científica de ponta.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
  },
];

const FeaturedCourses = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <SectionHeading
              title="Cursos em Destaque"
              subtitle="Formações completas para sua jornada profissional"
            />
            <Link to="/cursos">
              <Button variant="outline" className="mt-4 md:mt-0 group border-primary text-primary hover:bg-primary hover:text-white">
                Ver Todos os Cursos
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <Link
                key={course.id}
                to={`/curso/${course.id}`}
                className="group animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4 bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                      {course.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {course.description}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-primary">
                        <Award className="w-4 h-4" />
                        <span>{course.certification}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
