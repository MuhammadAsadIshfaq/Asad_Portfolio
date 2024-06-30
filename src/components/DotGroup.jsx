import React, { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Link = ({ selectedPage, setSelectedPage, page }) => {
  const [styling, setStyling] = useState();

  const application = () => {
    return setStyling(`relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full
   before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%] `);
  };

  useEffect(() => {
    setStyling();
  }, [selectedPage]);
  setTimeout(() => {
    application();
  }, 800);

  return (
    <AnchorLink
      className={`${
        selectedPage === page ? styling : " bg-dark-gray"
      } w-3 h-3 rounded-full  transition duration-500  `}
      href={`#${page}`}
      onClick={() => {
        return setSelectedPage(page);
      }}
    />
  );
};

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  return (
    <div className=" z-50 flex flex-col gap-6 fixed top-[60%] right-7 ">
      <Link
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        page="home"
      />
      <Link
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        page="skills"
      />
      <Link
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        page="projects"
      />
      {/* <Link
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        page="testimonials"
      /> */}
      <Link
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        page="contact"
      />
    </div>
  );
};

export default DotGroup;
