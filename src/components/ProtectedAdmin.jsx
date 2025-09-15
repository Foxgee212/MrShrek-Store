// src/components/ProtectedAdmin.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedAdmin({ children }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />; // not logged in
  }

  if (user.role !== "admin") {
    return <Navigate to="/" replace />; // logged in but not admin
  }

  return children; // ✅ allowed
}

export default ProtectedAdmin;
