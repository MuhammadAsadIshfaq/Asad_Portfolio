import React from "react";

const Sticky = ({ skill }) => {
  return (
    <div
      className={`flex border w-max px-3 py-2 rounded-md border-none card_bg text-sm `}
    >
      <p>{skill}</p>
    </div>
  );
};

const Card = ({ skills, title }) => {
  return (
    <div className="border flex flex-col flex-grow  min-w-[300px] gap-4 p-4 border-zinc-700 rounded-md bg-opaque-black ">
      <h3 className=" font-opensans text-white font-black sm:text-lg text-md capitalize">
        {title}
      </h3>
      <div className="flex  gap-2 flex-wrap ">
        {skills.map((skill) => (
          <Sticky key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Card;
