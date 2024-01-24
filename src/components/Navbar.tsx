"use client"
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/pratijja.png";
import contact from "/public/navbar/contact.png";

const MobileMenu = ({ closeMenu }) => {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-80 z-50">
      <div className="flex justify-end p-10 h-[150px]">
        <button className="text-white" onClick={closeMenu}>
          <FaTimes />
        </button>
      </div>
      <ul className="flex flex-col items-center h-full gap-10 items-center justify-center text-2xl">
        <li>
          <Link href="/about" onClick={closeMenu}>
            ABOUT
          </Link>
        </li>
        <li>
          <Link href="/event" onClick={closeMenu}>
            EVENT
          </Link>
        </li>
        <li>
          <Link href="/speaker" onClick={closeMenu}>
            SPEAKER
          </Link>
        </li>
        <li>
          <Link href="/issues" onClick={closeMenu}>
            CONTACT US
          </Link>
        </li>
      </ul>
    </div>
  );
};
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
    window.addEventListener("resize", handleResize);
    setWindowWidth(window.innerWidth);

    return () => {
      window.removeEventListener("scroll", changeBackground);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className={`w-screen transition duration-300 mr-12 ease-in-out fixed z-40 ${navbar ? 'top-0 bg-navBg/80 backdrop-blur-xl ' : ''} left-0 right-0`}>
      <div className={`flex mx-auto pr-8 px-8 2xl:px-0 ${navbar ? 'py-2' : 'py-4'} max-w-7xl justify-between items-center`}>
        <div>
          <Link href='/'>
            <Image
              src={logo}
              alt="MUN LOGO"
              className={"w-100"}
            />
          </Link>
        </div>
        {windowWidth > 768 ? (
          <ul className="hidden md:flex gap-20 lg:gap-10 m-5 p-5 items-center">
            <Link href="/about">ABOUT</Link>
            <Link href="/event">EVENT</Link>
            <Link href='/speaker'>SPEAKER</Link>
            <Link href="/issues">
              <button className="rounded-full border-none ms-5 outline-none p-3" style={{ backgroundImage: `url(${contact.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                CONTACT US
              </button>
            </Link>
          </ul>
        ) : (
          <div className="flex items-center">
            <button className="rounded-full border-none outline-none" onClick={toggleMobileMenu}>
              <FaBars />
            </button>
          </div>
        )}
      </div>
      {mobileMenuOpen && <MobileMenu closeMenu={closeMobileMenu} />}
    </div>
  );
};

export default Navbar;