import Project from "./Project";
import ProjectsSlider from "./ProjectsSlider";
import { projects } from "../constants/projects";

const Portfolio = ({ isHome, isDarkMode }) => {
  const displayedProjects = isHome ? projects : projects;

  return (
    <section id="projects" className="section scroll-mt-28">
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <div>
          <p className="section-kicker">Portfolio</p>
          <h2 className="section-title">Featured projects</h2>
          <p className={`section-subtitle mt-3 max-w-2xl ${isDarkMode ? "text-slate-300" : ""}`}>
            A selection of projects I’ve worked on — focused on clean UI, solid structure, and responsive layouts.
          </p>
        </div>

        <a
          href="#contact"
          className={isDarkMode ? "btn-ghost border-slate-700 text-slate-100 hover:bg-slate-900" : "btn-ghost"}
        >
          Want something similar?
        </a>
      </div>

      <div className="mt-10">
        {isHome ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {displayedProjects.map((project, index) => (
              <Project key={index} {...project} />
            ))}
          </div>
        ) : (
          <ProjectsSlider yourCardsArray={displayedProjects} isDarkMode={isDarkMode} />
        )}
      </div>
    </section>
  );
};

export default Portfolio;
