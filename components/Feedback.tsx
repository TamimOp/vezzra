"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    text: "A wonderful Experience!",
    desc: "Our web developers are experts in building highly interactive and deeply pleasant full-screen websites that work as flawlessly on smartphones as they do on desktops or any other device of your users’ choice.",
    name: "Heftiba",
    title: "CEO, Law farm",
    image: "/assets/dp1.png",
  },
  {
    text: "A wonderful Experience!",
    desc: "Our web developers are experts in building highly interactive and deeply pleasant full-screen websites that work as flawlessly on smartphones as they do on desktops or any other device of your users’ choice.",
    name: "Heftiba",
    title: "CEO, Law farm",
    image: "/assets/dp2.png",
  },
];

export default function Feedback() {
  return (
    <section className="relative px-6 sm:px-12 py-24 text-white overflow-hidden">
      {/* Title */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl sm:text-7xl font-bold leading-tight mb-4">
          What Our <br />
          <span className="text-white">Customers Saying</span>
        </h2>
        <p className="text-2xl text-gray-300">
          Real users. Real results. Here&#39;s what our community has to say
          about using our wallet to power their crypto journey.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="relative">
            {/* Quote image positioned behind the card */}
            <Image
              src="/assets/quote.png"
              alt="quote"
              width={150}
              height={150}
              className="absolute bottom-0 left-6 w-40 h-40 pointer-events-none select-none z-0"
            />

            {/* Main card with backdrop filter */}
            <div
              className="relative rounded-2xl p-8 border border-white/10 overflow-hidden flex flex-col justify-center items-center text-center min-h-[380px] z-10"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.054) 0%, rgba(70, 0, 255, 0.18) 100%)",
                boxShadow: "0px 4px 18.7px 0px #00000040",
                backdropFilter: "blur(10px)",
              }}
            >
              {/* Stars */}
              <div className="flex gap-3 mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <FaStar key={i} className="text-[#36FFC1] text-[33px]" />
                  ))}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-4">{t.text}</h3>

              {/* Description */}
              <p className="text-[15px] text-gray-300 mb-6 max-w-md">
                {t.desc}
              </p>

              {/* Avatar and user */}
              <div className="flex items-center gap-4 mt-2">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="text-[22px] font-semibold">{t.name}</p>
                  <p className="text-[15px] text-gray-400">{t.title}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <div className="flex justify-center gap-4 mt-20">
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
          <ArrowLeft className="text-white w-5 h-5" />
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
          <ArrowRight className="text-white w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
