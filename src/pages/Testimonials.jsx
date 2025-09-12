import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    text: `"You promised to help us, work with us, and not stop supporting us until we say we’re successful.Customer service is great, minimal hassle, and the general user experience is incredible.Customer service is great, minimal hassle, and the general user experience is incredible."`,
    name: "Colby Davis",
    title: "VP of Sales & Marketing",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: `"Every time I bring on new sales reps, they get used to it really quickly.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."`,
    name: "Sadya Zirkind",
    title: "Director of Growth",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    text: `"Customer service is great, minimal hassle, and the general user experience is incredible.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."`,
    name: "Sam Grimes",
    title: "VP of Sales",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
  },
  {
    text: `"Very user-friendly and increases productivity exponentially.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."`,
    name: "Alice Walker",
    title: "Head of Partnerships",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(window.innerWidth >= 768 ? 3 : 1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = testimonials.length - cardsPerView;

  const prev = () => {
    setCurrentIndex((prev) =>
      prev <= 0 ? maxIndex : prev - 1
    );
  };

  const next = () => {
    setCurrentIndex((prev) =>
      prev >= maxIndex ? 0 : prev + 1
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-10">
        Why 5000+ Salespeople ❤️ Outplay
      </h2>

      <div className="relative flex items-center">

        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute left-0 z-10 bg-blue-200 p-3 rounded-full hover:bg-blue-300 transition"
        >
          <FaChevronLeft />
        </button>

        {/* Carousel Viewport */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / testimonials.length)}%)`,
              width: `${(testimonials.length * 100) / cardsPerView}%`,
            }}
          >
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="p-4"
                style={{ width: `${100 / testimonials.length}%` }}
              >
                <div className="bg-white p-6 rounded-lg border border-gray-300 h-full flex flex-col justify-between">
                  <p className="text-gray-600 italic mb-4">{item.text}</p>

                  <div className="flex items-center mt-4">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-sm text-gray-500">{item.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-0 z-10 bg-blue-200 p-3 rounded-full hover:bg-blue-300 transition"
        >
          <FaChevronRight />
        </button>

      </div>
    </div>
  );
}
