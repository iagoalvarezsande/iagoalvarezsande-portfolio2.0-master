import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div
      id="about"
      className=" w-full md:h-screen flex items-center py-16 px-10"
    >
      <div className=" md:px-40 max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#6b6b57]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-[#6b6b57]">
            As a <span className="font-bold">Technical Consultant</span>, I
            specialize in guiding businesses through the entire journey of
            implementing various cloud technologies, making operations more
            efficient and adaptable. I&apos;m genuinely enthusiastic about
            getting to know the ins and outs of a business, as well as
            understanding user behavior, so I can design architectures that not
            only solve problems but also bring joy.
          </p>
          <p className="py-2 text-[#6b6b57]">
            Coming from a background in the pharmaceutical and life sciences
            industry. I am proficient but not limited to
            <span className="font-bold">
              {" "}
              Clinical, Quality, Regulatory and CRM management systems.{" "}
            </span>
            Furthermore, I have and continue to specialize in
            <span className="font-bold"> AWS cloud architecture</span>, with a
            primary focus on designing solutions that are both cost and
            performance optimized, tailored to meet diverse business needs.
          </p>
          <p className="py-2 text-[#6b6b57]">
            To recharge, I love staying outside, be it surfing, skiing, running
            or traveling. I also enjoy a good read, specially in cloudy days.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest designs.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto rounded-full flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
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
