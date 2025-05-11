
import React from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Card, 
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription 
} from "@/components/ui/card";

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
  
  return (
    <Card 
      className={`h-full flex flex-col ${
        popular 
          ? 'shadow-lg hover:shadow-xl ring-2 ring-empathy-purple bg-white/5 backdrop-blur-sm relative overflow-hidden' 
          : 'bg-white border border-gray-100 hover:border-empathy-purple/30'
      } rounded-2xl transition-all duration-300 animate-fade-in w-full`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {popular && (
        <>
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-empathy-purple text-white text-xs font-medium px-4 py-1 rounded-full whitespace-nowrap z-10 shadow-md">
            Most Popular
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-empathy-purple/5 to-transparent rounded-2xl pointer-events-none"></div>
        </>
      )}

      <CardHeader className={`pt-6 pb-4 ${popular ? 'pt-8' : ''}`}>
        {icon && <div className="mb-3 flex justify-center">{icon}</div>}
        <CardTitle className="text-xl md:text-2xl font-bold text-center mb-1">{name}</CardTitle>
        
        <div className="mt-2 md:mt-3 mb-2 text-center">
          <div className="flex items-baseline justify-center flex-wrap gap-1">
            <span className="text-3xl md:text-4xl font-bold text-gray-900">{price}</span>
            {price !== "Free" && !oneTime && !yearlyBilling && (
              <span className="text-gray-600 ml-1 text-base">/month</span>
            )}
          </div>
          
          {oneTime && (
            <p className="text-gray-600 text-sm mt-1">one-time payment</p>
          )}
          
          {yearlyBilling && monthlyEquivalent && (
            <p className="text-emerald-500 font-medium text-sm mt-1">
              {monthlyEquivalent} <span className="text-gray-500 text-xs">{billingNote}</span>
            </p>
          )}
        </div>
        
        <CardDescription className="text-center mt-2 text-base">{description}</CardDescription>
      </CardHeader>
      
      <div className="h-px bg-gray-100 mx-4 md:mx-6"></div>
      
      <CardContent className="px-4 md:px-6 py-6 flex-1">
        <ul className="space-y-3 md:space-y-4">
          {features.map((feature, i) => (
            <li 
              key={i} 
              className={`flex items-start gap-2 ${feature.isHeader ? 'mt-5 mb-1' : ''}`}
            >
              {!feature.isHeader && (
                feature.included ? (
                  <div className="h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-emerald-600" />
                  </div>
                ) : (
                  <div className="h-5 w-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <X className="h-3 w-3 text-gray-400" />
                  </div>
                )
              )}
              <div className="flex-1">
                <span className={`
                  ${feature.isHeader ? 'font-semibold text-sm md:text-base text-empathy-purple' : 'text-sm md:text-base'} 
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
      </CardContent>
      
      <CardFooter className="p-4 md:p-6 mt-auto">
        <Button 
          className={`w-full py-3 md:py-4 text-sm md:text-base font-medium ${
            buttonVariant === "default" 
              ? "bg-empathy-purple hover:bg-empathy-dark-purple text-white shadow-md hover:shadow-lg" 
              : "border-2 border-empathy-purple text-empathy-purple hover:bg-empathy-soft-purple/10"
          }`} 
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
