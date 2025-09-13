import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";






function App() {
  return (
    <CartProvider>
      <Router basename="/MrShrek-Store">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product/:id" element={<Product/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </Router>
    </CartProvider>
   
  );
}

export default App;
