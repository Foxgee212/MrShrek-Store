import { createContext, useContext, useState, useEffect } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [wishlist, setWishlist] = useState(() => JSON.parse(localStorage.getItem("wishlist")) || []);
  const [recentlyViewed, setRecentlyViewed] = useState(() => JSON.parse(localStorage.getItem("recentlyViewed")) || []);

  // Persist wishlist & recently viewed
  useEffect(() => localStorage.setItem("wishlist", JSON.stringify(wishlist)), [wishlist]);
  useEffect(() => localStorage.setItem("recentlyViewed", JSON.stringify(recentlyViewed)), [recentlyViewed]);

  const toggleWishlist = (productId) => {
    setWishlist(prev => prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]);
  };

  const addRecentlyViewed = (product) => {
    setRecentlyViewed(prev => {
      const filtered = prev.filter(p => p.id !== product.id);
      return [product, ...filtered].slice(0, 10); // max 10 items
    });
  };

  return (
    <ProductContext.Provider value={{
      products,
      setProducts,
      searchTerm,
      setSearchTerm,
      wishlist,
      toggleWishlist,
      recentlyViewed,
      addRecentlyViewed
    }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
