import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0A010F] text-white pt-16 pb-8 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Bottom Ellipse Gradient - Glowing Effect */}
      <div
        className="absolute bottom-0 left-1/2 rounded-full opacity-60 pointer-events-none"
        style={{
          width: "1101px",
          height: "1012px",
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(143, 105, 242, 0.88) 0%, rgba(73, 26, 228, 0.88) 100%)",
          filter: "blur(390.8px)",
          transform: "translateX(-50%) translateY(80%)", // Only 20% visible
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 border-b-[3px] border-[#4200FF2B] pb-10 relative z-20">
          {/* LEFT SECTION */}
          <div className="max-w-sm">
            <Image
              src="/assets/logo.png"
              alt="Vezzra Logo"
              width={120}
              height={40}
              className="mb-4"
            />
            <p className="text-[#A8A4B3] text-[15px] leading-relaxed">
              Secure. Fast. Transparent. Join the next-gen trading experience.
            </p>
          </div>

          {/* LINK SECTIONS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full md:w-auto text-center">
            {/* Menu */}
            <div>
              <h3 className="text-white text-base font-semibold mb-4">MENU</h3>
              <ul className="space-y-2 text-[#A8A4B3] text-[15px]">
                <li>
                  <a href="#">HOME</a>
                </li>
                <li>
                  <a href="#">ABOUT US</a>
                </li>
                <li>
                  <a href="#">TESTIMONIALS</a>
                </li>
                <li>
                  <a href="#">CONTACT US</a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-semibold text-base mb-4">
                RESOURCES
              </h3>
              <ul className="space-y-2 text-[15px] text-[#A8A4B3]">
                <li>
                  <a href="#">FOR INSTITUTION</a>
                </li>
                <li>
                  <a href="#">BUG BOUNCY</a>
                </li>
                <li>
                  <a href="#">DOCS & GUIDES</a>
                </li>
                <li>
                  <a href="#">CONTACT US</a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white text-base font-semibold mb-4">LEGAL</h3>
              <ul className="space-y-2 text-[15px] text-[#A8A4B3]">
                <li>
                  <a href="#">PRIVACY POLICY</a>
                </li>
                <li>
                  <a href="#">TEAMS OF SERVICE</a>
                </li>
                <li>
                  <a href="#">TOKEN RESTRICTED</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-[#A8A4B3] text-[15px] pt-6 gap-4 relative z-20">
          <p>Copyright 2025 webdevxio.com</p>
          <div className="flex flex-wrap gap-6">
            <a href="#">Terms fo Service</a>
            <a href="#">Cookie Settings</a>
            <a href="#">Disclosures</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
