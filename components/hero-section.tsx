import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative w-[1440px] h-[726px] flex items-center justify-center text-white">
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

      {/* Top Title */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[46px] w-[800px]">
        <p className="font-['anta'] leading-[120%] tracking-[0.2em] capitalize text-white whitespace-nowrap text-center">
          Step Into The Future Of Combat Simulation
        </p>
      </div>

      {/* Center Content */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[389px] w-[979px]">
        <h2 className="font-alumni-sans text-center text-[24px]">
          OUR MISSION IS TO CREATE THE MOST AUTHENTIC COMBAT SIMULATION
          EXPERIENCE
        </h2>
      </div>

      {/* Subtitle */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[434px] w-[829px]">
        <p className="font-georama text-[20px] leading-[102%] tracking-[0.2em] text-center text-white">
          Stride Interactive was founded by IDF combat veterans turned game
          developers, engineers, and artists.
        </p>
      </div>

      {/* Bottom Text */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[640px] w-[1145px]">
        <p className="font-georama text-[20px] leading-[120%] tracking-[0.2em] text-left text-white">
          We combine firsthand military insight with advanced game engines and
          design to capture combat as it truly is — complex, demanding, and
          deeply human
        </p>
      </div>

      {/* Logo */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[58px] w-[245.29px] h-[315.57px]">
        <Image
          src="/stridelogowhite.png"
          alt="STRIDE Logo"
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
}
