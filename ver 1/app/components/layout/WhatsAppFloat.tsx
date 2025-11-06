'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { MessageCircle, X } from 'lucide-react'
import { siteConfig } from '@/lib/config'

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false)
  const [showChat, setShowChat] = useState(false)

  const whatsappUrl = `https://wa.me/${siteConfig.business.whatsapp}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`

  const handleWhatsAppClick = () => {
    // Track WhatsApp click event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'Contact',
        event_label: 'WhatsApp Float',
        value: 1
      })
    }
  }

  return (
    <>
      {/* Main WhatsApp Float Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0, y: 100 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ 
          delay: 2, 
          duration: 0.8, 
          type: "spring", 
          stiffness: 200,
          damping: 15
        }}
        className="fixed bottom-6 right-6 z-50 group"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {/* Pulse Rings */}
        <div className="absolute inset-0 rounded-full">
          <motion.div
            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              repeatType: "loop",
              ease: "easeOut"
            }}
            className="absolute inset-0 rounded-full bg-green-500 opacity-20"
          />
          <motion.div
            animate={{ scale: [1, 1.8], opacity: [0.3, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              repeatType: "loop",
              delay: 0.5,
              ease: "easeOut"
            }}
            className="absolute inset-0 rounded-full bg-green-500 opacity-10"
          />
        </div>

        {/* Main Button */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className="relative"
        >
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            
            {/* WhatsApp Icon */}
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="white"
              className="relative z-10 drop-shadow-sm"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.485 3.287"/>
            </svg>
          </Link>
        </motion.div>

        {/* Enhanced Tooltip */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20, y: 10 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 20, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute bottom-full right-0 mb-3 pointer-events-none"
            >
              <div className="bg-ink-1000 text-white px-4 py-3 rounded-xl shadow-xl relative max-w-xs">
                <div className="text-sm font-medium mb-1">
                  💬 ¡Hablemos por WhatsApp!
                </div>
                <div className="text-xs text-gray-300">
                  Respuesta en minutos
                </div>
                {/* Arrow */}
                <div className="absolute top-full right-4 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-transparent border-t-ink-1000"></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Online Status Indicator */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-sm"
        >
          <div className="w-full h-full bg-green-500 rounded-full animate-pulse"></div>
        </motion.div>
      </motion.div>

      {/* Chat Preview Widget (Optional Feature) */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-40 w-80 bg-white rounded-xl shadow-2xl overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 px-4 py-3 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-lg">👨‍🎨</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Carlos Quintero</h3>
                    <p className="text-xs text-green-100">Tatuador Profesional</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowChat(false)}
                  className="p-1 hover:bg-white/20 rounded-full transition-colors duration-200"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Chat Content */}
            <div className="p-4 space-y-3">
              <div className="bg-gray-100 rounded-lg p-3 text-sm">
                ¡Hola! 👋 ¿En qué puedo ayudarte hoy?
              </div>
              <div className="bg-gray-100 rounded-lg p-3 text-sm">
                Cuéntame sobre el tatuaje que tienes en mente 🎨
              </div>
            </div>

            {/* Chat Action */}
            <div className="p-4 border-t border-gray-100">
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg text-center text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <MessageCircle size={16} />
                Iniciar Conversación
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}