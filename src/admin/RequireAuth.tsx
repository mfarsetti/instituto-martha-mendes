import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useAuth } from "./auth";

export default function RequireAuth() {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return null;
  if (!user) return <Navigate to="/admin/login" replace state={{ from: location.pathname }} />;

  return <Outlet />;
}

