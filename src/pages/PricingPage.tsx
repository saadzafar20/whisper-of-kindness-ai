
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

// Import new pricing components
import PricingHero from "@/components/pricing/PricingHero";
import PricingToggle from "@/components/pricing/PricingToggle";
import PricingCards from "@/components/pricing/PricingCards";
import PricingComparison from "@/components/pricing/PricingComparison";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import PricingCTA from "@/components/pricing/PricingCTA";
import PricingTestimonials from "@/components/pricing/PricingTestimonials";
import PartnershipBenefits from "@/components/pricing/PartnershipBenefits";

// Main PricingPage component
const PricingPage = () => {
  const navigate = useNavigate();
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [activeTab, setActiveTab] = useState<"standard" | "partnership">("standard");
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex flex-col w-full">
      {/* Hero Section */}
      <PricingHero />

      {/* Pricing Tab Section */}
      <section className="py-12 md:py-16 w-full bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8 md:mb-10">
            <Tabs 
              defaultValue="standard" 
              className="w-full"
              onValueChange={(value) => setActiveTab(value as "standard" | "partnership")}
            >
              <TabsList className="grid grid-cols-2 w-full bg-gray-200/80 p-1 rounded-full">
                <TabsTrigger 
                  value="standard" 
                  className="data-[state=active]:bg-empathy-purple data-[state=active]:text-white rounded-full text-sm md:text-base py-2"
                >
                  Standard Plans
                </TabsTrigger>
                <TabsTrigger 
                  value="partnership" 
                  className="data-[state=active]:bg-empathy-purple data-[state=active]:text-white rounded-full text-sm md:text-base py-2"
                >
                  Partnership
                </TabsTrigger>
              </TabsList>

              <TabsContent value="standard" className="mt-8 w-full">
                <PricingToggle billingCycle={billingCycle} setBillingCycle={setBillingCycle} />
                <PricingCards billingCycle={billingCycle} activeTab="standard" />
                
                <div className="text-center mt-6 md:mt-8">
                  <p className="text-gray-600 text-sm md:text-base">
                    All plans include 14-day free trial. No credit card required.
                  </p>
                </div>
                
                {/* Feature comparison section */}
                <PricingComparison />
              </TabsContent>

              <TabsContent value="partnership" className="mt-8 w-full">
                <div className="mb-12">
                  <PricingCards billingCycle={billingCycle} activeTab="partnership" />
                </div>
                
                <div className="max-w-4xl mx-auto text-center px-4">
                  <h3 className="text-xl md:text-2xl font-bold mb-4">Looking for a Custom Solution?</h3>
                  <p className="text-base md:text-lg text-gray-700 mb-8">
                    Our partnership program offers tailored AI solutions for businesses of all sizes. 
                    Get your own branded version of FeelCalm, customized to your specific needs.
                  </p>
                </div>
                
                <PartnershipBenefits />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <PricingTestimonials />

      {/* FAQ Section */}
      <PricingFAQ />

      {/* CTA Section */}
      <PricingCTA />
    </div>
  );
};

export default PricingPage;
