import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Custom domain (CNAME) is served from the root, so base stays '/'.
  base: '/',
  plugins: [react(), tailwindcss()],
})
