'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { portfolioItems, categoryFilters, type PortfolioItem } from '@/app/data/portfolio'
import { Lightbox } from '@/app/components/ui/Lightbox'
import Masonry from 'react-masonry-css'

const breakpointColumns = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1
}

export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState('todos')
  const [filteredItems, setFilteredItems] = useState<PortfolioItem[]>(portfolioItems)
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [lightboxItem, setLightboxItem] = useState<PortfolioItem | null>(null)

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  useEffect(() => {
    if (selectedCategory === 'todos') {
      setFilteredItems(portfolioItems)
    } else {
      setFilteredItems(portfolioItems.filter(item => item.category === selectedCategory))
    }
  }, [selectedCategory])

  const openLightbox = (item: PortfolioItem) => {
    setLightboxItem(item)
    setLightboxImage(item.image)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
    setLightboxItem(null)
  }

  return (
    <section id="portafolio" className="section-padding section-dark scroll-mt-nav">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-xl text-white mb-6">
            Amantes del Buen Arte
          </h2>
          <p className="body-large text-gray-300 max-w-3xl mx-auto">
            Cada tatuaje cuenta una historia única. Explora mis trabajos y descubre 
            cómo transformo experiencias personales en arte permanente.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categoryFilters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedCategory(filter.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === filter.id
                  ? 'bg-brand-700 text-white shadow-brand-glow'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {filter.name}
              {filter.count && (
                <span className="ml-2 text-xs opacity-75">
                  ({filter.count})
                </span>
              )}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
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
                className="masonry-grid"
                columnClassName="masonry-grid_column"
              >
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    className="mb-6 group cursor-pointer"
                    onClick={() => openLightbox(item)}
                  >
                    <div className="portfolio-item bg-gray-800 rounded-xl overflow-hidden">
                      {/* Image */}
                      <div className="relative aspect-portfolio">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 500px) 100vw, (max-width: 1100px) 50vw, 33vw"
                          loading="lazy"
                        />
                        
                        {/* Overlay */}
                        <div className="image-overlay group-hover:visible">
                          <div className="absolute inset-0 flex flex-col justify-end p-6">
                            <motion.div
                              initial={{ y: 20, opacity: 0 }}
                              whileInView={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.1 }}
                            >
                              <h3 className="heading text-white mb-2">
                                {item.title}
                              </h3>
                              <p className="text-gray-300 text-sm mb-3 italic">
                                {item.story}
                              </p>
                              <div className="flex items-center justify-between">
                                <span className="bg-brand-700 text-white px-3 py-1 rounded-full text-xs font-medium">
                                  {item.category}
                                </span>
                                <span className="text-gray-400 text-xs">
                                  {item.year}
                                </span>
                              </div>
                            </motion.div>
                          </div>
                        </div>

                        {/* Featured Badge */}
                        {item.featured && (
                          <div className="absolute top-4 left-4">
                            <span className="bg-gold text-ink-1000 px-2 py-1 rounded-full text-xs font-bold">
                              ★ Destacado
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Card Content */}
                      <div className="p-4">
                        <h3 className="heading text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-3">
                          {item.description}
                        </p>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {item.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </Masonry>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">
            ¿Te imaginas tu historia convertida en arte?
          </p>
          <a
            href="#contacto"
            className="btn-primary"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'click', {
                  event_category: 'CTA',
                  event_label: 'Portfolio Section',
                  value: 1
                })
              }
            }}
          >
            Diseña tu tatuaje único
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <Lightbox
        isOpen={!!lightboxImage}
        image={lightboxImage}
        item={lightboxItem}
        onClose={closeLightbox}
      />
    </section>
  )
}