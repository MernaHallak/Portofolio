import { describe, expect, it } from 'vitest';
import { projects } from '../data/projects';
import {
  getProjectByLegacyId,
  getProjectBySlug,
  getFeaturedProjects,
  getProjects,
  getRelatedProjects,
} from './projects';
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

  it('keeps archived projects in data but excludes them from public discovery', () => {
    const archivedProjects = projects.filter((project) => project.archived);

    expect(archivedProjects.map((project) => project.slug)).toEqual([
      'dashstack',
      'edujar',
      'products',
    ]);
    expect(getProjects().map((project) => project.slug)).toEqual(['schs', 'portfolio']);
    expect(getFeaturedProjects().map((project) => project.slug)).toEqual(['schs', 'portfolio']);
    expect(getRelatedProjects('schs').map((project) => project.slug)).toEqual(['portfolio']);

    archivedProjects.forEach((project) => {
      expect(getProjects()).not.toContainEqual(project);
      expect(getProjectBySlug(project.slug)).toBeUndefined();
      expect(project.legacyId && getProjectByLegacyId(project.legacyId)).toBeUndefined();
    });
  });

  it('includes SCHS as the first public project with its complete gallery', () => {
    const schs = getProjectBySlug('schs');

    expect(schs).toMatchObject({
      title: 'SCHS',
      role: 'Full-Stack Developer & UI/UX Designer',
      liveUrl: 'https://schs-sy.com/',
    });
    expect(schs?.githubUrl).toBeUndefined();
    expect(schs?.date).toBeUndefined();
    expect(schs?.images?.map((image) => image.src)).toEqual([
      '/images/projects/schs/schs-homepage.jpg',
      '/images/projects/schs/schs-articles.png',
      '/images/projects/schs/schs-article-detail.png',
      '/images/projects/schs/schs-hearing-test.png',
      '/images/projects/schs/schs-contact.png',
      '/images/projects/schs/schs-admin-articles.png',
      '/images/projects/schs/schs-admin-editor.png',
    ]);
  });
});
