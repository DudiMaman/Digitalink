import { useState, type FormEvent } from 'react'
import { Phone, Mail, MessageCircle, Send, CheckCircle2 } from 'lucide-react'
import { contact, contactInfo } from '../data/content'
import SectionTitle from './ui/SectionTitle'
import Reveal from './ui/Reveal'

type FormState = {
  name: string
  phone: string
  email: string
  interest: string
  message: string
}

type Errors = Partial<Record<keyof FormState, string>>

const empty: FormState = {
  name: '',
  phone: '',
  email: '',
  interest: contact.interests[0],
  message: '',
}

const whatsappLink = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(
  contactInfo.whatsappText,
)}`

export default function Contact() {
  const [form, setForm] = useState<FormState>(empty)
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  const update = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }))
    setErrors((e) => ({ ...e, [key]: undefined }))
  }

  const validate = (): boolean => {
    const next: Errors = {}
    if (!form.name.trim()) next.name = 'נא להזין שם'
    if (!/^[0-9+\-\s()]{7,}$/.test(form.phone.trim())) next.phone = 'נא להזין מספר טלפון תקין'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = 'נא להזין כתובת אימייל תקינה'
    if (!form.message.trim()) next.message = 'נא לכתוב הודעה קצרה'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    // ברירת מחדל ללא backend: פתיחת וואטסאפ עם פרטי הפנייה.
    // להמשך: כאן ניתן לחבר Formspree / EmailJS / endpoint משלכם.
    const text =
      `שם: ${form.name}\n` +
      `טלפון: ${form.phone}\n` +
      `אימייל: ${form.email}\n` +
      `תחום עניין: ${form.interest}\n` +
      `הודעה: ${form.message}`
    window.open(
      `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener',
    )
    setSent(true)
    setForm(empty)
  }

  const inputBase =
    'w-full rounded-xl border bg-ink-800/70 px-4 py-3 text-white placeholder-white/35 outline-none transition-colors focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/30'

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 flex justify-center">
        <div className="h-[28rem] w-[28rem] rounded-full bg-brand-emerald/10 blur-[150px]" />
      </div>

      <div className="container-base">
        <SectionTitle
          eyebrow="צרו קשר"
          title={contact.title}
          subtitle={contact.subtitle}
        />

        <div className="grid gap-8 lg:grid-cols-5">
          {/* פרטי קשר מהירים */}
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener"
                className="glass group flex items-center gap-4 rounded-2xl p-5 transition-colors hover:border-brand-teal/40"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-ink">
                  <MessageCircle size={24} />
                </span>
                <div>
                  <div className="font-bold">WhatsApp</div>
                  <div className="text-sm text-white/55">המענה המהיר ביותר</div>
                </div>
              </a>

              <a
                href={contactInfo.phoneHref}
                className="glass group flex items-center gap-4 rounded-2xl p-5 transition-colors hover:border-brand-teal/40"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-brand-cyan">
                  <Phone size={22} />
                </span>
                <div>
                  <div className="font-bold">טלפון</div>
                  <div dir="ltr" className="text-sm text-white/55">
                    {contactInfo.phone}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${contactInfo.email}`}
                className="glass group flex items-center gap-4 rounded-2xl p-5 transition-colors hover:border-brand-teal/40"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-brand-cyan">
                  <Mail size={22} />
                </span>
                <div>
                  <div className="font-bold">אימייל</div>
                  <div dir="ltr" className="text-sm text-white/55">
                    {contactInfo.email}
                  </div>
                </div>
              </a>
            </div>
          </Reveal>

          {/* טופס */}
          <Reveal delay={0.1} className="lg:col-span-3">
            {sent ? (
              <div className="glass flex h-full flex-col items-center justify-center gap-4 rounded-2xl p-10 text-center">
                <CheckCircle2 size={56} className="text-brand-emerald" />
                <h3 className="font-display text-2xl font-bold">תודה רבה!</h3>
                <p className="max-w-sm text-white/60">
                  פתחנו עבורכם חלון WhatsApp עם פרטי הפנייה. נחזור אליכם בהקדם 🙂
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="btn-ghost mt-2"
                >
                  שליחת פנייה נוספת
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="glass rounded-2xl p-6 sm:p-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/70">
                      שם מלא
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      className={`${inputBase} ${errors.name ? 'border-red-400' : 'border-white/10'}`}
                      placeholder="ישראל ישראלי"
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-white/70">
                      טלפון
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      dir="ltr"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      className={`${inputBase} text-right ${errors.phone ? 'border-red-400' : 'border-white/10'}`}
                      placeholder="050-0000000"
                    />
                    {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/70">
                      אימייל
                    </label>
                    <input
                      id="email"
                      type="email"
                      dir="ltr"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      className={`${inputBase} text-right ${errors.email ? 'border-red-400' : 'border-white/10'}`}
                      placeholder="name@email.com"
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="interest" className="mb-2 block text-sm font-medium text-white/70">
                      תחום עניין
                    </label>
                    <select
                      id="interest"
                      value={form.interest}
                      onChange={(e) => update('interest', e.target.value)}
                      className={`${inputBase} border-white/10`}
                    >
                      {contact.interests.map((opt) => (
                        <option key={opt} value={opt} className="bg-ink-800">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-5">
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/70">
                    איך נוכל לעזור?
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    className={`${inputBase} resize-none ${errors.message ? 'border-red-400' : 'border-white/10'}`}
                    placeholder="ספרו לנו קצת על העסק והיעדים שלכם..."
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
                </div>

                <button type="submit" className="btn-primary mt-6 w-full">
                  שליחת הפנייה
                  <Send size={18} />
                </button>
                <p className="mt-3 text-center text-xs text-white/40">
                  השליחה פותחת חלון WhatsApp עם פרטי הפנייה.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
