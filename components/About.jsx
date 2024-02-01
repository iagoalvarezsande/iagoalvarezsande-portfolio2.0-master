import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className=" w-full md:h-fit flex items-center py-16 px-10">
      <div className=" md:px-40 max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className=" col-span-2">
          <p className="uppercase text-xl tracking-widest">About</p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2">
            As a <span className="font-bold">Technical Consultant</span>{" "}
            specializing in cloud technologies,
            <br />I guide businesses in efficient and adaptable operations.
            <br />
            With a background life sciences, I excel in solutions for{" "}
            <span className="font-bold">
              CRM, Clinical, Quality, and Regulatory systems.
            </span>
          </p>

          <p className="py-2">
            To recharge, I love staying outside, be it surfing, skiing, running
            or traveling. I also enjoy a good read, specially in cloudy days.
          </p>
        </div>
        <div className=" w-full h-auto m-auto flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src="/AvatarFace.png"
            width={700}
            height={700}
            className="sm:mt-8 items-center rounded-xl"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
