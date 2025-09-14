import Navbar from "../components/Navbar";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import TestimonialCarousel from "./Testimonials";
import FeaturesSection from "./Features";
import TrustedBySection from "./Logos";
import IntegrationsSection from "./Integrations";
import FeaturesAndBadgesPage from "./Badge";
import FAQSection from "./FAQ";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <div className="bg-white min-h-screen">

      <Navbar />

      <main className="px-4 py-16 max-w-6xl mx-auto">

        <section className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Left Text Content */}
          <div className="max-w-lg space-y-6 mt-10">

            <h1 className="text-3xl md:text-5xl font-bold text-black leading-tight px-0.5 py-4">
              Make <span className="text-[#FF4D6D]">every sales</span><br />
              interaction <span className="text-blue-400">count</span>
            </h1>

            <p className="text-gray-500 text-base italic">
              The preferred <span className="italic">AI-powered sales engagement software</span> for fast-scaling SMBs.
            </p>

            <ul className="space-y-2 text-gray-500">
              {["Multi-Channel Outreach", "Sales Automation", "Conversation Intelligence", "Single Source of Truth"].map((item, index) => (
                <li key={index} className="flex items-center">
                  <FaCheck className="mr-2 text-[#FF4D6D]" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Logos: Show only on md and up */}
            <div className="hidden md:flex items-center justify-center gap-12 bg-gray-50 rounded-lg p-4 border border-gray-300 w-full max-w-2xl mx-auto">
              {[
                { src: "https://outplay.ai/_next/image?url=https%3A%2F%2Foutplayhq-uploads.s3.us-west-2.amazonaws.com%2FSpyne_Logo_black_18ffc7d4ae.webp&w=1200&q=75", alt: "Spyne" },
                { src: "https://outplay.ai/_next/image?url=https%3A%2F%2Foutplayhq-uploads.s3.us-west-2.amazonaws.com%2FScreenshot_2025_05_16_170738_44821ef1cd.png&w=1200&q=75", alt: "Bounce" },
                { src: "https://outplayhq-uploads.s3.us-west-2.amazonaws.com/Monday_348fa19308.svg", alt: "Monday" },
                { src: "https://outplay.ai/_next/image?url=https%3A%2F%2Foutplayhq-uploads.s3.us-west-2.amazonaws.com%2FSpryt_1_4cd7a1a250.png&w=1200&q=75", alt: "Spryt", extraClass: "opacity-50" },
                { src: "https://outplayhq-uploads.s3.us-west-2.amazonaws.com/670e5a8c26a4d429b1dc7393_innovaccer_logo_62638bc8c4.svg", alt: "Custom" },
              ].map((logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  className={`h-5 w-auto object-contain flex-shrink ${logo.extraClass || ""}`}
                />
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-0">
              <Link
                to="/signup"
                className="w-full sm:w-auto text-center px-6 py-3 bg-[#FF4D6D] text-white rounded-full hover:bg-[#e04360] transition"
              >
                Start 7-day free trial
              </Link>

              <Link
                to="/login"
                className="w-full sm:w-auto text-center px-6 py-3 border-2 border-[#FF4D6D] text-[#FF4D6D] rounded-full hover:bg-[#FF4D6D] hover:text-white transition"
              >
                Schedule a Demo
              </Link>
            </div>

            <div className="flex items-center text-sm px-0 py-2 font-semibold text-gray-400">
              <img
                src="https://outplayhq-uploads.s3.us-west-2.amazonaws.com/tick_green_d48df19d8b_aafc182c7e.svg"
                alt="Check"
                className="h-4 w-4 mr-2"
              />
              No credit card required.
            </div>

          </div>

          {/* Right Video */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-gray-400 p-2 w-full max-w-xl">
              <video
                src="https://outplayhq-uploads.s3.us-west-2.amazonaws.com/OP_Hero_GIF_Optimized_3_1_b1182bdf80.mp4"
                className="w-full h-auto object-cover"
                controls
                autoPlay
                loop
                muted
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

        </section>

      </main>
      <TestimonialCarousel />
       <FeaturesSection />
       <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-0">
  <Link
    to="/signup"
    className="w-full sm:w-auto text-center px-6 py-3 bg-[#FF4D6D] text-white rounded-full hover:bg-[#e04360] transition"
  >
    Start 7-day free trial
  </Link>

  <Link
    to="/login"
    className="w-full sm:w-auto text-center px-6 py-3 border-2 border-[#FF4D6D] text-[#FF4D6D] rounded-full hover:bg-[#FF4D6D] hover:text-white transition"
  >
    Schedule a Demo
  </Link>
</div>
   <TrustedBySection />
   <IntegrationsSection />
   <FeaturesAndBadgesPage />
       <FAQSection />
       <Footer/>
     


    </div>
    
  );
}
