"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WhyChoose() {
  return (
    <section className="text-white px-6 sm:px-12 lg:px-30 xl:px-40 py-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-18">
        {/* Left Text Section */}
        <div className="flex-1">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl text-[#F2F2FA] font-bold leading-tight mb-6"
          >
            Why choose <br />
            our wallet
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl text-[#FFFFFF] mb-6"
          >
            Our wallet is more than just a place to store crypto — it&apos;s
            your secure gateway to the decentralized world.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-2xl text-[#FFFFFF]"
          >
            With cutting-edge security, lightning-fast transactions, and a
            beautifully simple interface, we make managing your digital assets
            effortless.
          </motion.p>
        </div>

        {/* Right Stats Section */}
        <div className="flex flex-col gap-2 w-full lg:w-[500px]">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-between items-center border border-[#3F3F3F] rounded-2xl px-6 py-6 bg-black/10 backdrop-blur-md min-h-[96px] sm:min-h-[159px]"
          >
            <div className="flex items-center gap-2">
              <Image
                src="/assets/Rectangle.svg"
                alt="icon"
                width={16}
                height={16}
              />
              <span className="text-white text-lg font-medium">Support</span>
            </div>
            <span className="text-5xl sm:text-[64px] font-extrabold">
              100k+
            </span>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-between items-center border border-[#3F3F3F] rounded-2xl px-6 py-6 bg-black/10 backdrop-blur-md min-h-[96px] sm:min-h-[159px]"
          >
            <span className="text-5xl sm:text-[64px] font-extrabold">90%</span>
            <div className="flex items-center gap-2">
              <Image
                src="/assets/Rectangle.svg"
                alt="icon"
                width={16}
                height={16}
              />
              <span className="text-white text-lg font-medium">Security</span>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-between items-center border border-[#3F3F3F] rounded-2xl px-6 py-6 bg-black/10 backdrop-blur-md min-h-[96px] sm:min-h-[159px]"
          >
            <div className="flex items-center gap-2">
              <Image
                src="/assets/Rectangle.svg"
                alt="icon"
                width={16}
                height={16}
              />
              <span className="text-white text-lg font-medium">Service</span>
            </div>
            <span className="text-5xl sm:text-[64px] font-extrabold">95%</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
