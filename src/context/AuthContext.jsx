// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const AuthContext = createContext();

const friendlyMessage = (message) => {
  if (message.includes("email-already-in-use")) return "Email already in use";
  if (message.includes("weak-password")) return "Password should be at least 6 characters";
  if (message.includes("user-not-found")) return "No account found with this email";
  if (message.includes("wrong-password")) return "Incorrect password";
  if (message.includes("too-many-requests")) return "Too many login attempts, try again later";
  return message;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const email = currentUser.email?.trim().toLowerCase();
        const adminStatus = email === "admin@shop.com";

        setUser({ uid: currentUser.uid, email });
        setIsAdmin(adminStatus);

        localStorage.setItem(
          "user",
          JSON.stringify({ uid: currentUser.uid, email })
        );
        localStorage.setItem("isAdmin", JSON.stringify(adminStatus));
      } else {
        setUser(null);
        setIsAdmin(false);
        localStorage.removeItem("user");
        localStorage.removeItem("isAdmin");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);


  const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    const loggedUser = result.user;
    console.log(loggedUser);
    const normalizedEmail = loggedUser.email.trim().toLowerCase();
    const adminStatus = normalizedEmail === "admin@shop.com";

    setUser({ uid: loggedUser.uid, email: normalizedEmail });
    setIsAdmin(adminStatus);

    localStorage.setItem(
      "user",
      JSON.stringify({ uid: loggedUser.uid, email: normalizedEmail })
    );
    localStorage.setItem("isAdmin", JSON.stringify(adminStatus));

    return { success: true, user: { uid: loggedUser.uid, email: normalizedEmail } };
  } catch (error) {
    return { success: false, message: friendlyMessage(error.message) };
  }
};


  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );
      const loggedUser = userCredential.user;
      const normalizedEmail = loggedUser.email.trim().toLowerCase();
      const adminStatus = normalizedEmail === "admin@shop.com";

      setUser({ uid: loggedUser.uid, email: normalizedEmail });
      setIsAdmin(adminStatus);

      localStorage.setItem(
        "user",
        JSON.stringify({ uid: loggedUser.uid, email: normalizedEmail })
      );
      localStorage.setItem("isAdmin", JSON.stringify(adminStatus));

      return { success: true, user: { uid: loggedUser.uid, email: normalizedEmail } };
    } catch (error) {
      return { success: false, message: friendlyMessage(error.message) };
    }
  };

  const signup = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email.trim(), password);
      return { success: true };
    } catch (error) {
      return { success: false, message: friendlyMessage(error.message) };
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setIsAdmin(false);
      localStorage.removeItem("user");
      localStorage.removeItem("isAdmin");
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin, login, loginWithGoogle, logout, signup, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
