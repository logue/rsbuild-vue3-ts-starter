import { fileURLToPath, URL } from 'node:url';
import { readFileSync } from 'node:fs';

import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';

const packageJson = JSON.parse(readFileSync('./package.json', 'utf-8'));
const buildDate = new Date().toISOString();

console.debug('Injected version:', packageJson.version);
console.debug('Injected build date:', buildDate);

export default defineConfig({
  plugins: [pluginVue()],
  html: {
    template: './index.html',
  },
  source: {
    define: {
      __APP_VERSION__: JSON.stringify(packageJson.version),
      __BUILD_DATE__: JSON.stringify(buildDate),
    },
    entry: {
      index: './src/main.ts',
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
