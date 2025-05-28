import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full h-[726px] lg:h-[726px] md:h-[600px] flex items-center justify-center text-white"
    >
      {/* Background Image - pic1 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/pic1.png"
          alt="Desert mountain landscape"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Top Title - Positioned absolutely at top */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 w-full max-w-[600px] lg:max-w-[800px] px-4 lg:px-8 z-10">
        <p className="font-['anta'] text-lg lg:text-xl leading-[120%] tracking-[0.2em] capitalize text-white text-center">
          Step Into The Future Of Combat Simulation
        </p>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 lg:px-8 flex flex-col items-center pb-[5px]">
        {/* Logo */}
        <div className="w-[17%] h-auto min-w-[234px] max-w-[318px] mb-6 lg:mb-8">
          <div className="relative w-full aspect-[245/316]">
            <Image
              src="/stridelogowhite.png"
              alt="STRIDE Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Center Content */}
        <div className="w-full max-w-[700px] lg:max-w-[1000px] mb-4 lg:mb-6">
          <h2 className="font-alumni-sans font-medium text-center text-[36px] leading-[0.75] tracking-[0.05em] mb-1">
            OUR MISSION IS TO CREATE THE MOST AUTHENTIC COMBAT SIMULATION
            EXPERIENCE
          </h2>
        </div>

        {/* Subtitle */}
        <div className="w-full max-w-[600px] lg:max-w-[829px] mb-8 lg:mb-12">
          <p className="font-georama text-base lg:text-[20px] leading-[102%] tracking-[0.2em] text-center text-white">
            Stride Interactive was founded by IDF combat veterans turned game
            developers, engineers, and artists.
          </p>
        </div>

        {/* Bottom Text */}
        <div className="w-full max-w-[800px] lg:max-w-[1145px] mt-20">
          <p className="font-georama text-base lg:text-[20px] leading-[120%] tracking-[0.2em] text-center lg:text-left text-white">
            We combine firsthand military insight with advanced game engines and
            design to capture combat as it truly is — complex, demanding, and
            deeply human
          </p>
        </div>
      </div>
    </section>
  );
}
