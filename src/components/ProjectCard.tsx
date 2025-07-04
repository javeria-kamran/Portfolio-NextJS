import React from "react";
import Image from "next/image";
import {
  BugAntIcon,
  CodeBracketIcon,
  CommandLineIcon,
  CursorArrowRaysIcon,
  RocketLaunchIcon,
  ServerIcon,
} from "@heroicons/react/16/solid";

interface Props {
  title: string;
  tech1: string;
  tech2: string;
  tech3: string;
  tech4: string;
  image: string;
  description: string;
  link?: string; // New optional prop for project URL
}

const ProjectCard = ({
  title,
  image,
  tech1,
  tech2,
  tech3,
  tech4,
  description,
  link
}: Props) => {
  return (
    <div className="grid w-[80%] mx-auto pt-[5rem] grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      {/* Clickable Image Container */}
      <div
        className="p-4 rounded-xl relative cursor-pointer hover:-rotate-6 transform transition-all duration-200 bg-gray-800 shadow-md group"
        onClick={() => link && window.open(link, "_blank")}
      >
        <Image
          src={`${image}`}
          alt={title}
          width={500}
          height={500}
          className="object-contain rounded-xl mx-auto shadow-md group-hover:opacity-80 transition-opacity"
        />
        {link && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <RocketLaunchIcon className="h-12 w-12 text-cyan-400 animate-pulse" />
          </div>
        )}
      </div>

      {/* Project Details */}
      <div>
        <h1 className="text-[25px] text-white">{title}</h1>
        <p className="text-white opacity-65 text-[15px] mt-[1rem]">
          {description}
        </p>
        <div className="mt-[1.3rem] grid-cols-2 grid sm:grid-cols-3 xl:grid-cols-4 gap-[2rem]">
          <h1 title={tech1} className="px-6 py-3 bg-cyan-500 text-black rounded-lg text-center max-w-full truncate">
            {tech1}
          </h1>
          <h1 title={tech2} className="px-6 py-3 bg-cyan-600 text-white rounded-lg text-center max-w-full truncate">
            {tech2}
          </h1>
          <h1 title={tech3} className="px-3 py-3 bg-cyan-500 text-black rounded-lg text-center max-w-full truncate">
            {tech3}
          </h1>
          <h1 title={tech4} className="px-2 py-3 bg-cyan-600 text-white rounded-lg text-center max-w-full truncate">
            {tech4}
          </h1>
        </div>



        {/* Visit Project Button (conditionally rendered) */}
        {link && (
          <button
            onClick={() => window.open(link, "_blank")}
            className="mt-6 flex items-center gap-2 px-6 py-3 bg-cyan-700 hover:bg-cyan-600 text-white rounded-lg transition-colors"
          >
            <RocketLaunchIcon className="h-5 w-5" />
            Visit Project
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;