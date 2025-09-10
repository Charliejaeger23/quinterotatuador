'use client'

import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { siteConfig } from '@/lib/config'
import { Send } from 'lucide-react'

export default function FinalCTASection(){
  const prefersReduced = useReducedMotion()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    nombre: '', correo: '', idea: '', zona: '', presupuesto: '', disponibilidad: '', honeypot: ''
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const buildMessage = () => {
    const lines = [
      `Hola Carlos 👋`,
      `Nueva consulta desde la web:`,
      `• Nombre: ${form.nombre || '—'}`,
      `• Correo: ${form.correo || '—'}`,
      `• Zona del cuerpo: ${form.zona || '—'}`,
      `• Idea/Concepto: ${form.idea || '—'}`,
      `• Presupuesto aprox.: ${form.presupuesto || '—'}`,
      `• Disponibilidad: ${form.disponibilidad || '—'}`
    ]
    return encodeURIComponent(lines.join('\n'))
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (form.honeypot) return
    setLoading(true)
    const wa = `https://wa.me/${siteConfig.business.whatsapp}?text=${buildMessage()}`
    window.open(wa, '_blank')

    const subject = encodeURIComponent('Nueva consulta – Quinterotatuador')
    window.location.href = `mailto:${siteConfig.business.email}?subject=${subject}&body=${buildMessage()}`
    setLoading(false)
  }

  return (
    <section id="contacto" className="section">
      <div className="container-custom max-w-3xl">
        <motion.h2
          initial={prefersReduced ? {opacity:0} : {opacity:0, y:12}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{duration:0.5}}
          className="font-cinzel text-4xl text-center mb-4"
        >
          ¿Listo para comenzar?
        </motion.h2>

        <motion.p
          initial={prefersReduced ? {opacity:0} : {opacity:0, y:12}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{duration:0.5, delay:0.1}}
          className="text-dim text-center mb-8"
        >
          Completa el formulario y te respondo entre <span className="text-ink-red">2 y 12 horas</span>.
        </motion.p>

        <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 bg-ink-soft/40 border border-white/10 rounded-2xl p-6 md:p-8">
          {/* honeypot */}
          <input type="text" name="honeypot" value={form.honeypot} onChange={onChange} className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-ink-white/70">Nombre</label>
              <input
                name="nombre" required value={form.nombre} onChange={onChange}
                placeholder="Mariana R." aria-label="Nombre"
                className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 p-3 text-sm text-white placeholder:text-mute focus:outline-none focus:ring-2 focus:ring-ink-red"
              />
            </div>
            <div>
              <label className="text-sm text-ink-white/70">Correo</label>
              <input
                name="correo" type="email" required value={form.correo} onChange={onChange}
                placeholder="mariana@email.com" aria-label="Correo"
                className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 p-3 text-sm text-white placeholder:text-mute focus:outline-none focus:ring-2 focus:ring-ink-red"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-ink-white/70">Zona del cuerpo</label>
              <input
                name="zona" value={form.zona} onChange={onChange}
                placeholder="Espalda, brazo, pecho…" aria-label="Zona del cuerpo"
                className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 p-3 text-sm text-white placeholder:text-mute focus:outline-none focus:ring-2 focus:ring-ink-red"
              />
            </div>
            <div>
              <label className="text-sm text-ink-white/70">Presupuesto aprox.</label>
              <input
                name="presupuesto" value={form.presupuesto} onChange={onChange}
                placeholder="$200 – $600" aria-label="Presupuesto aproximado"
                className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 p-3 text-sm text-white placeholder:text-mute focus:outline-none focus:ring-2 focus:ring-ink-red"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-ink-white/70">Idea / Concepto</label>
            <textarea
              name="idea" value={form.idea} onChange={onChange} rows={4}
              placeholder="Cuéntame la historia o el símbolo que quieres llevar en la piel…"
              aria-label="Idea o concepto"
              className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 p-3 text-sm text-white placeholder:text-mute focus:outline-none focus:ring-2 focus:ring-ink-red"
            />
          </div>

          <div>
            <label className="text-sm text-ink-white/70">Disponibilidad</label>
            <input
              name="disponibilidad" value={form.disponibilidad} onChange={onChange}
              placeholder="Lunes a viernes, tardes / A partir del 15 de octubre…"
              aria-label="Disponibilidad"
              className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 p-3 text-sm text-white placeholder:text-mute focus:outline-none focus:ring-2 focus:ring-ink-red"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            data-cta="final"
            aria-label="Enviar consulta"
            className="mt-2 inline-flex items-center justify-center gap-2 bg-ink-red hover:bg-ink-red/90 text-white font-semibold rounded-xl px-6 py-3 transition-colors disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-ink-dark"
          >
            <Send size={18} aria-hidden="true" />
            {loading ? 'Enviando…' : 'Enviar consulta'}
          </button>

          <p className="text-xs text-ink-white/60">
            Al enviar aceptas ser contactado por WhatsApp o email. Tiempo de respuesta: 2–12 h.
          </p>
        </form>

        <blockquote className="mt-10 text-center text-dim italic">
          <p>"Aquí no repetimos diseños. Porque nadie repite tu historia."</p>
          <cite className="block mt-4 not-italic text-mute">— Carlos Quintero</cite>
        </blockquote>
      </div>
    </section>
  )
}
