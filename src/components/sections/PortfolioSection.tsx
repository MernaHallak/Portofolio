import Link from 'next/link';
import { getProjects } from '../../lib/projects';
import { ProjectCard } from '../projects/ProjectCard';

export function PortfolioSection() {
  return (
    <section id="projects" className="section">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="section-kicker">Portfolio</p>
          <h2 className="section-title">Featured projects</h2>
          <p className="section-subtitle mt-3 max-w-2xl">
            A selection of projects I’ve worked on — focused on clean UI, solid structure, and
            responsive layouts.
          </p>
        </div>
        <Link href="/#contact" className="btn-ghost">
          Want something similar?
        </Link>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {getProjects().map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
