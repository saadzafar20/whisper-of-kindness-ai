
import { MessageCircle, Lock, Clock, HeartPulse } from "lucide-react";
import VoiceWaveform from "@/components/VoiceWaveform";

export const VoiceSupport = () => {
  return (
    <section className="py-24 bg-white">
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
          
          <SecurityFeatureSection />
          <AvailabilityFeatureSection />
          <ResearchFeatureSection />
        </div>
      </div>
    </section>
  );
};

const SecurityFeatureSection = () => {
  return (
    <div className="flex flex-col rounded-xl border p-6 animate-fade-in">
      <div className="flex items-center gap-4 mb-4">
        <div className="h-12 w-12 rounded-lg bg-empathy-soft-purple flex items-center justify-center">
          <Lock className="h-6 w-6 text-empathy-purple" />
        </div>
        <h3 className="text-xl font-semibold">Privacy & Security</h3>
      </div>
      <p className="text-muted-foreground">
        Your conversations are encrypted and never shared. We prioritize your privacy and maintain the highest security standards.
      </p>
    </div>
  );
};

const AvailabilityFeatureSection = () => {
  return (
    <div className="flex flex-col rounded-xl border p-6 animate-fade-in">
      <div className="flex items-center gap-4 mb-4">
        <div className="h-12 w-12 rounded-lg bg-empathy-soft-purple flex items-center justify-center">
          <Clock className="h-6 w-6 text-empathy-purple" />
        </div>
        <h3 className="text-xl font-semibold">24/7 Availability</h3>
      </div>
      <p className="text-muted-foreground">
        Feel heard whenever you need it. Our AI companion is available day or night, weekends and holidays, without scheduling.
      </p>
    </div>
  );
};

const ResearchFeatureSection = () => {
  return (
    <div className="flex flex-col rounded-xl border p-6 animate-fade-in">
      <div className="flex items-center gap-4 mb-4">
        <div className="h-12 w-12 rounded-lg bg-empathy-soft-purple flex items-center justify-center">
          <HeartPulse className="h-6 w-6 text-empathy-purple" />
        </div>
        <h3 className="text-xl font-semibold">Research-Backed</h3>
      </div>
      <p className="text-muted-foreground">
        Our approach is based on established therapeutic techniques and emotional support methodologies validated by research.
      </p>
    </div>
  );
};
