import Image from 'next/image';
import Link from 'next/link';
import { FiArrowDownRight, FiDownload, FiMail } from 'react-icons/fi';
import { site, skills } from '../../data/site';

export function HeroSection() {
  const heroSkills = site.hero.skillIds.flatMap((id) => {
    const skill = skills.find((item) => item.id === id);
    return skill ? [skill] : [];
  });

  return (
    <section
      id="hero"
      className="relative scroll-mt-24 overflow-hidden border-b border-line bg-surface pt-[68px]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_78%_20%,var(--color-accent-soft),transparent_58%)]" />

      <div className="section relative py-10 sm:py-16 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="text-center lg:text-left">
            <p className="section-kicker">{site.hero.role}</p>
            <h1 className="mt-3 text-[2.5rem] font-bold leading-[1.03] tracking-[-0.045em] sm:mt-4 sm:text-[3.25rem] lg:text-[3.75rem]">
              {site.hero.greeting} <span className="text-accent">Merna</span>.
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted sm:mt-5 sm:text-lg sm:leading-8 lg:mx-0 lg:max-w-xl">
              {site.hero.description}
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-1.5 sm:mt-6 sm:gap-2 lg:justify-start">
              {heroSkills.map((skill) => (
                <span key={skill.id} className="chip px-2.5 text-[13px] sm:px-3 sm:text-sm">
                  {skill.name}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:mt-8 sm:gap-3 lg:justify-start">
              <Link href="/#projects" className="btn-primary px-4 text-sm">
                View projects <FiArrowDownRight aria-hidden="true" />
              </Link>
              <Link href="/#contact" className="btn-secondary px-4 text-sm">
                Contact <FiMail aria-hidden="true" />
              </Link>
              <a
                href="/resume/Merna%20Resume.pdf"
                download="Merna_CV.pdf"
                className="text-link inline-flex min-h-11 items-center gap-1.5 px-2 text-sm"
              >
                Download CV <FiDownload aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[240px] sm:max-w-[320px] lg:max-w-[380px]">
            <div className="absolute -inset-5 rounded-full bg-accentSoft blur-2xl" />
            <div className="relative rounded-full border border-strongLine bg-elevated p-2 shadow-lift">
              <Image
                src="/images/profile/profile-image.png"
                alt="Portrait of Merna Hallak"
                width={407}
                height={408}
                priority
                sizes="(max-width: 640px) 240px, (max-width: 1024px) 340px, 380px"
                className="aspect-square w-full rounded-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 w-max -translate-x-1/2 rounded-full border border-line bg-surface px-4 py-2.5 shadow-soft">
              <span className="flex items-center gap-2 text-sm font-bold text-ink">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" aria-hidden="true" />
                {site.hero.availability}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
