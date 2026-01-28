import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import CreateLeadPage from "./pages/CreateLead";
import AdminDashboard from "./pages/AdminDashboard";

export default function App() {
  const auth = getAuth();

  // ------------------ Normal user route ------------------
  const ProtectedRoute = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });
      return () => unsubscribe();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (!user) return <Navigate to="/login" />;

    return children;
  };

  

  return (
    <div className="p-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
         

        {/* Normal user routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/leads"
          element={
            <ProtectedRoute>
              <Leads />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/leads/create-lead"
          element={
            <ProtectedRoute>
              <CreateLeadPage />
            </ProtectedRoute>
          }
        />
         <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

       

      </Routes>
    </div>
  );
}
