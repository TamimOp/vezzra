"use client";

import { useState } from "react";

const faqData = [
  {
    question: "what should I look for in a wallet?",
    answer:
      "When choosing a wallet, consider materials, size, security features, and your lifestyle needs.",
  },
  {
    question: "How do I care for my wallet?",
    answer:
      "To maintain your wallet, keep it dry, avoid overstuffing, and clean it with appropriate care products.",
  },
  {
    question: "Can i carry a wallet in my back pocket?",
    answer:
      "Yes, you can carry a wallet in your back pocket, but it's not always recommended. Sitting on your wallet for long periods can cause discomfort or even posture issues over time.",
  },
  {
    question: "How do I care for my wallet?",
    answer:
      "To maintain your wallet, keep it dry, avoid overstuffing, and clean it with appropriate care products.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen w-full bg-black px-6 md:px-16 py-24 text-white flex flex-col md:flex-row items-start justify-center gap-12">
      {/* Left Content */}
      <div className="max-w-md w-full">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-12">
          Having questions <br /> About wallet?
        </h2>
        <p className="text-gray-300 text-base md:text-2xl">
          Contact us, we are always welcome to help you.{" "}
          <a href="mailto:contact@vezzra.com" className="text-teal-400">
            contact@vezzra.com
          </a>
        </p>
      </div>

      {/* FAQ Cards */}
      <div className="flex-1 w-full max-w-2xl space-y-4">
        {faqData.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`transition-all duration-300 rounded-xl border border-gray-700 bg-[#0c0c0c] p-6 ${
                isOpen ? "pb-8" : "pb-6"
              }`}
            >
              <div className="flex items-start justify-between gap-6">
                <h3 className="text-white font-semibold text-lg md:text-[32px] leading-tight flex-1 pr-4">
                  {faq.question}
                </h3>
                <button
                  onClick={() => toggleCard(index)}
                  className={`flex-shrink-0 text-sm md:text-xl px-4 py-2 md:px-6 md:py-3 rounded-md border transition-colors whitespace-nowrap gradient-hover ${
                    isOpen
                      ? "text-white border-[#3c2a83]"
                      : "bg-[#111] text-gray-300 border-gray-600 hover:text-white hover:border-[#3c2a83]"
                  }`}
                  style={{
                    background: isOpen
                      ? "linear-gradient(90deg, rgba(73, 41, 190, 0.46) 0%, rgba(34, 19, 88, 0.46) 100%)"
                      : "#111",
                  }}
                >
                  view more
                </button>
              </div>
              {isOpen && (
                <p className="text-gray-300 text-sm md:text-2xl mt-4 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
