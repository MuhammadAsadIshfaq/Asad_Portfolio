import { Globe } from "lucide-react";
import React from "react";

const ImageCard = ({ project }) => {
  const technologies = project.technologies.split(",");
  return (
    <div className="border border-zinc-700 w-full max-w-[350px] sm:w-[350px] h-full  rounded-md bg-opaque-black  p-2 flex flex-col gap-4  ">
      <img
        src={project.imglink}
        className="w-full h-[180px]  object-fit  "
        // hover:scale-90 hover:object-contain transition-all

        alt="project img "
      />

      <div className="   flex flex-col gap-4 p-2 ">
        <div className="flex justify-between">
          <p className=" font-opensans font-semibold text-base text-white">
            {project.title}{" "}
          </p>
          <p className="font-opensans text-sm text-gray-400">2023</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {technologies.map((d, index) => (
            <div className="py-2 px-3 card_bg rounded-md">
              <p className=" text-white font-opensans text-sm">{d}</p>
            </div>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          className="  font-opensans flex items-center gap-2 text-sm text-white bg-zinc-500 w-fit py-2 px-3  rounded-md"
        >
          Github <Globe width={14} height={14} />
        </a>
      </div>
    </div>
  );
};

export default ImageCard;
