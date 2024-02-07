import Image from "next/image";
import Link from "next/link";
import React from "react";
import mic from "/public/hero/mic.png";
import coming from "/public/hero/coming.png";
import Timer from "@/components/Timer";
import contact from "/public/navbar/contact.png";

const Hero = () => {
  return (
    <>
      <div className="h-screen font-sans flex flex-col md:flex-row items-center justify-center bg-gradient-to-t from-page-purple from-0% to-transparent to-20% max-h-[100vh]">
        <div className="text-center p-10  md:w-1/3">
          <h1 className="font-sans text-3xl sm:text-3xl">
            Get Inside in The <br /> Philosopher’s Mind
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
        <div className="text-white text-center mt-4 md:w-1/3">
          <Image
            src={mic}
            alt=""
            className="h-full w-full md:h-[50%] md:w-full object-cover"
            width={600}
          />
        </div>
        <div className=" container m-10 flex flex-col items-center justify-center mt-4 md:left-10 2xl:left-0 md:w-1/3">
          <Image src={coming} alt="" className="px-2" width={600} />
          <Timer />
        </div>
      </div>
    </>
  );
};

export default Hero;
