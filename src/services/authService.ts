
import { User, RegisterData, LoginResponse } from '@/types/auth.types';

const API_BASE_URL = '/api';

export const loginUser = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  try {
    // Make the API call
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.msg || 'Login failed');
    }

    const data = await response.json();
    
    // Format response properly - ensure we have both token and user data
    return {
      token: data.token,
      user: {
        id: data.user?.user_id || 'unknown',
        email: email,
        fullName: data.user?.full_name || email.split('@')[0],
        createdAt: data.user?.created_at || new Date().toISOString(),
        pricingPlan: data.user?.pricing_plan || 'free'
      }
    };
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const registerUser = async (
  userData: RegisterData
): Promise<LoginResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.msg || 'Registration failed');
    }

    const data = await response.json();
    
    // Format response properly - ensure we have both token and user data
    return { 
      token: data.token,
      user: {
        id: data.user?.user_id || 'unknown',
        email: userData.email,
        fullName: userData.fullName,
        createdAt: new Date().toISOString(),
        pricingPlan: userData.pricingPlan
      },
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
    const response = await fetch(`${API_BASE_URL}/auth/google`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ credential }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.msg || 'Google authentication failed');
    }

    const data = await response.json();
    
    // For Google auth, we need to make sure we have user info
    const googleData = data.userData || {};
    
    return {
      token: data.token,
      user: {
        id: data.user?.user_id || googleData.sub || 'unknown',
        email: googleData.email || 'unknown@example.com',
        fullName: googleData.name || 'Google User',
        createdAt: data.user?.created_at || new Date().toISOString(),
        pricingPlan: data.user?.pricing_plan || 'free',
        profilePicture: googleData.picture
      },
      isNewRegistration: !!data.isNewRegistration
    };
  } catch (error) {
    console.error('Google auth error:', error);
    throw error;
  }
};
