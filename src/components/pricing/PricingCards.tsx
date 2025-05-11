
import React from "react";
import PricingCard from "./PricingCard";
import { Check, Rocket, Users } from "lucide-react";

interface PlanFeature {
  name: string;
  included: boolean;
  value?: string;
  isHeader?: boolean;
}

interface PlanBase {
  name: string;
  description: string;
  price: string;
  icon: React.ReactNode;
  features: PlanFeature[];
  buttonText: string;
  buttonVariant: "default" | "outline";
  popular?: boolean;
}

interface YearlyPlan extends PlanBase {
  yearlyBilling: boolean;
  monthlyEquivalent: string;
  billingNote: string;
}

interface PartnershipPlan extends PlanBase {
  oneTime: boolean;
}

interface PricingCardsProps {
  billingCycle: "monthly" | "yearly";
  activeTab: "standard" | "partnership";
}

const PricingCards: React.FC<PricingCardsProps> = ({ billingCycle, activeTab }) => {
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

  const standardMonthlyPlans: PlanBase[] = [
    {
      name: "Free",
      description: "Try our AI emotional support",
      price: "Free",
      icon: <Rocket className="h-8 w-8 text-empathy-purple" />,
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
      icon: <Users className="h-8 w-8 text-empathy-purple" />,
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
      icon: <Check className="h-8 w-8 text-empathy-purple" />,
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

  const partnershipPlan: PartnershipPlan = {
    name: "White-Label Partnership",
    description: "Custom enterprise solution",
    price: "$8,000",
    oneTime: true,
    icon: <Users className="h-8 w-8 text-empathy-purple" />,
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
  
  if (activeTab === "partnership") {
    return (
      <div className="max-w-2xl mx-auto">
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
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-7xl mx-auto">
      {currentPlans.map((plan, index) => {
        const typedPlan = plan as YearlyPlan;
        return (
          <PricingCard
            key={plan.name + (billingCycle === "yearly" ? "-yearly" : "")}
            name={plan.name}
            price={plan.price}
            description={plan.description}
            features={plan.features}
            popular={plan.popular}
            buttonText={getButtonText(plan.name)}
            buttonVariant={plan.buttonVariant}
            delay={index * 200}
            icon={plan.icon}
            yearlyBilling={billingCycle === "yearly" && plan.name !== "Free" ? true : undefined}
            monthlyEquivalent={typedPlan.monthlyEquivalent}
            billingNote={typedPlan.billingNote}
          />
        );
      })}
    </div>
  );
};

export default PricingCards;
