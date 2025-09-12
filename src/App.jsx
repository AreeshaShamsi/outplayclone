import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

// Sample page components

export default function App() {
  return (
    <>
    
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
         
        </Routes>
      </div>
    </>
  );
}
