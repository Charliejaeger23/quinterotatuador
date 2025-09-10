'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Instagram, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  Star, 
  Phone,
  Facebook,
  Award,
  Shield,
  ChevronUp
} from 'lucide-react'
import { siteConfig } from '@/lib/config'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const quickLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Portafolio', href: '#portfolio' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contacto', href: '#contacto' },
  ]

  const legalLinks = [
    { name: 'Términos y Condiciones', href: '/terminos' },
    { name: 'Política de Privacidad', href: '/privacidad' },
    { name: 'Política de Cancelaciones', href: '/cancelaciones' },
    { name: 'Aftercare', href: '/cuidados' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const whatsappUrl = `https://wa.me/${siteConfig.business.whatsapp}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`

  return (
    <footer className="bg-gradient-to-br from-ink-1000 via-gray-900 to-ink-1000 text-gray-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
               backgroundSize: '30px 30px'
             }}>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative">
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-cinzel font-bold text-white mb-4 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
                  {siteConfig.business.name}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4 max-w-md">
                  {siteConfig.description}
                </p>
                <p className="text-accent italic font-medium text-lg">
                  "Aquí no repetimos diseños. Porque nadie repite tu historia."
                </p>
              </motion.div>

              {/* Location & Hours */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-white font-medium">{siteConfig.business.address}</div>
                    <div className="text-gray-400 text-sm">Servicio personalizado a domicilio disponible</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock size={20} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-white font-medium">
                      Lunes - Viernes: {siteConfig.business.hours.monday}
                    </div>
                    <div className="text-white font-medium">
                      Sábado: {siteConfig.business.hours.saturday}
                    </div>
                    <div className="text-gray-400 text-sm">
                      Domingo: {siteConfig.business.hours.sunday}
                    </div>
                    <div className="text-accent text-sm font-medium mt-1">
                      📅 Consultas gratuitas por cita previa
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Social Media */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h4 className="text-white font-semibold">Sígueme en redes sociales</h4>
                <div className="flex gap-4">
                  <motion.a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="group w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                  </motion.a>
                  
                  <motion.a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="group w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 shadow-lg"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} className="group-hover:scale-110 transition-transform" />
                  </motion.a>
                  
                  <motion.a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="group w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center hover:bg-[#128C7E] transition-all duration-300 shadow-lg"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
                  </motion.a>
                  
                  <motion.a
                    href={`mailto:${siteConfig.business.email}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="group w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-all duration-300 shadow-lg"
                    aria-label="Email"
                  >
                    <Mail size={20} className="group-hover:scale-110 transition-transform" />
                  </motion.a>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-6 text-lg">Navegación</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={link.name}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </button>
                  </motion.li>
                ))}
              </ul>

              {/* Contact Info */}
              <div className="mt-8 space-y-3">
                <h5 className="text-white font-medium">Contacto directo</h5>
                <div className="space-y-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-[#25D366] transition-colors duration-200 text-sm group"
                  >
                    <MessageCircle size={14} />
                    <span>WhatsApp: {siteConfig.business.phone}</span>
                  </a>
                  <a
                    href={`tel:${siteConfig.business.phone}`}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 text-sm group"
                  >
                    <Phone size={14} />
                    <span>Teléfono: {siteConfig.business.phone}</span>
                  </a>
                  <a
                    href={`mailto:${siteConfig.business.email}`}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 text-sm group"
                  >
                    <Mail size={14} />
                    <span>Email: {siteConfig.business.email}</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Services & Legal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-6 text-lg">Especialidades</h4>
              <ul className="space-y-3 mb-8">
                {siteConfig.services.map((service, index) => (
                  <li key={service.id} className="text-gray-400 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 bg-accent rounded-full"></span>
                    {service.name}
                  </li>
                ))}
              </ul>

              <h5 className="text-white font-medium mb-4">Información legal</h5>
              <ul className="space-y-2">
                {legalLinks.map((link, index) => (
                  <motion.li 
                    key={link.name}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-xs flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-gray-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Awards & Certifications */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 pt-8 mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center group">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="mb-4 p-3 bg-accent/10 rounded-full"
                >
                  <Star size={24} className="text-accent" />
                </motion.div>
                <div className="text-white font-medium mb-1">10+ años experiencia</div>
                <div className="text-gray-400 text-sm">Tatuador profesional certificado</div>
              </div>
              
              <div className="flex flex-col items-center group">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="mb-4 p-3 bg-primary/10 rounded-full"
                >
                  <Award size={24} className="text-primary" />
                </motion.div>
                <div className="text-white font-medium mb-1">500+ historias tatuadas</div>
                <div className="text-gray-400 text-sm">Clientes satisfechos al 100%</div>
              </div>
              
              <div className="flex flex-col items-center group">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="mb-4 p-3 bg-green-500/10 rounded-full"
                >
                  <Shield size={24} className="text-green-500" />
                </motion.div>
                <div className="text-white font-medium mb-1">Higiene certificada</div>
                <div className="text-gray-400 text-sm">Protocolos internacionales</div>
              </div>
            </div>
          </motion.div>

          {/* Exclusivity Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-accent/10 via-primary/5 to-accent/10 rounded-2xl p-8 border border-accent/20 text-center mb-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent transform -skew-x-12"></div>
            <div className="relative z-10">
              <h4 className="text-accent font-cinzel font-bold text-xl mb-3">
                Compromiso de Exclusividad
              </h4>
              <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
                Cada diseño es único e irrepetible. Tu tatuaje jamás será replicado para otro cliente. 
                Esta es mi garantía de originalidad y respeto hacia tu historia personal.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 bg-gray-900/50 backdrop-blur-sm">
          <div className="container-custom py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-gray-400 text-sm text-center md:text-left">
                © {currentYear} {siteConfig.business.name}. Todos los derechos reservados.
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-6 text-xs text-gray-500">
                  <span>Hecho con ❤️ en {siteConfig.business.address}</span>
                  <span>•</span>
                  <span>Desarrollado con Next.js & Tailwind</span>
                </div>
                
                {/* Back to Top */}
                <motion.button
                  onClick={scrollToTop}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-full transition-colors duration-200"
                  aria-label="Volver arriba"
                >
                  <ChevronUp size={16} />
                </motion.button>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-800 text-center">
              <p className="text-accent text-lg italic font-cinzel">
                "Para los que llevan el arte en la piel y en el alma. Bienvenido, Amante del Buen Arte."
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}