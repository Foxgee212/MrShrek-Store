// src/components/ProtectedAdmin.jsx
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export const ProtectedAdmin = ({ children }) => {
  const { user, isAdmin, loading } = useAuth();

  if (loading) return null; // optionally show a spinner

  if (!user || !isAdmin) {
    return <Navigate to="/" />; // redirect non-admins
  }

  return children; // render admin dashboard
};
export default ProtectedAdmin;
