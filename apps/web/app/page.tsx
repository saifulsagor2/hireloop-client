import { HeroSection } from "@/components/home/hero-section"
import { FeaturedJobsSection } from "@/components/home/featured-jobs-section"
import { CompaniesSection } from "@/components/home/companies-section"
import { FeaturesSection } from "@/components/home/features-section"
import { CtaSection } from "@/components/home/cta-section"
import { FooterSection } from "@/components/home/footer-section"

export default function Page() {
  return (
    <>
      <main className="relative overflow-hidden bg-[#010102] text-white">
        <HeroSection />
        <FeaturedJobsSection />
        <CompaniesSection />
        <FeaturesSection />
        <CtaSection />
      </main>
      <FooterSection />
    </>
  )
}
