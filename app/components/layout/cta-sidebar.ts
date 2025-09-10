'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export function CTASidebar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling past hero section
      const heroHeight = window.innerHeight
      setIsVisible(window.scrollY > heroHeight * 0.5)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="cta-sidebar"
        >
          <div className="space-y-3">
            {/* Primary CTA */}
            <Link
              href="#contacto"
              className="block bg-brand-700 text-white px-4 py-3 rounded-l-full font-medium text-sm hover:bg-brand-900 transition-colors duration-300 shadow-lg hover:shadow-brand-glow"
              style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'click', {
                    event_category: 'CTA',
                    event_label: 'Sidebar Primary',
                    value: 1
                  })
                }
              }}
            >
              Agenda tu cita
            </Link>

            {/* Secondary CTA */}
            <Link
              href="#portafolio"
              className="block bg-gold text-ink-1000 px-4 py-3 rounded-l-full font-medium text-sm hover:bg-gold-dark transition-colors duration-300 shadow-lg hover:shadow-gold-glow"
              style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
            >
              Ver trabajos
            </Link>

            {/* Social Proof Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-white px-3 py-2 rounded-l-full shadow-lg border border-gray-200"
            >
              <div className="text-center">
                <div className="text-lg font-bold text-brand-700">10+</div>
                <div className="text-xs text-gray-600" style={{ writingMode: 'vertical-rl' }}>
                  años
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}