
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Users, Clock, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const TalkToConsultantsPage = () => {
  const options = [
    {
      title: "AI Support",
      description: "24/7 emotional support powered by advanced AI",
      features: [
        "Immediate response",
        "Voice or text chat",
        "Personalized support",
        "Available anytime"
      ],
      icon: <Brain className="h-8 w-8 text-empathy-purple" />,
      price: "From $49/session",
      link: "/pricing"
    },
    {
      title: "Expert Consultants",
      description: "Licensed mental health professionals",
      experts: [
        {
          type: "Psychologists",
          price: "$150/session"
        },
        {
          type: "Therapists",
          price: "$120/session"
        },
        {
          type: "Life Coaches",
          price: "$100/session"
        },
        {
          type: "Wellness Experts",
          price: "$90/session"
        }
      ],
      icon: <Users className="h-8 w-8 text-empathy-purple" />
    }
  ];

  return (
    <div className="min-h-screen bg-empathy-champagne dark:bg-empathy-dark-navy pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4 text-empathy-deep-purple">Choose Your Support Path</h1>
          <p className="text-xl text-center text-muted-foreground mb-12">Connect with AI or human experts for personalized emotional support</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {options.map((option, index) => (
              <Card key={index} className="relative overflow-hidden">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    {option.icon}
                    <div>
                      <CardTitle className="text-2xl">{option.title}</CardTitle>
                      <CardDescription>{option.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {option.features ? (
                    <ul className="space-y-3">
                      {option.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-empathy-purple" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      <div className="mt-6">
                        <p className="text-lg font-semibold mb-4">{option.price}</p>
                        <Button asChild className="w-full bg-empathy-purple hover:bg-empathy-dark-purple">
                          <Link to={option.link}>Get Started</Link>
                        </Button>
                      </div>
                    </ul>
                  ) : (
                    <div>
                      <p className="font-semibold mb-4">Available Experts:</p>
                      <ul className="space-y-3">
                        {option.experts?.map((expert, i) => (
                          <li key={i} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-empathy-purple" />
                              <span>{expert.type}</span>
                            </div>
                            <span className="font-semibold">{expert.price}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full mt-6 bg-empathy-purple hover:bg-empathy-dark-purple">
                        Schedule Consultation
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkToConsultantsPage;
