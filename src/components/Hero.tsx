import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaImage, FaRegCalendarAlt, FaDownload } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import mic from "/public/hero/mic.png";
import coming from "/public/hero/coming.png";
import Timer from "@/components/Timer";
import contact from "/public/navbar/contact.png";

const Hero = () => {
  return (
    <>
      <div className="h-screen font-sans flex flex-wrap justify-center mt-10 bg-gradient-to-t from-page-purple from-0% to-transparent to-20% max-h-[100vh]">

        {/* Left Content */}
        <div className="w-full md:w-6/12 flex flex-col md:flex-row">
          <div className="md:w-1/2 p-5 flex flex-col items-center justify-center sm:mt-20">
            <h1 className="font-sans text-4xl text-center">
              Get Inside in The <br /> Philosopher’s Mind
            </h1>
            <Link href="/register">
              <button
                className="rounded-full border-none ms-5 outline-none p-3 font-sans w-fit px-20 font-semibold text-2xl m-5"
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
          <div className="md:w-1/2 w-full relative">
            <Image src={mic} alt="" className="w-full md:w-fit" width={600} />
          </div>
        </div>

        {/* Right Content */}
        <div className="2xl:h-screen 2xl:flex 2xl:items-center w-full md:w-6/12 text-center justify-items-center content-center p-5 ">
          <div className="flex flex-col items-center justify-center md:left-10 2xl:left-0 ">
            <Image src={coming} alt="" className="px-2" width={600} />
            <Timer />
          </div>
        </div>

      </div>
    </>
  );
};

export default Hero;
