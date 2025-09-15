import { createContext, useReducer, useContext, useEffect } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existing = state.find((item) => item.id === action.product.id);
      if (existing) {
        return state.map((item) =>
          item.id === action.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.product, quantity: 1 }];
    }

    case "INCREMENT":
      return state.map((item) =>
        item.id === action.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case "DECREMENT":
      return state
        .map((item) =>
          item.id === action.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0); // remove if 0

    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.id);

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  // ✅ Load from localStorage initially
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, dispatch] = useReducer(cartReducer, storedCart);

  // ✅ Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Actions
  const addToCart = (product) => dispatch({ type: "ADD_TO_CART", product });
  const removeFromCart = (id) => dispatch({ type: "REMOVE_FROM_CART", id });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });
  const increment = (id) => dispatch({ type: "INCREMENT", id });
  const decrement = (id) => dispatch({ type: "DECREMENT", id });

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, increment, decrement }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
