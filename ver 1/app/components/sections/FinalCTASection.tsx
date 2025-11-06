'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MessageCircle, Calendar, Heart, Star, Phone, Mail } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { siteConfig } from '@/lib/config'

export default function FinalCTASection() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const whatsappUrl = `https://wa.me/${siteConfig.business.whatsapp}?text=${encodeURIComponent('¡Hola Carlos! He visto tu portafolio y me interesa crear un tatuaje único. ¿Podemos conversar sobre mi idea?')}`

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Respuesta inmediata',
      action: 'Escribir ahora',
      href: whatsappUrl,
      primary: true,
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      icon: Phone,
      title: 'Llamada',
      description: 'Conversación directa',
      action: 'Llamar',
      href: `tel:${siteConfig.business.phone}`,
      primary: false,
      color: 'bg-primary hover:bg-primary/90'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Consulta detallada',
      action: 'Escribir email',
      href: `mailto:${siteConfig.business.email}?subject=Consulta sobre tatuaje personalizado&body=Hola Carlos,%0D%0A%0D%0AHe visto tu trabajo y me interesa crear un tatuaje único...`,
      primary: false,
      color: 'bg-accent hover:bg-accent/90 text-ink-1000'
    }
  ]

  return (
    <section className="section bg-gradient-to-br from-ink-1000 via-gray-900 to-ink-1000 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
               backgroundSize: '30px 30px'
             }}>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Header */}
          <div className="flex justify-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 bg-accent rounded-full flex items-center justify-center"
            >
              <Heart size={32} className="text-ink-1000" />
            </motion.div>
          </div>

          <h2 className="font-cinzel font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
            Tu Historia Espera
            <span className="block text-accent">Ser Tatuada</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Cada gran tatuaje comienza con una conversación. Cuéntame tu historia, 
            comparte tu visión y juntos crearemos una obra de arte que será tuya para siempre.
          </p>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-2"
            >
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-300 text-sm">5.0 (100+ reseñas)</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-2 text-gray-300 text-sm"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Disponible para nuevos proyectos</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
              className={`relative ${method.primary ? 'md:scale-105' : ''}`}
            >
              <Link
                href={method.href}
                target={method.title === 'WhatsApp' ? '_blank' : '_self'}
                rel={method.title === 'WhatsApp' ? 'noopener noreferrer' : ''}
                className="group block"
              >
                <div className={`${method.color} rounded-2xl p-8 text-center relative overflow-hidden transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl`}>
                  {/* Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <method.icon size={28} />
                      </div>
                    </div>
                    
                    <h3 className="font-cinzel font-bold text-xl mb-2">
                      {method.title}
                    </h3>
                    
                    <p className="text-sm opacity-90 mb-4">
                      {method.description}
                    </p>
                    
                    <div className="inline-flex items-center gap-2 font-semibold group-hover:gap-3 transition-all duration-300">
                      <span>{method.action}</span>
                      <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </div>
                  </div>
                  
                  {method.primary && (
                    <div className="absolute -top-3 -right-3">
                      <div className="bg-accent text-ink-1000 px-3 py-1 rounded-full text-xs font-bold">
                        Recomendado
                      </div>
                    </div>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center bg-gradient-to-r from-accent/10 via-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 border border-accent/20"
        >
          <blockquote className="text-xl md:text-2xl italic font-cinzel mb-6 text-accent">
            "Tu piel es mi lienzo, tu historia mi inspiración. 
            Juntos crearemos arte que trascienda el tiempo."
          </blockquote>
          
          <cite className="text-gray-300 text-lg">
            — Carlos Quintero, Tatuador Profesional
          </cite>
          
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              📍 {siteConfig.business.address} • 
              📞 {siteConfig.business.phone} • 
              ✉️ {siteConfig.business.email}
            </p>
            <p className="text-gray-400 text-xs mt-2">
              Consulta inicial gratuita • Diseños 100% originales • Más de 10 años de experiencia
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}