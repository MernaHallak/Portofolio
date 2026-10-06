import type { MetadataRoute } from 'next';
import { site } from '../data/site';
import { getProjects } from '../lib/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...getProjects().map((project) => ({
      url: `${site.url}/project/${project.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
