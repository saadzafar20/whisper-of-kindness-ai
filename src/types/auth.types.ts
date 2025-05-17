
export interface User {
  id: string;
  email: string;
  fullName: string;
  gender?: string;
  createdAt?: string;
  pricingPlan: 'free' | 'pro' | 'enterprise';
}

export interface RegisterData {
  email: string;
  password: string;
  fullName: string;
  gender?: string;
}

export interface LoginResponse {
  token: string;
  user: User;
  isNewRegistration?: boolean;
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  token: string | null;
  currentSession: any;
  isNewUser: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: RegisterData) => Promise<void>;
  logout: () => void;
  googleAuth: (credential: string) => Promise<void>;
  startSession: () => Promise<any>;
  endSession: () => Promise<any | undefined>;
  resetNewUserState: () => void;
}
