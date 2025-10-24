import React from "react";
import Hero from "../Component/Hero";
import About from "../Component/About";
import Experience from "../Component/Experience";
import Portfolio from "../Component/Portfolio";
import Contact from "../Component/Contact";
// import { ThemeContext } from "./Component/ThemeContext";
const LayOut1 = ({ isDarkMode }) => {
  // const { isDarkMode } = useContext(ThemeContext);

  const skills = [
    { name: "HTML 5", rate: "90" },
    { name: "CSS 3", rate: "80" },
    { name: "JS", rate: "85" },
    { name: "React", rate: "70" },
  ];
  return (
    <>
      <div className={`${isDarkMode ? "bg-[#1B2431] text-white" : "bg-white text-black"}`}>
        <Hero isDarkMode={isDarkMode}/>
        <About skills={skills} />
        <Experience />
        <Portfolio isHome={true}/>
        <Contact />
      </div>
    </>
  );
};

export default LayOut1;
