import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 🔹 Handle Email/Password Login
const handleLogin = async (e) => {
  e.preventDefault(); // prevent form refresh
  setError("");

  if (!email || !password) {
    setError("⚠️ Please enter both email and password!");
    return;
  }

  // 🔹 Admin check first
  if (email === "admin@gmail.com" && password === "admin@12301") {
  try {
    navigate("/admin-dashboard");   // redirect to admin dashboard
  } catch (err) {
    console.error("Navigation error:", err); // only catch errors
  }
  return; // prevent Firebase login from running
}


  // 🔹 Normal Firebase login
  try {
    setLoading(true);
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("✅ Logged in:", user);
    navigate("/dashboard"); // normal user dashboard
  } catch (err) {
    console.error("❌ Login error:", err);

    switch (err.code) {
      case "auth/user-not-found":
        setError("No account found with this email.");
        break;
      case "auth/wrong-password":
        setError("Incorrect password. Try again.");
        break;
      case "auth/invalid-email":
        setError("Invalid email address.");
        break;
      case "auth/too-many-requests":
        setError("Too many failed attempts. Try again later.");
        break;
      case "auth/network-request-failed":
        setError("Network error. Check your connection.");
        break;
      default:
        setError(err.message);
    }
  } finally {
    setLoading(false);
  }
};



  // 🔹 Handle Google Login
  const handleGoogleLogin = async () => {
    setError("");
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check if user exists in Firestore
      const userRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(userRef);

      if (!docSnap.exists()) {
        // Save user if new
        await setDoc(userRef, {
          name: user.displayName || "",
          email: user.email,
          phone: user.phoneNumber || "",
          role: "manager",
          createdAt: new Date(),
        });
      }

      console.log("✅ Google login success:", user);
      navigate("/dashboard"); // navigate only after successful login
    } catch (err) {
      console.error("❌ Google login error:", err);

      switch (err.code) {
        case "auth/popup-closed-by-user":
          setError("Google sign-in popup was closed before completing.");
          break;
        case "auth/cancelled-popup-request":
          setError("Only one popup allowed at a time.");
          break;
        case "auth/popup-blocked":
          setError("Popup blocked by browser. Allow popups to continue.");
          break;
        case "auth/network-request-failed":
          setError("Network error. Check your connection.");
          break;
        default:
          setError(err.message);
      }
    }
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
          <h2 className="text-2xl font-semibold text-gray-800">
            Login to your account
          </h2>

          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none text-sm"
          />
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 pr-12 border border-gray-300 rounded focus:outline-none text-sm"
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm text-gray-600 hover:text-gray-800"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-[#FF4D6D] text-white py-2 rounded text-sm font-semibold disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>

          <div className="flex items-center justify-center my-4">
            <p className="font-bold text-gray-600">OR</p>
          </div>

          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center border border-gray-300 py-2 rounded text-sm font-semibold mt-2 hover:bg-gray-100"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Sign in with Google
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
            <h3 className="font-semibold text-gray-800">
              Our outbound success rate increased by 30% last quarter
            </h3>
            <p className="text-gray-600 mt-2">
              If you’re looking for a cost-effective tool to create velocity,
              transparency, and quick value, Outplay is the tool for you.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
