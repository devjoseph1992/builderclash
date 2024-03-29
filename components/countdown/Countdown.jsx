import { useEffect, useState } from "react";

const Countdown = () => {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("11/13/2023 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
          <div className="flex items-center justify-center p-4">
            <div className="flex text-indigo">
              <div className="flex-col flex text-center">
                <span className="text-3xl">{days}</span>
                <span className="text-lg">Days</span>
              </div>
              <span className="text-3xl">:</span>
              <div className="flex-col flex text-center">
                <span className="text-3xl">{hours}</span>
                <span className="text-lg">Hours</span>
              </div>
              <span className="text-3xl">:</span>
              <div className="flex-col flex text-center">
                <span className="text-3xl">{minutes}</span>
                <span className="text-lg">Minutes</span>
              </div>
              <span className="text-3xl">:</span>
              <div className="flex-col flex text-center">
                <span className="text-3xl">{seconds}</span>
                <span className="text-lg">Seconds</span>
              </div>
            </div>
          </div>
    </>
  );
};

export default Countdown;