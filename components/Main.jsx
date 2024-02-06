import Link from "next/link";
import React from "react";
import { SiHashnode } from "react-icons/si";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className=" bordr h-screen text-center">
      <div className="max-w-[1240px]  h-full p-2 flex flex-col justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest  hover:">
            LET&apos;S DO SOMETHING TOGETHER
          </p>
          <h1 className="py-4">
            Hi, I&apos;m <span> Iago</span>
          </h1>
          <h1 className="py-2 ">A Technical Consultant</h1>
          <p className="py-4 sm:max-w-[70%] m-auto">
            I’m focused on implementing optimum cloud-based technologies with a
            focus on the life sciences industry.
          </p>
          <div className="flex flex-wrap justify-center items-center max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/iago-alvarez-sande-8b703b17b/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full bg-gray-200 bg-opacity-5 p-6 m-2 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/iagoalvarezsande"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full  bg-gray-200 bg-opacity-5 p-6 m-2 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link href="https://iagoas.hashnode.dev/">
              <div className="rounded-full  bg-gray-200 bg-opacity-5 p-6 m-2 cursor-pointer hover:scale-110 ease-in duration-300">
                <SiHashnode />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
