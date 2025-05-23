import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FeatureSection } from "@/components/feature-section"
import { ProductSection } from "@/components/product-section"
import { TeamSection } from "@/components/team-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      <HeroSection />
      <FeatureSection />
      <ProductSection />
      <TeamSection />
      <ContactSection />
    </main>
  )
}
