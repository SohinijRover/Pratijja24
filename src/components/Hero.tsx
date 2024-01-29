import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaImage, FaRegCalendarAlt, FaDownload } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
// import HeroMobileView from "./HeroMobileView";
import mic from "/public/hero/mic.png";
import Timer from "@/components/Timer";
import contact from "/public/navbar/contact.png";

const Hero = () => {
  return (
    <>
    <div className="lg:relative font-sans" style={{
        backgroundImage: "linear-gradient(180deg, #000000, #000000)"
      }}>
        <div className="top-1/2 left-70 transform -translate-y-1/2 text-white lg:absolute text-2xl p-5 grid place-items-center place-content-center">  
            <h1 className="p-5 font-sans">Get Inside in The <br /> Philosopher’s Mind
            </h1>
            <Link href="/issues">
              <button className="rounded-full border-none ms-5 outline-none p-3 font-sans" style={{ backgroundImage: `url(${contact.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                REGISTER
              </button>
            </Link>  
          </div>
        <div className="lg:absolute h-screen w-full flex items-center justify-center ">
          <Image src={mic} alt="" className=" w-50 pt-10  " width={600} />
        </div>
        
        <Timer />
    </div>
    </>
  )
};  

export default Hero ;
