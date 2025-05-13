
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import LuxuryLayout from "@/components/layout/LuxuryLayout";
import { Crown, Gem, Star } from "lucide-react";

const features = [
  {
    icon: <Star className="h-8 w-8 text-empathy-gold" />,
    title: "Premium AI Companions",
    description: "Engage with sophisticated AI specialists designed for your emotional wellbeing."
  },
  {
    icon: <Crown className="h-8 w-8 text-empathy-gold" />,
    title: "Exclusive Experience",
    description: "Enjoy an unparalleled level of personalized support and insight in each session."
  },
  {
    icon: <Gem className="h-8 w-8 text-empathy-gold" />,
    title: "Advanced Customization",
    description: "Tailor your AI companion's voice and personality to create your ideal support experience."
  }
];

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <LuxuryLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-6xl font-serif font-medium leading-tight">
                Discover <span className="text-gradient-gold">Exceptional</span> AI Emotional Support
              </h1>
              
              <p className="text-lg text-white/80 leading-relaxed">
                Experience the finest AI emotional support platform, designed with sophistication and empathy to nurture your mental wellbeing.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  onClick={() => navigate("/pricing")}
                  className="bg-empathy-gold hover:bg-empathy-gold/90 text-empathy-noir text-lg py-6 px-8 rounded-md shadow-gold-glow transition-all duration-300"
                >
                  Explore Premium Plans
                </Button>
                <Button
                  onClick={() => navigate("/talk-to-consultants")}
                  variant="outline"
                  className="border-empathy-gold/60 text-empathy-gold hover:bg-empathy-gold/10 text-lg py-6 px-8 rounded-md"
                >
                  Experience Demo
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-empathy-gold/20 to-empathy-purple/20 rounded-3xl blur-2xl" />
              <div className="glass-card overflow-hidden border-gold p-1 relative z-10">
                <AspectRatio ratio={16/9}>
                  <div className="bg-empathy-ebony h-full w-full rounded-xl flex items-center justify-center">
                    <div className="text-center p-12">
                      <div className="inline-block p-4 rounded-full bg-empathy-gold/10 mb-6">
                        <Crown size={48} className="text-empathy-gold" />
                      </div>
                      <h3 className="text-3xl font-serif text-white mb-3">FeelCalm Premium</h3>
                      <p className="text-white/70">
                        Elevate your emotional wellbeing with our signature AI companion
                      </p>
                    </div>
                  </div>
                </AspectRatio>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-white">
              <span className="text-gradient-gold">Exceptional</span> Features
            </h2>
            <p className="text-white/80 text-lg">
              Our premium platform offers unparalleled capabilities designed to provide the most sophisticated emotional support experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="glass-card p-6 md:p-8"
              >
                <div className="bg-empathy-gold/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif font-medium mb-3 text-white">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="glass-card border-gold max-w-4xl mx-auto overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-serif mb-6 text-white">
                  Ready to experience the <span className="text-gradient-gold">difference</span>?
                </h3>
                <p className="text-white/80 mb-8">
                  Discover our range of premium plans designed to provide exceptional emotional support and personal growth.
                </p>
                <Button
                  onClick={() => navigate("/pricing")}
                  className="bg-empathy-gold hover:bg-empathy-gold/90 text-empathy-noir text-lg py-6 px-8 rounded-md shadow-gold-glow transition-all duration-300"
                >
                  View Premium Plans
                </Button>
              </div>
              <div className="bg-gradient-to-br from-empathy-velvet to-empathy-deep-purple p-8 md:p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-block p-4 rounded-full bg-white/10 mb-6">
                    <Gem size={48} className="text-white" />
                  </div>
                  <h4 className="text-xl font-serif text-white mb-2">Exclusive Benefits</h4>
                  <p className="text-white/80">
                    Premium features, priority support, and personalized insights
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LuxuryLayout>
  );
};

export default Index;
