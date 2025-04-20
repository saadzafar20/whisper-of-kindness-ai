
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Handshake, Users, Star, CircleCheck } from "lucide-react";
import FloatingElements from "@/components/FloatingElements";
import { useNavigate } from "react-router-dom";

const WhiteLabelPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Custom Branding & UI",
      description: "Complete customization of the interface to match your brand identity, including logos, colors, and design elements.",
      icon: Star
    },
    {
      title: "Dedicated Support",
      description: "Your own account manager and technical team for seamless integration and ongoing support.",
      icon: Users
    },
    {
      title: "API Integration",
      description: "Full access to our robust API for seamless integration with your existing systems and workflows.",
      icon: Handshake
    },
    {
      title: "Enhanced Security",
      description: "Enterprise-grade security features including custom data encryption and compliance measures.",
      icon: CircleCheck
    }
  ];

  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden bg-empathy-champagne">
        <FloatingElements count={8} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              White-Label <span className="text-empathy-purple">Partnership</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 animate-fade-in" style={{ animationDelay: "200ms" }}>
              Transform your business with our customizable AI emotional support solution
            </p>
            <Button 
              size="lg"
              className="bg-empathy-purple hover:bg-empathy-dark-purple text-white"
              onClick={() => navigate('/pricing')}
            >
              View Partnership Pricing
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-empathy-dark-navy">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Our White-Label Solution?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-empathy-soft-purple flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-empathy-purple" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-empathy-soft-purple dark:bg-empathy-dark-purple/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Custom AI Training & Integration</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Industry-Specific Training</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CircleCheck className="h-5 w-5 text-empathy-purple" />
                    <span>Customized emotional support patterns</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="h-5 w-5 text-empathy-purple" />
                    <span>Industry-specific terminology</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="h-5 w-5 text-empathy-purple" />
                    <span>Compliance with sector regulations</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Integration Options</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CircleCheck className="h-5 w-5 text-empathy-purple" />
                    <span>RESTful API access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="h-5 w-5 text-empathy-purple" />
                    <span>SDK integration support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="h-5 w-5 text-empathy-purple" />
                    <span>Custom webhook implementations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-empathy-dark-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the future of emotional support technology with our white-label partnership program.
          </p>
          <Button 
            size="lg"
            className="bg-empathy-purple hover:bg-empathy-dark-purple text-white"
            onClick={() => navigate('/pricing')}
          >
            Explore Partnership Options
          </Button>
        </div>
      </section>
    </>
  );
};

export default WhiteLabelPage;
