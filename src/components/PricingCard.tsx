
import { Check } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PricingFeature {
  included: boolean;
  name: string;
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
}: PricingCardProps) => {
  const animationStyle = {
    animationDelay: `${delay}ms`,
  };

  return (
    <Card 
      className={`animate-fade-in ${popular ? 'border-empathy-purple shadow-lg shadow-empathy-purple/10' : ''}`}
      style={animationStyle}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-empathy-purple text-white text-xs font-semibold px-3 py-1 rounded-bl-lg rounded-tr-lg">
          Popular
        </div>
      )}
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold">{name}</CardTitle>
        <div className="mt-3">
          <span className="text-3xl font-bold">{price}</span>
          {price !== "Free" && <span className="text-muted-foreground ml-1">/month</span>}
        </div>
        <p className="text-sm text-muted-foreground mt-2">{description}</p>
      </CardHeader>
      <CardContent className="pt-4">
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <div className={`mt-1 h-4 w-4 rounded-full ${feature.included ? 'bg-empathy-purple' : 'bg-gray-200'} flex items-center justify-center flex-shrink-0`}>
                {feature.included && <Check className="h-3 w-3 text-white" />}
              </div>
              <span className={`text-sm ${!feature.included && 'text-muted-foreground'}`}>{feature.name}</span>
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
