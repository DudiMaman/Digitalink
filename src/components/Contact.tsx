import { useEffect, useState, type FormEvent } from 'react'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { useContent, contactInfo } from '../i18n'
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
type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const { contact } = useContent()
  const f = contact.form

  const [form, setForm] = useState<FormState>(() => ({
    name: '',
    phone: '',
    email: '',
    interest: contact.interests[0],
    message: '',
  }))
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')

  // עדכון ברירת המחדל של תחום העניין בעת החלפת שפה
  useEffect(() => {
    setForm((prev) => ({ ...prev, interest: contact.interests[0] }))
  }, [contact])

  const update = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }))
    setErrors((e) => ({ ...e, [key]: undefined }))
  }

  const validate = (): boolean => {
    const next: Errors = {}
    if (!form.name.trim()) next.name = f.errName
    if (!/^[0-9+\-\s()]{7,}$/.test(form.phone.trim())) next.phone = f.errPhone
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = f.errEmail
    if (!form.message.trim()) next.message = f.errMessage
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate() || status === 'sending') return
    setStatus('sending')
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${contactInfo.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          [f.name]: form.name,
          [f.phone]: form.phone,
          [f.email]: form.email,
          [f.interest]: form.interest,
          [f.message]: form.message,
          _subject: `New inquiry — Digital Link — ${form.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      })
      const data = await res.json()
      if (res.ok && String(data.success) === 'true') {
        setStatus('sent')
        setForm({ name: '', phone: '', email: '', interest: contact.interests[0], message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputBase =
    'w-full rounded-xl border bg-elevated/70 px-4 py-3 text-content placeholder-content/35 outline-none transition-colors focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/30'

  return (
    <section
      id="contact"
      className="relative border-y border-content/5 bg-brand-teal/[0.06] py-16 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 flex justify-center">
        <div
          className="h-[28rem] w-[28rem] rounded-full"
          style={{ background: 'radial-gradient(closest-side, rgba(16,185,129,0.12), transparent)' }}
        />
      </div>

      <div className="container-base">
        <SectionTitle eyebrow={contact.eyebrow} title={contact.title} subtitle={contact.subtitle} />

        <div className="mx-auto max-w-2xl">
          <Reveal>
            {status === 'sent' ? (
              <div className="glass flex flex-col items-center justify-center gap-4 rounded-2xl p-10 text-center">
                <CheckCircle2 size={56} className="text-brand-emerald" />
                <h3 className="font-display text-2xl font-bold">{f.successTitle}</h3>
                <p className="max-w-sm text-content/60">{f.successMsg}</p>
                <button type="button" onClick={() => setStatus('idle')} className="btn-ghost mt-2">
                  {f.sendAgain}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="glass rounded-2xl p-6 sm:p-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-content/70">
                      {f.name}
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      className={`${inputBase} ${errors.name ? 'border-red-400' : 'border-content/10'}`}
                      placeholder={f.namePh}
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-content/70">
                      {f.phone}
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      dir="ltr"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      className={`${inputBase} text-start ${errors.phone ? 'border-red-400' : 'border-content/10'}`}
                      placeholder={f.phonePh}
                    />
                    {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-content/70">
                      {f.email}
                    </label>
                    <input
                      id="email"
                      type="email"
                      dir="ltr"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      className={`${inputBase} text-start ${errors.email ? 'border-red-400' : 'border-content/10'}`}
                      placeholder={f.emailPh}
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="interest" className="mb-2 block text-sm font-medium text-content/70">
                      {f.interest}
                    </label>
                    <select
                      id="interest"
                      value={form.interest}
                      onChange={(e) => update('interest', e.target.value)}
                      className={`${inputBase} border-content/10`}
                    >
                      {contact.interests.map((opt) => (
                        <option key={opt} value={opt} className="bg-elevated">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-5">
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-content/70">
                    {f.message}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    className={`${inputBase} resize-none ${errors.message ? 'border-red-400' : 'border-content/10'}`}
                    placeholder={f.messagePh}
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === 'sending' ? f.sending : f.submit}
                  <Send size={18} />
                </button>

                {status === 'error' && (
                  <p className="mt-3 flex items-center justify-center gap-2 text-center text-sm text-red-400">
                    <AlertCircle size={16} />
                    {f.errorMsg}
                  </p>
                )}
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
