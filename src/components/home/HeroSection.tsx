import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Brain, Heart, Smile, Moon, Sparkles, Leaf, Mic, ShieldCheck } from "lucide-react";
import FloatingElements from "@/components/FloatingElements";
import VoiceWaveform from "@/components/VoiceWaveform";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { vapiService } from "@/services/vapiService";

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
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden bg-gradient-to-br from-empathy-soft-purple/20 via-white to-empathy-pearl">
      <FloatingElements count={35} />
      
      {wellnessIcons.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={index}
            className="absolute opacity-10"
            style={{
              top: `${15 + index * 12}%`,
              right: `${5 + index * 12}%`,
            }}
            animate={{
              y: [0, 30],
              rotate: [0, 15],
              scale: [1, 1.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              delay: index * 0.8,
              ease: "easeInOut",
            }}
          >
            <Icon size={80} color={item.color} />
          </motion.div>
        );
      })}
      
      <div className="container mx-auto px-4 pt-16 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="mb-12 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full bg-empathy-purple/10 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-empathy-purple to-empathy-dark-purple">
              Experience a Revolutionary AI Companion for Emotional Wellness
            </h1>
          </motion.div>

          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="block mb-4">
              Inspired by Humanity. Built to Heal. Devoted to You — 24/7.
            </span>
          </motion.p>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {[
              "No judgment. No pressure. No shame.",
              "No awkward silences. No bias. Ever.",
              "Just a 100% safe, encrypted space—whenever you need it most."
            ].map((text, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-empathy-purple/10"
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.9)" }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-lg text-gray-700">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <HeroFeaturesSection />
        <HeroActionsSection toggleVoiceDemo={toggleVoiceDemo} isVoiceActive={isVoiceActive} />
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
              ]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
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

const HeroActionsSection = ({ toggleVoiceDemo, isVoiceActive }: { toggleVoiceDemo: () => void; isVoiceActive: boolean }) => {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:gap-4 justify-center mb-8">
      <Button
        size="lg"
        className="bg-empathy-purple hover:bg-empathy-dark-purple text-white"
      >
        <Link to="/signup" className="w-full h-full flex items-center justify-center">
          Start Your Journey
        </Link>
      </Button>
      <div className="flex flex-col items-center">
        <Button 
          variant="outline" 
          size="lg"
          onClick={toggleVoiceDemo}
          className={isVoiceActive ? "bg-gray-100" : ""}
        >
          {isVoiceActive ? "Hide Voice Demo" : "Try Voice Demo"} <Mic className="ml-2 h-4 w-4" />
        </Button>
        <p className="text-xs text-gray-500 mt-1">Click to show/hide the voice demo panel</p>
      </div>
    </div>
  );
};

const VoiceDemoSection = ({ isActive }: { isActive: boolean }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { toast } = useToast();

  const startVoiceDemo = async () => {
    try {
      setIsPlaying(true);
      await vapiService.startCall("Hello! I'm your AI wellness companion. How can I help you today?");
      
      toast({
        title: "Voice Demo Started",
        description: "The AI companion is now ready to talk with you.",
      });
    } catch (error) {
      console.error('Error starting voice demo:', error);
      toast({
        title: "Connection Issue",
        description: "Unable to start voice demo. Please check your microphone permissions.",
        variant: "destructive",
      });
      setIsPlaying(false);
    }
  };

  const stopVoiceDemo = async () => {
    try {
      await vapiService.stopCall();
      setIsPlaying(false);
      
      toast({
        title: "Voice Demo Ended",
        description: "The voice demo has been stopped.",
      });
    } catch (error) {
      console.error('Error stopping voice demo:', error);
    }
  };

  if (!isActive) return null;

  return (
    <div className="p-6 bg-white rounded-xl shadow-md mb-8 max-w-md mx-auto">
      <h3 className="text-lg font-medium mb-2">Voice Demo</h3>
      <p className="mb-4 text-gray-600">
        Click the button below to start a live conversation with your AI companion.
      </p>
      
      <Button 
        onClick={isPlaying ? stopVoiceDemo : startVoiceDemo} 
        className="w-full mb-4"
      >
        {isPlaying ? "Stop Voice Demo" : "Start Voice Demo"}
      </Button>
      
      <div className="mt-4">
        <p className="text-xs text-gray-500 mb-2">
          This demo uses your microphone to enable real-time conversation with the AI.
          <br />Make sure to allow microphone permissions when prompted.
        </p>
        <VoiceWaveform isActive={isPlaying} />
      </div>
    </div>
  );
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
