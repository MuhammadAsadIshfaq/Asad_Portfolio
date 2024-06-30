import React, { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import hamburg from "../assets/menu-icon.svg";
import close from "../assets/close-icon.svg";
import { motion } from "framer-motion";

const Link = ({ page, selectedPage, setSelectedPage, closePopup }) => {
  const lowerCasePage = page.toLowerCase();
  // console.log(selectedPage);
  const [styling, setStyling] = useState();
  const application = () => {
    return setStyling("text-red");
  };

  useEffect(() => {
    setStyling();
  }, [selectedPage]);
  setTimeout(() => {
    application();
  }, 250);

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? styling : ""
      } hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => {
        return (
          setSelectedPage(lowerCasePage), closePopup((prevValue) => !prevValue)
        );
      }}
    >
      {page}
    </AnchorLink>
  );
};

const LinkNames = ({ selectedPage, setSelectedPage, closePopup }) => {
  return (
    <>
      <Link
        page="Home"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        closePopup={closePopup}
      />
      <Link
        page="Skills"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        closePopup={closePopup}
      />
      <Link
        page="Projects"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        closePopup={closePopup}
      />
      {/* <Link
        page="Testimonials"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        closePopup={closePopup}
      /> */}
      <Link
        page="Contact"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        closePopup={closePopup}
      />
    </>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-[#fff1] ";

  useEffect(() => {
    setIsMenuToggled(false);
  }, [isAboveSmallScreens]);

  return (
    <nav
      className={` ${""} z-40 w-full max-w-[1440px] fixed top-4  flex flex-col items-center justify-center`}
    >
      <div
        className={`${navbarBackground} w-[95%] h-full absolute -z-10 backdrop-blur-md transition-all duration-200 border border-zinc-700  rounded-full `}
      />
      <div className="flex items-center justify-between mx-auto w-5/6 py-4 z-50 ">
        <h4 className=" font-playfair text-3xl font-bold ">Rana</h4>
        {/* desktop navbar */}
        {isAboveSmallScreens ? (
          <div className=" flex justify-between gap-16 font-opensans text-sm font-semibold  ">
            <LinkNames
              setSelectedPage={setSelectedPage}
              selectedPage={selectedPage}
              closePopup={setIsMenuToggled}
            />
          </div>
        ) : (
          <button
            className=" rounded-full bg-red p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img src={hamburg} alt="menu-icon" className=" bg-transparent" />
          </button>
        )}
        {/*  Mobile menu popup  */}
        {/* {!isAboveSmallScreens && setIsMenuToggled(false)} */}
        {/* className=
        {`fixed right-[-300px] bottom-0  h-full  w-[300px] ${
          isMenuToggled && "translate-x-[-300px] duration-500"
        } ${!isMenuToggled && "translate-x-[300px] duration-300"} popup `} */}
        {isMenuToggled && !isAboveSmallScreens && (
          <motion.div
            className="fixed bottom-0 right-0 h-full w-full bg-[#ffg1] backdrop-blur-xl "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {/* close button */}
            <div className=" flex  justify-end p-12 ">
              <button
                onClick={() => setIsMenuToggled(!isMenuToggled)}
                className="  h-auto right-0"
              >
                <img src={close} alt="close-icon" className=" bg-transparent" />
              </button>
            </div>

            {/* menu items */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-white">
              <LinkNames
                setSelectedPage={setSelectedPage}
                selectedPage={selectedPage}
                closePopup={setIsMenuToggled}
              />
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
