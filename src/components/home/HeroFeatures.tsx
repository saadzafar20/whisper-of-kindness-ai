
import { Heart, MessageCircle, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export const HeroFeatures = () => {
  const features = [
    {
      text: "No fear of judgment.",
      icon: <Heart className="h-5 w-5 text-empathy-purple" />,
      delay: 0.2
    },
    {
      text: "No awkward silence. EVER!",
      icon: <MessageCircle className="h-5 w-5 text-empathy-purple" />,
      delay: 0.4
    },
    {
      text: "Just a safe space - 100%",
      icon: <ShieldCheck className="h-5 w-5 text-empathy-purple" />,
      delay: 0.6
    }
  ];

  return (
    <div className="space-y-4 mb-8">
      {features.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: item.delay }}
          className="flex items-center justify-center gap-3"
        >
          <motion.div 
            className="h-10 w-10 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center border border-empathy-purple/30"
            whileHover={{ scale: 1.1 }}
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(155, 135, 245, 0)",
                "0 0 0 10px rgba(155, 135, 245, 0.1)",
                "0 0 0 20px rgba(155, 135, 245, 0)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {item.icon}
          </motion.div>
          <p className="text-xl font-medium text-gray-800">
            {item.text}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

