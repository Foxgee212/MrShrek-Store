import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaGoogle } from "react-icons/fa";

function Login() {
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Email/Password login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = await login(email, password);

    if (result.success) {
      const userEmail = result.user.email;
      if (userEmail === "admin@shop.com") navigate("/admin");
      else navigate("/");
    } else {
      setError(result.message);
    }

    setLoading(false);
  };

  // Google login
  const handleGoogleLogin = async () => {
    setError("");
    setLoading(true);

    const result = await loginWithGoogle();

    if (result.success) {
      const userEmail = result.user.email;
      if (userEmail === "admin@shop.com") navigate("/admin");
      else navigate("/");
    } else {
      setError(result.message);
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white p-8 rounded-lg shadow-lg w-96 space-y-6" onSubmit={handleSubmit}>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Welcome Back</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        {/* Email Input */}
        <div className="flex items-center border rounded p-2 focus-within:ring-2 ring-yellow-500">
          <FaEnvelope className="text-gray-400 mr-2" />
          <input
            type="email"
            placeholder="Email"
            className="w-full outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password Input */}
        <div className="flex items-center border rounded p-2 focus-within:ring-2 ring-yellow-500">
          <FaLock className="text-gray-400 mr-2" />
          <input
            type="password"
            placeholder="Password"
            className="w-full outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded text-white font-semibold transition ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-yellow-500 hover:bg-yellow-600"
          }`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* OR Divider */}
        <div className="flex items-center my-2">
          <hr className="flex-1 border-gray-300" />
          <span className="mx-2 text-gray-500 text-sm">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Google Login */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full py-2 rounded text-white bg-red-500 hover:bg-red-600 flex items-center justify-center gap-2 transition"
        >
          <FaGoogle />
          {loading ? "Processing..." : "Login with Google"}
        </button>

        <p className="text-sm text-gray-600 mt-4 text-center">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline font-medium">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
