// Import necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDaNFmn_22M0TWyRRnstANtwsKvldScx4",
  authDomain: "login-signup-15.firebaseapp.com",
  projectId: "login-signup-15",
  storageBucket: "login-signup-15.firebasestorage.app",
  messagingSenderId: "623581885098",
  appId: "1:623581885098:web:34f8ca25067a0ee0b456d3",
  measurementId: "G-65F6PT6RDH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Optionally initialize Firebase Analytics (not required for login/signup features)
const analytics = getAnalytics(app);

export { app };
