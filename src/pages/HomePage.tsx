
import { HeroSection } from "@/components/home/HeroSection";
import { Features } from "@/components/home/Features";
import { VoiceSupport } from "@/components/home/VoiceSupport";
import { Testimonials } from "@/components/home/Testimonials";
import { CallToAction } from "@/components/home/CallToAction";
import { SpecializedAIAreas } from "@/components/home/SpecializedAIAreas";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <SpecializedAIAreas />
      <div className="container mx-auto px-4 py-6 text-center">
        <Button asChild className="bg-empathy-purple hover:bg-empathy-dark-purple">
          <Link to="/talk-to-consultants">Learn More About Our AI Specialists</Link>
        </Button>
      </div>
      <Features />
      <VoiceSupport />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default HomePage;
