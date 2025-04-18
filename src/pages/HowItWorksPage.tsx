
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mic, MessageCircle, HeartPulse, Settings, Shield, Clock } from "lucide-react";
import VoiceWaveform from "@/components/VoiceWaveform";
import FloatingElements from "@/components/FloatingElements";

const HowItWorksPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <FloatingElements count={10} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              How <span className="text-empathy-purple">EmpathyVoice</span> Works
            </h1>
            <p className="text-xl text-muted-foreground mb-10 animate-fade-in" style={{ animationDelay: "200ms" }}>
              Our voice-based AI creates a seamless, supportive experience when you need someone to listen.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-20 bg-white dark:bg-empathy-dark-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-6 text-center">A Simple Three-Step Process</h2>
              
              {/* Step 1 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-20">
                <div className="md:col-span-1 animate-fade-in">
                  <div className="h-24 w-24 rounded-full bg-empathy-soft-purple text-empathy-purple text-3xl font-bold flex items-center justify-center mx-auto md:mx-0">
                    1
                  </div>
                </div>
                <div className="md:col-span-2 animate-fade-in" style={{ animationDelay: "200ms" }}>
                  <h3 className="text-2xl font-semibold mb-4">Tap to Speak</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Open the EmpathyVoice app and tap the microphone button to start your session. No complicated setup or configuration needed.
                  </p>
                  <div className="p-6 border rounded-xl flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-empathy-purple/10 hover:bg-empathy-purple/20 transition-colors flex items-center justify-center cursor-pointer">
                      <Mic className="h-8 w-8 text-empathy-purple" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-20">
                <div className="md:col-span-1 animate-fade-in">
                  <div className="h-24 w-24 rounded-full bg-empathy-soft-purple text-empathy-purple text-3xl font-bold flex items-center justify-center mx-auto md:mx-0">
                    2
                  </div>
                </div>
                <div className="md:col-span-2 animate-fade-in" style={{ animationDelay: "200ms" }}>
                  <h3 className="text-2xl font-semibold mb-4">Talk Freely</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Express your thoughts and feelings naturally. The AI listens and processes your voice, tone, and emotional cues.
                  </p>
                  <div className="p-6 border rounded-xl">
                    <VoiceWaveform isActive={true} />
                    <p className="text-center mt-4 text-sm text-muted-foreground">EmpathyVoice is actively listening...</p>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1 animate-fade-in">
                  <div className="h-24 w-24 rounded-full bg-empathy-soft-purple text-empathy-purple text-3xl font-bold flex items-center justify-center mx-auto md:mx-0">
                    3
                  </div>
                </div>
                <div className="md:col-span-2 animate-fade-in" style={{ animationDelay: "200ms" }}>
                  <h3 className="text-2xl font-semibold mb-4">Feel Better</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Receive empathetic responses and guided support to help you process emotions and gain new perspectives.
                  </p>
                  <div className="p-6 border rounded-xl">
                    <div className="flex gap-3">
                      <div className="h-10 w-10 rounded-full bg-empathy-purple flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">E</span>
                      </div>
                      <div className="p-3 bg-empathy-soft-purple/50 rounded-xl rounded-tl-none">
                        <p className="text-sm">I hear that you're feeling overwhelmed by work lately. It's completely normal to feel that way when facing tight deadlines. Let's explore some ways to manage this stress...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Get Started Button */}
            <div className="text-center">
              <Button className="bg-empathy-purple hover:bg-empathy-dark-purple text-white">
                Try It Now
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technology Behind Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">The Technology Behind EmpathyVoice</h2>
            <p className="text-lg text-muted-foreground">
              Powered by advanced AI built specifically for emotional support and mental wellness.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 border rounded-xl animate-fade-in">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-lg bg-empathy-soft-purple flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-empathy-purple" />
                </div>
                <h3 className="text-xl font-semibold">Emotional Intelligence</h3>
              </div>
              <p className="text-muted-foreground">
                Our AI is trained to recognize emotional cues in your voice, understanding not just what you say, but how you say it.
              </p>
            </div>
            
            <div className="p-6 border rounded-xl animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-lg bg-empathy-soft-purple flex items-center justify-center">
                  <HeartPulse className="h-6 w-6 text-empathy-purple" />
                </div>
                <h3 className="text-xl font-semibold">Mental Health Framework</h3>
              </div>
              <p className="text-muted-foreground">
                Built on research-backed therapeutic approaches and continually refined with mental health professionals.
              </p>
            </div>
            
            <div className="p-6 border rounded-xl animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-lg bg-empathy-soft-purple flex items-center justify-center">
                  <Settings className="h-6 w-6 text-empathy-purple" />
                </div>
                <h3 className="text-xl font-semibold">Personalized Support</h3>
              </div>
              <p className="text-muted-foreground">
                The more you interact with EmpathyVoice, the more it learns about your unique needs and preferences.
              </p>
            </div>
            
            <div className="p-6 border rounded-xl animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-lg bg-empathy-soft-purple flex items-center justify-center">
                  <Shield className="h-6 w-6 text-empathy-purple" />
                </div>
                <h3 className="text-xl font-semibold">Privacy Protection</h3>
              </div>
              <p className="text-muted-foreground">
                End-to-end encryption and strict data policies ensure your conversations remain completely confidential.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-empathy-dark-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {[
                {
                  q: "Can EmpathyVoice AI replace therapy?",
                  a: "EmpathyVoice is designed to provide emotional support but is not a replacement for professional therapy. It's ideal for everyday emotional support and can complement traditional therapy."
                },
                {
                  q: "How private are my conversations?",
                  a: "Your conversations are 100% private and secured with end-to-end encryption. We never share your data, and you can delete your conversation history at any time."
                },
                {
                  q: "Do I need to create an account?",
                  a: "While you can try a limited demo without an account, creating a free account allows for personalized support and conversation history."
                },
                {
                  q: "How accurate is the voice recognition?",
                  a: "Our voice recognition system is highly accurate and continuously improving. It can understand various accents and speaking patterns."
                },
                {
                  q: "Can I use EmpathyVoice in a crisis?",
                  a: "EmpathyVoice provides supportive listening, but is not designed for crisis intervention. For emergencies, please contact local emergency services or crisis hotlines."
                }
              ].map((faq, index) => (
                <div key={index} className="p-6 border rounded-xl animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-lg mb-6">Have more questions?</p>
              <Button variant="outline" asChild>
                <Link to="/contact">Contact Our Support Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-empathy-soft-purple dark:bg-empathy-dark-purple/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Experience EmpathyVoice?</h2>
            <p className="text-lg mb-10">
              Start your journey to better emotional wellness with just a tap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-empathy-purple hover:bg-empathy-dark-purple text-white">
                Download the App
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/pricing">View Pricing Plans</Link>
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-2">
              <Clock className="h-4 w-4 text-empathy-purple" />
              <p className="text-sm">
                Set up in less than 2 minutes
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorksPage;
