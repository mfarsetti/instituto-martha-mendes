import { Link } from "react-router-dom";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useData } from "@/contexts/DataContext";
import { FileText, BookOpen, Plus, Calendar, TrendingUp } from "lucide-react";

const Dashboard = () => {
  const { posts, courses } = useData();

  const publishedPosts = posts.filter(p => p.status === 'published');
  const draftPosts = posts.filter(p => p.status === 'draft');
  const publishedCourses = courses.filter(c => c.status === 'published');
  const draftCourses = courses.filter(c => c.status === 'draft');

  const upcomingClasses = courses
    .filter(c => c.status === 'published' && c.startDates.length > 0)
    .flatMap(c => c.startDates.map(date => ({ course: c.title, date })))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 5);

  const recentPosts = [...posts]
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .slice(0, 5);

  const recentCourses = [...courses]
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .slice(0, 5);

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-heading font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-2">Visão geral do sistema</p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Posts Publicados</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{publishedPosts.length}</div>
              <p className="text-xs text-muted-foreground">{draftPosts.length} rascunhos</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cursos Publicados</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{publishedCourses.length}</div>
              <p className="text-xs text-muted-foreground">{draftCourses.length} rascunhos</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Próximas Turmas</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{upcomingClasses.length}</div>
              <p className="text-xs text-muted-foreground">Agendadas</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Conteúdo</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{posts.length + courses.length}</div>
              <p className="text-xs text-muted-foreground">Posts e Cursos</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Ações Rápidas</CardTitle>
            <CardDescription>Crie novo conteúdo</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            <Link to="/admin/blog/new">
              <Button className="gradient-gold text-white">
                <Plus className="w-4 h-4 mr-2" />
                Novo Post
              </Button>
            </Link>
            <Link to="/admin/cursos/new">
              <Button variant="outline">
                <Plus className="w-4 h-4 mr-2" />
                Novo Curso
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Recent Content */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Posts Recentes</CardTitle>
              <CardDescription>Últimas atualizações</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentPosts.length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center py-4">
                    Nenhum post cadastrado
                  </p>
                ) : (
                  recentPosts.map((post) => (
                    <div key={post.id} className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{post.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {post.status === 'published' ? '✓ Publicado' : '○ Rascunho'}
                          {' • '}
                          {new Date(post.updatedAt).toLocaleDateString('pt-BR')}
                        </p>
                      </div>
                      <Link to={`/admin/blog/${post.id}`}>
                        <Button variant="ghost" size="sm">Editar</Button>
                      </Link>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cursos Recentes</CardTitle>
              <CardDescription>Últimas atualizações</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentCourses.length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center py-4">
                    Nenhum curso cadastrado
                  </p>
                ) : (
                  recentCourses.map((course) => (
                    <div key={course.id} className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{course.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {course.status === 'published' ? '✓ Publicado' : '○ Rascunho'}
                          {' • '}
                          {new Date(course.updatedAt).toLocaleDateString('pt-BR')}
                        </p>
                      </div>
                      <Link to={`/admin/cursos/${course.id}`}>
                        <Button variant="ghost" size="sm">Editar</Button>
                      </Link>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
