import Timer from "@/components/Timer";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CountDown from "./CountdownTimer";
import coming from "/public/hero/coming.png";
import mic from "/public/hero/mic.png";
import contact from "/public/navbar/contact.png";

const Hero = () => {
  const gradientStyle = {
    background: "linear-gradient(180deg, #000303 80.03%, #78C2B9 100%)",
  };

  const shadowStyle = {
    textShadow:
      "1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff",
  };

  const prizeShadow = {
    textShadow:
      "2px 2px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff",
  };

  return (
    <>
      <div className="min-h-screen pt-20" style={gradientStyle}>
        <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto justify-between">
          <div className="flex justify-center md:justify-start flex-shrink-0">
            <Image
              src="/hero/mic.png"
              alt="hero-mic-image"
              width={400}
              height={600}
              className="lg:w-[500px] md:h-[600px] mix-blend-screen"
            />
          </div>
          <div className="px-4 pt-4 flex flex-col justify-center items-end gap-8 md:gap-12">
            <div className="mx-auto">
              <div className="text-2xl md:text-5xl lg:text-7xl font-extrabold text-center md:text-right">
                <span style={shadowStyle} className="text-black">
                  19
                </span>
                <span
                  style={shadowStyle}
                  className="text-black text-base align-top"
                >
                  th
                </span>{" "}
                <span>EDITION</span>
              </div>
              <div className="font-bold text-xl md:text-2xl lg:text-3xl max-w-lg bg-gradient-to-b from-[#7FCCC3] to-[#077D6F] bg-clip-text text-transparent w-5/6 mx-auto break-words whitespace-pre-line text-center md:text-right md:w-full">
                of one of the Largest Asian Parliamentary Debate in the <div className="lg:text-center lg:pl-28">India</div>
              </div>
              <span></span>
            </div>
            <div className="md:pr-6 flex w-full justify-end">
              <CountDown />
            </div>
          </div>
        </div>
          <div className="text-center px-2 py-20 md:py-16 lg:py-10 text-xl md:text-3xl lg:text-5xl font-bold">
            <div>15<span className="text-sm align-top md:text-base">th</span> - 17 <span className="text-sm align-top md:text-base">th</span> March 2024</div>
            <div className="font-extrabold">Win prizes worth <span className="text-[#138678]" style={prizeShadow}>77k</span></div>
          </div>
      </div>
    </>
  );
};

export default Hero;
