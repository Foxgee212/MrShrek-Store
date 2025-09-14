import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { cart } = useCart();
  const { user, logout } = useAuth();

  return (
    <nav className="bg-yellow-500 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-2xl font-bold text-white">MyShop</Link>

        {/* Search */}
        <div className="flex-1 mx-6">
          <input
            type="text"
            placeholder="Search for products, brands and categories"
            className="w-full px-4 py-2 rounded-md outline-none"
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-6 text-white font-medium">
          {user ? (
            <>
              <span>Hello, {user.email}</span>
              <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">
                Logout
              </button>
               <Link to="/orders">Order History</Link>
            </>
          ) : (
            <>
              <Link to="/admin">Admin</Link>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
             
            </>
          )}

          <Link to="/cart" className="relative">
            Cart
            {cart.length > 0 && (
              <span className="absolute -top-3 -right-3 bg-red-600 text-xs px-2 py-1 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
