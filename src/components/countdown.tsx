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
    { value: timeLeft.days, label: 'Hari' },
    { value: timeLeft.hours, label: 'Jam' },
    { value: timeLeft.minutes, label: 'Menit' },
    { value: timeLeft.seconds, label: 'Detik' },
  ];

   if (!isClient) {
    return (
      <div className={cn("grid grid-cols-4 gap-2 md:gap-4 text-center", className)}>
        {['Hari', 'Jam', 'Menit', 'Detik'].map((label) => (
          <div key={label} className="bg-primary/10 p-3 rounded-lg shadow-inner">
            <span className="text-3xl md:text-4xl font-bold font-headline text-primary">0</span>
            <span className="text-xs md:text-sm font-body text-muted-foreground uppercase tracking-wider block">{label}</span>
          </div>
        ))}
      </div>
    );
  }


  return (
    <div className={cn("grid grid-cols-4 gap-2 md:gap-4 text-center", className)}>
      {timeUnits.map(({ value, label }) => (
        <div key={label} className="bg-primary/10 p-3 rounded-lg shadow-inner">
          <span className="text-3xl md:text-4xl font-bold font-headline text-primary">{value !== undefined ? String(value).padStart(2, '0') : '00'}</span>
          <span className="text-xs md:text-sm font-body text-muted-foreground uppercase tracking-wider block">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
