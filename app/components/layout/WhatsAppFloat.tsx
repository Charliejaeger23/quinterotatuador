'use client'

import { useMemo } from 'react'
import { MessageCircle } from 'lucide-react'
import { siteConfig } from '@/lib/config'

export default function WhatsAppFloat() {
  const href = useMemo(() => {
    const msg = encodeURIComponent('¡Hola Carlos! Quiero una consulta personalizada.')
    return `https://wa.me/${siteConfig.business.whatsapp}?text=${msg}`
  }, [])

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatear por WhatsApp"
      title="Chatear por WhatsApp"
      data-cta="wa-float"
      className="
        fixed z-50 bottom-6 right-6 h-14 w-14 rounded-full
        bg-green-500 hover:bg-green-600 shadow-lg shadow-green-900/30
        flex items-center justify-center transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400
      "
    >
      <MessageCircle className="text-white" size={24} aria-hidden="true" />
      <span className="sr-only">WhatsApp</span>
    </a>
  )
}
