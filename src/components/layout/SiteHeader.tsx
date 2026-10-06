'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState, type MouseEvent } from 'react';
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
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);
  const isHome = pathname === '/';
  const observedActive = useActiveSection(sectionIds, isHome);
  const activeId = isHome ? observedActive : undefined;

  useEffect(() => {
    if (!isOpen) return;

    firstMobileLinkRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== 'Escape') return;
      setIsOpen(false);
      menuButtonRef.current?.focus();
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

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
    `rounded-sm px-1 py-2 text-sm font-bold transition-colors ${
      activeId === id ? 'text-accent' : 'text-muted hover:text-ink'
    }`;

  const mobileLinkClass = (id: string) =>
    `block min-h-11 w-full rounded-xl px-4 py-3 text-left font-bold transition-colors ${
      activeId === id ? 'bg-accentSoft text-accent' : 'text-ink hover:bg-mutedSurface'
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-canvas shadow-sm">
      <div className="mx-auto flex h-[68px] w-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface text-ink transition-colors hover:border-strongLine lg:hidden"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <IoClose size={22} /> : <FaBars size={18} />}
          </button>
          <Link
            href="/#hero"
            onClick={(event) => scrollToSection(event, 'hero')}
            className="rounded-sm text-lg font-extrabold tracking-tight sm:text-xl"
          >
            Merna<span className="text-accent">.</span>
          </Link>
        </div>

        <nav className="hidden lg:block" aria-label="Primary navigation">
          <ul className="flex items-center gap-7">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={`/#${item.id}`}
                  onClick={(event) => scrollToSection(event, item.id)}
                  className={desktopLinkClass(item.id)}
                  aria-current={activeId === item.id ? 'location' : undefined}
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
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface text-ink transition-colors hover:border-strongLine"
          aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
        >
          {theme === 'dark' ? <IoSunny size={22} /> : <FaMoon size={18} />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-line bg-canvas lg:hidden" id="mobile-navigation">
          <nav
            className="mx-auto w-full max-w-7xl px-5 py-4 sm:px-6"
            aria-label="Mobile navigation"
          >
            <ul className="space-y-1">
              {navigationItems.map((item, index) => (
                <li key={item.id}>
                  <Link
                    ref={index === 0 ? firstMobileLinkRef : undefined}
                    href={`/#${item.id}`}
                    onClick={(event) => scrollToSection(event, item.id)}
                    className={mobileLinkClass(item.id)}
                    aria-current={activeId === item.id ? 'location' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
