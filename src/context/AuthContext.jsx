// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });
  const [isAdmin, setIsAdmin] = useState(() => {
    const saved = localStorage.getItem("isAdmin");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isAdmin", JSON.stringify(isAdmin));
  }, [user, isAdmin]);

  const login = (email, password) => {
    if (email === "admin@shop.com" && password === "admin123") {
      setIsAdmin(true);
      setUser({ email, role: "admin" });
    } else {
      setIsAdmin(false);
      setUser({ email, role: "user" });
    }
  };

  const logout = () => {
    setUser(null);
    setIsAdmin(false);
    localStorage.removeItem("user");
    localStorage.removeItem("isAdmin");
  };

  const register = (email, password) => {
    setUser({ email, role: "user" });
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
