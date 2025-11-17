import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Metodologia from "./pages/Metodologia";
import Equipe from "./pages/Equipe";
import Cursos from "./pages/Cursos";
import CursoDetalhes from "./pages/CursoDetalhes";
import Blog from "./pages/Blog";
import Contato from "./pages/Contato";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/metodologia" element={<Metodologia />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/curso/:id" element={<CursoDetalhes />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/login" element={<Login />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
