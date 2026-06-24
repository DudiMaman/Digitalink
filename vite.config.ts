import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // נתיב יחסי — עובד גם בשורש סאב-דומיין (Cloudflare/Netlify) וגם תחת תת-נתיב (GitHub Pages)
  base: './',
  plugins: [react()],
})
