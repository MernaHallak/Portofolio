import React, { useContext, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import Project from "./Project";

import { projects } from "../constants/projects";
import ProjectsSlider from "./ProjectsSlider";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Portfolio = ({ isHome }) => {
  // const displayedProjects = isHome ? projects : projects.slice(0, 3);
  const displayedProjects = projects;
  const [activeArrow, setActiveArrow] = useState("prev");

  return (
    <div id="projects" className=" pt-20 container mx-auto p-5 ">
      <p className="text-mainColor font-semibold mb-2">Portfolio</p>
      <div className=" relative pr-5 pb-20 flex justify-between ">
        <h1 className="text-4xl font-semibold ">
          {isHome ? (
            <>
              My Creative Works <span className="text-mainColor"> Latest</span>
            </>
          ) : (
            <>
              The Best <span className="text-mainColor"> Projects</span>
            </>
          )}
        </h1>
        {isHome ? (
          <a href="https://github.com/MernaHallak" target="_blank">
          <button className="flex items-center p-3 bg-mainColor text-white rounded-lg">
            View Github
              <MdArrowOutward />
          </button>
          </a>
        ) : (
          <div >
            <button
              className={`swiper-button-prev absolute ml-7  w-15 h-15 cursor-pointer  border border-mainColor rounded-full  z-10 ${
                activeArrow === "next" ? "bg-mainColor" : "bg-transparent"
              }`}
              onClick={() => setActiveArrow("next")}
            >
              <FiChevronRight size={24} />
            </button>
            <button
              className={`swiper-button-next absolute w-15 h-15 border  border-mainColor  cursor-pointer  rounded-full  ${
                activeArrow === "prev" ? "bg-mainColor" : "bg-transparent"
              } z-10`}
              onClick={() => setActiveArrow("prev")}
            >
              <FiChevronLeft size={24} />
            </button>
          </div>
        )}
      </div>

      {isHome ? (
        <div className="grid  md:grid-cols-3 sm:grid-cols-2 w-full	gap-8 ">
          {displayedProjects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      ) : (
        <>
          <ProjectsSlider yourCardsArray={displayedProjects} />
        </>
      )}                    
    </div>
  );
};

export default Portfolio;
