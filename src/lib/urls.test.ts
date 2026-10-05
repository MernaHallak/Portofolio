import { describe, expect, it } from 'vitest';
import { normalizeExternalUrl } from './urls';

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
});
