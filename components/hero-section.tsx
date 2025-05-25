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

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 lg:px-8 flex flex-col items-center">
        {/* Top Title */}
        <div className="w-full max-w-[600px] lg:max-w-[800px] mb-4 lg:mb-6 -mt-4 lg:-mt-10">
          <p className="font-['anta'] text-lg lg:text-xl leading-[120%] tracking-[0.2em] capitalize text-white text-center">
            Step Into The Future Of Combat Simulation
          </p>
        </div>

        {/* Logo */}
        <div className="w-[17%] h-auto min-w-[180px] max-w-[245px] mb-6 lg:mb-8">
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
        <div className="w-full max-w-[700px] lg:max-w-[979px] mb-4 lg:mb-6">
          <h2 className="font-alumni-sans text-center text-lg lg:text-[24px] leading-tight">
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
        <div className="w-full max-w-[800px] lg:max-w-[1145px]">
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
