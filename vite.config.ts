import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Free hosting notes:
// - Vercel / Cloudflare Pages: base '/' (default)
// - GitHub Pages (project site): set base to '/<repo-name>/'
//   e.g. base: process.env.VITE_BASE ?? '/'
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [react(), tailwindcss()],
})
