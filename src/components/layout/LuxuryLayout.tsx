
import React from "react";
import { motion } from "framer-motion";
import { Crown } from "lucide-react";

interface LuxuryLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  showDecoration?: boolean;
}

const LuxuryLayout = ({
  children,
  title,
  subtitle,
  showDecoration = true,
}: LuxuryLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-empathy-rich-black to-empathy-midnight-blue text-white overflow-hidden">
      {/* Luxury decorative elements */}
      {showDecoration && (
        <>
          <div className="fixed top-40 left-10 w-32 h-32 bg-empathy-gold/5 rounded-full blur-3xl" />
          <div className="fixed top-1/3 right-10 w-64 h-64 bg-empathy-gold/5 rounded-full blur-3xl" />
          <div className="fixed bottom-20 left-1/4 w-96 h-96 bg-empathy-purple/10 rounded-full blur-3xl" />
        </>
      )}

      {/* Header section with title and subtitle */}
      {(title || subtitle) && (
        <div className="relative z-10 pt-24 pb-12 px-4 text-center mb-4">
          {title && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-3"
            >
              <Crown size={24} className="text-empathy-gold" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold">
                <span className="text-gradient-gold">{title}</span>
              </h1>
            </motion.div>
          )}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white max-w-3xl mx-auto font-medium"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      )}

      {/* Main content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Bottom decoration */}
      {showDecoration && (
        <div className="fixed bottom-0 left-0 w-full h-px gold-shimmer" />
      )}
    </div>
  );
};

export default LuxuryLayout;
