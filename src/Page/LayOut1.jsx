import React from "react";
import Hero from "../Component/Hero";
import About from "../Component/About";
import Experience from "../Component/Experience";
import Portfolio from "../Component/Portfolio";
import Contact from "../Component/Contact";

const LayOut1 = ({ isDarkMode }) => {
  const skills = [
    { name: "HTML 5", rate: "90" },
    { name: "CSS 3", rate: "80" },
    { name: "JS", rate: "85" },
    { name: "React", rate: "70" },
  ];

  return (
    <div className={isDarkMode ? "bg-slate-950 text-slate-100" : "bg-white text-slate-800"}>
      <Hero isDarkMode={isDarkMode} />
      <About skills={skills} isDarkMode={isDarkMode} />
      <Experience isDarkMode={isDarkMode} />
      <Portfolio isHome={true} isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
    </div>
  );
};

export default LayOut1;
