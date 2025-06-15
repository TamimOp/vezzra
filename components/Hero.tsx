"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="text-white px-6 sm:px-12 lg:px-30 xl:px-40 pt-35 pb-32 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center">
          {/* LEFT TEXT CONTENT */}
          <div className="text-left max-w-2xl space-y-6">
            <div className="relative">
              <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 2,
                  ease: "easeOut",
                  staggerChildren: 0.08,
                  delayChildren: 0.2,
                }}
                className="text-4xl sm:text-5xl lg:text-[90px] font-extrabold leading-tight"
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  The Future
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  of{" "}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-clip-text text-transparent bg-[linear-gradient(182.76deg,#FA52FF_46.71%,rgba(83,0,255,0.925)_56.01%,#AF94FF_60.16%)]"
                >
                  Crypto
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {" "}
                  is
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  Here.
                </motion.span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <Image
                  src="/assets/heroStar.png"
                  alt="Hero Star"
                  width={40}
                  height={40}
                  className="absolute top-0 right-0 lg:w-12 lg:h-12 xl:w-16 xl:h-16"
                  style={{
                    transform: "translate(20px, -10px)",
                  }}
                />
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-base sm:text-2xl text-[#EBEBEB] max-w-2xl"
            >
              Secure. Fast. Transparent. Join the next-gen trading experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex flex-wrap items-center gap-4 pt-2"
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

              <button className="border border-white hover:bg-white hover:text-black font-semibold py-2.5 px-6 rounded-full transition-all duration-200">
                Get App
              </button>
            </motion.div>
          </div>

          {/* RIGHT IMAGE CONTENT */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative flex justify-center items-center mt-12 md:mt-0"
          >
            {/* ELLIPSE GRADIENT BEHIND PHONES */}
            <div className="absolute w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] rounded-full blur-[120px] z-0 bg-[linear-gradient(180deg,#4B0DFF_0%,#F100FD_100%)]" />

            {/* Mobile Images */}
            <div className="relative z-10">
              <Image
                src="/assets/heroMobile.png"
                alt="Hero Mobile"
                width={380}
                height={380}
                className="relative z-10"
                priority
              />

              {/* Top overlay with same slide-in animation as mobile */}
              <motion.div
                className="absolute z-20 -top-4 -right-12"
                animate={{
                  x: [0, 30, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/assets/heroBalanceTop.png"
                  alt="Balance Top"
                  width={175}
                  height={99}
                />
              </motion.div>

              <motion.div
                className="absolute z-20 bottom-0 -right-5"
                animate={{
                  x: [0, -30, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <Image
                  src="/assets/heroBalanceBottom.png"
                  alt="Balance Bottom"
                  width={311}
                  height={176}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="relative z-10 mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 text-start text-white"
        >
          {[
            {
              title: "20,000+",
              desc: "Satisfied Investors, Trade, Financial Enthusiasts",
            },
            {
              title: "100+",
              desc: "Advanced Features for Automated Tracking",
            },
            {
              title: "91.92%",
              desc: "Accuracy in Predictable Analysis",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.8 + index * 0.2 }}
              className="backdrop-blur-md bg-[#24005645] border border-white/20 p-6 rounded-xl shadow-xl"
            >
              <h3 className="text-[40px] font-medium">{stat.title}</h3>
              <p className="text-base mt-1 font-normal text-[#C6C6C6]">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
