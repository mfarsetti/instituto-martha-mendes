import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { BookOpen, FileText } from "lucide-react";

import { Card } from "@/components/ui/card";
import { apiFetch } from "@/admin/api";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type Post = { id: string; status: "draft" | "published" };
type Course = { id: string; status: "draft" | "published" };
type Lead = {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string | null;
  createdAt: string;
  course: { id: string; title: string; slug: string } | null;
};

function formatDateTime(iso: string) {
  try {
    return new Date(iso).toLocaleString("pt-BR");
  } catch {
    return iso;
  }
}

export default function AdminDashboard() {
  const [leadsPage, setLeadsPage] = useState(1);
  const leadsPageSize = 15;

  const postsQuery = useQuery({
    queryKey: ["admin", "posts"],
    queryFn: () => apiFetch<{ posts: Post[] }>("/api/admin/posts"),
  });

  const coursesQuery = useQuery({
    queryKey: ["admin", "courses"],
    queryFn: () => apiFetch<{ courses: Course[] }>("/api/admin/courses"),
  });

  const leadsQuery = useQuery({
    queryKey: ["admin", "leads", leadsPage],
    queryFn: () =>
      apiFetch<{
        leads: Lead[];
        total: number;
        page: number;
        pageSize: number;
        totalPages: number;
      }>(`/api/admin/leads?page=${leadsPage}&pageSize=${leadsPageSize}`),
  });

  const posts = postsQuery.data?.posts ?? [];
  const courses = coursesQuery.data?.courses ?? [];
  const leads = leadsQuery.data?.leads ?? [];
  const totalPages = leadsQuery.data?.totalPages ?? 1;

  const publishedPosts = posts.filter((p) => p.status === "published").length;
  const draftPosts = posts.filter((p) => p.status === "draft").length;

  const publishedCourses = courses.filter((c) => c.status === "published").length;
  const draftCourses = courses.filter((c) => c.status === "draft").length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Visão geral do conteúdo.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-6 border-2 shadow-soft">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-muted-foreground">Posts</div>
              <div className="text-3xl font-bold">{posts.length}</div>
              <div className="text-sm text-muted-foreground mt-2">
                Publicados: <span className="font-medium text-foreground">{publishedPosts}</span>{" "}
                • Rascunhos: <span className="font-medium text-foreground">{draftPosts}</span>
              </div>
            </div>
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <FileText className="h-6 w-6 text-primary" />
            </div>
          </div>
        </Card>

        <Card className="p-6 border-2 shadow-soft">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-muted-foreground">Cursos</div>
              <div className="text-3xl font-bold">{courses.length}</div>
              <div className="text-sm text-muted-foreground mt-2">
                Publicados: <span className="font-medium text-foreground">{publishedCourses}</span>{" "}
                • Rascunhos: <span className="font-medium text-foreground">{draftCourses}</span>
              </div>
            </div>
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
          </div>
        </Card>
      </div>

      <div className="space-y-2">
        <h2 className="font-heading text-xl font-bold">Interessados (Formulários)</h2>
        <p className="text-sm text-muted-foreground">
          Últimos registros enviados pela página de cursos.
        </p>
      </div>

      <Card className="border-2 shadow-soft overflow-hidden">
        {leadsQuery.isLoading ? (
          <div className="p-6 space-y-3">
            <Skeleton className="h-6 w-64" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>E-mail</TableHead>
                <TableHead>Telefone</TableHead>
                <TableHead>Curso</TableHead>
                <TableHead>Data</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leads.map((l) => (
                <TableRow key={l.id}>
                  <TableCell className="font-medium">{l.name}</TableCell>
                  <TableCell className="text-muted-foreground">{l.email}</TableCell>
                  <TableCell className="text-muted-foreground">{l.phone}</TableCell>
                  <TableCell className="text-muted-foreground">
                    {l.course ? l.course.title : "—"}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {formatDateTime(l.createdAt)}
                  </TableCell>
                </TableRow>
              ))}
              {leads.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center text-muted-foreground py-10">
                    Nenhum formulário registrado ainda.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        )}
      </Card>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setLeadsPage((p) => Math.max(1, p - 1));
              }}
              className={leadsPage <= 1 ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>

          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .slice(Math.max(0, leadsPage - 3), Math.max(0, leadsPage - 3) + 5)
            .map((p) => (
              <PaginationItem key={p}>
                <PaginationLink
                  href="#"
                  isActive={p === leadsPage}
                  onClick={(e) => {
                    e.preventDefault();
                    setLeadsPage(p);
                  }}
                >
                  {p}
                </PaginationLink>
              </PaginationItem>
            ))}

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setLeadsPage((p) => Math.min(totalPages, p + 1));
              }}
              className={leadsPage >= totalPages ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

