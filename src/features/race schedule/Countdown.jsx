import React, { useEffect, useState } from 'react';

function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const distance = new Date(targetDate) - now;  //difference in time

      if (distance <= 0) {
        setTimeLeft('Race has started.');
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);  //updates countdown every second
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
     <section className="countdown" aria-label="Countdown">
      <h2 id="countdown-title">Next Race Countdown</h2>
      <p className="countdown-timer" aria-live="polite">{timeLeft}</p>
    </section>
  );
}

export default Countdown;

