import { describe, expect, it } from 'vitest';
import { getProjectBySlug, getProjects, getRelatedProjects } from './projects';
import { normalizeExternalUrl } from './urls';

describe('project catalog', () => {
  it('has unique, non-empty slugs and titles', () => {
    const catalog = getProjects();
    const slugs = catalog.map((project) => project.slug);

    expect(catalog.length).toBeGreaterThan(0);
    expect(new Set(slugs).size).toBe(slugs.length);

    catalog.forEach((project) => {
      expect(project.slug.trim()).not.toBe('');
      expect(project.slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
      expect(project.title.trim()).not.toBe('');
    });
  });

  it('validates optional URLs and image entries when present', () => {
    getProjects().forEach((project) => {
      [project.liveUrl, project.githubUrl]
        .filter((url): url is string => Boolean(url))
        .forEach((url) => expect(() => new URL(normalizeExternalUrl(url))).not.toThrow());

      project.images?.forEach((image) => {
        expect(image.src).toMatch(/^\/images\/projects\/[a-z0-9-]+\//);
        expect(image.src.trim()).not.toBe('');
      });
    });
  });

  it('resolves by slug and excludes the current project from related work', () => {
    const firstProject = getProjects()[0];
    expect(firstProject).toBeDefined();
    if (!firstProject) return;

    expect(getProjectBySlug(firstProject.slug)?.title).toBe(firstProject.title);
    expect(getProjectBySlug('not-a-project')).toBeUndefined();
    expect(
      getRelatedProjects(firstProject.slug).some((project) => project.slug === firstProject.slug),
    ).toBe(false);
  });
});
