"use client";

import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative flex justify-center px-4 py-40 overflow-hidden bg-black">
      <div className="relative w-full max-w-6xl group cursor-pointer">
        {/* Gradient border wrapper */}
        <div
          className="absolute inset-0 rounded-[68px] rotate-[2deg] transition-all duration-500 ease-out group-hover:rotate-0 group-hover:scale-105"
          style={{
            background:
              "linear-gradient(90.21deg, rgba(165, 165, 165, 0.46) 1.29%, rgba(45, 6, 146, 0.85) 98.01%)",
            padding: "7px",
          }}
        >
          <div className="w-full h-full bg-black backdrop-blur-lg rounded-[68px]"></div>
        </div>

        {/* Content container */}
        <div
          className="relative rounded-[68px] px-20 py-16 w-full text-center rotate-[2deg] min-h-[560px] flex flex-col justify-center mx-auto transition-all duration-500 ease-out group-hover:rotate-0 group-hover:scale-105"
          style={{
            boxShadow: "0px 2px 32px 6px #2D0692",
          }}
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-[#F2F2FA]">
            Get in touch with us
          </h2>
          <p className="text-gray-300 mb-12 text-lg sm:text-2xl max-w-3xl mx-auto">
            Real users. Real results. Here&apos;s what our community has to say
            about using our wallet to power their crypto journey.
          </p>

          <div className="relative flex w-full max-w-xl mx-auto mt-5">
            <input
              type="email"
              placeholder="Send Email"
              className="w-full px-8 py-6 rounded-full text-white placeholder-gray-300 focus:outline-none backdrop-blur-md text-lg"
              style={{
                background: "#35247482",
                boxShadow: "0px 4px 38.1px 9px #1B0062C7",
              }}
              readOnly
            />
            <button
              className="absolute right-1 top-1/2 -translate-y-1/2 hover:opacity-80 transition-opacity w-16 h-16 rounded-full flex items-center justify-center border-2 border-black"
              style={{ background: "#2C0F79" }}
            >
              <ArrowUpRight className="w-7 h-7 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
