import Image from "next/image";

export default function WhyChoose() {
  return (
    <section className="text-white px-6 sm:px-12 lg:px-30 xl:px-40 py-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-20">
        {/* Left Text Section */}
        <div className="flex-1">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Why choose <br />
            our wallet
          </h2>
          <p className="text-lg text-[#D0D0D0] mb-6">
            Our wallet is more than just a place to store crypto — it’s your
            secure gateway to the decentralized world.
          </p>
          <p className="text-lg text-[#D0D0D0]">
            With cutting-edge security, lightning-fast transactions, and a
            beautifully simple interface, we make managing your digital assets
            effortless.
          </p>
        </div>

        {/* Right Stats Section */}
        <div className="flex flex-col gap-6 w-full lg:w-[420px]">
          {/* Card 1 */}
          <div className="flex justify-between items-center border border-[#3F3F3F] rounded-2xl px-6 py-6 bg-black/10 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/Rectangle.svg"
                alt="icon"
                width={16}
                height={16}
              />
              <span className="text-white text-lg font-medium">Support</span>
            </div>
            <span className="text-white text-3xl font-extrabold">100k+</span>
          </div>

          {/* Card 2 */}
          <div className="flex justify-between items-center border border-[#3F3F3F] rounded-2xl px-6 py-6 bg-black/10 backdrop-blur-md">
            <span className="text-white text-3xl font-extrabold">90%</span>
            <div className="flex items-center gap-2">
              <Image
                src="/assets/Rectangle.svg"
                alt="icon"
                width={16}
                height={16}
              />
              <span className="text-white text-lg font-medium">Security</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex justify-between items-center border border-[#3F3F3F] rounded-2xl px-6 py-6 bg-black/10 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/Rectangle.svg"
                alt="icon"
                width={16}
                height={16}
              />
              <span className="text-white text-lg font-medium">Service</span>
            </div>
            <span className="text-white text-3xl font-extrabold">95%</span>
          </div>
        </div>
      </div>
    </section>
  );
}
