
import { SessionData } from '@/services/sessionService';

export interface User {
  userId: string;
  fullName: string;
  email: string;
  gender?: string;
  pricingPlan?: string;
}

export interface RegisterData {
  email: string;
  password: string;
  fullName: string;
  gender?: string;
  pricingPlan?: string;
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  token: string | null;
  isAuthenticated: boolean;
  currentSession: SessionData | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: RegisterData) => Promise<void>;
  logout: () => void;
  googleAuth: (token: string) => Promise<void>;
  startSession: () => Promise<SessionData>;
  endSession: () => Promise<SessionData | undefined>;
}
