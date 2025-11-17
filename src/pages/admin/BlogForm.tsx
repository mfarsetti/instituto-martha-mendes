import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TagInput } from "@/components/admin/TagInput";
import { ImagePicker } from "@/components/admin/ImagePicker";
import { MarkdownEditor } from "@/components/admin/MarkdownEditor";
import { useData } from "@/contexts/DataContext";
import { useAuth } from "@/contexts/AuthContext";
import { ArrowLeft, Save, Eye } from "lucide-react";
import { toast } from "sonner";
import { PostStatus } from "@/types";

const BlogForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getPost, createPost, updatePost, isSlugUnique } = useData();
  const { user } = useAuth();
  
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [summary, setSummary] = useState("");
  const [image, setImage] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [content, setContent] = useState("");
  const [status, setStatus] = useState<PostStatus>("draft");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    if (id) {
      const post = getPost(id);
      if (post) {
        setTitle(post.title);
        setSlug(post.slug);
        setSummary(post.summary);
        setImage(post.image);
        setTags(post.tags);
        setContent(post.content);
        setStatus(post.status);
        setAuthor(post.author || "");
      }
    }
  }, [id, getPost]);

  useEffect(() => {
    if (!id && title && !slug) {
      const generatedSlug = title
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
      setSlug(generatedSlug);
    }
  }, [title, id, slug]);

  const handleSubmit = (e: React.FormEvent, publishNow = false) => {
    e.preventDefault();

    if (!title.trim() || title.length < 3) {
      toast.error("Título deve ter pelo menos 3 caracteres");
      return;
    }

    if (!slug.trim() || !isSlugUnique(slug, id, 'post')) {
      toast.error("Slug inválido ou já existe");
      return;
    }

    if (publishNow && content.length < 50) {
      toast.error("Conteúdo deve ter pelo menos 50 caracteres para publicar");
      return;
    }

    const postData = {
      title,
      slug,
      summary,
      image,
      tags,
      content,
      status: publishNow ? 'published' as PostStatus : status,
      publishedAt: publishNow ? new Date().toISOString() : null,
      author: author || user?.name,
    };

    if (id) {
      updatePost(id, postData);
      toast.success("Post atualizado com sucesso!");
    } else {
      createPost(postData);
      toast.success("Post criado com sucesso!");
    }

    navigate("/admin/blog");
  };

  return (
    <AdminLayout>
      <form onSubmit={(e) => handleSubmit(e, false)} className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/admin/blog">
              <Button type="button" variant="ghost" size="icon">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-heading font-bold text-foreground">
                {id ? "Editar Post" : "Novo Post"}
              </h1>
            </div>
          </div>
          <div className="flex gap-2">
            {slug && (
              <Button 
                type="button" 
                variant="outline"
                onClick={() => window.open(`/blog/${slug}`, '_blank')}
              >
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
            )}
            <Button type="submit" variant="outline">
              <Save className="w-4 h-4 mr-2" />
              Salvar Rascunho
            </Button>
            <Button type="button" onClick={(e) => handleSubmit(e, true)} className="gradient-gold text-white">
              Publicar
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            <div>
              <Label htmlFor="title">Título *</Label>
              <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>

            <div>
              <Label htmlFor="slug">Slug *</Label>
              <Input id="slug" value={slug} onChange={(e) => setSlug(e.target.value)} required />
            </div>

            <div>
              <Label htmlFor="summary">Resumo</Label>
              <Input id="summary" value={summary} onChange={(e) => setSummary(e.target.value)} />
            </div>

            <TagInput tags={tags} onChange={setTags} />
            <MarkdownEditor value={content} onChange={setContent} label="Conteúdo *" />
          </div>

          <div className="space-y-6">
            <div>
              <Label htmlFor="author">Autor</Label>
              <Input id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </div>

            <div>
              <Label htmlFor="status">Status</Label>
              <Select value={status} onValueChange={(v) => setStatus(v as PostStatus)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Rascunho</SelectItem>
                  <SelectItem value="published">Publicado</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <ImagePicker value={image} onChange={setImage} label="Imagem" />
          </div>
        </div>
      </form>
    </AdminLayout>
  );
};

export default BlogForm;
