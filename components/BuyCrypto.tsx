"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  "Pay with Visa, Mastercard, or Bank Transfer",
  "Secure KYC Verification Powered by Industry Standards",
  "Instant Crypto Delivery to Your Wallet",
  "Available in 100+ Countries",
];

export default function BuyCrypto() {
  return (
    <section className="relative py-24 px-6 sm:px-12 md:px-30 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <Image
            src="/assets/Presentation.png"
            alt="Buy Crypto Illustration"
            width={800}
            height={600}
            className="w-full h-auto max-w-[700px] object-contain rounded-2xl"
            style={{ boxShadow: "12px 80px 71.3px 0px #784AFF6B" }}
            priority
          />
        </motion.div>

        {/* Content - Should come from LEFT */}
        <div className="w-full lg:w-1/2">
          <motion.h2
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-extrabold leading-tight mb-10"
          >
            Buy Crypto Easily and <br />
            Securely in Minutes
          </motion.h2>

          <ul className="space-y-6 text-xl">
            {features.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div
                  className="w-8 h-8 rounded-full bg-[#1F00FF40] flex items-center justify-center text-white text-base font-bold"
                  style={{
                    boxShadow: "2px 4px 4px 0px #FFFFFF1F inset",
                  }}
                >
                  {index + 1}
                </div>
                <p className="text-lg text-gray-200">{item}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
