'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { siteConfig } from '@/lib/config'

const navItems = [
  { name: 'Inicio', href: '#hero' },
  { name: 'Portafolio', href: '#portfolio' },
  { name: 'Proceso', href: '#proceso' },
  { name: 'Testimonios', href: '#testimonios' },
  { name: 'Sobre Mí', href: '#about' },
  { name: 'Contacto', href: '#contacto' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50
      setIsScrolled(scrolled)
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.slice(1))
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (current) {
        setActiveSection(`#${current}`)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

  const closeMenu = () => setIsMobileMenuOpen(false)

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'glass-effect backdrop-blur-md bg-white/10 py-3 shadow-lg border-b border-white/10' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/" 
                className={`text-xl md:text-2xl font-cinzel font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-primary' : 'text-white'
                }`}
                onClick={() => scrollToSection('#hero')}
              >
                Quintero<span className="text-accent">Tatuador</span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                      activeSection === item.href
                        ? isScrolled ? 'text-primary' : 'text-accent'
                        : isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {item.name}
                    <span 
                      className={`absolute bottom-0 left-1/2 h-0.5 transition-all duration-300 transform -translate-x-1/2 ${
                        activeSection === item.href
                          ? 'w-full bg-accent'
                          : 'w-0 group-hover:w-full bg-accent'
                      }`}
                    />
                  </button>
                </motion.div>
              ))}
              
              {/* CTA Button */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
              >
                <Link
                  href={`https://wa.me/${siteConfig.business.whatsapp}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary relative overflow-hidden group"
                >
                  <span className="relative z-10">Agenda tu Cita</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
                isScrolled ? 'text-primary hover:bg-primary/10' : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
            onClick={closeMenu}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-ink-1000/95 backdrop-blur-lg" />
            
            {/* Menu Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-80 bg-white/95 backdrop-blur-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-xl font-cinzel font-bold text-primary">
                  Navegación
                </h2>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={closeMenu}
                  className="p-2 text-gray-600 hover:text-primary rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Navigation Links */}
              <div className="p-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <button
                      onClick={() => {
                        scrollToSection(item.href)
                        closeMenu()
                      }}
                      className={`w-full text-left px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 flex items-center justify-between group ${
                        activeSection === item.href
                          ? 'text-primary bg-primary/10 border-l-4 border-primary'
                          : 'text-gray-700 hover:text-primary hover:bg-primary/5'
                      }`}
                    >
                      <span>{item.name}</span>
                      <motion.div
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        →
                      </motion.div>
                    </button>
                  </motion.div>
                ))}
                
                {/* Mobile CTA */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="pt-4 border-t border-gray-200 mt-6"
                >
                  <Link
                    href={`https://wa.me/${siteConfig.business.whatsapp}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn-primary justify-center"
                    onClick={closeMenu}
                  >
                    <span>💬</span>
                    Agenda tu Cita por WhatsApp
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}