
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { Clock, Volume2 } from 'lucide-react';
import { sessionService, TrialTimeData } from '@/services/sessionService';
import { vapiService } from '@/services/vapiService';
import { toast } from '@/hooks/use-toast';

const DashboardPage = () => {
  const { user, logout, currentSession, startSession, endSession } = useAuth();
  const [trialTimeData, setTrialTimeData] = useState<TrialTimeData | null>(null);
  const [sessionTime, setSessionTime] = useState(0);
  const [isSessionActive, setIsSessionActive] = useState(!!currentSession && !currentSession.endTime);
  
  useEffect(() => {
    // Fetch trial time data when component mounts
    const fetchTrialTime = async () => {
      try {
        const data = await sessionService.getTrialTimeRemaining();
        setTrialTimeData(data);
      } catch (error) {
        console.error('Error fetching trial time:', error);
      }
    };
    
    fetchTrialTime();
    
    // Session timer
    let timer: number | undefined;
    if (currentSession && !currentSession.endTime) {
      setIsSessionActive(true);
      const startTime = new Date(currentSession.startTime).getTime();
      
      // Update timer every second
      timer = window.setInterval(() => {
        const now = Date.now();
        const elapsed = Math.floor((now - startTime) / 1000);
        setSessionTime(elapsed);
      }, 1000);
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [currentSession]);
  
  // Format seconds to mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  // Start a session with voice
  const startVoiceSession = async () => {
    try {
      // Start backend session tracking
      const session = await startSession();
      
      // Start voice call
      await vapiService.startCall("Hello! I'm your wellness companion. How can I help you today?");
      
      // Update UI
      setIsSessionActive(true);
      
      toast({
        title: "Session Started",
        description: "Your AI companion is ready to talk with you.",
      });
    } catch (error) {
      console.error('Error starting voice session:', error);
      toast({
        title: "Session Start Failed",
        description: "Unable to start the session. Please try again.",
        variant: "destructive",
      });
    }
  };
  
  // End current session
  const handleEndSession = async () => {
    try {
      await endSession();
      await vapiService.stopCall();
      setIsSessionActive(false);
      
      // Refresh trial time data
      const updatedTrialData = await sessionService.getTrialTimeRemaining();
      setTrialTimeData(updatedTrialData);
      
      toast({
        title: "Session Ended",
        description: "Your session has been saved.",
      });
    } catch (error) {
      console.error('Error ending session:', error);
      toast({
        title: "Error",
        description: "Failed to end session properly.",
        variant: "destructive",
      });
    }
  };
  
  const getPlanInfo = () => {
    switch (user?.pricingPlan) {
      case 'pro':
        return {
          name: 'Professional Plan',
          features: ['Unlimited sessions', 'Priority support', 'Detailed analytics', 'Custom integrations'],
          color: 'bg-empathy-dark-purple'
        };
      case 'enterprise':
        return {
          name: 'Enterprise Plan',
          features: ['Dedicated account manager', 'Custom deployments', 'SLA guarantees', 'Advanced security'],
          color: 'bg-empathy-royal-gold'
        };
      default:
        return {
          name: 'Free Plan',
          features: ['10 minutes free trial', 'Basic analytics', 'Email support', 'Core features'],
          color: 'bg-empathy-purple'
        };
    }
  };
  
  const planInfo = getPlanInfo();
  
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Active Session Timer */}
      {isSessionActive && (
        <div className="bg-empathy-purple text-white p-4 rounded-lg mb-6 shadow-lg flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Clock className="h-6 w-6" />
            <div>
              <h3 className="font-medium">Active Session</h3>
              <p className="text-2xl font-bold">{formatTime(sessionTime)}</p>
            </div>
          </div>
          <Button 
            variant="outline" 
            className="text-white border-white hover:bg-white hover:text-empathy-purple"
            onClick={handleEndSession}
          >
            End Session
          </Button>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* User Profile */}
        <Card className="md:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-2xl">Welcome, {user?.fullName}</CardTitle>
              <CardDescription>{user?.email}</CardDescription>
            </div>
            <Button variant="outline" onClick={logout}>Sign Out</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium">Your Profile</h3>
                <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-500">Full Name</p>
                    <p>{user?.fullName}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-500">Email</p>
                    <p>{user?.email}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-500">Gender</p>
                    <p>{user?.gender ? user.gender : 'Not specified'}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-500">Member Since</p>
                    <p>April 2025</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium">Quick Actions</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Button 
                    size="sm" 
                    className="bg-empathy-purple hover:bg-empathy-dark-purple flex items-center gap-2"
                    onClick={startVoiceSession}
                    disabled={isSessionActive}
                  >
                    <Volume2 size={16} />
                    {isSessionActive ? "Session in Progress" : "Start a Voice Session"}
                  </Button>
                  <Button size="sm" variant="outline">View Reports</Button>
                  <Button size="sm" variant="outline">Update Profile</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Subscription Info */}
        <Card>
          <CardHeader>
            <CardTitle>Your Subscription</CardTitle>
            <CardDescription>Current plan details and usage</CardDescription>
          </CardHeader>
          <CardContent>
            <div className={`${planInfo.color} text-white rounded-md p-4 mb-4 shadow-inner`}>
              <h3 className="font-bold text-lg">{planInfo.name}</h3>
              {user?.pricingPlan === 'free' && trialTimeData && trialTimeData.remainingSeconds !== null && (
                <div className="mt-2">
                  <p className="text-sm opacity-90">
                    {Math.floor((trialTimeData.remainingSeconds || 0) / 60)} minutes remaining of your free trial
                  </p>
                  <div className="w-full bg-white/20 rounded-full h-2 mt-1">
                    <div 
                      className="bg-white h-2 rounded-full" 
                      style={{ width: `${trialTimeData.percentageRemaining || 0}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
            
            <h4 className="font-medium mb-2 text-sm">Plan Features:</h4>
            <ul className="space-y-2">
              {planInfo.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <svg className="w-4 h-4 text-empathy-purple" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            
            {user?.pricingPlan !== 'enterprise' && (
              <Button className="w-full mt-6 bg-gradient-to-r from-empathy-purple to-empathy-dark-purple hover:from-empathy-dark-purple hover:to-empathy-deep-purple">
                Upgrade Plan
              </Button>
            )}
          </CardContent>
        </Card>
        
        {/* Recent Activity */}
        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest sessions and interactions</CardDescription>
          </CardHeader>
          <CardContent>
            {isSessionActive ? (
              <div className="bg-empathy-soft-purple/20 border border-empathy-soft-purple/30 rounded-md p-4">
                <h4 className="font-medium text-empathy-dark-purple mb-2">Current Session</h4>
                <div className="flex items-center justify-between">
                  <div>
                    <p>Started: {new Date(currentSession?.startTime || '').toLocaleTimeString()}</p>
                    <p>Duration: {formatTime(sessionTime)}</p>
                  </div>
                  <Button 
                    variant="outline" 
                    className="border-empathy-purple text-empathy-purple hover:bg-empathy-soft-purple/20"
                    onClick={handleEndSession}
                  >
                    End Session
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-10 text-muted-foreground">
                <p>No recent activity to display.</p>
                <p className="mt-2 text-sm">Start a new session to see your activity here.</p>
                <Button 
                  className="mt-4 bg-empathy-purple hover:bg-empathy-dark-purple"
                  onClick={startVoiceSession}
                >
                  Begin a New Session
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
