import Link from 'next/link';
import { getFeaturedProjects } from '../../lib/projects';
import { ProjectCard } from '../projects/ProjectCard';

export function PortfolioSection() {
  const projects = getFeaturedProjects();

  return (
    <section id="projects" className="section">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="section-kicker">Selected work</p>
          <h2 className="section-title mt-3">Projects built for real interaction</h2>
          <p className="section-subtitle mt-4 max-w-2xl">
            A selection of responsive frontend projects, from dashboards to learning and product
            experiences.
          </p>
        </div>
        <Link href="/#contact" className="btn-secondary">
          Discuss a project
        </Link>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
