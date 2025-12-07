import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProjectShowcase } from "@/components/project-showcase"
import { LogoCarousel } from "@/components/logo-carousel"
import { ChallengesSection } from "@/components/challenges-section"
// import { ServicesSection } from "@/components/services-section"
import { CTASection } from "@/components/cta-section"
import { SiteFooter } from "@/components/site-footer"
import { FloatingNav } from "@/components/floating-nav"
import { WhyChooseUs } from "@/components/why-choose-us"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <Header />
      <div
        className="relative bg-[#f8fafc] pt-20"
        style={{
          backgroundImage: `radial-gradient(circle, #d1d5db 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      >
        <HeroSection />
      </div>
      <ProjectShowcase />
      <LogoCarousel />
      <ChallengesSection />
      {/* <ServicesSection /> */}
      <WhyChooseUs />
      <CTASection />
      <SiteFooter />
    </main>
  )
}
