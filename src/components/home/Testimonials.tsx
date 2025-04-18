
import FloatingElements from "@/components/FloatingElements";
import TestimonialCard from "@/components/TestimonialCard";

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "When I felt like no one understood what I was going through, EmpathyVoice was there to listen without judgment.",
      author: "Sarah K.",
      role: "Using EmpathyVoice for 6 months"
    },
    {
      quote: "As someone who struggles with anxiety, having a voice to talk to in the middle of the night has been life-changing.",
      author: "Michael T.",
      role: "Premium user"
    },
    {
      quote: "I was skeptical at first, but the AI really does listen better than most people in my life.",
      author: "Jennifer R.",
      role: "Using EmpathyVoice for 3 months"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <FloatingElements count={8} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Voices of Our Community</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from real people who have found support through EmpathyVoice AI.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

