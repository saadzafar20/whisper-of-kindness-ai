
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import { AuthContext } from '@/contexts/AuthContext';
import { User, RegisterData } from '@/types/auth.types';
import { loginUser, registerUser, processGoogleAuth } from '@/services/authService';

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
      
      const { token: authToken, user: userData } = await loginUser(email, password);

      // Save token to localStorage
      localStorage.setItem('token', authToken);
      setToken(authToken);
      setUser(userData);
      
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
      
      const { token: authToken, user: registeredUser } = await registerUser(userData);

      // Save token
      localStorage.setItem('token', authToken);
      setToken(authToken);
      setUser(registeredUser);
      
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
      
      const { token: authToken, user: googleUser } = await processGoogleAuth(token);
      
      localStorage.setItem('token', authToken);
      setToken(authToken);
      setUser(googleUser);
      
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
