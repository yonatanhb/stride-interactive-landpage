import Image from "next/image";

export function FeatureSection() {
  return (
    <section id="features" className="relative w-[1440px] h-[514px] text-white">
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
      <div className="relative z-10 h-full">
        {/* Header */}
        <div className="absolute left-[145px] top-[34px] w-[470px]">
          <h2 className="font-georama font-semibold text-[19.2px] leading-[150%] tracking-[0.15em] text-[#DFDFDF]">
            Our Core Technology
          </h2>
          <h1 className="font-georama font-semibold text-[32px] leading-[150%] tracking-[0.15em] text-[#DFDFDF] mt-2">
            VReal Combat Simulator
          </h1>
        </div>

        {/* Horizontal Line */}
        <div className="absolute left-[145px] top-[128px] w-[806px] h-[1px] bg-[#DFDFDF]" />

        {/* Subtitle */}
        <div className="absolute left-[105px] top-[131px] w-[400px] text-center">
          <p className="font-georama font-semibold text-[15.552px] leading-[135%] tracking-[0.15em] text-[#DFDFDF]">
            The VReal Combat Simulator is the foundation of everything we build
          </p>
        </div>

        {/* Main Description */}
        <div className="absolute left-[145px] top-[221px] w-[570px]">
          <p className="font-georama font-normal text-[20.736px] leading-[120%] tracking-[0.05em] text-[#DFDFDF]">
            <span className="font-semibold">Powered by Unreal Engine 5</span>
            <br />
            An immersive combat simulation that reflects the real physical toll
            and battlefield decisions of modern warfare.
          </p>
        </div>

        {/* Additional Description */}
        <div className="absolute left-[145px] top-[296px] w-[706px]">
          <p className="font-georama font-normal text-[20.736px] leading-[120%] tracking-[0.05em] text-[#DFDFDF]">
            Combining physiological realism with true-to-life combat mechanics
          </p>
        </div>

        {/* Unreal Engine Logo */}
        <div className="absolute left-[45px] top-[394px] w-[66.45px] h-[80.7px]">
          <div className="w-full h-full flex items-center justify-center">
            <Image src="/UE-Logotype-2023-Vertical-White.png" alt="UE5" fill />
          </div>
        </div>
      </div>
    </section>
  );
}
