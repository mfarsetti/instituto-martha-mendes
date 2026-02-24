import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

import { apiFetch } from "@/admin/api";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Course = {
  id: string;
  title: string;
  slug: string;
  status: "draft" | "published";
  category: string;
  updatedAt: string;
};

export default function AdminCourses() {
  const qc = useQueryClient();

  const coursesQuery = useQuery({
    queryKey: ["admin", "courses"],
    queryFn: () => apiFetch<{ courses: Course[] }>("/api/admin/courses"),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) =>
      apiFetch<{ ok: true }>(`/api/admin/courses/${id}`, { method: "DELETE" }),
    onSuccess: async () => {
      toast.success("Curso excluído.");
      await qc.invalidateQueries({ queryKey: ["admin", "courses"] });
    },
    onError: () => toast.error("Não foi possível excluir."),
  });

  const courses = coursesQuery.data?.courses ?? [];
  const sorted = useMemo(
    () => [...courses].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)),
    [courses],
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h1 className="font-heading text-3xl font-bold">Cursos</h1>
          <p className="text-muted-foreground">Gerencie os cursos do site.</p>
        </div>
        <Link to="/admin/courses/new">
          <Button className="gradient-gold text-white">
            <Plus className="mr-2 h-4 w-4" />
            Novo curso
          </Button>
        </Link>
      </div>

      <Card className="border-2 shadow-soft overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Título</TableHead>
              <TableHead>Categoria</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sorted.map((c) => (
              <TableRow key={c.id}>
                <TableCell className="font-medium">
                  <Link
                    to={`/admin/courses/${c.id}`}
                    className="hover:text-primary transition-colors"
                  >
                    {c.title}
                  </Link>
                </TableCell>
                <TableCell className="text-muted-foreground">{c.category}</TableCell>
                <TableCell>
                  <Badge variant={c.status === "published" ? "default" : "secondary"}>
                    {c.status === "published" ? "Publicado" : "Rascunho"}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-destructive"
                    onClick={() => deleteMutation.mutate(c.id)}
                    disabled={deleteMutation.isPending}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            {sorted.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} className="text-center text-muted-foreground py-10">
                  Nenhum curso cadastrado.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

