import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import { AuthContext } from '@/contexts/AuthContext';
import { User, RegisterData } from '@/types/auth.types';
import { loginUser, registerUser, processGoogleAuth } from '@/services/authService';
import { sessionService, SessionData } from '@/services/sessionService';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);
  const [currentSession, setCurrentSession] = useState<SessionData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      if (token) {
        try {
          // We would typically fetch user details from API here
          // For now, we'll just validate the token exists
          setUser(JSON.parse(localStorage.getItem('user') || '{}'));
          
          // Check if there's an active session in localStorage
          const savedSession = localStorage.getItem('currentSession');
          if (savedSession) {
            setCurrentSession(JSON.parse(savedSession));
          }
          
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
      localStorage.setItem('user', JSON.stringify(userData));
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

      // Save token and user data
      localStorage.setItem('token', authToken);
      localStorage.setItem('user', JSON.stringify(registeredUser));
      setToken(authToken);
      setUser(registeredUser);
      
      toast({
        title: "Registration successful",
        description: "Your account has been created",
      });
      
      // Start free trial session automatically for new users
      try {
        const session = await sessionService.startSession();
        setCurrentSession(session);
        
        // Store session in localStorage to persist across refreshes
        localStorage.setItem('currentSession', JSON.stringify(session));
        
        toast({
          title: "Free trial started!",
          description: "Your 10-minute free trial has begun",
        });
      } catch (sessionError) {
        console.error("Error starting free trial session:", sessionError);
      }
      
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

  const googleAuth = async (credential: string) => {
    try {
      setLoading(true);
      
      const { token: authToken, user: googleUser } = await processGoogleAuth(credential);
      
      localStorage.setItem('token', authToken);
      localStorage.setItem('user', JSON.stringify(googleUser));
      setToken(authToken);
      setUser(googleUser);
      
      toast({
        title: "Google login successful",
        description: "Welcome to FeelCalm!",
      });
      
      // Check if this is a new user and start a session if needed
      try {
        const session = await sessionService.startSession();
        setCurrentSession(session);
        localStorage.setItem('currentSession', JSON.stringify(session));
        
        toast({
          title: "Free trial started!",
          description: "Your 10-minute free trial has begun",
        });
      } catch (sessionError) {
        console.error("Error starting free trial session:", sessionError);
      }
      
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
    // End any active sessions
    if (currentSession?.sessionId && !currentSession.endTime) {
      try {
        sessionService.endSession(currentSession.sessionId);
      } catch (error) {
        console.error('Error ending session during logout:', error);
      }
    }
    
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('currentSession');
    setUser(null);
    setToken(null);
    setCurrentSession(null);
    navigate('/');
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
  };
  
  const startSession = async (): Promise<SessionData> => {
    try {
      const session = await sessionService.startSession();
      setCurrentSession(session);
      localStorage.setItem('currentSession', JSON.stringify(session));
      return session;
    } catch (error) {
      console.error("Error starting session:", error);
      throw error;
    }
  };
  
  const endSession = async (): Promise<SessionData | undefined> => {
    if (currentSession?.sessionId) {
      try {
        const endedSession = await sessionService.endSession(currentSession.sessionId);
        setCurrentSession(null);
        localStorage.removeItem('currentSession');
        return endedSession;
      } catch (error) {
        console.error("Error ending session:", error);
        throw error;
      }
    }
    return undefined;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        token,
        currentSession,
        isAuthenticated: !!user && !!token,
        login,
        register,
        logout,
        googleAuth,
        startSession,
        endSession
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
