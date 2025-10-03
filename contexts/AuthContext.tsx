'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { mockApi } from '@/lib/mock-data';
import type { User } from '@/types/api';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (credentials: { username: string; password: string }) => Promise<void>;
  logout: () => void;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check for existing token on mount
    const token = localStorage.getItem('access_token');
    if (token) {
      // In a real app, you'd verify the token with the backend
      setUser({
        id: 1,
        username: 'admin',
        email: 'admin@example.com',
        first_name: 'Admin',
        last_name: 'User',
        is_staff: true,
        is_active: true,
        date_joined: '2024-01-01T00:00:00Z',
      });
    }
    setIsLoading(false);
  }, []);

  const login = async (credentials: { username: string; password: string }) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const tokens = await mockApi.login(credentials);
      
      localStorage.setItem('access_token', tokens.access);
      localStorage.setItem('refresh_token', tokens.refresh);
      
      setUser({
        id: 1,
        username: credentials.username,
        email: 'admin@example.com',
        first_name: 'Admin',
        last_name: 'User',
        is_staff: true,
        is_active: true,
        date_joined: '2024-01-01T00:00:00Z',
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    setUser(null);
    setError(null);
  };

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    logout,
    error,
  };

  return (
    <AuthContext.Provider value={value}>
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