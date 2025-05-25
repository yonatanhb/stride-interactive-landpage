import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { FeatureSection } from "@/components/feature-section";
import { ProductSection } from "@/components/product-section";
import { TeamSection } from "@/components/team-section";
import { ContactSection } from "@/components/contact-section";
import { OrientationDetector } from "@/components/orientation-detector";

export default function Home() {
  return (
    <>
      {/* Mobile Messages with Smart Orientation Detection */}
      <OrientationDetector />

      {/* Desktop Content - Shows 1059px and above */}
      <div className="min-h-screen bg-[#1e1e1e] hidden min-[1059px]:flex min-[1059px]:justify-center">
        <div className="w-full max-w-[1440px] min-w-[768px]">
          <main>
            <Navigation />
            <HeroSection />
            <FeatureSection />
            <ProductSection />
            <TeamSection />
            <ContactSection />
          </main>
        </div>
      </div>
    </>
  );
}
