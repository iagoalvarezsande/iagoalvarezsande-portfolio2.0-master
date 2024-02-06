import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

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
      className={`fixed w-full h-100 z-[100] bg-[#111] text-gray-600 ${
        scrolled ? "shadow" : ""
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
          <ul className="hidden md:flex text-gray-200">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b text-gray-200">
                HOME
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b text-gray-200">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b text-gray-200">
                Skills
              </li>
            </Link>
            <Link href="/#books">
              <li className="ml-10 text-sm uppercase hover:border-b text-gray-200">
                Books
              </li>
            </Link>
          </ul>
          <div
            onClick={handleNav}
            className="text-gray-200 cursor-pointer md:hidden"
          >
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
              ? "fixed left-0 top-0 w-[75%] md:w-[60%] sm:w-[45%] h-screen bg-[#111] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-out duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image src="/Logo.png" alt="logo" width="87" height="35" />
              <div
                onClick={handleNav}
                className="rounded-full text-gray-200 cursor-pointer p-3"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-[#d1d1c1] my-2">
              <p className="w-[85%] md:w-[90%] mb-1 text-gray-200">
                Let&apos;s Do Great Things Together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col text-gray-200">
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
              <Link href="/#books">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Books
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="items-left uppercase tracking-widest text-gray-200">
                Let&apos;s Connect
              </p>
              <div className="flex my-4 items-center justify-between w-full sm:w-[80%]">
                <div className="relative group p-2 rounded-full  cursor-pointer hover:scale-105 ease-in-duration-300">
                  <FaLinkedinIn size={20} />
                </div>
                <div className="relative group p-2 rounded-full  cursor-pointer hover:scale-105 ease-in-duration-300">
                  <FaGithub size={20} />
                </div>
                <Link href="https://iagoas.hashnode.dev">
                  <div className="relative group p-2 rounded-full  cursor-pointer hover:scale-105 ease-in-duration-300">
                    <SiHashnode size={20} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
