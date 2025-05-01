
import { User } from '@/types/auth.types';
import { toast } from '@/hooks/use-toast';

// Get the API base URL - ONLY use relative URL
const API_BASE_URL = '/api';
console.log('API Base URL:', API_BASE_URL); // Debug log

export const fetchUserData = async (authToken: string): Promise<User> => {
  // In a real implementation, we would fetch user details from an API
  // For now, we'll just save a placeholder user
  const userInfo: User = {
    userId: 'user_' + Date.now(),
    fullName: 'Test User',
    email: 'test@example.com',
    pricingPlan: 'free',
  };
  
  localStorage.setItem('user', JSON.stringify(userInfo));
  return userInfo;
};

export const loginUser = async (email: string, password: string): Promise<{ token: string, user: User }> => {
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

  // Fetch user data
  const user = await fetchUserData(data.token);

  return { token: data.token, user };
};

export const registerUser = async (userData: {
  email: string;
  password: string;
  fullName: string;
  gender?: string;
  pricingPlan?: string;
}): Promise<{ token: string, user: User }> => {
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

  // Create basic user info
  const userInfo: User = {
    userId: '',
    fullName: userData.fullName,
    email: userData.email,
    gender: userData.gender,
    pricingPlan: userData.pricingPlan
  };
  
  localStorage.setItem('user', JSON.stringify(userInfo));
  
  return { token: data.token, user: userInfo };
};

export const processGoogleAuth = async (token: string): Promise<{ token: string, user: User }> => {
  // In a real implementation, we would send this token to our backend
  // For now, we'll simulate a successful authentication
  
  // Create a mock user
  const mockUser = {
    userId: 'google_user_' + Date.now(),
    fullName: 'Google User',
    email: 'googleuser@example.com'
  };
  
  localStorage.setItem('user', JSON.stringify(mockUser));
  
  return { token, user: mockUser };
};
