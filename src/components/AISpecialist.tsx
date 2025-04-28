
import { Card, CardContent } from "@/components/ui/card";
import VoiceWaveform from "./VoiceWaveform";
import { Brain, Star, Mic, Speaker } from "lucide-react";

interface AISpecialistProps {
  name: string;
  role: string;
  description: string;
  successMetric?: string;
  methodologies: string[];
  image: string;
}

const AISpecialist = ({ name, role, description, successMetric, methodologies, image }: AISpecialistProps) => {
  return (
    <Card className="relative overflow-hidden group">
      <CardContent className="p-6">
        <div className="flex gap-6">
          <div className="relative">
            <img
              src={image}
              alt={name}
              className="w-32 h-32 rounded-xl object-cover"
            />
            <div className="absolute bottom-2 right-2">
              <VoiceWaveform isActive={false} color="bg-white" />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-semibold">{name}</h3>
              <div className="flex gap-1">
                <Mic className="h-5 w-5 text-empathy-purple group-hover:animate-pulse" />
                <Speaker className="h-5 w-5 text-empathy-purple group-hover:animate-pulse" />
              </div>
              <Brain className="h-5 w-5 text-empathy-purple" />
            </div>
            <p className="text-empathy-purple font-medium mb-2">{role}</p>
            <p className="text-muted-foreground mb-3">{description}</p>
            {successMetric && (
              <div className="flex items-center gap-2 text-sm text-empathy-purple mb-3">
                <Star className="h-4 w-4" />
                <span>{successMetric}</span>
              </div>
            )}
            <div className="flex flex-wrap gap-2">
              {methodologies.map((methodology, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full bg-empathy-soft-purple/20 text-empathy-purple text-sm"
                >
                  {methodology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AISpecialist;
