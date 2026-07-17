import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5987,
  },
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
  // GitHub Pages sets BASE_PATH (e.g. /rahel/); local/dev defaults to /
  base: process.env.BASE_PATH || '/',
})
