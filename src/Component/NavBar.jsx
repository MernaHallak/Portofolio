import { useEffect, useMemo, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useActiveSection from "./useActiveSection";

const NAV_OFFSET_PX = 120; 

const NavBar = ({ isDarkMode, changeTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [manualActive, setManualActive] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  const links = useMemo(
    () => [
      { label: "Hero", id: "hero" },
      { label: "About", id: "about" },
      { label: "Education", id: "education" },
      { label: "Projects", id: "projects" },
      { label: "Contact", id: "contact" },
    ],
    []
  );

  const isHome = location.pathname === "/";
  const isProjectPage = location.pathname.startsWith("/project");


  const observedActive = isHome ? useActiveSection(links.map((l) => l.id)) : null;

  useEffect(() => {
    if (!manualActive) return;
    if (observedActive === manualActive) setManualActive(null);
  }, [observedActive, manualActive]);


  const activeId = isProjectPage ? "projects" : manualActive || observedActive || "hero";

  const headerCls = isDarkMode
    ? "bg-slate-950/70 text-slate-100 border-b border-slate-800/70"
    : "bg-white/70 text-slate-800 border-b border-slate-200/70";

  const desktopLinkCls = (id) =>
    `cursor-pointer text-sm font-semibold transition-colors ${
      activeId === id
        ? isDarkMode
          ? "text-brand-300"
          : "text-brand"
        : isDarkMode
        ? "hover:text-brand-300"
        : "hover:text-brand"
    }`;

  const mobileLinkCls = (id) =>
    `block w-full text-left rounded-xl px-3 py-2 font-semibold transition-colors ${
      activeId === id
        ? isDarkMode
          ? "text-brand-300 bg-slate-800"
          : "text-brand bg-brand-50"
        : isDarkMode
        ? "hover:bg-slate-800 text-slate-100"
        : "hover:bg-brand-50 text-slate-800"
    }`;

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET_PX;
    window.scrollTo({ top, left: 0, behavior: "smooth" });
  };

  const goToSection = (id) => {
    setIsOpen(false);
    setManualActive(id);

    if (isHome) {
      scrollToId(id);
      return;
    }

   
    navigate(`/#${id}`);
  };

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

          <button
            type="button"
            onClick={() => goToSection("hero")}
            className="font-display text-xl sm:text-2xl font-semibold"
          >
            Merna<span className="text-brand">.</span>
          </button>
        </div>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            {links.map((l) => (
              <li key={l.id} className="list-none">
                <button type="button" onClick={() => goToSection(l.id)} className={desktopLinkCls(l.id)}>
                  {l.label}
                </button>
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
                  <li key={l.id} className="list-none">
                    <button type="button" onClick={() => goToSection(l.id)} className={mobileLinkCls(l.id)}>
                      {l.label}
                    </button>
                  </li>
                ))}
                {!isHome ? (
                  <li className="list-none pt-2">
                    <Link
                      to="/"
                      onClick={() => setIsOpen(false)}
                      className={`block rounded-xl px-3 py-2 font-semibold ${
                        isDarkMode ? "text-slate-200 hover:bg-slate-800" : "text-slate-800 hover:bg-slate-100"
                      }`}
                    >
                      Home
                    </Link>
                  </li>
                ) : null}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default NavBar;
