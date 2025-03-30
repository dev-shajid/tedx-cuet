import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  // Set event date - using March 29, 2025 as an example since it's the current date you provided
  const eventDate = new Date('2025-06-30T00:00:00');
  
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +eventDate - +new Date();
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
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
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days, max: 365 },
    { label: 'Hours', value: timeLeft.hours, max: 24 },
    { label: 'Minutes', value: timeLeft.minutes, max: 60 },
    { label: 'Seconds', value: timeLeft.seconds, max: 60 },
  ];

  return (
    <section className="bg-black py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-2xl md:text-3xl font-bold mb-12 heading-gradient animate-fade-in">
          EVENT COUNTDOWN
        </h1>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {timeBlocks.map((block, index) => {
            const progress = (block.value / block.max) * 283; // 283 is approx circumference of circle with r=45
            
            return (
              <div 
                key={block.label}
                className="relative w-28 md:w-36 h-28 md:h-36 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Circular Progress Background */}
                <svg className="w-full h-full absolute top-0 left-0" viewBox="0 0 100 100">
                  <circle
                    className="text-white/10"
                    strokeWidth="6"
                    stroke="currentColor"
                    fill="transparent"
                    r="45"
                    cx="50"
                    cy="50"
                  />
                  {/* Progress Circle */}
                  <circle
                    className="text-tedred transition-all duration-1000 ease-linear"
                    strokeWidth="6"
                    strokeDasharray={`${progress}, 283`}
                    strokeDashoffset="0"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="45"
                    cx="50"
                    cy="50"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                
                {/* Content */}
                <div className="glass-card absolute inset-4 rounded-full flex flex-col items-center justify-center">
                  <div className="text-3xl md:text-4xl font-bold text-white animate-[pulse_2s_infinite]">
                    {block.value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-xs md:text-sm text-white/60">
                    {block.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Spotlight Effect */}
        <div className="spotlight" />
      </div>
    </section>
  );
};

export default CountdownTimer;