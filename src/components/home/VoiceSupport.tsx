import { MessageCircle, Lock, Clock, HeartPulse, Activity, Shield, LineChart } from "lucide-react";
import VoiceWaveform from "@/components/VoiceWaveform";
import { motion } from "framer-motion";

export const VoiceSupport = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6">The Power of Voice-Based Support</h2>
          <p className="text-lg text-muted-foreground">
            Expressing emotions verbally is more natural and therapeutic than typing. Our voice AI captures nuances that text-based solutions miss.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div 
            className="flex flex-col rounded-xl border p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.div 
                className="h-12 w-12 rounded-lg bg-empathy-soft-purple flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <MessageCircle className="h-6 w-6 text-empathy-purple" />
              </motion.div>
              <h3 className="text-xl font-semibold">Natural Conversation Flow</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Speaking allows you to express emotions more naturally than typing. Our AI responds to tone, pace, and emotional cues.
            </p>
            <div className="mt-auto pt-4">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
              >
                <VoiceWaveform isActive={true} />
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col rounded-xl border p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.div 
                className="h-12 w-12 rounded-lg bg-empathy-soft-purple flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Lock className="h-6 w-6 text-empathy-purple" />
              </motion.div>
              <h3 className="text-xl font-semibold">Privacy & Security</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Your conversations are encrypted and never shared. We prioritize your privacy and maintain the highest security standards.
            </p>
            <div className="mt-auto grid grid-cols-3 gap-2">
              {['Encrypted', 'Private', 'Secure'].map((text, i) => (
                <motion.div
                  key={text}
                  className="h-10 rounded bg-empathy-soft-purple/50 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.2 }}
                >
                  <Shield className="h-4 w-4 text-empathy-purple mr-1" />
                  <span className="text-xs font-medium">{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col rounded-xl border p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.div 
                className="h-12 w-12 rounded-lg bg-empathy-soft-purple flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Clock className="h-6 w-6 text-empathy-purple" />
              </motion.div>
              <h3 className="text-xl font-semibold">24/7 Availability</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Feel heard whenever you need it. Our AI companion is available day or night, weekends and holidays, without scheduling.
            </p>
            <div className="mt-auto grid grid-cols-7 gap-1">
              {['M','T','W','T','F','S','S'].map((day, i) => (
                <motion.div
                  key={day}
                  className="h-8 rounded bg-empathy-soft-purple/50 flex items-center justify-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Activity className="h-3 w-3 text-empathy-purple" />
                  <span className="text-[10px] font-medium ml-1">{day}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col rounded-xl border p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.div 
                className="h-12 w-12 rounded-lg bg-empathy-soft-purple flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <HeartPulse className="h-6 w-6 text-empathy-purple" />
              </motion.div>
              <h3 className="text-xl font-semibold">Research-Backed</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Our approach is based on established therapeutic techniques and emotional support methodologies validated by research.
            </p>
            <div className="mt-auto">
              <motion.div 
                className="h-20 w-full relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <div className="absolute inset-0 flex items-end justify-around">
                  {[0.4, 0.8, 0.6, 0.9, 0.7].map((height, i) => (
                    <motion.div
                      key={i}
                      className="w-4 bg-empathy-purple rounded-t"
                      initial={{ height: 0 }}
                      animate={{ height: `${height * 100}%` }}
                      transition={{ delay: i * 0.2, duration: 0.5 }}
                    />
                  ))}
                </div>
                <LineChart className="absolute bottom-0 w-full h-6 text-empathy-purple/30" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VoiceSupport;
