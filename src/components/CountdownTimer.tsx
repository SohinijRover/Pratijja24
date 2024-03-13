"use client";

import { useEffect, useState } from "react";

const CountDown = () => {
  const targetDate: any = new Date("March 15, 2024 24:00:00");
  const [timeRemaining, setTimeRemaining] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeRemaining() {
    const currentTime = new Date().getTime();
    const difference = targetDate - currentTime;
    return Math.max(0, difference);
  }

  const formatTime = (time: any) => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return (
    <div className="flex justify-around bg-dashboard-coundown px-3 max-w-xs py-4 mx-auto gap-3 md:gap-6 md:m-0 ">
      <CountdownPill time={formatTime(days)} title={"days"} />
      <CountdownPill time={formatTime(hours)} title={"hrs"} />
      <div className="w-4 flex flex-col justify-evenly pb-8 items-center">
        <div className="bg-gradient-to-b from-[#7CCBC1] to-[#0B8072] w-2 md:w-3 aspect-square rounded-full"></div>
        <div className="bg-gradient-to-b from-[#7CCBC1] to-[#0B8072] w-2 md:w-3 aspect-square rounded-full"></div>
      </div>
      <CountdownPill time={formatTime(minutes)} title={"min"} />
      <CountdownPill time={formatTime(seconds)} title={"sec"} />
    </div>
  );
};

export default CountDown;

function CountdownPill({ time, title }: { time: string; title: string }) {
  return (
    <div>
      <div className="gradient-button flex flex-col rounded-full text-xl md:text-3xl font-bold w-12 md:w-16 aspect-square justify-center items-center bg-gradient-to-b from-[#7CCBC1] to-[#0B8072]">
        <span>{time}</span>
      </div>
      <div className="text-center pt-2 text-lg md:text-xl font-bold bg-gradient-to-b from-[#7CCBC1] to-[#0B8072] bg-clip-text text-transparent capitalize">{title}</div>
    </div>
  );
}
