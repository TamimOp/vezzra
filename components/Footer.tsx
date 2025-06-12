import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0A010F] text-white pt-16 pb-8 px-4 sm:px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Bottom Ellipse Gradient - Glowing Effect */}
      <div
        className="absolute bottom-0 left-1/2 rounded-full opacity-60 pointer-events-none"
        style={{
          width: "min(1101px, 200vw)",
          height: "min(1012px, 180vh)",
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(143, 105, 242, 0.88) 0%, rgba(73, 26, 228, 0.88) 100%)",
          filter: "blur(min(390.8px, 30vw))",
          transform: "translateX(-50%) translateY(80%)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-8 md:gap-12 border-b-[3px] border-[#4200FF2B] pb-8 md:pb-10 relative z-20">
          {/* LEFT SECTION */}
          <div className="max-w-sm text-center lg:text-left">
            <Image
              src="/assets/logo.png"
              alt="Vezzra Logo"
              width={120}
              height={40}
              className="mb-4 mx-auto lg:mx-0"
            />
            <p className="text-[#A8A4B3] text-sm md:text-[15px] leading-relaxed">
              Secure. Fast. Transparent. Join the next-gen trading experience.
            </p>
          </div>

          {/* LINK SECTIONS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full lg:w-auto">
            {/* Menu */}
            <div className="text-center lg:text-left">
              <h3 className="text-white text-sm md:text-base font-semibold mb-3 md:mb-4">
                MENU
              </h3>
              <ul className="space-y-2 text-[#A8A4B3] text-sm md:text-[15px]">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    HOME
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    ABOUT US
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    TESTIMONIALS
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    CONTACT US
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="text-center lg:text-left">
              <h3 className="text-white font-semibold text-sm md:text-base mb-3 md:mb-4">
                RESOURCES
              </h3>
              <ul className="space-y-2 text-sm md:text-[15px] text-[#A8A4B3]">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FOR INSTITUTION
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    BUG BOUNTY
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    DOCS & GUIDES
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    CONTACT US
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="text-center lg:text-left sm:col-span-2 lg:col-span-1">
              <h3 className="text-white text-sm md:text-base font-semibold mb-3 md:mb-4">
                LEGAL
              </h3>
              <ul className="space-y-2 text-sm md:text-[15px] text-[#A8A4B3]">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    PRIVACY POLICY
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    TERMS OF SERVICE
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    TOKEN RESTRICTED
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-[#A8A4B3] text-xs sm:text-sm md:text-[15px] pt-4 md:pt-6 gap-3 md:gap-4 relative z-20">
          <p className="text-center sm:text-left">
            Copyright 2025 webdevxio.com
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-center">
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Settings
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Disclosures
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
