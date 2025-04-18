
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Users, Clock, Calendar, Star, Shield, Heart, MessageCircle, Brain as BrainIcon } from "lucide-react";
import { Link } from "react-router-dom";

const TalkToConsultantsPage = () => {
  const options = [
    {
      title: "AI Emotional Support",
      description: "24/7 emotional support powered by advanced AI",
      features: [
        "100% Private & Confidential",
        "Non-judgmental Active Listening",
        "Evidence-based Coping Strategies",
        "Available 24/7, Anytime You Need",
        "Personalized Support Journey",
        "Secure End-to-end Encryption"
      ],
      icon: <Brain className="h-8 w-8 text-empathy-purple" />,
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
          description: "Specializing in cognitive behavioral therapy with 15+ years of experience in trauma and anxiety disorders. Known for her integrative approach combining traditional therapy with mindfulness techniques.",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop",
          expertise: ["Trauma Recovery", "Anxiety Management", "Depression", "PTSD"]
        },
        {
          name: "Dr. Michael Chen, Psy.D.",
          type: "Neuropsychologist",
          price: "$295/session",
          description: "Expert in cognitive assessment and rehabilitation, specializing in brain-behavior relationships and emotional regulation. Pioneer in integrating neuroscience with emotional wellness.",
          image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop",
          expertise: ["Cognitive Assessment", "Emotional Regulation", "Memory Issues", "ADHD"]
        },
        {
          name: "Dr. Elena Rodriguez, Ph.D.",
          type: "Relationship Therapist",
          price: "$260/session",
          description: "Specializing in couples therapy and relationship dynamics with a focus on emotional attachment and communication. Expert in multicultural counseling and family systems.",
          image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop",
          expertise: ["Couples Therapy", "Family Dynamics", "Communication Skills", "Attachment Issues"]
        },
        {
          name: "Dr. James Wilson, Ph.D.",
          type: "Wellness Expert",
          price: "$240/session",
          description: "Integrating mindfulness and holistic approaches to mental health with traditional therapeutic techniques. Specializes in stress management and work-life balance.",
          image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop",
          expertise: ["Mindfulness", "Stress Management", "Work-Life Balance", "Personal Growth"]
        },
        {
          name: "Dr. Alexandra Foster, Ph.D.",
          type: "Trauma Specialist",
          price: "$290/session",
          description: "Renowned expert in complex trauma and PTSD treatment with over 20 years of experience. Specializes in EMDR therapy and somatic experiencing approaches.",
          image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop",
          expertise: ["Complex Trauma", "EMDR Therapy", "Somatic Experiencing", "Anxiety Treatment"]
        },
        {
          name: "Dr. Robert Thompson, Psy.D.",
          type: "Behavioral Therapist",
          price: "$275/session",
          description: "Expert in cognitive behavioral therapy and behavioral modification. Specializes in anxiety disorders, OCD, and behavioral addictions.",
          image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300&h=300&fit=crop",
          expertise: ["CBT", "OCD Treatment", "Anxiety Disorders", "Behavioral Addiction"]
        },
        {
          name: "Dr. Maya Patel, Ph.D.",
          type: "Cultural Psychology Expert",
          price: "$265/session",
          description: "Specializes in cultural psychology and identity-related challenges. Expert in helping individuals navigate cultural transitions and identity development.",
          image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=300&h=300&fit=crop",
          expertise: ["Cultural Identity", "Cross-Cultural Issues", "Immigration Stress", "Identity Development"]
        },
        {
          name: "Dr. David Kim, Ph.D.",
          type: "Youth & Family Specialist",
          price: "$255/session",
          description: "Dedicated to supporting adolescents and families through life transitions. Expert in teen mental health, family dynamics, and parenting support.",
          image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop",
          expertise: ["Teen Mental Health", "Family Therapy", "Parenting Support", "Life Transitions"]
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
          
          {/* AI Emotional Support Section */}
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
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-empathy-purple">Why Choose AI Emotional Support?</h3>
                    <p className="text-muted-foreground mb-6">
                      Experience a revolutionary approach to emotional wellness with our AI companion. 
                      Backed by cutting-edge research and designed with empathy at its core, our AI provides 
                      consistent, judgment-free support whenever you need it.
                    </p>
                    <ul className="space-y-3">
                      {options[0].features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          {i % 2 === 0 ? 
                            <Shield className="h-4 w-4 text-empathy-purple" /> : 
                            <Heart className="h-4 w-4 text-empathy-purple" />
                          }
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <div className="text-center mb-8">
                      <MessageCircle className="h-16 w-16 text-empathy-purple mb-4 mx-auto" />
                      <p className="text-lg font-medium mb-2">Ready to Start Your Journey?</p>
                      <p className="text-muted-foreground mb-6">
                        Explore our flexible plans and find the perfect support package for your needs.
                      </p>
                    </div>
                    <Button asChild className="w-full md:w-auto bg-empathy-purple hover:bg-empathy-dark-purple">
                      <Link to="/pricing">View AI Support Plans</Link>
                    </Button>
                  </div>
                </div>

                {/* Important Note Section */}
                <div className="mt-8 p-4 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2 text-red-700 dark:text-red-400">Important Note:</h4>
                  <p className="text-sm text-red-600 dark:text-red-300 mb-2">
                    While AI mental health support is powerful, it cannot replace:
                  </p>
                  <ul className="list-disc list-inside text-sm text-red-600 dark:text-red-300 space-y-1">
                    <li>Professional diagnosis of mental illness</li>
                    <li>Prescription of medication</li>
                    <li>Crisis intervention (suicidal thoughts, severe depression, psychosis)</li>
                    <li>Deep trauma work or complex disorders</li>
                  </ul>
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
