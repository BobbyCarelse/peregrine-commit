import { defaultFontImports, fontImportsToCss } from '@peregrine-commit/token-factory';

/** Webfont `@import` rules (tokens/fonts.css in the design system). */
export const fontsCss = fontImportsToCss(defaultFontImports);
