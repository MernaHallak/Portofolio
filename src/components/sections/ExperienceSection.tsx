import Image from 'next/image';
import { FaArrowUpLong } from 'react-icons/fa6';
import { site } from '../../data/site';

export function ExperienceSection() {
  return (
    <section id="education" className="section">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="section-kicker">Education &amp; Experience</p>
          <h2 className="section-title">My background</h2>
          <p className="section-subtitle mt-3 max-w-2xl">
            A quick overview of the experiences and projects that shaped my skills and approach to
            building UI.
          </p>
        </div>
        <a
          href="#hero"
          className="hidden items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-50 sm:inline-flex dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900"
        >
          <FaArrowUpLong />
          Top
        </a>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {site.experience.items.map((item) => (
          <article key={item.title} className="card flex gap-4 p-6">
            <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-brand-50 dark:bg-slate-800">
              <Image
                src="/images/experience/frame.png"
                alt=""
                width={24}
                height={24}
                className="h-6 w-6"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold leading-snug">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-600 dark:text-slate-300">
                {item.description}
              </p>
            </div>
          </article>
        ))}
        <article className="card relative overflow-hidden p-6 md:col-span-2">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-lavender-200/40 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-brand-200/30 blur-3xl" />
          <div className="relative">
            <h3 className="font-display text-2xl font-semibold">What I care about</h3>
            <p className="mt-3 max-w-3xl leading-relaxed text-slate-600 dark:text-slate-300">
              {site.experience.values}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
