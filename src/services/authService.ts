
import { User } from '@/types/auth.types';
import { toast } from '@/hooks/use-toast';

// Get the API base URL - ONLY use relative URL
const API_BASE_URL = '/api';
console.log('API Base URL:', API_BASE_URL); // Debug log

export const fetchUserData = async (authToken: string): Promise<User> => {
  try {
    // Attempt to fetch user details from API using the token
    const response = await fetch(`${API_BASE_URL}/users/me`, {
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    });

    if (response.ok) {
      const userData = await response.json();
      localStorage.setItem('user', JSON.stringify(userData));
      return userData;
    } else {
      throw new Error('Failed to fetch user data');
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    
    // Fallback for development/testing
    const userInfo: User = {
      userId: 'user_' + Date.now(),
      fullName: 'Test User',
      email: 'test@example.com',
      pricingPlan: 'free',
    };
    
    localStorage.setItem('user', JSON.stringify(userInfo));
    return userInfo;
  }
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

export const processGoogleAuth = async (credential: string): Promise<{ token: string, user: User }> => {
  try {
    const googleAuthUrl = `${API_BASE_URL}/auth/google`;
    console.log('Google auth request URL:', googleAuthUrl);
    
    const response = await fetch(googleAuthUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ credential }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Google auth error response:', errorData);
      throw new Error('Google authentication failed.');
    }

    const data = await response.json();
    
    // Fetch user data with the token
    const user = await fetchUserData(data.token);
    
    return { token: data.token, user };
  } catch (error) {
    console.error('Google auth processing error:', error);
    throw new Error('Failed to process Google authentication');
  }
};
