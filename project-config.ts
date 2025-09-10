// Site configuration for Quinterotatuador

export const siteConfig = {
  name: "Quinterotatuador",
  title: "Quinterotatuador - Tatuajes Únicos en Valencia, Venezuela",
  description: "Carlos Quintero, tatuador profesional en Valencia, Venezuela. Diseños únicos, realismo, blackwork, arte japonés. Aquí no repetimos diseños porque nadie repite tu historia.",
  tagline: "Para los que llevan el arte en la piel y en el alma. Bienvenido, Amante del Buen Arte.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://quinterotatuador.com",
  
  // Business Information
  business: {
    name: "Carlos Quintero",
    brandName: "Quinterotatuador",
    city: "Valencia, Venezuela",
    fullAddress: "Valencia, Estado Carabobo, Venezuela",
    phone: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+584241234567",
    email: process.env.NEXT_PUBLIC_EMAIL || "hola@quinterotatuador.com",
    
    // Business Hours
    hours: {
      monday: "10:00 - 18:00",
      tuesday: "10:00 - 18:00", 
      wednesday: "10:00 - 18:00",
      thursday: "10:00 - 18:00",
      friday: "10:00 - 18:00",
      saturday: "10:00 - 18:00",
      sunday: "Cerrado"
    },
    
    // Service Areas
    serviceAreas: ["Valencia", "Puerto Cabello", "Carabobo"],
    
    // Years of Experience
    yearsExperience: 10,
    
    // Specialties
    specialties: [
      "Realismo con elementos simbólicos",
      "Blackwork",
      "Arte botánico", 
      "Caligrafía personalizada",
      "Influencia japonesa (Irezumi)",
      "Arte espiritual",
      "Diseño gráfico",
      "Retratos y piezas personalizadas"
    ]
  },

  // Social Media Links
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com/quinterotatuador",
    whatsapp: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace('+', '') || '584241234567'}`,
    email: `mailto:${process.env.NEXT_PUBLIC_EMAIL || 'hola@quinterotatuador.com'}`,
    tiktok: process.env.NEXT_PUBLIC_TIKTOK_URL || "https://tiktok.com/@quinterotatuador"
  },

  // WhatsApp Messages
  whatsappMessages: {
    general: "¡Hola Carlos! Vi tu portafolio y me interesa agendar una consulta para un tatuaje personalizado. ¿Podríamos hablar?",
    consultation: "¡Hola Carlos! Me interesa agendar una consulta gratuita para discutir mi idea de tatuaje. Mi disponibilidad es: [indica tu disponibilidad]",
    portfolio: "¡Hola! He visto tu trabajo y me encanta tu estilo. Me gustaría saber más sobre tu proceso para tatuajes personalizados.",
    faq: "¡Hola Carlos! Tengo algunas preguntas sobre el proceso de tatuaje. ¿Podríamos hablar?",
    process: "¡Hola! He leído sobre tu proceso de 4 pasos y me interesa comenzar con el brief emocional. ¿Cuándo podríamos agendar?"
  },

  // Brand Colors (for reference)
  colors: {
    brand: {
      primary: "#A51E24",
      secondary: "#F4E6D9", 
      accent: "#D4AF37"
    },
    neutral: {
      ink: "#050505",
      paper: "#F9F9F9",
      warm: "#F4E6D9"
    }
  },

  // SEO Keywords
  keywords: [
    "tatuador valencia venezuela",
    "tatuajes personalizados valencia", 
    "blackwork valencia",
    "realismo tatuajes",
    "arte japonés irezumi",
    "carlos quintero tatuador",
    "tatuajes con significado",
    "estudio tatuajes valencia",
    "quinterotatuador",
    "tatuajes únicos venezuela",
    "tatuador profesional carabobo",
    "arte en la piel valencia"
  ],

  // Features & Guarantees
  features: {
    uniqueDesigns: "Diseños 100% únicos e irrepetibles",
    experience: "Más de 10 años de experiencia profesional", 
    aftercare: "Cuidado integral incluido",
    consultation: "Consulta gratuita de 30 minutos",
    hygiene: "Protocolos de higiene certificados",
    satisfaction: "Garantía de satisfacción 100%"
  },

  // Navigation Items
  navigation: [
    { name: "Portafolio", href: "#portafolio" },
    { name: "Proceso", href: "#proceso" },
    { name: "Historias", href: "#historias" },
    { name: "Sobre Carlos", href: "#sobre" },
    { name: "Contacto", href: "#contacto" }
  ],

  // Legal Pages
  legal: [
    { name: "Términos y Condiciones", href: "/terminos" },
    { name: "Política de Privacidad", href: "/privacidad" },
    { name: "Política de Cancelaciones", href: "/cancelaciones" }
  ]
}

// Helper functions
export const getWhatsAppUrl = (message?: string) => {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace('+', '') || '584241234567'
  const text = encodeURIComponent(message || siteConfig.whatsappMessages.general)
  return `https://wa.me/${phone}?text=${text}`
}

export const formatPhoneNumber = (phone: string) => {
  // Format +584241234567 to +58 424 123 4567
  return phone.replace(/(\+\d{2})(\d{3})(\d{3})(\d{4})/, '$1 $2 $3 $4')
}

export const getCurrentYear = () => new Date().getFullYear()

export default siteConfig