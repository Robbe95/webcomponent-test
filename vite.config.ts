// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, './src/index.ts'),
      name: 'index',
      // the proper extensions will be added
      fileName: format => `index.${format}.js`,
    },
    rollupOptions: {
    },
  },
  plugins: [vue()],

})
