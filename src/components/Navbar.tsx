"use client"

import { useState,useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/app/next.svg";

const Navbar = () => {

  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true)
    }
    else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    window.addEventListener("scroll",changeBackground)
  })

  return (
    <div className={`w-screen transition duration-300 mr-12 ease-in-out fixed z-40 ${navbar ? 'top-0 bg-navBg/80 backdrop-blur-xl ' : ''} left-0 right-0`}>
      <div className={`flex mx-auto pr-8 px-8 2xl:px-0 ${navbar ? 'py-2' : 'py-4'} max-w-7xl justify-between items-center`}>
        <div>
          <Link href='/'>
            <Image src={logo} alt="MUN LOGO" className={`${navbar ? 'w-[50px] h-[50px] lg:h-[70px] lg:w-[70px]' : 'w-[60px] h-[60px] lg:h-[90px] lg:w-[90px]'}`} />
          </Link>
        </div>
        <ul className="hidden md:flex gap-8 lg:gap-18 ">
          <Link href="about">About</Link>
          <div className='relative group'>
            <span className='cursor-pointer'>DELEGATE ZONE</span>
          </div>
          <Link href='/gallery'>Gallery</Link>
          <Link href='/department'>Secretariat</Link>
          <Link href="/issues">
            <button className="rounded-full border-none bg-buttonBackground px-4 py-1 outline-none">
            Facing Trouble?
            </button></Link>
        </ul>
      </div>
      <ul className="flex pt-6 pb-12 gap-8 items-center flex-col md:hidden ">
        <Link href="about" className=''>About</Link>
        <div className='flex flex-col items-center gap-4'>
          <div className='flex items-center gap-2'>
            <span>Delegate Zone</span>
          </div>
          <div className={`text-base flex-col gap-4 text-center`}>
            <Link href="/committees">Committees</Link>
            <Link href="/executive-board">Executive Board</Link>
            <Link href="/downloads">Downloads</Link>
          </div>
        </div>
        <Link href='/gallery'>Gallery</Link>
        <Link href='/department'>Secretariat</Link>
        <Link href="/issues">
          <button className="rounded-full border-none bg-buttonBackground px-4 py-1 outline-none">
              Facing Trouble?
          </button>
        </Link>
      </ul>
    </div>
  )
}
export default Navbar;