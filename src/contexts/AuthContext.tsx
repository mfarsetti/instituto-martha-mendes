import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthSession } from '@/types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Demo users
const DEMO_USERS = [
  { id: '1', email: 'admin@imm.com', password: 'admin123', name: 'Admin IMM', role: 'admin' as const },
  { id: '2', email: 'editor@imm.com', password: 'editor123', name: 'Editor IMM', role: 'editor' as const },
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session on mount
    const sessionData = localStorage.getItem('imm_auth');
    if (sessionData) {
      try {
        const session: AuthSession = JSON.parse(sessionData);
        if (session.expiresAt > Date.now()) {
          setUser(session.user);
        } else {
          localStorage.removeItem('imm_auth');
        }
      } catch (error) {
        localStorage.removeItem('imm_auth');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    const demoUser = DEMO_USERS.find(u => u.email === email && u.password === password);
    
    if (!demoUser) {
      return { success: false, error: 'Credenciais inválidas' };
    }

    const user: User = {
      id: demoUser.id,
      email: demoUser.email,
      name: demoUser.name,
      role: demoUser.role,
    };

    const session: AuthSession = {
      user,
      expiresAt: Date.now() + (24 * 60 * 60 * 1000), // 24 hours
    };

    localStorage.setItem('imm_auth', JSON.stringify(session));
    setUser(user);

    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem('imm_auth');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
