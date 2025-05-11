
import React, { useState } from "react";
import { Check, HelpCircle } from "lucide-react";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";

interface FeatureRow {
  name: string;
  tooltip?: string;
  free: boolean | string;
  premium: boolean | string;
  ultimate: boolean | string;
}

const PricingComparison = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  React.useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const features: FeatureRow[] = [
    {
      name: "AI Sessions",
      tooltip: "Monthly limit of conversations with AI companions",
      free: "1 (15 min)",
      premium: "4 (30 min each)",
      ultimate: "15 (30 min each)"
    },
    {
      name: "Specialized Companions",
      tooltip: "AI companions trained for specific mental health areas",
      free: false,
      premium: "1",
      ultimate: "2"
    },
    {
      name: "Voice Customization",
      tooltip: "Ability to modify AI companion's voice",
      free: "Basic",
      premium: "Advanced",
      ultimate: "Full"
    },
    {
      name: "Session History",
      free: "7 days (text only)",
      premium: "Unlimited text, 30 days voice",
      ultimate: "Unlimited (text & voice)"
    },
    {
      name: "Emotion Analysis",
      tooltip: "AI-powered analysis of your emotional state",
      free: "Limited",
      premium: "Detailed",
      ultimate: "Advanced"
    },
    {
      name: "Wellness Plan",
      free: false,
      premium: "Basic",
      ultimate: "Personalized with updates"
    },
    {
      name: "Progress Tracking",
      tooltip: "Tools to monitor your emotional well-being progress",
      free: false,
      premium: "Weekly insights",
      ultimate: "Daily journal & insights"
    },
    {
      name: "Customer Support",
      free: "Community",
      premium: "Priority email",
      ultimate: "24/7 Priority"
    }
  ];

  return (
    <div 
      className={`w-full overflow-x-auto pb-4 mt-16 md:mt-24 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Feature Comparison</h2>
      <div className="max-w-6xl mx-auto px-4">
        <Table className="border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="w-1/3 py-4">Features</TableHead>
              <TableHead className="w-1/5 text-center py-4">Free</TableHead>
              <TableHead className="w-1/5 text-center py-4 bg-empathy-purple/5">Premium</TableHead>
              <TableHead className="w-1/5 text-center py-4">Ultimate</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {features.map((feature, idx) => (
              <TableRow key={idx} className="border-b border-gray-100">
                <TableCell className="font-medium py-4 flex items-center gap-2">
                  {feature.name}
                  {feature.tooltip && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <HelpCircle className="h-4 w-4 text-gray-400 cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                          <p>{feature.tooltip}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </TableCell>
                
                <TableCell className="text-center py-4">
                  {typeof feature.free === 'string' ? (
                    <span className="text-sm">{feature.free}</span>
                  ) : feature.free ? (
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  ) : (
                    <span className="text-gray-400 text-sm">—</span>
                  )}
                </TableCell>
                
                <TableCell className="text-center py-4 bg-empathy-purple/5">
                  {typeof feature.premium === 'string' ? (
                    <span className="text-sm">{feature.premium}</span>
                  ) : feature.premium ? (
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  ) : (
                    <span className="text-gray-400 text-sm">—</span>
                  )}
                </TableCell>
                
                <TableCell className="text-center py-4">
                  {typeof feature.ultimate === 'string' ? (
                    <span className="text-sm">{feature.ultimate}</span>
                  ) : feature.ultimate ? (
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  ) : (
                    <span className="text-gray-400 text-sm">—</span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PricingComparison;
