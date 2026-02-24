import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { BookOpen, FileText, LayoutDashboard, LogOut } from "lucide-react";

import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { useAuth } from "@/admin/auth";

export default function AdminLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const onLogout = async () => {
    await logout();
    navigate("/admin/login", { replace: true });
  };

  return (
    <SidebarProvider>
      <Sidebar variant="inset" collapsible="icon">
        <SidebarHeader className="border-b border-sidebar-border">
          <div className="px-2 py-3">
            <div className="flex items-center gap-3 justify-center">
              <img src={logo} alt="Instituto Martha Mendes" className="h-15 w-auto" />
              
            </div>
          </div>
        </SidebarHeader>

        <SidebarContent className="py-2">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Dashboard">
                <NavLink
                  to="/admin"
                  end
                  className={({ isActive }) =>
                    cn(isActive && "bg-sidebar-accent text-sidebar-accent-foreground")
                  }
                >
                  <LayoutDashboard />
                  <span>Dashboard</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Posts">
                <NavLink
                  to="/admin/posts"
                  className={({ isActive }) =>
                    cn(isActive && "bg-sidebar-accent text-sidebar-accent-foreground")
                  }
                >
                  <FileText />
                  <span>Posts</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Cursos">
                <NavLink
                  to="/admin/courses"
                  className={({ isActive }) =>
                    cn(isActive && "bg-sidebar-accent text-sidebar-accent-foreground")
                  }
                >
                  <BookOpen />
                  <span>Cursos</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>

        <SidebarFooter className="border-t border-sidebar-border p-2">
          <div className="px-2 py-2">
            <div className="text-xs text-sidebar-foreground/70">Logado como</div>
            <div className="text-sm font-medium text-sidebar-foreground truncate">
              {user?.name} • {user?.role}
            </div>
          </div>
          <Button variant="outline" className="w-full" onClick={onLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Sair
          </Button>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset>
        <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
          <div className="flex items-center gap-3 px-4 py-3">
            <SidebarTrigger />
            <div className="flex-1" />
          </div>
        </header>

        <main className="p-6">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

