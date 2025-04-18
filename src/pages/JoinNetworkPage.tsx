
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Brain, HeartPulse, Users, CheckCircle } from "lucide-react";
import FloatingElements from "@/components/FloatingElements";
import { toast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  profession: z.string({ required_error: "Please select your profession." }),
  experience: z.string({ required_error: "Please select your experience level." }),
  expertise: z.array(z.string()).nonempty({ message: "Please select at least one area of expertise." }),
  interest: z.string().min(10, { message: "Please provide more details about your interest." }),
  website: z.string().optional(),
  acceptTerms: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions."
  })
});

const JoinNetworkPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      expertise: [],
      interest: "",
      website: "",
      acceptTerms: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    
    // Show success toast
    toast({
      title: "Application submitted!",
      description: "Thank you for your interest. We'll review your application and contact you soon.",
    });
    
    // Reset form
    form.reset();
  }

  const expertiseOptions = [
    { id: "anxiety", label: "Anxiety" },
    { id: "depression", label: "Depression" },
    { id: "stress", label: "Stress Management" },
    { id: "trauma", label: "Trauma" },
    { id: "grief", label: "Grief & Loss" },
    { id: "relationships", label: "Relationships" },
    { id: "selfEsteem", label: "Self-Esteem" },
    { id: "workLife", label: "Work-Life Balance" },
  ];

  return (
    <>
      {/* Header Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <FloatingElements count={10} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Join Our <span className="text-empathy-purple">Mental Wellness</span> Network
            </h1>
            <p className="text-xl text-muted-foreground mb-10 animate-fade-in" style={{ animationDelay: "200ms" }}>
              Collaborate with us to shape the future of AI-powered emotional support and mental wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white dark:bg-empathy-dark-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Why Join Our Network?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 border rounded-xl animate-fade-in">
                <div className="h-12 w-12 rounded-lg bg-empathy-soft-purple flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-empathy-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Shape AI Development</h3>
                <p className="text-muted-foreground">
                  Help us build AI systems that truly understand human emotions and provide effective support.
                </p>
              </div>
              
              <div className="p-6 border rounded-xl animate-fade-in" style={{ animationDelay: "200ms" }}>
                <div className="h-12 w-12 rounded-lg bg-empathy-soft-purple flex items-center justify-center mb-4">
                  <HeartPulse className="h-6 w-6 text-empathy-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Improve Mental Health</h3>
                <p className="text-muted-foreground">
                  Extend your impact beyond traditional practice and help make mental wellness support accessible to all.
                </p>
              </div>
              
              <div className="p-6 border rounded-xl animate-fade-in" style={{ animationDelay: "400ms" }}>
                <div className="h-12 w-12 rounded-lg bg-empathy-soft-purple flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-empathy-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Join a Community</h3>
                <p className="text-muted-foreground">
                  Connect with other mental health professionals passionate about innovation in emotional support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="p-8 bg-white dark:bg-empathy-dark-navy rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Apply to Join</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="your.email@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="profession"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Profession</FormLabel>
                          <Select 
                            onValueChange={field.onChange}
                            value={field.value}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your profession" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="therapist">Therapist</SelectItem>
                              <SelectItem value="psychiatrist">Psychiatrist</SelectItem>
                              <SelectItem value="psychologist">Psychologist</SelectItem>
                              <SelectItem value="counselor">Counselor</SelectItem>
                              <SelectItem value="social_worker">Social Worker</SelectItem>
                              <SelectItem value="researcher">Researcher</SelectItem>
                              <SelectItem value="coach">Mental Health Coach</SelectItem>
                              <SelectItem value="other">Other Professional</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="experience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Years of Experience</FormLabel>
                          <Select 
                            onValueChange={field.onChange}
                            value={field.value}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your experience level" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="1-3">1-3 years</SelectItem>
                              <SelectItem value="4-7">4-7 years</SelectItem>
                              <SelectItem value="8-12">8-12 years</SelectItem>
                              <SelectItem value="13-20">13-20 years</SelectItem>
                              <SelectItem value="20+">20+ years</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="expertise"
                    render={() => (
                      <FormItem>
                        <div className="mb-4">
                          <FormLabel>Areas of Expertise</FormLabel>
                          <FormDescription>
                            Select all that apply to your practice or research
                          </FormDescription>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {expertiseOptions.map((option) => (
                            <FormField
                              key={option.id}
                              control={form.control}
                              name="expertise"
                              render={({ field }) => {
                                return (
                                  <FormItem
                                    key={option.id}
                                    className="flex items-start space-x-3 space-y-0"
                                  >
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(option.id)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([...field.value, option.id])
                                            : field.onChange(
                                                field.value?.filter(
                                                  (value) => value !== option.id
                                                )
                                              )
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="text-sm font-normal cursor-pointer">
                                      {option.label}
                                    </FormLabel>
                                  </FormItem>
                                )
                              }}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="interest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Why are you interested in joining our network?</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your interest in AI-powered emotional support and how you'd like to contribute..."
                            className="min-h-[150px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="website"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Professional Website (optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="https://yourwebsite.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="acceptTerms"
                    render={({ field }) => (
                      <FormItem className="flex items-start space-x-3 space-y-0 pb-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I agree to the <a href="#" className="text-empathy-purple hover:underline">terms of service</a> and <a href="#" className="text-empathy-purple hover:underline">privacy policy</a>
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full bg-empathy-purple hover:bg-empathy-dark-purple text-white">
                    Submit Application
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white dark:bg-empathy-dark-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">What to Expect After Applying</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="h-8 w-8 rounded-full bg-empathy-purple flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Application Review</h3>
                  <p className="text-muted-foreground">
                    Our team will review your application within 5-7 business days to ensure a good fit with our network's needs.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="h-8 w-8 rounded-full bg-empathy-purple flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Initial Discussion</h3>
                  <p className="text-muted-foreground">
                    Selected applicants will be invited to a video call to discuss collaboration opportunities, expertise, and mutual goals.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="h-8 w-8 rounded-full bg-empathy-purple flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Onboarding Process</h3>
                  <p className="text-muted-foreground">
                    Successful applicants will go through our onboarding process to understand our technology, ethics guidelines, and contribution methods.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="h-8 w-8 rounded-full bg-empathy-purple flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Begin Collaboration</h3>
                  <p className="text-muted-foreground">
                    Start collaborating with our AI team, contribute to ongoing projects, and help us improve emotional support through technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {[
                {
                  q: "What type of commitment is required?",
                  a: "Commitment levels are flexible and can range from occasional consultations to regular collaboration. We'll discuss your availability and interests during the initial call."
                },
                {
                  q: "Is there compensation for network members?",
                  a: "Yes, we offer competitive compensation for specific project contributions, consultations, and ongoing collaborations based on your level of involvement."
                },
                {
                  q: "Do I need AI or technical experience?",
                  a: "No technical experience is required. Your mental health expertise is what matters most. Our technical team will handle the AI implementation aspects."
                },
                {
                  q: "Can I participate remotely?",
                  a: "Yes, our collaboration is fully remote and global. We work with professionals from around the world."
                },
                {
                  q: "What kinds of projects will I work on?",
                  a: "Projects may include AI response evaluation, therapeutic protocol development, emotional support effectiveness research, and voice interaction design."
                }
              ].map((faq, index) => (
                <div key={index} className="p-6 border rounded-xl bg-card">
                  <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-empathy-soft-purple dark:bg-empathy-dark-purple/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10">What Network Members Say</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl glass-card dark:glass-card-dark">
                <p className="mb-6 italic">
                  "Collaborating with EmpathyVoice has been incredibly rewarding. I'm able to share my expertise in anxiety management while learning about cutting-edge AI applications in mental health."
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-empathy-purple/20 flex items-center justify-center text-empathy-purple font-semibold mr-4">
                    DR
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">Dr. Rachel S.</p>
                    <p className="text-sm text-muted-foreground">Clinical Psychologist, Network Member</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-xl glass-card dark:glass-card-dark">
                <p className="mb-6 italic">
                  "I was skeptical about AI in mental health at first, but seeing how EmpathyVoice incorporates professional guidance has changed my perspective. The team truly values clinical expertise."
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-empathy-purple/20 flex items-center justify-center text-empathy-purple font-semibold mr-4">
                    JM
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">James M.</p>
                    <p className="text-sm text-muted-foreground">Licensed Therapist, Network Advisor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JoinNetworkPage;
