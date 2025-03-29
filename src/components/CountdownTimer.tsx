
import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  // Set your event date here - this is one month from current date
  const eventDate = new Date();
  eventDate.setMonth(eventDate.getMonth() + 1);
  
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +eventDate - +new Date();
    
    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };
  
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearTimeout(timer);
  });
  
  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];
  
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-12 heading-gradient">
          EVENT COUNTDOWN
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {timeBlocks.map((block, index) => (
            <div 
              key={block.label}
              className="glass-card w-20 md:w-32 h-24 md:h-32 flex flex-col items-center justify-center rounded-lg animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="text-3xl md:text-5xl font-bold text-white">
                {block.value.toString().padStart(2, '0')}
              </div>
              <div className="text-xs md:text-sm text-white/60">
                {block.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
