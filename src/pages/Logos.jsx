import React from "react";

export default function TrustedBySection() {
  const logos = [
    { src: "https://outplayhq-uploads.s3.us-west-2.amazonaws.com/hyperverge_logos_a35aed6bae.svg", alt: "Hyperverge" },
    { src: "https://outplayhq-uploads.s3.us-west-2.amazonaws.com/Rectangle_f474c3ef4b.svg", alt: "SRA" },
    { src: "https://outplayhq-uploads.s3.us-west-2.amazonaws.com/Group_2_d01126ec6e.svg", alt: "Aviso" },
    { src: "https://outplayhq-uploads.s3.us-west-2.amazonaws.com/aviso_ai_logos_a724503fcd.svg", alt: "Yellow.ai" },
    { src: "https://outplayhq-uploads.s3.us-west-2.amazonaws.com/Page_1_bab69f79c7.svg", alt: "Plum" },
    { src: "https://outplayhq-uploads.s3.us-west-2.amazonaws.com/Rectangle_2_75800001b1.svg", alt: "Inbox Health" },
    { src: "https://outplayhq-uploads.s3.us-west-2.amazonaws.com/Rectangle_3_aae4f0f9ac.svg", alt: "HealthMatch" },
    { src: "https://outplayhq-uploads.s3.us-west-2.amazonaws.com/Observe_ai_5d7631b8b5.svg", alt: "Observe.AI" },
  ];

  return (
    <section className="w-full py-12">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border p-8 border-gray-200">
        {/* Heading */}
        <h2 className="text-center text-xl sm:text-2xl font-semibold mb-8">
          Trusted by sales team of all sizes
        </h2>

        {/* Logos grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-items-center">
  {logos.map((logo, idx) => (
    <img
      key={idx}
      src={logo.src}
      alt={logo.alt}
      className="h-8 sm:h-6 md:h-8 lg:h-14 xl:h-16 max-w-[140px] object-contain"
    />
          ))}
        </div>
      </div>
    </section>
  );
}
