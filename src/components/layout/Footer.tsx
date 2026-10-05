import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { LiaLinkedinIn } from 'react-icons/lia';
import { site } from '../../data/site';

const socialIcons = [FaFacebookF, LiaLinkedinIn, FaInstagram];

export function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white text-slate-800 dark:border-slate-800/70 dark:bg-slate-950 dark:text-slate-100">
      <div className="container mx-auto px-5 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-2xl font-semibold">
              Merna<span className="text-brand">.</span>
            </p>
            <p className="mt-1 text-slate-500 dark:text-slate-400">
              Built with React + Tailwind • Soft, friendly portfolio UI
            </p>
          </div>
          <div className="flex items-center gap-3">
            {site.socialLinks.map((link, index) => {
              const Icon = socialIcons[index];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 transition-colors hover:bg-brand-50 dark:border-slate-700 dark:hover:bg-slate-900"
                  aria-label={link.label}
                >
                  <Icon
                    className="text-brand dark:text-slate-100"
                    size={index === 1 ? 20 : undefined}
                  />
                </a>
              );
            })}
          </div>
        </div>
        <p className="mt-8 text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Merna. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
