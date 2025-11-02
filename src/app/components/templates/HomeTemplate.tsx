import HeroSection from "../organisms/HeroSection";
import StatsSection from "../organisms/StatsSection";
import FeaturesSection from "../organisms/FeaturesSection";
import SponsorsSection from "../organisms/SponsorsSection";
import CTASection from "../organisms/CTASection";

export default function HomeTemplate() {
  return (
    <div className="bg-white">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <SponsorsSection />
      <CTASection />
    </div>
  );
}

