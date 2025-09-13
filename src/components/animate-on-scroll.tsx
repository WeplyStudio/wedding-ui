"use client";

import { useRef, useEffect, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?:
    | "fade-in"
    | "fade-in-up"
    | "fade-in-down"
    | "fade-in-left"
    | "fade-in-right"
    | "zoom-in";
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  as?: React.ElementType;
}

export function AnimateOnScroll({
  children,
  animation = "fade-in-up",
  delay = 0,
  duration = 3.5,
  threshold = 0.1,
  className,
  as: Component = "div",
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Elemen masuk ke viewport → trigger animasi
          setIsVisible(true);
        } else {
          // Elemen keluar viewport → reset agar bisa animasi ulang
          setIsVisible(false);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return (
    <Component
      ref={ref}
      className={cn(
        "transition-opacity",
        isVisible ? `animate-${animation} opacity-100` : "opacity-0",
        className
      )}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        animationFillMode: "forwards",
      }}
    >
      {children}
    </Component>
  );
}
