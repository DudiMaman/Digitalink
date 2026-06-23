import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // נתיב בסיס עבור GitHub Pages (https://dudimaman.github.io/Digitalink/)
  base: '/Digitalink/',
  plugins: [react()],
})
