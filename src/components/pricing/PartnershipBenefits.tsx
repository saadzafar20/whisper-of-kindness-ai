
import React from "react";
import { Check } from "lucide-react";

const PartnershipBenefits = () => {
  const benefits = [
    "Custom branding and UI elements",
    "Dedicated account manager",
    "API access and custom integrations",
    "Custom AI training for your industry",
    "Volume-based pricing available",
    "Enhanced security features",
    "Full documentation and support",
    "Integration with existing tools",
    "Regular updates and improvements"
  ];

  return (
    <div className="mt-12 bg-white rounded-xl p-6 md:p-8 max-w-4xl mx-auto shadow-md border border-gray-100">
      <h3 className="text-xl md:text-2xl font-bold mb-8 text-center text-gray-800">
        Partnership Benefits
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {benefits.map((benefit, index) => (
          <div 
            key={index} 
            className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg shadow-sm"
          >
            <div className="h-8 w-8 rounded-full bg-empathy-purple flex items-center justify-center flex-shrink-0">
              <Check className="h-4 w-4 text-white" />
            </div>
            <span className="text-gray-800 font-medium text-sm md:text-base">{benefit}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnershipBenefits;
