'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye, X, ChevronLeft, ChevronRight, Filter, Clock, MapPin, Hash } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import Masonry from 'react-masonry-css'
import { portfolioData, getFeaturedPortfolio } from '@/app/data/portfolio'
import { PortfolioItem } from '@/app/types/global'

const categories = [
  { id: 'all', name: 'Todos', count: portfolioData.length },
  { id: 'realismo', name: 'Realismo', count: portfolioData.filter(item => item.category === 'realismo').length },
  { id: 'blackwork', name: 'Blackwork', count: portfolioData.filter(item => item.category === 'blackwork').length },
  { id: 'lettering', name: 'Lettering', count: portfolioData.filter(item => item.category === 'lettering').length },
  { id: 'geometrico', name: 'Geométrico', count: portfolioData.filter(item => item.category === 'geometrico').length }
]

const breakpointColumns = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1
}

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showFilters, setShowFilters] = useState(false)
  
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  // Filter portfolio items based on selected category
  const filteredPortfolio = useMemo(() => {
    if (selectedCategory === 'all') {
      return portfolioData
    }
    return portfolioData.filter(item => item.category === selectedCategory)
  }, [selectedCategory])

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = 'unset'
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredPortfolio.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredPortfolio.length) % filteredPortfolio.length)
  }

  const currentItem = filteredPortfolio[currentImageIndex]

  return (
    <section id="portfolio" className="section bg-gradient-to-br from-paper to-secondary/5">
      <div className="container-custom">
        
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium uppercase tracking-wider mb-4">
            🎨 Portfolio Exclusivo
          </span>
          <h2 className="font-cinzel font-bold text-3xl md:text-4xl lg:text-5xl text-ink-1000 mb-6">
            Historias Convertidas
            <span className="block gradient-text">en Arte Permanente</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Cada pieza cuenta una historia única. Explora mi trabajo y descubre cómo transformo experiencias personales en obras de arte irrepetibles.
          </p>

          {/* Featured Works Counter */}
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-6 py-3 shadow-md border border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600">
                <strong className="text-primary">{filteredPortfolio.length}</strong> obras disponibles
              </span>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm text-gray-600">
                <strong className="text-accent">{getFeaturedPortfolio().length}</strong> destacadas
              </span>
            </div>
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          {/* Mobile Filter Toggle */}
          <div className="md:hidden mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md border border-gray-200"
            >
              <Filter size={16} />
              <span>Filtrar por categoría</span>
            </button>
          </div>

          {/* Filter Categories */}
          <div className={`${showFilters ? 'block' : 'hidden md:block'}`}>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                  onClick={() => {
                    setSelectedCategory(category.id)
                    setShowFilters(false)
                  }}
                  className={`group relative px-6 py-3 rounded-full transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-primary text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg border border-gray-200'
                  }`}
                >
                  <span className="font-medium">{category.name}</span>
                  <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                    selectedCategory === category.id
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {category.count}
                  </span>
                  
                  {selectedCategory === category.id && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-primary rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Masonry
              breakpointCols={breakpointColumns}
              className="masonry-grid -ml-6"
              columnClassName="masonry-column pl-6"
            >
              {filteredPortfolio.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-6 group cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative overflow-hidden rounded-xl bg-gray-100 shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                    {/* Image */}
                    <div className="relative aspect-auto">
                      <img
                        src={item.imageUrl}
                        alt={item.imageAlt}
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/40">
                              <Eye size={24} className="text-white" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Featured Badge */}
                      {item.featured && (
                        <div className="absolute top-3 left-3">
                          <span className="inline-block px-2 py-1 bg-accent text-ink-1000 rounded-full text-xs font-medium">
                            Destacado
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h3 className="font-cinzel font-semibold text-lg text-ink-1000 mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-3">
                        {item.description}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Clock size={12} />
                            {item.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={12} />
                            {item.location}
                          </span>
                        </div>
                        <span className="px-2 py-1 bg-gray-100 rounded-full capitalize">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </Masonry>
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredPortfolio.length === 0 && (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Hash size={24} className="text-gray-400" />
            </div>
            <h3 className="font-cinzel font-semibold text-xl text-gray-800 mb-2">
              No hay trabajos en esta categoría
            </h3>
            <p className="text-gray-600">
              Pronto estaré agregando más piezas a esta sección.
            </p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-60 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-200"
            >
              <X size={24} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-60 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-200"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-60 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-200"
            >
              <ChevronRight size={24} />
            </button>

            {/* Content */}
            <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 h-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
              
              {/* Image */}
              <div className="lg:col-span-2 flex items-center justify-center">
                <motion.img
                  key={currentItem.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  src={currentItem.imageUrl}
                  alt={currentItem.imageAlt}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                />
              </div>

              {/* Details */}
              <div className="bg-white rounded-xl p-6 overflow-y-auto">
                <div className="mb-4">
                  <h2 className="font-cinzel font-bold text-2xl text-ink-1000 mb-2">
                    {currentItem.title}
                  </h2>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm capitalize font-medium">
                    {currentItem.category}
                  </span>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {currentItem.description}
                </p>

                {/* Technical Details */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Clock size={16} className="text-accent" />
                    <span className="text-gray-600">Duración: <strong>{currentItem.duration}</strong></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={16} className="text-accent" />
                    <span className="text-gray-600">Ubicación: <strong className="capitalize">{currentItem.location}</strong></span>
                  </div>
                  {currentItem.process && (
                    <div className="flex items-center gap-3">
                      <Hash size={16} className="text-accent" />
                      <span className="text-gray-600">
                        <strong>{currentItem.process.sessions}</strong> sesiones, 
                        <strong> {currentItem.process.totalHours}h</strong> total
                      </span>
                    </div>
                  )}
                </div>

                {/* Tags */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-800 mb-3">Características:</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentItem.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image Counter */}
                <div className="text-center text-sm text-gray-500 pt-4 border-t border-gray-200">
                  {currentImageIndex + 1} de {filteredPortfolio.length}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}