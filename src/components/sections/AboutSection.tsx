import { site, skillGroups, skills } from '../../data/site';
import { SkillCloud } from './SkillCloud';

export function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="grid items-start gap-y-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-x-16 lg:gap-y-10">
        <div className="order-1 lg:col-start-2">
          <p className="section-kicker">About</p>
          <h2 className="section-title mt-3 lg:max-w-[23ch]">
            Frontend work grounded in practical delivery
          </h2>
          <p className="section-subtitle mt-5 max-w-3xl">{site.about.description}</p>
        </div>

        <div className="order-2 mx-auto w-full max-w-md lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:self-center lg:sticky lg:top-28">
          <SkillCloud />
        </div>

        <div className="order-3 border-t border-line pt-8 lg:col-start-2">
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
            {skillGroups.map((group) => (
              <div key={group.id} className="border-l-2 border-accent pl-4">
                <h4 className="text-base font-extrabold text-ink">{group.title}</h4>
                <ul className="mt-3 flex flex-wrap gap-2" aria-label={group.title}>
                  {skills
                    .filter((skill) => skill.group === group.id)
                    .map((skill) => (
                      <li key={skill.id} className="meta-pill">
                        {skill.name}
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
