// Global TypeScript Definitions for Quinterotatuador

export interface PortfolioItem {
  id: string
  title: string
  description?: string
  category: TattooCategory
  imageUrl: string
  imageAlt: string
  tags: string[]
  featured: boolean
  createdAt: Date
  dimensions?: {
    width: number
    height: number
  }
  location?: BodyLocation
  duration?: string
  client?: {
    name?: string
    age?: number
    consent: boolean
  }
  process?: {
    sessions: number
    totalHours: number
    healingTime: string
  }
}

export interface Testimonial {
  id: string
  name: string
  rating: 1 | 2 | 3 | 4 | 5
  comment: string
  avatarUrl?: string
  location?: string
  tattooType?: TattooCategory
  date: Date
  featured: boolean
  verified: boolean
  socialProof?: {
    instagram?: string
    facebook?: string
  }
}

export interface Service {
  id: string
  name: string
  description: string
  category: TattooCategory
  startingPrice: number
  duration: string
  features: string[]
  popular: boolean
  available: boolean
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: FAQCategory
  order: number
  featured: boolean
  lastUpdated: Date
}

export interface ProcessStep {
  id: string
  step: number
  title: string
  description: string
  icon: string
  duration?: string
  requirements?: string[]
}

export interface Contact {
  type: 'whatsapp' | 'email' | 'phone' | 'instagram'
  value: string
  label: string
  primary: boolean
  available: boolean
}

export interface BusinessHours {
  day: DayOfWeek
  open: string
  close: string
  closed: boolean
  note?: string
}

export interface SocialMediaLink {
  platform: SocialPlatform
  url: string
  handle: string
  active: boolean
  followers?: number
}

// Enum Types
export type TattooCategory = 
  | 'blackwork'
  | 'realismo'
  | 'tradicional'
  | 'geometrico'
  | 'lineart'
  | 'cover-up'
  | 'lettering'
  | 'portrait'
  | 'custom'

export type BodyLocation = 
  | 'brazo'
  | 'pierna'
  | 'espalda'
  | 'pecho'
  | 'hombro'
  | 'muneca'
  | 'tobillo'
  | 'cuello'
  | 'mano'
  | 'pie'
  | 'otro'

export type FAQCategory = 
  | 'general'
  | 'precio'
  | 'proceso'
  | 'cuidado'
  | 'booking'
  | 'aftercare'

export type DayOfWeek = 
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday'

export type SocialPlatform = 
  | 'instagram'
  | 'facebook'
  | 'tiktok'
  | 'youtube'
  | 'twitter'
  | 'whatsapp'

// Form Types
export interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  tattooType?: TattooCategory
  bodyLocation?: BodyLocation
  budget?: string
  preferredDate?: Date
  consent: boolean
  newsletter?: boolean
}

export interface BookingFormData extends ContactFormData {
  appointmentType: 'consultation' | 'session' | 'touch-up'
  referenceImages?: File[]
  previousTattoos: boolean
  allergies?: string
  medications?: string
  emergencyContact: {
    name: string
    phone: string
    relationship: string
  }
}

// Component Props Types
export interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile'
  noIndex?: boolean
}

export interface ImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  sizes?: string
  fill?: boolean
  quality?: number
}

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  closeOnOverlayClick?: boolean
  showCloseButton?: boolean
}

export interface LightboxProps {
  images: PortfolioItem[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNext: () => void
  onPrevious: () => void
}

// API Response Types
export interface APIResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  error?: string
  timestamp: string
}

export interface PaginatedResponse<T> extends APIResponse<T[]> {
  pagination: {
    page: number
    limit: number
    total: number
    pages: number
    hasNext: boolean
    hasPrevious: boolean
  }
}

// Analytics Types
export interface AnalyticsEvent {
  action: string
  category: string
  label?: string
  value?: number
  customParameters?: Record<string, any>
}

export interface PageView {
  page: string
  title: string
  referrer?: string
  timestamp: Date
  sessionId: string
  userId?: string
}

// Error Types
export interface AppError {
  code: string
  message: string
  details?: any
  timestamp: Date
  userId?: string
  sessionId?: string
}

// Utility Types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
export type RequiredBy<T, K extends keyof T> = T & Required<Pick<T, K>>
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

// Theme Types
export interface ThemeColors {
  primary: string
  secondary: string
  accent: string
  ink: string
  paper: string
}

export interface BreakpointConfig {
  sm: string
  md: string
  lg: string
  xl: string
  '2xl': string
}

// Configuration Types
export interface SiteConfig {
  name: string
  title: string
  description: string
  url: string
  business: {
    name: string
    email: string
    phone: string
    whatsapp: string
    address: string
    hours: Record<DayOfWeek, string>
  }
  social: Record<SocialPlatform, string>
  colors: ThemeColors
  services: Service[]
  contact: {
    whatsappMessage: string
    preferredContact: 'whatsapp' | 'email' | 'phone'
  }
  keywords: string[]
  analytics: {
    googleAnalyticsId?: string
    googleTagManagerId?: string
    facebookAppId?: string
  }
  features: {
    onlineBooking: boolean
    gallery: boolean
    testimonials: boolean
    blog: boolean
    ecommerce: boolean
    multilingual: boolean
  }
}

// Global Window Extensions
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void
    fbq?: (
      command: 'track' | 'trackCustom' | 'init',
      eventName: string,
      parameters?: Record<string, any>
    ) => void
    dataLayer?: any[]
  }
}