
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Sparkles, User } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

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
    { name: "Join Network", path: "/partnership-network" },
    { name: "Calm Hub", path: "/blog" },
    { name: "Pricing", path: "/pricing" },
    { name: "WhiteLabel Partnership", path: "/white-label" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white/90 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative h-12 w-12 rounded-2xl bg-gradient-to-br from-empathy-purple via-empathy-dark-purple to-empathy-deep-purple flex items-center justify-center shadow-luxury overflow-hidden transition-all duration-300 hover:shadow-xl group-hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-tr from-empathy-purple/30 to-transparent opacity-50"></div>
            <Sparkles className="text-white w-7 h-7 animate-pulse-slow" />
          </div>
          <span className="font-serif font-bold text-xl text-empathy-deep-purple group-hover:text-empathy-purple transition-all duration-300">
            FeelCalm
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className="text-gray-800 hover:text-empathy-deep-purple transition-colors font-medium"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2 hover:bg-empathy-soft-purple/10 text-gray-800 hover:text-empathy-deep-purple">
                  <User size={18} />
                  <span className="max-w-[120px] truncate">{user?.fullName || 'Account'}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate('/dashboard')}>
                  Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/settings')}>
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}>
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button 
                variant="ghost" 
                className="text-gray-800 hover:bg-empathy-soft-purple/10 hover:text-empathy-deep-purple font-medium"
                onClick={() => navigate('/auth')}
              >
                Sign In
              </Button>
              <Button 
                className="bg-empathy-purple hover:bg-empathy-dark-purple text-white font-medium"
                onClick={() => navigate('/auth?tab=register')}
              >
                Get Started
              </Button>
            </>
          )}
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
                className="text-gray-800 hover:text-empathy-deep-purple transition-colors py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <hr className="my-2 border-gray-200" />
            <div className="flex flex-col gap-3">
              {isAuthenticated ? (
                <>
                  <Link 
                    to="/dashboard" 
                    className="flex items-center gap-2 py-2 text-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User size={18} />
                    <span>Dashboard</span>
                  </Link>
                  <Button 
                    variant="ghost" 
                    className="justify-center text-gray-800 hover:bg-empathy-soft-purple/10 hover:text-empathy-deep-purple"
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                  >
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Button 
                    variant="ghost" 
                    className="justify-center text-gray-800 hover:bg-empathy-soft-purple/10 hover:text-empathy-deep-purple"
                    onClick={() => {
                      navigate('/auth');
                      setIsMenuOpen(false);
                    }}
                  >
                    Sign In
                  </Button>
                  <Button 
                    className="justify-center bg-empathy-purple hover:bg-empathy-dark-purple text-white font-medium"
                    onClick={() => {
                      navigate('/auth?tab=register');
                      setIsMenuOpen(false);
                    }}
                  >
                    Get Started
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
