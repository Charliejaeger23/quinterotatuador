'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, Heart, Share2, Download } from 'lucide-react'
import { type PortfolioItem } from '@/app/data/portfolio'

interface LightboxProps {
  isOpen: boolean
  image: string | null
  item: PortfolioItem | null
  onClose: () => void
}

export function Lightbox({ isOpen, image, item, onClose }: LightboxProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  const handleShare = async () => {
    if (navigator.share && item) {
      try {
        await navigator.share({
          title: `${item.title} - Quinterotatuador`,
          text: item.story,
          url: window.location.href
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      // Fallback: copy URL to clipboard
      navigator.clipboard.writeText(window.location.href)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && image && item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="lightbox-overlay"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative max-w-6xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-ink-1000/50 hover:bg-ink-1000/70 text-white rounded-full flex items-center justify-center transition-colors duration-200"
              aria-label="Cerrar"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col lg:flex-row h-full">
              {/* Image Section */}
              <div className="flex-1 relative bg-gray-100">
                <Image
                  src={image}
                  alt={item.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 60vw"
                  priority
                />
              </div>

              {/* Info Section */}
              <div className="w-full lg:w-96 p-6 lg:p-8 overflow-y-auto">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-brand-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {item.year}
                    </span>
                  </div>
                  
                  <h2 className="heading-lg text-ink-1000 mb-3">
                    {item.title}
                  </h2>
                  
                  <p className="text-brand-700 italic mb-4">
                    {item.story}
                  </p>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h3 className="heading text-ink-1000 mb-3">Descripción</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Details */}
                <div className="mb-6 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Zona del cuerpo:</span>
                    <span className="text-ink-1000 font-medium capitalize">
                      {item.bodyArea}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tamaño:</span>
                    <span className="text-ink-1000 font-medium capitalize">
                      {item.size}
                    </span>
                  </div>
                  {item.client && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Cliente:</span>
                      <span className="text-ink-1000 font-medium">
                        {item.client}
                      </span>
                    </div>
                  )}
                </div>

                {/* Process */}
                {item.process && (
                  <div className="mb-6">
                    <h3 className="heading text-ink-1000 mb-3">Proceso</h3>
                    <ol className="space-y-2">
                      {item.process.map((step, index) => (
                        <li key={index} className="flex">
                          <span className="w-6 h-6 bg-brand-700 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">
                            {index + 1}
                          </span>
                          <span className="text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {/* Tags */}
                <div className="mb-6">
                  <h3 className="heading text-ink-1000 mb-3">Conceptos</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col space-y-3">
                  <button
                    onClick={handleShare}
                    className="btn-secondary flex items-center justify-center space-x-2"
                  >
                    <Share2 size={18} />
                    <span>Compartir</span>
                  </button>
                  
                  <a
                    href="#contacto"
                    className="btn-primary flex items-center justify-center space-x-2"
                    onClick={() => {
                      onClose()
                      if (typeof window !== 'undefined' && window.gtag) {
                        window.gtag('event', 'click', {
                          event_category: 'CTA',
                          event_label: 'Lightbox CTA',
                          value: 1
                        })
                      }
                    }}
                  >
                    <Heart size={18} />
                    <span>Quiero algo así</span>
                  </a>
                </div>

                {/* Footer Note */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-gold text-sm italic text-center">
                    "Aquí no repetimos diseños. Tu historia será única."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}