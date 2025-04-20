import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, HelpCircle } from "lucide-react";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import FloatingElements from "@/components/FloatingElements";
import PricingCard from "@/components/PricingCard";
import { useNavigate } from "react-router-dom";

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState<'regular' | 'lifetime'>('regular');
  const navigate = useNavigate();
  
  const pricingPlans = [
    {
      name: "Basic",
      description: "Try our AI emotional support",
      monthlyPrice: "Free",
      yearlyPrice: "Free",
      features: [
        { name: "1 AI session (15 min) per month", included: true },
        { name: "Basic emotional support", included: true },
        { name: "Session history (24h)", included: true },
        { name: "Voice customization", included: false },
        { name: "Progress tracking", included: false },
        { name: "Stress relief techniques", included: false },
        { name: "Priority support", included: false },
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "outline" as const,
    },
    {
      name: "Premium AI",
      description: "Enhanced AI emotional support",
      monthlyPrice: "$199",
      lifetimePrice: "$4,000",
      popular: true,
      features: [
        { name: "Everything in Basic, plus:", included: true, isHeader: true },
        { name: "1 AI session (30 min) per week", included: true },
        { name: "Voice customization", included: true },
        { name: "Progress tracking & insights", included: true },
        { name: "Session history (unlimited)", included: true },
        { name: "Guided meditation library", included: true },
        { name: "Priority support", included: false },
      ],
      buttonText: "Get Premium",
      buttonVariant: "default" as const,
    },
    {
      name: "Ultimate",
      description: "AI + Expert Support",
      monthlyPrice: "$499",
      lifetimePrice: "$16,000",
      features: [
        { name: "Everything in Premium AI, plus:", included: true, isHeader: true },
        { name: "Daily AI sessions (30 min each)", included: true },
        { name: "Personalized wellness plan", included: true },
        { name: "Daily journal & progress tracking", included: true },
        { name: "24/7 Priority support", included: true },
      ],
      buttonText: "Get Ultimate",
      buttonVariant: "default" as const,
    }
  ];

  const enterpriseSolution = {
    title: "White-Label Partnership",
    features: [
      "Custom branding and UI elements",
      "Dedicated account manager",
      "API access and custom integrations",
      "Volume-based pricing",
      "Enhanced security features",
      "Custom AI training for your industry"
    ]
  };

  return (
    <>
      {/* Header Section */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-empathy-champagne">
        <FloatingElements count={8} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Simple, Transparent <span className="text-empathy-purple">Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 animate-fade-in" style={{ animationDelay: "200ms" }}>
              Choose the plan that fits your emotional support needs.
            </p>

            {/* Billing Toggle */}
            <div className="flex justify-center items-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <button 
                className={`py-2 px-4 rounded-lg transition-colors ${billingCycle === 'regular' ? 'bg-empathy-purple text-white' : 'bg-transparent text-muted-foreground'}`}
                onClick={() => setBillingCycle('regular')}
              >
                Monthly
              </button>
              <div className="relative">
                <div className="h-6 w-12 bg-empathy-soft-purple rounded-full"></div>
                <div 
                  className={`absolute top-0.5 h-5 w-5 rounded-full bg-empathy-purple transition-all ${billingCycle === 'lifetime' ? 'left-[calc(100%-1.25rem)]' : 'left-0.5'}`}
                ></div>
              </div>
              <button 
                className={`py-2 px-4 rounded-lg transition-colors flex items-center gap-2 ${billingCycle === 'lifetime' ? 'bg-empathy-purple text-white' : 'bg-transparent text-muted-foreground'}`}
                onClick={() => setBillingCycle('lifetime')}
              >
                Lifetime
                <span className="text-xs py-0.5 px-1.5 bg-green-500 text-white rounded-full">Best Value</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-16 bg-white dark:bg-empathy-dark-navy">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={plan.name}
                name={plan.name}
                price={billingCycle === 'regular' ? plan.monthlyPrice : plan.lifetimePrice || plan.monthlyPrice}
                description={plan.description}
                features={plan.features}
                popular={plan.popular}
                buttonText={plan.buttonText}
                buttonVariant={plan.buttonVariant}
                delay={index * 200}
              />
            ))}
          </div>

          {/* Enterprise Section */}
          <div className="max-w-3xl mx-auto mt-16">
            <div className="p-8 border rounded-xl bg-card">
              <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">White-Label Partnership</h3>
                  <p className="text-muted-foreground mb-6">
                    Looking to integrate EmpathyVoice into your platform? Our white-label solutions offer complete customization and branding options.
                  </p>
                  <Button 
                    size="lg" 
                    className="w-full md:w-auto bg-empathy-purple hover:bg-empathy-dark-purple text-white"
                    onClick={() => navigate('/join-network')}
                  >
                    Learn More About Partnership
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-empathy-champagne">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Pricing FAQs</h2>

            <div className="space-y-6">
              {[
                {
                  q: "Can I change my plan later?",
                  a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of the next billing cycle."
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept all major credit cards, PayPal, and Apple Pay. All payments are processed securely."
                },
                {
                  q: "Is there a free trial for Premium plans?",
                  a: "Yes, all paid plans come with a 7-day free trial. You can cancel anytime during the trial period without being charged."
                },
                {
                  q: "What does 'voice customization' include?",
                  a: "Voice customization allows you to select different AI voice styles, tones, and pacing to match your preferences."
                },
                {
                  q: "How do I cancel my subscription?",
                  a: "You can cancel your subscription at any time through your account settings. Your access will continue until the end of your billing period."
                }
              ].map((faq, index) => (
                <div key={index} className="p-6 border rounded-xl bg-card">
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    {faq.q}
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="cursor-help">
                            <HelpCircle className="h-4 w-4 text-muted-foreground" />
                          </span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">{faq.a}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Money Back Guarantee */}
      <section className="py-16 bg-empathy-soft-purple dark:bg-empathy-dark-purple/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">30-Day Money-Back Guarantee</h2>
            <p className="text-lg mb-10">
              We're confident you'll love EmpathyVoice AI. If you're not completely satisfied within the first 30 days, we'll refund your subscription.
            </p>
            <Button size="lg" className="bg-empathy-purple hover:bg-empathy-dark-purple text-white">
              Choose Your Plan
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPage;
