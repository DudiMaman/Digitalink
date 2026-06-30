import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

/** פרטי מותג וקשר — ניטרליים לשפה */
export const brand = {
  name: 'Digital Link',
  nameParts: { first: 'Digital', second: 'Link' },
  tagline: 'Your Digital Partner',
}

export const contactInfo = {
  phone: '050-0000000',
  phoneHref: 'tel:+972500000000',
  whatsapp: '972500000000',
  email: 'dudi.maman@gmail.com',
}

export type Lang = 'he' | 'en'

const he = {
  nav: [
    { label: 'שירותים', href: '#services' },
    { label: 'פיתוח', href: '#development' },
    { label: 'הגישה שלנו', href: '#approach' },
    { label: 'תהליך', href: '#process' },
    { label: 'צור קשר', href: '#contact' },
  ],
  hero: {
    titlePrefix: 'הופכים',
    rotatingWords: ['נוכחות דיגיטלית', 'סושיאל', 'PPC', 'SEO', 'GEO', 'דאטה'],
    titleSuffix: 'לתוצאות',
    subtitle:
      'אנחנו בונים מותגים שזוכרים. דגש על סושיאל מדיה שמדבר אל הקהל שלכם, לצד מערך דיגיטל מלא — PPC, SEO, GEO ואוטומציית שיווק — הכל מבוסס דאטה ויצירתיות.',
    primaryCta: 'בואו נדבר',
    secondaryCta: 'לשירותים שלנו',
  },
  services: {
    eyebrow: 'מה אנחנו עושים',
    title: 'מערך דיגיטל מלא תחת קורת גג אחת',
    subtitle: 'מסושיאל שמייצר באזז ועד אוטומציה שמגדילה המרות — כל מה שצריך כדי לצמוח.',
    items: [
      {
        id: 'social',
        title: 'סושיאל מדיה',
        description:
          'אסטרטגיית תוכן, ניהול קהילות, קריאייטיב שעוצר את הגלילה והפקות שמייצרות מעורבות אמיתית. בונים נוכחות שגורמת לקהל לעצור, להגיב ולחזור.',
        bullets: ['ניהול וקריאייטיב', 'אסטרטגיית תוכן', 'קמפייני משפיענים', 'וידאו וסטוריטלינג'],
        icon: 'Share2',
      },
      {
        id: 'ppc',
        title: 'PPC — מדיה ממומנת',
        description:
          'קמפיינים בגוגל, מטא, טיקטוק ולינקדאין שממוקדים בתשואה. ניהול תקציבים חכם, אופטימיזציה יומיומית ושקיפות מלאה על כל שקל.',
        bullets: ['Google & Meta Ads', 'אופטימיזציה ל-ROAS', 'דוחות שקופים'],
        icon: 'Target',
      },
      {
        id: 'seo',
        title: 'SEO — קידום אורגני',
        description:
          'נבנה לכם נוכחות אורגנית שמביאה תנועה איכותית לאורך זמן. מחקר מילים, תוכן, SEO טכני ובניית סמכות.',
        bullets: ['מחקר מילות מפתח', 'SEO טכני', 'אסטרטגיית תוכן'],
        icon: 'Search',
      },
      {
        id: 'geo',
        title: 'GEO — אופטימיזציה למנועי בינה',
        description:
          'העולם עובר לחיפוש מבוסס AI. נדאג שהמותג שלכם יופיע בתשובות של ChatGPT, Gemini ומנועי הבינה — שם הקהל החדש מחפש.',
        bullets: ['נראות במנועי AI', 'תוכן מובנה', 'מעקב אזכורים'],
        icon: 'Sparkles',
      },
      {
        id: 'automation',
        title: 'Marketing Automation',
        description:
          'מסעות לקוח אוטומטיים שעובדים בשבילכם 24/7 — מיילים, ניוטור לידים ופרסונליזציה שמגדילים המרות בלי מאמץ ידני.',
        bullets: ['מסעות לקוח', 'CRM ואינטגרציות', 'ניהול לידים'],
        icon: 'Workflow',
      },
      {
        id: 'data',
        title: 'דאטה ואנליטיקס',
        description:
          'הופכים נתונים להחלטות. מעקב מדויק, דשבורדים בזמן אמת וניתוח התנהגות — כדי לדעת בדיוק מה עובד ולאן כדאי להשקיע.',
        bullets: ['דשבורדים ו-BI', 'GA4 ומעקב המרות', 'ניתוח ותובנות'],
        icon: 'BarChart3',
      },
    ],
  },
  development: {
    eyebrow: 'בנייה ופיתוח',
    title: 'בונים את המוצר הדיגיטלי שלכם',
    subtitle: 'מאתר תדמית ועד מערכת מורכבת — מפתחים פתרונות דיגיטליים מהירים, יציבים ומדויקים לצרכים שלכם.',
    items: [
      { title: 'אתרים ודפי נחיתה', description: 'אתרים מהירים, רספונסיביים ומותאמי-SEO — מדף נחיתה ממוקד-המרה ועד אתר תדמית מלא.', icon: 'Globe' },
      { title: 'אפליקציות', description: 'אפליקציות מובייל ו-web מקצה לקצה — חוויית משתמש חלקה, ביצועים גבוהים וקוד שניתן להרחבה.', icon: 'Smartphone' },
      { title: 'מערכות ניהול', description: 'מערכות ניהול, דשבורדים ו-CRM מותאמים אישית שמייעלים תהליכים ונותנים שליטה מלאה.', icon: 'LayoutDashboard' },
      { title: 'פיצ׳רים ואינטגרציות', description: 'פיתוח פיצ׳רים מותאמים, חיבור ל-API, סליקה ואוטומציות שמחברות בין כל המערכות שלכם.', icon: 'Puzzle' },
      { title: 'עיצוב מוצר UX/UI', description: 'מהאפיון ועד הפיקסל — ממשקים נקיים וידידותיים שממירים מבקרים ללקוחות.', icon: 'Palette' },
      { title: 'תחזוקה ותמיכה', description: 'ליווי שוטף, עדכונים, ניטור ביצועים ואבטחה — שהמוצר יישאר תמיד חד, מהיר ובטוח.', icon: 'Wrench' },
    ],
  },
  approach: {
    eyebrow: 'היתרון שלנו',
    title: 'למה לעבוד איתנו',
    subtitle: 'גישה שמשלבת יצירתיות עם נתונים — ומביאה תוצאות שאפשר למדוד.',
    items: [
      {
        title: 'מבוססי דאטה',
        description: 'כל החלטה נשענת על נתונים, לא על תחושות בטן. מודדים, לומדים ומשפרים בלי הפסקה.',
        icon: 'BarChart3',
      },
      {
        title: 'קריאייטיב שבולט',
        description: 'תוכן שלא נבלע בפיד. רעיונות מקוריים שמייצרים שיחה ומחברים בין מותג לקהל.',
        icon: 'Palette',
      },
      {
        title: 'שקיפות מלאה',
        description: 'דוחות ברורים, יעדים מוסכמים וגישה ישירה. אתם תמיד יודעים מה קורה עם התקציב.',
        icon: 'Eye',
      },
      {
        title: 'מהירות וגמישות',
        description: 'מגיבים מהר לשינויים בשוק ובאלגוריתמים. צוות זמין שזז בקצב של הדיגיטל.',
        icon: 'Zap',
      },
    ],
  },
  process: {
    eyebrow: 'התהליך',
    title: 'איך זה עובד',
    subtitle: 'תהליך ברור מהיכרות ועד צמיחה מתמשכת.',
    steps: [
      { step: '01', title: 'אסטרטגיה', description: 'לומדים את העסק, הקהל והמתחרים. בונים תוכנית פעולה עם יעדים מדידים.' },
      { step: '02', title: 'קריאייטיב', description: 'מתרגמים את האסטרטגיה לקונספט, שפה ויזואלית ותכנים שמדברים אל הקהל.' },
      { step: '03', title: 'השקה', description: 'מעלים קמפיינים לאוויר בכל הערוצים, עם מעקב והגדרת מדדים מהיום הראשון.' },
      { step: '04', title: 'אופטימיזציה', description: 'מנתחים, מדייקים ומגדילים. שיפור מתמיד שמתרגם תקציב לתוצאות.' },
    ],
  },
  stats: [
    { value: 150, prefix: '', suffix: '+', label: 'קמפיינים שהושקו' },
    { value: 40, prefix: '₪', suffix: 'M+', label: 'תקציבי מדיה מנוהלים' },
    { value: 4.8, prefix: '', suffix: 'x', label: 'תשואה ממוצעת (ROAS)' },
    { value: 98, prefix: '', suffix: '%', label: 'לקוחות שממליצים' },
  ],
  contact: {
    eyebrow: 'צרו קשר',
    title: 'בואו נתחיל לצמוח',
    subtitle: 'ספרו לנו על העסק והיעדים שלכם — ונחזור אליכם עם רעיונות ראשונים תוך יום עסקים.',
    interests: ['סושיאל מדיה', 'PPC', 'SEO', 'GEO', 'אוטומציית שיווק', 'אסטרטגיה כוללת'],
    form: {
      name: 'שם מלא',
      phone: 'טלפון',
      email: 'אימייל',
      interest: 'תחום עניין',
      message: 'איך נוכל לעזור?',
      namePh: 'ישראל ישראלי',
      phonePh: '050-0000000',
      emailPh: 'name@email.com',
      messagePh: 'ספרו לנו קצת על העסק והיעדים שלכם...',
      submit: 'שליחת הפנייה',
      sending: 'שולח…',
      errorMsg: 'משהו השתבש בשליחה. נסו שוב או פנו אלינו ישירות במייל.',
      successTitle: 'תודה רבה!',
      successMsg: 'קיבלנו את פנייתכם והיא נשלחה אלינו במייל. נחזור אליכם בהקדם 🙂',
      sendAgain: 'שליחת פנייה נוספת',
      errName: 'נא להזין שם',
      errPhone: 'נא להזין מספר טלפון תקין',
      errEmail: 'נא להזין כתובת אימייל תקינה',
      errMessage: 'נא לכתוב הודעה קצרה',
    },
  },
  footer: {
    description: 'סוכנות דיגיטל שהופכת נוכחות לתוצאות — סושיאל, PPC, SEO, GEO ואוטומציית שיווק.',
    rights: 'כל הזכויות שמורות.',
  },
  sectionNav: [
    { id: 'hero', label: 'בית' },
    { id: 'services', label: 'שירותים' },
    { id: 'development', label: 'פיתוח' },
    { id: 'approach', label: 'הגישה' },
    { id: 'process', label: 'תהליך' },
    { id: 'contact', label: 'צור קשר' },
  ],
  ui: { menuOpen: 'פתיחת תפריט', menuClose: 'סגירת תפריט', logoAria: 'Digital Link — לדף הבית', switchLabel: 'EN' },
}

type Content = typeof he

const en: Content = {
  nav: [
    { label: 'Services', href: '#services' },
    { label: 'Development', href: '#development' },
    { label: 'Approach', href: '#approach' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    titlePrefix: 'We turn',
    rotatingWords: ['digital presence', 'social', 'PPC', 'SEO', 'GEO', 'data'],
    titleSuffix: 'into results',
    subtitle:
      'We build brands people remember. A strong focus on social media that speaks to your audience, alongside a full digital stack — PPC, SEO, GEO and marketing automation — all driven by data and creativity.',
    primaryCta: "Let's talk",
    secondaryCta: 'Our services',
  },
  services: {
    eyebrow: 'What we do',
    title: 'A full digital operation under one roof',
    subtitle: 'From social that creates buzz to automation that boosts conversions — everything you need to grow.',
    items: [
      {
        id: 'social',
        title: 'Social Media',
        description:
          'Content strategy, community management, scroll-stopping creative and productions that drive real engagement. We build a presence that makes people stop, react and come back.',
        bullets: ['Management & creative', 'Content strategy', 'Influencer campaigns', 'Video & storytelling'],
        icon: 'Share2',
      },
      {
        id: 'ppc',
        title: 'PPC — Paid Media',
        description:
          'Campaigns on Google, Meta, TikTok and LinkedIn focused on return. Smart budget management, daily optimization and full transparency on every dollar.',
        bullets: ['Google & Meta Ads', 'ROAS optimization', 'Transparent reports'],
        icon: 'Target',
      },
      {
        id: 'seo',
        title: 'SEO — Organic Growth',
        description:
          'We build an organic presence that brings quality traffic over time. Keyword research, content, technical SEO and authority building.',
        bullets: ['Keyword research', 'Technical SEO', 'Content strategy'],
        icon: 'Search',
      },
      {
        id: 'geo',
        title: 'GEO — AI Engine Optimization',
        description:
          'The world is moving to AI-based search. We make sure your brand shows up in the answers of ChatGPT, Gemini and AI engines — where the new audience is searching.',
        bullets: ['Visibility in AI engines', 'Structured content', 'Mention tracking'],
        icon: 'Sparkles',
      },
      {
        id: 'automation',
        title: 'Marketing Automation',
        description:
          'Automated customer journeys that work for you 24/7 — emails, lead nurturing and personalization that lift conversions with no manual effort.',
        bullets: ['Customer journeys', 'CRM & integrations', 'Lead management'],
        icon: 'Workflow',
      },
      {
        id: 'data',
        title: 'Data & Analytics',
        description:
          'Turning data into decisions. Accurate tracking, real-time dashboards and behavior analysis — so you know exactly what works and where to invest.',
        bullets: ['Dashboards & BI', 'GA4 & conversion tracking', 'Analysis & insights'],
        icon: 'BarChart3',
      },
    ],
  },
  development: {
    eyebrow: 'Build & develop',
    title: 'We build your digital product',
    subtitle: 'From a brand site to a complex system — we develop fast, stable and precise digital solutions tailored to your needs.',
    items: [
      { title: 'Websites & landing pages', description: 'Fast, responsive, SEO-ready websites — from a conversion-focused landing page to a full brand site.', icon: 'Globe' },
      { title: 'Applications', description: 'End-to-end mobile and web apps — smooth UX, high performance and clean, scalable code.', icon: 'Smartphone' },
      { title: 'Management systems', description: 'Custom admin systems, dashboards and CRMs that streamline processes and give you full control.', icon: 'LayoutDashboard' },
      { title: 'Features & integrations', description: 'Custom feature development, API connections, payments and automations that link all your systems.', icon: 'Puzzle' },
      { title: 'Product design (UX/UI)', description: 'From spec to pixel — clean, friendly interfaces that turn visitors into customers.', icon: 'Palette' },
      { title: 'Maintenance & support', description: 'Ongoing support, updates, performance monitoring and security — keeping your product sharp and fast.', icon: 'Wrench' },
    ],
  },
  approach: {
    eyebrow: 'Our edge',
    title: 'Why work with us',
    subtitle: 'An approach that blends creativity with data — and delivers results you can measure.',
    items: [
      {
        title: 'Data-driven',
        description: 'Every decision is based on data, not gut feelings. We measure, learn and improve non-stop.',
        icon: 'BarChart3',
      },
      {
        title: 'Standout creative',
        description: "Content that doesn't get lost in the feed. Original ideas that spark conversation and connect brand to audience.",
        icon: 'Palette',
      },
      {
        title: 'Full transparency',
        description: "Clear reports, agreed goals and direct access. You always know what's happening with the budget.",
        icon: 'Eye',
      },
      {
        title: 'Speed & flexibility',
        description: 'We react fast to market and algorithm changes. An available team that moves at digital pace.',
        icon: 'Zap',
      },
    ],
  },
  process: {
    eyebrow: 'The process',
    title: 'How it works',
    subtitle: 'A clear process from first meeting to ongoing growth.',
    steps: [
      { step: '01', title: 'Strategy', description: 'We learn the business, audience and competitors, and build an action plan with measurable goals.' },
      { step: '02', title: 'Creative', description: 'We translate strategy into concept, visual language and content that speaks to the audience.' },
      { step: '03', title: 'Launch', description: 'We take campaigns live across all channels, with tracking and metrics set from day one.' },
      { step: '04', title: 'Optimization', description: 'We analyze, refine and scale. Continuous improvement that turns budget into results.' },
    ],
  },
  stats: [
    { value: 150, prefix: '', suffix: '+', label: 'Campaigns launched' },
    { value: 40, prefix: '$', suffix: 'M+', label: 'Media budgets managed' },
    { value: 4.8, prefix: '', suffix: 'x', label: 'Average return (ROAS)' },
    { value: 98, prefix: '', suffix: '%', label: 'Clients who recommend us' },
  ],
  contact: {
    eyebrow: 'Contact',
    title: "Let's start growing",
    subtitle: "Tell us about your business and goals — and we'll get back to you with first ideas within one business day.",
    interests: ['Social Media', 'PPC', 'SEO', 'GEO', 'Marketing Automation', 'Overall strategy'],
    form: {
      name: 'Full name',
      phone: 'Phone',
      email: 'Email',
      interest: 'Area of interest',
      message: 'How can we help?',
      namePh: 'John Doe',
      phonePh: '050-0000000',
      emailPh: 'name@email.com',
      messagePh: 'Tell us a bit about your business and goals...',
      submit: 'Send message',
      sending: 'Sending…',
      errorMsg: 'Something went wrong. Please try again or email us directly.',
      successTitle: 'Thank you!',
      successMsg: "We received your message and it was sent to us by email. We'll get back to you soon 🙂",
      sendAgain: 'Send another message',
      errName: 'Please enter your name',
      errPhone: 'Please enter a valid phone number',
      errEmail: 'Please enter a valid email address',
      errMessage: 'Please write a short message',
    },
  },
  footer: {
    description: 'A digital agency that turns presence into results — social, PPC, SEO, GEO and marketing automation.',
    rights: 'All rights reserved.',
  },
  sectionNav: [
    { id: 'hero', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'development', label: 'Development' },
    { id: 'approach', label: 'Approach' },
    { id: 'process', label: 'Process' },
    { id: 'contact', label: 'Contact' },
  ],
  ui: { menuOpen: 'Open menu', menuClose: 'Close menu', logoAria: 'Digital Link — home', switchLabel: 'עב' },
}

const dictionaries: Record<Lang, Content> = { he, en }

type Ctx = { lang: Lang; setLang: (l: Lang) => void; c: Content }
const LanguageContext = createContext<Ctx | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('he')

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr'
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, c: dictionaries[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}

export function useContent() {
  return useLang().c
}
