import { useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

const Contact = ({ isDarkMode }) => {
  const cardCls = isDarkMode ? "bg-slate-900/60 border-slate-700/60" : "";
  const [status, setStatus] = useState("idle"); 

  async function handleSubmit(e) {
    e.preventDefault();

   
    if (status === "sending") return;

    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

  
    formData.append("access_key", WEB3FORMS_KEY);
    formData.append("subject", "New message from portfolio");
    formData.append("from_name", "Merna Portfolio");

   
    const botcheck = formData.get("botcheck");
    if (botcheck) {
      setStatus("error");
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        console.error("Web3Forms error:", data);
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

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
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Honeypot (hidden) */}
            <input
              type="text"
              name="botcheck"
              tabIndex="-1"
              autoComplete="off"
              className="hidden"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <input
                name="name"
                type="text"
                required
                placeholder="Your name"
                className={`w-full rounded-2xl border px-4 py-3 outline-none transition-colors ${
                  isDarkMode
                    ? "bg-slate-950 border-slate-700 focus:border-brand-300"
                    : "bg-white border-slate-200 focus:border-brand"
                }`}
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Your email"
                className={`w-full rounded-2xl border px-4 py-3 outline-none transition-colors ${
                  isDarkMode
                    ? "bg-slate-950 border-slate-700 focus:border-brand-300"
                    : "bg-white border-slate-200 focus:border-brand"
                }`}
              />
            </div>

            <input
              name="phone"
              type="tel"
              placeholder="Phone number (optional)"
              className={`w-full rounded-2xl border px-4 py-3 outline-none transition-colors ${
                isDarkMode
                  ? "bg-slate-950 border-slate-700 focus:border-brand-300"
                  : "bg-white border-slate-200 focus:border-brand"
              }`}
            />

            <textarea
              name="message"
              required
              placeholder="Message"
              className={`w-full resize-none rounded-2xl border px-4 py-3 outline-none transition-colors ${
                isDarkMode
                  ? "bg-slate-950 border-slate-700 focus:border-brand-300"
                  : "bg-white border-slate-200 focus:border-brand"
              }`}
              rows={6}
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" ? (
              <p className={isDarkMode ? "text-emerald-300 text-sm" : "text-emerald-700 text-sm"}>
                ✅ Message sent! I’ll get back to you soon.
              </p>
            ) : null}

            {status === "error" ? (
              <p className={isDarkMode ? "text-rose-300 text-sm" : "text-rose-700 text-sm"}>
                ❌ Something went wrong. Please try again.
              </p>
            ) : null}

            <p className={isDarkMode ? "text-slate-400 text-sm" : "text-slate-500 text-sm"}>
              (This form sends directly to your email via Web3Forms.)
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
