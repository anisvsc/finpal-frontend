import StatsSection from "@/components/call-to-action-one";
import FeaturesSection from "@/components/features-six";
import FooterSection from "@/components/footer-one";
import { HeroHeader } from "@/components/header";
import HeroSection from "@/components/hero-section-five";

export default function Home() {
  return (
    <div>
      <HeroHeader />
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <FooterSection />
    </div>
  );
}
