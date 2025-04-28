import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Handshake, Users, Star, CircleCheck, BrainCircuit, Code, Settings2, Rocket } from "lucide-react";
import FloatingElements from "@/components/FloatingElements";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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

  const whyUsPoints = [
    {
      icon: BrainCircuit,
      title: "Advanced AI Technology",
      description: "Our AI models are specifically trained for emotional support, achieving exceptional empathy levels."
    },
    {
      icon: Settings2,
      title: "Flexible Integration",
      description: "Seamlessly integrate our solution into your existing platforms with minimal setup time."
    },
    {
      icon: Code,
      title: "Robust API Architecture",
      description: "Well-documented APIs with 99.9% uptime and enterprise-grade security measures."
    },
    {
      icon: Rocket,
      title: "Scalable Solution",
      description: "Our infrastructure scales automatically with your user base, ensuring consistent performance."
    }
  ];

  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden bg-empathy-champagne">
        <FloatingElements count={12} />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 relative z-10"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              White-Label <span className="text-empathy-purple">Partnership</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
              Transform your business with our customizable AI emotional support solution
            </p>
            <p className="text-lg text-muted-foreground mb-10 animate-fade-in" style={{ animationDelay: "400ms" }}>
              Join us in making mental wellness accessible to all communities. Together, we can create a world where emotional support knows no boundaries, and every person has access to the care they deserve. Your partnership helps build a more empathetic, supportive future for all.
            </p>
            <Button 
              size="lg"
              className="bg-empathy-purple hover:bg-empathy-dark-purple text-white"
              onClick={() => navigate('/pricing')}
            >
              View Partnership Pricing
            </Button>
          </div>
        </motion.div>
      </section>

      <section className="py-16 bg-white dark:bg-empathy-dark-navy">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Why Choose Our White-Label Solution?
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full transform transition-transform hover:scale-105">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-empathy-soft-purple flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-empathy-purple" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-empathy-soft-purple dark:bg-empathy-dark-purple/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Why Partner With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyUsPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white dark:bg-empathy-dark-navy p-6 rounded-lg shadow-lg"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-10 w-10 rounded-full bg-empathy-purple flex items-center justify-center">
                      <point.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{point.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-empathy-dark-navy">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Custom AI Training & Integration</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">Industry-Specific Training</h3>
                <ul className="space-y-4">
                  <motion.li 
                    className="flex items-center gap-3 text-base text-foreground"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <CircleCheck className="h-5 w-5 text-empathy-purple flex-shrink-0" />
                    <span>Customized emotional support patterns</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center gap-3 text-base text-foreground"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <CircleCheck className="h-5 w-5 text-empathy-purple flex-shrink-0" />
                    <span>Industry-specific terminology</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center gap-3 text-base text-foreground"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <CircleCheck className="h-5 w-5 text-empathy-purple flex-shrink-0" />
                    <span>Compliance with sector regulations</span>
                  </motion.li>
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">Integration Options</h3>
                <ul className="space-y-4">
                  <motion.li 
                    className="flex items-center gap-3 text-base text-foreground"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <CircleCheck className="h-5 w-5 text-empathy-purple flex-shrink-0" />
                    <span>RESTful API access with comprehensive documentation</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center gap-3 text-base text-foreground"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <CircleCheck className="h-5 w-5 text-empathy-purple flex-shrink-0" />
                    <span>SDK integration with multiple platform support</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center gap-3 text-base text-foreground"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <CircleCheck className="h-5 w-5 text-empathy-purple flex-shrink-0" />
                    <span>Custom webhook implementations for real-time updates</span>
                  </motion.li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-empathy-dark-navy">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the future of emotional support technology with our white-label partnership program.
          </p>
          <Button 
            size="lg"
            className="bg-empathy-purple hover:bg-empathy-dark-purple text-white transform transition-transform hover:scale-105"
            onClick={() => navigate('/pricing')}
          >
            Explore Partnership Options
          </Button>
        </motion.div>
      </section>
    </>
  );
};

export default WhiteLabelPage;
