import BuyCrypto from "@/components/BuyCrypto";
import Feedback from "@/components/Feedback";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <main className="relative bg-[#0f021f]">
      {/* Shared background ellipse for Hero (80%) + WhyChoose (20%) sections */}
      <div className="absolute top-0 left-0 right-0 h-full flex items-start justify-center pointer-events-none z-0">
        <div
          className="w-[1200px] h-[800px] rounded-full opacity-60"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, #8F69F2 0%, #491AE4 100%)",
            filter: "blur(150px)",
            transform: "translateY(300px)", // Adjusted for better 80/20 split
          }}
        />
      </div>

      <Hero />
      <WhyChoose />

      {/* Wrapper for Feedback + BuyCrypto with shared background */}
      <div className="relative">
        {/* Background ellipse for this section */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
          <div
            className="w-[1400px] h-[400px] rounded-full opacity-80"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, #8F69F2 0%, #491AE4 100%)",
              filter: "blur(390.79998779296875px)",
            }}
          />
        </div>

        <Feedback />
        <BuyCrypto />
      </div>
    </main>
  );
}
