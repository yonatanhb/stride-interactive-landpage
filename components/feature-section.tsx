import Image from "next/image";

export function FeatureSection() {
  return (
    <section
      id="features"
      className="relative w-full h-[514px] lg:h-[514px] md:h-[450px] text-white"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="pic2.png"
          alt="IDF combat soldier"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-[1200px] mx-auto px-4 lg:px-8">
        <div className="flex flex-col justify-center h-full py-8">
          {/* Header */}
          <div className="mb-6 lg:mb-8">
            <h2 className="font-georama font-semibold text-base lg:text-[19.2px] leading-[150%] tracking-[0.15em] text-[#DFDFDF] mb-2">
              Our Core Technology
            </h2>
            <h1 className="font-georama font-semibold text-2xl lg:text-[32px] leading-[150%] tracking-[0.15em] text-[#DFDFDF]">
              VReal Combat Simulator
            </h1>
          </div>

          {/* Horizontal Line */}
          <div className="w-full max-w-[806px] h-[1px] bg-[#DFDFDF] mb-6" />

          {/* Subtitle */}
          <div className="mb-8 lg:mb-12">
            <p className="font-georama font-semibold text-sm lg:text-[15.552px] leading-[135%] tracking-[0.15em] text-[#DFDFDF] max-w-[400px]">
              The VReal Combat Simulator is the foundation of everything we
              build
            </p>
          </div>

          {/* Main Description */}
          <div className="mb-6 lg:mb-8">
            <p className="font-georama font-normal text-lg lg:text-[20.736px] leading-[120%] tracking-[0.05em] text-[#DFDFDF] max-w-[570px]">
              <span className="font-semibold">Powered by Unreal Engine 5</span>
              <br />
              An immersive combat simulation that reflects the real physical
              toll and battlefield decisions of modern warfare.
            </p>
          </div>

          {/* Additional Description */}
          <div className="mb-8 lg:mb-12">
            <p className="font-georama font-normal text-lg lg:text-[20.736px] leading-[120%] tracking-[0.05em] text-[#DFDFDF] max-w-[706px]">
              Combining physiological realism with true-to-life combat mechanics
            </p>
          </div>

          {/* Unreal Engine Logo */}
          <div className="w-[50px] h-[60px] lg:w-[66.45px] lg:h-[80.7px]">
            <div className="w-full h-full flex items-center justify-center relative">
              <Image
                src="/UE-Logotype-2023-Vertical-White.png"
                alt="UE5"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
