import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  splitting: false,
  external: ['react', 'react-dom', 'styled-components'],
  // Several components use hooks and event handlers, so the whole bundle is a
  // client boundary for React Server Components (e.g. the Next.js App Router).
  banner: { js: "'use client';" },
});
