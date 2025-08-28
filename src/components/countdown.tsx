"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

type TimeUnit = {
  value: number;
  label: string;
};

const calculateTimeLeft = (targetDate: Date): Record<string, number> => {
  const difference = +targetDate - +new Date();
  let timeLeft: Record<string, number> = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  } else {
    timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return timeLeft;
};

const Countdown = ({ targetDate, className }: { targetDate: Date, className?: string }) => {
  const [timeLeft, setTimeLeft] = useState<Record<string, number>>({});
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    setTimeLeft(calculateTimeLeft(targetDate));

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits: TimeUnit[] = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' },
  ];

   if (!isClient) {
    return (
       <div className={cn("grid grid-cols-4 gap-4 text-center", className)}>
        {['Days', 'Hours', 'Minutes', 'Seconds'].map((label) => (
          <div key={label} className="bg-background/10 border border-white/20 p-4 rounded-lg shadow-lg backdrop-blur-sm w-24">
            <span className="text-4xl font-bold font-serif text-white text-shadow">00</span>
            <span className="text-xs font-sans text-white/80 uppercase tracking-wider block mt-1">{label}</span>
          </div>
        ))}
      </div>
    );
  }


  return (
    <div className={cn("grid grid-cols-4 gap-4 text-center", className)}>
      {timeUnits.map(({ value, label }) => (
        <div key={label} className="bg-background/10 border border-white/20 p-4 rounded-lg shadow-lg backdrop-blur-sm w-24">
          <span className="text-4xl font-bold font-serif text-white text-shadow">{value !== undefined ? String(value).padStart(2, '0') : '00'}</span>
          <span className="text-xs font-sans text-white/80 uppercase tracking-wider block mt-1">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
