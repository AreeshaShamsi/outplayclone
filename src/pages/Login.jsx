import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase"; // 👈 make sure your firebase.js is set
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 🔹 Handle Email/Password Login
  const handleLogin = async () => {
    setError("");
    if (!email || !password) {
      setError("⚠️ Please enter both email and password!");
      return;
    }

    try {
      setLoading(true);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      console.log("✅ Logged in:", user);
      navigate("/dashboard");
    } catch (err) {
      console.error("❌ Login error:", err);

      // Show user-friendly messages
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
    }
    setLoading(false);
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
      navigate("/dashboard");
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
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none text-sm"
          />

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Login Button */}
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

          {/* Google Login Button */}
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
            <div className="flex items-center mt-4 space-x-3">
              <img
                src="https://randomuser.me/api/portraits/men/45.jpg"
                alt="Andrew Morton"
                className="rounded-full w-10 h-10"
              />
              <div>
                <p className="font-semibold text-gray-800 text-sm">Andrew Morton</p>
                <p className="text-gray-500 text-xs">
                  VP of Sales, now CRO, UserVoice
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
