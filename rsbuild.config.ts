import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';

export default defineConfig({
  plugins: [pluginVue()],
  html: {
    template: './index.html'
  },
  source: {
    entry: {
      index: './src/main.js'
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
