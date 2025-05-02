
import { Check } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
  const animationStyle = {
    animationDelay: `${delay}ms`,
  };

  return (
    <Card 
      className={`animate-fade-in hover:shadow-xl transition-all border-opacity-30 h-full ${
        popular 
          ? 'border-empathy-purple shadow-lg shadow-empathy-purple/10' 
          : ''
      } hover:transform hover:scale-105 hover:border-empathy-purple ${
        oneTime ? 'bg-empathy-dark-purple/20' : ''
      }`}
      style={animationStyle}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-empathy-purple text-white text-xs font-semibold px-3 py-1 rounded-bl-lg rounded-tr-lg">
          Most Popular
        </div>
      )}
      <CardHeader className="pb-2 text-center">
        {icon && <div className="flex justify-center">{icon}</div>}
        <CardTitle className="text-xl font-semibold">{name}</CardTitle>
        <div className="mt-3">
          <span className="text-3xl font-bold">{price}</span>
          {price !== "Free" && !oneTime && !yearlyBilling && <span className="text-muted-foreground ml-1">/month</span>}
          {oneTime && <span className="text-muted-foreground ml-1 text-sm">one-time payment</span>}
        </div>
        
        {yearlyBilling && monthlyEquivalent && (
          <div className="text-sm text-emerald-500 font-medium mt-1">
            {monthlyEquivalent} <span className="text-muted-foreground text-xs">{billingNote}</span>
          </div>
        )}
        
        <p className="text-sm text-muted-foreground mt-2">{description}</p>
      </CardHeader>
      <CardContent className="pt-4">
        <ul className="space-y-2.5">
          {features.map((feature, i) => (
            <li key={i} className={`flex items-start gap-2 ${feature.isHeader ? 'pt-2 pb-1 border-t border-gray-100 dark:border-gray-800' : ''}`}>
              {!feature.isHeader && (
                <div className={`mt-1 h-4 w-4 rounded-full ${feature.included ? 'bg-empathy-purple' : 'bg-gray-200'} flex items-center justify-center flex-shrink-0`}>
                  {feature.included && <Check className="h-3 w-3 text-white" />}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <span className={`text-sm break-words ${!feature.included && !feature.isHeader ? 'text-muted-foreground' : ''} ${feature.isHeader ? 'font-medium text-empathy-purple' : ''}`}>
                  {feature.name}
                </span>
                {feature.value && (
                  <div className="text-xs text-muted-foreground mt-0.5 break-words">
                    {feature.value}
                    {feature.name === "Specialized Companions" && feature.value.includes("companion") && (
                      <Badge className="ml-2 bg-empathy-soft-purple text-empathy-dark-purple">
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
      <CardFooter>
        <Button 
          className={`w-full ${buttonVariant === "default" ? "bg-empathy-purple hover:bg-empathy-dark-purple text-white" : ""}`} 
          variant={buttonVariant}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
