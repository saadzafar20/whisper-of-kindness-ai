
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const CallToAction = () => {
  return (
    <section className="py-24 bg-empathy-soft-purple">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Be Heard?</h2>
          <p className="text-xl mb-8">
            Start your journey to better emotional wellness today with EmpathyVoice AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-empathy-purple hover:bg-empathy-dark-purple text-white">
              Get Started for Free
            </Button>
            <Button variant="outline" size="lg">
              View Pricing
            </Button>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-8">
            <UserStats />
            <Separator className="hidden sm:block h-8 w-px bg-border" orientation="vertical" />
            <RatingStats />
          </div>
        </div>
      </div>
    </section>
  );
};

