
import { useContext } from 'react';
import { AuthContext } from '@/contexts/AuthContext';
import { AuthContextType } from '@/types/auth.types';
import { SessionData } from '@/services/sessionService';

// Create a default auth context for development/testing purposes
const defaultAuthContext: AuthContextType = {
  user: null,
  loading: false,
  token: null,
  isAuthenticated: false,
  currentSession: null,
  login: async () => {},
  register: async () => {},
  logout: () => {},
  googleAuth: async () => {},
  startSession: async () => {
    throw new Error('Auth context not initialized');
  },
  endSession: async () => {
    throw new Error('Auth context not initialized');
    return undefined;
  }
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    console.error('useAuth must be used within an AuthProvider');
    return defaultAuthContext; // Return a default context instead of throwing an error
  }
  return context;
};
