import React from "react";
import { Link } from "react-router-dom";

const FeaturesAndBadgesPage = () => {
  const badges = [
    { image: "https://outplayhq-uploads.s3.us-west-2.amazonaws.com/G2_High_Performer_Americas_Spring_2024_0cffad4d2b.svg", label: "High Performer Americas Winter 2025" },
    { image: "https://outplayhq-uploads.s3.us-west-2.amazonaws.com/G2_High_Performer_Spring_2024_791462970f.svg", label: "High Performer SPRING 2024" },
    { image: "https://outplayhq-uploads.s3.us-west-2.amazonaws.com/G2_High_Performer_Asia_Spring_2024_931ba8ec74.svg", label: "High Performer Canada Winter 2025" },
    { image: "https://outplayhq-uploads.s3.us-west-2.amazonaws.com/G2_High_Performer_AP_Spring_2024_3469aee3bb.svg", label: "Small Business High Performer EMEA Winter 2025" },
    { image: "https://outplayhq-uploads.s3.us-west-2.amazonaws.com/G2_SMB_High_Performer_Americas_Spring_2024_cac011aa73.svg", label: "Small Business High Performer Americas Winter 2025" },
  ];

  return (
    <div className="bg-white text-gray-800 min-h-screen px-4 py-16 max-w-6xl mx-auto">

      {/* Features Section */}
      <section className="space-y-24">

        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src="https://outplay.ai/_next/image?url=https%3A%2F%2Foutplayhq-uploads.s3.us-west-2.amazonaws.com%2FOutplay_Home_Screens_fbd5999472.webp&w=1200&q=75"
            alt="Create Prospect"
            className="w-3/4 md:w-1/3 rounded-lg shadow-lg"
          />
          <div className="md:w-2/3">
            <h2 className="text-4xl font-bold text-green-500">
              Prospect <span className="text-black">faster than ever before</span>
            </h2>
            <p className="mt-6 text-md text-gray-500 leading-relaxed">
              Pull inbound leads from your website forms into Outplay, and download our free Chrome extension to move leads from Gmail into your sequences with a click.
            </p>
          <Link
  to="/login"
  className="inline-block px-8 py-3 mt-4 text-gray-400 border-2 border-[#FF4D6D] rounded-full text-center font-semibold hover:bg-[#FF4D6D] hover:text-white transition"
>
  Learn More
</Link>


          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          <img
            src="https://outplay.ai/_next/image?url=https%3A%2F%2Foutplayhq-uploads.s3.us-west-2.amazonaws.com%2FOutplay_Home_Screens_2_e8ac8d5ac9.webp&w=1200&q=75"
            alt="Engage across channels"
            className="w-3/4 md:w-1/3 rounded-lg shadow-lg"
          />
          <div className="md:w-2/3">
            <h2 className="text-4xl font-bold text-yellow-500">
              Engage <span className="text-black">across channels</span>
            </h2>
            <p className="mt-6 text-md text-gray-500 leading-relaxed">
              Engage with prospects across Email, Phone, SMS, Whatsapp, Video, and Website chat and automatically move them across sequence with action-based triggers.
            </p>
           <Link
  to="/login"
  className="inline-block px-8 py-3 mt-4 text-gray-400 border-2 border-[#FF4D6D] rounded-full text-center font-semibold hover:bg-[#FF4D6D] hover:text-white transition"
>
  Learn More
</Link>

          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src="https://outplay.ai/_next/image?url=https%3A%2F%2Foutplayhq-uploads.s3.us-west-2.amazonaws.com%2FOutplay_Home_Screens_06_cf44eaee45.webp&w=1200&q=75"
            alt="Capture insights"
            className="w-3/4 md:w-1/3 rounded-lg shadow-lg"
          />
          <div className="md:w-2/3">
            <h2 className="text-4xl font-bold text-blue-500">
              Capture <span className="text-black">insights to make smart decisions</span>
            </h2>
            <p className="mt-6 text-md text-gray-500 leading-relaxed">
              Use reports to discover your best sequences, salespeople, and teams to duplicate what’s working and fix what isn’t. Inject some good-hearted competition into your sales team with leaderboards.
            </p>
          <Link
  to="/login"
  className="inline-block px-8 py-3 mt-4 text-gray-400 border-2 border-[#FF4D6D] rounded-full text-center font-semibold hover:bg-[#FF4D6D] hover:text-white transition"
>
  Learn More
</Link>


          </div>
        </div>
      </section>

      {/* Badges Section */}
      <section className="text-center mt-24">
        <h2 className="text-5xl font-bold">Consistently rated at the top</h2>
        <div className="flex flex-wrap justify-center gap-10 mt-10">
          {badges.map((badge, index) => (
            <div key={index} className="p-4 w-40 flex flex-col items-center">
              <img src={badge.image} alt={`Badge ${index + 1}`} className="h-35 object-contain" />
              {/* <p className="mt-4 text-center text-gray-800 font-medium text-sm">{badge.label}</p> */}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default FeaturesAndBadgesPage;
