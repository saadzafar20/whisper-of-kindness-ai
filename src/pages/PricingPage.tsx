
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Check, HelpCircle, Rocket, Users } from "lucide-react";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import FloatingElements from "@/components/FloatingElements";
import PricingCard from "@/components/PricingCard";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";

// Create smaller components for better organization
const PricingHeader = () => {
  return (
    <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 overflow-hidden bg-empathy-dark-navy">
      <FloatingElements count={8} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in text-white">
            Simple, Transparent <span className="text-empathy-purple">Pricing</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10 animate-fade-in" style={{ animationDelay: "200ms" }}>
            Choose the plan that works best for you.
          </p>
        </div>
      </div>
    </section>
  );
};

const BillingToggle = ({ billingCycle, setBillingCycle }: { 
  billingCycle: "monthly" | "yearly"; 
  setBillingCycle: React.Dispatch<React.SetStateAction<"monthly" | "yearly">>;
}) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-8 sm:mb-12">
      <span className={`text-base sm:text-lg ${billingCycle === "monthly" ? "font-medium text-empathy-purple" : "text-gray-600"}`}>
        Monthly
      </span>
      <button
        onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
          billingCycle === "yearly" ? "bg-empathy-purple" : "bg-gray-400"
        }`}
      >
        <span
          className={`pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform ${
            billingCycle === "yearly" ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
      <div className="flex items-center gap-2">
        <span className={`text-base sm:text-lg ${billingCycle === "yearly" ? "font-medium text-empathy-purple" : "text-gray-600"}`}>
          Yearly
        </span>
        <Badge className="bg-yellow-500 text-black hover:bg-yellow-400 text-xs sm:text-sm">Save 20%</Badge>
      </div>
    </div>
  );
};

const PartnershipBenefits = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="mt-8 sm:mt-12 bg-white rounded-xl p-6 sm:p-8 max-w-4xl mx-auto shadow-md">
      <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center text-gray-800">
        Partnership Benefits
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {[
          "Custom branding and UI elements",
          "Dedicated account manager",
          "API access and custom integrations",
          "Custom AI training for your industry",
          "Volume-based pricing available",
          "Enhanced security features"
        ].map((benefit, index) => (
          <div 
            key={index} 
            className="flex items-center gap-3 sm:gap-4 bg-gray-50 p-4 sm:p-5 rounded-lg shadow-sm"
          >
            <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-empathy-purple flex items-center justify-center flex-shrink-0">
              <Check className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </div>
            <span className="text-gray-800 text-base sm:text-lg">{benefit}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const PricingFAQ = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 text-center">Pricing FAQs</h2>

          <div className="space-y-4 sm:space-y-6">
            {[
              {
                q: "What specialized companions are available?",
                a: "We offer anxiety & depression specialists, work-life balance coaches, relationship guides, and autism support specialists. Premium plan includes 1 companion of your choice, while Ultimate includes 2."
              },
              {
                q: "How does the session limit work?",
                a: "Each AI session is a conversation with your AI companion. Free plan includes one 15-minute session per month, Premium includes 4 thirty-minute sessions per month, and Ultimate includes 15 thirty-minute sessions per month."
              },
              {
                q: "Are there any additional costs?",
                a: "No hidden fees. The price shown is all you pay, and includes all features listed in your plan. For partnership plans, custom development costs may apply based on specific requirements."
              },
              {
                q: "Can I upgrade from Premium to Ultimate later?",
                a: "Yes, you can upgrade your plan at any time. Your billing will be prorated so you only pay for the difference."
              }
            ].map((faq, index) => (
              <div key={index} className="p-4 sm:p-6 border rounded-xl bg-gray-50">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 flex items-center gap-2 text-gray-900">
                  {faq.q}
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="cursor-help">
                          <HelpCircle className="h-4 w-4 text-gray-400" />
                        </span>
                      </TooltipTrigger>
                      <TooltipContent className="bg-white p-2 sm:p-3 rounded-md shadow-lg max-w-xs sm:max-w-sm">
                        <p className="text-sm">{faq.a}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </h3>
                <p className="text-sm sm:text-base text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const MoneyBackGuarantee = ({ navigate }: { navigate: ReturnType<typeof useNavigate> }) => {
  return (
    <section className="py-12 sm:py-16 bg-empathy-soft-purple">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">30-Day Money-Back Guarantee</h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-10 text-gray-700">
            We're confident you'll love FeelCalm. If you're not completely satisfied within the first 30 days, we'll refund your purchase.
          </p>
          <button 
            className="bg-empathy-purple hover:bg-empathy-dark-purple text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-base sm:text-lg shadow-md"
            onClick={() => navigate('/partnership-network')}
          >
            Learn More About Partnership
          </button>
        </div>
      </div>
    </section>
  );
};

// Main PricingPage component
const PricingPage = () => {
  const navigate = useNavigate();
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [activeTab, setActiveTab] = useState<"standard" | "partnership">("standard");
  const isMobile = useIsMobile();
  
  const yearlyDiscount = 20; // 20% discount for yearly billing
  
  const applyYearlyDiscount = (price: number) => {
    const monthlyPrice = price;
    const yearlyPrice = monthlyPrice * 12 * (1 - yearlyDiscount / 100);
    return yearlyPrice.toFixed(2);
  };

  const getButtonText = (planName: string) => {
    if (planName.includes("Free")) return "Start Free";
    return activeTab === "partnership" ? "Schedule Consultation" : "Start Free Trial";
  };

  // Define plan types with proper interfaces
  interface PlanBase {
    name: string;
    description: string;
    price: string;
    icon: React.ReactNode;
    features: {
      name: string;
      included: boolean;
      value?: string;
      isHeader?: boolean;
    }[];
    buttonText: string;
    buttonVariant: "default" | "outline";
    popular?: boolean;
  }

  interface YearlyPlan extends PlanBase {
    yearlyBilling: boolean;
    monthlyEquivalent: string;
    billingNote: string;
  }

  type Plan = PlanBase | YearlyPlan;

  const standardMonthlyPlans: PlanBase[] = [
    {
      name: "Free",
      description: "Try our AI emotional support",
      price: "Free",
      icon: <Rocket className="h-10 w-10 sm:h-12 sm:w-12 text-empathy-purple mb-2" />,
      features: [
        { name: "Session Limit", included: true, value: "1 AI session (15 min) per month" },
        { name: "Specialized Companions", included: false, value: "No specialized companions" },
        { name: "Basic voice customization", included: true },
        { name: "Text session history (7 days)", included: true },
        { name: "Community support", included: true },
        { name: "Limited emotion analysis", included: true },
        { name: "Basic wellness recommendations", included: false },
        { name: "Voice session history", included: false },
        { name: "Priority support", included: false },
      ],
      buttonText: "Start Free",
      buttonVariant: "outline" as const,
    },
    {
      name: "Premium",
      description: "Enhanced emotional support",
      price: "$49.99",
      icon: <Users className="h-12 w-12 text-empathy-purple mb-2" />,
      popular: true,
      features: [
        { name: "Session Limit", included: true, value: "4 AI sessions (30 min each) per month" },
        { name: "Specialized Companions", included: true, value: "1 specialized companion" },
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
      description: "Complete AI support solution",
      price: "$99.99",
      icon: <Check className="h-12 w-12 text-empathy-purple mb-2" />,
      features: [
        { name: "Session Limit", included: true, value: "15 AI sessions (30 min each) per month" },
        { name: "Specialized Companions", included: true, value: "2 specialized companions" },
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
  
  // Create yearly plans with proper TypeScript typing
  const standardYearlyPlans: YearlyPlan[] = standardMonthlyPlans.map(plan => {
    if (plan.name === "Free") {
      return {
        ...plan,
        yearlyBilling: false,
        monthlyEquivalent: "",
        billingNote: ""
      };
    }
    
    const monthlyPrice = parseFloat(plan.price.replace("$", ""));
    const yearlyTotal = applyYearlyDiscount(monthlyPrice);
    const monthlyEquivalent = (parseFloat(yearlyTotal) / 12).toFixed(2);
    
    return {
      ...plan,
      price: `$${yearlyTotal}`,
      yearlyBilling: true,
      monthlyEquivalent: `$${monthlyEquivalent}/mo`,
      billingNote: "billed annually"
    };
  });

  const partnershipPlan = {
    name: "White-Label Partnership",
    description: "Custom enterprise solution",
    price: "$8,000",
    oneTime: true,
    icon: <Users className="h-10 w-10 sm:h-12 sm:w-12 text-empathy-purple mb-2" />,
    features: [
      { name: "Payment", included: true, value: "One-time payment - No monthly fees!" },
      { name: "Custom branding and UI elements", included: true },
      { name: "Dedicated account manager", included: true },
      { name: "API access and custom integrations", included: true },
      { name: "Custom AI training for your industry", included: true },
      { name: "Volume-based pricing available", included: true },
      { name: "Enhanced security features", included: true },
      { name: "24/7 Priority support", included: true },
    ],
    buttonText: "Schedule Consultation",
    buttonVariant: "default" as const,
  };

  const currentPlans = billingCycle === "monthly" ? standardMonthlyPlans : standardYearlyPlans;

  return (
    <>
      <PricingHeader />

      {/* Pricing Section */}
      <section className="py-10 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8 sm:mb-12">
            <Tabs 
              defaultValue="standard" 
              className="w-full max-w-md"
              onValueChange={(value) => setActiveTab(value as "standard" | "partnership")}
            >
              <TabsList className="grid grid-cols-2 w-full bg-gray-200">
                <TabsTrigger 
                  value="standard" 
                  className="data-[state=active]:bg-empathy-purple data-[state=active]:text-white text-sm sm:text-base py-1.5 sm:py-2"
                >
                  Standard Plans
                </TabsTrigger>
                <TabsTrigger 
                  value="partnership" 
                  className="data-[state=active]:bg-empathy-purple data-[state=active]:text-white text-sm sm:text-base py-1.5 sm:py-2"
                >
                  Partnership
                </TabsTrigger>
              </TabsList>

              <TabsContent value="standard" className="mt-6 sm:mt-8">
                <BillingToggle billingCycle={billingCycle} setBillingCycle={setBillingCycle} />

                {/* Standard Plans */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-4 lg:gap-x-6 max-w-6xl mx-auto">
                  {currentPlans.map((plan, index) => {
                    const typedPlan = plan as YearlyPlan;
                    return (
                      <div key={plan.name + (billingCycle === "yearly" ? "-yearly" : "")} className="flex">
                        <PricingCard
                          name={plan.name}
                          price={plan.price}
                          description={plan.description}
                          features={plan.features}
                          popular={plan.popular}
                          buttonText={getButtonText(plan.name)}
                          buttonVariant={plan.buttonVariant}
                          delay={isMobile ? 0 : index * 200}
                          icon={plan.icon}
                          yearlyBilling={billingCycle === "yearly" && plan.name !== "Free" ? true : undefined}
                          monthlyEquivalent={typedPlan.monthlyEquivalent}
                          billingNote={typedPlan.billingNote}
                        />
                      </div>
                    );
                  })}
                </div>
                
                <div className="text-center mt-6 sm:mt-8">
                  <p className="text-gray-600 text-sm sm:text-base">
                    All plans include 14-day free trial. No credit card required.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="partnership" className="mt-6 sm:mt-8">
                {/* Partnership Plan */}
                <div className="max-w-lg mx-auto">
                  <PricingCard
                    key={partnershipPlan.name}
                    name={partnershipPlan.name}
                    price={partnershipPlan.price}
                    description={partnershipPlan.description}
                    features={partnershipPlan.features}
                    popular={false}
                    buttonText={partnershipPlan.buttonText}
                    buttonVariant={partnershipPlan.buttonVariant}
                    delay={0}
                    icon={partnershipPlan.icon}
                    oneTime={partnershipPlan.oneTime}
                  />
                </div>
                
                <div className="mt-8 sm:mt-12 text-center">
                  <p className="text-base sm:text-lg text-gray-800 mb-4 sm:mb-6">
                    Looking for a custom solution for your business?
                  </p>
                  <p className="text-base sm:text-lg text-gray-800 mb-4 sm:mb-6">
                    Our partnership program offers tailored AI solutions to match your specific needs.
                  </p>
                </div>
                
                <PartnershipBenefits />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <PricingFAQ />
      <MoneyBackGuarantee navigate={navigate} />
    </>
  );
};

export default PricingPage;
