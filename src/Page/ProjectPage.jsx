import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "../Component/NavBar";
import Footer from "../Component/Footer";
import Portfolio from "../Component/Portfolio";
import { projects } from "../constants/projects";
import { BsArrowUpRightCircle } from "react-icons/bs";

const ProjectPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { id } = useParams();

  const project = useMemo(
    () => projects.find((pro) => pro.id?.toString() === id),
    [id]
  );

  return (
    <div className={isDarkMode ? "bg-slate-950 text-slate-100" : "bg-white text-slate-800"}>
      <NavBar isDarkMode={isDarkMode} changeTheme={setIsDarkMode} />

      <main className="section pt-28 sm:pt-32">
        <div className="mb-6">
          <Link
            to="/"
            className={isDarkMode ? "text-slate-300 hover:text-brand-300 font-semibold" : "text-slate-600 hover:text-brand font-semibold"}
          >
            ← Back to home
          </Link>
        </div>

        {project ? (
          <div className={`card overflow-hidden ${isDarkMode ? "bg-slate-900/60 border-slate-700/60" : ""}`}>
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 sm:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-white/80 text-sm">Project</p>
                <h1 className="text-white font-display text-3xl sm:text-4xl font-semibold">
                  {project.title}
                </h1>
              </div>
            </div>

            <div className="p-6 sm:p-8 grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h2 className="font-display text-2xl font-semibold">Overview</h2>
                <p className={isDarkMode ? "mt-3 text-slate-300 leading-relaxed" : "mt-3 text-slate-600 leading-relaxed"}>
                  {project.desc}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.demo ? (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary">
                      Live Demo <span className="ml-2"><BsArrowUpRightCircle /></span>
                    </a>
                  ) : null}
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className={isDarkMode ? "btn-ghost border-slate-700 text-slate-100 hover:bg-slate-900" : "btn-ghost"}
                    >
                      GitHub
                    </a>
                  ) : null}
                </div>
              </div>

              <aside className={`rounded-2xl border p-5 ${isDarkMode ? "border-slate-700 bg-slate-950" : "border-slate-200 bg-slate-50"}`}>
                <h3 className="font-semibold">Details</h3>
                <div className="mt-4 space-y-3 text-sm">
                  <div className="flex items-start justify-between gap-4">
                    <span className={isDarkMode ? "text-slate-400" : "text-slate-500"}>Date</span>
                    <span className="font-semibold">{project.date || "-"}</span>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <span className={isDarkMode ? "text-slate-400" : "text-slate-500"}>Tech</span>
                    <span className="font-semibold text-right">{project.libraries || project.frameWork || "-"}</span>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        ) : (
          <div className={`card p-6 ${isDarkMode ? "bg-slate-900/60 border-slate-700/60" : ""}`}>
            <p className={isDarkMode ? "text-slate-300" : "text-slate-600"}>
              Project not found.
            </p>
          </div>
        )}

        <div className="mt-16">
          <Portfolio isHome={false} isDarkMode={isDarkMode} />
        </div>
      </main>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default ProjectPage;
