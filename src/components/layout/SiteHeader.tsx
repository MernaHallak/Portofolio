'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, type MouseEvent } from 'react';
import { FaBars, FaMoon } from 'react-icons/fa';
import { IoClose, IoSunny } from 'react-icons/io5';
import { navigationItems } from '../../data/site';
import { useTheme } from '../../providers/ThemeProvider';
import { useActiveSection } from './useActiveSection';

const sectionIds = navigationItems.map((item) => item.id);

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const isHome = pathname === '/';
  const observedActive = useActiveSection(sectionIds, isHome);
  const activeId = isHome ? observedActive : 'projects';

  function scrollToSection(event: MouseEvent<HTMLAnchorElement>, id: string) {
    setIsOpen(false);

    if (!isHome) return;

    const section = document.getElementById(id);
    if (!section) return;

    event.preventDefault();
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    section.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
    window.history.replaceState(null, '', `#${id}`);
  }

  const desktopLinkClass = (id: string) =>
    `cursor-pointer text-sm font-semibold transition-colors ${
      activeId === id
        ? 'text-brand dark:text-brand-300'
        : 'hover:text-brand dark:hover:text-brand-300'
    }`;

  const mobileLinkClass = (id: string) =>
    `block w-full rounded-xl px-3 py-2 text-left font-semibold transition-colors ${
      activeId === id
        ? 'bg-brand-50 text-brand dark:bg-slate-800 dark:text-brand-300'
        : 'text-slate-800 hover:bg-brand-50 dark:text-slate-100 dark:hover:bg-slate-800'
    }`;

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/70 bg-white/70 text-slate-800 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/70 dark:text-slate-100">
      <div className="container mx-auto flex items-center justify-between px-5 py-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 p-2 md:hidden dark:border-slate-700 dark:hover:bg-slate-900"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <IoClose size={22} /> : <FaBars size={18} />}
          </button>
          <Link
            href="/#hero"
            onClick={(event) => scrollToSection(event, 'hero')}
            className="font-display text-xl font-semibold sm:text-2xl"
          >
            Merna<span className="text-brand">.</span>
          </Link>
        </div>

        <nav className="hidden md:block" aria-label="Primary navigation">
          <ul className="flex items-center gap-6">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={`/#${item.id}`}
                  onClick={(event) => scrollToSection(event, item.id)}
                  className={desktopLinkClass(item.id)}
                  aria-current={activeId === item.id ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={toggleTheme}
          className="inline-flex items-center justify-center rounded-xl border border-slate-200 p-2 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-900"
          aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
        >
          {theme === 'dark' ? <IoSunny size={22} /> : <FaMoon size={18} />}
        </button>
      </div>

      {isOpen ? (
        <div className="md:hidden" id="mobile-navigation">
          <nav className="container mx-auto px-5 pb-5" aria-label="Mobile navigation">
            <div className="card p-4">
              <ul className="space-y-2">
                {navigationItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`/#${item.id}`}
                      onClick={(event) => scrollToSection(event, item.id)}
                      className={mobileLinkClass(item.id)}
                      aria-current={activeId === item.id ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                {!isHome ? (
                  <li className="pt-2">
                    <Link
                      href="/"
                      onClick={() => setIsOpen(false)}
                      className={mobileLinkClass('home')}
                    >
                      Home
                    </Link>
                  </li>
                ) : null}
              </ul>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
