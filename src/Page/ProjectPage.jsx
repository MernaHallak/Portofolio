import React, { useEffect, useState } from "react";
import NavBar from "../Component/NavBar";
import Footer from "../Component/Footer";
import projectPrev from "../assets/projects.png";
import bar from "../assets/bar.png";
import { MdArrowOutward } from "react-icons/md";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import Portfolio from "../Component/Portfolio";
import { projects } from "../constants/projects";

const ProjectPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { id } = useParams();

  const project = projects.find((pro) => pro.id.toString() === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <div
      id="projects"
        className={`${
          isDarkMode ? "bg-[#1B2431] text-white" : "bg-white text-black"
        }`}
      >
        <NavBar isDarkMode={isDarkMode} changeTheme={setIsDarkMode} />
        <div className="pt-[100px] container p-5 mx-auto font-poppins ">
          <div className="flex items-stretch lg:flex-row flex-col gap-5 mb-10">
            <div className="basis-1/2 mb-9 ">
              <img src={project.image} alt={project.title} className="object-cover rounded-lg " />
            </div>
            <div className="basis-1/2">
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-lg mb-2">{project?.title}</p>
                    <a to={project.demo} target="_blank">
                      <BsArrowUpRightCircle size={30} color="#7DE0EA" />
                    </a>
                  </div>
                  <p className="text-slate-500 text-xs mb-2">{project?.date}</p>
                  <p className=" text-sm mb-2 whitespace-pre-wrap tracking-wide leading-7">
                    {project?.desc}
                  </p>
                  <p className="text-sm mb-2">
                    <span className="text-[18px]">Basics Languages:</span>
                    {project?.previewDesc}
                  </p>

                  {project.frameWork && (
                    <p className="font-bold text-sm mb-2">
                      Framework: {project.frameWork}
                    </p>
                  )}

                  {project.libraries && (
                    <p className="font-bold text-sm mb-2">
                      Libraries: {project?.libraries}
                    </p>
                  )}

                  {/* <p className="text-sm text-gray mb-2">{}</p> */}
                </div>
              </div>
              {project.github && (
                <a href={project.github} target="_blank">
                  <button className="flex items-center bg-[#7DE0EA] text-white p-2 px-3 rounded mt-4">
                    View Github
                    <MdArrowOutward />
                  </button>
                </a>
              )}
            </div>
          </div>
          <img src={bar} alt="" className="mb-10" />
          <Portfolio isHome={false} />
        </div>
        <Footer isDarkMode={isDarkMode} />
      </div>
    </>
  );
};

export default ProjectPage;
