'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MessageCircle, Instagram, Clock } from 'lucide-react'
import Image from 'next/image'

export function FinalCTASection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const WHATSAPP_NUMBER = "+584241234567"
  const WHATSAPP_MESSAGE = encodeURIComponent(
    "¡Hola Carlos! He visto tu trabajo y me interesa agendar una consulta para un tatuaje personalizado. Mi idea es: [describe brevemente tu idea]. ¿Cuándo podríamos hablar?"
  )

  return (
    <section id="contacto" className="section-padding section-dark scroll-mt-nav relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 border border-gold/20 rounded-full animate-pulse-soft"></div>
        <div className="absolute bottom-20 right-16 w-24 h-24 border border-brand-700/20 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-20 w-4 h-4 bg-gold/40 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-20 w-6 h-6 bg-brand-700/40 rounded-full animate-float"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Main Heading */}
          <h2 className="heading-display text-white mb-6">
            Transforma tu
            <br />
            <span className="text-gradient">vivencia en arte</span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-gray-300 mb-4 font-light max-w-3xl mx-auto">
            Tu historia merece ser única. Mi agenda es limitada para garantizar 
            calidad y atención personalizada.
          </p>

          {/* Exclusivity Note */}
          <p className="text-gold italic text-lg mb-12">
            "Aquí no repetimos diseños. Porque nadie repite tu historia."
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Contact Form / Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="space-y-6">
              <h3 className="heading-lg text-white mb-6">
                Comencemos tu historia
              </h3>

              {/* WhatsApp Primary */}
              <motion.a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block bg-[#25D366] text-white p-6 rounded-2xl hover:bg-[#128C7E] transition-all duration-300 shadow-lg hover:shadow-xl group"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'click', {
                      event_category: 'Contact',
                      event_label: 'Final CTA WhatsApp',
                      value: 1
                    })
                  }
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                    <MessageCircle size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-lg">
                      Hablar con Carlos por WhatsApp
                    </div>
                    <div className="text-white/80 text-sm">
                      Respuesta típica en 2 horas • Más directo y personal
                    </div>
                  </div>
                  <div className="text-2xl">→</div>
                </div>
              </motion.a>

              {/* Alternative Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.a
                  href="mailto:hola@quinterotatuador.com"
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-800 text-white p-4 rounded-xl hover:bg-gray-700 transition-colors duration-300"
                >
                  <div className="text-center">
                    <div className="text-gold font-semibold mb-1">Email</div>
                    <div className="text-sm text-gray-300">hola@quinterotatuador.com</div>
                  </div>
                </motion.a>

                <motion.a
                  href="https://instagram.com/quinterotatuador"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-purple-600 to-pink-600 text-white p-4 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  <div className="text-center">
                    <div className="font-semibold mb-1 flex items-center justify-center gap-2">
                      <Instagram size={16} />
                      