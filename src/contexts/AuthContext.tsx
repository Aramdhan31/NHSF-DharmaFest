"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string, remember: boolean) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Default credentials - you can change these
const DEFAULT_USERNAME = "Dharmafest2026!";
const DEFAULT_PASSWORD = "NHSFDharmafest2026080326!!";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on mount
    if (typeof window !== "undefined") {
      const savedAuth = localStorage.getItem("dharmafest_auth");
      if (savedAuth === "true") {
        setIsAuthenticated(true);
      }
    }
    setIsLoading(false);
  }, []);

  const login = (username: string, password: string, remember: boolean): boolean => {
    // Simple authentication - you can change these credentials
    if (username === DEFAULT_USERNAME && password === DEFAULT_PASSWORD) {
      setIsAuthenticated(true);
      if (remember && typeof window !== "undefined") {
        localStorage.setItem("dharmafest_auth", "true");
      }
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    if (typeof window !== "undefined") {
      localStorage.removeItem("dharmafest_auth");
    }
  };

  // Don't render children until we've checked auth state
  if (isLoading) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
