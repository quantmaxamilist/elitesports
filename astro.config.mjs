import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: replace with the real domain once registered
export default defineConfig({
  site: 'https://www.elitesportssurfaces.co.uk',
  server: { port: 4345 },
  trailingSlash: 'ignore',
  build: { format: 'file' },
  scopedStyleStrategy: 'class',
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  integrations: [sitemap({ filter: (p) => !p.includes('/404') })],
  // The dev toolbar floats over the hero's chapter tags on phone widths during review
  devToolbar: { enabled: false },
});
