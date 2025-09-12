import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState(null); // mobile dropdown toggle

  const menuItems = [
    {
      name: "Products",
      to: "/products",
      sub: [
        { name: "Product 1", to: "/products/product1" },
        { name: "Product 2", to: "/products/product2" },
      ],
    },
    {
      name: "Learning Hub",
      to: "/learning-hub",
      sub: [
        { name: "Tutorials", to: "/learning-hub/tutorials" },
        { name: "Webinars", to: "/learning-hub/webinars" },
      ],
    },
    {
      name: "Solutions",
      to: "/solutions",
      sub: [
        { name: "Enterprise", to: "/solutions/enterprise" },
        { name: "Small Business", to: "/solutions/small-business" },
      ],
    },
    {
      name: "Done For You",
      to: "/done-for-you",
      sub: [
        { name: "Service 1", to: "/done-for-you/service1" },
        { name: "Service 2", to: "/done-for-you/service2" },
      ],
    },
    {
      name: "Pricing",
      to: "/pricing",
      sub: [
        { name: "Basic Plan", to: "/pricing/basic" },
        { name: "Pro Plan", to: "/pricing/pro" },
      ],
    },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
          <img
            src="https://outplay.ai/_next/image?url=https%3A%2F%2Foutplayhq-uploads.s3.us-west-2.amazonaws.com%2FOutplayhq_logo_1_93945f7e85.png&w=256&q=75"
            alt="Logo"
            className="w-36 md:w-40 h-auto"
          />
        </Link>

        {/* Desktop Menu - show on lg+ only */}
        <div className="hidden lg:flex items-center space-x-6">
          {menuItems.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                to={item.to}
                className="text-gray-400 font-medium flex items-center space-x-1 hover:text-pink-600"
              >
                <span>{item.name}</span>
                <ArrowDown className="w-4 h-4" />
              </Link>
              <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-md w-56">
                {item.sub.map((sub) => (
                  <Link
                    key={sub.name}
                    to={sub.to}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Auth Buttons */}
         <Link
  to="/login"
  className="px-4 py-2 text-gray-400 border-2 border-[#FF4D6D] rounded-full transition"
>
  Login
</Link>
          <Link
  to="/signup"
  className="px-4 py-2 text-white text-center rounded-full hover:bg-[#e04360] transition"
  style={{ backgroundColor: "#FF4D6D" }}
>
  Sign up for free
</Link>

        </div>

        {/* Hamburger (Mobile + Tablet) */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            {isOpen ? <X size={24} color="#FF4D6D" /> : <Menu size={24} color="#FF4D6D" />}
          </button>
        </div>
      </div>

      {/* Mobile + Tablet Menu */}
      {isOpen && (
  <div className="lg:hidden w-full bg-white shadow-md">
    <nav className="flex flex-col">
      {menuItems.map((item) => (
        <div key={item.name}>
          <button
            className="flex justify-between items-center w-full px-4 py-3 text-gray-400 font-semibold hover:bg-gray-100"
            onClick={() => setOpenSection(openSection === item.name ? null : item.name)}
          >
            {item.name}{" "}
            <ArrowDown
              className={`w-5 h-5 transform transition-transform ${
                openSection === item.name ? "rotate-180" : ""
              }`}
            />
          </button>
          {openSection === item.name && (
            <div className="flex flex-col bg-gray-50">
              {item.sub.map((sub) => (
                <Link
                  key={sub.name}
                  to={sub.to}
                  className="px-6 py-2 text-gray-700 hover:bg-gray-100"
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Auth Buttons */}
      <div className="px-4 py-4 flex flex-col space-y-3">
        <Link
  to="/login"
  className="px-4 py-2 text-gray-400 border-2 text-center border-[#FF4D6D] rounded-full transition"
>
  Login
</Link>
          <Link
  to="/signup"
  className="px-4 py-2 text-white text-center rounded-full hover:bg-[#e04360] transition"
  style={{ backgroundColor: "#FF4D6D" }}
>
  Sign up for free
</Link>

      </div>
    </nav>
  </div>
)}

    </nav>
  );
}
