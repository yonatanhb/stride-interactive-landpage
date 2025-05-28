import Image from "next/image";

export function FeatureSection() {
  return (
    <section
      id="features"
      className="relative w-full h-[514px] text-white overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/pic2.png"
          alt="IDF combat soldier"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full max-w-[1440px] mx-auto">
        <div className="flex flex-col justify-start h-full pt-8 lg:pt-[34px] pl-4 lg:pl-0">
          {/* Header Section */}
          <div className="mb-0 lg:mb-0 lg:ml-[145px]">
            <h2 className="font-['georama'] font-semibold text-sm lg:text-[19.2px] leading-[150%] tracking-[0.15em] text-[#DFDFDF] mb-0">
              Our Core Technology
            </h2>
            <h1 className="font-squada font-normal text-[53.71px] leading-[45.36px] capitalize text-[#DFDFDF] max-w-[470px]">
              VReal Combat Simulator
            </h1>
          </div>

          {/* Horizontal Line */}
          <div
            style={{
              height: "1px",
              width: "100%",
              background:
                "linear-gradient(to right, #DFDFDF 80%, rgba(223,223,223,0) 100%)",
            }}
            className="max-w-[806px] mb-2 lg:mb-1 lg:ml-[145px]"
          />

          {/* Subtitle */}
          <div className="mb-4 lg:mb-8 lg:ml-[145px]">
            <p className="font-['georama'] font-semibold text-sm lg:text-[15.552px] leading-[135%] tracking-[0.15em] text-[#DFDFDF] max-w-[400px]">
              The VReal Combat Simulator is the foundation of everything we
              build
            </p>
          </div>

          {/* Main Description */}
          <div className="mb-6 lg:mb-8 lg:ml-[145px]">
            <p className="font-['georama'] font-normal text-lg lg:text-[20.736px] leading-[120%] tracking-[0.05em] text-[#DFDFDF] max-w-[700px]">
              <span className="font-semibold">Powered by Unreal Engine 5</span>
              <br />
              An immersive combat simulation that reflects the real
              <br /> physical toll and battlefield decisions of modern warfare.
              <br />
              Combining physiological realism with true-to-life combat mechanics
            </p>
          </div>

          {/* Additional Description */}
          <div className="mb-8 lg:mb-12 lg:ml-[145px]">
            <p className="font-['georama'] font-normal text-lg lg:text-[20.736px] leading-[120%] tracking-[0.05em] text-[#DFDFDF] max-w-[706px]"></p>
          </div>

          {/* Unreal Engine Logo */}
          <div className="absolute bottom-8 left-4 lg:bottom-[39px] lg:left-[45px] w-[50px] h-[60px] lg:w-[66.45px] lg:h-[80.7px]">
            <div className="w-full h-full flex items-center justify-center relative">
              <Image
                src="/UE-Logotype-2023-Vertical-White.png"
                alt="Unreal Engine 5"
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
