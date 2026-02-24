import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AuthProvider } from "@/admin/auth";
import RequireAuth from "@/admin/RequireAuth";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import MarthaCV from "./pages/MarthaCV";
import Metodologia from "./pages/Metodologia";
import Equipe from "./pages/Equipe";
import Cursos from "./pages/Cursos";
import CursoDetalhes from "./pages/CursoDetalhes";
import CursosLivres from "./pages/CursosLivres";
import EbookPage from "./pages/EbookPage";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import FAQ from "./pages/FAQ";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";
import Midia from "./pages/Midia";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminPosts from "./pages/admin/AdminPosts";
import AdminPostEditor from "./pages/admin/AdminPostEditor";
import AdminCourses from "./pages/admin/AdminCourses";
import AdminCourseEditor from "./pages/admin/AdminCourseEditor";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/martha-mendes" element={<MarthaCV />} />
        <Route path="/metodologia" element={<Metodologia />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/curso/:slug" element={<CursoDetalhes />} />
        <Route path="/cursos-livres" element={<CursosLivres />} />
        <Route path="/ebook" element={<EbookPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/midia" element={<Midia />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route element={<RequireAuth />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="posts" element={<AdminPosts />} />
            <Route path="posts/new" element={<AdminPostEditor />} />
            <Route path="posts/:id" element={<AdminPostEditor />} />
            <Route path="courses" element={<AdminCourses />} />
            <Route path="courses/new" element={<AdminCourseEditor />} />
            <Route path="courses/:id" element={<AdminCourseEditor />} />
          </Route>
        </Route>
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <AnimatedRoutes />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
