import { Testimonial } from '@/app/types/global'

export const testimonialsData: Testimonial[] = [
  {
    id: 'maria-fenix-cancer',
    name: 'María Elena Rodríguez',
    rating: 5,
    comment: 'Después de superar el cáncer, quería algo que simbolizara mi renacimiento. Carlos no solo entendió mi historia, sino que la convirtió en una obra de arte. El fénix que llevo en mi espalda no es solo un tatuaje, es un recordatorio diario de mi fuerza. Su profesionalismo y sensibilidad hicieron que cada sesión fuera terapéutica. Tres años después, la gente sigue quedándose impresionada con los detalles y el significado profundo del diseño.',
    avatarUrl: '/images/testimonials/maria-rodriguez.jpg',
    location: 'Valencia, Carabobo',
    tattooType: 'realismo',
    date: new Date('2024-03-20'),
    featured: true,
    verified: true,
    socialProof: {
      instagram: '@mariaelena_warrior'
    }
  },
  {
    id: 'alejandro-dragon-valencia',
    name: 'Alejandro Nakamura',
    rating: 5,
    comment: 'Soy descendiente japonés nacido en Valencia, y siempre quise honrar ambas culturas. Carlos logró fusionar el arte irezumi tradicional con elementos de nuestra tierra carabobeña de una manera que jamás imaginé posible. El dragón incorpora el Río Cabriales y nuestras montañas, creando algo completamente único. Su conocimiento del arte japonés es impresionante, y su respeto por la tradición se nota en cada línea. Es más que un tatuador, es un artista que comprende el alma.',
    avatarUrl: '/images/testimonials/alejandro-nakamura.jpg',
    location: 'Naguanagua, Carabobo',
    tattooType: 'realismo',
    date: new Date('2024-02-25'),
    featured: true,
    verified: true,
    socialProof: {
      instagram: '@alex_nakamura_ve'
    }
  },
  {
    id: 'carlos-abuela-memoria',
    name: 'Carlos Mendoza',
    rating: 5,
    comment: 'Perder a mi abuela fue lo más duro que he vivido. Ella me crió y quería llevarla conmigo para siempre. Carlos hizo algo mágico: no solo capturó sus rasgos físicos perfectamente, sino también esa calidez que tenía en la mirada cuando me veía llegar. Incluyó sus manos tejiendo, algo que la caracterizaba. Cuando mi familia vio el resultado, todos lloramos. Es como si mi abuela siguiera aquí, cuidándome desde mi brazo. El trabajo de Carlos trasciende el arte, toca el corazón.',
    avatarUrl: '/images/testimonials/carlos-mendoza.jpg',
    location: 'Valencia, Carabobo',
    tattooType: 'realismo',
    date: new Date('2023-09-05'),
    featured: true,
    verified: true
  },
  {
    id: 'patricia-nombre-hija',
    name: 'Patricia Morales',
    rating: 5,
    comment: 'Cuando nació mi hija Sofía Valentina, supe que quería su nombre tatuado, pero no de cualquier manera. Carlos creó una caligrafía completamente personalizada, inspirada en la arquitectura colonial de Valencia. Cada letra tiene un toque único, y los ornamentos parecen joyas. Lo que más me impresiona es que después de dos años, he visto miles de tatuajes de nombres, pero nunca he visto algo parecido al mío. Carlos cumplió su promesa: mi tatuaje es irrepetible, como mi amor por mi hija.',
    avatarUrl: '/images/testimonials/patricia-morales.jpg',
    location: 'San Diego, Carabobo',
    tattooType: 'lettering',
    date: new Date('2023-05-25'),
    featured: false,
    verified: true,
    socialProof: {
      instagram: '@patty_morales_ve'
    }
  },
  {
    id: 'miguel-rosa-vientos',
    name: 'Miguel Torres',
    rating: 5,
    comment: 'Trabajo en la industria petrolera y he viajado por todo el mundo, pero Valencia siempre ha sido mi hogar. Carlos diseñó una rosa de los vientos que cuenta mi historia: cada punto cardinal tiene símbolos de países donde he trabajado, y el centro tiene las coordenadas exactas de Valencia. Es un mapa de mi vida en mi hombro. Su atención al detalle es extraordinaria, y el significado personal que logró darle al diseño me emociona cada vez que me miro al espejo.',
    avatarUrl: '/images/testimonials/miguel-torres.jpg',
    location: 'Puerto Cabello, Carabobo',
    tattooType: 'blackwork',
    date: new Date('2023-04-18'),
    featured: false,
    verified: true
  },
  {
    id: 'luna-geometria-chakras',
    name: 'Luna Vásquez',
    rating: 5,
    comment: 'Practico yoga y meditación desde hace años. Quería un tatuaje que reflejara mi espiritualidad pero que fuera estéticamente perfecto. Carlos estudió la geometría sagrada y los chakras para crear algo que no solo se ve increíble, sino que tiene un significado energético real. Cada forma está matemáticamente calculada. Desde que me lo hice, siento que mi práctica espiritual se profundizó. Es arte, ciencia y espiritualidad en perfecta armonía. Carlos es un verdadero maestro de su oficio.',
    avatarUrl: '/images/testimonials/luna-vasquez.jpg',
    location: 'Valencia, Carabobo',
    tattooType: 'geometrico',
    date: new Date('2023-06-15'),
    featured: true,
    verified: true,
    socialProof: {
      instagram: '@luna_spiritual_art'
    }
  }
]

// Testimonials adicionales para rotación (sin mostrar todos a la vez)
export const additionalTestimonials: Testimonial[] = [
  {
    id: 'roberto-samurai-bushido',
    name: 'Roberto Silva',
    rating: 5,
    comment: 'El samurai que Carlos tatuó en mi brazo representa mis valores de vida: honor, disciplina y respeto. Lo que más me impresiona es cómo logró capturar la filosofía bushido adaptada a nuestros valores venezolanos. Cada detalle de la katana tiene significado personal. Es un recordatorio constante de quién soy y hacia dónde voy.',
    location: 'Guacara, Carabobo',
    tattooType: 'blackwork',
    date: new Date('2023-10-30'),
    featured: false,
    verified: true
  },
  {
    id: 'isabella-orquidea-nacional',
    name: 'Isabella Hernández',
    rating: 5,
    comment: 'Como bióloga, quería la flor nacional de Venezuela tatuada con precisión científica. Carlos estudió cada pétalo de la Cattleya mossiae hasta lograr un resultado hiperrealista. Es botánicamente exacta y artísticamente hermosa. Mis colegas de la universidad no pueden creer el nivel de detalle.',
    location: 'Valencia, Carabobo',
    tattooType: 'realismo',
    date: new Date('2023-12-10'),
    featured: false,
    verified: true
  }
]

// Función para obtener testimonios destacados
export const getFeaturedTestimonials = (): Testimonial[] => {
  return testimonialsData.filter(testimonial => testimonial.featured)
}

// Función para obtener testimonios por tipo de tatuaje
export const getTestimonialsByTattooType = (tattooType: string): Testimonial[] => {
  return testimonialsData.filter(testimonial => testimonial.tattooType === tattooType)
}

// Función para obtener testimonios verificados
export const getVerifiedTestimonials = (): Testimonial[] => {
  return testimonialsData.filter(testimonial => testimonial.verified)
}

// Estadísticas de testimonios
export const getTestimonialsStats = () => {
  const totalTestimonials = testimonialsData.length + additionalTestimonials.length
  const averageRating = testimonialsData.reduce((acc, t) => acc + t.rating, 0) / testimonialsData.length
  const fiveStarCount = testimonialsData.filter(t => t.rating === 5).length
  const verifiedCount = testimonialsData.filter(t => t.verified).length
  
  return {
    totalTestimonials,
    averageRating,
    fiveStarPercentage: Math.round((fiveStarCount / testimonialsData.length) * 100),
    verifiedPercentage: Math.round((verifiedCount / testimonialsData.length) * 100),
    satisfactionRate: '100%'
  }
}

// Testimonios por video (para futuras implementaciones)
export const videoTestimonials = [
  {
    id: 'video-maria-fenix',
    clientName: 'María Elena',
    videoUrl: '/videos/testimonials/maria-elena-testimonial.mp4',
    thumbnail: '/images/testimonials/maria-video-thumb.jpg',
    duration: '2:30',
    description: 'María cuenta su historia de superación y cómo su tatuaje de fénix la ayudó en su proceso de sanación.'
  },
  {
    id: 'video-carlos-abuela',
    clientName: 'Carlos Mendoza',
    videoUrl: '/videos/testimonials/carlos-abuela-testimonial.mp4',
    thumbnail: '/images/testimonials/carlos-video-thumb.jpg',
    duration: '3:15',
    description: 'Emotivo testimonio sobre el retrato realista de su abuela y lo que significa para él.'
  }
]

// Frases destacadas para usar en la UI
export const testimonialHighlights = [
  {
    text: "Carlos no solo entendió mi historia, sino que la convirtió en una obra de arte.",
    author: "María Elena",
    tattoo: "Fénix del Renacimiento"
  },
  {
    text: "Es más que un tatuador, es un artista que comprende el alma.",
    author: "Alejandro",
    tattoo: "Dragón Japonés"
  },
  {
    text: "Mi tatuaje es irrepetible, como mi amor por mi hija.",
    author: "Patricia",
    tattoo: "Caligrafía Personalizada"
  },
  {
    text: "Carlos es un verdadero maestro de su oficio.",
    author: "Luna",
    tattoo: "Geometría Solar"
  }
]

export default testimonialsData