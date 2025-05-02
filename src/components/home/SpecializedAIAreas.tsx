
import { motion } from "framer-motion";
import { Mic, Speaker, Brain, Star, HeartHandshake, Briefcase, Puzzle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import VoiceWaveform from "@/components/VoiceWaveform";

const aiSpecialists = [
  {
    name: "Emma Anderson AI",
    role: "Anxiety & Depression Management Specialist",
    description: "Expert in evidence-based techniques for anxiety disorders and depression, offering personalized coping strategies and emotional regulation tools.",
    methodologies: ["CBT", "Mindfulness", "Stress Management", "Mood Tracking", "Behavioral Activation"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop"
  },
  {
    name: "David Mitchell AI",
    role: "Work-Life Balance & Stress Management Coach",
    description: "Specialized in burnout prevention, workplace wellbeing, and creating sustainable productivity habits for professionals experiencing high-pressure environments.",
    methodologies: ["Burnout Prevention", "Time Management", "Career Guidance", "Boundary Setting", "Work-Life Integration"],
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop"
  },
  {
    name: "Sarah Henderson AI",
    role: "Relationships & Self-Esteem Guide",
    description: "Focused on building healthy relationships, processing grief and loss, and developing self-confidence through compassionate dialogue and evidence-based techniques.",
    methodologies: ["EQ Development", "Relationship Skills", "Self-esteem Building", "Grief Support", "Conflict Resolution"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop"
  },
  {
    name: "Dr. Michael Chen AI",
    role: "Autism Support & Neurodiversity Specialist",
    description: "Dedicated to supporting individuals with autism spectrum disorders through personalized social skill development, sensory processing support, and daily routine management.",
    methodologies: ["Social Skills Training", "Sensory Regulation", "Routine Management", "Executive Function", "Special Interest Focus"],
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=300&fit=crop"
  }
];

export const SpecializedAIAreas = () => {
  return (
    <section className="py-16 bg-empathy-champagne dark:bg-empathy-dark-navy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-empathy-deep-purple to-empathy-purple bg-clip-text text-transparent">
            Explore Our Specialized Companions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert companions designed to support your emotional well-being through voice-enabled interactions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {aiSpecialists.map((specialist, index) => (
            <motion.div
              key={specialist.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <img
                      src={specialist.image}
                      alt={specialist.name}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <div className="absolute bottom-2 right-2">
                      <VoiceWaveform isActive={false} color="bg-white" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-semibold">{specialist.name}</h3>
                        <div className="flex gap-1">
                          <Mic className="h-5 w-5 text-empathy-purple animate-pulse" />
                          <Speaker className="h-5 w-5 text-empathy-purple animate-pulse" />
                        </div>
                        {specialist.role.includes("Anxiety") && <Brain className="h-5 w-5 text-empathy-purple" />}
                        {specialist.role.includes("Work-Life") && <Briefcase className="h-5 w-5 text-empathy-purple" />}
                        {specialist.role.includes("Relationships") && <HeartHandshake className="h-5 w-5 text-empathy-purple" />}
                        {specialist.role.includes("Autism") && <Puzzle className="h-5 w-5 text-empathy-purple" />}
                      </div>
                      <p className="text-empathy-purple font-medium">{specialist.role}</p>
                    </div>
                    
                    <p className="text-muted-foreground text-sm">{specialist.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {specialist.methodologies.map((methodology) => (
                        <span
                          key={methodology}
                          className="px-2 py-1 rounded-full bg-empathy-soft-purple/20 text-empathy-purple text-xs"
                        >
                          {methodology}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
