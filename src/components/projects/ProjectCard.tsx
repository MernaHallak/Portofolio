import Image from 'next/image';
import Link from 'next/link';
import { BsArrowUpRightCircle } from 'react-icons/bs';
import type { Project } from '../../data/projects';
import { normalizeExternalUrl } from '../../lib/urls';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group card overflow-hidden transition-transform hover:-translate-y-1">
      <Link
        href={`/project/${project.id}`}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand"
        aria-label={`View ${project.title} project details`}
      >
        <div className="relative h-56 sm:h-64">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0 opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
      </Link>
      <div className="flex items-start justify-between gap-4 p-5">
        <div>
          <h3 className="text-lg font-semibold leading-snug sm:text-xl">
            <Link
              href={`/project/${project.id}`}
              className="rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              {project.title}
            </Link>
          </h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 sm:text-base">
            {project.previewDescription}
          </p>
        </div>
        <a
          href={normalizeExternalUrl(project.demoUrl)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex shrink-0 items-center justify-center rounded-full border border-brand-200 bg-brand-50 p-2 text-brand-700 transition-colors hover:bg-brand-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          aria-label={`Open ${project.title} live demo`}
        >
          <BsArrowUpRightCircle size={18} />
        </a>
      </div>
    </article>
  );
}
