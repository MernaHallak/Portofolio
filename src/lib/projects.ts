import { projects, type Project } from '../data/projects';

const projectSlugs = projects.map((project) => project.slug);

if (new Set(projectSlugs).size !== projectSlugs.length) {
  throw new Error('Project slugs must be unique.');
}

export function sortProjects(items: readonly Project[]): Project[] {
  return [...items].sort((first, second) => (first.order ?? 0) - (second.order ?? 0));
}

export function isPublicProject(project: Project): boolean {
  return !project.archived;
}

export function getProjects(): readonly Project[] {
  return sortProjects(projects.filter(isPublicProject));
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getProjects().find((project) => project.slug === slug);
}

export function getProjectByLegacyId(id: string): Project | undefined {
  return getProjects().find((project) => project.legacyId === id);
}

export function getFeaturedProjects(): readonly Project[] {
  const publicProjects = getProjects();
  const featuredProjects = publicProjects.filter((project) => project.featured);
  return sortProjects(featuredProjects.length > 0 ? featuredProjects : publicProjects);
}

export function getRelatedProjects(currentSlug: string, limit = 3): readonly Project[] {
  return sortProjects(getProjects().filter((project) => project.slug !== currentSlug)).slice(
    0,
    limit,
  );
}
