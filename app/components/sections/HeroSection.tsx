'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Play, Pause, Calendar, Eye, Star } from 'lucide-react'
import { siteConfig } from '@/lib/config'
import { useInView } from 'react-intersection-observer'

const heroImages = [
  '/images/hero/carlos-working-1.jpg',
  '/images/hero/tattoo-detail-1.jpg',
  '/images/hero/studio-atmosphere-1.jpg',
  '/images/hero/carlos-portrait-1.jpg',
]

const heroStats = [
  { number: '10+', label: 'Años de Experiencia', icon: Star },
  { number: '500+', label: 'Historias Tatuadas', icon: Eye },
  { number: '100%', label: 'Satisfacción', icon: Calendar },
]

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

  // Auto-rotate background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio')
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  const whatsappUrl = `https://wa.me/${siteConfig.business.whatsapp}?text=${encodeURIComponent(
    siteConfig.contact.whatsappMessage
  )}`

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${heroImages[currentImageIndex]}')` }}
          />
        </AnimatePresence>

        {/* Overlays oscuros */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink-black/80 via-ink-black/60 to-ink-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-black/90 via-transparent to-ink-black/70" />
      </div>

      {/* Optional Video Background */}
      {isVideoPlaying && (
        <div className="absolute inset-0 z-10">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            onEnded={() => setIsVideoPlaying(false)}
          >
            <source src="/videos/carlos-working-studio.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-ink-black/40" />
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-20 container-custom text-center text-ink-white">
        <div ref={ref} className="max-w-4xl mx-auto">
          {/* Pre-title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-ink-red/20 border border-ink-red/30 rounded-full text-ink-red font-medium text-sm uppercase tracking-wider backdrop-blur-sm">
              🎨 Tatuador Profesional en Valencia, Venezuela
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-cinzel font-bold text-4xl md:text-6xl lg:text-7xl xl:text-8xl mb-6 leading-tight"
          >
            <span className="block text-ink-white">Arte que</span>
            <span className="block gradient-text">Trasciende la Piel</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl lg:text-2xl text-ink-white/80 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Transformo historias personales en obras de arte únicas e irrepetibles. Especializado en{' '}
            <span className="text-ink-red font-medium">realismo</span>,{' '}
            <span className="text-ink-red font-medium">blackwork</span> y{' '}
            <span className="text-ink-red font-medium">diseños personalizados</span> con significado
            profundo.
          </motion.p>

          {/* Signature Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-10"
          >
            <blockquote className="text-xl md:text-2xl italic text-ink-red font-cinzel border-l-4 border-ink-red pl-6 max-w-2xl mx-auto">
              "Aquí no repetimos diseños. Porque nadie repite tu historia."
            </blockquote>
            <cite className="text-ink-white/60 text-sm mt-2 block">— Carlos Quintero</cite>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl px-8 py-4 min-w-[240px] shadow-xl bg-ink-red text-ink-white hover:bg-ink-red/90 transition-colors"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <Calendar size={20} />
                Agenda tu Consulta
              </span>
              {/* hover glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-ink-red/0 via-white/10 to-ink-red/0" />
            </Link>

            <button
              onClick={scrollToPortfolio}
              className="group relative overflow-hidden rounded-xl px-8 py-4 min-w-[240px] backdrop-blur-sm border border-ink-red text-ink-white hover:bg-ink-red/10 transition-colors"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <Eye size={20} />
                Ver Mi Trabajo
              </span>
            </button>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
                className="group text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-ink-red/20 border border-ink-red/30 rounded-full mb-4 group-hover:bg-ink-red/30 group-hover:scale-110 transition-all duration-300">
                  <stat.icon size={24} className="text-ink-red" />
                </div>
                <div className="text-3xl font-cinzel font-bold text-ink-white mb-2 group-hover:text-ink-red transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-ink-white/70 text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Video Play Button */}
          {!isVideoPlaying && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.8, type: 'spring', stiffness: 200 }}
              onClick={() => setIsVideoPlaying(true)}
              className="group relative w-20 h-20 bg-white/10 hover:bg-white/20 border-2 border-white/30 hover:border-white/50 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110 mb-8"
            >
              <Play size={24} className="text-white ml-1" />
              <div className="absolute inset-0 rounded-full border-2 border-white/30 scale-100 group-hover:scale-150 opacity-100 group-hover:opacity-0 transition-all duration-500" />
            </motion.button>
          )}

          {/* Video Controls */}
          {isVideoPlaying && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setIsVideoPlaying(false)}
              className="fixed top-8 right-8 z-30 w-12 h-12 bg-black/50 hover:bg-black/70 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300"
            >
              <Pause size={20} className="text-white" />
            </motion.button>
          )}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={scrollToPortfolio}
            className="group flex flex-col items-center gap-2 text-ink-white/70 hover:text-ink-white transition-colors duration-300"
          >
            <span className="text-xs uppercase tracking-wider">Descubre mi trabajo</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-6 h-10 border-2 border-white/30 group-hover:border-white/60 rounded-full flex justify-center pt-2"
            >
              <div className="w-1 h-3 bg-white/50 group-hover:bg-white/80 rounded-full" />
            </motion.div>
          </button>
        </motion.div>
      </div>

      {/* Fade inferior */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-ink-black to-transparent z-10" />

      {/* Puntitos decorativos (rojo vino) */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-ink-red rounded-full animate-pulse opacity-60" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-ink-red rounded-full animate-pulse opacity-40 animation-delay-500" />
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-ink-red rounded-full animate-pulse opacity-50 animation-delay-1000" />
    </section>
  )
}
