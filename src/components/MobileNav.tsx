import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/pratijja.png";

interface MobileNavProps {
  isOpen: boolean;
  toggleNavbar: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, toggleNavbar }) => {
  return (
    <div
      className={`fixed w-full inset-0 bg-black bg-opacity-50 z-50 ${isOpen ? "" : "hidden"
        }`}
      onClick={toggleNavbar}
    >
      <div
        className={`fixed text-white flex flex-col text-xl font-light font-roboto justify-between h-full w-[55vw] p-4 shadow-md top-0 left-0 ${isOpen ? "" : "hidden"
          }`}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'linear-gradient(to bottom, #062622 0%, #265A51 30%, #265A51 70%, #062622 100%)',
        }}
      >
        <ul className="p-2 text-3xl flex flex-col items-start justify-center space-y-6">
          <li className="mb-6">
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
          </li>

          <li className="hover:pl-3 duration-200">
            {" "}
            <Link href={"/"}>Home </Link>
          </li>

          <li className="hover:pl-2 duration-200">
            {" "}
            <Link href={"/about"}>About </Link>
          </li>
          {/* <li className="hover:pl-2 duration-200">
            {" "}
            <Link href={"/speakers"}>Speakers </Link>
          </li>
          <li className="hover:pl-2 duration-200">
            {" "}
            <Link href={"/members"}>Members </Link>
          </li> */}
          <li className="hover:pl-2 duration-200">
            {" "}
            <Link href={"/register"}>Register </Link>
          </li>
          <li className="hover:pl-2 duration-200">
            {" "}
            <Link href={"/contact"}>Contact Us </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
