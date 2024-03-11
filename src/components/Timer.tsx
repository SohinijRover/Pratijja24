

import React from "react";
import CountdownTimer from "./CountdownTimer";
import Image from "next/image";


const Timer: React.FC = () => {
  const targetDate = new Date("2024-03-15T23:59:59");
  console.log(targetDate);

  return (
    <>
        <div className="h-auto flex items-center justify-end pe-12 my-auto translate-x-10 mt-6 pr-16">
            <div className="text-center textxl sm:text-3xl font-semibold text-transparent bg-clip-text bg-grey">
                <CountdownTimer targetDate={targetDate} />
            </div>
        </div>
    </>
  );
};

export default Timer;