
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Users, Clock, Calendar, Star, GraduationCap, Stethoscope, HeartPulse, Brain as BrainIcon } from "lucide-react";
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
          name: "Dr. Sarah Mitchell, Ph.D.",
          type: "Clinical Psychologist",
          price: "$280/session",
          description: "Specializing in cognitive behavioral therapy with 15+ years of experience in trauma and anxiety disorders.",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop",
          expertise: ["Trauma Recovery", "Anxiety Management", "Depression", "PTSD"]
        },
        {
          name: "Dr. Michael Chen, Psy.D.",
          type: "Neuropsychologist",
          price: "$295/session",
          description: "Expert in cognitive assessment and rehabilitation, specializing in brain-behavior relationships and emotional regulation.",
          image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop",
          expertise: ["Cognitive Assessment", "Emotional Regulation", "Memory Issues", "ADHD"]
        },
        {
          name: "Dr. Elena Rodriguez, Ph.D.",
          type: "Relationship Therapist",
          price: "$260/session",
          description: "Specializing in couples therapy and relationship dynamics with a focus on emotional attachment and communication.",
          image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop",
          expertise: ["Couples Therapy", "Family Dynamics", "Communication Skills", "Attachment Issues"]
        },
        {
          name: "Dr. James Wilson, Ph.D.",
          type: "Wellness Expert",
          price: "$240/session",
          description: "Integrating mindfulness and holistic approaches to mental health with traditional therapeutic techniques.",
          image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop",
          expertise: ["Mindfulness", "Stress Management", "Work-Life Balance", "Personal Growth"]
        }
      ],
      icon: <Users className="h-8 w-8 text-empathy-purple" />
    }
  ];

  return (
    <div className="min-h-screen bg-empathy-champagne dark:bg-empathy-dark-navy pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4 text-empathy-deep-purple">Choose Your Support Path</h1>
          <p className="text-xl text-center text-muted-foreground mb-12">Connect with AI or expert professionals for personalized emotional support</p>
          
          {/* AI Support Section */}
          <div className="mb-16">
            <Card className="relative overflow-hidden">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  {options[0].icon}
                  <div>
                    <CardTitle className="text-2xl">{options[0].title}</CardTitle>
                    <CardDescription>{options[0].description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <ul className="space-y-3">
                    {options[0].features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-empathy-purple" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col justify-center items-center">
                    <p className="text-2xl font-semibold mb-4">{options[0].price}</p>
                    <Button asChild className="w-full md:w-auto bg-empathy-purple hover:bg-empathy-dark-purple">
                      <Link to={options[0].link}>View AI Support Plans</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Expert Consultants Section */}
          <h2 className="text-3xl font-bold mb-8 text-center text-empathy-deep-purple">Our Expert Consultants</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {options[1].experts.map((expert, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-w-16 aspect-h-9 relative">
                  <img 
                    src={expert.image} 
                    alt={expert.name}
                    className="object-cover w-full h-64"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-1">{expert.name}</CardTitle>
                      <CardDescription className="text-lg font-semibold text-empathy-purple">
                        {expert.type}
                      </CardDescription>
                    </div>
                    <span className="text-xl font-bold text-empathy-deep-purple">{expert.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">{expert.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-empathy-deep-purple">Specializations:</p>
                    <div className="flex flex-wrap gap-2">
                      {expert.expertise.map((item, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 rounded-full bg-empathy-soft-purple text-empathy-purple text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-empathy-purple hover:bg-empathy-dark-purple">
                    Schedule Consultation
                  </Button>
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
