import { projects, type Project } from '../data/projects';

const projectIds = projects.map((project) => project.id);

if (new Set(projectIds).size !== projectIds.length) {
  throw new Error('Project IDs must be unique.');
}

export function getProjects(): readonly Project[] {
  return projects;
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
