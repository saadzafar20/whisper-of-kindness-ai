
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import BlogCard from "@/components/BlogCard";

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Mock blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "5 Ways to Manage Daily Stress Through Voice Interaction",
      excerpt: "Discover how speaking your feelings aloud can help reduce stress levels and improve emotional well-being.",
      category: "Mental Health",
      date: "April 12, 2025",
      slug: "manage-stress-voice-interaction",
      imageUrl: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80&w=800",
      type: "article"
    },
    {
      id: 2,
      title: "The Science Behind AI Emotional Support",
      excerpt: "Learn about the research and technology that makes AI emotional support effective for many people.",
      category: "Technology",
      date: "April 8, 2025",
      slug: "science-behind-ai-emotional-support",
      imageUrl: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&fit=crop&q=80&w=800",
      type: "article"
    },
    {
      id: 3,
      title: "How to Practice Self-Compassion in Difficult Times",
      excerpt: "Practical techniques for being kinder to yourself when facing challenges or setbacks in life.",
      category: "Self-Care",
      date: "April 5, 2025",
      slug: "self-compassion-techniques",
      imageUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=800",
      type: "article"
    },
    {
      id: 4,
      title: "Understanding Anxiety: Causes, Symptoms, and Management",
      excerpt: "A comprehensive look at anxiety and effective strategies for managing anxious thoughts.",
      category: "Mental Health",
      date: "March 30, 2025",
      slug: "understanding-anxiety-management",
      imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
      type: "article"
    },
    {
      id: 5,
      title: "Interview: How AI is Transforming Emotional Support",
      excerpt: "Leading researchers discuss the role of AI in providing accessible mental health support.",
      category: "Interviews",
      date: "March 25, 2025",
      slug: "ai-transforming-emotional-support",
      imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800",
      type: "video"
    },
    {
      id: 6,
      title: "New Voice Recognition Features in EmpathyVoice",
      excerpt: "Explore the latest updates to our voice recognition technology for better emotional support.",
      category: "Updates",
      date: "March 20, 2025",
      slug: "new-voice-recognition-features",
      imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
      type: "update"
    }
  ];
  
  // Filter posts based on search query and tab
  const filterPosts = (posts: typeof blogPosts, query: string, tab: string) => {
    return posts.filter(post => {
      const matchesQuery = post.title.toLowerCase().includes(query.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
                          post.category.toLowerCase().includes(query.toLowerCase());
      
      if (tab === "all") return matchesQuery;
      return matchesQuery && post.type === tab;
    });
  };

  return (
    <>
      {/* Header Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Blog & <span className="text-empathy-purple">Wellness</span> Hub
            </h1>
            <p className="text-xl text-muted-foreground mb-10 animate-fade-in" style={{ animationDelay: "200ms" }}>
              Explore articles, videos, and resources to support your emotional wellbeing journey.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-lg mx-auto animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                type="text"
                placeholder="Search articles, videos, and updates..."
                className="w-full pl-10 pr-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-empathy-purple"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white dark:bg-empathy-dark-navy">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="max-w-5xl mx-auto">
            <TabsList className="mb-8 flex flex-wrap justify-center">
              <TabsTrigger value="all">All Content</TabsTrigger>
              <TabsTrigger value="article">Articles</TabsTrigger>
              <TabsTrigger value="video">Videos</TabsTrigger>
              <TabsTrigger value="update">Product Updates</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filterPosts(blogPosts, searchQuery, "all").map((post, index) => (
                  <BlogCard
                    key={post.id}
                    title={post.title}
                    excerpt={post.excerpt}
                    category={post.category}
                    date={post.date}
                    imageUrl={post.imageUrl}
                    slug={post.slug}
                    delay={index * 100}
                  />
                ))}
              </div>
              {filterPosts(blogPosts, searchQuery, "all").length === 0 && (
                <div className="text-center py-12">
                  <p className="text-xl font-semibold mb-2">No results found</p>
                  <p className="text-muted-foreground">Try adjusting your search terms</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="article" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filterPosts(blogPosts, searchQuery, "article").map((post, index) => (
                  <BlogCard
                    key={post.id}
                    title={post.title}
                    excerpt={post.excerpt}
                    category={post.category}
                    date={post.date}
                    imageUrl={post.imageUrl}
                    slug={post.slug}
                    delay={index * 100}
                  />
                ))}
              </div>
              {filterPosts(blogPosts, searchQuery, "article").length === 0 && (
                <div className="text-center py-12">
                  <p className="text-xl font-semibold mb-2">No articles found</p>
                  <p className="text-muted-foreground">Try adjusting your search terms</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="video" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filterPosts(blogPosts, searchQuery, "video").map((post, index) => (
                  <BlogCard
                    key={post.id}
                    title={post.title}
                    excerpt={post.excerpt}
                    category={post.category}
                    date={post.date}
                    imageUrl={post.imageUrl}
                    slug={post.slug}
                    delay={index * 100}
                  />
                ))}
              </div>
              {filterPosts(blogPosts, searchQuery, "video").length === 0 && (
                <div className="text-center py-12">
                  <p className="text-xl font-semibold mb-2">No videos found</p>
                  <p className="text-muted-foreground">Try adjusting your search terms</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="update" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filterPosts(blogPosts, searchQuery, "update").map((post, index) => (
                  <BlogCard
                    key={post.id}
                    title={post.title}
                    excerpt={post.excerpt}
                    category={post.category}
                    date={post.date}
                    imageUrl={post.imageUrl}
                    slug={post.slug}
                    delay={index * 100}
                  />
                ))}
              </div>
              {filterPosts(blogPosts, searchQuery, "update").length === 0 && (
                <div className="text-center py-12">
                  <p className="text-xl font-semibold mb-2">No updates found</p>
                  <p className="text-muted-foreground">Try adjusting your search terms</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
          
          <div className="text-center mt-12">
            <Button variant="outline">Load More Content</Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-empathy-soft-purple dark:bg-empathy-dark-purple/20">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated on Emotional Wellness</h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for the latest articles, resources, and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-empathy-purple"
              />
              <Button className="bg-empathy-purple hover:bg-empathy-dark-purple text-white">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
