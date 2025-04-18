
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Brain, Heart, Smile, Moon, Sparkles, Leaf, Mic, ShieldCheck } from "lucide-react";
import FloatingElements from "@/components/FloatingElements";
import VoiceWaveform from "@/components/VoiceWaveform";
import { motion } from "framer-motion";

const wellnessIcons = [
  { icon: Brain, color: "#9b87f5", title: "Mental Wellness" },
  { icon: Heart, color: "#A78BFA", title: "Emotional Health" },
  { icon: Smile, color: "#8B5CF6", title: "Positive Mindset" },
  { icon: Moon, color: "#6E59A5", title: "Peace" },
  { icon: Sparkles, color: "#4A3064", title: "Balance" },
  { icon: Leaf, color: "#722F37", title: "Inner Growth" }
];

export const HeroSection = () => {
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  
  const toggleVoiceDemo = () => {
    setIsVoiceActive(!isVoiceActive);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden bg-sky-50/80">
      <FloatingElements count={25} />
      {wellnessIcons.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={index}
            className="absolute opacity-20"
            style={{
              top: `${20 + index * 15}%`,
              right: `${10 + index * 15}%`,
            }}
            animate={{
              y: [0, 20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: index * 1.5,
              type: "spring",
              stiffness: 100,
            }}
          >
            <Icon size={64} color={item.color} />
          </motion.div>
        );
      })}
      <div className="container mx-auto px-4 pt-16 z-10">
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
        
        <HeroFeaturesSection />
        <HeroActionsSection toggleVoiceDemo={toggleVoiceDemo} />
        <VoiceDemoSection isActive={isVoiceActive} />
        <StartNowCardSection />
      </div>
      
      <WaveBackgroundSection />
    </section>
  );
};

const HeroFeaturesSection = () => {
  const features = [
    {
      text: "No fear of judgment.",
      icon: <Mic className="h-5 w-5 text-empathy-purple" />,
      delay: 0.2
    },
    {
      text: "No awkward silence. EVER!",
      icon: <ShieldCheck className="h-5 w-5 text-empathy-purple" />,
      delay: 0.4
    },
    {
      text: "Just a safe space - 100%",
      icon: <ShieldCheck className="h-5 w-5 text-empathy-purple" />,
      delay: 0.6
    }
  ];

  return (
    <div className="space-y-4 mb-8">
      {features.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: item.delay }}
          className="flex items-center justify-center gap-3"
        >
          <motion.div 
            className="h-10 w-10 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center border border-empathy-purple/30"
            whileHover={{ scale: 1.1 }}
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(155, 135, 245, 0)",
                "0 0 0 10px rgba(155, 135, 245, 0.1)",
                "0 0 0 20px rgba(155, 135, 245, 0)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {item.icon}
          </motion.div>
          <p className="text-xl font-medium text-gray-800">
            {item.text}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

const HeroActionsSection = ({ toggleVoiceDemo }: { toggleVoiceDemo: () => void }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
      <Button
        size="lg"
        className="bg-empathy-purple hover:bg-empathy-dark-purple text-white"
      >
        <Link to="/signup" className="w-full h-full flex items-center justify-center">
          Start Your Journey
        </Link>
      </Button>
      <Button 
        variant="outline" 
        size="lg"
        onClick={toggleVoiceDemo}
      >
        Try Voice Demo <Mic className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};

const VoiceDemoSection = ({ isActive }: { isActive: boolean }) => {
  return isActive ? (
    <div className="p-6 bg-white rounded-xl shadow-md mb-8 max-w-md mx-auto">
      <p className="mb-4 text-gray-600">Voice demo is active. Try speaking...</p>
      <VoiceWaveform isActive={true} />
    </div>
  ) : null;
};

const StartNowCardSection = () => {
  return (
    <motion.div
      className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-gray-200 mt-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
    >
      <h3 className="text-lg font-medium mb-2">Start Your Healing Journey Today</h3>
      <p className="text-gray-600 mb-4">Your emotional wellness matters. Begin with a free session.</p>
      <Button className="w-full bg-empathy-purple hover:bg-empathy-dark-purple text-white">
        Get Started
      </Button>
    </motion.div>
  );
};

const WaveBackgroundSection = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,117.3C960,107,1056,149,1152,154.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};
