import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-screen h-screen text-center">
      <div className="max-w-[1240px] w-screen h-full p-2 flex flex-col justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-[#6b6b57] hover:">
            LET&apos;S DO SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-[#4a4a3a]">
            Hi, I&apos;m{" "}
            <span className="text-[#3c0e06] hover:text-[#8c3333]"> Iago</span>
          </h1>
          <h1 className="py-2 text-[#4a4a3a]">A Technical Consultant</h1>
          <p className="py-4 text-[#6b6b57] sm:max-w-[70%] m-auto">
            I’m focused on implementing optimum cloud-based technologies with a
            focus on the life sciences industry.
          </p>
          <div className="flex flex-wrap justify-center items-center max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/iago-alvarez-sande-8b703b17b/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 m-2 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/iagoalvarezsande"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-[#d1d1c1] p-6 m-2 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-[#d1d1c1] p-6 m-2 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="/resume">
              <div className="rounded-full shadow-lg shadow-[#d1d1c1] p-6 m-2 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
