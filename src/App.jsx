import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import OrderHistory from "./pages/OrderHistory";
import { OrderProvider } from "./context/OrderContext";
import AdminDashboard from "./pages/AdminDashboard";
import { AdminProvider } from "./context/AdminContext";
import LoginPage from "./pages/LoginPage";
import ProtectedAdmin from "./components/ProtectedAdmin";
import { HeroProvider } from "./context/HeroContext";





function App() {

  return (
    <AuthProvider>
      <HeroProvider>
        <CartProvider>
          <OrderProvider>
            <AdminProvider>

              
              <Router basename="/MrShrek-Store/">
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/orders" element={<OrderHistory />} />
                  <Route
                        path="/admin"
                        element={
                          <ProtectedAdmin>
                            <AdminDashboard />
                          </ProtectedAdmin>
                        }
                  />
                  <Route path="/adminlogin" element={<LoginPage  />} />

                </Routes>
              </Router>
            </AdminProvider>
          </OrderProvider>
        </CartProvider>
      </HeroProvider>
    </AuthProvider>
  );
}
export default App;
