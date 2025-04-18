
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  delay?: number;
}

const TestimonialCard = ({
  quote,
  author,
  role = "",
  delay = 0,
}: TestimonialCardProps) => {
  const animationStyle = {
    animationDelay: `${delay}ms`,
  };

  return (
    <Card className="glass-card dark:glass-card-dark overflow-hidden animate-fade-in" style={animationStyle}>
      <CardContent className="p-6">
        <div className="text-empathy-purple font-serif text-5xl leading-none mb-4">"</div>
        <p className="text-lg mb-6 text-empathy-dark-navy dark:text-white">{quote}</p>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-empathy-soft-purple flex items-center justify-center text-empathy-dark-purple font-medium">
            {author.charAt(0)}
          </div>
          <div>
            <p className="font-medium">{author}</p>
            {role && <p className="text-sm text-empathy-neutral-gray">{role}</p>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
