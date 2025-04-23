
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  hoverEffect?: boolean;
}

export const GlassCard = ({
  children,
  className,
  intensity = 'medium',
  hoverEffect = true,
}: GlassCardProps) => {
  const intensityClasses = {
    low: 'bg-white/5 backdrop-blur-sm border-white/5',
    medium: 'bg-white/10 backdrop-blur-md border-white/10',
    high: 'bg-white/15 backdrop-blur-lg border-white/20',
  };

  return (
    <div
      className={cn(
        'rounded-xl border shadow-xl transition-all duration-300',
        intensityClasses[intensity],
        hoverEffect && 'hover:bg-white/15 hover:border-white/20 hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  );
};

interface BlobProps {
  className?: string;
  color?: string;
  size?: string;
  blur?: string;
  animation?: string;
}

export const Blob = ({
  className,
  color = 'bg-forsat-orange/20',
  size = 'w-64 h-64',
  blur = 'blur-3xl',
  animation = 'animate-pulse-slow',
}: BlobProps) => {
  return (
    <div 
      className={cn(
        'absolute rounded-full',
        size,
        color,
        blur,
        animation,
        className
      )}
    />
  );
};

export const FloatingElement = ({ 
  children,
  className,
  duration = 50,
  delay = 0,
  distance = 15
}: {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  distance?: number;
}) => {
  return (
    <div 
      className={cn('relative', className)}
      style={{
        animation: `gentle-float ${duration}s ease-in-out infinite ${delay}s`,
        '--float-distance': `${distance}px`
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
};
