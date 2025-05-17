
import { User, RegisterData, LoginResponse } from '@/types/auth.types';

const API_BASE_URL = '/api';

export const loginUser = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  try {
    // In a real implementation, this would make an API call
    // For now, it's just a simulation
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Login failed');
    }

    return await response.json();
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const registerUser = async (
  userData: RegisterData
): Promise<LoginResponse> => {
  try {
    // In a real implementation, this would make an API call
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Registration failed');
    }

    const data = await response.json();
    return { 
      ...data,
      isNewRegistration: true 
    };
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};

export const processGoogleAuth = async (
  credential: string
): Promise<LoginResponse> => {
  try {
    // In a real implementation, this would verify the credential with Google
    // and then authenticate the user
    const response = await fetch(`${API_BASE_URL}/auth/google`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ credential }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Google authentication failed');
    }

    return await response.json();
  } catch (error) {
    console.error('Google auth error:', error);
    throw error;
  }
};
