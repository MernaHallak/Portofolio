import { describe, expect, it } from 'vitest';
import { getGitHubLinkLabel, normalizeExternalUrl } from './urls';

describe('normalizeExternalUrl', () => {
  it('keeps an existing https URL unchanged', () => {
    expect(normalizeExternalUrl('https://dash-stack-delta.vercel.app/')).toBe(
      'https://dash-stack-delta.vercel.app/',
    );
  });

  it('adds https to the original portfolio demo value without changing stored data', () => {
    expect(normalizeExternalUrl('merna-hallak-portfollio.vercel.app')).toBe(
      'https://merna-hallak-portfollio.vercel.app',
    );
  });

  it('labels profile-level GitHub links truthfully', () => {
    expect(getGitHubLinkLabel('https://github.com/MernaHallak')).toBe('GitHub Profile');
    expect(getGitHubLinkLabel('https://github.com/MernaHallak/example-project')).toBe('GitHub');
  });
});
