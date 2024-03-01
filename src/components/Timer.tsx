

import React from "react";
import CountdownTimer from "./CountdownTimer";
import Image from "next/image";


const Timer: React.FC = () => {
  const targetDate = new Date("2024-03-15T23:59:59");
  console.log(targetDate);

  return (
    <>
        <div className="h-auto flex items-center justify-end pe-12 my-auto translate-x-10">
            <div className="text-center text-4xl sm:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#445DB6] to-[#7860C5]">
                <CountdownTimer targetDate={targetDate} />
            </div>
        </div>
    </>
  );
};

export default Timer;