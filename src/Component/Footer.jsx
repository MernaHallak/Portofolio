import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";

const Footer = ({ isDarkMode }) => {
  const wrapCls = isDarkMode ? "bg-slate-950 text-slate-100 border-t border-slate-800/70" : "bg-white text-slate-800 border-t border-slate-200/70";

  return (
    <footer className={wrapCls}>
      <div className="container mx-auto px-5 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-2xl font-semibold">
              Merna<span className="text-brand">.</span>
            </p>
            <p className={isDarkMode ? "text-slate-400 mt-1" : "text-slate-500 mt-1"}>
              Built with React + Tailwind • Soft, friendly portfolio UI
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/share/192XgVXPnw/"
              target="_blank"
              rel="noreferrer"
              className={`h-10 w-10 rounded-full flex items-center justify-center border transition-colors ${
                isDarkMode
                  ? "border-slate-700 hover:bg-slate-900"
                  : "border-slate-200 hover:bg-brand-50"
              }`}
              aria-label="Facebook"
            >
              <FaFacebookF className={isDarkMode ? "text-slate-100" : "text-brand"} />
            </a>

            <a
              href="https://www.linkedin.com/in/merna-hallak-a633a636a/"
              target="_blank"
              rel="noreferrer"
              className={`h-10 w-10 rounded-full flex items-center justify-center border transition-colors ${
                isDarkMode
                  ? "border-slate-700 hover:bg-slate-900"
                  : "border-slate-200 hover:bg-brand-50"
              }`}
              aria-label="LinkedIn"
            >
              <LiaLinkedinIn className={isDarkMode ? "text-slate-100" : "text-brand"} size={20} />
            </a>

            <a
              href="https://www.instagram.com/merna_hallak?igsh=cHNzNzdwb2t0a2Fy"
              target="_blank"
              rel="noreferrer"
              className={`h-10 w-10 rounded-full flex items-center justify-center border transition-colors ${
                isDarkMode
                  ? "border-slate-700 hover:bg-slate-900"
                  : "border-slate-200 hover:bg-brand-50"
              }`}
              aria-label="Instagram"
            >
              <FaInstagram className={isDarkMode ? "text-slate-100" : "text-brand"} />
            </a>
          </div>
        </div>

        <div className={`mt-8 text-sm ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
          © {new Date().getFullYear()} Merna. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
