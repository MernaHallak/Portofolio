import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const Contact = ({ isDarkMode }) => {
  const cardCls = isDarkMode ? "bg-slate-900/60 border-slate-700/60" : "";

  return (
    <section id="contact" className="section">
      <div className="text-center md:text-left">
        <p className="section-kicker">Contact</p>
        <h2 className="section-title">
          Let’s discuss your <span className="text-brand">project</span>
        </h2>
        <p className={`section-subtitle mt-3 max-w-2xl mx-auto md:mx-0 ${isDarkMode ? "text-slate-300" : ""}`}>
          If you have an idea, a role, or a collaboration in mind — send a message and I’ll get back to you.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className={`card p-6 space-y-5 ${cardCls}`}>
          <div className="flex items-center gap-4">
            <div className={`h-12 w-12 rounded-2xl flex items-center justify-center ${isDarkMode ? "bg-slate-800" : "bg-brand-50"}`}>
              <IoCallOutline size={22} className={isDarkMode ? "text-brand-300" : "text-brand"} />
            </div>
            <div>
              <p className={isDarkMode ? "text-slate-400 text-sm" : "text-slate-500 text-sm"}>Call me</p>
              <p className="font-semibold">+963 997 224 089</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className={`h-12 w-12 rounded-2xl flex items-center justify-center ${isDarkMode ? "bg-slate-800" : "bg-brand-50"}`}>
              <MdOutlineMailOutline size={22} className={isDarkMode ? "text-brand-300" : "text-brand"} />
            </div>
            <div>
              <p className={isDarkMode ? "text-slate-400 text-sm" : "text-slate-500 text-sm"}>Email</p>
              <p className="font-semibold break-all">mernahalla@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className={`h-12 w-12 rounded-2xl flex items-center justify-center ${isDarkMode ? "bg-slate-800" : "bg-brand-50"}`}>
              <CiLocationOn size={22} className={isDarkMode ? "text-brand-300" : "text-brand"} />
            </div>
            <div>
              <p className={isDarkMode ? "text-slate-400 text-sm" : "text-slate-500 text-sm"}>Location</p>
              <p className="font-semibold">Damascus, Syria</p>
            </div>
          </div>

          <div className={`rounded-2xl p-4 ${isDarkMode ? "bg-slate-900 border border-slate-700/60" : "bg-brand-50 border border-brand-100"}`}>
            <p className="font-semibold">Tip</p>
            <p className={isDarkMode ? "text-slate-300 mt-1 text-sm" : "text-brand-800 mt-1 text-sm"}>
              Share your goals, timeline, and links — I’ll respond faster and more accurately.
            </p>
          </div>
        </div>

        <div className={`card p-6 lg:col-span-2 ${cardCls}`}>
          <form className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Your name"
                className={`w-full rounded-2xl border px-4 py-3 outline-none transition-colors ${
                  isDarkMode
                    ? "bg-slate-950 border-slate-700 focus:border-brand-300"
                    : "bg-white border-slate-200 focus:border-brand"
                }`}
              />
              <input
                type="email"
                placeholder="Your email"
                className={`w-full rounded-2xl border px-4 py-3 outline-none transition-colors ${
                  isDarkMode
                    ? "bg-slate-950 border-slate-700 focus:border-brand-300"
                    : "bg-white border-slate-200 focus:border-brand"
                }`}
              />
            </div>

            <input
              type="tel"
              placeholder="Phone number (optional)"
              className={`w-full rounded-2xl border px-4 py-3 outline-none transition-colors ${
                isDarkMode
                  ? "bg-slate-950 border-slate-700 focus:border-brand-300"
                  : "bg-white border-slate-200 focus:border-brand"
              }`}
            />

            <textarea
              placeholder="Message"
              className={`w-full resize-none rounded-2xl border px-4 py-3 outline-none transition-colors ${
                isDarkMode
                  ? "bg-slate-950 border-slate-700 focus:border-brand-300"
                  : "bg-white border-slate-200 focus:border-brand"
              }`}
              rows={6}
            />

            <button type="button" className={isDarkMode ? "btn-primary" : "btn-primary"}>
              Send Message
            </button>

            <p className={isDarkMode ? "text-slate-400 text-sm" : "text-slate-500 text-sm"}>
              (This form is UI-only — connect it to email/service later if needed.)
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
