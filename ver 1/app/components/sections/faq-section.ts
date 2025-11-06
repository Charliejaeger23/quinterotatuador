'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Plus, Minus, MessageCircle } from 'lucide-react'

interface FAQItem {
  id: string
  question: string
  answer: string
  category: 'proceso' | 'cuidado' | 'precio' | 'experiencia'
}

const faqData: FAQItem[] = [
  {
    id: 'dolor',
    question: '¿Duele mucho tatuarse?',
    answer: 'La molestia es relativa y depende de varios factores: la zona del cuerpo, tu tolerancia personal y la duración de la sesión. En mi estudio uso técnicas que minimizan el discomfort y mantengo un ambiente relajado. La mayoría de mis clientes describe la experiencia como "tolerable y emocionante". Además, tomo descansos cuando sea necesario y siempre voy a tu ritmo.',
    category: 'experiencia'
  },
  {
    id: 'resultado',
    question: '¿Qué pasa si no me gusta el resultado?',
    answer: 'Mi proceso está diseñado para evitar esto completamente. Trabajamos juntos en cada etapa del diseño antes de tocar tu piel. Tienes múltiples oportunidades de revisar y ajustar el boceto hasta que estés 100% satisfecho. Una vez aprobado el diseño final, procedo con total confianza. Mi compromiso es que ames tu tatuaje tanto como la historia que representa.',
    category: 'proceso'
  },
  {
    id: 'tatuador-indicado',
    question: '¿Cómo sé si eres el tatuador indicado para mí?',
    answer: 'Si buscas un tatuaje con significado profundo, si valoras la originalidad y quieres un diseño que nadie más tendrá, entonces conectaremos bien. Mi especialidad son las historias personales convertidas en arte. Revisa mi portafolio, lee las experiencias de otros clientes y si sientes que mi estilo resuena contigo, agenda una consulta sin compromiso.',
    category: 'proceso'
  },
  {
    id: 'precio',
    question: '¿Cuánto cuesta un tatuaje?',
    answer: 'Cada proyecto es único, por lo que los precios varían según el tamaño, complejidad, ubicación y tiempo estimado. Mis tarifas reflejan más de 10 años de experiencia y un proceso artístico completo. En la consulta inicial te doy un presupuesto transparente sin sorpresas. Acepto formas de pago flexibles y siempre hay opciones para que tu historia se haga realidad.',
    category: 'precio'
  },
  {
    id: 'cuidados',
    question: '¿Qué cuidados necesita un tatuaje nuevo?',
    answer: 'Te entrego una guía completa de aftercare personalizada para tu tatuaje específico. Incluye instrucciones detalladas para las primeras 48 horas y las siguientes 2-4 semanas. También tienes mi contacto directo para cualquier duda durante la cicatrización. Un buen cuidado garantiza que tu tatuaje se vea perfecto por años.',
    category: 'cuidado'
  },
  {
    id: 'tiempo-sesion',
    question: '¿Cuánto tiempo toma una sesión?',
    answer: 'Depende del diseño. Tatuajes pequeños pueden tomar 1-2 horas, mientras que proyectos grandes pueden requerir 6-8 horas o múltiples sesiones. Siempre planificamos el tiempo necesario en la consulta inicial. Prefiero trabajar con calidad que con prisa, y siempre respeto tus límites de comodidad.',
    category: 'proceso'
  },
  {
    id: 'retoque',
    question: '¿Incluyes retoques gratuitos?',
    answer: 'Sí, incluyo una sesión de retoque gratuita después de 4-6 semanas si es necesaria. Esto es parte normal del proceso, ya que cada piel cicatriza diferente. También ofrezco seguimiento durante el primer mes para asegurar que tu tatuaje evolucione perfectamente.',
    category: 'cuidado'
  },
  {
    id: 'menor-edad',
    question: '¿Tatúas menores de edad?',
    answer: 'Solo tatúo menores de edad (16-17 años) con autorización legal escrita de padres o tutores presentes durante la sesión, y cumpliendo estrictamente la normativa local. El diseño debe ser apropiado y la decisión bien meditada. Siempre incluyo una charla educativa sobre cuidados y responsabilidades.',
    category: 'proceso'
  },
  {
    id: 'tapar-tatuaje',
    question: '¿Puedes tapar o arreglar un tatuaje viejo?',
    answer: 'Sí, tengo experiencia en cover-ups y restauraciones. Cada caso requiere evaluación individual para determinar la mejor estrategia. A veces es posible mejorar el tatuaje existente, otras veces es mejor hacer un cover-up completo. En la consulta evaluamos opciones y te muestro referencias de trabajos similares.',
    category: 'proceso'
  }
]

const categories = [
  { id: 'todas', name: 'Todas las preguntas', icon: '🤔' },
  { id: 'proceso', name: 'Proceso y diseño', icon: '🎨' },
  { id: 'experiencia', name: 'La experiencia', icon: '💭' },
  { id: 'cuidado', name: 'Cuidados', icon: '🩹' },
  { id: 'precio', name: 'Precios', icon: '💰' },
]

export function FAQSection() {
  const [openItem, setOpenItem] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('todas')

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const filteredFAQs = selectedCategory === 'todas' 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory)

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id)
  }

  const WHATSAPP_NUMBER = "+584241234567"
  const WHATSAPP_MESSAGE = encodeURIComponent(
    "¡Hola Carlos! Tengo algunas preguntas sobre el proceso de tatuaje. ¿Podríamos hablar?"
  )

  return (
    <section className="section-padding section-light">
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
            Preguntas Frecuentes
          </h2>
          <p className="body-large text-gray-700 max-w-3xl mx-auto">
            Resuelvo las dudas más comunes sobre el proceso de tatuaje, cuidados y mi metodología. 
            Si no encuentras tu respuesta, contáctame directamente.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-brand-700 text-white shadow-brand-glow'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <span>{category.icon}</span>
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {filteredFAQs.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="faq-item bg-white rounded-xl shadow-premium overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="faq-trigger w-full px-6 py-6 text-left"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="heading text-ink-1000 pr-4">
                        {item.question}
                      </h3>
                      <div className="flex-shrink-0">
                        <motion.div
                          animate={{ rotate: openItem === item.id ? 45 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center"
                        >
                          <Plus size={16} className="text-brand-700" />
                        </motion.div>
                      </div>
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {openItem === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="faq-content px-6 pb-6">
                          <p className="text-gray-700 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-brand-50 rounded-3xl p-8 lg:p-12 text-center"
        >
          <MessageCircle size={48} className="text-brand-700 mx-auto mb-6" />
          
          <h3 className="heading-lg text-ink-1000 mb-4">
            ¿Tienes más preguntas?
          </h3>
          
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Cada proyecto es único y entiendo que puedas tener dudas específicas. 
            Estoy aquí para aclarar cualquier inquietud antes de que tomes la decisión.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'click', {
                    event_category: 'Contact',
                    event_label: 'FAQ WhatsApp',
                    value: 1
                  })
                }
              }}
            >
              Aclaremos tus dudas en WhatsApp
            </a>
            
            <a
              href="#contacto"
              className="btn-secondary"
            >
              Agendar consulta gratuita
            </a>
          </div>
          
          <p className="text-gray-600 text-sm mt-6">
            Respuesta típica: dentro de 2 horas • Lunes a sábado, 10:00 - 18:00
          </p>
        </motion.div>
      </div>
    </section>
  )
}