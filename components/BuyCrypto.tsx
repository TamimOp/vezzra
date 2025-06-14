"use client";

import Image from "next/image";

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
        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/assets/buyCrypto.png"
            alt="Buy Crypto Illustration"
            width={800}
            height={600}
            className="w-full h-auto max-w-[700px] object-contain rounded-2xl"
            priority
          />
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-10">
            Buy Crypto Easily and <br />
            Securely in Minutes
          </h2>

          <ul className="space-y-6 text-xl">
            {features.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <div
                  className="w-8 h-8 rounded-full bg-[#1F00FF40] flex items-center justify-center text-white text-base font-bold"
                  style={{
                    boxShadow: "2px 4px 4px 0px #FFFFFF1F inset",
                  }}
                >
                  {index + 1}
                </div>
                <p className="text-lg text-gray-200">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
