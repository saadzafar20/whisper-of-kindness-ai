
import React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Volume2 } from 'lucide-react';

interface SessionStartDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onStartSession: () => void;
  isNewUser?: boolean;
}

const SessionStartDialog = ({
  open,
  onOpenChange,
  onStartSession,
  isNewUser = false,
}: SessionStartDialogProps) => {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl flex items-center gap-2">
            <Volume2 className="h-5 w-5 text-empathy-purple" />
            {isNewUser ? 'Welcome to FeelCalm' : 'Start a Voice Session'}
          </AlertDialogTitle>
          <AlertDialogDescription className="pt-2">
            {isNewUser ? (
              <div className="space-y-3">
                <p>
                  Thank you for joining FeelCalm! Would you like to start your first voice session
                  with our AI companion?
                </p>
                <p>
                  This will use your microphone to allow natural conversation with our AI. You'll have
                  10 minutes of free trial time to experience how it works.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                <p>
                  You're about to start a voice session with our AI wellness companion.
                </p>
                <p>
                  This will use your microphone to allow for a natural conversation experience.
                  You can end the session at any time.
                </p>
              </div>
            )}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Maybe Later</AlertDialogCancel>
          <AlertDialogAction 
            onClick={onStartSession} 
            className="bg-empathy-purple hover:bg-empathy-dark-purple"
          >
            Start Voice Session
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SessionStartDialog;
