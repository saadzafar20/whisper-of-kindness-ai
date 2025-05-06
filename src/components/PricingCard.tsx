
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
      className={`w-full bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300
        ${popular ? 'ring-2 ring-empathy-purple' : 'border border-gray-100'}
        animate-fade-in`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Card header with popular badge */}
      <div className="relative">
        {popular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-empathy-purple text-white text-sm font-medium px-4 py-1 rounded-full">
            Most Popular
          </div>
        )}
        
        {/* Plan name and icon */}
        <div className={`pt-6 sm:pt-8 ${popular ? 'pt-8 sm:pt-10' : ''} px-4 sm:px-8 text-center`}>
          {icon && <div className="mb-3 sm:mb-4 flex justify-center">{icon}</div>}
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">{name}</h3>
          
          {/* Pricing section */}
          <div className="mt-3 sm:mt-4 mb-2">
            <div className="flex items-baseline justify-center">
              <span className="text-4xl sm:text-5xl font-bold text-gray-900">{price}</span>
              {price !== "Free" && !oneTime && !yearlyBilling && (
                <span className="text-gray-600 ml-1 sm:ml-2 text-base sm:text-lg">/month</span>
              )}
            </div>
            
            {oneTime && (
              <p className="text-gray-600 text-xs sm:text-sm mt-1">one-time payment</p>
            )}
            
            {yearlyBilling && monthlyEquivalent && (
              <p className="text-emerald-500 font-medium text-sm sm:text-base mt-2">
                {monthlyEquivalent} <span className="text-gray-500 text-xs">{billingNote}</span>
              </p>
            )}
          </div>
          
          <p className="text-gray-600 mt-2 sm:mt-3 mb-4 sm:mb-6 px-2 sm:px-4 text-sm sm:text-base min-h-[50px] sm:min-h-[60px]">{description}</p>
        </div>
      </div>
      
      {/* Divider */}
      <div className="h-px bg-gray-100 mx-4 sm:mx-8"></div>
      
      {/* Features list */}
      <div className="px-4 sm:px-8 py-4 sm:py-6">
        <ul className="space-y-3 sm:space-y-5">
          {features.map((feature, i) => (
            <li 
              key={i} 
              className={`flex items-start gap-2 sm:gap-3 ${feature.isHeader ? 'mt-4 sm:mt-6 mb-1 sm:mb-2' : ''}`}
            >
              {!feature.isHeader && (
                feature.included ? (
                  <Check className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                ) : (
                  <X className="h-4 w-4 sm:h-5 sm:w-5 text-gray-300 mt-0.5 flex-shrink-0" />
                )
              )}
              <div>
                <span className={`
                  ${feature.isHeader ? 'font-semibold text-base sm:text-lg text-empathy-purple' : 'text-sm sm:text-base'} 
                  ${!feature.included && !feature.isHeader ? 'text-gray-500' : 'text-gray-800'}
                `}>
                  {feature.name}
                </span>
                {feature.value && (
                  <div className="text-xs sm:text-sm text-gray-600 mt-0.5 sm:mt-1">
                    {feature.value}
                    {feature.name === "Specialized Companions" && feature.value.includes("companion") && (
                      <Badge className="ml-1 sm:ml-2 bg-empathy-soft-purple text-empathy-dark-purple text-xs">
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
      <div className="px-4 sm:px-8 pb-6 sm:pb-8 pt-2 sm:pt-4">
        <Button 
          className={`w-full py-4 sm:py-6 text-sm sm:text-base font-medium ${
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
