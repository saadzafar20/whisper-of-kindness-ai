
import React, { createContext } from 'react';
import { AuthContextType } from '@/types/auth.types';

// Create the context
export const AuthContext = createContext<AuthContextType | null>(null);

// Re-export the provider from its separate file
export { AuthProvider } from '@/providers/AuthProvider';

// Re-export the hook for ease of use
export { useAuth } from '@/hooks/useAuthContext';
