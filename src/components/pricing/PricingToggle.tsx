
import React from "react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface PricingToggleProps {
  billingCycle: "monthly" | "yearly";
  setBillingCycle: React.Dispatch<React.SetStateAction<"monthly" | "yearly">>;
}

const PricingToggle = ({ billingCycle, setBillingCycle }: PricingToggleProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-6 mb-10 md:mb-12">
      <motion.span
        className={`text-base md:text-lg ${billingCycle === "monthly" ? "font-semibold text-empathy-purple" : "text-gray-600"}`}
        animate={{ opacity: billingCycle === "monthly" ? 1 : 0.7 }}
      >
        Monthly
      </motion.span>
      
      <div 
        onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
        className="group cursor-pointer"
      >
        <div 
          className={`relative inline-flex h-6 md:h-7 w-12 md:w-14 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
            billingCycle === "yearly" ? "bg-empathy-purple" : "bg-gray-400"
          }`}
        >
          <motion.span
            className="pointer-events-none block h-5 md:h-6 w-5 md:w-6 rounded-full bg-white shadow-lg ring-0"
            animate={{ 
              x: billingCycle === "yearly" ? 24 : 2
            }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <motion.span
          className={`text-base md:text-lg ${billingCycle === "yearly" ? "font-semibold text-empathy-purple" : "text-gray-600"}`}
          animate={{ opacity: billingCycle === "yearly" ? 1 : 0.7 }}
        >
          Yearly
        </motion.span>
        <Badge className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black hover:from-yellow-400 hover:to-yellow-500 text-xs md:text-sm px-3 py-1">
          Save 20%
        </Badge>
      </div>
    </div>
  );
};

export default PricingToggle;
