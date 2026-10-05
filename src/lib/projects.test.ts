import { describe, expect, it } from 'vitest';
import { getProjectById, getProjects } from './projects';

describe('project catalog', () => {
  it('preserves the four original project IDs and titles', () => {
    expect(getProjects().map((project) => [project.id, project.title])).toEqual([
      ['1', 'Dashstack'],
      ['2', 'Edujar'],
      ['3', 'Portfolio'],
      ['4', 'Products'],
    ]);
  });

  it('has unique IDs and complete required project values', () => {
    const projects = getProjects();
    expect(new Set(projects.map((project) => project.id)).size).toBe(projects.length);

    projects.forEach((project) => {
      expect(project.description).not.toBe('');
      expect(project.date).not.toBe('');
      expect(project.image).toMatch(/^\/images\/projects\//);
      expect(project.demoUrl).not.toBe('');
      expect(project.githubUrl).not.toBe('');
    });
  });

  it('resolves an existing project and returns undefined for an unknown ID', () => {
    expect(getProjectById('2')?.title).toBe('Edujar');
    expect(getProjectById('not-a-project')).toBeUndefined();
  });
});
