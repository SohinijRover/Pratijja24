"use client";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import logo from "/public/navbar/pratijjalogo.png";
import contact from "/public/navbar/contact.png";

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
        className={`${
          showBackground && "backdrop-blur-[80px]"
        } top-0  fixed  z-[50] left-0 right-0  `}
      >
        <div
          className={`flex max-w-[1900px]    mx-auto justify-between w-full  p-4  lg:px-20 py-2 rounded-sm items-center text-white`}
        >
          <div>
            {!isOpen && (
              <Link href={"/"}>
              <Image
                src={logo}
                alt="kiit logo"
                width={100}
                height={100}
                quality={50}
                className="w-40 lg:w-100 lg:h-100 sm:w-30 sm:h-30 m-4 pt-3"
              />
              </Link>
            )}
          </div>
          <div className="hidden sm:flex justify-between items-center  text-xl space-x-4 p-4 ">
            <Link href={"/"} className={`hover:scale-[1.14] pl-16 duration-300 ${pathname === "/" && "text-indigo-500"}`}>
              Home
            </Link>
            <Link href={"/about"} className={`hover:scale-[1.14] duration-300 ${pathname === "/about" && "text-indigo-500"}`}>
              About
            </Link>
            <Link href={"/speakers"} className={`hover:scale-[1.14] duration-300 ${pathname === "/events" && "text-indigo-500"}`}>
              Speakers
            </Link>
            <Link href={"/members"} className={`hover:scale-[1.14] duration-300 ${pathname === "/members" && "text-indigo-500"}`}>
              Members
            </Link>
            <Link href={"/register"} className={`hover:scale-[1.14] duration-300 ${pathname === "/register" && "text-indigo-500"}`}>
              Register
            </Link>
            <Link href="/contact">
              <button className={`rounded-full border-none outline-none p-3 hover:scale-[1.14] duration-300 ${pathname === "/contactus" && "text-indigo-500"}`} style={{ backgroundImage: `url(${contact.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                Contact Us
              </button>
            </Link>

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