'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Eye, ChevronLeft, ChevronRight, Star, Award } from 'lucide-react'
import { siteConfig } from '@/lib/config'

export default function CTASidebar() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [currentBadge, setCurrentBadge] = useState(0)

  // Social proof badges that rotate
  const badges = [
    { icon: Award, text: '10+ años', subtext: 'experiencia' },
    { icon: Star, text: '500+', subtext: 'tatuajes' },
    { icon: Eye, text: '100%', subtext: 'satisfacción' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling past hero section
      const heroHeight = window.innerHeight
      const scrolled = window.scrollY > heroHeight * 0.3
      setIsVisible(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Rotate badges every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBadge((prev) => (prev + 1) % badges.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [badges.length])

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const trackCTAClick = (label: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta_click', {
        event_category: 'CTA',
        event_label: `Sidebar ${label}`,
        value: 1
      })
    }
  }

  const whatsappUrl = `https://wa.me/${siteConfig.business.whatsapp}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 200, 
            damping: 25,
            duration: 0.6
          }}
          className={`fixed top-1/2 -translate-y-1/2 right-0 z-40 ${
            isExpanded ? 'w-72' : 'w-auto'
          } transition-all duration-300`}
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
        >
          {/* Main Container */}
          <div className="bg-white/95 backdrop-blur-sm shadow-xl rounded-l-2xl overflow-hidden border-l-4 border-primary">
            
            {/* Expand/Collapse Trigger */}
            <motion.div
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full bg-primary hover:bg-primary/90 text-white px-2 py-6 rounded-l-lg cursor-pointer transition-colors duration-200"
              whileHover={{ x: -2 }}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center"
              >
                <ChevronLeft size={16} />
              </motion.div>
            </motion.div>

            <div className="p-6 space-y-4">
              
              {/* Header */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="text-center border-b border-gray-200 pb-4"
                  >
                    <h3 className="font-cinzel font-bold text-lg text-primary">
                      ¡Conecta conmigo!
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Tu próximo tatuaje te espera
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Primary CTA - Schedule Appointment */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackCTAClick('Primary')}
                  className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className={`relative flex items-center gap-3 px-4 py-3 ${
                    isExpanded ? 'justify-start' : 'justify-center'
                  }`}>
                    <Calendar size={20} className="flex-shrink-0" />
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.span
                          initial={{ opacity: 0, width: 0 }}
                          animate={{ opacity: 1, width: 'auto' }}
                          exit={{ opacity: 0, width: 0 }}
                          className="font-semibold whitespace-nowrap"
                        >
                          Agenda tu Cita
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </Link>
              </motion.div>

              {/* Secondary CTA - View Portfolio */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  onClick={() => {
                    scrollToSection('#portfolio')
                    trackCTAClick('Secondary')
                  }}
                  className="group relative overflow-hidden bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-ink-1000 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className={`relative flex items-center gap-3 px-4 py-3 ${
                    isExpanded ? 'justify-start' : 'justify-center'
                  }`}>
                    <Eye size={20} className="flex-shrink-0" />
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.span
                          initial={{ opacity: 0, width: 0 }}
                          animate={{ opacity: 1, width: 'auto' }}
                          exit={{ opacity: 0, width: 0 }}
                          className="font-semibold whitespace-nowrap"
                        >
                          Ver Trabajos
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              </motion.div>

              {/* Social Proof Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 border border-gray-200 shadow-sm"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentBadge}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="text-center"
                  >
                    {(() => {
                      const Badge = badges[currentBadge]
                      return (
                        <>
                          <div className="flex items-center justify-center mb-2">
                            <div className="p-2 bg-primary/10 rounded-full">
                              <Badge.icon size={20} className="text-primary" />
                            </div>
                          </div>
                          <div className="text-2xl font-bold text-primary font-cinzel">
                            {Badge.text}
                          </div>
                          <div className="text-xs text-gray-600 uppercase tracking-wide">
                            {Badge.subtext}
                          </div>
                        </>
                      )
                    })()}
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* Quick Contact Info */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-center border-t border-gray-200 pt-4"
                  >
                    <div className="text-xs text-gray-500 mb-2">
                      Ubicado en {siteConfig.business.address}
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-600 font-medium">
                        Disponible ahora
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}