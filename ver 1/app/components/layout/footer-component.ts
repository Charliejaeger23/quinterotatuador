'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Instagram, MessageCircle, Mail, MapPin, Clock, Star } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  const WHATSAPP_NUMBER = "+584241234567"
  const quickLinks = [
    { name: 'Portafolio', href: '#portafolio' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'Historias', href: '#historias' },
    { name: 'Preguntas Frecuentes', href: '#faq' },
  ]

  const legalLinks = [
    { name: 'Términos y Condiciones', href: '/terminos' },
    { name: 'Política de Privacidad', href: '/privacidad' },
    { name: 'Política de Cancelaciones', href: '/cancelaciones' },
  ]

  return (
    <footer className="bg-gray-950 text-gray-300">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                @quinterotatuador
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Tatuador profesional especializado en diseños únicos con significado profundo. 
                Más de 10 años transformando historias personales en arte permanente.
              </p>
              <p className="text-gold italic font-medium">
                "Aquí no repetimos diseños. Porque nadie repite tu historia."
              </p>
            </div>

            {/* Location & Hours */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-gold mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Valencia, Venezuela</div>
                  <div className="text-gray-400 text-sm">También atendemos Puerto Cabello</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock size={20} className="text-gold mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Lunes - Sábado: 10:00 - 18:00</div>
                  <div className="text-gray-400 text-sm">Domingos: Cerrado</div>
                  <div className="text-gold text-sm">Consultas gratuitas por cita</div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Sígueme en redes</h4>
              <div className="flex gap-4">
                <motion.a
                  href="https://instagram.com/quinterotatuador"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </motion.a>
                
                <motion.a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center hover:bg-[#128C7E] transition-all duration-300"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={20} />
                </motion.a>
                
                <motion.a
                  href="mailto:hola@quinterotatuador.com"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Navegación</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    onClick={(e) => {
                      e.preventDefault()
                      const element = document.querySelector(link.href)
                      if (element) {
                        const offset = 100
                        const elementPosition = element.getBoundingClientRect().top
                        const offsetPosition = elementPosition + window.pageYOffset - offset
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth'
                        })
                      }
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="mt-8 space-y-3">
              <h5 className="text-white font-medium">Contacto directo</h5>
              <div className="space-y-2">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  className="block text-gray-400 hover:text-[#25D366] transition-colors duration-200 text-sm"
                >
                  WhatsApp: +58 424 123 4567
                </a>
                <a
                  href="mailto:hola@quinterotatuador.com"
                  className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Email: hola@quinterotatuador.com
                </a>
              </div>
            </div>
          </div>

          {/* Services & Legal */}
          <div>
            <h4 className="text-white font-semibold mb-6">Servicios</h4>
            <ul className="space-y-3 mb-8">
              <li className="text-gray-400 text-sm">• Diseños personalizados</li>
              <li className="text-gray-400 text-sm">• Realismo y blackwork</li>
              <li className="text-gray-400 text-sm">• Arte japonés (Irezumi)</li>
              <li className="text-gray-400 text-sm">• Lettering y caligrafía</li>
              <li className="text-gray-400 text-sm">• Cover-ups y retoques</li>
              <li className="text-gray-400 text-sm">• Aftercare completo</li>
            </ul>

            <h5 className="text-white font-medium mb-4">Información legal</h5>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-xs"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Awards & Certifications */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Star size={24} className="text-gold mb-2" />
              <div className="text-white font-medium">10+ años experiencia</div>
              <div className="text-gray-400 text-sm">Tatuador profesional certificado</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="text-gold text-2xl mb-2">🏆</div>
              <div className="text-white font-medium">500+ historias tatuadas</div>
              <div className="text-gray-400 text-sm">Clientes satisfechos</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="text-gold text-2xl mb-2">🛡️</div>
              <div className="text-white font-medium">Higiene certificada</div>
              <div className="text-gray-400 text-sm">Protocolos internacionales</div>
            </div>
          </div>
        </div>

        {/* Exclusivity Banner */}
        <div className="bg-gradient-to-r from-gold/20 to-brand-700/20 rounded-2xl p-6 border border-gold/30 text-center mb-8">
          <h4 className="text-gold font-bold text-lg mb-2">
            Compromiso de Exclusividad
          </h4>
          <p className="text-gray-300 text-sm">
            Cada diseño es único e irrepetible. Tu tatuaje jamás será replicado para otro cliente. 
            Esta es mi garantía de originalidad y respeto hacia tu historia personal.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-900">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Carlos Quintero - Quinterotatuador. Todos los derechos reservados.
            </div>
            
            <div className="flex items-center gap-6 text-xs text-gray-500">
              <span>Hecho con ❤️ en Valencia, Venezuela</span>
              <span>•</span>
              <span>Desarrollado con Next.js</span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-800 text-center">
            <p className="text-gold text-sm italic">
              "Para los que llevan el arte en la piel y en el alma. Bienvenido, Amante del Buen Arte."
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}