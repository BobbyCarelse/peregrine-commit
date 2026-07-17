import { describe, expect, it } from 'vitest';

import { tokenKeysToVarRefs } from './varRefs';

describe('tokenKeysToVarRefs', () => {
  it('camelCases kebab token names and wraps them as var() references', () => {
    const refs = tokenKeysToVarRefs({
      'inset-md': 'var(--space-4)',
      'control-height-sm': '32px',
      'focus-ring': 'var(--shadow-focus)',
    });

    expect(refs).toEqual({
      insetMd: 'var(--inset-md)',
      controlHeightSm: 'var(--control-height-sm)',
      focusRing: 'var(--focus-ring)',
    });
  });

  it('returns an empty object for an empty token map', () => {
    expect(tokenKeysToVarRefs({})).toEqual({});
  });
});
