import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, permanentRedirect } from 'next/navigation';
import { FiArrowLeft, FiArrowUpRight, FiGithub } from 'react-icons/fi';
import { ProjectCard } from '../../../components/projects/ProjectCard';
import type { Project } from '../../../data/projects';
import {
  getProjectByLegacyId,
  getProjectBySlug,
  getProjects,
  getRelatedProjects,
} from '../../../lib/projects';
import { getGitHubLinkLabel, normalizeExternalUrl } from '../../../lib/urls';

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getProjects().flatMap((project) => [
    { slug: project.slug },
    ...(project.legacyId ? [{ slug: project.legacyId }] : []),
  ]);
}

function resolveProject(identifier: string): Project | undefined {
  return getProjectBySlug(identifier) ?? getProjectByLegacyId(identifier);
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = resolveProject(slug);

  if (!project) return { title: 'Project not found | Merna Hallak' };

  const description = project.summary ?? project.overview ?? project.description;
  const coverImage = project.images?.[0];

  return {
    title: `${project.title} | Merna Hallak`,
    description,
    alternates: {
      canonical: `/project/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Merna Hallak`,
      description,
      url: `/project/${project.slug}`,
      type: 'article',
      images: coverImage
        ? [
            {
              url: coverImage.src,
              alt: coverImage.alt ?? `${project.title} project preview`,
            },
          ]
        : undefined,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    const legacyProject = getProjectByLegacyId(slug);
    if (legacyProject) permanentRedirect(`/project/${legacyProject.slug}`);
    notFound();
  }

  const coverImage = project.images?.[0];
  const galleryImages = project.images?.slice(1) ?? [];
  const overview = project.overview ?? project.description ?? project.summary;
  const details = [
    project.role ? { label: 'Role', value: project.role } : null,
    project.status ? { label: 'Status', value: project.status } : null,
    project.year || project.date
      ? { label: project.year ? 'Year' : 'Date', value: project.year ?? project.date }
      : null,
  ].filter((detail): detail is { label: string; value: string } => Boolean(detail?.value));
  const relatedProjects = getRelatedProjects(project.slug);

  return (
    <>
      <section className="border-b border-line bg-surface pt-[68px]">
        <div className="section py-12 sm:py-16">
          <Link href="/#projects" className="text-link inline-flex min-h-11 items-center gap-2">
            <FiArrowLeft aria-hidden="true" /> Back to projects
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="section-kicker">Project case study</p>
              <h1 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
                {project.title}
              </h1>
              {project.summary ? (
                <p className="mt-5 text-lg leading-8 text-muted">{project.summary}</p>
              ) : null}

              <div className="mt-7 flex flex-wrap gap-3">
                {project.liveUrl ? (
                  <a
                    href={normalizeExternalUrl(project.liveUrl)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Live demo <FiArrowUpRight aria-hidden="true" />
                  </a>
                ) : null}
                {project.githubUrl ? (
                  <a
                    href={normalizeExternalUrl(project.githubUrl)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <FiGithub aria-hidden="true" /> {getGitHubLinkLabel(project.githubUrl)}
                  </a>
                ) : null}
              </div>
            </div>

            {coverImage ? (
              <figure className="overflow-hidden rounded-2xl border border-line bg-mutedSurface shadow-lift">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={coverImage.src}
                    alt={coverImage.alt ?? `${project.title} project preview`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-contain p-3 sm:p-5"
                  />
                </div>
                {coverImage.caption ? (
                  <figcaption className="border-t border-line px-5 py-3 text-sm text-muted">
                    {coverImage.caption}
                  </figcaption>
                ) : null}
              </figure>
            ) : null}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:gap-16">
          <div>
            {overview ? (
              <section aria-labelledby="project-overview">
                <p className="section-kicker">Overview</p>
                <h2 id="project-overview" className="mt-3 text-2xl font-extrabold sm:text-3xl">
                  About the project
                </h2>
                <p className="mt-5 whitespace-pre-line text-lg leading-8 text-muted">{overview}</p>
              </section>
            ) : null}

            {project.features?.length ? (
              <section
                className="mt-12 border-t border-line pt-10"
                aria-labelledby="project-features"
              >
                <p className="section-kicker">Features</p>
                <h2 id="project-features" className="mt-3 text-2xl font-extrabold sm:text-3xl">
                  What it includes
                </h2>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-xl border border-line bg-surface p-4 leading-7"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </div>

          {details.length > 0 || project.tools?.length ? (
            <aside className="h-fit rounded-2xl border border-line bg-elevated p-6">
              <h2 className="text-lg font-extrabold">Project details</h2>
              {details.length > 0 ? (
                <dl className="mt-5 space-y-4">
                  {details.map((detail) => (
                    <div
                      key={detail.label}
                      className="border-b border-line pb-4 last:border-0 last:pb-0"
                    >
                      <dt className="text-sm font-bold text-muted">{detail.label}</dt>
                      <dd className="mt-1 font-extrabold">{detail.value}</dd>
                    </div>
                  ))}
                </dl>
              ) : null}

              {project.tools?.length ? (
                <div className={details.length > 0 ? 'mt-6 border-t border-line pt-6' : 'mt-5'}>
                  <h3 className="text-sm font-bold text-muted">Tools &amp; stack</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <li key={tool} className="meta-pill">
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </aside>
          ) : null}
        </div>

        {galleryImages.length > 0 ? (
          <section className="mt-16 border-t border-line pt-12" aria-labelledby="project-gallery">
            <p className="section-kicker">Gallery</p>
            <h2 id="project-gallery" className="mt-3 text-2xl font-extrabold sm:text-3xl">
              More project views
            </h2>
            <div className="mt-7 grid gap-6 md:grid-cols-2">
              {galleryImages.map((image) => (
                <figure
                  key={image.src}
                  className="overflow-hidden rounded-2xl border border-line bg-surface"
                >
                  <div className="relative aspect-video bg-mutedSurface">
                    <Image
                      src={image.src}
                      alt={image.alt ?? `${project.title} project screenshot`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain p-3"
                    />
                  </div>
                  {image.caption ? (
                    <figcaption className="border-t border-line px-5 py-3 text-sm text-muted">
                      {image.caption}
                    </figcaption>
                  ) : null}
                </figure>
              ))}
            </div>
          </section>
        ) : null}
      </section>

      {relatedProjects.length > 0 ? (
        <section className="border-t border-line bg-surface">
          <div className="section">
            <p className="section-kicker">More work</p>
            <h2 className="section-title mt-3">Related projects</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {relatedProjects.map((relatedProject) => (
                <ProjectCard key={relatedProject.slug} project={relatedProject} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
