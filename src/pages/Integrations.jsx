import React from "react";

export default function IntegrationsSection() {
  return (
    <section className="w-full py-16">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
<h2 className="text-center text-3xl sm:text-5xl lg:text-5xl font-bold mb-12">
  The only sales tool you need
</h2>
        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          
          {/* Left Content */}
          <div>
            <h3 className="text-3xl font-bold mb-4">
              Get the widest library of{" "}
              <span className="text-pink-500">integrations</span>
            </h3>
            <p className="text-gray-500 mb-6">
              Outplay has bi-directional integrations with a wide range of CRMs, 
              meeting schedulers, monitoring tools, inboxes and more — 
              to help your stack work as one.
            </p>
            <button className="px-6 py-3 border-2 border-pink-500 text-pink-500 rounded-full hover:bg-pink-500 hover:text-white transition">
              Explore Integration
            </button>
          </div>

          {/* Right Side Image */}
          <div className="flex justify-center">
            <img 
              src="https://outplay.ai/_next/image?url=https%3A%2F%2Foutplayhq-uploads.s3.us-west-2.amazonaws.com%2FOP_US_Webpage_Resource_08b640982e.webp&w=1200&q=75"
              alt="Integrations"
              className="max-w-full h-auto"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
