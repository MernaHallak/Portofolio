import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const NavBar = ({ isDarkMode, changeTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Hero", to: "/#hero" },
    { label: "About", to: "/#about" },
    { label: "Education", to: "/#education" },
    { label: "Projects", to: "/#projects" },
    { label: "Contact", to: "/#contact" },
  ];

  const headerCls = isDarkMode
    ? "bg-slate-950/70 text-slate-100 border-b border-slate-800/70"
    : "bg-white/70 text-slate-800 border-b border-slate-200/70";

  return (
    <header className={`fixed z-50 top-0 left-0 w-full backdrop-blur ${headerCls}`}>
      <div className="container mx-auto px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            className={`md:hidden inline-flex items-center justify-center rounded-xl border p-2 ${
              isDarkMode ? "border-slate-700 hover:bg-slate-900" : "border-slate-200 hover:bg-slate-50"
            }`}
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle menu"
            type="button"
          >
            {isOpen ? <IoClose size={22} /> : <FaBars size={18} />}
          </button>

          <Link to="/#hero" className="cursor-pointer font-display text-xl sm:text-2xl font-semibold">
            Merna<span className="text-brand">.</span>
          </Link>
        </div>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            {links.map((l) => (
              <li key={l.to} className="list-none">
                <Link
                  to={l.to}
                  className={`cursor-pointer text-sm font-semibold transition-colors ${
                    isDarkMode ? "hover:text-brand-300" : "hover:text-brand"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <button
            className={`inline-flex items-center justify-center rounded-xl border p-2 transition-colors ${
              isDarkMode ? "border-slate-700 hover:bg-slate-900" : "border-slate-200 hover:bg-slate-50"
            }`}
            onClick={() => changeTheme((prev) => !prev)}
            aria-label="Toggle theme"
            type="button"
          >
            {isDarkMode ? <IoIosSunny size={22} /> : <FaMoon size={18} />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="md:hidden">
          <div className="container mx-auto px-5 pb-5">
            <div className={`card p-4 ${isDarkMode ? "bg-slate-900/80 border-slate-700/70" : ""}`}>
              <ul className="space-y-2">
                {links.map((l) => (
                  <li key={l.to} className="list-none">
                    <Link
                      to={l.to}
                      onClick={() => setIsOpen(false)}
                      className={`block rounded-xl px-3 py-2 font-semibold transition-colors ${
                        isDarkMode
                          ? "hover:bg-slate-800 text-slate-100"
                          : "hover:bg-brand-50 text-slate-800"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default NavBar;
