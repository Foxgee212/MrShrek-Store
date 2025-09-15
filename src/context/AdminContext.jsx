// context/AdminContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const AdminContext = createContext();

export function AdminProvider({ children }) {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem("products");
    return saved ? JSON.parse(saved) : [];
  });

  const [hero, setHero] = useState(() => {
    const saved = localStorage.getItem("hero");
    return saved ? JSON.parse(saved) : { title: "", subtitle: "", image: "" };
  });

  // persist products
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  // persist hero
  useEffect(() => {
    localStorage.setItem("hero", JSON.stringify(hero));
  }, [hero]);

  // products actions
  const addProduct = (product) => {
    setProducts((prev) => [...prev, { ...product, id: Date.now() }]);
  };
  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };
  const updateProduct = (id, updated) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updated } : p))
    );
  };

  return (
    <AdminContext.Provider
      value={{ products, addProduct, deleteProduct, updateProduct, hero, setHero }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  return useContext(AdminContext);
}
