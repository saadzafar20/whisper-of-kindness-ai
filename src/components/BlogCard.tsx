
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl: string;
  slug: string;
  delay?: number;
}

const BlogCard = ({
  title,
  excerpt,
  category,
  date,
  imageUrl,
  slug,
  delay = 0,
}: BlogCardProps) => {
  const animationStyle = {
    animationDelay: `${delay}ms`,
  };

  return (
    <Card className="overflow-hidden animate-fade-in" style={animationStyle}>
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
        <div className="absolute top-4 left-4 bg-empathy-purple text-white text-xs font-medium px-2.5 py-1.5 rounded-full">
          {category}
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold line-clamp-2 mb-2">
          <Link to={`/blog/${slug}`} className="hover:text-empathy-purple transition-colors">
            {title}
          </Link>
        </h3>
        <p className="text-muted-foreground line-clamp-3 mb-3">{excerpt}</p>
      </CardContent>
      <CardFooter className="px-6 py-3 border-t flex justify-between items-center">
        <span className="text-sm text-muted-foreground">{date}</span>
        <Link 
          to={`/blog/${slug}`} 
          className="text-sm text-empathy-purple font-medium hover:underline"
        >
          Read More
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
