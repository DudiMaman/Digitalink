import { useEffect, useState, type FormEvent } from 'react'
import { useContent, contactInfo } from '../i18n'
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
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = f.errEmail
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

  const field =
    'w-full rounded-[13px] border-[1.5px] border-content/[0.14] bg-[#F7F9FC] px-4 py-3.5 text-[16px] text-content outline-none transition-all focus:border-brand-blue focus:bg-white focus:ring-[3px] focus:ring-brand-blue/[0.12]'
  const label = 'flex flex-col gap-[7px] text-[14px] font-bold text-content'

  return (
    <section id="contact" className="relative z-[1] px-5 pb-[clamp(40px,5vw,70px)] pt-[clamp(48px,6vw,80px)] sm:px-8">
      <Reveal>
        <div
          className="mx-auto grid max-w-[1100px] overflow-hidden rounded-[30px] border border-content/[0.08] bg-white shadow-[0_30px_90px_rgba(11,18,32,.12)]"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))' }}
        >
          {/* פאנל כהה */}
          <div className="relative flex flex-col justify-center overflow-hidden bg-ink p-[clamp(32px,5vw,56px)]">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
                backgroundSize: '44px 44px',
                maskImage: 'radial-gradient(ellipse 110% 90% at 15% 0%, black, transparent 75%)',
                WebkitMaskImage: 'radial-gradient(ellipse 110% 90% at 15% 0%, black, transparent 75%)',
              }}
            />
            <div
              className="pointer-events-none absolute -bottom-36 -start-24 h-[380px] w-[380px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(14,124,255,.35), transparent 65%)' }}
            />
            <div className="relative">
              <h2 className="mb-3.5 text-[clamp(32px,4.5vw,52px)] font-black leading-[1.1] tracking-tight text-white">
                {contact.panelLine}
                <br />
                <span
                  style={{
                    background: 'linear-gradient(90deg,#4FD8FF,#9D7BFF)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  {contact.panelHighlight}
                </span>
              </h2>
              <p className="max-w-[380px] text-[17px] leading-[1.75]" style={{ color: 'rgba(234,240,247,.75)' }}>
                {contact.subtitle}
              </p>
              <div className="mt-7 flex flex-col gap-2.5">
                {contact.checks.map((ch) => (
                  <div key={ch} className="flex items-center gap-2.5 text-[14.5px]" style={{ color: 'rgba(234,240,247,.6)' }}>
                    <span className="text-brand-cyan">✓</span> {ch}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* פאנל טופס */}
          <div className="relative bg-white p-[clamp(28px,4vw,48px)]">
            {status === 'sent' ? (
              <div className="flex h-full flex-col items-center justify-center gap-3.5 rounded-[18px] border border-brand-blue/30 bg-brand-blue/5 p-10 text-center">
                <span className="text-[40px] text-brand-blue">✓</span>
                <h3 className="text-2xl font-extrabold text-content">{f.successTitle}</h3>
                <p className="text-base text-content/60">{f.successMsg}</p>
                <button type="button" onClick={() => setStatus('idle')} className="mt-1 text-sm font-semibold text-brand-blue">
                  {f.sendAgain}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3.5">
                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  <label className={label}>
                    {f.name}
                    <input
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      placeholder={f.namePh}
                      className={`${field} ${errors.name ? 'border-red-400' : ''}`}
                    />
                    {errors.name && <span className="text-xs font-medium text-red-500">{errors.name}</span>}
                  </label>
                  <label className={label}>
                    {f.phone}
                    <input
                      type="tel"
                      dir="ltr"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      placeholder={f.phonePh}
                      className={`${field} text-start ${errors.phone ? 'border-red-400' : ''}`}
                    />
                    {errors.phone && <span className="text-xs font-medium text-red-500">{errors.phone}</span>}
                  </label>
                </div>
                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  <label className={label}>
                    {f.email}
                    <input
                      type="email"
                      dir="ltr"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      placeholder={f.emailPh}
                      className={`${field} text-start ${errors.email ? 'border-red-400' : ''}`}
                    />
                    {errors.email && <span className="text-xs font-medium text-red-500">{errors.email}</span>}
                  </label>
                  <label className={label}>
                    {f.interest}
                    <select
                      value={form.interest}
                      onChange={(e) => update('interest', e.target.value)}
                      className={field}
                    >
                      {contact.interests.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <label className={label}>
                  {f.message}
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    placeholder={f.messagePh}
                    className={`${field} resize-y ${errors.message ? 'border-red-400' : ''}`}
                  />
                  {errors.message && <span className="text-xs font-medium text-red-500">{errors.message}</span>}
                </label>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="mt-1 rounded-[14px] bg-brand-gradient px-4 py-4 text-[17px] font-extrabold text-white shadow-cta transition-all hover:-translate-y-0.5 hover:shadow-cta-hover disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === 'sending' ? f.sending : f.submit} <span aria-hidden="true">←</span>
                </button>
                {status === 'error' && <p className="text-sm text-red-500">{f.errorMsg}</p>}
              </form>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
