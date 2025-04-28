import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Brain, Heart, Mic, Moon, Smile, Sparkles, Leaf } from "lucide-react";
import FloatingElements from "@/components/FloatingElements";
import VoiceWaveform from "@/components/VoiceWaveform";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { vapiService } from "@/services/vapiService";
import { useNavigate } from "react-router-dom";

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
              Inspired by Humanity. Built to Heal <Heart className="inline-block w-6 h-6 text-empathy-purple animate-pulse" /> Affordable for all. Calm within reach.
            </span>
          </motion.p>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {[
              "No judgment. No pressure. No shame. No Bias. EVER!",
              "Affordable for all. Built with care. ♥",
              "Just a 100% safe, encrypted space."
            ].map((text, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-200 group hover:shadow-xl transition-all duration-300"
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative overflow-hidden">
                  <p className="text-md font-medium text-gray-800 relative z-10">
                    {text.includes("Built with care") ? (
                      <>
                        Affordable for all. Built with care. <Heart className="inline-block w-5 h-5 text-red-500 animate-pulse" />
                      </>
                    ) : (
                      text
                    )}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex flex-col items-center">
            <Button 
              variant="outline" 
              size="lg"
              onClick={toggleVoiceDemo}
              className={`relative overflow-hidden group transition-all duration-300 
                ${isVoiceActive ? 'bg-empathy-purple/10' : 'bg-white/80'}
                border-2 border-golden/30 hover:border-golden text-empathy-purple hover:text-white`}
            >
              <span className="relative z-10 flex items-center">
                {isVoiceActive ? "Hide Demo" : "Free Demo Call"} 
                <Mic 
                  className={`ml-2 h-8 w-8 transition-all duration-500 
                    ${isVoiceActive ? '' : 'group-hover:text-empathy-pearl animate-pulse'}
                    bg-gradient-to-r from-purple-500 to-pink-500 p-1 rounded-full`} 
                  strokeWidth={1.5}
                />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-golden/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            <p className="text-xs text-gray-500 mt-1">Experience our AI voice companion and view pricing</p>
          </div>
        </div>

        <VoiceDemoSection isActive={isVoiceActive} />
        <StartNowCardSection />
      </div>
      
      <WaveBackgroundSection />
    </section>
  );
};

const HeroActionsSection = ({ toggleVoiceDemo, isVoiceActive }: { toggleVoiceDemo: () => void; isVoiceActive: boolean }) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="flex flex-col items-center">
        <Button 
          variant="outline" 
          size="lg"
          onClick={toggleVoiceDemo}
          className={`relative overflow-hidden group transition-all duration-300 
            ${isVoiceActive ? 'bg-empathy-purple/10' : 'bg-gradient-to-r from-[#FEF7CD] to-[#FFDAB9] hover:from-[#FFF4CC] hover:to-[#FFE4B5]'}
            border-2 border-golden/30 hover:border-golden text-empathy-purple hover:text-white`}
        >
          <span className="relative z-10 flex items-center">
            {isVoiceActive ? "Hide Demo" : "Free Demo"} 
            <Mic 
              className={`ml-2 h-8 w-8 transition-all duration-500 
                ${isVoiceActive ? '' : 'group-hover:text-empathy-pearl animate-pulse'}
                bg-gradient-to-r from-purple-500 to-pink-500 p-1 rounded-full`} 
              strokeWidth={1.5}
            />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-golden/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Button>
        <p className="text-xs text-gray-500 mt-1">Click to try our AI voice demo</p>
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
  const navigate = useNavigate();
  
  return (
    <motion.div
      className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-gray-200 mt-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
    >
      <Button 
        onClick={() => navigate('/pricing')}
        className="w-full bg-empathy-purple hover:bg-empathy-dark-purple text-white"
      >
        View Pricing & Start Your Journey
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
