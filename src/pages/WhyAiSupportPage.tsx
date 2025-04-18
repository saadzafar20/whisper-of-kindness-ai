
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Link as LinkIcon, Lock, MessageCircle, Clock, HeartPulse, Users, Sparkles } from "lucide-react";
import FloatingElements from "@/components/FloatingElements";
import VoiceWaveform from "@/components/VoiceWaveform";

const WhyAiSupportPage = () => {
  return (
    <>
      {/* Hero Section */}
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

      {/* Key Benefits Section */}
      <section className="py-20 bg-white dark:bg-empathy-dark-navy">
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

      {/* Comparison Section */}
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

      {/* Use Cases Section */}
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

      {/* CTA Section */}
      <section className="py-20 bg-empathy-soft-purple dark:bg-empathy-dark-purple/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Experience the Difference</h2>
            <p className="text-lg mb-10">
              Ready to be truly heard? Try EmpathyVoice AI today and feel the power of supportive listening.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-empathy-purple hover:bg-empathy-dark-purple text-white">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/how-it-works">Learn How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyAiSupportPage;
