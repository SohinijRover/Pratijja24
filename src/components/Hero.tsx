import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaArrowRight,
  FaImage,
  FaRegCalendarAlt,
  FaDownload,
} from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
// import HeroMobileView from "./HeroMobileView";
import mic from "/public/hero/mic.png";
import coming from "/public/hero/coming.png";
import Timer from "@/components/Timer";
import contact from "/public/navbar/contact.png";

const Hero = () => {
  return (
    <>
      <div
        className="font-sans flex justify-center mt-10 bg-gradient-to-t from-page-purple from-0% to-trasparent to-20%"
      >
        <div className="w-6/12 flex h-screen">
          <div className="align-middle text-center grid content-center pl-100 w-full">
            <h1 className="p-5 font-sans text-4xl text-center w-full">
              Get Inside in The <br /> Philosopher’s Mind
            </h1>
            <Link href="/issues">
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
          <div className="p-0 w-full m-0 flex-col justify-endself-end">
            <Image src={mic} alt="" className="m-0 w-fit" width={600} />
          </div>
        </div>
        <div className="grid text-center w-6/12 justify-items-center content-center">
          <Image
            src={coming}
            alt=""
            className="px-2"
            width={600}
          />
          <Timer />
        </div>
      </div>
    </>
  );
};

export default Hero;
