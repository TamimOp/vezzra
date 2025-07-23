"use client";

import { ArrowUpRight } from "lucide-react";
import toast from "react-hot-toast";

export default function Contact() {
  const handleSendEmail = () => {
    toast.success("Email sent successfully!", {
      duration: 3000,
      position: "top-center",
      style: {
        background: "rgba(36, 0, 86, 0.7)",
        color: "#F2F2FA",
        borderRadius: "68px",
        padding: "20px 32px",
        fontSize: "18px",
        fontWeight: "600",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        boxShadow:
          "0px 8px 48px rgba(45, 6, 146, 0.6), 0px 2px 32px rgba(27, 0, 98, 0.8)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      },
      iconTheme: {
        primary: "#4B0DFF",
        secondary: "#ffffff",
      },
    });
  };

  return (
    <section
      id="contact"
      className="relative flex justify-center px-2 sm:px-4 py-16 sm:py-32 overflow-hidden bg-black"
    >
      <div className="relative w-full max-w-6xl group cursor-pointer">
        {/* Gradient border wrapper */}
        <div
          className="absolute inset-0 rounded-3xl sm:rounded-[68px] rotate-[2deg] transition-all duration-500 ease-out group-hover:rotate-0 group-hover:scale-105"
          style={{
            background:
              "linear-gradient(90.21deg, rgba(165, 165, 165, 0.46) 1.29%, rgba(45, 6, 146, 0.85) 98.01%)",
            padding: "5px",
          }}
        >
          <div className="w-full h-full bg-black backdrop-blur-lg rounded-3xl sm:rounded-[68px]"></div>
        </div>

        {/* Content container */}
        <div
          className="relative rounded-3xl sm:rounded-[68px] px-4 sm:px-10 md:px-20 py-8 sm:py-16 w-full text-center rotate-[2deg] min-h-[340px] sm:min-h-[480px] md:min-h-[560px] flex flex-col justify-center mx-auto transition-all duration-500 ease-out group-hover:rotate-0 group-hover:scale-105"
          style={{
            boxShadow: "0px 2px 32px 6px #2D0692",
          }}
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 text-[#F2F2FA]">
            Get in touch with us
          </h2>
          <p className="text-gray-300 mb-8 sm:mb-12 text-base sm:text-xl md:text-2xl max-w-3xl mx-auto">
            Real users. Real results. Here&apos;s what our community has to say
            about using our wallet to power their crypto journey.
          </p>

          <div className="relative flex w-full max-w-xs sm:max-w-xl mx-auto mt-5">
            <input
              type="email"
              placeholder="Send Email"
              className="w-full px-4 sm:px-8 py-4 sm:py-6 rounded-full text-white placeholder-gray-300 focus:outline-none backdrop-blur-md text-base sm:text-lg"
              style={{
                background: "#35247482",
                boxShadow: "0px 4px 38.1px 9px #1B0062C7",
              }}
            />
            <button
              onClick={handleSendEmail}
              className="absolute right-1 top-1/2 -translate-y-1/2 hover:opacity-80 transition-opacity w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center border-2 border-black"
              style={{ background: "#2C0F79" }}
            >
              <ArrowUpRight className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
