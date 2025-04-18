
import { HeroSection } from "@/components/home/HeroSection";
import { Features } from "@/components/home/Features";
import { VoiceSupport } from "@/components/home/VoiceSupport";
import { Testimonials } from "@/components/home/Testimonials";
import { CallToAction } from "@/components/home/CallToAction";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Features />
      <VoiceSupport />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default HomePage;

