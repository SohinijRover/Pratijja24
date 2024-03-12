"use client";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import logo from "/public/navbar/pratijjalogo.png";
import kiit from "/public/navbar/kiit.png";
import ksac from "/public/navbar/ksac.png";
import contact from "/public/navbar/contact.png";
import PratijjaDropdown from "./PratijjaDropdown";

const Navbar = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 10) {
        setShowBackground(true);
      } else setShowBackground(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <MobileNav isOpen={isOpen} toggleNavbar={toggleNavbar} />
      <nav
        className={`${showBackground && "backdrop-blur-[80px]"
          } top-0  fixed  z-[50] left-0 right-0  `}
      >
        <div
          className={`flex max-w-[1900px] mx-auto justify-between w-full p-4 lg:px-20 py-2 rounded-sm items-center text-white`}
        >
          <div className="hidden sm:flex h-10 w-16 me-52">
            <Image src={kiit} alt="kiit logo" height={100} width={100}  />
            <Image src={ksac} alt="ksac logo" height={100} width={100} className=" ps-4"/>
          
          </div>
          <div className="flex-shrink-0">
            {!isOpen && (
              <Link href={"/"}>
                <Image
                  src={logo}
                  alt="pratijja logo"
                  width={100}
                  height={50}
                  quality={50}
                  className="w-28 md:w-44 pt-1 lg:pt-2"
                />
              </Link>
            )}
          </div>
          <div className="hidden sm:flex justify-between items-center  text-xl space-x-4 p-4 ">
            <Link href={"/"} className={`hover:scale-[1.14] pl-16 duration-300 ${pathname === "/" && "text-green-500"}`}>
              Home
            </Link>
            <Link href={"/about"} className={`hover:scale-[1.14] duration-300 ${pathname === "/about" && "text-green-500"}`}>
              About
            </Link>
            {/* <Link href={"/speakers"} className={`hover:scale-[1.14] duration-300 ${pathname === "/events" && "text-green-500"}`}>
              Speakers
            </Link>
            <Link href={"/members"} className={`hover:scale-[1.14] duration-300 ${pathname === "/members" && "text-green-500"}`}>
              Members
            </Link> */}
            <div className='relative group'>
              <span
                className='cursor-pointer rounded-full border-none outline-none p-3 hover:scale-[1.14] duration-300 text-white text-xl mt-4'
                style={{
                  backgroundImage: `url(${contact.src})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                Register
              </span>
              <PratijjaDropdown />
            </div>


          </div>

          <button className=" sm:hidden" onClick={toggleNavbar}>
            <Image
              src="/mobiilenav.svg"
              alt="mb"
              width={28}
              height={9}
            ></Image>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;