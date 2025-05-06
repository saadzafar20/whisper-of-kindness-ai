
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
      className={`w-full h-full bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300
        ${popular ? 'ring-2 ring-empathy-purple' : 'border border-gray-100'}
        animate-fade-in`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Card header with popular badge */}
      <div className="relative">
        {popular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-empathy-purple text-white text-xs sm:text-sm font-medium px-3 sm:px-4 py-0.5 sm:py-1 rounded-full whitespace-nowrap">
            Most Popular
          </div>
        )}
        
        {/* Plan name and icon */}
        <div className={`pt-4 sm:pt-6 lg:pt-8 ${popular ? 'pt-6 sm:pt-8 lg:pt-10' : ''} px-3 sm:px-6 lg:px-8 text-center`}>
          {icon && <div className="mb-2 sm:mb-3 lg:mb-4 flex justify-center">{icon}</div>}
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-1">{name}</h3>
          
          {/* Pricing section */}
          <div className="mt-2 sm:mt-3 lg:mt-4 mb-1 sm:mb-2">
            <div className="flex items-baseline justify-center flex-wrap gap-1">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">{price}</span>
              {price !== "Free" && !oneTime && !yearlyBilling && (
                <span className="text-gray-600 ml-0.5 sm:ml-1 lg:ml-2 text-sm sm:text-base lg:text-lg">/month</span>
              )}
            </div>
            
            {oneTime && (
              <p className="text-gray-600 text-xs sm:text-sm mt-0.5 sm:mt-1">one-time payment</p>
            )}
            
            {yearlyBilling && monthlyEquivalent && (
              <p className="text-emerald-500 font-medium text-xs sm:text-sm lg:text-base mt-1 sm:mt-2">
                {monthlyEquivalent} <span className="text-gray-500 text-xs">{billingNote}</span>
              </p>
            )}
          </div>
          
          <p className="text-gray-600 mt-2 mb-3 sm:mt-3 sm:mb-4 lg:mb-6 px-1 sm:px-2 lg:px-4 text-xs sm:text-sm lg:text-base min-h-[40px] sm:min-h-[50px] lg:min-h-[60px]">{description}</p>
        </div>
      </div>
      
      {/* Divider */}
      <div className="h-px bg-gray-100 mx-3 sm:mx-6 lg:mx-8"></div>
      
      {/* Features list */}
      <div className="px-3 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 overflow-hidden">
        <ul className="space-y-2 sm:space-y-3 lg:space-y-4">
          {features.map((feature, i) => (
            <li 
              key={i} 
              className={`flex items-start gap-1.5 sm:gap-2 lg:gap-3 ${feature.isHeader ? 'mt-3 sm:mt-4 lg:mt-6 mb-1' : ''}`}
            >
              {!feature.isHeader && (
                feature.included ? (
                  <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                ) : (
                  <X className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-gray-300 mt-0.5 flex-shrink-0" />
                )
              )}
              <div className="flex-1">
                <span className={`
                  ${feature.isHeader ? 'font-semibold text-sm sm:text-base lg:text-lg text-empathy-purple' : 'text-xs sm:text-sm lg:text-base'} 
                  ${!feature.included && !feature.isHeader ? 'text-gray-500' : 'text-gray-800'}
                  break-words
                `}>
                  {feature.name}
                </span>
                {feature.value && (
                  <div className="text-xs lg:text-sm text-gray-600 mt-0.5 lg:mt-1">
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
      <div className="px-3 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8 pt-2 sm:pt-3 lg:pt-4 mt-auto">
        <Button 
          className={`w-full py-2 sm:py-3 lg:py-4 text-xs sm:text-sm lg:text-base font-medium ${
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
