import { Button } from "../components/ui/button";

import { Link } from "react-router-dom";

export default function AuthButton({ to, children, variant = "default", className = "" }) {
  const baseClasses = variant === "outline"
    ? "text-gray-400 border-[#FF4D6D] bg-white hover:bg-pink-50"
    : "bg-[#FF4D6D] text-white hover:bg-[#e04360]";

  return (
    <Link to={to}>
      <Button className={`${baseClasses} ${className}`}>
        {children}
      </Button>
    </Link>
  );
}
