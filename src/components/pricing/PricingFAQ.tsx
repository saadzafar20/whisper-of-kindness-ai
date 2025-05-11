
import React from "react";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PricingFAQ = () => {
  const faqs = [
    {
      question: "What specialized companions are available?",
      answer: "We offer anxiety & depression specialists, work-life balance coaches, relationship guides, and autism support specialists. Premium plan includes 1 companion of your choice, while Ultimate includes 2 specialized companions that you can switch between at any time."
    },
    {
      question: "How does the session limit work?",
      answer: "Each AI session is a conversation with your AI companion. Free plan includes one 15-minute session per month, Premium includes 4 thirty-minute sessions per month, and Ultimate includes 15 thirty-minute sessions per month. Sessions don't roll over to the next month."
    },
    {
      question: "Are there any additional costs?",
      answer: "No hidden fees. The price shown is all you pay, and includes all features listed in your plan. For partnership plans, custom development costs may apply based on specific requirements, but these will be clearly outlined before any work begins."
    },
    {
      question: "Can I upgrade from Premium to Ultimate later?",
      answer: "Yes, you can upgrade your plan at any time. Your billing will be prorated so you only pay for the difference. Your preferences, history, and AI companions will carry over to your new plan automatically."
    },
    {
      question: "What happens after my free trial ends?",
      answer: "After your 14-day free trial, you'll be automatically subscribed to the plan you selected. We'll send you a reminder email 3 days before your trial ends. You can cancel anytime during your trial without being charged."
    },
    {
      question: "What's included in the White-Label Partnership?",
      answer: "Our White-Label Partnership includes custom branding, dedicated account management, API access, custom integrations, industry-specific AI training, volume pricing options, enhanced security, and priority 24/7 support. The one-time fee covers setup and implementation."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-10">
            <HelpCircle className="h-8 w-8 text-empathy-purple" />
            <h2 className="text-2xl md:text-3xl font-bold">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Still have questions? <a href="#" className="text-empathy-purple font-medium hover:underline">Contact our support team</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingFAQ;
