import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ArrowLeft, Save } from "lucide-react";
import { toast } from "sonner";

import { apiFetch } from "@/admin/api";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ImageUploadField from "@/admin/ImageUploadField";
import { Skeleton } from "@/components/ui/skeleton";

type Post = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  image: string;
  tags: string[];
  content: string;
  status: "draft" | "published";
  publishedAt: string | null;
  author: string | null;
  readTime: string | null;
};

function toDatetimeLocal(iso: string | null): string {
  if (!iso) return "";
  try {
    return iso.slice(0, 16);
  } catch {
    return "";
  }
}

export default function AdminPostEditor() {
  const { id } = useParams();
  const isNew = id === undefined;
  const navigate = useNavigate();
  const qc = useQueryClient();

  const postQuery = useQuery({
    queryKey: ["admin", "post", id],
    queryFn: () => apiFetch<{ post: Post }>(`/api/admin/posts/${id}`),
    enabled: !isNew,
  });

  const initial = useMemo<Post>(
    () => ({
      id: "",
      title: "",
      slug: "",
      summary: "",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&h=900&fit=crop&auto=format",
      tags: [],
      content: "",
      status: "draft",
      publishedAt: null,
      author: "Instituto Martha Mendes",
      readTime: null,
    }),
    [],
  );

  const [form, setForm] = useState<Post>(initial);
  const [tagsText, setTagsText] = useState("");
  const [publishedAtLocal, setPublishedAtLocal] = useState("");

  useEffect(() => {
    if (postQuery.data?.post) {
      const p = postQuery.data.post;
      setForm(p);
      setTagsText(p.tags.join(", "));
      setPublishedAtLocal(toDatetimeLocal(p.publishedAt));
    } else if (isNew) {
      setForm(initial);
      setTagsText("");
      setPublishedAtLocal("");
    }
  }, [postQuery.data, isNew, initial]);

  const saveMutation = useMutation({
    mutationFn: async () => {
      const payload = {
        title: form.title,
        slug: form.slug || undefined,
        summary: form.summary,
        image: form.image,
        tags: tagsText
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
        content: form.content,
        status: form.status,
        publishedAt: publishedAtLocal ? new Date(publishedAtLocal).toISOString() : null,
        author: form.author,
        readTime: form.readTime,
      };

      if (isNew) {
        return apiFetch<{ post: Post }>("/api/admin/posts", {
          method: "POST",
          json: payload,
        });
      }

      return apiFetch<{ post: Post }>(`/api/admin/posts/${id}`, {
        method: "PUT",
        json: payload,
      });
    },
    onSuccess: async () => {
      toast.success("Post salvo.");
      await qc.invalidateQueries({ queryKey: ["admin", "posts"] });
      navigate("/admin/posts");
    },
    onError: () => toast.error("Não foi possível salvar."),
  });

  if (!isNew && postQuery.isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Skeleton className="h-9 w-24" />
            <div className="space-y-2">
              <Skeleton className="h-8 w-56" />
              <Skeleton className="h-4 w-40" />
            </div>
          </div>
          <Skeleton className="h-10 w-28" />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="border-2 shadow-soft p-6 lg:col-span-1 space-y-4">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </Card>
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-2 shadow-soft p-6 space-y-4">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-28 w-full" />
              <Skeleton className="h-40 w-full" />
            </Card>
            <Card className="border-2 shadow-soft p-6 space-y-2">
              <Skeleton className="h-4 w-44" />
              <Skeleton className="h-[420px] w-full" />
            </Card>
          </div>
        </div>
      </div>
    );
  }

  if (!isNew && postQuery.isError) {
    return (
      <div className="space-y-3">
        <h1 className="font-heading text-2xl font-bold">Não foi possível carregar o post</h1>
        <p className="text-muted-foreground">Tente novamente ou volte para a listagem.</p>
        <Link to="/admin/posts">
          <Button variant="outline">Voltar</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Link to="/admin/posts">
            <Button variant="outline" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          </Link>
          <div>
            <h1 className="font-heading text-3xl font-bold">
              {isNew ? "Novo post" : "Editar post"}
            </h1>
            <p className="text-muted-foreground">Conteúdo do blog.</p>
          </div>
        </div>
        <Button
          className="gradient-gold text-white"
          onClick={() => saveMutation.mutate()}
          disabled={saveMutation.isPending}
        >
          <Save className="mr-2 h-4 w-4" />
          Salvar
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="border-2 shadow-soft p-6 lg:col-span-1 space-y-4">
          <div className="space-y-2">
            <Label>Status</Label>
            <Select value={form.status} onValueChange={(v) => setForm((f) => ({ ...f, status: v as Post["status"] }))}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="draft">Rascunho</SelectItem>
                <SelectItem value="published">Publicado</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="publishedAt">Publicado em</Label>
            <Input
              id="publishedAt"
              type="datetime-local"
              value={publishedAtLocal}
              onChange={(e) => setPublishedAtLocal(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="author">Autor</Label>
            <Input
              id="author"
              value={form.author ?? ""}
              onChange={(e) => setForm((f) => ({ ...f, author: e.target.value }))}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="readTime">Tempo de leitura</Label>
            <Input
              id="readTime"
              placeholder="ex: 7 min"
              value={form.readTime ?? ""}
              onChange={(e) => setForm((f) => ({ ...f, readTime: e.target.value }))}
            />
          </div>
        </Card>

        <div className="lg:col-span-2 space-y-6">
          <Card className="border-2 shadow-soft p-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Título</Label>
              <Input
                id="title"
                value={form.title}
                onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="slug">Slug (opcional)</Label>
              <Input
                id="slug"
                value={form.slug}
                onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))}
                placeholder="ex: meu-post"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="summary">Resumo</Label>
              <Textarea
                id="summary"
                value={form.summary}
                onChange={(e) => setForm((f) => ({ ...f, summary: e.target.value }))}
                className="min-h-[120px]"
              />
            </div>

            <div className="space-y-2">
              <ImageUploadField
                label="Imagem"
                value={form.image}
                onChange={(next) => setForm((f) => ({ ...f, image: next }))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tags">Tags (separadas por vírgula)</Label>
              <Input
                id="tags"
                value={tagsText}
                onChange={(e) => setTagsText(e.target.value)}
                placeholder="Autoconhecimento, Espiritualidade"
              />
            </div>
          </Card>

          <Card className="border-2 shadow-soft p-6 space-y-2">
            <Label htmlFor="content">Conteúdo (Markdown)</Label>
            <Textarea
              id="content"
              value={form.content}
              onChange={(e) => setForm((f) => ({ ...f, content: e.target.value }))}
              className="min-h-[420px] font-mono text-sm"
            />
          </Card>
        </div>
      </div>
    </div>
  );
}

