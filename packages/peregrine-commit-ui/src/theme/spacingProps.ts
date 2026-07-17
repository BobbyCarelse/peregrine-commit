import type { SpaceKey } from '@peregrine-commit/token-factory';
import { css } from 'styled-components';

/** Spacing scale, named exactly like the `--space-*` primitive tokens (e.g. `"space-6"` → `var(--space-6)`). */
export type SpaceToken = `space-${SpaceKey}`;

export interface SpacingProps {
  /** Padding on all sides. */
  p?: SpaceToken;
  /** Padding top. */
  pt?: SpaceToken;
  /** Padding right. */
  pr?: SpaceToken;
  /** Padding bottom. */
  pb?: SpaceToken;
  /** Padding left. */
  pl?: SpaceToken;
  /** Padding left + right. */
  px?: SpaceToken;
  /** Padding top + bottom. */
  py?: SpaceToken;
  /** Margin on all sides. */
  m?: SpaceToken;
  /** Margin top. */
  mt?: SpaceToken;
  /** Margin right. */
  mr?: SpaceToken;
  /** Margin bottom. */
  mb?: SpaceToken;
  /** Margin left. */
  ml?: SpaceToken;
  /** Margin left + right. */
  mx?: SpaceToken;
  /** Margin top + bottom. */
  my?: SpaceToken;
}

type SpacingKey = keyof SpacingProps;

const SPACING_PROP_KEYS: SpacingKey[] = [
  'p',
  'pt',
  'pr',
  'pb',
  'pl',
  'px',
  'py',
  'm',
  'mt',
  'mr',
  'mb',
  'ml',
  'mx',
  'my',
];

/**
 * Splits the token-constrained spacing props out of a component's incoming
 * props so they can be routed to `$spacing` instead of spread onto the DOM
 * (spacing keys like `pt` aren't valid HTML attributes).
 */
export function extractSpacingProps<T extends SpacingProps>(
  props: T,
): [SpacingProps, Omit<T, SpacingKey>] {
  const spacing: SpacingProps = {};
  const rest = { ...props };

  for (const key of SPACING_PROP_KEYS) {
    if (props[key] !== undefined) {
      (spacing as Record<SpacingKey, unknown>)[key] = props[key];
    }
    Reflect.deleteProperty(rest, key);
  }

  return [spacing, rest];
}

const space = (token: SpaceToken) => `var(--${token})`;

/**
 * Interpolate into any styled-component template that accepts `$spacing`.
 * Declarations are emitted most-general-first so more specific props (e.g.
 * `pt`) naturally win over broader ones (e.g. `p`) via CSS source order.
 */
export const spacingCss = css<{ $spacing?: SpacingProps }>`
  ${({ $spacing }) => {
    if (!$spacing) return '';

    const { p, pt, pr, pb, pl, px, py, m, mt, mr, mb, ml, mx, my } = $spacing;
    const declarations: string[] = [];

    if (p) declarations.push(`padding: ${space(p)};`);
    if (px) declarations.push(`padding-left: ${space(px)}; padding-right: ${space(px)};`);
    if (py) declarations.push(`padding-top: ${space(py)}; padding-bottom: ${space(py)};`);
    if (pt) declarations.push(`padding-top: ${space(pt)};`);
    if (pr) declarations.push(`padding-right: ${space(pr)};`);
    if (pb) declarations.push(`padding-bottom: ${space(pb)};`);
    if (pl) declarations.push(`padding-left: ${space(pl)};`);

    if (m) declarations.push(`margin: ${space(m)};`);
    if (mx) declarations.push(`margin-left: ${space(mx)}; margin-right: ${space(mx)};`);
    if (my) declarations.push(`margin-top: ${space(my)}; margin-bottom: ${space(my)};`);
    if (mt) declarations.push(`margin-top: ${space(mt)};`);
    if (mr) declarations.push(`margin-right: ${space(mr)};`);
    if (mb) declarations.push(`margin-bottom: ${space(mb)};`);
    if (ml) declarations.push(`margin-left: ${space(ml)};`);

    return declarations.join('\n');
  }}
`;
