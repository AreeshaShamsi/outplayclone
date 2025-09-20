import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const navigate = useNavigate();

  // form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleSignup = async () => {
    if (!name || !email || !password || !phone) {
      alert("Please fill all fields!");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, phone }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Signup successful!");
        navigate("/login"); // redirect after success
      } else {
        alert("❌ " + data.error);
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("❌ Server error, check backend");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 overflow-hidden">
      <div className="max-w-5xl w-full bg-white rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden">

        {/* Left Side - Signup Form */}
        <div className="md:w-1/2 p-6 flex flex-col justify-center items-center space-y-4">
          <img
            src="https://outplay.ai/_next/image?url=https%3A%2F%2Foutplayhq-uploads.s3.us-west-2.amazonaws.com%2FOutplayhq_logo_1_93945f7e85.png&w=256&q=75"
            alt="Outplay Logo"
            className="mb-4 w-32"
          />
          <h2 className="text-2xl font-semibold text-gray-800">Create your account</h2>
          <p className="text-gray-600 text-sm flex items-center">
            <img
              src="https://cdn.outplayhq.com/img/green-check.svg"
              alt="Tick"
              className="w-4 h-4 mr-2"
            />
            7 days free trial. No credit card required.
          </p>

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none text-sm"
          />
          <input
            type="email"
            placeholder="Work email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none text-sm"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none text-sm"
          />
          <div className="w-full p-2 border border-gray-300 rounded flex items-center text-sm">
            <span className="mr-2">🇮🇳</span>
            <span className="text-gray-700">+91</span>
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="flex-grow ml-2 outline-none text-sm"
            />
          </div>

          <div className="flex items-center text-sm">
            <input type="checkbox" id="terms" className="mr-2" />
            <label htmlFor="terms" className="text-gray-600">
              By filling Sign Up form, you agree to Outplay's{" "}
              <span className="text-blue-500 underline cursor-pointer">Terms and Conditions</span>
            </label>
          </div>

          <button
            onClick={handleSignup}
            className="w-full bg-[#FF4D6D] text-white py-2 rounded text-sm font-semibold"
          >
            Sign Up
          </button>

          <p className="text-gray-600 text-sm text-center">
            Already have an account?{" "}
            <span
              className="text-[#FF4D6D] cursor-pointer font-semibold"
              onClick={() => navigate("/login")}
            >
              Login
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
            <h3 className="font-semibold text-gray-800">Outbound success ↑ 30% last quarter</h3>
            <p className="text-gray-600 mt-2">
              Looking for a cost-effective tool to create velocity, transparency, and quick value? Outplay is the tool for you.
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
