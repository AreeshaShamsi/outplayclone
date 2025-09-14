export default function Login() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Side - Login Form */}
        <div className="p-10 flex flex-col items-center justify-center">
          <img
            src="https://via.placeholder.com/150x50?text=Outplay+Logo"
            alt="Outplay Logo"
            className="mb-8"
          />
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Login</h2>
          
          <input
            type="email"
            placeholder="Enter your Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-pink-400 focus:outline-none mb-4"
          />

          <button className="w-full bg-gradient-to-r from-pink-500 to-pink-400 text-white py-3 rounded-lg mb-4">
            Log In
          </button>

          <p className="text-gray-600">
            Don’t have an account?{" "}
            <span className="text-pink-500 cursor-pointer">Sign Up</span>
          </p>
        </div>

        {/* Right Side - Info */}
        <div className="bg-gradient-to-br from-pink-100 to-white p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Why <span className="text-pink-500">5000+</span> Salespeople ❤️ Outplay
          </h2>

          <ul className="space-y-3 text-gray-700">
            <li>✅ Prospect faster than ever before</li>
            <li>✅ Engage across channels</li>
            <li>✅ Capture insights to make smart decisions</li>
            <li>✅ Get the widest library of integrations</li>
          </ul>

          <div className="mt-8 bg-white p-5 rounded-lg shadow">
            <h3 className="font-semibold text-gray-800">Great platform powering outbound sales</h3>
            <p className="text-gray-600 mt-2">
              We were looking for an outbound sales platform that integrated with Pipedrive. Outplay has exceeded our expectations. Our AEs and SDRs rave about the user experience. And the software has the features we need as we scale our sales team. Also, the customer support has been excellent.
            </p>
            <div className="flex items-center mt-4 space-x-3">
              <img
                src="https://via.placeholder.com/40"
                alt="Matt Estes"
                className="rounded-full"
              />
              <div>
                <p className="font-semibold text-gray-800">Matt Estes</p>
                <p className="text-gray-500 text-sm">Chief Revenue Officer, Uscreen</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
