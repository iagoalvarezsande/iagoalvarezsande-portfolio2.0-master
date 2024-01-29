import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-full h-100 z-[100] bg-[#fafaf7] text-[#4a4a3a] ${
        scrolled ? "shadow-xl" : ""
      }`}
    >
      <div className="flex justify-between items-center w-full h-full px-10 2xl:px-16">
        <Image
          className="cursor-pointer"
          src="/Logo.png"
          alt="logo"
          width="60"
          height="10"
        />
        <div>
          <ul className="hidden md:flex text-[#6b6b57]">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b text-[#6b6b57]">
                HOME
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b text-[#6b6b57]">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b text-[#6b6b57]">
                Skills
              </li>
            </Link>
            <Link href="/#books">
              <li className="ml-10 text-sm uppercase hover:border-b text-[#6b6b57]">
                Books
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="cursor-pointer md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] md:w-[60%] sm:w-[45%] h-screen bg-[#fafaf7] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-out duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image src="/Logo.png" alt="logo" width="87" height="35" />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-[#d1d1c1] cursor-pointer p-3"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-[#d1d1c1] my-2">
              <p className="w-[85%] md:w-[90%] mb-1 text-[#6b6b57]">
                Let&apos;s Do Great Things Together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul>
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#Books">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Books
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="items-left uppercase tracking-widest text-[#6b6b57]">
                Let&apos;s Connect
              </p>
              <div className="flex my-4 items-center justify-between w-full sm:w-[80%]">
                <div className="relative group p-2 rounded-full shadow-lg shadow-[#d1d1c1] cursor-pointer hover:scale-105 ease-in-duration-300">
                  <FaLinkedinIn size={20} />
                </div>
                <div className="relative group p-2 rounded-full shadow-lg shadow-[#d1d1c1] cursor-pointer hover:scale-105 ease-in-duration-300">
                  <FaGithub size={20} />
                </div>
                <div className="relative group p-2 rounded-full shadow-lg shadow-[#d1d1c1] cursor-pointer hover:scale-105 ease-in-duration-300">
                  <AiOutlineMail size={20} />
                </div>
                <div className="relative group p-2 rounded-full shadow-lg shadow-[#d1d1c1] cursor-pointer hover:scale-105 ease-in-duration-300">
                  <BsFillPersonLinesFill size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
