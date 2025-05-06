
import { jwtDecode } from "jwt-decode";

interface GoogleUserInfo {
  email: string;
  name: string;
  picture?: string;
  sub: string;
}

export const processGoogleToken = (credential: string): GoogleUserInfo => {
  try {
    // Decode the JWT token
    const decoded = jwtDecode<GoogleUserInfo>(credential);
    
    return {
      email: decoded.email,
      name: decoded.name,
      picture: decoded.picture,
      sub: decoded.sub // Google's unique identifier for the user
    };
  } catch (error) {
    console.error('Error decoding Google token:', error);
    throw new Error('Failed to process Google authentication');
  }
};
