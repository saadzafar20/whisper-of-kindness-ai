
import { useState, useEffect } from 'react';

interface VoiceWaveformProps {
  isActive?: boolean;
  color?: string;
}

const VoiceWaveform = ({ isActive = true, color = 'bg-empathy-purple' }: VoiceWaveformProps) => {
  const [heights, setHeights] = useState<number[]>([5, 7, 12, 8, 10, 15, 9, 14, 11, 6]);

  useEffect(() => {
    if (!isActive) return;
    
    const interval = setInterval(() => {
      const newHeights = heights.map(() => Math.floor(Math.random() * 16) + 4);
      setHeights(newHeights);
    }, 100);
    
    return () => clearInterval(interval);
  }, [isActive, heights]);

  return (
    <div className="waveform-container">
      {heights.map((height, index) => (
        <div
          key={index}
          className={`waveform-bar ${color}`}
          style={{ 
            height: isActive ? `${height}px` : '5px',
            transition: 'height 0.1s ease-in-out'
          }}
        />
      ))}
    </div>
  );
};

export default VoiceWaveform;
