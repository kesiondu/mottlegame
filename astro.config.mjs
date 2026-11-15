import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mottlegame.cc',
  output: 'static',
  trailingSlash: 'always',
  build: { inlineStylesheets: 'never' },
  devToolbar: { enabled: false },
});
