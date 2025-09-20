import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:5000/login", { // 👈 your backend API
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed");
      } else {
        console.log("✅ Logged in:", data);

        // Save user info or JWT token if backend sends one
        // localStorage.setItem("user", JSON.stringify(data.user));

        navigate("/dashboard"); // redirect after successful login
      }
    } catch (err) {
      console.error("❌ Error logging in:", err);
      setError("Something went wrong, try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 overflow-hidden">
      <div className="max-w-5xl w-full bg-white rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden">

        {/* Left Side - Login Form */}
        <div className="md:w-1/2 p-6 flex flex-col justify-center items-center space-y-4">
          <img
            src="https://outplay.ai/_next/image?url=https%3A%2F%2Foutplayhq-uploads.s3.us-west-2.amazonaws.com%2FOutplayhq_logo_1_93945f7e85.png&w=256&q=75"
            alt="Outplay Logo"
            className="mb-4 w-32"
          />
          <h2 className="text-2xl font-semibold text-gray-800">Login to your account</h2>

          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none text-sm"
          />
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none text-sm"
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-[#FF4D6D] text-white py-2 rounded text-sm font-semibold disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>

          <p className="text-gray-600 text-sm text-center">
            Don’t have an account?{" "}
            <span
              className="text-[#FF4D6D] cursor-pointer font-semibold"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </span>
          </p>
        </div>

        {/* Right Side - Info Section */}
        <div className="md:w-1/2 bg-gradient-to-br from-pink-100 to-white p-6 flex flex-col justify-center space-y-4">
          <h2 className="text-xl font-bold text-gray-800 text-center">
            Why <span className="text-[#FF4D6D]">5000+</span> Salespeople ❤️ Outplay
          </h2>

          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex items-center">
              <span className="text-green-500 text-lg mr-2">✔️</span> Prospect faster than ever before
            </li>
            <li className="flex items-center">
              <span className="text-green-500 text-lg mr-2">✔️</span> Engage across channels
            </li>
            <li className="flex items-center">
              <span className="text-green-500 text-lg mr-2">✔️</span> Capture insights to make smart decisions
            </li>
            <li className="flex items-center">
              <span className="text-green-500 text-lg mr-2">✔️</span> Get the widest library of integrations
            </li>
          </ul>

          <div className="bg-white p-4 rounded shadow text-sm">
            <h3 className="font-semibold text-gray-800">Our outbound success rate increased by 30% last quarter</h3>
            <p className="text-gray-600 mt-2">
              If you’re looking for a cost-effective tool to create velocity, transparency, and quick value, Outplay is the tool for you.
            </p>
            <div className="flex items-center mt-4 space-x-3">
              <img
                src="https://randomuser.me/api/portraits/men/45.jpg"
                alt="Andrew Morton"
                className="rounded-full w-10 h-10"
              />
              <div>
                <p className="font-semibold text-gray-800 text-sm">Andrew Morton</p>
                <p className="text-gray-500 text-xs">VP of Sales, now CRO, UserVoice</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
