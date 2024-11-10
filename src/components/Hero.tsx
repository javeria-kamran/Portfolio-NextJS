import React from 'react'
import Image from "next/image";
import TypeWriteEffect from "./Helper/TypeWriteEffect";

const Hero = () => {
  return (
    <div
      id="home"
      className="w-[100vw] pt-[4vh] md:pt-[12vh] h-[85vh] md:h-[100vh] custom-bg"
    >
      <div className=" flex justify-center flex-col w-[90%] h-[100%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
          <div className="">
            <h1 data-aos="fade-right" className="text-[#c4cfde] mb-[1.3rem]">
              Welcome to my World
            </h1>
            <div data-aos="fade-left" data-aos-delay="400">
              <h1 className="xl:text-[50px] lg:text-[40px] sm:text-[30px] text-[25px] font-semibold leading-[2.6rem] text-white">
                {" "}
                <span className="font-logo"> </span> This is
                <span className="text-cyan-600"> JAVERIA KAMRAN </span>
              </h1>
              <TypeWriteEffect />
            </div>
            <p
              data-aos="fade-up"
              data-aos-delay="800"
              className="mt-[1.2rem] text-[15px] md:text-[17px] text-[#c4cfde]"
            >
              A versatile professional with a Bachelor's degree in Commerce and
              a strong foundation in accounting and finance. Proficient in web
              development, including frameworks, programming languages, and
              development tools, with expertise in leveraging AI and automation
              for innovative solutions. Fluent and flawless in English. Seeking
              a dynamic role that combines my financial acumen and technical
              skills to drive business growth and efficiency.!
            </p>

            <div className="mt-[2rem] flex items-center space-x-6">
              <button
                data-aos="zoom-in"
                data-aos-delay="1200"
                className="relative flex h-[50px] w-40 items-center justify-center font-semibold overflow-hidden bg-cyan-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-gray-800 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56"
              >
                <span className="relative z-10">Hire Me</span>
              </button>
              <button
                data-aos="zoom-out"
                data-aos-delay="1600"
                className="before:ease relative h-12 w-40 overflow-hidden bg-gray-800 text-white font-semibold  shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-cyan-800 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:rotate-180"
              >
                <span className="relative z-10">Download CV</span>
              </button>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="2000"
            className="hidden md:block"
          >
            <Image
              src="/cyan.png"
              alt="hero"
              width={400}
              height={400}
              className="object-contain my-9"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
