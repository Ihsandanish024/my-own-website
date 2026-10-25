import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import Sitemap from 'vite-plugin-sitemap'

const courseRoutes = [
  '/arabic-courses',
  '/arabic-courses/gulf-arabic',
  '/arabic-courses/fusha-arabic',
  '/arabic-courses/arabic-grammar',
  '/arabic-courses/arabic-poetry',
  '/quran-studies',
  '/quran-studies/qaida',
  '/quran-studies/nazra',
  '/quran-studies/hifz',
  '/islamic-studies',
  '/islamic-studies/hadith',
  '/islamic-studies/fiqh',
  '/english-courses',
  '/english-courses/grammar',
  '/english-courses/conversation',
]

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Sitemap({
      hostname: 'https://my-own-website-seven-eta.vercel.app',
      dynamicRoutes: courseRoutes,
    }),
  ],
})
