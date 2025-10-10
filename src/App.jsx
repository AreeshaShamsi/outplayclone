import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import Leads from "./pages/Leads";
import CreateLeadPage from "./pages/CreateLead";



export default function App() {
  return (
    // <ClerkProvider publishableKey={clerkPublishableKey}>
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/leads/create-lead" element={<CreateLeadPage />} />
            
        </Routes>
      </div>
    // </ClerkProvider>
  );
}
