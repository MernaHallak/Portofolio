export function normalizeExternalUrl(url: string): string {
  const trimmedUrl = url.trim();

  if (/^https?:\/\//i.test(trimmedUrl)) {
    return trimmedUrl;
  }

  if (trimmedUrl.startsWith('//')) {
    return `https:${trimmedUrl}`;
  }

  return `https://${trimmedUrl.replace(/^\/+/, '')}`;
}

export function getGitHubLinkLabel(url: string): 'GitHub' | 'GitHub Profile' {
  try {
    const normalizedUrl = new URL(normalizeExternalUrl(url));
    const pathParts = normalizedUrl.pathname.split('/').filter(Boolean);
    return normalizedUrl.hostname === 'github.com' && pathParts.length <= 1
      ? 'GitHub Profile'
      : 'GitHub';
  } catch {
    return 'GitHub';
  }
}
