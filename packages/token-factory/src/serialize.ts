import type { TokenRecord } from './types';

export interface TokensToCssOptions {
  /** @default ':root' */
  selector?: string;
}

/** Serializes a flat token map into a CSS custom-property rule block. */
export function tokensToCss(tokens: TokenRecord, options: TokensToCssOptions = {}): string {
  const { selector = ':root' } = options;
  const declarations = Object.entries(tokens)
    .map(([name, value]) => `  --${name}: ${value};`)
    .join('\n');

  return `${selector} {\n${declarations}\n}\n`;
}

/** Serializes a list of font URLs into `@import url("...");` lines. */
export function fontImportsToCss(urls: string[]): string {
  return urls.map((url) => `@import url("${url}");`).join('\n') + '\n';
}
