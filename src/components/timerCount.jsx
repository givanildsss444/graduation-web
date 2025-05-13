import { useState,useEffect } from "react";


export default function TimerCount() {

const targetDate = new Date('2026-01-31T19:00:00');

  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    days: 0,
    hours: 0,
  });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();

      if (now >= targetDate) {
        setTimeLeft({ months: 0, days: 0, hours: 0 });
        return;
      }

      let months =
        targetDate.getMonth() -
          now.getMonth() +
          12 * (targetDate.getFullYear() - now.getFullYear());

      let tempDate = new Date(now);
tempDate.setMonth(now.getMonth() + months);

      if (tempDate > targetDate) {
        months -= 1;
        tempDate = new Date(now.getFullYear(), now.getMonth() + months, now.getDate());
      }

      const diffMs = targetDate - tempDate;
      const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      const diffHours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);

      setTimeLeft({
        months,
        days: diffDays,
        hours: diffHours,
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 60 * 1000);
    return () => clearInterval(interval);
  }, []);


    return(

        <div className="timer-count">
            
            <h2 style={{ fontWeight: 'bold' }}>Faltam</h2>
            <h1 style={{ fontWeight: 'bold', fontSize: '28px' }}>
                {timeLeft.months} mes{timeLeft.months !== 1 ? 'es' : ''}, {timeLeft.days} dias e {timeLeft.hours} horas
            </h1>
            <p style={{ fontWeight: 'bold' }}>para nossa formatura</p>
  
        </div>

    )

}
