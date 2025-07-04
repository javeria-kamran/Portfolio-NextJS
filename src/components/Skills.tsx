import React from "react";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div id="skills" className="pt-[5rem] pb-[3rem] bg-black">
      <div className="grid w-[80%] mx-auto grid-cols-1 lg:grid-cols-7 gap-[2rem] items center">
        <div className="col-span-3">
          <p className="heading_mini">Technical Profficencies</p>
          <h1 className="heading_primary">
            Unveiling Essential Skills
            <span className="text-cyan-600"> And </span> Proven Experience
          </h1>
          <p className="text-[15px] mb-[1.5rem] text-white opacity-70">
            As a versatile developer, I possess a strong foundation in web
            development, including both front-end and back-end technologies. I
            excel at crafting intuitive and visually appealing user interfaces,
            as well as building robust and efficient server-side applications.
            My problem-solving skills and attention to detail allow me to
            deliver high-quality solutions that meet client needs..
          </p>
          <button className="relative flex h-[50px] w-40 items-center justify-center font-semibold overflow-hidden bg-emerald-700 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-cyan-700 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
            <span className="relative z-10">Learn More</span>
          </button>
        </div>
        <div className="col-span-4">
          <div className="grid grid-cols-1 sm:grid-grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-[1rem] items-center">
            <div
              data-aos="flip-left"
              data-aos-anchor-placement=" top-center"
              data-aos-delay="200"
            >
              <SkillCard title="HTML" image="/html.svg" percent="97%" />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement=" top-center"
              data-aos-delay="400"
            >
              <SkillCard title="CSS" image="/css.svg" percent="85%" />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement=" top-center"
              data-aos-delay="600"
            >
              <SkillCard title="JavaScript" image="/js.svg" percent="98%" />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="200"
            >
              <SkillCard title="TypeScript" image="/ts.svg" percent="98%" />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="400"
            >
              <SkillCard title="Node Js" image="/node.svg" percent="85%" />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="600"
            >
              <SkillCard title="React" image="/react.svg" percent="85%" />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement=" top-center"
              data-aos-delay="1000"
            >
              <SkillCard title="Next.js" image="/nextjs.svg" percent="98%" />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="400"
            >
              <SkillCard title="MongoDB" image="/mongo.svg" percent="65%" />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="600"
            >
              <SkillCard title="Python" image="/python.svg" percent="98%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
