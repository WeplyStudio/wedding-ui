
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
    
    // Set initial time left to avoid flash of 00s
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
    // Render a placeholder or initial state on the server
    return (
       <div className={cn("flex justify-center gap-2 md:gap-4", className)}>
        {['Days', 'Hours', 'Minutes', 'Seconds'].map((label) => (
          <div key={label} className="bg-black/20 border border-white/20 p-3 rounded-lg shadow-lg backdrop-blur-sm w-16 md:w-20 flex flex-col items-center justify-center">
            <span className="text-2xl md:text-3xl font-bold font-serif text-white text-shadow">00</span>
            <span className="text-[10px] md:text-xs font-sans text-white/80 uppercase tracking-wider mt-1">{label}</span>
          </div>
        ))}
      </div>
    );
  }


  return (
    <div className={cn("flex justify-center items-stretch gap-2 md:gap-4", className)}>
      {timeUnits.map(({ value, label }) => (
        <div key={label} className="bg-black/20 border border-white/20 p-3 rounded-lg shadow-lg backdrop-blur-sm flex-1 flex flex-col items-center justify-center">
          <span className="text-2xl md:text-3xl font-bold font-serif text-white text-shadow">{value !== undefined ? String(value).padStart(2, '0') : '00'}</span>
          <span className="text-[10px] md:text-xs font-sans text-white/80 uppercase tracking-wider mt-1">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
