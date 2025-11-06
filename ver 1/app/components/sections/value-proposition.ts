'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Sparkles, Scale, HandHeart } from 'lucide-react'

const valueItems = [
  {
    icon: Sparkles,
    title: 'Diseño único',
    description: 'Tu historia primero, tu piel después.',
    details: 'Cada diseño nace de tu experiencia personal. No uso plantillas ni repito conceptos. Tu tatuaje será tan único como tu historia.',
    color: 'text-brand-700'
  },
  {
    icon: Scale,
    title: 'Composición anatómica',
    description: 'Simetría y equilibrio para cada cuerpo.',
    details: 'Estudio la anatomía específica de cada cliente para crear diseños que fluyan naturalmente con las líneas de tu cuerpo.',
    color: 'text-gold'
  },
  {
    icon: HandHeart,
    title: 'Acompañamiento real',
    description: 'Del boceto al aftercare.',
    details: 'Te guío en cada paso: desde la primera consulta hasta el cuidado completo de tu tatuaje. Estás en manos expertas.',
    color: 'text-brand-700'
  }
]

export function ValueProposition() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className="section-padding section-warm">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-xl text-ink-1000 mb-6">
            ¿Por qué elegir Quinterotatuador?
          </h2>
          <p className="body-large text-gray-700 max-w-3xl mx-auto">
            No soy solo un tatuador. Soy un artista que transforma historias en arte permanente, 
            con más de 10 años creando experiencias únicas para amantes del buen arte.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {valueItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: 'easeOut'
              }}
              className="text-center group"
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-white rounded-2xl shadow-premium flex items-center justify-center group-hover:shadow-premium-lg transition-all duration-500 group-hover:-translate-y-1">
                  <item.icon 
                    size={32} 
                    className={`${item.color} transition-transform duration-300 group-hover:scale-110`}
                  />
                </div>
                
                {/* Decorative ring */}
                <div className="absolute inset-0 w-20 h-20 mx-auto border-2 border-gray-200 rounded-2xl opacity-0 group-hover:opacity-100 scale-110 group-hover:scale-125 transition-all duration-500"></div>
              </div>

              {/* Content */}
              <h3 className="heading text-ink-1000 mb-3 group-hover:text-brand-700 transition-colors duration-300">
                {item.title}
              </h3>
              
              <p className="text-lg font-medium text-gray-700 mb-4 italic">
                "{item.description}"
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                {item.details}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-premium"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-brand-700 mb-2">
                10+
              </div>
              <div className="text-gray-600 font-medium">
                Años de experiencia
              </div>
            </div>
            
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-brand-700 mb-2">
                500+
              </div>
              <div className="text-gray-600 font-medium">
                Historias tatuadas
              </div>
            </div>
            
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-brand-700 mb-2">
                0
              </div>
              <div className="text-gray-600 font-medium">
                Diseños repetidos
              </div>
            </div>
            
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-brand-700 mb-2">
                100%
              </div>
              <div className="text-gray-600 font-medium">
                Satisfacción garantizada
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
            ¿Listo para vivir esta experiencia única?
          </p>
          <a
            href="#proceso"
            className="btn-primary"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'click', {
                  event_category: 'CTA',
                  event_label: 'Value Proposition',
                  value: 1
                })
              }
            }}
          >
            Quiero vivir este proceso
          </a>
        </motion.div>
      </div>
    </section>
  )
}