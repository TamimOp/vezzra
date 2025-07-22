"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    text: "A wonderful Experience!",
    desc: "Our web developers are experts in building highly interactive and deeply pleasant full-screen websites that work as flawlessly on smartphones as they do on desktops or any other device of your users choice.",
    name: "Heftiba",
    title: "CEO, Law farm",
    image: "/assets/dp1.png",
  },
  {
    text: "Amazing Service Quality!",
    desc: "The platform exceeded our expectations with its seamless integration and user-friendly interface. Our team productivity increased significantly after implementation.",
    name: "Sarah Johnson",
    title: "CTO, Tech Solutions",
    image: "/assets/dp2.png",
  },
  {
    text: "Outstanding Results!",
    desc: "Professional team, excellent communication, and delivered exactly what we needed. The results speak for themselves - highly recommended for any business.",
    name: "Michael Chen",
    title: "Founder, StartupXYZ",
    image: "/assets/dp1.png",
  },
  {
    text: "Top-notch Support!",
    desc: "Customer support is exceptional. They were available 24/7 and helped us through every step of the process. Couldn't be happier with the service.",
    name: "Emma Wilson",
    title: "Director, Digital Agency",
    image: "/assets/dp2.png",
  },
];

export default function Feedback() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const totalSlides = Math.ceil(testimonials.length / 2);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const getCurrentTestimonials = () => {
    const startIndex = currentIndex * 2;
    return testimonials.slice(startIndex, startIndex + 2);
  };

  return (
    <section className="relative px-4 sm:px-6 md:px-12 py-8 md:py-24 text-white overflow-hidden">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-center mb-8 md:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold leading-tight mb-4">
          What Our <br />
          <span className="text-white">Customers Saying</span>
        </h2>
        <p className="text-base sm:text-xl md:text-2xl text-gray-300">
          Real users. Real results. Here&#39;s what our community has to say
          about using our wallet to power their crypto journey.
        </p>
      </motion.div>

      {/* Cards Container */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="max-w-6xl mx-auto"
      >
        {/* Desktop View - Show 2 cards with carousel */}
        <div className="hidden md:block">
          <div className="relative h-[420px] md:h-[450px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8"
              >
                {getCurrentTestimonials().map((testimonial, i) => (
                  <TestimonialCard
                    key={`${currentIndex}-${i}`}
                    testimonial={testimonial}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile View - Show 1 card */}
        <div className="md:hidden">
          <div className="relative h-[400px] sm:h-[420px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    nextSlide();
                  } else if (swipe > swipeConfidenceThreshold) {
                    prevSlide();
                  }
                }}
                className="absolute w-full"
              >
                <TestimonialCard testimonial={testimonials[currentIndex * 2]} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-4 md:mt-8">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-purple-500 w-6" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* Arrows */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        className="flex justify-center gap-4 mt-6 md:mt-12"
      >
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110 ${
            currentIndex === 0
              ? "bg-gray-600/30 text-gray-500 cursor-not-allowed"
              : "bg-white/10 hover:bg-white/20 text-white"
          }`}
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          disabled={currentIndex === totalSlides - 1}
          className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110 ${
            currentIndex === totalSlides - 1
              ? "bg-gray-600/30 text-gray-500 cursor-not-allowed"
              : "bg-white/10 hover:bg-white/20 text-white"
          }`}
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </motion.div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="relative">
      <Image
        src="/assets/quote.png"
        alt="quote"
        width={100}
        height={100}
        className="absolute bottom-0 left-2 sm:left-6 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 pointer-events-none select-none z-0"
      />

      <div
        className="relative rounded-2xl p-6 sm:p-8 md:p-10 border border-white/10 overflow-hidden flex flex-col justify-center items-center text-center min-h-[360px] sm:min-h-[380px] md:min-h-[420px] z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.054) 0%, rgba(70, 0, 255, 0.18) 100%)",
          boxShadow: "0px 4px 18.7px 0px #00000040",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Stars */}
        <div className="flex gap-2 sm:gap-3 mb-3 sm:mb-4">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <FaStar
                key={i}
                className="text-[#36FFC1] text-2xl sm:text-2xl md:text-[33px]"
              />
            ))}
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4">
          {testimonial.text}
        </h3>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-[17px] text-gray-300 mb-5 sm:mb-6 max-w-xs sm:max-w-md">
          {testimonial.desc}
        </p>

        {/* Avatar and user */}
        <div className="flex items-center gap-3 sm:gap-4 mt-2">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={48}
            height={48}
            className="w-12 sm:w-14 h-12 sm:h-14 rounded-full object-cover"
          />
          <div className="text-left">
            <p className="text-lg sm:text-xl md:text-2xl font-semibold">
              {testimonial.name}
            </p>
            <p className="text-sm sm:text-base md:text-[16px] text-gray-400">
              {testimonial.title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
