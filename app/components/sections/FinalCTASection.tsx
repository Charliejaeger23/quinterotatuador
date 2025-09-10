'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { siteConfig } from '@/lib/config'

export default function FinalCTASection(){
  const prefersReduced = useReducedMotion()
  const wa = `https://wa.me/${siteConfig.business.whatsapp}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`
  const phone = siteConfig.business.whatsapp
  const mail = siteConfig.business.email
  return (
    <section className="section text-center">
      <div className="container-custom">
        <motion.h2
          initial={prefersReduced?{opacity:0}:{opacity:0, y:12}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{duration:0.5}}
          className="font-cinzel text-3xl mb-6"
        >
          ¿Listo para comenzar?
        </motion.h2>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href={wa} aria-label="Contactar por WhatsApp" target="_blank" rel="noopener noreferrer" className="px-5 py-3 rounded-lg bg-ink-red text-white text-sm font-medium text-center">WhatsApp</a>
          <a href={`tel:${phone}`} aria-label="Llamar por teléfono" className="px-5 py-3 rounded-lg border border-ink-red text-sm text-white text-center">Llamada</a>
          <a href={`mailto:${mail}`} aria-label="Enviar correo" className="px-5 py-3 rounded-lg border border-white/15 text-sm text-white/90 text-center">Email</a>
        </div>
      </div>
    </section>
  )
}
