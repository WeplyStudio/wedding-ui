"use client";

import { useRef, useEffect, useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { useScroll } from '@/hooks/use-scroll';

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: 'fade-in' | 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right' | 'zoom-in';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

export function AnimateOnScroll({
  children,
  animation = 'fade-in-up',
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  className,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    if (!ref.current) return;

    const top = ref.current.offsetTop - window.innerHeight * (1 - threshold);
    const bottom = ref.current.offsetTop + ref.current.offsetHeight * threshold;
    
    if (scrollY >= top && scrollY <= bottom) {
      setIsVisible(true);
    }
  }, [scrollY, threshold]);


  return (
    <div
      ref={ref}
      className={cn(
        'transition-opacity',
        isVisible ? 'opacity-100' : 'opacity-0',
        isVisible && `animate-${animation}`,
        className
      )}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        animationFillMode: 'forwards'
      }}
    >
      {children}
    </div>
  );
}
