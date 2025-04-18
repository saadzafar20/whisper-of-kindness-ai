
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mic, ShieldCheck } from "lucide-react";
import FloatingElements from "@/components/FloatingElements";
import VoiceWaveform from "@/components/VoiceWaveform";

interface BackgroundImage {
  src: string;
  alt: string;
}

const backgroundImages: BackgroundImage[] = [
  { src: "/mental-wellness.svg", alt: "Mental Wellness" },
  { src: "/mindfulness.svg", alt: "Mindfulness" },
  { src: "/emotional-support.svg", alt: "Emotional Support" }
];

export const HeroSection = () => {
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  
  const toggleVoiceDemo = () => {
    setIsVoiceActive(!isVoiceActive);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden bg-sky-50/80">
      <FloatingElements count={25} />
      {backgroundImages.map((image, index) => (
        <motion.img
          key={index}
          src={image.src}
          alt={image.alt}
          className="absolute opacity-10"
          style={{
            top: `${20 + index * 30}%`,
            right: `${10 + index * 20}%`,
            width: '300px',
            height: '300px',
          }}
          animate={{
            y: [0, 20, 0],
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: index * 2,
          }}
        />
      ))}
      <div className="container mx-auto px-4 pt-16 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-3xl md:text-5xl font-bold mb-6 text-empathy-deep-purple"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Experience a Revolutionary Approach to Emotional Wellness
          </motion.h1>
          
          <motion.p className="text-lg text-gray-600 mb-8">
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
              Inspired by Humanity.{' '}
            </motion.span>
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }}>
              Made with ❤️ to Heal.{' '}
            </motion.span>
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.3 }}>
              Devoted to You 24/7
            </motion.span>
          </motion.p>

          <HeroFeatures />
          <HeroActions toggleVoiceDemo={toggleVoiceDemo} />
          <VoiceDemo isActive={isVoiceActive} />
          <StartNowCard />
        </div>
      </div>
      
      <WaveBackground />
    </section>
  );
};

