import { createContext, useReducer, useContext, useEffect } from "react";

const CartContext = createContext();

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existing = state.cart.find((item) => item.id === action.product.id);
      const newCart = existing
        ? state.cart.map((item) =>
            item.id === action.product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...state.cart, { ...action.product, quantity: 1 }];
      return { ...state, cart: newCart };
    }

    case "INCREMENT":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };

    case "DECREMENT":
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.id === action.id ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter((item) => item.quantity > 0),
      };

    case "REMOVE_FROM_CART":
      return { ...state, cart: state.cart.filter((item) => item.id !== action.id) };

    case "CLEAR_CART":
      return { ...state, cart: [] };

    case "TOGGLE_WISHLIST":
      const exists = state.wishlist.includes(action.id);
      const newWishlist = exists
        ? state.wishlist.filter((id) => id !== action.id)
        : [...state.wishlist, action.id];
      return { ...state, wishlist: newWishlist };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Persist cart & wishlist
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
  }, [state.cart, state.wishlist]);

  // Cart actions
  const addToCart = (product) => dispatch({ type: "ADD_TO_CART", product });
  const removeFromCart = (id) => dispatch({ type: "REMOVE_FROM_CART", id });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });
  const increment = (id) => dispatch({ type: "INCREMENT", id });
  const decrement = (id) => dispatch({ type: "DECREMENT", id });
  const toggleWishlist = (id) => dispatch({ type: "TOGGLE_WISHLIST", id });

  // Derived values
  const totalItems = state.cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = state.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        wishlist: state.wishlist,
        addToCart,
        removeFromCart,
        clearCart,
        increment,
        decrement,
        toggleWishlist,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
