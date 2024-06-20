import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  server: {
    host: true, // Esto permitirá que Vite escuche en 0.0.0.0
    port: 5173  // Puedes especificar el puerto que quieras, pero asegúrate de que coincida con el expuesto en Docker
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/_variables.scss";`
      }
    }
  }
})
