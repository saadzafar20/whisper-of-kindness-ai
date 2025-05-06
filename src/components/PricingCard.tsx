
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";

interface PricingFeature {
  included: boolean;
  name: string;
  isHeader?: boolean;
  value?: string;
}

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  popular?: boolean;
  buttonText?: string;
  buttonVariant?: "default" | "outline";
  delay?: number;
  icon?: React.ReactNode;
  yearlyBilling?: boolean;
  monthlyEquivalent?: string;
  billingNote?: string;
  oneTime?: boolean;
}

const PricingCard = ({
  name,
  price,
  description,
  features,
  popular = false,
  buttonText = "Get Started",
  buttonVariant = "default",
  delay = 0,
  icon,
  yearlyBilling,
  monthlyEquivalent,
  billingNote,
  oneTime,
}: PricingCardProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div 
      className={`h-full flex flex-col bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300
        ${popular ? 'ring-2 ring-empathy-purple' : 'border border-gray-100'}
        animate-fade-in`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Card header with popular badge */}
      <div className="relative">
        {popular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-empathy-purple text-white text-xs font-medium px-3 py-0.5 rounded-full whitespace-nowrap z-10">
            Most Popular
          </div>
        )}
        
        {/* Plan name and icon */}
        <div className={`pt-6 pb-2 px-4 md:px-6 text-center ${popular ? 'pt-8' : ''}`}>
          {icon && <div className="mb-3 flex justify-center">{icon}</div>}
          <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1">{name}</h3>
          
          {/* Pricing section */}
          <div className="mt-2 md:mt-3 mb-2">
            <div className="flex items-baseline justify-center flex-wrap gap-1">
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">{price}</span>
              {price !== "Free" && !oneTime && !yearlyBilling && (
                <span className="text-gray-600 ml-1 text-sm md:text-base">/month</span>
              )}
            </div>
            
            {oneTime && (
              <p className="text-gray-600 text-xs md:text-sm mt-1">one-time payment</p>
            )}
            
            {yearlyBilling && monthlyEquivalent && (
              <p className="text-emerald-500 font-medium text-xs md:text-sm mt-1">
                {monthlyEquivalent} <span className="text-gray-500 text-xs">{billingNote}</span>
              </p>
            )}
          </div>
          
          <p className="text-gray-600 mt-2 mb-4 text-sm md:text-base px-2 md:px-4 mx-auto">{description}</p>
        </div>
      </div>
      
      {/* Divider */}
      <div className="h-px bg-gray-100 mx-4 md:mx-6"></div>
      
      {/* Features list */}
      <div className="px-4 md:px-6 py-4 flex-1 overflow-y-auto">
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li 
              key={i} 
              className={`flex items-start gap-2 ${feature.isHeader ? 'mt-4 mb-1' : ''}`}
            >
              {!feature.isHeader && (
                feature.included ? (
                  <Check className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                ) : (
                  <X className="h-4 w-4 text-gray-300 mt-0.5 flex-shrink-0" />
                )
              )}
              <div className="flex-1">
                <span className={`
                  ${feature.isHeader ? 'font-semibold text-sm md:text-base text-empathy-purple' : 'text-sm'} 
                  ${!feature.included && !feature.isHeader ? 'text-gray-500' : 'text-gray-800'}
                  break-words
                `}>
                  {feature.name}
                </span>
                {feature.value && (
                  <div className="text-xs text-gray-600 mt-0.5">
                    {feature.value}
                    {feature.name === "Specialized Companions" && feature.value.includes("companion") && (
                      <Badge className="ml-1 bg-empathy-soft-purple text-empathy-dark-purple text-xs">
                        {feature.value.includes("2") ? "2x" : "1x"}
                      </Badge>
                    )}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Card footer with button */}
      <div className="p-4 md:p-6 mt-auto">
        <Button 
          className={`w-full py-2 md:py-3 text-sm font-medium ${
            buttonVariant === "default" 
              ? "bg-empathy-purple hover:bg-empathy-dark-purple text-white" 
              : "border-2 border-empathy-purple text-empathy-purple hover:bg-empathy-soft-purple/10"
          }`} 
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;
