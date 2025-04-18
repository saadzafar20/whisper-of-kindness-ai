
import { Shield, Lock, CheckCircle } from "lucide-react";

const PrivacyPage = () => {
  return (
    <>
      {/* Header Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Privacy & <span className="text-empathy-purple">Confidentiality</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 animate-fade-in" style={{ animationDelay: "200ms" }}>
              Your privacy is our top priority. Learn how we protect your personal information and conversations.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Commitment Section */}
      <section className="py-16 bg-white dark:bg-empathy-dark-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center mb-8">
              <div className="h-20 w-20 rounded-full bg-empathy-soft-purple flex items-center justify-center">
                <Shield className="h-10 w-10 text-empathy-purple" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-6 text-center">Our Privacy Commitment</h2>
            <p className="text-lg text-muted-foreground mb-6 text-center">
              At EmpathyVoice AI, we understand that emotional support requires absolute trust and privacy.
              That's why we've built our platform with privacy and security as fundamental principles.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 border rounded-xl flex flex-col items-center text-center animate-fade-in">
              <div className="h-12 w-12 rounded-full bg-empathy-soft-purple flex items-center justify-center mb-4">
                <Lock className="h-6 w-6 text-empathy-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">End-to-End Encryption</h3>
              <p className="text-muted-foreground">
                All conversations are secured with advanced encryption, ensuring no unauthorized access.
              </p>
            </div>
            
            <div className="p-6 border rounded-xl flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="h-12 w-12 rounded-full bg-empathy-soft-purple flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-empathy-purple">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9 12c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3-3-1.34-3-3zm11 6.5c-1.25 1.67-3.17 2.73-5.38 2.95-.07.05-.15.05-.23.05-.07 0-.15 0-.23-.05C12.95 21.5 11.5 21 10.5 20c.83-1.35 2.5-2 4.5-2s3.67.65 4.5 2zM20 12c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm-8 3c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3-3-1.34-3-3z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">No Human Listening</h3>
              <p className="text-muted-foreground">
                Your conversations are never reviewed by humans unless you explicitly request assistance.
              </p>
            </div>
            
            <div className="p-6 border rounded-xl flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: "400ms" }}>
              <div className="h-12 w-12 rounded-full bg-empathy-soft-purple flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-empathy-purple">
                  <path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3ZM18.82 9L12 12.72L5.18 9L12 5.28L18.82 9ZM17 15.99L12 18.72L7 15.99V12.27L12 15L17 12.27V15.99Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Limited Data Collection</h3>
              <p className="text-muted-foreground">
                We only collect the minimum data necessary to provide and improve our service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Privacy Policies Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Key Privacy Policies</h2>
            
            <div className="space-y-8">
              {[
                {
                  title: "Data Storage & Retention",
                  content: "Your conversation data is stored securely and encrypted at rest. You can delete your data at any time through your account settings. By default, conversations are automatically deleted after 30 days unless you choose to save them longer."
                },
                {
                  title: "AI Training & Improvement",
                  content: "We may use anonymized, aggregated data patterns to improve our AI systems. This never includes your specific conversations or identifying information. You can opt out of this in your privacy settings."
                },
                {
                  title: "Information We Collect",
                  content: "Basic account information (email), optional profile information, conversation metadata (time, duration, but not content), app usage analytics, and device information for service optimization."
                },
                {
                  title: "Information Sharing",
                  content: "We never sell your data. We only share information with third parties in limited circumstances: with your consent, with service providers under strict confidentiality agreements, or when required by law."
                },
                {
                  title: "Security Measures",
                  content: "We implement multiple layers of security including encryption, access controls, regular security audits, and vulnerability testing to protect your information."
                }
              ].map((policy, index) => (
                <div key={index} className="flex gap-4">
                  <div className="h-6 w-6 rounded-full bg-empathy-purple flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{policy.title}</h3>
                    <p className="text-muted-foreground">
                      {policy.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* User Control Section */}
      <section className="py-16 bg-white dark:bg-empathy-dark-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Your Control Over Your Data</h2>
            <p className="text-lg text-muted-foreground mb-12 text-center">
              We believe in giving you complete control over your personal information and conversation data.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 border rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Access & Export</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-empathy-purple" />
                    <span>Access your personal data anytime</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-empathy-purple" />
                    <span>Export your data in portable formats</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-empathy-purple" />
                    <span>Review conversation history securely</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-6 border rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Delete & Control</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-empathy-purple" />
                    <span>Delete individual conversations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-empathy-purple" />
                    <span>Completely delete your account</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-empathy-purple" />
                    <span>Control privacy settings in detail</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Compliance Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Legal Compliance</h2>
            
            <div className="p-6 border rounded-xl mb-8">
              <h3 className="text-xl font-semibold mb-4">Regulatory Compliance</h3>
              <p className="text-muted-foreground mb-4">
                EmpathyVoice AI is designed to comply with global privacy regulations, including:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-empathy-purple" />
                  <span>General Data Protection Regulation (GDPR)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-empathy-purple" />
                  <span>California Consumer Privacy Act (CCPA)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-empathy-purple" />
                  <span>Health Insurance Portability and Accountability Act (HIPAA)</span>
                </li>
              </ul>
            </div>
            
            <div className="p-6 border rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Important Limitations</h3>
              <p className="text-muted-foreground mb-4">
                While we prioritize your privacy, there are certain limitations:
              </p>
              <ul className="space-y-4">
                <li className="flex gap-2">
                  <div className="h-5 w-5 rounded-full bg-empathy-purple flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">!</span>
                  </div>
                  <div>
                    <p className="font-medium">Safety Exceptions</p>
                    <p className="text-sm text-muted-foreground">In cases where there is clear risk of serious harm to yourself or others, we may need to involve appropriate authorities.</p>
                  </div>
                </li>
                <li className="flex gap-2">
                  <div className="h-5 w-5 rounded-full bg-empathy-purple flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">!</span>
                  </div>
                  <div>
                    <p className="font-medium">Legal Requirements</p>
                    <p className="text-sm text-muted-foreground">We may disclose information in response to valid legal requests such as court orders or subpoenas.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-empathy-soft-purple dark:bg-empathy-dark-purple/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Privacy Questions?</h2>
            <p className="text-lg mb-6">
              If you have any questions about our privacy practices or would like to exercise your data rights, please contact our Data Protection Officer.
            </p>
            <div className="flex justify-center">
              <a href="mailto:privacy@empathyvoice.ai" className="inline-flex items-center gap-2 text-empathy-purple hover:underline font-medium">
                privacy@empathyvoice.ai
              </a>
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              This privacy policy was last updated on April 15, 2025.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPage;
