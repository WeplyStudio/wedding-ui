"use client";

import { useState, useEffect } from 'react';

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

const Countdown = ({ targetDate }: { targetDate: Date }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timeUnits: TimeUnit[] = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' },
  ];

  return (
    <div className="flex justify-center gap-4 md:gap-8">
      {timeUnits.map(({ value, label }) => (
        <div key={label} className="flex flex-col items-center p-2 rounded-lg min-w-[80px] md:min-w-[100px]">
          <span className="text-5xl md:text-7xl font-headline font-bold">{value || 0}</span>
          <span className="text-sm md:text-base font-body uppercase tracking-wider mt-1">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
