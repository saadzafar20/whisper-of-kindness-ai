
import { useContext } from 'react';
import { AuthContext } from '@/contexts/AuthContext';
import { AuthContextType } from '@/types/auth.types';

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

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    console.error('useAuth must be used within an AuthProvider');
    return defaultAuthContext; // Return a default context instead of throwing an error
  }
  return context;
};
