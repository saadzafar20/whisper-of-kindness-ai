
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Why Us?", path: "/talk-to-consultants" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
    { name: "Join Network", path: "/partnership-network" },
    { name: "White-Label", path: "/white-label" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-sky-50/10 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative h-12 w-12 rounded-2xl bg-gradient-to-br from-empathy-purple via-empathy-dark-purple to-empathy-deep-purple flex items-center justify-center shadow-luxury overflow-hidden transition-all duration-300 hover:shadow-xl group-hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-tr from-empathy-purple/30 to-transparent opacity-50"></div>
            <Sparkles className="text-white w-7 h-7 animate-pulse-slow" />
          </div>
          <span className="font-serif font-bold text-xl bg-gradient-to-r from-empathy-deep-purple to-empathy-dark-purple bg-clip-text text-transparent group-hover:from-empathy-purple group-hover:to-empathy-deep-purple transition-all duration-300">
            FeelCalm
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className="text-gray-800 hover:text-empathy-deep-purple transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="text-gray-800 hover:bg-empathy-soft-purple/10 hover:text-empathy-deep-purple">
            Sign In
          </Button>
          <Button className="bg-empathy-purple hover:bg-empathy-dark-purple text-white">
            Get Started
          </Button>
        </div>

        <button 
          className="md:hidden text-gray-800" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className="text-gray-800 hover:text-empathy-deep-purple transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <hr className="my-2 border-gray-200" />
            <div className="flex flex-col gap-3">
              <Button variant="ghost" className="justify-center text-gray-800 hover:bg-empathy-soft-purple/10 hover:text-empathy-deep-purple">
                Sign In
              </Button>
              <Button className="justify-center bg-empathy-purple hover:bg-empathy-dark-purple text-white">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
