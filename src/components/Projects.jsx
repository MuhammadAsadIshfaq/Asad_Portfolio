import React, { useEffect, useRef, useState } from "react";
import LinearGradient from "./LinearGradient";
import { motion, useInView } from "framer-motion";
import ImageCard from "./shared/ImageCard";
import DATA from "../constants";
import IconCloud from "./shared/magicui/icon_cloud";
import { IconCloudDemo } from "./shared/Icon_cloud";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Projects = ({ setSelectedPage }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    isInView && setSelectedPage("projects");
  }, [isInView]);

  return (
    <section id="projects" className="py-32 flex  flex-col items-center">
      {/* headings */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.4 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className=" selected flex flex-col justify-center items-center">
          <p className=" font-playfair font-semibold text-3xl  xs:text-4xl mb-5  ">
            <span className="text-red">PRO</span>JECTS
          </p>
          <LinearGradient width={"w-2/3"} />
        </div>

        <p className=" mt-10 mb-10">
          Here are some of the personal projects I have been working on since I
          started my journey in software development.
        </p>
      </motion.div>

      {/* projects */}
      <div className=" flex justify-center py-10  ">
        <motion.div
          className=""
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true, amount: 0.1 }}
        >
          <div ref={ref} className=" flex flex-wrap gap-8 justify-center">
            {DATA.projects.map((project, index) => (
              <motion.div variants={projectVariant} key={index}>
                <ImageCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <a
        href="https://github.com/MuhammadAsadIshfaq/"
        className="mt-10 font-opensans font-black  text-yellow  border border-gray-700 px-3 py-2 rounded-md text-sm"
      >
        For more projects visit my github
      </a>
    </section>
  );
};

export default Projects;
