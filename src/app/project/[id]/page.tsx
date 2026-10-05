import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowUpRightCircle } from 'react-icons/bs';
import { ProjectCarousel } from '../../../components/projects/ProjectCarousel';
import { getProjectById, getProjects } from '../../../lib/projects';
import { normalizeExternalUrl } from '../../../lib/urls';
import { notFound } from 'next/navigation';

type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getProjects().map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) return { title: 'Project not found' };

  return {
    title: `${project.title} | Merna Portfollio`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Merna Portfollio`,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) notFound();

  return (
    <section className="section pt-28 sm:pt-32">
      <Link
        href="/#projects"
        className="font-semibold text-slate-600 hover:text-brand dark:text-slate-300 dark:hover:text-brand-300"
      >
        ← Back to home
      </Link>

      <article className="card mt-6 overflow-hidden">
        <div className="relative h-64 sm:h-80">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 80vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />
          <div className="absolute bottom-5 left-5 right-5">
            <p className="text-sm text-white/80">Project</p>
            <h1 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              {project.title}
            </h1>
          </div>
        </div>

        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-semibold">Overview</h2>
            <p className="mt-3 whitespace-pre-line leading-relaxed text-slate-600 dark:text-slate-300">
              {project.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={normalizeExternalUrl(project.demoUrl)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Live Demo <BsArrowUpRightCircle className="ml-2" />
              </a>
              <a
                href={normalizeExternalUrl(project.githubUrl)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                GitHub
              </a>
            </div>
          </div>

          <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-950">
            <h2 className="font-semibold">Details</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex items-start justify-between gap-4">
                <dt className="text-slate-500 dark:text-slate-400">Date</dt>
                <dd className="font-semibold">{project.date || '-'}</dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="text-slate-500 dark:text-slate-400">Tech</dt>
                <dd className="text-right font-semibold">
                  {project.technologies || project.framework || '-'}
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </article>

      <div className="mt-16">
        <div>
          <p className="section-kicker">Portfolio</p>
          <h2 className="section-title">Featured projects</h2>
          <p className="section-subtitle mt-3 max-w-2xl">
            A selection of projects I’ve worked on — focused on clean UI, solid structure, and
            responsive layouts.
          </p>
        </div>
        <div className="mt-10">
          <ProjectCarousel projects={getProjects()} />
        </div>
      </div>
    </section>
  );
}
