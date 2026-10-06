import Image from 'next/image';
import Link from 'next/link';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import type { Project } from '../../data/projects';
import { getGitHubLinkLabel, normalizeExternalUrl } from '../../lib/urls';

export function ProjectCard({ project }: { project: Project }) {
  const coverImage = project.images?.[0];
  const metadata = [project.year ?? project.date, project.status].filter(Boolean);

  return (
    <article className="group card flex h-full flex-col overflow-hidden transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:border-strongLine hover:shadow-lift">
      {coverImage ? (
        <Link
          href={`/project/${project.slug}`}
          className="relative block aspect-[16/10] overflow-hidden border-b border-line bg-mutedSurface"
          aria-label={`View ${project.title} project details`}
        >
          <Image
            src={coverImage.src}
            alt={coverImage.alt ?? `${project.title} project preview`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-contain p-2 transition-transform duration-300 group-hover:scale-[1.015]"
          />
        </Link>
      ) : null}

      <div className="flex flex-1 flex-col p-6">
        {metadata.length > 0 ? (
          <p className="text-sm font-bold text-muted">{metadata.join(' · ')}</p>
        ) : null}
        <h3 className="mt-2 text-xl font-extrabold leading-snug">
          <Link
            href={`/project/${project.slug}`}
            className="rounded-sm transition-colors hover:text-accent"
          >
            {project.title}
          </Link>
        </h3>

        {project.description ? (
          <p className="mt-3 line-clamp-3 leading-7 text-muted">
            {project.description.split('\n')[0]}
          </p>
        ) : project.summary ? (
          <p className="mt-3 leading-7 text-muted">{project.summary}</p>
        ) : null}

        {project.tools?.length ? (
          <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} tools`}>
            {project.tools.slice(0, 4).map((tool) => (
              <li key={tool} className="meta-pill">
                {tool}
              </li>
            ))}
          </ul>
        ) : project.summary ? (
          <p className="mt-5 text-sm font-bold text-accent">{project.summary}</p>
        ) : null}

        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-line pt-5">
          <Link href={`/project/${project.slug}`} className="text-link">
            View project
          </Link>
          {project.liveUrl ? (
            <a
              href={normalizeExternalUrl(project.liveUrl)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-1.5 rounded-sm px-1 font-bold text-ink transition-colors hover:text-accent"
            >
              Live demo <FiArrowUpRight aria-hidden="true" />
            </a>
          ) : null}
          {project.githubUrl ? (
            <a
              href={normalizeExternalUrl(project.githubUrl)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-1.5 rounded-sm px-1 font-bold text-ink transition-colors hover:text-accent"
            >
              <FiGithub aria-hidden="true" /> {getGitHubLinkLabel(project.githubUrl)}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
