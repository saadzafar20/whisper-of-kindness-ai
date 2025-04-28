
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

const DashboardPage = () => {
  const { user, logout } = useAuth();
  
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
          features: ['30 sessions per month', 'Basic analytics', 'Email support', 'Core features'],
          color: 'bg-empathy-purple'
        };
    }
  };
  
  const planInfo = getPlanInfo();
  
  return (
    <div className="container mx-auto px-4 py-16">
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
                  <Button size="sm" className="bg-empathy-purple hover:bg-empathy-dark-purple">Start a Session</Button>
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
              {user?.pricingPlan === 'free' && (
                <div className="mt-2">
                  <p className="text-sm opacity-90">30 days free trial remaining</p>
                  <div className="w-full bg-white/20 rounded-full h-2 mt-1">
                    <div className="bg-white h-2 rounded-full w-3/4"></div>
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
            <div className="text-center py-10 text-muted-foreground">
              <p>No recent activity to display.</p>
              <p className="mt-2 text-sm">Start a new session to see your activity here.</p>
              <Button className="mt-4 bg-empathy-purple hover:bg-empathy-dark-purple">Begin a New Session</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
