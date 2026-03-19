"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date("2026-04-20T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (!isClient || !timeLeft) return <div className="h-24" />;

  const isReleased = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

  if (isReleased) {
    return (
      <div className="flex flex-col gap-4 animate-in fade-in">
        <a href="https://instagram.com/kiefdot" target="_blank" rel="noopener noreferrer" className="inline-block border border-accent-green bg-accent-green text-background px-12 py-4 uppercase tracking-[0.2em] text-sm hover:bg-transparent hover:text-accent-green transition-all duration-500 text-center">
          Available on Instagram
        </a>
        <p className="text-muted text-sm tracking-wide opacity-80 text-center">First release will be available exclusively via Instagram</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start gap-4 mt-4">

      <p className="text-xs uppercase tracking-[0.3em] text-accent-green">
        First release — April 20
      </p>

      <div className="flex gap-8 text-3xl md:text-4xl font-light tracking-wide">
        <div className="flex flex-col items-center">
          <span>{timeLeft.days}</span>
          <span className="text-[10px] text-gray-400 mt-1">D</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{timeLeft.hours}</span>
          <span className="text-[10px] text-gray-400 mt-1">H</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{timeLeft.minutes}</span>
          <span className="text-[10px] text-gray-400 mt-1">M</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{timeLeft.seconds}</span>
          <span className="text-[10px] text-gray-400 mt-1">S</span>
        </div>
      </div>

      <a
        href="https://instagram.com/kief"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 px-6 py-3 bg-accent-green text-black text-xs tracking-[0.2em] uppercase hover:opacity-90 transition"
      >

      </a>

    </div>
  );
}
