"use client";

import Image from "next/image";
import { useState } from "react";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { cryptoData, tabs } from "../data/cryptoData";

const CryptoCoin = () => {
  const [activeTab, setActiveTab] = useState("Popular");

  const currentData = cryptoData[activeTab as keyof typeof cryptoData] || cryptoData.Popular;

  return (
    <section
      className="w-full px-6 sm:px-12 lg:px-20 xl:px-30 py-16 sm:py-20 lg:py-24 text-white"
      style={{
        background:
          "radial-gradient(40% 40% at 50% 50%, rgba(90, 5, 238, 0.72) 0%, rgba(90, 5, 238, 0.2) 40%, rgba(90, 5, 238, 0.1) 70%, black 100%)",
        backdropFilter: "blur(340px)",
      }}
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
          Earn Rewards on Your Crypto
        </h2>
        <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl px-4">
          Real users. Real results. Here&#39;s what our community has to say
          about using our wallet to power their crypto journey.
        </p>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex justify-center mt-8 sm:mt-10 lg:mt-12 gap-2 sm:gap-4 flex-wrap px-4"
      >
        {tabs.map((tab, index) => (
          <motion.button
            key={tab}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
            className={`relative px-3 sm:px-5 py-2 sm:py-3 rounded-xl text-xs sm:text-sm font-medium transition ${
              activeTab === tab
                ? "bg-[#301d76] text-white border border-purple-500"
                : "bg-[#1e0f47] text-gray-300 hover:bg-[#301d76]"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "Popular" && (
              <Sparkles className="absolute -top-2 -right-2 w-3 h-3 sm:w-4 sm:h-4 text-purple-400 animate-pulse" />
            )}
            {tab}
          </motion.button>
        ))}
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12 px-4 sm:px-0">
        {currentData.map((crypto, index) => (
          <motion.div
            key={`${activeTab}-${index}`}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.7 + index * 0.1,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{ 
              y: -8,
              transition: { 
                duration: 0.3,
                ease: "easeOut"
              }
            }}
            className="relative bg-[#2D069282] rounded-xl p-4 sm:p-5 lg:p-8 flex flex-col items-center justify-center text-center hover:bg-[#2D069299] transition-colors duration-300 min-h-[200px] sm:min-h-[220px] cursor-pointer border border-transparent hover:border-purple-500/20"
            style={{
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* APR Badges */}
            <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-[#301d76] text-xs font-semibold px-2 py-1 rounded-full border border-purple-500">
              {crypto.apr} APR
            </div>

            {/* Logo */}
            <div className="my-4 sm:my-6">
              <Image
                src={crypto.logo}
                alt={`${crypto.name} logo`}
                width={50}
                height={50}
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16"
              />
            </div>

            {/* Info */}
            <h3 className="font-semibold text-base sm:text-lg mb-2">
              {crypto.name} {crypto.symbol}
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-tight px-2">
              {crypto.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="flex justify-center mt-12 sm:mt-16 px-4"
      >
        <div
          className="rounded-full hover:scale-105 active:scale-95 transition-all duration-300 group relative overflow-hidden p-[3px]"
          style={{
            background: "#FFFFFF0F",
            boxShadow: "0px 4px 26.8px 0px #9F55FF7A",
          }}
        >
          <div
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #5A05EE 10%, #8C20FF 20%, #FFFFFF 100%)",
            }}
          />

          <button
            className="relative text-white font-semibold py-2.5 px-6 rounded-full w-full h-full z-10"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #5A05EE 0%, #8C20FF 100%)",
            }}
          >
            Start For Free
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default CryptoCoin;
