import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Headphones, Mic, Play, ShieldCheck, Heart, MessageCircle, Lock, Clock, HeartPulse } from "lucide-react";
import FloatingElements from "@/components/FloatingElements";
import VoiceWaveform from "@/components/VoiceWaveform";
import TestimonialCard from "@/components/TestimonialCard";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

const HomePage = () => {
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  
  const toggleVoiceDemo = () => {
    setIsVoiceActive(!isVoiceActive);
  };

  const features = [
    {
      icon: <HeartPulse className="h-8 w-8 text-empathy-purple" />,
      title: "Evidence-based Coping Strategies",
      description: "Research-backed support when you need it most."
    },
    {
      icon: <Heart className="h-8 w-8 text-empathy-purple" />,
      title: "Personalized Support Journey",
      description: "Support that adapts to your unique needs."
    },
    {
      icon: <Lock className="h-8 w-8 text-empathy-purple" />,
      title: "Secure End-to-end Encryption",
      description: "Your conversations remain completely private."
    }
  ];

  const testimonials = [
    {
      quote: "When I felt like no one understood what I was going through, EmpathyVoice was there to listen without judgment.",
      author: "Sarah K.",
      role: "Using EmpathyVoice for 6 months"
    },
    {
      quote: "As someone who struggles with anxiety, having a voice to talk to in the middle of the night has been life-changing.",
      author: "Michael T.",
      role: "Premium user"
    },
    {
      quote: "I was skeptical at first, but the AI really does listen better than most people in my life.",
      author: "Jennifer R.",
      role: "Using EmpathyVoice for 3 months"
    }
  ];

  const backgroundImages = [
    { src: "/mental-wellness.svg", alt: "Mental Wellness" },
    { src: "/mindfulness.svg", alt: "Mindfulness" },
    { src: "/emotional-support.svg", alt: "Emotional Support" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden bg-sky-50/80">
        <FloatingElements count={25} />
        {backgroundImages.map((image, index) => (
          <motion.img
            key={index}
            src={image.src}
            alt={image.alt}
            className="absolute opacity-10 dark:opacity-5"
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
              className="text-3xl md:text-5xl font-bold mb-6 text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Experience a Revolutionary Approach to Emotional Wellness
            </motion.h1>
            
            <motion.p
              className="text-lg text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your AI companion for judgment-free emotional support, available 24/7.
            </motion.p>

            <div className="space-y-4 mb-8">
              {[
                {
                  text: "No fear of judgment.",
                  icon: <Heart className="h-5 w-5 text-empathy-purple" />,
                  delay: 0.2
                },
                {
                  text: "No awkward silence. EVER!",
                  icon: <MessageCircle className="h-5 w-5 text-empathy-purple" />,
                  delay: 0.4
                },
                {
                  text: "Just a safe space - 100%",
                  icon: <ShieldCheck className="h-5 w-5 text-empathy-purple" />,
                  delay: 0.6
                }
              ].map((item, index) => (
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
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button 
                size="lg" 
                onClick={toggleVoiceDemo}
                className="bg-empathy-purple hover:bg-empathy-dark-purple text-white font-semibold"
              >
                Start Talking Now
                <Mic className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild
                className="border-empathy-purple text-empathy-purple hover:bg-empathy-soft-purple/10"
              >
                <Link to="/privacy" className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Your Privacy Protected</span>
                </Link>
              </Button>
            </div>
            
            <div className={`max-w-md mx-auto p-6 rounded-xl bg-white/70 dark:bg-empathy-dark-navy/70 backdrop-blur-md shadow-lg transition-all animate-fade-in mb-6 ${isVoiceActive ? 'scale-105' : ''}`} style={{ animationDelay: "600ms" }}>
              <p className="text-base mb-4 text-empathy-deep-purple dark:text-white">
                {isVoiceActive 
                  ? "I'm listening... Share how you're feeling" 
                  : "Click 'Start Talking Now' to experience EmpathyVoice AI"}
              </p>
              <VoiceWaveform isActive={isVoiceActive} />
            </div>

            <Link to="/pricing" className="block max-w-md mx-auto">
              <div className="p-6 rounded-xl bg-white/30 border border-sky-200/50 transition-all hover:shadow-lg hover:scale-105">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Ready to Begin?
                </h3>
                <Button className="bg-empathy-purple hover:bg-empathy-dark-purple text-white">
                  View Pricing Plans
                </Button>
              </div>
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
            <path 
              fill="currentColor" 
              fillOpacity="1" 
              d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,128C672,107,768,85,864,96C960,107,1056,149,1152,154.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              className="text-sky-50 dark:text-empathy-dark-navy"
            ></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Your AI Companion for Emotional Wellness</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-6 rounded-xl bg-sky-50 border border-gray-200"
              >
                <div className="h-12 w-12 rounded-lg bg-white flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why AI Support Section */}
      <section className="py-24 bg-white dark:bg-empathy-dark-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold mb-6">The Power of Voice-Based Support</h2>
            <p className="text-lg text-muted-foreground">
              Expressing emotions verbally is more natural and therapeutic than typing. Our voice AI captures nuances that text-based solutions miss.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col rounded-xl border p-6 animate-fade-in">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-lg bg-empathy-soft-purple flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-empathy-purple" />
                </div>
                <h3 className="text-xl font-semibold">Natural Conversation Flow</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Speaking allows you to express emotions more naturally than typing. Our AI responds to tone, pace, and emotional cues.
              </p>
              <div className="mt-auto pt-4">
                <VoiceWaveform isActive={false} />
              </div>
            </div>
            
            <div className="flex flex-col rounded-xl border p-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-lg bg-empathy-soft-purple flex items-center justify-center">
                  <Lock className="h-6 w-6 text-empathy-purple" />
                </div>
                <h3 className="text-xl font-semibold">100% Private & Secure</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Unlike human counseling, your conversations remain completely private. No human reviewers, no judgment, and military-grade encryption.
              </p>
              <div className="mt-auto grid grid-cols-3 gap-2">
                <div className="h-10 rounded bg-empathy-soft-purple/50 flex items-center justify-center">
                  <span className="text-xs font-medium">Encrypted</span>
                </div>
                <div className="h-10 rounded bg-empathy-soft-purple/50 flex items-center justify-center">
                  <span className="text-xs font-medium">Private</span>
                </div>
                <div className="h-10 rounded bg-empathy-soft-purple/50 flex items-center justify-center">
                  <span className="text-xs font-medium">Secure</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col rounded-xl border p-6 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-lg bg-empathy-soft-purple flex items-center justify-center">
                  <Clock className="h-6 w-6 text-empathy-purple" />
                </div>
                <h3 className="text-xl font-semibold">Always Available</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Emotional support whenever you need it - day or night. No scheduling, no waiting for appointments, no time limitations.
              </p>
              <div className="mt-auto grid grid-cols-7 gap-1">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="h-8 rounded bg-empathy-soft-purple/50 flex items-center justify-center">
                    <span className="text-[10px] font-medium">{['M','T','W','T','F','S','S'][i]}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col rounded-xl border p-6 animate-fade-in" style={{ animationDelay: "400ms" }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-lg bg-empathy-soft-purple flex items-center justify-center">
                  <HeartPulse className="h-6 w-6 text-empathy-purple" />
                </div>
                <h3 className="text-xl font-semibold">Evidence-Based Support</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Our AI is built on established therapeutic principles and continuously improves through research partnerships.
              </p>
              <div className="mt-auto flex justify-center">
                <div className="h-8 px-3 rounded-full bg-empathy-soft-purple/50 flex items-center justify-center">
                  <span className="text-xs font-medium">Research-backed approaches</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden bg-white dark:bg-empathy-dark-navy">
        <FloatingElements count={8} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Voices of Our Community</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from real people who have found support through EmpathyVoice AI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                delay={index * 200}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-empathy-soft-purple dark:bg-empathy-dark-purple/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Be Heard?</h2>
            <p className="text-xl mb-8">
              Start your journey to better emotional wellness today with EmpathyVoice AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-empathy-purple hover:bg-empathy-dark-purple text-white">
                Get Started for Free
              </Button>
              <Button variant="outline" size="lg">
                View Pricing
              </Button>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-8">
              <div className="flex items-center">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-10 w-10 rounded-full bg-empathy-purple/20 border-2 border-white flex items-center justify-center">
                      <span className="text-xs font-medium text-empathy-purple">{i}</span>
                    </div>
                  ))}
                </div>
                <div className="ml-2">
                  <p className="text-sm">
                    <span className="font-semibold">1000+</span> people talking daily
                  </p>
                </div>
              </div>
              
              <Separator className="hidden sm:block h-8 w-px bg-border" orientation="vertical" />
              
              <div className="flex items-center">
                <div className="bg-empathy-soft-purple p-2 rounded-full">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L14.2451 8.90983H21.5106L15.6327 13.1803L17.8779 20.0902L12 15.8197L6.12215 20.0902L8.36729 13.1803L2.48944 8.90983H9.75486L12 2Z" fill="#9b87f5" />
                  </svg>
                </div>
                <div className="ml-2">
                  <p className="text-sm">
                    <span className="font-semibold">4.9/5</span> user rating
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
