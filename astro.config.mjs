import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://galeida.com',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
