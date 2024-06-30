import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./components/Navbar";
import DotGroup from "./components/DotGroup";
import "./App.css";
import Landing from "./components/Landing";
import LinearGradient from "./components/LinearGradient";
import SkillSection from "./components/SkillSection";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

//ctrl + alt + t for tailwind docs

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMMediumScreens = useMediaQuery(" (min-width:1060px) ");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  // console.log(selectedPage);
  useEffect(() => {
    const handleScroll = () => {
      // console.log("change");
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app   ">
      {/* NAVBAR */}
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      {/* NAVIGATION BULLETS AND LANDING SECTION  */}
      <div className=" w-5/6 mx-auto md:h-full">
        {isAboveMMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>

      <LinearGradient width={"w-full"} />

      {/* SKILLS SECTION */}
      <div className=" w-5/6 mx-auto md:min-h-full">
        <SkillSection setSelectedPage={setSelectedPage} />
      </div>
      <LinearGradient width={"w-full"} />

      {/* PROJECTS SECTION */}

      <div className=" w-5/6 mx-auto ">
        <Projects setSelectedPage={setSelectedPage} />
      </div>
      <LinearGradient width={"w-full"} />

      {/* TESTIMONIALS SECTION */}
      {/* <div className=" w-5/6 md:h-full ">
        <Testimonials />
      </div> */}
      {/* <LinearGradient width={"w-full"} /> */}

      {/* CONTACT SECTION */}
      <div className=" w-5/6 md:h-full mx-auto ">
        <Contact setSelectedPage={setSelectedPage} />
      </div>
      <div className=" mx-auto ">
        <Footer />
      </div>
    </div>
  );
}

export default App;
