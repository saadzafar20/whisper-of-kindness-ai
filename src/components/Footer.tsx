
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-empathy-dark-navy pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1">
            <div className="flex items-center gap-3 group mb-6">
              <div className="relative h-12 w-12 rounded-2xl bg-gradient-to-br from-empathy-purple via-empathy-dark-purple to-empathy-deep-purple flex items-center justify-center shadow-luxury overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-empathy-purple/30 to-transparent opacity-50"></div>
                <Sparkles className="text-white w-7 h-7" />
              </div>
              <span className="font-serif font-bold text-xl bg-gradient-to-r from-empathy-deep-purple to-empathy-dark-purple bg-clip-text text-transparent dark:from-white dark:to-gray-300">
                FeelCalm
              </span>
            </div>
            <p className="text-empathy-neutral-gray mb-6">
              Your trusted voice-based companion for emotional wellness - 100% secure and private.
            </p>
            <div className="flex gap-4">
              <motion.a 
                href="https://facebook.com" 
                aria-label="Facebook" 
                className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white hover:shadow-lg transition-all"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook size={18} />
              </motion.a>
              <motion.a 
                href="https://instagram.com" 
                aria-label="Instagram" 
                className="h-10 w-10 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-orange-400 flex items-center justify-center text-white hover:shadow-lg transition-all"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={18} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                aria-label="LinkedIn" 
                className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white hover:shadow-lg transition-all"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={18} />
              </motion.a>
              {/* Custom TikTok SVG icon since it's not available in lucide-react */}
              <motion.a 
                href="https://tiktok.com" 
                aria-label="TikTok" 
                className="h-10 w-10 rounded-full bg-gradient-to-br from-black to-gray-800 flex items-center justify-center text-white hover:shadow-lg transition-all"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                </svg>
              </motion.a>
              <motion.a 
                href="https://youtube.com" 
                aria-label="YouTube" 
                className="h-10 w-10 rounded-full bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center text-white hover:shadow-lg transition-all"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <Youtube size={18} />
              </motion.a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-empathy-dark-navy dark:text-white">Product</h3>
            <ul className="space-y-4">
              <li><Link to="/why-ai-support" className="text-empathy-neutral-gray hover:text-empathy-purple transition-colors">Why Support</Link></li>
              <li><Link to="/how-it-works" className="text-empathy-neutral-gray hover:text-empathy-purple transition-colors">How It Works</Link></li>
              <li><Link to="/pricing" className="text-empathy-neutral-gray hover:text-empathy-purple transition-colors">Pricing</Link></li>
              <li><Link to="/testimonials" className="text-empathy-neutral-gray hover:text-empathy-purple transition-colors">Testimonials</Link></li>
              <li><Link to="/faq" className="text-empathy-neutral-gray hover:text-empathy-purple transition-colors">FAQs</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-empathy-dark-navy dark:text-white">Resources</h3>
            <ul className="space-y-4">
              <li><Link to="/blog" className="text-empathy-neutral-gray hover:text-empathy-purple transition-colors">Blog & Wellness Hub</Link></li>
              <li><Link to="/join-network" className="text-empathy-neutral-gray hover:text-empathy-purple transition-colors">Join Our Network</Link></li>
              <li><Link to="/about" className="text-empathy-neutral-gray hover:text-empathy-purple transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-empathy-neutral-gray hover:text-empathy-purple transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-empathy-dark-navy dark:text-white">Legal</h3>
            <ul className="space-y-4">
              <li><Link to="/privacy" className="text-empathy-neutral-gray hover:text-empathy-purple transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-empathy-neutral-gray hover:text-empathy-purple transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-empathy-neutral-gray hover:text-empathy-purple transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        <div className="text-center text-empathy-neutral-gray text-sm">
          <p className="mb-4">© {new Date().getFullYear()} FeelCalm. All rights reserved.</p>
          <p className="flex items-center justify-center gap-1">
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              Made with <Heart size={14} className="text-empathy-purple" fill="#9b87f5" /> for better mental health
            </motion.span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
