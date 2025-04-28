
import { HeroSection } from "@/components/home/HeroSection";
import { Features } from "@/components/home/Features";
import { VoiceSupport } from "@/components/home/VoiceSupport";
import { Testimonials } from "@/components/home/Testimonials";
import { CallToAction } from "@/components/home/CallToAction";
import { SpecializedAIAreas } from "@/components/home/SpecializedAIAreas";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <SpecializedAIAreas />
      <Features />
      <VoiceSupport />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default HomePage;
