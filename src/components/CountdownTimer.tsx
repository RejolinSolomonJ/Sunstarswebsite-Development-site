import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  // Set launch date: 14 days from now
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 14);
  
  const calculateTimeLeft = () => {
    const difference = launchDate.getTime() - new Date().getTime();
    
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
  
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
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
    <div className="w-full">
      <p className="text-lg text-gray-300 mb-4">Website Launch In:</p>
      <div className="flex justify-center gap-4">
        {timeBlocks.map((block, index) => (
          <div key={index} className="flex flex-col items-center min-w-[80px]">
            <div className="bg-gray-900 shadow-lg rounded-lg w-full py-3 px-2 mb-2 border border-primary-900">
              <span className="text-3xl font-bold text-primary-500 block text-center">
                {block.value < 10 ? `0${block.value}` : block.value}
              </span>
            </div>
            <span className="text-sm text-gray-400">{block.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;