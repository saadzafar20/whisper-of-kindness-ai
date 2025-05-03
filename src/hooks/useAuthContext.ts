
import { useContext } from 'react';
import { AuthContext } from '@/contexts/AuthContext';
import { AuthContextType } from '@/types/auth.types';
import { SessionData } from '@/services/sessionService';
import { toast } from '@/hooks/use-toast';
import { vapiService } from '@/services/vapiService';

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
    try {
      // First request microphone permissions
      const permissionGranted = await vapiService.requestMicrophonePermission();
      if (!permissionGranted) {
        toast({
          title: "Permission Required",
          description: "Microphone access is needed for voice sessions",
          variant: "destructive",
        });
        throw new Error('Microphone permission required');
      }
      
      throw new Error('Auth context not initialized');
    } catch (error) {
      console.error('Error in startSession:', error);
      throw error;
    }
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
