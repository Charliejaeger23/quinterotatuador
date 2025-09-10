import { PortfolioItem } from '@/app/types/global'

export const portfolioData: PortfolioItem[] = [
  {
    id: 'fenix-renacimiento',
    title: 'Fénix del Renacimiento',
    description: 'Una obra profunda que simboliza la superación personal después de momentos difíciles. Este fénix emerge de cenizas estilizadas con elementos botánicos venezolanos, representando el renacer de María después de vencer su batalla contra el cáncer.',
    category: 'realismo',
    imageUrl: '/images/portfolio/fenix-renacimiento.jpg',
    imageAlt: 'Tatuaje realista de fénix con elementos botánicos emergiendo de cenizas',
    tags: ['realismo', 'simbolismo', 'superación', 'botánico', 'detallado', 'fénix', 'venezuela'],
    featured: true,
    createdAt: new Date('2024-03-15'),
    dimensions: { width: 25, height: 35 },
    location: 'espalda',
    duration: '8 horas',
    client: {
      name: 'María',
      age: 34,
      consent: true
    },
    process: {
      sessions: 3,
      totalHours: 18,
      healingTime: '4-6 semanas'
    }
  },
  {
    id: 'dragón-japones-valencia',
    title: 'Dragón Japonés - Espíritu de Valencia',
    description: 'Fusión única del arte irezumi japonés con simbolismo carabobeño. Este dragón incorpora elementos del Río Cabriales y montañas locales, creando una pieza que honra tanto la tradición japonesa como las raíces venezolanas del cliente.',
    category: 'realismo',
    imageUrl: '/images/portfolio/dragon-japones-valencia.jpg',
    imageAlt: 'Tatuaje estilo japonés de dragón con elementos venezolanos',
    tags: ['japonés', 'irezumi', 'dragón', 'valencia', 'venezuela', 'fusión cultural', 'agua'],
    featured: true,
    createdAt: new Date('2024-02-20'),
    dimensions: { width: 30, height: 45 },
    location: 'brazo',
    duration: '12 horas',
    client: {
      name: 'Alejandro',
      age: 28,
      consent: true
    },
    process: {
      sessions: 4,
      totalHours: 24,
      healingTime: '6-8 semanas'
    }
  },
  {
    id: 'mandala-blackwork-geometrico',
    title: 'Mandala Geométrico Ancestral',
    description: 'Diseño blackwork hipnótico que combina geometría sagrada con patrones inspirados en arte indígena venezolano. Cada línea fue trazada manualmente, creando profundidad y movimiento que cambia según el ángulo de observación.',
    category: 'blackwork',
    imageUrl: '/images/portfolio/mandala-blackwork-geometrico.jpg',
    imageAlt: 'Tatuaje blackwork de mandala geométrico con patrones indígenas',
    tags: ['blackwork', 'geométrico', 'mandala', 'indígena', 'sagrado', 'líneas', 'precisión'],
    featured: true,
    createdAt: new Date('2024-01-10'),
    dimensions: { width: 20, height: 20 },
    location: 'hombro',
    duration: '6 horas',
    client: {
      age: 26,
      consent: true
    },
    process: {
      sessions: 2,
      totalHours: 10,
      healingTime: '3-4 semanas'
    }
  },
  {
    id: 'orquídea-botanico-realista',
    title: 'Orquídea Venezolana - Flor Nacional',
    description: 'Representación hiperrealista de la Cattleya mossiae, flor nacional de Venezuela. Cada pétalo fue estudiado fotográficamente para capturar la delicadeza y los matices de color únicos de esta orquídea endémica de los Andes venezolanos.',
    category: 'realismo',
    imageUrl: '/images/portfolio/orquidea-botanico-realista.jpg',
    imageAlt: 'Tatuaje realista de orquídea venezolana Cattleya mossiae',
    tags: ['botánico', 'realismo', 'orquídea', 'venezuela', 'flor nacional', 'detallado', 'color'],
    featured: false,
    createdAt: new Date('2023-12-05'),
    dimensions: { width: 15, height: 22 },
    location: 'muneca',
    duration: '4 horas',
    client: {
      name: 'Isabella',
      age: 22,
      consent: true
    },
    process: {
      sessions: 2,
      totalHours: 7,
      healingTime: '2-3 semanas'
    }
  },
  {
    id: 'caligrafía-arabe-amor-eterno',
    title: 'Caligrafía Árabe - Amor Eterno',
    description: 'Lettering en caligrafía árabe que significa "Amor Eterno", diseñado para una pareja que se conoció en Valencia pero tiene raíces árabes. La composición incluye elementos ornamentales que fluyen como el viento del Lago de Valencia.',
    category: 'lettering',
    imageUrl: '/images/portfolio/caligrafia-arabe-amor-eterno.jpg',
    imageAlt: 'Tatuaje de caligrafía árabe con ornamentos decorativos',
    tags: ['lettering', 'caligrafía', 'árabe', 'amor', 'ornamental', 'pareja', 'significado'],
    featured: false,
    createdAt: new Date('2023-11-18'),
    dimensions: { width: 18, height: 8 },
    location: 'muneca',
    duration: '3 horas',
    client: {
      name: 'Amira',
      age: 29,
      consent: true
    },
    process: {
      sessions: 1,
      totalHours: 3,
      healingTime: '2 semanas'
    }
  },
  {
    id: 'samurai-bushido-honor',
    title: 'Samurai del Bushido Moderno',
    description: 'Interpretación contemporánea del código bushido adaptado a la filosofía de vida del cliente. Este samurai lleva una katana con grabados que representan los valores familiares venezolanos: respeto, honor y perseverancia.',
    category: 'blackwork',
    imageUrl: '/images/portfolio/samurai-bushido-honor.jpg',
    imageAlt: 'Tatuaje blackwork de samurai con elementos filosóficos',
    tags: ['blackwork', 'samurai', 'bushido', 'honor', 'filosofía', 'katana', 'valores'],
    featured: false,
    createdAt: new Date('2023-10-22'),
    dimensions: { width: 22, height: 35 },
    location: 'brazo',
    duration: '10 horas',
    client: {
      name: 'Roberto',
      age: 31,
      consent: true
    },
    process: {
      sessions: 3,
      totalHours: 15,
      healingTime: '4-5 semanas'
    }
  },
  {
    id: 'ceiba-sagrada-ancestral',
    title: 'Ceiba Sagrada Ancestral',
    description: 'Árbol de ceiba estilizado que conecta el mundo terrenal con el espiritual, según la cosmovisión indígena venezolana. Las raíces se extienden hacia abajo mientras las ramas alcanzan el cielo, simbolizando la conexión con los ancestros.',
    category: 'blackwork',
    imageUrl: '/images/portfolio/ceiba-sagrada-ancestral.jpg',
    imageAlt: 'Tatuaje de árbol ceiba con simbolismo espiritual indígena',
    tags: ['blackwork', 'ceiba', 'espiritual', 'indígena', 'ancestros', 'árbol sagrado', 'venezuela'],
    featured: false,
    createdAt: new Date('2023-09-14'),
    dimensions: { width: 28, height: 40 },
    location: 'espalda',
    duration: '14 horas',
    client: {
      age: 27,
      consent: true
    },
    process: {
      sessions: 4,
      totalHours: 20,
      healingTime: '6-7 semanas'
    }
  },
  {
    id: 'retrato-abuela-memorias',
    title: 'Retrato de la Abuela - Memorias Eternas',
    description: 'Retrato hiperrealista de la abuela del cliente, capturando no solo sus rasgos físicos sino también la calidez de su mirada. Incluye elementos sutiles como sus manos tejiendo, actividad que la caracterizaba y que ahora vive para siempre en la piel.',
    category: 'realismo',
    imageUrl: '/images/portfolio/retrato-abuela-memorias.jpg',
    imageAlt: 'Tatuaje realista retrato de abuela con elementos emotivos',
    tags: ['realismo', 'retrato', 'abuela', 'memoria', 'familia', 'emotivo', 'hiperrealista'],
    featured: true,
    createdAt: new Date('2023-08-30'),
    dimensions: { width: 20, height: 25 },
    location: 'brazo',
    duration: '8 horas',
    client: {
      name: 'Carlos',
      age: 35,
      consent: true
    },
    process: {
      sessions: 3,
      totalHours: 12,
      healingTime: '4 semanas'
    }
  },
  {
    id: 'lotos-koi-equilibrio',
    title: 'Koi y Lotos - Equilibrio Vital',
    description: 'Composición japonesa que representa el equilibrio entre fuerza y serenidad. Los peces koi nadan entre flores de loto en un estilo que honra el sumi-e tradicional pero con técnicas de sombreado modernas que dan profundidad tridimensional.',
    category: 'realismo',
    imageUrl: '/images/portfolio/lotos-koi-equilibrio.jpg',
    imageAlt: 'Tatuaje japonés de peces koi nadando entre flores de loto',
    tags: ['japonés', 'koi', 'loto', 'equilibrio', 'agua', 'sumi-e', 'serenidad'],
    featured: false,
    createdAt: new Date('2023-07-16'),
    dimensions: { width: 25, height: 30 },
    location: 'pierna',
    duration: '9 horas',
    client: {
      name: 'Kenji',
      age: 24,
      consent: true
    },
    process: {
      sessions: 3,
      totalHours: 14,
      healingTime: '4-5 semanas'
    }
  },
  {
    id: 'geometría-solar-chakras',
    title: 'Geometría Solar y Chakras',
    description: 'Diseño geométrico que incorpora el sol como centro energético, rodeado de patrones que representan los siete chakras. Cada forma geométrica fue calculada matemáticamente para crear armonía visual y equilibrio energético según el cliente.',
    category: 'geometrico',
    imageUrl: '/images/portfolio/geometria-solar-chakras.jpg',
    imageAlt: 'Tatuaje geométrico de sol con chakras y patrones sagrados',
    tags: ['geométrico', 'sol', 'chakras', 'energético', 'matemático', 'espiritual', 'armonía'],
    featured: false,
    createdAt: new Date('2023-06-08'),
    dimensions: { width: 22, height: 22 },
    location: 'espalda',
    duration: '7 horas',
    client: {
      name: 'Luna',
      age: 26,
      consent: true
    },
    process: {
      sessions: 2,
      totalHours: 9,
      healingTime: '3-4 semanas'
    }
  },
  {
    id: 'caligrafía-nombre-hija',
    title: 'Nombre de Hija en Caligrafía Personalizada',
    description: 'Lettering completamente personalizado del nombre "Sofía Valentina" en un estilo que combina elegancia clásica con modernidad. Incluye elementos ornamentales inspirados en la arquitectura colonial valenciana, creando una pieza única e irrepetible.',
    category: 'lettering',
    imageUrl: '/images/portfolio/caligrafia-nombre-hija.jpg',
    imageAlt: 'Tatuaje de lettering con nombre en caligrafía ornamentada',
    tags: ['lettering', 'caligrafía', 'nombre', 'hija', 'personalizado', 'ornamental', 'colonial'],
    featured: false,
    createdAt: new Date('2023-05-20'),
    dimensions: { width: 20, height: 6 },
    location: 'muneca',
    duration: '4 horas',
    client: {
      name: 'Patricia',
      age: 30,
      consent: true
    },
    process: {
      sessions: 2,
      totalHours: 6,
      healingTime: '2-3 semanas'
    }
  },
  {
    id: 'rosa-compass-viajero',
    title: 'Rosa de los Vientos del Viajero',
    description: 'Brújula ornamental que simboliza los viajes del alma y las aventuras vividas. Cada punto cardinal incorpora símbolos de países visitados por el cliente, mientras que el centro contiene coordenadas exactas de Valencia, su hogar del corazón.',
    category: 'blackwork',
    imageUrl: '/images/portfolio/rosa-compass-viajero.jpg',
    imageAlt: 'Tatuaje de rosa de los vientos ornamental con símbolos de viajes',
    tags: ['blackwork', 'brújula', 'viajes', 'aventura', 'ornamental', 'coordenadas', 'simbolismo'],
    featured: false,
    createdAt: new Date('2023-04-12'),
    dimensions: { width: 18, height: 18 },
    location: 'hombro',
    duration: '6 horas',
    client: {
      name: 'Miguel',
      age: 28,
      consent: true
    },
    process: {
      sessions: 2,
      totalHours: 8,
      healingTime: '3 semanas'
    }
  }
]

// Función para obtener items por categoría
export const getPortfolioByCategory = (category: string): PortfolioItem[] => {
  return portfolioData.filter(item => item.category === category)
}

// Función para obtener items destacados
export const getFeaturedPortfolio = (): PortfolioItem[] => {
  return portfolioData.filter(item => item.featured)
}

// Función para buscar por tags
export const getPortfolioByTag = (tag: string): PortfolioItem[] => {
  return portfolioData.filter(item => 
    item.tags.some(itemTag => 
      itemTag.toLowerCase().includes(tag.toLowerCase())
    )
  )
}
