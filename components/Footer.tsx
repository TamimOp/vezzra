"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  const menuItems = ["HOME", "ABOUT US", "TESTIMONIALS", "CONTACT US"];
  const resourceItems = [
    "FOR INSTITUTION",
    "BUG BOUNTY",
    "DOCS & GUIDES",
    "CONTACT US",
  ];
  const legalItems = ["PRIVACY POLICY", "TERMS OF SERVICE", "TOKEN RESTRICTED"];
  const bottomLinks = ["Terms of Service", "Cookie Settings", "Disclosures"];

  return (
    <footer className="relative text-white pt-16 pb-8 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, transparent 50%, rgba(10, 1, 15, 0.3) 70%, rgba(10, 1, 15, 0.6) 85%, #0A010F 100%)",
        }}
      />

      {/* Bottom Ellipse Gradient - Slightly Reduced Glow Effect */}
      <div
        className="absolute bottom-0 left-1/2 rounded-full opacity-70 pointer-events-none z-10"
        style={{
          width: "min(900px, 160vw)",
          height: "min(700px, 120vh)",
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(143, 105, 242, 0.7) 0%, rgba(73, 26, 228, 0.5) 100%)",
          filter: "blur(min(250px, 25vw))",
          transform: "translateX(-50%) translateY(65%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-20">
        <div className="flex flex-col lg:flex-row justify-between gap-8 md:gap-12 border-b-[3px] border-[#4200FF2B] pb-8 md:pb-10">
          {/* LEFT SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-sm text-center lg:text-left"
          >
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
          </motion.div>

          {/* LINK SECTIONS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full lg:w-auto">
            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <h3 className="text-white text-sm md:text-base font-semibold mb-3 md:mb-4">
                MENU
              </h3>
              <ul className="space-y-2 text-[#A8A4B3] text-sm md:text-[15px]">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    <a href="#" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center lg:text-left"
            >
              <h3 className="text-white font-semibold text-sm md:text-base mb-3 md:mb-4">
                RESOURCES
              </h3>
              <ul className="space-y-2 text-sm md:text-[15px] text-[#A8A4B3]">
                {resourceItems.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  >
                    <a href="#" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center lg:text-left sm:col-span-2 lg:col-span-1"
            >
              <h3 className="text-white text-sm md:text-base font-semibold mb-3 md:mb-4">
                LEGAL
              </h3>
              <ul className="space-y-2 text-sm md:text-[15px] text-[#A8A4B3]">
                {legalItems.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  >
                    <a href="#" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col sm:flex-row justify-between items-center text-[#A8A4B3] text-xs sm:text-sm md:text-[15px] pt-4 md:pt-6 gap-3 md:gap-4"
        >
          <p className="text-center sm:text-left">
            Copyright 2025 webdevxio.com
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-center">
            {bottomLinks.map((link, index) => (
              <motion.a
                key={link}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 1.4 + index * 0.1 }}
                href="#"
                className="hover:text-white transition-colors"
              >
                {link}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
