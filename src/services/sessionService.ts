
import { toast } from '@/hooks/use-toast';

const API_BASE_URL = '/api';

export interface SessionData {
  sessionId: string;
  startTime: Date;
  endTime?: Date;
  durationInSeconds?: number;
  isTrial: boolean;
}

export interface TrialTimeData {
  isPremium: boolean;
  totalTrialSeconds?: number;
  usedSeconds?: number;
  remainingSeconds?: number;
  percentageRemaining?: number;
  message?: string;
}

export const sessionService = {
  // Start a new session
  startSession: async (): Promise<SessionData> => {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('Authentication required');
    
    try {
      const response = await fetch(`${API_BASE_URL}/sessions/start`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to start session');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error starting session:', error);
      throw error;
    }
  },
  
  // End an active session
  endSession: async (sessionId: string): Promise<SessionData> => {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('Authentication required');
    
    try {
      const response = await fetch(`${API_BASE_URL}/sessions/end/${sessionId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to end session');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error ending session:', error);
      throw error;
    }
  },
  
  // Get user's session history
  getUserSessions: async (): Promise<SessionData[]> => {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('Authentication required');
    
    try {
      const response = await fetch(`${API_BASE_URL}/sessions`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch sessions');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching sessions:', error);
      return [];
    }
  },
  
  // Get remaining trial time
  getTrialTimeRemaining: async (): Promise<TrialTimeData> => {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('Authentication required');
    
    try {
      const response = await fetch(`${API_BASE_URL}/sessions/trial-time-remaining`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch trial time data');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching trial time:', error);
      throw error;
    }
  }
};
