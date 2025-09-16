import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useProduct } from "../context/ProductContext";
import { ShoppingCart, User, Search, LogOut, History, Shield, LogIn, UserPlus, Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const { cart } = useCart();
  const { user, logout } = useAuth();
  const { searchTerm, setSearchTerm } = useProduct();

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-yellow-500 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4 flex-wrap">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold text-white tracking-wide hover:scale-105 transition">
          MrShrek
        </Link>

        {/* Search Bar */}
        <div className="flex-1 mx-6 relative min-w-[200px] hidden md:block">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for products, brands and categories"
            className="w-full px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-yellow-300"
          />
          <Search className="absolute right-3 top-2.5 text-gray-500 cursor-pointer" size={20} />
        </div>

        {/* Hamburger menu (mobile) */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Right side (desktop) */}
        <div className="hidden md:flex items-center space-x-6 text-white font-medium">
          {user ? (
            <>
              <span className="flex items-center gap-2 bg-yellow-600 px-3 py-1 rounded-md">
                <User size={18} /> {user.email}
              </span>
              <Link to="/orders" className="flex items-center gap-1 hover:text-gray-200 transition">
                <History size={18} /> Orders
              </Link>
              <Link to="/adminlogin" className="flex items-center gap-1 hover:text-gray-200 transition">
                <Shield size={18} /> Admin
              </Link>
              <button onClick={logout} className="flex items-center gap-1 bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition">
                <LogOut size={16} /> Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="flex items-center gap-1 hover:text-gray-200 transition">
                <LogIn size={18} /> Login
              </Link>
              <Link to="/signup" className="flex items-center gap-1 hover:text-gray-200 transition">
                <UserPlus size={18} /> Sign Up
              </Link>
            </>
          )}

          {/* Cart */}
          <Link to="/cart" className="relative flex items-center gap-1 hover:text-gray-200 transition">
            <ShoppingCart size={22} />
            <span>Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-xs px-2 py-0.5 rounded-full shadow-lg">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-yellow-500 px-4 pb-4">
          <div className="flex flex-col space-y-2">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products..."
              className="px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-yellow-300"
            />
            {user ? (
              <>
                <span className="flex items-center gap-2 bg-yellow-600 px-3 py-1 rounded-md">
                  <User size={18} /> {user.email}
                </span>
                <Link to="/orders" className="flex items-center gap-1 hover:text-gray-200 transition">
                  <History size={18} /> Orders
                </Link>
                <Link to="/adminlogin" className="flex items-center gap-1 hover:text-gray-200 transition">
                  <Shield size={18} /> Admin
                </Link>
                <button onClick={logout} className="flex items-center gap-1 bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition">
                  <LogOut size={16} /> Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="flex items-center gap-1 hover:text-gray-200 transition">
                  <LogIn size={18} /> Login
                </Link>
                <Link to="/signup" className="flex items-center gap-1 hover:text-gray-200 transition">
                  <UserPlus size={18} /> Sign Up
                </Link>
              </>
            )}
            <Link to="/cart" className="relative flex items-center gap-1 hover:text-gray-200 transition">
              <ShoppingCart size={22} />
              <span>Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-xs px-2 py-0.5 rounded-full shadow-lg">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
