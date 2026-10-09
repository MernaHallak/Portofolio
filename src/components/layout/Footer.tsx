import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { site } from '../../data/site';

const socialIcons = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  facebook: FaFacebookF,
  instagram: FaInstagram,
} as const;

export function Footer() {
  const professionalLinks = site.socialLinks.filter(
    (link) => link.kind === 'github' || link.kind === 'linkedin',
  );
  const secondaryLinks = site.socialLinks.filter(
    (link) => link.kind === 'facebook' || link.kind === 'instagram',
  );

  return (
    <footer className="border-t border-line bg-surface text-ink">
      <div className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-xl font-extrabold tracking-tight">
              Merna Hallak<span className="text-accent">.</span>
            </p>
            <p className="mt-2 max-w-lg text-muted">
              Frontend Developer building responsive interfaces with React and Next.js.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={`mailto:${site.contact.email}`} className="text-link">
                Email
              </a>
              <span aria-hidden="true" className="text-line">
                /
              </span>
              <a href="/resume/Merna%20Resume.pdf" className="text-link">
                Download CV
              </a>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3">
              {professionalLinks.map((link) => {
                const Icon = socialIcons[link.kind];
                return (
                  <a
                    key={link.kind}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-canvas text-ink transition-colors hover:border-accent hover:text-accent"
                    aria-label={link.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
            <div className="mt-4 flex gap-4 text-sm text-muted">
              {secondaryLinks.map((link) => (
                <a
                  key={link.kind}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-8 border-t border-line pt-6 text-sm text-muted">
          © {new Date().getFullYear()} Merna Hallak. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
