// Global type definitions for Quinterotatuador

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: {
        event_category?: string
        event_label?: string
        value?: number
        page_title?: string
        page_location?: string
        [key: string]: any
      }
    ) => void
    fbq: (
      command: 'init' | 'track',
      eventName: string,
      parameters?: Record<string, any>
    ) => void
  }
}

// Portfolio types
export interface PortfolioItem {
  id: string
  title: string
  category: 'realismo' | 'blackwork' | 'lettering' | 'japonés' | 'botánico' | 'geométrico'
  story: string
  image: string
  bodyArea: 'brazo' | 'espalda' | 'pierna' | 'pecho' | 'mano' | 'cuello'
  size: 'pequeño' | 'mediano' | 'grande'
  featured: boolean
  client?: string
  year: number
  description: string
  process?: string[]
  tags: string[]
}

// Testimonial types
export interface Testimonial {
  id: string
  name: string
  location: string
  tattoo: string
  quote: string
  story: string
  image: string
  rating: number
  year: number
  videoUrl?: string
  portfolioId?: string
}

// Contact form types
export interface ContactFormData {
  name: string
  email: string
  phone: string
  city: string
  bodyArea: string
  size: string
  style: string
  story: string
  budget: string
  timeline: string
  references?: FileList
  consent: boolean
}

// FAQ types
export interface FAQItem {
  id: string
  question: string
  answer: string
  category: 'proceso' | 'cuidado' | 'precio' | 'experiencia'
}

// Navigation types
export interface NavItem {
  name: string
  href: string
}

// Filter types
export interface FilterOption {
  id: string
  name: string
  count?: number
}

// Animation types
export interface AnimationConfig {
  initial: Record<string, any>
  animate: Record<string, any>
  transition?: Record<string, any>
  exit?: Record<string, any>
}

// Component props types
export interface SectionProps {
  className?: string
  id?: string
}

export interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
}

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

// SEO types
export interface SEOData {
  title: string
  description: string
  keywords: string[]
  canonical?: string
  ogImage?: string
  noindex?: boolean
}

// Social media links
export interface SocialLink {
  platform: 'instagram' | 'whatsapp' | 'email' | 'tiktok' | 'youtube'
  url: string
  handle?: string
}

// Business info types
export interface BusinessInfo {
  name: string
  tagline: string
  description: string
  phone: string
  email: string
  address: {
    city: string
    state: string
    country: string
  }
  hours: {
    [key: string]: string
  }
  social: SocialLink[]
}

export {}