import React, { useRef, useEffect } from "react";
import LinearGradient from "./LinearGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion, useInView } from "framer-motion";
import skillsImage from "../assets/skills-image.png";
import Card from "./shared/Card";
import DATA from "../constants";
import { IconCloudDemo } from "./shared/Icon_cloud";

const SkillSection = ({ setSelectedPage }) => {
  const isAboveMMediumScreens = useMediaQuery("(min-width: 1060px)");

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    // console.log(isInView);
    isInView && setSelectedPage("skills");
  }, [isInView]);
  // console.log(DATA);
  return (
    <section id="skills" className="   py-32  ">
      {/* header and image section */}
      <div className="md:flex md:justify-between md:gap-16 ">
        <motion.div
          className="md:basis-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className=" font-playfair font-semibold text-3xl  xs:text-4xl mb-5 ">
            My <span className="text-red">SKILLS</span>
          </p>
          <LinearGradient width={"w-1/3"} />
        </motion.div>
      </div>

      {/* skill  */}
      <div className="flex flex-col items-center xl:flex-row">
        <div
          ref={ref}
          className="flex justify-center flex-col mt-16 gap-8 w-full items-center "
        >
          <motion.div
            className="flex flex-row gap-4 flex-wrap  justify-start "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {DATA.skills.map((data, index) => (
              <Card skills={data.technologies} key={index} title={data.title} />
            ))}
          </motion.div>
          {/* <hr className="border border-zinc-500 border-b-0 w-[102%]" /> */}
          <motion.div
            className=" flex flex-grow w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="border border-zinc-700  p-4 gap-4 flex flex-col flex-wrap rounded-md    min-w-[300px] bg-opaque-black flex-grow">
              <h4 className="font-opensans text-white font-black sm:text-lg text-md">
                Languages
              </h4>
              <div className="flex gap-2 flex-wrap">
                {DATA.languages.map((language, index) => (
                  <div
                    key={index}
                    className="py-2  px-3
                border-none card_bg  rounded-md text-sm text-white"
                  >
                    {language}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        {/* <IconCloudDemo /> */}
      </div>
    </section>
  );
};

export default SkillSection;
