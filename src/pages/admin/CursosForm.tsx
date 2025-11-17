import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ImagePicker } from "@/components/admin/ImagePicker";
import { MarkdownEditor } from "@/components/admin/MarkdownEditor";
import { DatesArrayInput } from "@/components/admin/DatesArrayInput";
import { useData } from "@/contexts/DataContext";
import { ArrowLeft, Save, Eye } from "lucide-react";
import { toast } from "sonner";
import { CourseStatus, CourseModality, CourseCertification } from "@/types";

const CursosForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getCourse, createCourse, updateCourse, isSlugUnique } = useData();
  
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [summary, setSummary] = useState("");
  const [category, setCategory] = useState("");
  const [duration, setDuration] = useState("");
  const [modality, setModality] = useState<CourseModality>("EAD");
  const [certification, setCertification] = useState<CourseCertification>("Extensão");
  const [investment, setInvestment] = useState("");
  const [startDates, setStartDates] = useState<string[]>([""]);
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState<CourseStatus>("draft");
  const [seoTitle, setSeoTitle] = useState("");
  const [seoDescription, setSeoDescription] = useState("");

  useEffect(() => {
    if (id) {
      const course = getCourse(id);
      if (course) {
        setTitle(course.title);
        setSlug(course.slug);
        setSummary(course.summary);
        setCategory(course.category);
        setDuration(course.duration);
        setModality(course.modality);
        setCertification(course.certification);
        setInvestment(course.investment || "");
        setStartDates(course.startDates.length > 0 ? course.startDates : [""]);
        setImage(course.image);
        setContent(course.content);
        setStatus(course.status);
        setSeoTitle(course.seoTitle || "");
        setSeoDescription(course.seoDescription || "");
      }
    }
  }, [id, getCourse]);

  useEffect(() => {
    if (!id && title && !slug) {
      const generatedSlug = title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
      setSlug(generatedSlug);
    }
  }, [title, id, slug]);

  const handleSubmit = (e: React.FormEvent, publishNow = false) => {
    e.preventDefault();

    if (!title.trim() || title.length < 3) {
      toast.error("Título deve ter pelo menos 3 caracteres");
      return;
    }

    if (!slug.trim() || !isSlugUnique(slug, id, 'course')) {
      toast.error("Slug inválido ou já existe");
      return;
    }

    if (publishNow && (!summary || content.length < 50)) {
      toast.error("Preencha resumo e conteúdo para publicar");
      return;
    }

    const courseData = {
      title, slug, summary, category, duration, modality, certification,
      investment: investment || null,
      startDates: startDates.filter(d => d),
      image, content,
      status: publishNow ? 'published' as CourseStatus : status,
      seoTitle: seoTitle || null,
      seoDescription: seoDescription || null,
    };

    if (id) {
      updateCourse(id, courseData);
      toast.success("Curso atualizado!");
    } else {
      createCourse(courseData);
      toast.success("Curso criado!");
    }

    navigate("/admin/cursos");
  };

  return (
    <AdminLayout>
      <form onSubmit={(e) => handleSubmit(e, false)} className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/admin/cursos">
              <Button type="button" variant="ghost" size="icon"><ArrowLeft className="w-4 h-4" /></Button>
            </Link>
            <h1 className="text-3xl font-heading font-bold">{id ? "Editar Curso" : "Novo Curso"}</h1>
          </div>
          <div className="flex gap-2">
            {slug && (
              <Button 
                type="button" 
                variant="outline"
                onClick={() => window.open(`/cursos/${slug}`, '_blank')}
              >
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
            )}
            <Button type="submit" variant="outline"><Save className="w-4 h-4 mr-2" />Salvar Rascunho</Button>
            <Button type="button" onClick={(e) => handleSubmit(e, true)} className="gradient-gold text-white">Publicar</Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            <Input placeholder="Título *" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <Input placeholder="Slug *" value={slug} onChange={(e) => setSlug(e.target.value)} required />
            <Input placeholder="Resumo" value={summary} onChange={(e) => setSummary(e.target.value)} />
            <Input placeholder="Categoria" value={category} onChange={(e) => setCategory(e.target.value)} />
            <MarkdownEditor value={content} onChange={setContent} label="Conteúdo *" />
          </div>

          <div className="space-y-6">
            <Input placeholder="Duração (ex: 120h)" value={duration} onChange={(e) => setDuration(e.target.value)} />
            <Select value={modality} onValueChange={(v) => setModality(v as CourseModality)}>
              <SelectTrigger><SelectValue placeholder="Modalidade" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Presencial">Presencial</SelectItem>
                <SelectItem value="EAD">EAD</SelectItem>
                <SelectItem value="Híbrido">Híbrido</SelectItem>
              </SelectContent>
            </Select>
            <Select value={certification} onValueChange={(v) => setCertification(v as CourseCertification)}>
              <SelectTrigger><SelectValue placeholder="Certificação" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Extensão">Extensão</SelectItem>
                <SelectItem value="Pós">Pós</SelectItem>
                <SelectItem value="Mestrado">Mestrado</SelectItem>
                <SelectItem value="Outro">Outro</SelectItem>
              </SelectContent>
            </Select>
            <Input placeholder="Investimento" value={investment} onChange={(e) => setInvestment(e.target.value)} />
            <DatesArrayInput dates={startDates} onChange={setStartDates} />
            <ImagePicker value={image} onChange={setImage} label="Imagem" />
          </div>
        </div>
      </form>
    </AdminLayout>
  );
};

export default CursosForm;
