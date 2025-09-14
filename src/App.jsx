import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import OrderHistory from "./pages/OrderHistory";
import { OrderProvider } from "./context/OrderContext";
import AdminDashboard from "./pages/AdminDashboard";
import { AdminProvider } from "./context/AdminContext";





function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <OrderProvider>
          <AdminProvider>
            <Router basename="/MrShrek-Store/">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/orders" element={<OrderHistory />} />
                <Route path="/admin" element={<AdminDashboard />} />
              </Routes>
            </Router>
          </AdminProvider>
        </OrderProvider>
      </CartProvider>
    </AuthProvider>
  );
}
export default App;
