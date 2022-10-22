import { resolve } from 'path'
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'

import pkg from './package.json'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src'),
      },
    ],
  },
  build: {
    lib: {
      name: 'index',
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: Object.keys(pkg.dependencies),
      input: {
        index: resolve(__dirname, 'src/index.ts'),
      },
      output: {
        globals: {
          vue: 'Vue',
        },
        entryFileNames: () => '[name].js',
      },
    },
  },
  server: {
    // host: '192.168.0.21',
  },
})
