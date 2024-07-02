import { defineConfig } from 'vite';
import VueRouter from 'unplugin-vue-router/vite';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import Layouts from 'vite-plugin-vue-layouts';
import vue from '@vitejs/plugin-vue';
import { VueRouterAutoImports } from 'unplugin-vue-router';
import UnoCSS from 'unocss/vite';

export default defineConfig({
  base: '/id-tools/',
  build: {
    outDir: 'docs',
  },
  plugins: [
    Components(),
    VueRouter(),
    vue(),
    UnoCSS(),
    Layouts(),
    AutoImport({
      imports: ['vue', VueRouterAutoImports],
    }),
  ],
  server: {
    port: 5284,
  },
});
