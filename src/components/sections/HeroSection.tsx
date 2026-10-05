import Image from 'next/image';
import Link from 'next/link';
import { site } from '../../data/site';

export function HeroSection() {
  return (
    <section id="hero" className="section relative scroll-mt-28 overflow-hidden pt-28 sm:pt-32">
      <div className="pointer-events-none absolute -left-20 -top-24 h-80 w-80 rounded-full bg-brand-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-lavender-200/40 blur-3xl" />

      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="relative z-10 text-center md:text-left">
          <p className="section-kicker">{site.hero.role}</p>
          <h1 className="section-title mt-3">
            {site.hero.greeting} <span className="text-brand">Merna</span> ✨
          </h1>
          <p className="section-subtitle mx-auto mt-4 max-w-xl md:mx-0">{site.hero.description}</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 md:justify-start">
            {site.hero.chips.map((chip) => (
              <span key={chip} className="chip">
                {chip}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
            <a
              href="/resume/Merna%20Resume.pdf"
              download="Merna_Resume.pdf"
              className="btn-primary"
            >
              Download Resume
            </a>
            <Link href="/#contact" className="btn-ghost">
              Let’s Talk
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
            Scroll to explore my work
          </p>
        </div>

        <div className="relative z-10 flex items-center justify-center">
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-gradient-to-b from-brand-200/50 to-lavender-200/30 blur-2xl" />
            <div className="relative rounded-full border border-slate-200/70 bg-white/80 p-2 shadow-soft backdrop-blur dark:border-slate-700 dark:bg-slate-900/80">
              <Image
                src="/images/profile/profile-image.png"
                alt="Profile"
                width={380}
                height={380}
                priority
                sizes="(max-width: 640px) 288px, (max-width: 768px) 320px, 380px"
                className="h-72 w-72 rounded-full object-cover sm:h-80 sm:w-80 md:h-[380px] md:w-[380px]"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
              <div className="card flex items-center gap-2 px-5 py-3">
                <span className="h-2 w-2 rounded-full bg-mint-500" />
                <span className="text-sm font-semibold">{site.hero.availability}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
