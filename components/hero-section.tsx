import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-white">
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
      <div className="absolute top-8 left-0 w-full z-10 flex justify-center">
        <p className="step-into-title anta-regular">Step Into The Future Of Combat Simulation</p>
      </div>

      {/* Center Content */}
      <div className="container mx-auto px-4 z-10 text-center flex flex-col items-center justify-center">
        <div className="mb-4">
          <Image
            src="/placeholder.svg?height=80&width=80"
            alt="STRIDE Logo"
            width={80}
            height={80}
            className="mx-auto"
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-0 leading-tight">STRIDE</h1>
        <div className="text-xl md:text-2xl tracking-widest mb-6 font-light">INTERACTIVE</div>
        <h2 className="text-lg md:text-xl font-bold mb-2 tracking-wide uppercase">OUR MISSION IS TO CREATE THE MOST AUTHENTIC COMBAT SIMULATION EXPERIENCE</h2>
        <p className="max-w-2xl mx-auto text-base md:text-lg mb-2">
          Stride Interactive was founded by IDF combat veterans turned game developers, engineers, and artists.
        </p>
      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-8 left-0 w-full z-10 flex justify-center">
        <p className="max-w-3xl text-center text-base md:text-lg px-4">
          We combine firsthand military insight with advanced game engines and design to capture combat as it truly is — complex, demanding, and deeply human
        </p>
      </div>
    </section>
  )
}
