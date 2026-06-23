// יוצר את גרסת ה-Light (V1) תחת dist/v1/ ע"י העתקת ה-HTML הבנוי.
// הנכסים (assets) נטענים בנתיב מוחלט (/Digitalink/assets/...), כך שאותו
// bundle משרת את שתי הגרסאות. ה-theme נקבע לפי הנתיב (ראו index.html).
import { mkdirSync, copyFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const src = resolve(root, 'dist/index.html')
const destDir = resolve(root, 'dist/v1')

mkdirSync(destDir, { recursive: true })
copyFileSync(src, resolve(destDir, 'index.html'))
console.log('✓ created dist/v1/index.html (Light mode / V1)')
