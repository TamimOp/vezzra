import BuyCrypto from "@/components/BuyCrypto";
import Contact from "@/components/Contact";
import CryptoCoin from "@/components/CryptoCoin";
import FAQ from "@/components/FAQ";
import Feedback from "@/components/Feedback";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <main className="relative bg-[#0f021f] overflow-hidden">
      {/* Wrapper for Hero + WhyChoose with shared background */}
      <div className="relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 pointer-events-none z-0">
          <div
            className="w-[100vw] sm:w-[800px] lg:w-[1200px] h-[400px] sm:h-[600px] lg:h-[800px] rounded-full opacity-60"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, #8F69F2 0%, #491AE4 100%)",
              filter: "blur(150px)",
              transform: "translateY(300px)",
            }}
          />
        </div>

        <Hero />
        <WhyChoose />
      </div>

      {/* Wrapper for Feedback + BuyCrypto with shared background */}
      <div className="relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
          <div
            className="w-[100vw] sm:w-[800px] lg:w-[1400px] h-[300px] sm:h-[300px] lg:h-[400px] rounded-full opacity-80"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, #8F69F2 0%, #491AE4 100%)",
              filter: "blur(390.79998779296875px)",
            }}
          />
        </div>

        {/* Black fade overlay at bottom */}
        <div
          className="absolute bottom-0 left-0 w-full h-32 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, black 100%)",
          }}
        />

        <Feedback />
        <BuyCrypto />
      </div>
      <CryptoCoin />
      <FAQ />
      <Contact />
    </main>
  );
}
