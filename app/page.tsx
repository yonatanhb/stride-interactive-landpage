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
      <div className="w-[1440px]">
        {/* Mobile Message */}
        <div className="md:hidden min-h-screen flex flex-col items-center justify-center bg-black text-white p-4 text-center">
          <div className="mb-8">
            <Image
              src="/stridelogowhite.png"
              alt="STRIDE Logo"
              width={300}
              height={300}
              className="mx-auto"
            />
          </div>
          <h1 className="text-base font-bold mb-4">Mobile Not Supported</h1>
          <p className="text-base mb-6">
            Please visit our website on a desktop device for the best
            experience.
          </p>
          <Link
            href="https://dustofwar.net"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-blue-400 hover:text-blue-300 underline"
          >
            Visit dustofwar.net
          </Link>
        </div>

        {/* Desktop Content */}
        <main className="hidden md:block">
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
