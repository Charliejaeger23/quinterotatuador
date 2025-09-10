'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Star, Quote, Play, ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials, videoTestimonials, averageRating } from '@/app/data/testimonials'

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [showVideo, setShowVideo] = useState(false)
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentData = testimonials[currentTestimonial]

  return (
    <section id="historias" className="section-padding section-warm scroll-mt-nav">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-xl text-ink-1000 mb-6">
            Historias Reales de Transformación
          </h2>
          <p className="body-large text-gray-700 max-w-3xl mx-auto mb-8">
            Cada tatuaje cuenta una historia. Estas son las voces de quienes confiaron 
            en mí para plasmar sus momentos más significativos en arte permanente.
          </p>
          
          {/* Rating Summary */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={20} 
                  className="text-gold fill-current"
                />
              ))}
            </div>
            <span className="text-gray-700 font-medium">
              {averageRating.toFixed(1)} • {testimonials.length} historias
            </span>
          </div>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-premium-lg relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
              <Image
                src="/images/pattern-tattoo.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            <div className="relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                >
                  {/* Content */}
                  <div className="space-y-6">
                    {/* Quote Icon */}
                    <Quote size={48} className="text-brand-700 opacity-20" />
                    
                    {/* Main Quote */}
                    <blockquote className="text-xl lg:text-2xl text-gray-800 leading-relaxed font-light italic">
                      "{currentData.quote}"
                    </blockquote>

                    {/* Full Story */}
                    <p className="text-gray-600 leading-relaxed">
                      {currentData.story}
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                      <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center">
                        <span className="text-brand-700 font-bold">
                          {currentData.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-ink-1000">
                          {currentData.name}
                        </div>
                        <div className="text-gray-600 text-sm">
                          {currentData.tattoo} • {currentData.location}
                        </div>
                      </div>
                      <div className="ml-auto flex">
                        {[...Array(currentData.rating)].map((_, i) => (
                          <Star 
                            key={i}
                            size={16} 
                            className="text-gold fill-current"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Video Button */}
                    {currentData.videoUrl && (
                      <button
                        onClick={() => setShowVideo(true)}
                        className="flex items-center gap-2 text-brand-700 hover:text-brand-900 transition-colors duration-200"
                      >
                        <Play size={20} />
                        <span className="font-medium">Ver video testimonial</span>
                      </button>
                    )}
                  </div>

                  {/* Image */}
                  <div className="relative">
                    <div className="aspect-square rounded-2xl overflow-hidden shadow-premium">
                      <Image
                        src={currentData.image}
                        alt={`${currentData.name} - Cliente de Quinterotatuador`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    
                    {/* Floating Badge */}
                    <div className="absolute -bottom-4 -right-4 bg-gold text-ink-1000 px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                      {currentData.year}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label="Testimonio anterior"
                >
                  <ChevronLeft size={20} />
                </button>

                {/* Dots Indicator */}
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentTestimonial
                          ? 'bg-brand-700 w-8'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Ir al testimonio ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label="Siguiente testimonio"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: 0.1 * index,
                ease: 'easeOut'
              }}
              className="testimonial-card group hover:shadow-premium-lg transition-all duration-300"
            >
              {/* Header */}
              <div className="testimonial-author">
                <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-brand-700 font-bold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-ink-1000 truncate">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm truncate">
                    {testimonial.tattoo}
                  </p>
                </div>
                <div className="flex ml-auto">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i}
                      size={14} 
                      className="text-gold fill-current"
                    />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <blockquote className="testimonial-quote">
                "{testimonial.quote}"
              </blockquote>

              {/* Location & Year */}
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{testimonial.location}</span>
                <span>{testimonial.year}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Proof Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-ink-1000 rounded-3xl p-8 lg:p-12 text-center text-white"
        >
          <h3 className="heading-lg mb-8">
            La confianza de mis clientes es mi mayor logro
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-gold mb-2">
                98%
              </div>
              <div className="text-gray-300">
                Recomiendan mi trabajo
              </div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-gold mb-2">
                {testimonials.length}+
              </div>
              <div className="text-gray-300">
                Historias transformadas
              </div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-gold mb-2">
                {averageRating.toFixed(1)}★
              </div>
              <div className="text-gray-300">
                Calificación promedio
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-700 mb-6 text-lg">
            ¿Quieres ser parte de estas historias de transformación?
          </p>
          <a
            href="#contacto"
            className="btn-primary"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'click', {
                  event_category: 'CTA',
                  event_label: 'Testimonials Section',
                  value: 1
                })
              }
            }}
          >
            Yo también quiero transformar mi historia
          </a>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && currentData.videoUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-ink-1000/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowVideo(false)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="relative max-w-4xl w-full aspect-video bg-gray-900 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-ink-1000/50 hover:bg-ink-1000/70 text-white rounded-full flex items-center justify-center transition-colors duration-200"
              >
                ×
              </button>
              
              <video
                src={currentData.videoUrl}
                controls
                autoPlay
                className="w-full h-full"
              >
                Tu navegador no soporta video.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}