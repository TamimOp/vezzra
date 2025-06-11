import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0f021f] text-white px-6 md:px-12 lg:px-20 pt-24 pb-32">
      {/* Background Ellipse with Blur Effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-[1200px] h-[800px] rounded-full opacity-60"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, #8F69F2 0%, #491AE4 100%)",
            filter: "blur(150px)",
            transform: "translateY(100px)",
          }}
        />
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT TEXT CONTENT */}
        <div className="text-left max-w-xl space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            The Future <br />
            of{" "}
            <span className="bg-clip-text text-transparent bg-[linear-gradient(182.76deg,#FA52FF_46.71%,rgba(83,0,255,0.925)_56.01%,#AF94FF_60.16%)]">
              Crypto
            </span>{" "}
            is <br />
            Here.
          </h1>

          <p className="text-sm sm:text-base text-gray-200 max-w-md">
            Secure. Fast. Transparent. Join the next-gen trading experience.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="bg-gradient-to-r from-[#8D2EFF] to-[#F100FD] hover:opacity-90 text-white font-semibold py-2.5 px-6 rounded-full shadow-md">
              Start For Free
            </button>
            <button className="border border-white hover:bg-white hover:text-black font-semibold py-2.5 px-6 rounded-full transition-all">
              Get App
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE CONTENT */}
        <div className="relative flex justify-center items-center mt-12 md:mt-0">
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
            {/* Top overlay */}
            <Image
              src="/assets/heroBalanceTop.png"
              alt="Balance Top"
              width={175}
              height={99}
              className="absolute z-20 -top-4 -right-12"
            />
            {/* Bottom overlay */}
            <Image
              src="/assets/heroBalanceBottom.png"
              alt="Balance Bottom"
              width={311}
              height={176}
              className="absolute z-20 bottom-0 -right-5"
            />
          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="relative z-10 mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-white">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-xl shadow-xl">
          <h3 className="text-2xl font-bold">20,0000+</h3>
          <p className="text-sm mt-1">
            Satisfied Investors, Trade, Financial EnthesiasiEnthusiast
          </p>
        </div>
        <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-xl shadow-xl">
          <h3 className="text-2xl font-bold">100+</h3>
          <p className="text-sm mt-1">
            Advance Features for Automated Tracking
          </p>
        </div>
        <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-xl shadow-xl">
          <h3 className="text-2xl font-bold">91.92%</h3>
          <p className="text-sm mt-1">Accuracy in Predictable Analysis</p>
        </div>
      </div>
    </section>
  );
}
