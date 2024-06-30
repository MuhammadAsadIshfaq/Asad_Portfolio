import React, { useEffect, useRef } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion, useInView } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "./SocialMediaIcons";
import DATA from "../constants";

const Landing = ({ setSelectedPage }) => {
  const isAboveMMediumScreens = useMediaQuery("(min-width: 1060px)");

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    // console.log(isInView);
    isInView && setSelectedPage("home");
  }, [isInView]);

  // console.log([window.MouseEvent]);
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center 
      md:h-full gap-14 py-10 w-full mx-auto"
    >
      {/* image section */}

      <div className=" md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32 ">
        {isAboveMMediumScreens ? (
          <div
            className=" relative z-0 ml-16 before:absolute before:-top-14 
            before:-left-12 before:rounded-t-[400px] 
          before:w-full h-max  before:border-2 before:border-blue before:h-full before:z-[-1] "
          >
            <img
              src="/assets/newdp.jpg"
              alt="profile"
              className=" rounded-t-full hover:filter hover:saturate-150 
              transition duration-500 z-10 w-[400px]"
            />
          </div>
        ) : (
          <img
            src="/assets/newdp.jpg"
            alt="profile"
            className=" rounded-t-full px-8 hover:filter hover:saturate-150
             transition duration-500 z-10 min-w-[300px] max-w-[400px]"
          />
        )}
      </div>

      {/* main section */}
      <div className=" z-30 basis-2/5 mt-12 md:mt-32    ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className=" text-4xl xs:text-5xl font-playfair md:text-start text-center font-semibold  ">
            Muhammad
            <div className=" mt-3 xs:mt-4">
              Asad {"    "}
              <span
                ref={ref}
                className=" text-[30px] xs:text-[42px] relative text-deep-blue font-semibold z-20 before:content-brush 
              before:scale-[0.5]  before:left-[-80px]  xs:before:scale-[0.7]   before:absolute 
              before:top-[-90px] xs:before:top-[-82px]  xs:before:left-[-60px] before:z-[-2]  "
              >
                Ishfaq
              </span>
            </div>
          </div>
          <p
            className=" mt-6 xs:mt-8 text-xs sm:text-base text-center md:text-start
           mx-auto md:max-w-[400px] md:ml-0 xs:px-14 px-6 md:px-0  "
          >
            {DATA.header.description}
          </p>
        </motion.div>
        <motion.div
          className="flex mt-5 justify-center md:justify-start gap-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="   hover:bg-gradient-rainblue text-white rounded-md p-3 text-center font-bold
             transition duration-500 border border-zinc-700  font-playfair md:w-1/2 w-1/4 min-w-fit "
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className=" rounded-md  p-3 md:w-1/2 w-1/4 min-w-fit  text-center transition hover:bg-gradient-rainblue duration-500 border border-zinc-700 "
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div
              className="  w-full 
              h-full flex justify-center items-center
             font-playfair   font-bold text-white"
            >
              Let's talk
            </div>
          </AnchorLink>
        </motion.div>
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
