
import React, { useEffect, useRef, useState } from 'react';

interface ScrollFadeProps {
  children: React.ReactNode;
  threshold?: number;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export const ScrollFade: React.FC<ScrollFadeProps> = ({
  children,
  threshold = 0.1,
  delay = 0,
  direction = 'up',
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(currentRef);
        }
      },
      { threshold }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay, threshold]);

  const getTransformValue = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return 'translateY(30px)';
        case 'down':
          return 'translateY(-30px)';
        case 'left':
          return 'translateX(30px)';
        case 'right':
          return 'translateX(-30px)';
        default:
          return 'translateY(30px)';
      }
    }
    return 'translate(0, 0)';
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransformValue(),
      }}
    >
      {children}
    </div>
  );
};

interface ParallaxProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export const Parallax: React.FC<ParallaxProps> = ({
  children,
  speed = 0.1,
  className = '',
}) => {
  const [offsetY, setOffsetY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { top } = ref.current.getBoundingClientRect();
        const offset = window.scrollY;
        setOffsetY(offset);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      style={{
        transform: `translateY(${offsetY * speed}px)`,
      }}
    >
      {children}
    </div>
  );
};

interface Reveal3DProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}

export const Reveal3D: React.FC<Reveal3DProps> = ({
  children,
  className = '',
  maxTilt = 10,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [tiltPosition, setTiltPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const tiltX = ((x - centerX) / centerX) * maxTilt;
    const tiltY = ((y - centerY) / centerY) * maxTilt;
    
    setTiltPosition({ x: tiltX, y: -tiltY });
  };

  const resetTilt = () => {
    setTiltPosition({ x: 0, y: 0 });
    setIsHovering(false);
  };

  return (
    <div
      ref={ref}
      className={`transform-3d-hover transition-transform duration-300 ${className}`}
      style={{
        transform: isHovering ? `perspective(1000px) rotateY(${tiltPosition.x}deg) rotateX(${tiltPosition.y}deg)` : 'none',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={resetTilt}
    >
      {children}
    </div>
  );
};
