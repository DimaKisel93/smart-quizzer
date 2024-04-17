import { useEffect, useState } from 'react';

interface TimerProps {
  duration: number;
}

const Timer = ({ duration }:TimerProps) => {
  const [timeRemaining, setTimeRemaining] = useState<number>(duration);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <p>Time Remaining: {timeRemaining} seconds</p>
    </div>
  );
};

export default Timer;
