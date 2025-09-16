import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { AdminProvider } from "./context/AdminContext";
import ProtectedAdmin from "./components/ProtectedAdmin";
import { HeroProvider } from "./context/HeroContext";
import { OrderProvider } from "./context/OrderContext";
import ProtectedRoute from "./components/ProtectedRoute";


import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import OrderHistory from "./pages/OrderHistory";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLoginPage from "./pages/AdminLoginPage"







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
                  <Route path="/cart" element={
                                                <ProtectedRoute>
                                                  <Cart />
                                                </ProtectedRoute>
                                              } />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/orders" element={
                                                <ProtectedRoute>
                                                  <OrderHistory />
                                                </ProtectedRoute>
                                                } />
                  <Route
                        path="/admin"
                        element={
                          <ProtectedAdmin>
                            <AdminDashboard />
                          </ProtectedAdmin>
                        }
                  />
                  <Route path="/adminlogin" element={<AdminLoginPage  />} />

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
