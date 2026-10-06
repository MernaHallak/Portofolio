import Image from 'next/image';
import { site } from '../../data/site';

export function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="grid items-start gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
        <div className="relative mx-auto w-full max-w-[280px] sm:max-w-sm lg:sticky lg:top-28">
          <div className="absolute -inset-4 rounded-[2rem] bg-accentSoft blur-2xl" />
          <div className="card relative overflow-hidden p-5 sm:p-7">
            <Image
              src="/images/about.png"
              alt="Frontend technology illustration with React, GitHub, Figma, HTML, and CSS symbols"
              width={510}
              height={530}
              sizes="(max-width: 1024px) 384px, 360px"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

        <div>
          <p className="section-kicker">About</p>
          <h2 className="section-title mt-3">Frontend work grounded in practical delivery</h2>
          <p className="section-subtitle mt-5 max-w-3xl">{site.about.description}</p>

          <div className="mt-10 border-t border-line pt-8">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="section-kicker">Skills</p>
                <h3 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
                  Technologies I work with
                </h3>
              </div>
              <p className="max-w-sm text-sm leading-6 text-muted">
                A focused stack for responsive interfaces, API integration, and dependable delivery.
              </p>
            </div>

            <div className="mt-7 grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {site.about.skillGroups.map((group) => (
                <div key={group.title} className="border-l-2 border-accent pl-4">
                  <h4 className="text-base font-extrabold text-ink">{group.title}</h4>
                  <ul className="mt-3 flex flex-wrap gap-2" aria-label={group.title}>
                    {group.skills.map((skill) => (
                      <li key={skill} className="meta-pill">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
