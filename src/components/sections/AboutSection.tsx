import Image from 'next/image';
import { site } from '../../data/site';

export function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-brand-100/60 blur-2xl" />
          <div className="card relative overflow-hidden">
            <Image
              src="/images/about.png"
              alt="About illustration"
              width={800}
              height={600}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-full w-full object-contain p-6 md:p-8"
            />
          </div>
        </div>
        <div className="space-y-5 text-center md:text-left">
          <p className="section-kicker">About</p>
          <h2 className="section-title">A little about me</h2>
          <p className="leading-relaxed text-slate-600 dark:text-slate-300">
            {site.about.description}
          </p>
          <div className="card p-6">
            <h3 className="mb-4 font-display text-xl font-semibold">Skills</h3>
            <div className="space-y-4">
              {site.about.skills.map((skill) => (
                <div className="w-full" key={skill.name}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-semibold">{skill.name}</span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {skill.rate}%
                    </span>
                  </div>
                  <progress
                    className="progress h-3 w-full appearance-none overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800"
                    value={skill.rate}
                    max={100}
                  >
                    {skill.rate}%
                  </progress>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2 md:justify-start">
            {site.about.chips.map((chip) => (
              <span key={chip} className="chip">
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
