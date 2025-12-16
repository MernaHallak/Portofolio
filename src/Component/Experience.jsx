import frame from "../assets/frame.png";
import { FaArrowUpLong } from "react-icons/fa6";

const Experience = ({ isDarkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const items = [
    {
      title: "React Developer (Professional Experience at VICA)",
      desc:
        "I trained as a Front-End Developer at VICA using React.js for 3 months. Contributed to developing user interfaces for project management applications.",
    },
    {
      title: "Graduation Project (Smart Home System)",
      desc:
        "Developed a smart home system using IoT concepts, focusing on automation and user control via a web interface.",
    },
    {
      title: "Education",
      desc:
        "B.Sc. in Computer and Automation Engineering — focused on software fundamentals, automation, and modern web development.",
    },
  ];

  return (
    <section id="education" className="section scroll-mt-28">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="section-kicker">Education & Experience</p>
          <h2 className="section-title">My background</h2>
          <p className={`section-subtitle mt-3 max-w-2xl ${isDarkMode ? "text-slate-300" : ""}`}>
            A quick overview of the experiences and projects that shaped my skills and approach to building UI.
          </p>
        </div>

        <button
          onClick={scrollToTop}
          className={`hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all ${
            isDarkMode
              ? "border border-slate-700 text-slate-200 hover:bg-slate-900"
              : "border border-slate-200 text-slate-700 hover:bg-slate-50"
          }`}
          aria-label="Back to top"
        >
          <FaArrowUpLong />
          Top
        </button>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {items.map((it, idx) => (
          <div
            key={idx}
            className={`card p-6 flex gap-4 ${isDarkMode ? "bg-slate-900/60 border-slate-700/60" : ""}`}
          >
            <div className={`shrink-0 mt-1 h-10 w-10 rounded-2xl flex items-center justify-center ${
              isDarkMode ? "bg-slate-800" : "bg-brand-50"
            }`}>
              <img src={frame} alt="" className="h-6 w-6" />
            </div>

            <div>
              <h3 className="font-semibold text-lg leading-snug">{it.title}</h3>
              <p className={`mt-2 leading-relaxed ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                {it.desc}
              </p>
            </div>
          </div>
        ))}

        <div className={`card p-6 md:col-span-2 overflow-hidden relative ${isDarkMode ? "bg-slate-900/60 border-slate-700/60" : ""}`}>
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-lavender-200/40 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-brand-200/30 blur-3xl" />
          <div className="relative">
            <h3 className="font-display text-2xl font-semibold">What I care about</h3>
            <p className={`mt-3 leading-relaxed max-w-3xl ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
              I enjoy turning complex ideas into interfaces that feel simple, warm, and intuitive.
              I focus on spacing, hierarchy, and micro-interactions so the experience feels polished on every screen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
