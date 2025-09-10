'use client'

import { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import { Calendar } from 'lucide-react'
import { siteConfig } from '@/lib/config'
import { useInView } from 'react-intersection-observer'

const images = [
  '/images/hero/carlos-working-1.jpg',
  '/images/hero/tattoo-detail-1.jpg',
  '/images/hero/studio-atmosphere-1.jpg',
  '/images/hero/carlos-portrait-1.jpg',
]

export default function HeroSection() {
  const [current, setCurrent] = useState(0)
  const prefersReduced = useReducedMotion()
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

  useEffect(() => {
    if (prefersReduced) return
    const id = setInterval(() => {
      setCurrent((p) => (p + 1) % images.length)
    }, 5000)
    return () => clearInterval(id)
  }, [prefersReduced])

  const wa = `https://wa.me/${siteConfig.business.whatsapp}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${images[current]}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      <div ref={ref} className="relative z-10 text-center px-4">
        <motion.h1
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-cinzel font-bold text-3xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 leading-tight"
        >
          <span className="block text-ink-white">Arte que</span>
          <span className="block gradient-text">Trasciende la Piel</span>
        </motion.h1>

        <motion.p
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-dim max-w-xl mx-auto mb-8"
        >
          Transformo historias personales en obras de arte únicas e irrepetibles.
        </motion.p>

        <motion.div
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center"
        >
          <Link
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agenda tu consulta"
            data-cta="hero"
            className="px-8 py-4 rounded-lg bg-ink-red text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-ink-dark"
          >
            <span className="flex items-center gap-2 justify-center"><Calendar size={20}/>Agenda tu consulta</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
