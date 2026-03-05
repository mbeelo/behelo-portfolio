'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'author' | 'admin';
  avatar?: string;
  createdAt: string;
  emailVerified: boolean;
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  register: (name: string, email: string, password: string, role?: 'user' | 'author') => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  updateProfile: (updates: Partial<User>) => Promise<{ success: boolean; error?: string }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock authentication - DO NOT USE IN PRODUCTION
// This is a development-only auth system with no real security
// Replace with proper authentication service before going live
const isDevelopment = process.env.NODE_ENV === 'development';

// Demo mode check - only allow demo features in development
function getDemoUser(): User | null {
  if (!isDevelopment) {
    console.warn('Demo authentication disabled in production');
    return null;
  }

  return {
    id: 'demo-user',
    email: 'demo@example.com',
    name: 'Demo User',
    role: 'user',
    avatar: '',
    createdAt: new Date().toISOString(),
    emailVerified: false
  };
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('behelo_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Error loading saved user:', error);
        localStorage.removeItem('behelo_user');
      }
    }
    setLoading(false);
  }, []);

  // Save user to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('behelo_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('behelo_user');
    }
  }, [user]);

  const login = async (email: string, password: string) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Development-only demo authentication
    if (!isDevelopment) {
      return { success: false, error: 'Authentication service unavailable. Please try again later.' };
    }

    // Demo login - only works with specific demo credentials
    if (email === 'demo@example.com' && password === 'demo123') {
      const demoUser = getDemoUser();
      if (demoUser) {
        setUser(demoUser);
        return { success: true };
      }
    }

    return { success: false, error: 'Invalid credentials. Use demo@example.com / demo123 for development testing.' };
  };

  const register = async (name: string, email: string, password: string, role: 'user' | 'author' = 'user') => {
    // Development-only registration
    if (!isDevelopment) {
      return { success: false, error: 'Registration service unavailable. Please contact support.' };
    }

    // Basic input validation
    if (!name || name.trim().length < 2) {
      return { success: false, error: 'Name must be at least 2 characters' };
    }
    if (!password || password.length < 8) {
      return { success: false, error: 'Password must be at least 8 characters' };
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return { success: false, error: 'Please enter a valid email address' };
    }

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // In development, just create a demo user
    const newUser: User = {
      id: `demo-${Date.now()}`,
      email: email.toLowerCase().trim(),
      name: name.trim(),
      role,
      avatar: '',
      createdAt: new Date().toISOString(),
      emailVerified: false
    };

    setUser(newUser);
    return { success: true };
  };

  const logout = () => {
    setUser(null);
  };

  const updateProfile = async (updates: Partial<User>) => {
    if (!user) {
      return { success: false, error: 'Not authenticated' };
    }

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Validate updates
    if (updates.email && !/\S+@\S+\.\S+/.test(updates.email)) {
      return { success: false, error: 'Please enter a valid email address' };
    }
    if (updates.name && updates.name.length < 2) {
      return { success: false, error: 'Name must be at least 2 characters' };
    }

    // Update user
    const updatedUser = { ...user, ...updates };

    // Development-only - no persistent storage needed

    setUser(updatedUser);
    return { success: true };
  };

  const value: AuthContextType = {
    user,
    loading,
    login,
    register,
    logout,
    updateProfile
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}