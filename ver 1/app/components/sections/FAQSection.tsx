'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  DollarSign, 
  Clock, 
  Shield, 
  Calendar,
  Heart,
  MessageCircle,
  Search
} from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { siteConfig } from '@/lib/config'

interface FAQItem {
  id: string
  question: string
  answer: string
  category: 'general' | 'precio' | 'proceso' | 'cuidado' | 'booking'
  featured?: boolean
}

const faqData: FAQItem[] = [
  // General
  {
    id: 'disenos-unicos',
    question: '¿Realmente nunca repites diseños?',
    answer: 'Absolutamente nunca. Cada diseño es creado exclusivamente para la persona que lo solicita, basándome en su historia personal, gustos y significado único. Una vez tatuado, ese diseño nunca volverá a ser realizado para otra persona. Esta es mi garantía de originalidad y exclusividad.',
    category: 'general',
    featured: true
  },
  {
    id: 'estilos-trabajo',
    question: '¿Qué estilos de tatuaje manejas?',
    answer: 'Mi especialidad abarca múltiples estilos: realismo (incluyendo retratos y elementos botánicos), blackwork (mandals, geometría, patrones), arte japonés tradicional (irezumi), lettering y caligrafía personalizada, diseños geométricos y arte simbólico-espiritual. Cada estilo lo desarrollo con técnicas específicas perfeccionadas durante más de 10 años.',
    category: 'general'
  },
  {
    id: 'ubicacion-estudio',
    question: '¿Dónde está ubicado tu estudio?',
    answer: 'Mi estudio principal está ubicado en Valencia, estado Carabobo. También ofrezco servicios en Puerto Cabello y, para proyectos especiales, tengo disponibilidad para sesiones a domicilio en toda la región. Contacta conmigo para coordinar la ubicación más conveniente.',
    category: 'general'
  },
  {
    id: 'experiencia-carlos',
    question: '¿Cuánta experiencia tienes como tatuador?',
    answer: 'Tengo más de 10 años de experiencia profesional en el arte del tatuaje. He desarrollado mi técnica trabajando con cientos de clientes, perfeccionando estilos diversos y manteniéndome actualizado con las mejores prácticas internacionales de higiene y técnica artística.',
    category: 'general'
  },

  // Precios
  {
    id: 'costo-tatuajes',
    question: '¿Cuánto cuesta un tatuaje?',
    answer: 'Los precios varían según el tamaño, complejidad, estilo y tiempo requerido. Tatuajes pequeños desde $40, medianos desde $80, y piezas grandes se cotizan por proyecto. La consulta inicial es gratuita e incluye un presupuesto detallado sin compromiso. También ofrezco planes de pago para proyectos grandes.',
    category: 'precio',
    featured: true
  },
  {
    id: 'metodos-pago',
    question: '¿Qué métodos de pago aceptas?',
    answer: 'Acepto efectivo, transferencias bancarias, Pago Móvil, Zelle y PayPal. Para reservar la cita se requiere un anticipo del 30% que se descuenta del precio final. También ofrezco planes de pago para proyectos grandes que se realizan en múltiples sesiones.',
    category: 'precio'
  },
  {
    id: 'anticipo-reserva',
    question: '¿Es necesario dar anticipo para reservar?',
    answer: 'Sí, se requiere un anticipo del 30% del valor total para confirmar tu cita. Este anticipo se descuenta del precio final el día de la sesión. El anticipo garantiza tu fecha y cubre el tiempo invertido en el diseño personalizado.',
    category: 'precio'
  },

  // Proceso
  {
    id: 'tiempo-diseño',
    question: '¿Cuánto tiempo toma crear el diseño?',
    answer: 'El proceso de diseño toma entre 3 a 7 días, dependiendo de la complejidad. Para diseños muy elaborados o con múltiples elementos, puede extenderse hasta 10 días. Durante este tiempo, trabajo en múltiples bocetos y conceptos para asegurar que el resultado final sea perfecto.',
    category: 'proceso',
    featured: true
  },
  {
    id: 'modificaciones-diseño',
    question: '¿Puedo pedir modificaciones al diseño?',
    answer: 'Por supuesto. Las modificaciones son parte natural del proceso creativo. Incluyo hasta 3 rondas de modificaciones sin costo adicional. Mi objetivo es que quedes 100% satisfecho con el diseño antes de proceder al tatuaje.',
    category: 'proceso'
  },
  {
    id: 'duracion-sesion',
    question: '¿Cuánto dura una sesión de tatuaje?',
    answer: 'Varía según el tamaño y complejidad: tatuajes pequeños (1-3 horas), medianos (3-6 horas), grandes (6-8 horas o múltiples sesiones). Siempre respetamos tu resistencia al dolor y podemos hacer pausas o dividir el trabajo en varias sesiones si es necesario.',
    category: 'proceso'
  },
  {
    id: 'dolor-tatuaje',
    question: '¿Duele mucho hacerse un tatuaje?',
    answer: 'El dolor es subjetivo y varía según la persona y ubicación del tatuaje. Zonas con más grasa subcutánea duelen menos, mientras que áreas cercanas a huesos o con piel fina son más sensibles. Uso técnicas para minimizar el discomfort y siempre respeto tus límites de tolerancia.',
    category: 'proceso'
  },

  // Cuidados
  {
    id: 'cuidados-despues',
    question: '¿Cómo debo cuidar mi tatuaje después?',
    answer: 'Te proporciono instrucciones detalladas por escrito que incluyen: limpieza con jabón antibacterial, aplicación de crema específica, evitar sol directo y piscinas por 2-3 semanas, y usar ropa suelta. También incluyo seguimiento vía WhatsApp durante todo el proceso de sanación.',
    category: 'cuidado',
    featured: true
  },
  {
    id: 'tiempo-sanacion',
    question: '¿Cuánto tiempo tarda en sanar completamente?',
    answer: 'La sanación superficial toma 2-3 semanas, pero la sanación completa de las capas profundas de la piel toma 2-3 meses. Durante las primeras semanas es crucial seguir los cuidados indicados para evitar infecciones y asegurar colores vibrantes a largo plazo.',
    category: 'cuidado'
  },
  {
    id: 'productos-recomendados',
    question: '¿Qué productos recomiendas para el cuidado?',
    answer: 'Recomiendo jabón antibacterial específico, cremas cicatrizantes sin fragancias (como Bepanthen o similares), y protector solar factor 50+ una vez sanado. Te proporciono una lista específica de productos disponibles localmente en Valencia y Puerto Cabello.',
    category: 'cuidado'
  },

  // Booking
  {
    id: 'agendar-cita',
    question: '¿Cómo puedo agendar una cita?',
    answer: 'El proceso es muy sencillo: contáctame por WhatsApp para agendar tu consulta gratuita. En esa reunión discutimos tu idea, defino el presupuesto y, si decides proceder, coordinamos la fecha para el diseño y posterior tatuaje. También puedes escribirme por Instagram o email.',
    category: 'booking',
    featured: true
  },
  {
    id: 'tiempo-espera',
    question: '¿Cuánto tiempo de espera hay para una cita?',
    answer: 'Generalmente hay disponibilidad dentro de 1-2 semanas para consultas iniciales. Para la sesión de tatuaje, dependiendo de la complejidad y época del año, puede ser entre 2-4 semanas después del diseño aprobado. En temporadas altas (diciembre, vacaciones) el tiempo puede extenderse.',
    category: 'booking'
  },
  {
    id: 'cancelacion-cita',
    question: '¿Puedo cancelar o reprogramar mi cita?',
    answer: 'Sí, entiendo que pueden surgir imprevistos. Puedes reprogramar con al menos 48 horas de anticipación sin penalización. Cancelaciones con menos tiempo pueden generar una pequeña penalidad del 10% del anticipo. En casos de emergencia médica, siempre hay flexibilidad total.',
    category: 'booking'
  }
]

const categories = [
  { id: 'all', name: 'Todas', icon: HelpCircle, count: faqData.length },
  { id: 'general', name: 'General', icon: HelpCircle, count: faqData.filter(faq => faq.category === 'general').length },
  { id: 'precio', name: 'Precios', icon: DollarSign, count: faqData.filter(faq => faq.category === 'precio').length },
  { id: 'proceso', name: 'Proceso', icon: Clock, count: faqData.filter(faq => faq.category === 'proceso').length },
  { id: 'cuidado', name: 'Cuidados', icon: Shield, count: faqData.filter(faq => faq.category === 'cuidado').length },
  { id: 'booking', name: 'Reservas', icon: Calendar, count: faqData.filter(faq => faq.category === 'booking').length }
]

export default function FAQSection() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [openFAQ, setOpenFAQ] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredFAQs = faqData.filter(faq => faq.featured)

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  const whatsappUrl = `https://wa.me/${siteConfig.business.whatsapp}?text=${encodeURIComponent('Hola Carlos! Revisé las preguntas frecuentes pero tengo una consulta específica. ¿Podrías ayudarme?')}`

  return (
    <section id="faq" className="section bg-gradient-to-br from-paper via-secondary/5 to-paper">
      <div className="container-custom">
        
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium uppercase tracking-wider mb-4">
            ❓ Preguntas Frecuentes
          </span>
          <h2 className="font-cinzel font-bold text-3xl md:text-4xl lg:text-5xl text-ink-1000 mb-6">
            Todo lo que Necesitas
            <span className="block gradient-text">Saber Antes de Decidir</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            He recopilado las preguntas más frecuentes de mis clientes para ayudarte a tomar una decisión informada. Si no encuentras tu respuesta, no dudes en contactarme directamente.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="max-w-md mx-auto relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <Search size={20} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Buscar en preguntas frecuentes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200 shadow-sm"
            />
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                onClick={() => setSelectedCategory(category.id)}
                className={`group relative flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg border border-gray-200'
                }`}
              >
                <category.icon size={16} />
                <span className="font-medium text-sm">{category.name}</span>
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  selectedCategory === category.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {category.count}
                </span>
                
                {selectedCategory === category.id && (
                  <motion.div
                    layoutId="activeFAQCategory"
                    className="absolute inset-0 bg-primary rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Featured FAQs (when showing all) */}
        {selectedCategory === 'all' && searchQuery === '' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <h3 className="font-cinzel font-semibold text-xl text-ink-1000 text-center mb-6">
              Preguntas Más Importantes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {featuredFAQs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + (index * 0.1) }}
                  className="bg-gradient-to-r from-accent/5 to-primary/5 rounded-xl p-6 border border-accent/20 hover:shadow-lg transition-shadow duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full text-left"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="font-semibold text-ink-1000 leading-snug">
                        {faq.question}
                      </h4>
                      <div className={`flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
                        openFAQ === faq.id ? 'rotate-180' : ''
                      }`}>
                        <ChevronDown size={20} className="text-primary" />
                      </div>
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {openFAQ === faq.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-accent/20"
                      >
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* All FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {filteredFAQs.length > 0 ? (
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="font-semibold text-ink-1000 leading-snug mb-1">
                          {faq.question}
                        </h4>
                        <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs capitalize">
                          {faq.category}
                        </span>
                        {faq.featured && (
                          <span className="ml-2 inline-block px-2 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium">
                            Popular
                          </span>
                        )}
                      </div>
                      <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 transition-all duration-300 ${
                        openFAQ === faq.id 
                          ? 'rotate-180 bg-primary text-white' 
                          : 'group-hover:bg-gray-200'
                      }`}>
                        <ChevronDown size={20} />
                      </div>
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {openFAQ === faq.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6"
                      >
                        <div className="pt-4 border-t border-gray-200">
                          <p className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search size={24} className="text-gray-400" />
              </div>
              <h3 className="font-cinzel font-semibold text-xl text-gray-800 mb-2">
                No se encontraron preguntas
              </h3>
              <p className="text-gray-600 mb-6">
                No hay preguntas que coincidan con tu búsqueda o filtro actual.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('all')
                }}
                className="btn-primary"
              >
                Ver todas las preguntas
              </button>
            </div>
          )}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl p-8 md:p-12 border border-primary/10"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <MessageCircle size={28} className="text-white" />
            </div>
          </div>
          
          <h3 className="font-cinzel font-bold text-2xl md:text-3xl text-ink-1000 mb-4">
            ¿Tienes Otras Preguntas?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Si no encontraste la respuesta que buscas, no dudes en contactarme directamente. 
            Estoy aquí para resolver todas tus dudas y ayudarte a tomar la mejor decisión.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-3 px-6 py-3"
            >
              <MessageCircle size={20} />
              Pregúntame por WhatsApp
            </a>
            <a
              href={`mailto:${siteConfig.business.email}?subject=Consulta sobre tatuaje&body=Hola Carlos, revisé las preguntas frecuentes pero tengo una consulta específica...`}
              className="btn-outline flex items-center gap-3 px-6 py-3"
            >
              <Heart size={20} />
              Enviar Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}