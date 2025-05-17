
import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, loading, token } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    // If not authenticated after loading is complete, redirect to auth page
    if (!loading && !isAuthenticated) {
      navigate('/auth', { replace: true });
    }
  }, [isAuthenticated, loading, navigate]);
  
  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-empathy-purple"></div>
      </div>
    );
  }
  
  // If not authenticated and done loading, redirect to login
  if (!isAuthenticated && !loading) {
    return <Navigate to="/auth" replace />;
  }
  
  // If authenticated, render the protected content
  return <>{children}</>;
};

export default ProtectedRoute;
