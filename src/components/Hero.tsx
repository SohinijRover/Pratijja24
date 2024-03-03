import Image from "next/image";
import Link from "next/link";
import React from "react";
import mic from "/public/hero/mic.png";
import coming from "/public/hero/coming.png";
import Timer from "@/components/Timer";
import contact from "/public/navbar/contact.png";

const Hero = () => {
  const gradientStyle = {
    background: "linear-gradient(180deg, #000000 75%,#1A3732 85%, #7fCCC3 100%)",
  };

  return (
    <>
      <div className="h-screen font-sans flex flex-col lg:flex-row items-center justify-center mt-40 lg:mt-0" style={gradientStyle}>
        <div className="text-center p-10 mt-10 md:w-1/3">
          <h1 className="font-sans text-3xl sm:text-3xl">
            Get Inside in The <br /> Philosopher&apos;s Mind
          </h1>
          <Link href="/register">
            <button
              className={`rounded-full border-none outline-none p-3 hover:scale-[1.14] duration-300 text-white text-xl mt-4`}
              style={{
                backgroundImage: `url(${contact.src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              REGISTER
            </button>
          </Link>
        </div>
        <div className="text-white text-center md:w-1/3">
          <Image
            src={mic}
            alt=""
            className="h-[400px] w-[300px] mix-blend-screen"
            width={1000}
          />
        </div>
        <div className=" container m-10 flex flex-col items-center justify-center md:left-10 2xl:left-0 md:w-1/3 mt-32">
          <Image src={coming} alt="" className="px-2 w-8/12" width={500} />
          <Timer />
        </div>
      </div>
      
    </>
  );
};

export default Hero;
