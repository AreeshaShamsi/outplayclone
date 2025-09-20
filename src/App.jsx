import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";

// const clerkPublishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
// console.log("Clerk Publishable Key Loaded:", clerkPublishableKey);  // Should print correctly

export default function App() {
  return (
    // <ClerkProvider publishableKey={clerkPublishableKey}>
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
            
        </Routes>
      </div>
    // </ClerkProvider>
  );
}
