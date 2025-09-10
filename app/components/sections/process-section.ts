'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MessageCircle, PenTool, RefreshCw, Heart } from 'lucide-react'
import Image from 'next/image'

const processSteps = [
  {
    number: 1,
    icon: MessageCircle,
    title: 'Brief emocional',
    subtitle: 'Tu historia es el punto de partida',
    description: 'Conversamos sobre tu historia, el significado que buscas y cómo plasmar tu esencia en el diseño. No es solo un tatuaje, es tu narrativa personal.',
    duration: '30-60 min',
    image: '/images/process/consultation.jpg',
    details: [
      'Entrevista personal profunda',
      'Análisis del significado emocional',
      'Definición de estilo y ubicación',
      'Presupuesto y cronograma inicial'
    ]
  },
  {
    number: 2,
    icon: PenTool,
    title: 'Boceto anatómico',
    subtitle: 'Diseño único para tu cuerpo',
    description: 'Creo un diseño completamente personalizado, adaptado perfectamente a tu anatomía específica. Cada línea tiene propósito y significado.',
    duration: '3-7 días',
    image: '/images/process/design.jpg',
    details: [
      'Bocetos iniciales a mano',
      'Adaptación anatómica precisa',
      'Selección de técnicas y estilos',
      'Presentación digital del diseño'
    ]
  },
  {
    number: 3,
    icon: RefreshCw,
    title: 'Ajustes',
    subtitle: 'Perfección en cada detalle',
    description: 'Refinamos cada detalle hasta que el diseño capture exactamente tu visión. Tu satisfacción total es mi compromiso.',
    duration: '1-3 días',
    image: '/images/process/adjustments.jpg',
    details: [
      'Revisión detallada contigo',
      'Ajustes de tamaño y proporción',
      'Refinamiento de detalles',
      'Aprobación final del diseño'
    ]
  },
  {
    number: 4,
    icon: Heart,
    title: 'Sesión + cuidado',
    subtitle: 'El momento mágico',
    description: 'Tu historia se convierte en arte permanente con técnica impecable, ambiente relajado y cuidado integral durante y después del proceso.',
    duration: '2-8 horas',
    image: '/images/process/tattooing.jpg',
    details: [
      'Preparación e higiene total',
      'Tatuado con técnica profesional',
      'Descansos según necesidad',
      'Guía completa de aftercare'
    ]
  }
]

export function ProcessSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="proceso" className="section-padding section-light scroll-mt-nav">
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
            De la Idea a la Piel
          </h2>
          <p className="body-large text-gray-700 max-w-3xl mx-auto mb-4">
            Mi proceso está diseñado para crear experiencias únicas y resultados extraordinarios. 
            Cada paso está pensado para que te sientas seguro y emocionado.
          </p>
          <p className="text-gold font-medium">
            Embudo educativo para tu transformación
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-16 lg:space-y-24">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: 'easeOut'
              }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-8 lg:gap-16`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                {/* Step Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="process-step-number bg-brand-700 text-white relative">
                    {step.number}
                    <step.icon 
                      size={16} 
                      className="absolute -bottom-1 -right-1 bg-gold text-ink-1000 rounded-full p-1 w-6 h-6"
                    />
                  </div>
                  <div>
                    <h3 className="heading-lg text-ink-1000">
                      {step.title}
                    </h3>
                    <p className="text-brand-700 font-medium">
                      {step.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-lg leading-relaxed">
                  {step.description}
                </p>

                {/* Details */}
                <div className="bg-brand-50 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-ink-1000">
                      Qué incluye:
                    </h4>
                    <span className="bg-gold text-ink-1000 px-3 py-1 rounded-full text-sm font-medium">
                      {step.duration}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-brand-700 rounded-full mr-3 flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Image */}
              <div className="flex-1 max-w-lg">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-premium group">
                  <Image
                    src={step.image}
                    alt={`Proceso: ${step.title}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-1000/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-ink-1000 rounded-3xl p-8 lg:p-12 text-center"
        >
          <h3 className="heading-lg text-white mb-6">
            Cronograma típico: De 1 a 3 semanas
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-700 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                1
              </div>
              <div className="text-gray-300 text-sm">
                Día 1: Brief
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-700 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                2-7
              </div>
              <div className="text-gray-300 text-sm">
                Días 2-7: Diseño
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-700 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                8-10
              </div>
              <div className="text-gray-300 text-sm">
                Días 8-10: Ajustes
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gold text-ink-1000 rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                ★
              </div>
              <div className="text-gray-300 text-sm">
                Día acordado: Sesión
              </div>
            </div>
          </div>
          
          <p className="text-gray-400 mt-6 text-sm">
            * Los tiempos pueden variar según la complejidad del proyecto
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12"
        >
          <p className="text-gray-700 mb-6 text-lg">
            ¿Listo para comenzar tu proceso de transformación?
          </p>
          <a
            href="#contacto"
            className="btn-primary"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'click', {
                  event_category: 'CTA',
                  event_label: 'Process Section',
                  value: 1
                })
              }
            }}
          >
            Agendar mi brief
          </a>
        </motion.div>
      </div>
    </section>
  )
}