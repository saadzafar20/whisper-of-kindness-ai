
import React from "react";
import TestimonialCard from "@/components/TestimonialCard";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const PricingTestimonials = () => {
  const testimonials = [
    {
      quote: "FeelCalm has completely changed how I manage my anxiety. The AI companion feels like talking to a real therapist, and I love that I can access it anytime.",
      author: "Sarah J.",
      role: "Premium Plan User"
    },
    {
      quote: "As someone with autism, finding support that understands my needs has been difficult. The specialized companion on FeelCalm has been incredibly helpful in my daily struggles.",
      author: "Michael T.",
      role: "Ultimate Plan User"
    },
    {
      quote: "The value I get from the Premium plan is incredible. Four sessions a month is perfect for my needs, and the voice customization makes it feel more personal.",
      author: "Lisa R.",
      role: "Premium Plan User"
    },
    {
      quote: "I was skeptical at first, but even the free plan helped me through a tough period. I've since upgraded to Premium and couldn't be happier.",
      author: "David K.",
      role: "Premium Plan User"
    },
    {
      quote: "We integrated FeelCalm's white-label solution into our corporate wellness program. Our employees love it, and we've seen a noticeable improvement in workplace wellbeing.",
      author: "Jennifer M.",
      role: "Partnership Client"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-empathy-soft-purple/20">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        
        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full px-4 md:px-10"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4 md:pl-6">
                  <TestimonialCard
                    quote={testimonial.quote}
                    author={testimonial.author}
                    role={testimonial.role}
                    delay={index * 100}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PricingTestimonials;
