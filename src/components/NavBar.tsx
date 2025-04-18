
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

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
    { name: "Home", path: "/" },
    { name: "Expert Consultants", path: "/talk-to-consultants" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
    { name: "Join Network", path: "/join-network" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-empathy-dark-navy/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-12 w-12 rounded-xl bg-luxury-gradient flex items-center justify-center shadow-luxury">
            <span className="text-white font-bold text-2xl font-serif">EV</span>
          </div>
          <span className={`font-serif font-bold text-xl ${isScrolled ? 'text-empathy-deep-purple dark:text-white' : 'text-empathy-deep-purple dark:text-white'}`}>
            EmpathyVoice
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`${isScrolled ? 'text-empathy-deep-purple dark:text-white' : 'text-empathy-deep-purple dark:text-white'} hover:text-empathy-purple transition-colors`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="hover:bg-empathy-soft-purple hover:text-empathy-purple">
            Sign In
          </Button>
          <Button className="bg-empathy-purple hover:bg-empathy-dark-purple text-white">
            Try Now
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-empathy-dark-navy dark:text-white" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-empathy-dark-navy shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className="text-empathy-deep-purple dark:text-white hover:text-empathy-purple transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <hr className="my-2 border-gray-200 dark:border-gray-700" />
            <div className="flex flex-col gap-3 mt-2">
              <Button variant="ghost" className="justify-center hover:bg-empathy-soft-purple hover:text-empathy-purple">
                Sign In
              </Button>
              <Button className="justify-center bg-empathy-purple hover:bg-empathy-dark-purple text-white">
                Try Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
