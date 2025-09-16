
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyAsIIq6VkxWGuTFt2QQKvT5fy0Iv5UoIvE",
  authDomain: "mrshrek-store.firebaseapp.com",
  projectId: "mrshrek-store",
  storageBucket: "mrshrek-store.firebasestorage.app",
  messagingSenderId: "1069635877069",
  appId: "1:1069635877069:web:d074de0f0030b6b58f1184",
  measurementId: "G-8XHMJ205S9"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);