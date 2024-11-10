import React from "react";
import Image from "next/image";
import { SparklesIcon, StarIcon } from "@heroicons/react/16/solid";

interface Props {
  image: string;
  user: string;
  role: string;
}

const ClientReviewCard = ({ image, user, role }: Props) => {
  return (
    <div className="m-2 hover:bg-gray-700 transition-all duration-300 rounded-lg">
      <div className="border-2 p-4 border-gray-700 rounded-xl">
        <Image
          src={`${image}`}
          alt={user}
          height={70}
          width={70}
          className="rounded-full mx-auto mt-[2rem]"
        />
        <div>
          <SparklesIcon className="w-[6rem] text-white opacity-15 fixed" />
        </div>
        <p className="text-[15px] text-white opacity-65 mt-[3rem] text-center">
          The development team consistently delivered high-quality work and
          demonstrated a deep understanding of the project's goals. Their
          effective communication and problem-solving skills were invaluable in
          ensuring the project's success. The final product exceeded
          expectations, and we are very pleased with the outcome.!
        </p>
        <div className="flex items-center space-x-1 justify-center mt-[0.4rem]">
          <StarIcon className="w-[1.4rem] h-[1.4rem] text-cyan-800" />
          <StarIcon className="w-[1.4rem] h-[1.4rem] text-cyan-800" />
          <StarIcon className="w-[1.4rem] h-[1.4rem] text-cyan-800" />
          <StarIcon className="w-[1.4rem] h-[1.4rem] text-cyan-800" />
          <StarIcon className="w-[1.4rem] h-[1.4rem] text-cyan-800" />
        </div>
        <div>
          <SparklesIcon className="w-[6rem] right-0 text-white opacity-15 fixed" />
        </div>
        <h1 className="text-[20px] text-center text-white mt-[2rem] font-medium">
          {user}
        </h1>
        <p className="text-cyan-600 text-[18px] text-center mb-[3rem]">
          {role}
        </p>
      </div>
    </div>
  );
};

export default ClientReviewCard;
