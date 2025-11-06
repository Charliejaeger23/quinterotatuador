'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Download, Share2, Heart } from 'lucide-react'
import { PortfolioItem } from '@/app/types/global'

interface LightboxProps {
  images: PortfolioItem[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNext: () => void
  onPrevious: () => void
}

export default function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrevious
}: LightboxProps) {
  const currentItem = images[currentIndex]

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'Escape':
          onClose()
          break
        case 'ArrowLeft':
          onPrevious()
          break
        case 'ArrowRight':
          onNext()
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose, onNext, onPrevious])

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen || !currentItem) return null

  const handleDownload = async () => {
    try {
      const response = await fetch(currentItem.imageUrl)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `quinterotatuador-${currentItem.title.toLowerCase().replace(/\s+/g, '-')}.jpg`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error downloading image:', error)
    }
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: currentItem.title,
          text: currentItem.description,
          url: window.location.href
        })
      } catch (error) {
        console.error('Error sharing:', error)
      }
    } else {
      // Fallback: copy URL to clipboard
      await navigator.clipboard.writeText(window.location.href)
      // You could add a toast notification here
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Header Bar */}
        <div className="absolute top-0 left-0 right-0 z-60 bg-gradient-to-b from-black/50 to-transparent p-4">
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center gap-4">
              <h2 className="font-cinzel font-semibold text-lg">
                {currentItem.title}
              </h2>
              <span className="px-2 py-1 bg-white/20 rounded-full text-xs capitalize">
                {currentItem.category}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              {/* Action Buttons */}
              <button
                onClick={handleShare}
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200"
                title="Compartir"
              >
                <Share2 size={16} />
              </button>
              <button
                onClick={handleDownload}
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200"
                title="Descargar"
              >
                <Download size={16} />
              </button>
              <button
                onClick={onClose}
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200"
                title="Cerrar"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); onPrevious(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-60 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
              title="Anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); onNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-60 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
              title="Siguiente"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        {/* Main Content */}
        <div className="h-full flex items-center justify-center p-4 pt-20 pb-32">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-6xl w-full mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
              
              {/* Image */}
              <div className="lg:col-span-2 flex items-center justify-center">
                <div className="relative max-w-full max-h-full">
                  <img
                    src={currentItem.imageUrl}
                    alt={currentItem.imageAlt}
                    className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                    style={{ maxHeight: 'calc(100vh - 200px)' }}
                  />
                  
                  {/* Featured Badge */}
                  {currentItem.featured && (
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent text-ink-1000 rounded-full text-sm font-medium shadow-lg">
                        <Heart size={14} />
                        Destacado
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Details Panel */}
              <div className="bg-white rounded-xl shadow-2xl max-h-[80vh] overflow-y-auto">
                <div className="p-6 space-y-6">
                  
                  {/* Header */}
                  <div>
                    <h2 className="font-cinzel font-bold text-2xl text-ink-1000 mb-2">
                      {currentItem.title}
                    </h2>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm capitalize font-medium">
                        {currentItem.category}
                      </span>
                      {currentItem.featured && (
                        <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                          Destacado
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="font-semibold text-ink-1000 mb-3">Historia del Tatuaje</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {currentItem.description}
                    </p>
                  </div>

                  {/* Technical Details */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-800 mb-1">Duración</h4>
                      <p className="text-gray-600 text-sm">{currentItem.duration}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-800 mb-1">Ubicación</h4>
                      <p className="text-gray-600 text-sm capitalize">{currentItem.location}</p>
                    </div>
                    {currentItem.dimensions && (
                      <>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">Dimensiones</h4>
                          <p className="text-gray-600 text-sm">
                            {currentItem.dimensions.width} × {currentItem.dimensions.height} cm
                          </p>
                        </div>
                      </>
                    )}
                    {currentItem.process && (
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-medium text-gray-800 mb-1">Proceso</h4>
                        <p className="text-gray-600 text-sm">
                          {currentItem.process.sessions} sesiones
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Process Details */}
                  {currentItem.process && (
                    <div>
                      <h3 className="font-semibold text-ink-1000 mb-3">Detalles del Proceso</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Total de sesiones:</span>
                          <span className="font-medium">{currentItem.process.sessions}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Horas totales:</span>
                          <span className="font-medium">{currentItem.process.totalHours}h</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Tiempo de sanación:</span>
                          <span className="font-medium">{currentItem.process.healingTime}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Tags */}
                  <div>
                    <h3 className="font-semibold text-ink-1000 mb-3">Características</h3>
                    <div className="flex flex-wrap gap-2">
                      {currentItem.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Client Info */}
                  {currentItem.client?.name && (
                    <div className="pt-4 border-t border-gray-200">
                      <h3 className="font-semibold text-ink-1000 mb-3">Cliente</h3>
                      <div className="space-y-1">
                        <p className="text-gray-700">Nombre: {currentItem.client.name}</p>
                        {currentItem.client.age && (
                          <p className="text-gray-700">Edad: {currentItem.client.age} años</p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Navigation Info */}
                  <div className="text-center text-sm text-gray-500 pt-4 border-t border-gray-200">
                    <p>{currentIndex + 1} de {images.length}</p>
                    <p className="mt-1">Usa las flechas ←→ para navegar</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Thumbnails */}
        {images.length > 1 && (
          <div className="absolute bottom-0 left-0 right-0 z-60 bg-gradient-to-t from-black/50 to-transparent p-4">
            <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
              {images.map((item, index) => (
                <button
                  key={item.id}
                  onClick={(e) => {
                    e.stopPropagation()
                    // You would need to pass an onImageSelect prop to handle this
                  }}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    index === currentIndex
                      ? 'border-white scale-110'
                      : 'border-white/30 hover:border-white/60'
                  }`}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}