import profileImage from "../assets/profile-image.png";

const Hero = ({ isDarkMode }) => {
  return (
    <section id="hero" className="section relative overflow-hidden pt-28 sm:pt-32 scroll-mt-28">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -left-20 h-80 w-80 rounded-full bg-brand-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-lavender-200/40 blur-3xl" />

      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="relative z-10 text-center md:text-left">
          <p className="section-kicker">Frontend Developer • React</p>

          <h1 className="section-title mt-3">
            Hi, I’m <span className="text-brand">Merna</span> ✨
          </h1>

          <p className="section-subtitle mt-4 max-w-xl mx-auto md:mx-0">
            I build clean, responsive, and user-friendly web interfaces with a soft, modern touch —
            focusing on clarity, accessibility, and delightful details.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-2">
            <span className="chip">React</span>
            <span className="chip">Tailwind</span>
            <span className="chip">UI Refinement</span>
            <span className="chip">Responsive Design</span>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a href="/Merna Resume.pdf" download="Merna_Resume.pdf" className="btn-primary">
              Download Resume
            </a>
            <a href="#contact" className="btn-ghost">
              Let’s Talk
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            {isDarkMode ? "Dark mode is on" : "Light mode is on"} • Scroll to explore my work
          </p>
        </div>

        <div className="relative z-10 flex items-center justify-center">
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-gradient-to-b from-brand-200/50 to-lavender-200/30 blur-2xl" />
            <div className="relative rounded-full p-2 bg-white/80 backdrop-blur border border-slate-200/70 shadow-soft">
              <img
                src={profileImage}
                alt="Profile"
                className="h-72 w-72 sm:h-80 sm:w-80 md:h-[380px] md:w-[380px] object-cover rounded-full"
              />
            </div>

            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
              <div className="card px-5 py-3 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-mint-500" />
                <span className="text-sm font-semibold">Available for opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
