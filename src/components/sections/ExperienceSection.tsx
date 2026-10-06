import { site } from '../../data/site';

export function ExperienceSection() {
  return (
    <section id="education" className="border-y border-line bg-surface">
      <div className="section">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="section-kicker">Experience &amp; education</p>
            <h2 className="section-title mt-3">Professional growth, built through practice</h2>
            <p className="section-subtitle mt-5 max-w-xl">
              Frontend work comes first, supported by hands-on React training and an engineering
              foundation.
            </p>
            <p className="mt-7 max-w-xl border-l-2 border-accent pl-4 leading-7 text-muted">
              {site.experience.values}
            </p>
          </div>

          <ol className="relative border-l border-strongLine">
            {site.experience.items.map((item, index) => (
              <li
                key={`${item.title}-${item.organization}`}
                className={`relative ml-6 ${
                  index < site.experience.items.length - 1 ? 'pb-10' : ''
                }`}
              >
                <span
                  className={`absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-4 border-surface ${
                    index === 0 ? 'bg-accentStrong' : 'bg-strongLine'
                  }`}
                  aria-hidden="true"
                />
                <article
                  className={
                    index === 0
                      ? 'rounded-2xl border border-line bg-elevated p-6 shadow-soft'
                      : 'px-1 py-1'
                  }
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.1em] text-accent">
                        {item.organization}
                      </p>
                      <h3 className="mt-1 text-xl font-extrabold leading-snug sm:text-2xl">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm font-bold text-muted">{item.period}</p>
                  </div>
                  <ul className="mt-4 space-y-2.5 text-muted">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 leading-7">
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
