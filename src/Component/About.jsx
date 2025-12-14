import imageAbout from "../assets/about.png";

const About = ({ skills, isDarkMode }) => {
  return (
    <section id="about" className="section">
      <div className="grid gap-10 md:grid-cols-2 items-center">
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-brand-100/60 blur-2xl" />
          <div className={`relative card overflow-hidden ${isDarkMode ? "bg-slate-900/60 border-slate-700/60" : ""}`}>
            <img
              src={imageAbout}
              alt="About illustration"
              className="w-full h-full object-contain p-6 md:p-8"
              loading="lazy"
            />
          </div>
        </div>

        <div className="space-y-5 text-center md:text-left">
          <p className="section-kicker">About</p>
          <h2 className="section-title">A little about me</h2>

          <p className={isDarkMode ? "text-slate-300 leading-relaxed" : "text-slate-600 leading-relaxed"}>
            I’m a Computer and Automation Engineering graduate, specializing in web application development.
            I work as a Frontend Developer using React, building modern, responsive, and user-friendly interfaces.
          </p>

          <div className={`card p-6 ${isDarkMode ? "bg-slate-900/60 border-slate-700/60" : ""}`}>
            <h3 className="font-display text-xl font-semibold mb-4">Skills</h3>

            <div className="space-y-4">
              {skills?.map((ele, index) => (
                <div className="w-full" key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">{ele.name}</span>
                    <span className={isDarkMode ? "text-slate-400 text-sm" : "text-slate-500 text-sm"}>
                      {ele.rate}%
                    </span>
                  </div>
                  <progress
                    className={`progress w-full h-3 appearance-none rounded-full overflow-hidden ${isDarkMode ? "bg-slate-800" : "bg-slate-100"}`}
                    value={ele.rate}
                    max={100}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            <span className="chip">Clean UI</span>
            <span className="chip">Responsive</span>
            <span className="chip">Detail-oriented</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
