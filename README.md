# Digital Link — Your Digital Partner

אתר נחיתה (Landing Page) לסוכנות הדיגיטל **Digital Link**, בעברית מלאה (RTL).
האתר משדר מומחיות דיגיטלית עם דגש על **סושיאל מדיה**, לצד מערך יכולות מלא:
**PPC, SEO, GEO ו-Marketing Automation**.

## טכנולוגיות

- **Vite + React 18 + TypeScript**
- **Tailwind CSS** — עיצוב ו-RTL
- **Framer Motion** — אנימציות וגלילה
- **lucide-react** — אייקונים

## הרצה מקומית

```bash
npm install      # התקנת תלויות
npm run dev      # הרצת שרת פיתוח (http://localhost:5173)
npm run build    # בנייה לפרודקשן (תיקיית dist/)
npm run preview  # תצוגה מקדימה של ה-build
```

## עריכת תוכן

כל הטקסטים, השירותים, ההמלצות ופרטי הקשר מרוכזים בקובץ אחד:

```
src/data/content.ts
```

לעדכון מספר טלפון, WhatsApp, אימייל, רשתות חברתיות או כל טקסט — ערכו שם בלבד.

## מבנה

```
src/
├── App.tsx               # מרכיב את כל הסקשנים
├── data/content.ts       # מקור אמת לכל התוכן
└── components/
    ├── Navbar, Hero, Services, Approach, Process,
    │   Stats, Portfolio, Testimonials, Contact, Footer
    └── ui/               # Logo, Reveal, SectionTitle, GradientText, Icon
```

## טופס יצירת קשר

כברירת מחדל, שליחת הטופס פותחת חלון **WhatsApp** עם פרטי הפנייה (ללא צורך ב-backend).
לחיבור שליחה במייל/CRM בעתיד — ראו את ההערה ב-`src/components/Contact.tsx`
(ניתן לחבר Formspree / EmailJS / endpoint משלכם).

## פריסה

הפרויקט מוכן לפריסה ל-**Vercel** / **Netlify** (זיהוי אוטומטי של Vite),
או ל-**GitHub Pages**. תיקיית הפלט היא `dist/`.
