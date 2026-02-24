import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ArrowLeft, Plus, Save, Trash2 } from "lucide-react";
import { toast } from "sonner";

import { apiFetch } from "@/admin/api";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import ImageUploadField from "@/admin/ImageUploadField";
import { Skeleton } from "@/components/ui/skeleton";

type Course = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  category: string;
  duration: string;
  modality: "Presencial" | "EAD" | "Hibrido";
  certification: "Extensao" | "Pos" | "Mestrado" | "Outro";
  investment: string | null;
  startDates: string[];
  image: string;
  hotmartUrl: string | null;
  hotmartText: string | null;
  content: string;
  status: "draft" | "published";
  seoTitle: string | null;
  seoDescription: string | null;
  students: number | null;
  modules: { id: string; title: string; topics: string[] }[];
  teachers: {
    id: string;
    name: string;
    photo: string;
    role: string;
    bio: string;
    specialties: string[];
  }[];
  faqs: { id: string; question: string; answer: string }[];
};

type ModuleDraft = { title: string; topicsText: string };
type TeacherDraft = { name: string; photo: string; role: string; bio: string; specialtiesText: string };
type FaqDraft = { question: string; answer: string };

const TEACHER_PHOTO_PLACEHOLDER =
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&auto=format";

export default function AdminCourseEditor() {
  const { id } = useParams();
  const isNew = id === undefined;
  const navigate = useNavigate();
  const qc = useQueryClient();

  const courseQuery = useQuery({
    queryKey: ["admin", "course", id],
    queryFn: () => apiFetch<{ course: Course }>(`/api/admin/courses/${id}`),
    enabled: !isNew,
  });

  const initial = useMemo<Course>(
    () => ({
      id: "",
      title: "",
      slug: "",
      summary: "",
      category: "",
      duration: "",
      modality: "EAD",
      certification: "Outro",
      investment: null,
      startDates: [],
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&h=900&fit=crop&auto=format",
      hotmartUrl: null,
      hotmartText: null,
      content: "",
      status: "draft",
      seoTitle: null,
      seoDescription: null,
      students: null,
      modules: [],
      teachers: [],
      faqs: [],
    }),
    [],
  );

  const [form, setForm] = useState<Course>(initial);
  const [startDatesText, setStartDatesText] = useState("");
  const [modules, setModules] = useState<ModuleDraft[]>([]);
  const [teachers, setTeachers] = useState<TeacherDraft[]>([]);
  const [faqs, setFaqs] = useState<FaqDraft[]>([]);

  useEffect(() => {
    if (courseQuery.data?.course) {
      const c = courseQuery.data.course;
      setForm(c);
      setStartDatesText(c.startDates.join(", "));
      setModules(c.modules.map((m) => ({ title: m.title, topicsText: m.topics.join("\n") })));
      setTeachers(
        c.teachers.map((t) => ({
          name: t.name,
          photo: t.photo,
          role: t.role,
          bio: t.bio,
          specialtiesText: t.specialties.join(", "),
        })),
      );
      setFaqs(c.faqs.map((f) => ({ question: f.question, answer: f.answer })));
    } else if (isNew) {
      setForm(initial);
      setStartDatesText("");
      setModules([]);
      setTeachers([]);
      setFaqs([]);
    }
  }, [courseQuery.data, isNew, initial]);

  const saveMutation = useMutation({
    mutationFn: async () => {
      const payload = {
        title: form.title,
        slug: form.slug || undefined,
        summary: form.summary,
        category: form.category,
        duration: form.duration,
        modality: form.modality,
        certification: form.certification,
        investment: form.investment,
        startDates: startDatesText
          .split(",")
          .map((d) => d.trim())
          .filter(Boolean),
        image: form.image,
        hotmartUrl: form.hotmartUrl?.trim() ? form.hotmartUrl.trim() : null,
        hotmartText: form.hotmartText?.trim() ? form.hotmartText.trim() : null,
        content: form.content,
        status: form.status,
        seoTitle: form.seoTitle,
        seoDescription: form.seoDescription,
        students: form.students,
        modules: modules
          .map((m) => ({
            title: m.title,
            topics: m.topicsText
              .split("\n")
              .map((t) => t.trim())
              .filter(Boolean),
          }))
          .filter((m) => m.title.trim().length > 0),
        teachers: teachers
          .map((t) => ({
            name: t.name,
            photo: t.photo,
            role: t.role,
            bio: t.bio,
            specialties: t.specialtiesText
              .split(",")
              .map((s) => s.trim())
              .filter(Boolean),
          }))
          .filter((t) => t.name.trim().length > 0),
        faqs: faqs
          .map((f) => ({ question: f.question, answer: f.answer }))
          .filter((f) => f.question.trim().length > 0),
      };

      if (isNew) {
        return apiFetch<{ course: Course }>("/api/admin/courses", {
          method: "POST",
          json: payload,
        });
      }

      return apiFetch<{ course: Course }>(`/api/admin/courses/${id}`, {
        method: "PUT",
        json: payload,
      });
    },
    onSuccess: async () => {
      toast.success("Curso salvo.");
      await qc.invalidateQueries({ queryKey: ["admin", "courses"] });
      navigate("/admin/courses");
    },
    onError: () => toast.error("Não foi possível salvar."),
  });

  if (!isNew && courseQuery.isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Skeleton className="h-9 w-24" />
            <div className="space-y-2">
              <Skeleton className="h-8 w-56" />
              <Skeleton className="h-4 w-44" />
            </div>
          </div>
          <Skeleton className="h-10 w-28" />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="border-2 shadow-soft p-6 lg:col-span-1 space-y-4">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-28 w-full" />
          </Card>
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-2 shadow-soft p-6 space-y-4">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-28 w-full" />
            </Card>
            <Card className="border-2 shadow-soft p-6 space-y-2">
              <Skeleton className="h-4 w-44" />
              <Skeleton className="h-[420px] w-full" />
            </Card>
            <Card className="border-2 shadow-soft p-6 space-y-2">
              <Skeleton className="h-6 w-36" />
              <Skeleton className="h-36 w-full" />
            </Card>
          </div>
        </div>
      </div>
    );
  }

  if (!isNew && courseQuery.isError) {
    return (
      <div className="space-y-3">
        <h1 className="font-heading text-2xl font-bold">Não foi possível carregar o curso</h1>
        <p className="text-muted-foreground">Tente novamente ou volte para a listagem.</p>
        <Link to="/admin/courses">
          <Button variant="outline">Voltar</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Link to="/admin/courses">
            <Button variant="outline" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          </Link>
          <div>
            <h1 className="font-heading text-3xl font-bold">
              {isNew ? "Novo curso" : "Editar curso"}
            </h1>
            <p className="text-muted-foreground">Dados gerais e conteúdo.</p>
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
            <Select
              value={form.status}
              onValueChange={(v) =>
                setForm((f) => ({ ...f, status: v as Course["status"] }))
              }
            >
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
            <Label>Modalidade</Label>
            <Select
              value={form.modality}
              onValueChange={(v) =>
                setForm((f) => ({ ...f, modality: v as Course["modality"] }))
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Presencial">Presencial</SelectItem>
                <SelectItem value="EAD">EAD</SelectItem>
                <SelectItem value="Hibrido">Híbrido</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Certificação</Label>
            <Select
              value={form.certification}
              onValueChange={(v) =>
                setForm((f) => ({ ...f, certification: v as Course["certification"] }))
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Extensao">Extensão</SelectItem>
                <SelectItem value="Pos">Pós</SelectItem>
                <SelectItem value="Mestrado">Mestrado</SelectItem>
                <SelectItem value="Outro">Outro</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Separator />

          <div className="space-y-2">
            <Label htmlFor="seoTitle">SEO Title</Label>
            <Input
              id="seoTitle"
              value={form.seoTitle ?? ""}
              onChange={(e) => setForm((f) => ({ ...f, seoTitle: e.target.value }))}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="seoDescription">SEO Description</Label>
            <Textarea
              id="seoDescription"
              value={form.seoDescription ?? ""}
              onChange={(e) =>
                setForm((f) => ({ ...f, seoDescription: e.target.value }))
              }
              className="min-h-[110px]"
            />
          </div>
        </Card>

        <div className="lg:col-span-2 space-y-6">
          <Card className="border-2 shadow-soft p-6 space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="title">Título</Label>
                <Input
                  id="title"
                  value={form.title}
                  onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="slug">Slug (opcional)</Label>
                <Input
                  id="slug"
                  value={form.slug}
                  onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))}
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="category">Categoria</Label>
                <Input
                  id="category"
                  value={form.category}
                  onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="duration">Duração</Label>
                <Input
                  id="duration"
                  value={form.duration}
                  onChange={(e) => setForm((f) => ({ ...f, duration: e.target.value }))}
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="investment">Investimento</Label>
                <Input
                  id="investment"
                  value={form.investment ?? ""}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, investment: e.target.value || null }))
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="startDates">Datas (separadas por vírgula)</Label>
                <Input
                  id="startDates"
                  value={startDatesText}
                  onChange={(e) => setStartDatesText(e.target.value)}
                  placeholder="2026-08-01, 2026-09-10"
                />
              </div>
            </div>

          <div className="space-y-2">
            <Label htmlFor="hotmartUrl">Link Hotmart (opcional)</Label>
            <Input
              id="hotmartUrl"
              value={form.hotmartUrl ?? ""}
              onChange={(e) =>
                setForm((f) => ({ ...f, hotmartUrl: e.target.value || null }))
              }
              placeholder="https://pay.hotmart.com/..."
            />
            <p className="text-xs text-muted-foreground">
              Se preenchido, o site exibirá um botão “Comprar na Hotmart” na página do curso.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="hotmartText">Texto do botão Hotmart (opcional)</Label>
            <Input
              id="hotmartText"
              value={form.hotmartText ?? ""}
              onChange={(e) =>
                setForm((f) => ({ ...f, hotmartText: e.target.value || null }))
              }
              placeholder="Ex: Comprar agora"
              maxLength={80}
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
              <Label htmlFor="summary">Resumo</Label>
              <Textarea
                id="summary"
                value={form.summary}
                onChange={(e) => setForm((f) => ({ ...f, summary: e.target.value }))}
                className="min-h-[120px]"
              />
            </div>
          </Card>

          <Card className="border-2 shadow-soft p-6 space-y-2">
            <Label htmlFor="content">Conteúdo</Label>
            <Textarea
              id="content"
              value={form.content}
              onChange={(e) => setForm((f) => ({ ...f, content: e.target.value }))}
              className="min-h-[420px]"
            />
          </Card>

          <Card className="border-2 shadow-soft p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-heading text-lg font-bold">Módulos</div>
                <div className="text-sm text-muted-foreground">Títulos e tópicos (1 por linha).</div>
              </div>
              <Button
                variant="outline"
                onClick={() => setModules((arr) => [...arr, { title: "", topicsText: "" }])}
              >
                <Plus className="mr-2 h-4 w-4" />
                Adicionar
              </Button>
            </div>
            <div className="space-y-4">
              {modules.map((m, idx) => (
                <div key={idx} className="rounded-xl border p-4 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="font-medium">Módulo {idx + 1}</div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-destructive"
                      onClick={() => setModules((arr) => arr.filter((_, i) => i !== idx))}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <Label>Título</Label>
                    <Input
                      value={m.title}
                      onChange={(e) =>
                        setModules((arr) =>
                          arr.map((x, i) => (i === idx ? { ...x, title: e.target.value } : x)),
                        )
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Tópicos</Label>
                    <Textarea
                      value={m.topicsText}
                      onChange={(e) =>
                        setModules((arr) =>
                          arr.map((x, i) =>
                            i === idx ? { ...x, topicsText: e.target.value } : x,
                          ),
                        )
                      }
                      className="min-h-[120px]"
                    />
                  </div>
                </div>
              ))}
              {modules.length === 0 && (
                <div className="text-sm text-muted-foreground">Nenhum módulo cadastrado.</div>
              )}
            </div>
          </Card>

          <Card className="border-2 shadow-soft p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-heading text-lg font-bold">Docentes</div>
                <div className="text-sm text-muted-foreground">Especialidades separadas por vírgula.</div>
              </div>
              <Button
                variant="outline"
                onClick={() =>
                  setTeachers((arr) => [
                    ...arr,
                    {
                      name: "",
                      photo: TEACHER_PHOTO_PLACEHOLDER,
                      role: "",
                      bio: "",
                      specialtiesText: "",
                    },
                  ])
                }
              >
                <Plus className="mr-2 h-4 w-4" />
                Adicionar
              </Button>
            </div>
            <div className="space-y-4">
              {teachers.map((t, idx) => (
                <div key={idx} className="rounded-xl border p-4 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="font-medium">Docente {idx + 1}</div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-destructive"
                      onClick={() => setTeachers((arr) => arr.filter((_, i) => i !== idx))}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label>Nome</Label>
                      <Input
                        value={t.name}
                        onChange={(e) =>
                          setTeachers((arr) =>
                            arr.map((x, i) => (i === idx ? { ...x, name: e.target.value } : x)),
                          )
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Cargo</Label>
                      <Input
                        value={t.role}
                        onChange={(e) =>
                          setTeachers((arr) =>
                            arr.map((x, i) => (i === idx ? { ...x, role: e.target.value } : x)),
                          )
                        }
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Bio</Label>
                    <Textarea
                      value={t.bio}
                      onChange={(e) =>
                        setTeachers((arr) =>
                          arr.map((x, i) => (i === idx ? { ...x, bio: e.target.value } : x)),
                        )
                      }
                      className="min-h-[120px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Especialidades</Label>
                    <Input
                      value={t.specialtiesText}
                      onChange={(e) =>
                        setTeachers((arr) =>
                          arr.map((x, i) =>
                            i === idx ? { ...x, specialtiesText: e.target.value } : x,
                          ),
                        )
                      }
                      placeholder="Crenças Limitantes, Transformação..."
                    />
                  </div>
                </div>
              ))}
              {teachers.length === 0 && (
                <div className="text-sm text-muted-foreground">Nenhum docente cadastrado.</div>
              )}
            </div>
          </Card>

          <Card className="border-2 shadow-soft p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-heading text-lg font-bold">FAQs</div>
                <div className="text-sm text-muted-foreground">Perguntas e respostas.</div>
              </div>
              <Button
                variant="outline"
                onClick={() => setFaqs((arr) => [...arr, { question: "", answer: "" }])}
              >
                <Plus className="mr-2 h-4 w-4" />
                Adicionar
              </Button>
            </div>
            <div className="space-y-4">
              {faqs.map((f, idx) => (
                <div key={idx} className="rounded-xl border p-4 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="font-medium">FAQ {idx + 1}</div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-destructive"
                      onClick={() => setFaqs((arr) => arr.filter((_, i) => i !== idx))}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <Label>Pergunta</Label>
                    <Input
                      value={f.question}
                      onChange={(e) =>
                        setFaqs((arr) =>
                          arr.map((x, i) =>
                            i === idx ? { ...x, question: e.target.value } : x,
                          ),
                        )
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Resposta</Label>
                    <Textarea
                      value={f.answer}
                      onChange={(e) =>
                        setFaqs((arr) =>
                          arr.map((x, i) =>
                            i === idx ? { ...x, answer: e.target.value } : x,
                          ),
                        )
                      }
                      className="min-h-[120px]"
                    />
                  </div>
                </div>
              ))}
              {faqs.length === 0 && (
                <div className="text-sm text-muted-foreground">Nenhum FAQ cadastrado.</div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

