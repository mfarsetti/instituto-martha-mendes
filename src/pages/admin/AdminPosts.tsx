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

type Post = {
  id: string;
  title: string;
  slug: string;
  status: "draft" | "published";
  updatedAt: string;
};

export default function AdminPosts() {
  const qc = useQueryClient();

  const postsQuery = useQuery({
    queryKey: ["admin", "posts"],
    queryFn: () => apiFetch<{ posts: Post[] }>("/api/admin/posts"),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) =>
      apiFetch<{ ok: true }>(`/api/admin/posts/${id}`, { method: "DELETE" }),
    onSuccess: async () => {
      toast.success("Post excluído.");
      await qc.invalidateQueries({ queryKey: ["admin", "posts"] });
    },
    onError: () => toast.error("Não foi possível excluir."),
  });

  const posts = postsQuery.data?.posts ?? [];
  const sorted = useMemo(
    () => [...posts].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)),
    [posts],
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h1 className="font-heading text-3xl font-bold">Posts</h1>
          <p className="text-muted-foreground">Crie, edite e publique artigos do blog.</p>
        </div>
        <Link to="/admin/posts/new">
          <Button className="gradient-gold text-white">
            <Plus className="mr-2 h-4 w-4" />
            Novo post
          </Button>
        </Link>
      </div>

      <Card className="border-2 shadow-soft overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Título</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sorted.map((p) => (
              <TableRow key={p.id}>
                <TableCell className="font-medium">
                  <Link to={`/admin/posts/${p.id}`} className="hover:text-primary transition-colors">
                    {p.title}
                  </Link>
                </TableCell>
                <TableCell>
                  <Badge variant={p.status === "published" ? "default" : "secondary"}>
                    {p.status === "published" ? "Publicado" : "Rascunho"}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">{p.slug}</TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-destructive"
                    onClick={() => deleteMutation.mutate(p.id)}
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
                  Nenhum post cadastrado.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

