"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/pratijja.png";
import contact from "/public/navbar/contact.png";

import MobileNav from "./MobileNav";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const [showBackground, setShowBackground] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 20) {
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
      <nav
        className={`${
          showBackground && "lg:backdrop-blur-[80px]"
        } top-0  fixed  z-[50] left-0 right-0  `}
      >
        <div className="flex max-w-[1900px] mx-auto justify-between w-full  p-4 md:p-5 lg:px-20 lg:py-6 rounded-sm items-center text-white">
          <Link href="/">
            <Image
              src={typeof logo === "string" ? logo : logo.src}
              alt="MUN LOGO"
              className={"w-100"}
              width={200}
              height={100}
              placeholder="empty"
            />
          </Link>
          <button
            className="md:hidden" // Show only on smaller screens
            onClick={toggleNavbar}
          >
            {/* Add an icon or text for the mobile nav toggle */}
            Toggle Mobile Nav
          </button>
          <MobileNav isOpen={isOpen} toggleNavbar={toggleNavbar} />

          <div className="flex items-center justify-center text-lg font-light font-roboto  lg:text-[24px] hidden md:flex space-x-8">
            <Link href={"/about"} className="hover:scale-[1.14] pl-16 duration-300">
              About
            </Link>
            <Link href={"/events"} className="hover:scale-[1.14] duration-300">
              Events
            </Link>
            <Link href={"/speakers"} className="hover:scale-[1.14] duration-300">
              Speakers
            </Link>
            <Link href="/issues" className="">
              <button className="rounded-full border-none ms-5 outline-none p-3" style={{ backgroundImage: `url(${contact.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                CONTACT US
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
