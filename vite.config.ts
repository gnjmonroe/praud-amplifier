import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
import svgr from "vite-plugin-svgr";
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    { // default settings on build (i.e. fail on error)
      ...eslint({
        failOnWarning: false,
        failOnError: false,
      }),
      apply: 'build',
    },
    { // do not fail on serve (i.e. local development)
      ...eslint({
        failOnWarning: false,
        failOnError: false,
      }),
      apply: 'serve',
      enforce: 'post'
    },
    svgr(),
    VitePWA({ 
      registerType: 'autoUpdate',
    })
  ]
})
