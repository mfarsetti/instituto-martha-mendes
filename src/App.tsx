import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AuthProvider } from "@/contexts/AuthContext";
import { DataProvider } from "@/contexts/DataContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Metodologia from "./pages/Metodologia";
import Equipe from "./pages/Equipe";
import Cursos from "./pages/Cursos";
import CursoDetalhes from "./pages/CursoDetalhes";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import FAQ from "./pages/FAQ";
import Contato from "./pages/Contato";
import Login from "./pages/Login";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminBlogList from "./pages/admin/BlogList";
import AdminBlogForm from "./pages/admin/BlogForm";
import AdminCursosList from "./pages/admin/CursosList";
import AdminCursosForm from "./pages/admin/CursosForm";
import NotFound from "./pages/NotFound";
import Midia from "./pages/Midia";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/metodologia" element={<Metodologia />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/curso/:id" element={<CursoDetalhes />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/midia" element={<Midia />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
        <Route path="/admin/blog" element={<ProtectedRoute><AdminBlogList /></ProtectedRoute>} />
        <Route path="/admin/blog/new" element={<ProtectedRoute><AdminBlogForm /></ProtectedRoute>} />
        <Route path="/admin/blog/:id" element={<ProtectedRoute><AdminBlogForm /></ProtectedRoute>} />
        <Route path="/admin/cursos" element={<ProtectedRoute><AdminCursosList /></ProtectedRoute>} />
        <Route path="/admin/cursos/new" element={<ProtectedRoute><AdminCursosForm /></ProtectedRoute>} />
        <Route path="/admin/cursos/:id" element={<ProtectedRoute><AdminCursosForm /></ProtectedRoute>} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <DataProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AnimatedRoutes />
          </BrowserRouter>
        </TooltipProvider>
      </DataProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
