import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { useQuery } from "@tanstack/react-query";
import { seedCourses } from "@/lib/seed-data";
import { fetchPublishedCourses } from "@/lib/public-api";

const FeaturedCourses = () => {
  const coursesQuery = useQuery({
    queryKey: ["courses"],
    queryFn: fetchPublishedCourses,
  });

  // Só usa seed quando a API já terminou e não retornou dados (evita flash de imagem errada)
  const allCourses =
    coursesQuery.data ??
    (coursesQuery.isFetched && !coursesQuery.isLoading ? seedCourses : []);
  const courses = allCourses.filter((c) => c.status === "published").slice(0, 4);
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <SectionHeading
              title="Cursos em Destaque"
              subtitle="Formações completas para sua jornada profissional"
              centered
            />
            <div className="text-center mt-6">
              <Link to="/cursos">
                <Button variant="outline" className="group border-primary text-primary hover:bg-primary hover:text-white">
                  Ver Todos os Cursos
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <p className="text-xs text-muted-foreground mt-4">
                Cursos livres, previstos pelo Decreto Presidencial nº 5.154/2004 e pela Lei nº 9.394/96.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <ScrollReveal key={course.id} direction="up" delay={index * 0.1}>
                <div className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                    {/* Badge */}
                    <div className="absolute top-4 right-4">
                      <Link to="/cursos-livres">
                        <div className="bg-primary text-white text-xs font-medium px-3 py-1 rounded-full hover:bg-primary/90 transition-colors">
                          Curso Livre
                        </div>
                      </Link>
                    </div>

                    {/* Title Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-heading text-xl font-bold text-white mb-1">
                        {course.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                      {course.summary}
                    </p>

                    {/* CTA */}
                    <Link to={`/curso/${course.slug}`}>
                      <Button className="w-full gradient-gold text-white group-hover:shadow-elegant transition-all">
                        Saiba Mais
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
