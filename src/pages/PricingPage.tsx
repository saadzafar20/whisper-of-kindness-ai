
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, HelpCircle } from "lucide-react";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import FloatingElements from "@/components/FloatingElements";
import PricingCard from "@/components/PricingCard";
import { useNavigate } from "react-router-dom";
import { Toggle } from "@/components/ui/toggle";

const PricingPage = () => {
  const navigate = useNavigate();
  const [billingCycle, setBillingCycle] = useState<"monthly" | "lifetime">("monthly");
  
  const monthlyPlans = [
    {
      name: "Basic",
      description: "Get started with AI emotional support",
      price: "$19.99",
      features: [
        { name: "1 AI session (15 min) per month", included: true },
        { name: "Basic voice customization", included: true },
        { name: "Text session history (7 days)", included: true },
        { name: "Community support", included: true },
        { name: "Limited emotion analysis", included: true },
        { name: "Basic wellness recommendations", included: false },
        { name: "Voice session history", included: false },
        { name: "Priority support", included: false },
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "outline" as const,
    },
    {
      name: "Premium",
      description: "Enhanced emotional support experience",
      price: "$49.99",
      popular: true,
      features: [
        { name: "Everything in Basic, plus:", included: true, isHeader: true },
        { name: "1 AI session per week (30 min each)", included: true },
        { name: "Advanced voice customization", included: true },
        { name: "Unlimited text session history", included: true },
        { name: "Voice session history (30 days)", included: true },
        { name: "Detailed emotion analysis", included: true },
        { name: "Personalized wellness plan", included: true },
        { name: "Priority email support", included: true },
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "default" as const,
    },
    {
      name: "Ultimate",
      description: "Complete AI emotional support solution",
      price: "$99.99",
      features: [
        { name: "Everything in Premium, plus:", included: true, isHeader: true },
        { name: "Daily AI sessions (30 min each)", included: true },
        { name: "Full voice & personality customization", included: true },
        { name: "Unlimited session history (voice & text)", included: true },
        { name: "Advanced progress tracking & insights", included: true },
        { name: "Personalized wellness plan with updates", included: true },
        { name: "Daily journal & progress tracking", included: true },
        { name: "24/7 Priority support", included: true },
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "default" as const,
    }
  ];

  const lifetimePlans = [
    {
      name: "Lifetime Premium",
      description: "Complete AI emotional support solution",
      price: "$4,000",
      features: [
        { name: "50% Limited Time Discount!", included: true, isHeader: true },
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
        { name: "50% Limited Time Discount!", included: true, isHeader: true },
        { name: "Everything in Lifetime Premium, plus:", included: true },
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

  const currentPlans = billingCycle === "monthly" ? monthlyPlans : lifetimePlans;

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
              Choose the plan that works best for you.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Toggle */}
      <div className="py-8 bg-white dark:bg-empathy-dark-navy">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center space-x-4">
            <span className={`text-lg ${billingCycle === "monthly" ? "font-medium text-empathy-purple" : "text-gray-500"}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "lifetime" : "monthly")}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                billingCycle === "lifetime" ? "bg-empathy-purple" : "bg-gray-200"
              }`}
            >
              <span
                className={`pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform ${
                  billingCycle === "lifetime" ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`text-lg ${billingCycle === "lifetime" ? "font-medium text-empathy-purple" : "text-gray-500"}`}>
              Lifetime & Whitelabel
            </span>
          </div>
          {billingCycle === "lifetime" && (
            <div className="text-center mt-3">
              <p className="text-empathy-purple font-bold animate-bounce">
                🎉 Limited Time: 50% OFF on Lifetime Plans! 🎉
              </p>
              <p className="text-sm text-muted-foreground">
                Pay once, use forever
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Pricing Cards Section */}
      <section className="py-16 bg-white dark:bg-empathy-dark-navy">
        <div className="container mx-auto px-4">
          <div className={`grid grid-cols-1 ${billingCycle === "monthly" ? "md:grid-cols-3" : "md:grid-cols-2"} gap-8 max-w-5xl mx-auto`}>
            {currentPlans.map((plan, index) => (
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
          {billingCycle === "lifetime" && (
            <div className="text-center mt-10">
              <Button 
                size="lg" 
                className="bg-empathy-purple hover:bg-empathy-dark-purple text-white"
                onClick={() => navigate('/partnership-network')}
              >
                Learn More About White-Label Partnership
              </Button>
            </div>
          )}
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
