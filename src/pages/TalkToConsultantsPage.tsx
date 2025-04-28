
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Chart, Star, Book, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import AISpecialist from "@/components/AISpecialist";

const TalkToConsultantsPage = () => {
  const aiSpecialists = [
    {
      name: "Emma Anderson AI",
      role: "Anxiety & Stress Management Specialist",
      description: "Specialized in evidence-based anxiety management and stress reduction techniques, combining CBT with real-time emotional analysis.",
      successMetric: "Helped 550+ users manage anxiety through mindfulness and CBT",
      methodologies: ["CBT", "Mindfulness", "Stress Management", "Real-time Analysis"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop"
    },
    {
      name: "David Mitchell AI",
      role: "Work-Life Harmony Coach",
      description: "Expert in professional stress management and burnout prevention, providing adaptive support for work-life balance.",
      successMetric: "90% user satisfaction in workplace stress reduction",
      methodologies: ["Burnout Prevention", "Time Management", "Career Guidance", "Stress Relief"],
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop"
    },
    {
      name: "Sarah Henderson AI",
      role: "Emotional Growth & Relationships Guide",
      description: "Focused on building self-confidence and improving relationship dynamics through personalized emotional intelligence training.",
      successMetric: "Guided 400+ users in relationship and personal growth",
      methodologies: ["EQ Development", "Relationship Skills", "Self-esteem Building", "Communication"],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-empathy-champagne dark:bg-empathy-dark-navy pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-empathy-deep-purple to-empathy-purple bg-clip-text text-transparent">
              Voice-Enabled AI Wellness Companion
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Experience personalized emotional support through our advanced voice AI technology, 
              designed to understand and respond to your unique emotional needs.
            </p>
          </div>

          {/* AI Specialization Areas */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">AI Specialization Areas</h2>
            <div className="grid gap-6">
              {aiSpecialists.map((specialist, index) => (
                <motion.div
                  key={specialist.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <AISpecialist {...specialist} />
                </motion.div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Voice AI Support</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <MessageCircle className="h-6 w-6 text-empathy-purple mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">Natural Voice Interactions</h3>
                        <p className="text-muted-foreground">Express yourself naturally through voice conversations, making emotional support more accessible and comfortable.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Brain className="h-6 w-6 text-empathy-purple mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">Advanced Emotional Analysis</h3>
                        <p className="text-muted-foreground">Our AI analyzes voice patterns and content to provide personalized, context-aware support.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Chart className="h-6 w-6 text-empathy-purple mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">Progress Tracking</h3>
                        <p className="text-muted-foreground">Monitor your emotional well-being with detailed insights and progress visualization.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Book className="h-6 w-6 text-empathy-purple mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">Evidence-Based Techniques</h3>
                        <p className="text-muted-foreground">Access proven therapeutic methods and exercises tailored to your needs.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Success Metrics</h3>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={[
                          { name: 'User Satisfaction', ai: 95, traditional: 75 },
                          { name: '24/7 Availability', ai: 100, traditional: 40 },
                          { name: 'Response Time', ai: 98, traditional: 60 },
                          { name: 'Cost Efficiency', ai: 90, traditional: 45 },
                        ]}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="ai" name="AI Support" fill="#9b87f5" />
                        <Bar dataKey="traditional" name="Traditional" fill="#E5DEFF" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Important Note */}
          <div className="mt-8 p-6 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-lg">
            <h4 className="text-lg font-semibold mb-3 text-red-700 dark:text-red-400">Important Note:</h4>
            <p className="text-sm text-red-600 dark:text-red-300 mb-3">
              While our Voice AI provides powerful emotional support, it cannot replace:
            </p>
            <ul className="list-disc list-inside text-sm text-red-600 dark:text-red-300 space-y-2">
              <li>Professional diagnosis of mental illness</li>
              <li>Prescription of medication</li>
              <li>Crisis intervention (suicidal thoughts, severe depression, psychosis)</li>
              <li>Deep trauma work or complex disorders</li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Button asChild className="bg-empathy-purple hover:bg-empathy-dark-purple text-lg px-8 py-6">
              <Link to="/pricing">Start Your Wellness Journey</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkToConsultantsPage;
