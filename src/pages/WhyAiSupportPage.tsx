import { Button } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Link as LinkIcon, 
  Lock, 
  MessageSquare, 
  Clock, 
  HeartPulse, 
  Users, 
  Sparkles, 
  TrendingUp,
  Globe,
  Shield,
  CheckCircle
} from "lucide-react";
import FloatingElements from "@/components/FloatingElements";
import VoiceWaveform from "@/components/VoiceWaveform";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const WhyAiSupportPage = () => {
  const statistics = [
    { value: "78%", label: "Users prefer AI for emotional support due to zero judgment", icon: Shield },
    { value: "24/7", label: "Availability compared to limited human support hours", icon: Clock },
    { value: "92%", label: "Users report improved emotional well-being", icon: HeartPulse },
    { value: "3x", label: "Faster response time compared to traditional therapy", icon: TrendingUp }
  ];

  const userPreferences = [
    {
      title: "Privacy & Anonymity",
      description: "Users feel more comfortable sharing personal thoughts without human judgment",
      percentage: 84,
      icon: Lock
    },
    {
      title: "Instant Availability",
      description: "No waiting periods or scheduling conflicts",
      percentage: 91,
      icon: Clock
    },
    {
      title: "Consistent Support",
      description: "AI maintains the same level of attention and empathy",
      percentage: 88,
      icon: CheckCircle
    }
  ];

  return (
    <>
      {/* Keep existing Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <FloatingElements count={10} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Why Choose <span className="text-empathy-purple">AI Support</span>?
            </h1>
            <p className="text-xl text-muted-foreground mb-10 animate-fade-in" style={{ animationDelay: "200ms" }}>
              In a world where genuine listening is increasingly rare, EmpathyVoice AI offers consistent, judgment-free emotional support.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white dark:bg-empathy-dark-navy">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-6 bg-empathy-soft-purple/10 rounded-xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-lg bg-empathy-purple flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-3xl font-bold text-empathy-purple">{stat.value}</span>
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* User Preference Data */}
      <section className="py-20 bg-empathy-soft-purple/20">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            Why Users Choose AI Support
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {userPreferences.map((pref, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <Card className="h-full transform transition-all hover:scale-105">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-empathy-soft-purple flex items-center justify-center mb-4">
                      <pref.icon className="h-6 w-6 text-empathy-purple" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{pref.title}</h3>
                    <p className="text-muted-foreground mb-4">{pref.description}</p>
                    <div className="relative h-2 bg-empathy-soft-purple/30 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pref.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="absolute top-0 left-0 h-full bg-empathy-purple"
                      />
                    </div>
                    <p className="text-sm text-right mt-2 text-empathy-purple font-medium">
                      {pref.percentage}% of users
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section with enhanced animations */}
      <section className="py-20 bg-white dark:bg-empathy-dark-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-6"
            >
              The Power of Voice-Based Support
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              Our AI understands not just your words, but the emotions behind them
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col rounded-xl border p-6 animate-fade-in">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-lg bg-empathy-soft-purple flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-empathy-purple" />
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

      {/* Comparison Section with enhanced animations */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold mb-6">How We Compare</h2>
            <p className="text-lg text-muted-foreground">
              EmpathyVoice AI offers unique advantages over traditional support options.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full max-w-3xl mx-auto">
              <thead>
                <tr className="border-b">
                  <th className="py-4 px-6 text-left"></th>
                  <th className="py-4 px-6 text-center">
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 rounded-full gradient-bg-purple flex items-center justify-center mb-2">
                        <span className="text-white font-bold text-xl">E</span>
                      </div>
                      <span className="font-semibold">EmpathyVoice AI</span>
                    </div>
                  </th>
                  <th className="py-4 px-6 text-center">
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mb-2">
                        <Users className="h-6 w-6 text-gray-500" />
                      </div>
                      <span className="font-semibold">Traditional Therapy</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">Availability</td>
                  <td className="py-4 px-6 text-center">24/7, Immediate</td>
                  <td className="py-4 px-6 text-center">Limited, Scheduled</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">Privacy</td>
                  <td className="py-4 px-6 text-center">100% Private</td>
                  <td className="py-4 px-6 text-center">Confidential with Limits</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">Cost</td>
                  <td className="py-4 px-6 text-center">Affordable, Transparent</td>
                  <td className="py-4 px-6 text-center">Often Expensive</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">Consistency</td>
                  <td className="py-4 px-6 text-center">Always Consistent</td>
                  <td className="py-4 px-6 text-center">Varies by Provider</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Judgment</td>
                  <td className="py-4 px-6 text-center">Zero Judgment</td>
                  <td className="py-4 px-6 text-center">Minimized but Present</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Use Cases Section with enhanced animations */}
      <section className="py-20 bg-white dark:bg-empathy-dark-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold mb-6">When EmpathyVoice Can Help</h2>
            <p className="text-lg text-muted-foreground">
              Our voice AI provides support for many common emotional challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: "Daily Stress", icon: <Sparkles className="h-6 w-6" /> },
              { name: "Loneliness", icon: <Users className="h-6 w-6" /> },
              { name: "Anxiety", icon: <HeartPulse className="h-6 w-6" /> },
              { name: "Work Burnout", icon: <Clock className="h-6 w-6" /> },
              { name: "Grief", icon: <HeartPulse className="h-6 w-6" /> },
              { name: "Life Transitions", icon: <LinkIcon className="h-6 w-6" /> },
            ].map((useCase, index) => (
              <div 
                key={index}
                className="p-6 border rounded-xl flex gap-4 items-start animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-10 w-10 rounded-lg bg-empathy-soft-purple flex items-center justify-center">
                  {useCase.icon}
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">{useCase.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    Get supportive guidance when you need it most.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with enhanced animations */}
      <section className="py-20 bg-empathy-soft-purple dark:bg-empathy-dark-purple/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Experience the Difference</h2>
            <p className="text-lg mb-10">
              Join thousands of users who have found comfort and support through AI-powered emotional support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-empathy-purple hover:bg-empathy-dark-purple text-white">
                  Start Free Trial
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="lg" asChild>
                  <Link to="/how-it-works">Learn How It Works</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default WhyAiSupportPage;
