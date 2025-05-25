import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { FeatureSection } from "@/components/feature-section";
import { ProductSection } from "@/components/product-section";
import { TeamSection } from "@/components/team-section";
import { ContactSection } from "@/components/contact-section";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1e1e1e] flex justify-center">
      <div className="w-full max-w-[1440px] min-w-[768px]">
        {/* Mobile Message - Shows under 1059px */}
        <div className="max-[1058px]:flex hidden min-h-screen flex-col items-center justify-center bg-black text-white p-6 text-center">
          <div className="mb-6">
            <Image
              src="/stridelogowhite.png"
              alt="STRIDE Logo"
              width={200}
              height={200}
              className="mx-auto w-auto h-auto max-w-[200px] max-h-[200px]"
            />
          </div>
          <h1 className="text-sm sm:text-base font-bold mb-4 px-2">
            Mobile Not Supported
          </h1>
          <p className="text-xs sm:text-base mb-6 px-4 leading-relaxed max-w-sm">
            Please visit our website on a desktop device for the best
            experience.
          </p>
          <Link
            href="https://dustofwar.net"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-base text-blue-400 hover:text-blue-300 underline px-4 py-2 transition-colors"
          >
            Visit dustofwar.net
          </Link>
        </div>

        {/* Desktop Content - Shows 1059px and above */}
        <main className="hidden min-[1059px]:block">
          <Navigation />
          <HeroSection />
          <FeatureSection />
          <ProductSection />
          <TeamSection />
          <ContactSection />
        </main>
      </div>
    </div>
  );
}
