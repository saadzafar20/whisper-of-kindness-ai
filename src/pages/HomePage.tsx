import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Headphones, Mic, Play, ShieldCheck } from "lucide-react";
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
      icon: <Headphones className="h-8 w-8 text-empathy-purple" />,
      title: "100% Private",
      description: "Conversations remain completely confidential."
    },
    {
      icon: <Mic className="h-8 w-8 text-empathy-purple" />,
      title: "Voice-First",
      description: "Express emotions more naturally through voice."
    },
    {
      icon: <Play className="h-8 w-8 text-empathy-purple" />,
      title: "Always Available",
      description: "Emotional support anytime, anywhere."
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
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden bg-gradient-to-b from-empathy-champagne to-white dark:from-empathy-dark-navy dark:to-empathy-dark-navy/90">
        <FloatingElements count={15} />
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
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: index * 2,
            }}
          />
        ))}
        <div className="container mx-auto px-4 pt-16 z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-empathy-purple to-empathy-dark-purple">
              An Emotionally Intelligent Voice That Truly Cares
            </h1>
            <p className="text-lg md:text-xl mb-8 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-empathy-deep-purple to-empathy-purple" style={{ animationDelay: "200ms" }}>
              No fear of judgment. No awkward silence. Just a safe space to speak your mind and ease your heart.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 animate-fade-in" style={{ animationDelay: "400ms" }}>
              <Button 
                size="lg" 
                asChild
                className="bg-empathy-purple hover:bg-empathy-dark-purple text-white"
              >
                <Link to="/pricing" className="flex items-center gap-2">
                  <Mic className="h-4 w-4" />
                  Try Talking Now
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/privacy" className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4" />
                  Your Privacy Protected
                </Link>
              </Button>
            </div>
            
            <Link to="/pricing" className="block">
              <div className={`max-w-md mx-auto p-6 rounded-xl glass-card dark:glass-card-dark transition-all animate-fade-in mb-6 hover:shadow-lg hover:scale-105`} style={{ animationDelay: "600ms" }}>
                <p className="text-base mb-4">
                  Click 'Try Talking Now' to experience EmpathyVoice AI
                </p>
                <VoiceWaveform isActive={true} />
              </div>
            </Link>

            <p className="text-xs text-muted-foreground animate-fade-in" style={{ animationDelay: "800ms" }}>
              No sign-up required. Your privacy is our priority.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
            <path 
              fill="currentColor" 
              fillOpacity="1" 
              d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,128C672,107,768,85,864,96C960,107,1056,149,1152,154.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              className="text-white dark:text-empathy-dark-navy"
            ></path>
          </svg>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-empathy-dark-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">A Voice That Feels. A Mind That Understands.</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Free from fear. Full of empathy. Speak freely — heal gently.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="p-6 rounded-xl border border-border bg-card animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="h-14 w-14 rounded-lg bg-empathy-soft-purple flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button asChild>
              <Link to="/pricing" className="bg-empathy-purple hover:bg-empathy-dark-purple text-white">
                Experience AI Emotional Support
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Getting emotional support has never been easier. Just three simple steps.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center animate-fade-in" style={{ animationDelay: "0ms" }}>
              <div className="h-16 w-16 rounded-full bg-empathy-soft-purple text-empathy-purple text-xl font-bold flex items-center justify-center mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Tap to Speak</h3>
              <p className="text-muted-foreground">Open the app and tap the microphone button whenever you need to talk.</p>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="h-16 w-16 rounded-full bg-empathy-soft-purple text-empathy-purple text-xl font-bold flex items-center justify-center mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Talk Freely</h3>
              <p className="text-muted-foreground">Express your thoughts and feelings naturally. EmpathyVoice is listening.</p>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: "400ms" }}>
              <div className="h-16 w-16 rounded-full bg-empathy-soft-purple text-empathy-purple text-xl font-bold flex items-center justify-center mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Feel Better</h3>
              <p className="text-muted-foreground">Receive empathetic responses and guided support to help you process emotions.</p>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Button asChild>
              <Link to="/how-it-works" className="bg-empathy-purple hover:bg-empathy-dark-purple text-white">
                See Detailed Walkthrough
              </Link>
            </Button>
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
