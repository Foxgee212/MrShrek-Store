// context/HeroContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const HeroContext = createContext();

export function HeroProvider({ children }) {
  // ✅ Load heroes from localStorage initially
  const [heroes, setHeroes] = useState(() => {
    const stored = localStorage.getItem("heroes");
    return stored ? JSON.parse(stored) : [];
  });

  // ✅ Save to localStorage whenever heroes update
  useEffect(() => {
    localStorage.setItem("heroes", JSON.stringify(heroes));
  }, [heroes]);

  // ✅ Add hero (supports file upload)
  const addHero = (hero) => {
    const newHero = { ...hero, id: Date.now() };
    setHeroes((prev) => [...prev, newHero]);
  };

  // ✅ Update hero
  const updateHero = (id, updatedHero) => {
    setHeroes((prev) =>
      prev.map((h) => (h.id === id ? { ...h, ...updatedHero } : h))
    );
  };

  // ✅ Delete hero
  const deleteHero = (id) => {
    setHeroes((prev) => prev.filter((h) => h.id !== id));
  };

  return (
    <HeroContext.Provider value={{ heroes, addHero, updateHero, deleteHero }}>
      {children}
    </HeroContext.Provider>
  );
}

export const useHero = () => useContext(HeroContext);
