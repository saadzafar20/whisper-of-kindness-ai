
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PricingCTA = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-empathy-purple/10 to-empathy-soft-purple/20">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">30-Day Money-Back Guarantee</h2>
          <p className="text-base md:text-lg mb-8 text-gray-700 max-w-2xl mx-auto">
            We're confident you'll love FeelCalm. If you're not completely satisfied within the first 30 days, we'll refund your purchase with no questions asked.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 mt-10">
            <Button 
              className="bg-empathy-purple hover:bg-empathy-dark-purple text-white px-6 md:px-8 py-3 text-base shadow-md"
              onClick={() => navigate('/auth')}
            >
              Get Started Today
            </Button>
            
            <Button 
              variant="outline"
              className="border-2 border-empathy-purple text-empathy-purple hover:bg-empathy-soft-purple/10 px-6 md:px-8 py-3 text-base"
              onClick={() => navigate('/partnership-network')}
            >
              Learn More About Partnership
            </Button>
          </div>
          
          <p className="text-sm text-gray-600 mt-6">
            No credit card required for free trial. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;
