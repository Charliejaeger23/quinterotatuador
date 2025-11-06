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

export const testimonials: Testimonial[] = [
  {
    id: 'maria-gonzalez',
    name: 'María González',
    location: 'Valencia, Venezuela',
    tattoo: 'Rosa en blackwork - Antebrazo',
    quote: 'Carlos no solo tatuó mi piel, plasmó mi renacimiento después de un momento muy difícil.',
    story: 'Llegué a Carlos en uno de los momentos más oscuros de mi vida. Había perdido a mi madre y me sentía perdida. Él no solo creó un diseño hermoso, sino que entendió que cada línea de esa rosa representaba mi proceso de sanación. Cada vez que la veo, recuerdo que soy más fuerte de lo que creía.',
    image: '/images/testimonials/maria.jpg',
    rating: 5,
    year: 2024,
    portfolioId: 'rosa-blackwork-001'
  },
  {
    id: 'andres-morales',
    name: 'Andrés Morales',
    location: 'Puerto Cabello, Venezuela',
    tattoo: 'Retrato realista - Pecho',
    quote: 'El retrato de mi padre quedó exactamente como lo veía en mis recuerdos más hermosos.',
    story: 'Mi padre falleció cuando yo tenía 15 años. Durante años busqué la manera de honrarlo. Carlos capturó no solo sus rasgos físicos, sino su esencia, su sonrisa, esa mirada que me daba seguridad. Ahora lo llevo siempre conmigo, literalmente sobre el corazón.',
    image: '/images/testimonials/andres.jpg',
    rating: 5,
    year: 2024,
    portfolioId: 'retrato-realista-002'
  },
  {
    id: 'isabella-torres',
    name: 'Isabella Torres',
    location: 'Caracas, Venezuela',
    tattoo: 'Manga completa narrativa - Brazo',
    quote: 'Mi manga cuenta mi viaje de los últimos 5 años. Carlos supo interpretar cada etapa de mi evolución.',
    story: 'Quería algo que contara mi historia de transformación personal: desde la ansiedad hasta encontrar mi paz interior. Carlos diseñó una manga que fluye desde elementos oscuros en el hombro hasta flores de loto en la muñeca. Es mi historia de vida en arte.',
    image: '/images/testimonials/isabella.jpg',
    rating: 5,
    year: 2024,
    videoUrl: '/videos/testimonials/isabella-testimonio.mp4',
    portfolioId: 'sleeve-completo-011'
  },
  {
    id: 'roberto-castillo',
    name: 'Roberto Castillo',
    location: 'Valencia, Venezuela',
    tattoo: 'Mandala geométrico - Brazo',
    quote: 'Buscaba equilibrio en mi vida y Carlos tradujo eso perfectamente en un mandala único.',
    story: 'Practico meditación y yoga desde hace años. Quería un diseño que representara mi búsqueda de equilibrio espiritual. Carlos creó un mandala que no solo es hermoso visualmente, sino que tiene significado en cada línea. Es mi recordatorio diario de mantener la calma.',
    image: '/images/testimonials/roberto.jpg',
    rating: 5,
    year: 2024,
    portfolioId: 'mandala-geometrico-004'
  },
  {
    id: 'carmen-lopez',
    name: 'Carmen López',
    location: 'Maracay, Venezuela',
    tattoo: 'Helechos botánicos - Pierna',
    quote: 'Conecté con mis raíces venezolanas a través de estos helechos nativos tan hermosos.',
    story: 'Soy bióloga y amo la flora venezolana. Carlos investigó conmigo sobre helechos nativos de nuestro país y creó una composición botánica que es científicamente precisa pero artísticamente impresionante. Es arte y ciencia en mi piel.',
    image: '/images/testimonials/carmen.jpg',
    rating: 5,
    year: 2024,
    portfolioId: 'botanico-helechos-005'
  },
  {
    id: 'luis-rodriguez',
    name: 'Luis Rodríguez',
    location: 'Valencia, Venezuela',
    tattoo: 'Dragón japonés - Espalda completa',
    quote: 'Siempre soñé con un irezumi tradicional. Carlos respetó la tradición pero lo hizo personal.',
    story: 'Llevo años estudiando la cultura japonesa y sus tatuajes tradicionales. Carlos no solo dominó la técnica del irezumi, sino que adaptó el diseño a mi historia personal. Mi dragón representa protección para mi familia y sabiduría en mi camino empresarial.',
    image: '/images/testimonials/luis.jpg',
    rating: 5,
    year: 2023,
    portfolioId: 'dragon-japonés-006'
  }
]

export const featuredTestimonials = testimonials.slice(0, 3)

export const videoTestimonials = testimonials.filter(t => t.videoUrl)

export const averageRating = testimonials.reduce((acc, curr) => acc + curr.rating, 0) / testimonials.length