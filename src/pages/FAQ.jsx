import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question:
        "What features does Outplay offer for email and LinkedIn outreach automation?",
      answer:
        "Outplay offers multi-channel outreach automation including personalized emails, LinkedIn connection requests, follow-ups, and task reminders.",
    },
    {
      question: "How can Outplay help improve my sales outreach efficiency?",
      answer:
        "By automating repetitive tasks, tracking engagement, and providing actionable insights, Outplay boosts outreach productivity.",
    },
    {
      question: "Which CRMs does Outplay integrate with?",
      answer:
        "Outplay integrates with major CRMs such as Salesforce, HubSpot, and Pipedrive to sync leads and activities seamlessly.",
    },
    {
      question: "What is the pricing structure of Outplay?",
      answer:
        "Outplay offers flexible pricing plans based on team size and requirements. Contact sales for details.",
    },
    {
      question:
        "How does Outplay's Conversation Intelligence feature benefit sales teams?",
      answer:
        "It analyzes call recordings to provide insights on talk ratios, objection handling, and conversation quality.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto mt-16">
      <h2 className="text-center text-2xl font-bold text-[#14274A]">FAQ</h2>
      <div className="mt-8 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              className="flex justify-between items-center w-full px-6 py-4 text-left font-semibold text-[#14274A] hover:bg-gray-50"
              onClick={() => toggleFAQ(index)}
            >
              <span>
                {index + 1}. {faq.question}
              </span>
              {openIndex === index ? (
                <FiChevronUp className="text-gray-500" />
              ) : (
                <FiChevronDown className="text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-600 text-sm">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
