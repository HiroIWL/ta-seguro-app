import axios from "axios";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface User {
  nome: string;
  email: string;
  phone: string;
}

interface AuthContextProps {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
}

interface RegisterData {
  nome: string;
  email: string;
  phone: string;
  password: string;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post("https://ta-seguro-back.vercel.app/login", {
        email,
        password,
      });
      setUser(response.data);
    } catch (error: any) {
      if (error.response?.status === 400) {
        throw new Error("Email ou senha incorretos.");
      }
      throw new Error("Erro ao fazer login.");
    }
  };

  const register = async (data: RegisterData) => {
    try {
      await axios.post("https://ta-seguro-back.vercel.app/users", data);
    } catch (error) {
      throw new Error("Erro ao criar conta.");
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth deve ser usado dentro de AuthProvider");
  return context;
};
