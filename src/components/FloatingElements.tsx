
import React from 'react';

interface FloatingElementsProps {
  count?: number;
  className?: string;
}

const FloatingElements: React.FC<FloatingElementsProps> = ({ 
  count = 10,
  className = ''
}) => {
  const elements = Array.from({ length: count }, (_, i) => i);
  
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {elements.map((index) => {
        // Randomize properties for each element
        const size = Math.floor(Math.random() * 40) + 20; // 20-60px
        const left = `${Math.floor(Math.random() * 90)}%`;
        const top = `${Math.floor(Math.random() * 90)}%`;
        const delay = Math.floor(Math.random() * 5);
        const opacity = (Math.floor(Math.random() * 5) + 1) / 10; // 0.1-0.5
        
        // Randomly choose between circle and rounded square
        const isCircle = Math.random() > 0.5;
        
        // Randomly choose a color class
        const colorClasses = [
          'bg-empathy-purple/20',
          'bg-empathy-soft-purple/20',
          'bg-empathy-soft-blue/20',
          'bg-empathy-sky-blue/20',
        ];
        
        const colorClass = colorClasses[Math.floor(Math.random() * colorClasses.length)];
        
        return (
          <div
            key={index}
            className={`absolute ${colorClass} animate-float ${isCircle ? 'rounded-full' : 'rounded-2xl'}`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: left,
              top: top,
              opacity: opacity,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingElements;
