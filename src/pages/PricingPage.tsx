
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, HelpCircle } from "lucide-react";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import FloatingElements from "@/components/FloatingElements";
import PricingCard from "@/components/PricingCard";
import { useNavigate } from "react-router-dom";

const PricingPage = () => {
  const navigate = useNavigate();
  
  const pricingPlans = [
    {
      name: "Lifetime Premium",
      description: "Complete AI emotional support solution",
      price: "$4,000",
      features: [
        { name: "Unlimited AI sessions (30 min each)", included: true },
        { name: "Voice customization", included: true },
        { name: "Progress tracking & insights", included: true },
        { name: "Unlimited session history", included: true },
        { name: "Personalized wellness plan", included: true },
        { name: "Daily journal & progress tracking", included: true },
        { name: "Guided meditation library", included: true },
        { name: "24/7 Priority support", included: true },
      ],
      buttonText: "Get Lifetime Access",
      buttonVariant: "default" as const,
    },
    {
      name: "White-Label Partnership",
      description: "Custom enterprise solution",
      price: "$8,000",
      popular: true,
      features: [
        { name: "Everything in Lifetime Premium, plus:", included: true, isHeader: true },
        { name: "Custom branding and UI elements", included: true },
        { name: "Dedicated account manager", included: true },
        { name: "API access and custom integrations", included: true },
        { name: "Custom AI training for your industry", included: true },
        { name: "Volume-based pricing available", included: true },
        { name: "Enhanced security features", included: true },
      ],
      buttonText: "Schedule Consultation",
      buttonVariant: "default" as const,
    }
  ];

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
              Choose between our lifetime access or white-label partnership solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-16 bg-white dark:bg-empathy-dark-navy">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={plan.name}
                name={plan.name}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                popular={plan.popular}
                buttonText={plan.buttonText}
                buttonVariant={plan.buttonVariant}
                delay={index * 200}
              />
            ))}
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
                  q: "What's included in the lifetime access?",
                  a: "Lifetime access includes unlimited AI sessions, all premium features, and free updates for life. Once you purchase, you'll never have to pay again."
                },
                {
                  q: "How does white-label partnership work?",
                  a: "Our white-label solution allows you to integrate our AI emotional support system into your platform with your own branding. Contact us for a detailed proposal."
                },
                {
                  q: "Are there any additional costs?",
                  a: "No hidden fees. The lifetime price includes all features and future updates. For white-label partnerships, custom development costs may apply based on specific requirements."
                },
                {
                  q: "Can I upgrade from lifetime to white-label later?",
                  a: "Yes, you can upgrade to a white-label partnership at any time. The cost of your lifetime access will be credited toward your white-label partnership."
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
              We're confident you'll love EmpathyVoice AI. If you're not completely satisfied within the first 30 days, we'll refund your purchase.
            </p>
            <Button 
              size="lg" 
              className="bg-empathy-purple hover:bg-empathy-dark-purple text-white"
              onClick={() => navigate('/partnership-network')}
            >
              Learn More About Partnership
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPage;
