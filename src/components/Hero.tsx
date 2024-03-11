import Timer from "@/components/Timer";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import coming from "/public/hero/coming.png";
import mic from "/public/hero/mic.png";
import contact from "/public/navbar/contact.png";

const Hero = () => {
  const gradientStyle = {
    background:
      "linear-gradient(180deg, #000000 75%,#1A3732 85%, #7fCCC3 100%)",
  };

  return (
    <>
      <div className="h-screen " style={gradientStyle}>
        <div className=" pt-32 h-[80vh] font-sans flex flex-col lg:flex-row items-center justify-center mt-52 lg:mt-0">
          <div className="flex flex-col items-center md:flex-row md:justify-center">
            <div className="text-center p-10 mt-10 md:w-1/3">
              <h1 className="font-sans sm:text-3xl">
                <b className="text-xl">19th Edition </b>
                <span className="text-lg">
                  of one of the Largest Asian Parliamentary Debate in the India
                </span>
              </h1>
              <Link href="/contact">
                <button
                  className={`rounded-full border-none outline-none p-3 hover:scale-[1.14] duration-300 text-white text-xl mt-4`}
                  style={{
                    backgroundImage: `url(${contact.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  Contact Us
                </button>
              </Link>
            </div>
            <div className="text-white text-center md:w-1/3">
              <Image
                src={mic}
                alt=""
                className="h-[500px] w-[500px] mix-blend-screen"
                width={1000}
              />
            </div>
          </div>
          <div className=" container m-10 flex flex-col items-center justify-center md:left-10 2xl:left-0 md:w-1/3 mt-18 mb-18">
            <Image
              src={coming}
              alt=""
              className="px-2 w-8/12 max-w-40 xl:max-w-80"
              width={500}
            />
            <Timer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
