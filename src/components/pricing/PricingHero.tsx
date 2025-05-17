
import React from "react";
import FloatingElements from "@/components/FloatingElements";

const PricingHero = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-empathy-dark-navy to-[#14182B] border-b border-white/10">
      <FloatingElements count={10} />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 animate-fade-in">
            Simple, Transparent <span className="bg-gradient-to-r from-empathy-purple to-empathy-soft-purple bg-clip-text text-transparent font-bold">Pricing</span>
          </h1>
          <p className="text-base md:text-xl text-white mb-6 md:mb-8 animate-fade-in max-w-2xl mx-auto font-medium" style={{ animationDelay: "200ms" }}>
            Choose the plan that works best for your needs. No hidden fees or surprise charges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;
