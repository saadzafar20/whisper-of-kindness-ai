
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

interface User {
  userId: string;
  fullName: string;
  email: string;
  gender?: string;
  pricingPlan?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  token: string | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: RegisterData) => Promise<void>;
  logout: () => void;
  googleAuth: (token: string) => Promise<void>;
}

interface RegisterData {
  email: string;
  password: string;
  fullName: string;
  gender?: string;
  pricingPlan?: string;
}

const AuthContext = createContext<AuthContextType | null>(null);

// Create a default auth context for development/testing purposes
const defaultAuthContext: AuthContextType = {
  user: null,
  loading: false,
  token: null,
  isAuthenticated: false,
  login: async () => {},
  register: async () => {},
  logout: () => {},
  googleAuth: async () => {}
};

// Get the API base URL - ONLY use relative URL
const API_BASE_URL = '/api';
console.log('API Base URL:', API_BASE_URL); // Debug log

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      if (token) {
        try {
          // We would typically fetch user details from API here
          // For now, we'll just validate the token exists
          setUser(JSON.parse(localStorage.getItem('user') || '{}'));
          setLoading(false);
        } catch (error) {
          console.error('Error loading user:', error);
          logout();
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    loadUser();
  }, [token]);

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      const loginUrl = `${API_BASE_URL}/auth/login`;
      console.log('Login request URL:', loginUrl); // Debug log
      
      const response = await fetch(loginUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error('Login error response:', errorData);
        throw new Error('Failed to login. Please check your credentials.');
      }

      const data = await response.json();

      // Save token to localStorage
      localStorage.setItem('token', data.token);
      setToken(data.token);

      // Fetch user data
      await fetchUserData(data.token);
      toast({
        title: "Login successful",
        description: "Welcome back!",
      });
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      toast({
        title: "Login failed",
        description: error instanceof Error ? error.message : "Please check your credentials and try again",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData: RegisterData) => {
    try {
      setLoading(true);
      const registerUrl = `${API_BASE_URL}/auth/register`;
      console.log('Register request URL:', registerUrl); // Debug log
      
      const response = await fetch(registerUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error('Register error response:', errorData);
        throw new Error('Registration failed. Please try again.');
      }

      const data = await response.json();

      // Save token
      localStorage.setItem('token', data.token);
      setToken(data.token);

      // Save basic user info
      const userInfo: User = {
        userId: '',
        fullName: userData.fullName,
        email: userData.email,
        gender: userData.gender,
        pricingPlan: userData.pricingPlan
      };
      
      localStorage.setItem('user', JSON.stringify(userInfo));
      setUser(userInfo);
      
      toast({
        title: "Registration successful",
        description: "Your account has been created",
      });
      navigate('/dashboard');
    } catch (error) {
      console.error('Registration error:', error);
      toast({
        title: "Registration failed",
        description: error instanceof Error ? error.message : "Please try again later",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const googleAuth = async (token: string) => {
    try {
      setLoading(true);
      // In a real implementation, we would send this token to our backend
      // For now, we'll simulate a successful authentication
      
      // Create a mock user
      const mockUser = {
        userId: 'google_user_' + Date.now(),
        fullName: 'Google User',
        email: 'googleuser@example.com'
      };
      
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(mockUser));
      
      setToken(token);
      setUser(mockUser);
      
      toast({
        title: "Google login successful",
        description: "Welcome to FeelCalm!",
      });
      navigate('/dashboard');
    } catch (error) {
      console.error('Google auth error:', error);
      toast({
        title: "Google authentication failed",
        description: "Please try again later",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchUserData = async (authToken: string) => {
    // In a real implementation, we would fetch user details from an API
    // For now, we'll just save a placeholder user
    const userInfo: User = {
      userId: 'user_' + Date.now(),
      fullName: 'Test User',
      email: 'test@example.com',
      pricingPlan: 'free',
    };
    
    localStorage.setItem('user', JSON.stringify(userInfo));
    setUser(userInfo);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setToken(null);
    navigate('/');
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        token,
        isAuthenticated: !!user && !!token,
        login,
        register,
        logout,
        googleAuth
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    console.error('useAuth must be used within an AuthProvider');
    return defaultAuthContext; // Return a default context instead of throwing an error
  }
  return context;
};
