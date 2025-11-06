import { PortfolioItem } from '@/app/types/global'

export const portfolioData: PortfolioItem[] = [
  {
    id: 'leon-rosa-valor',
    title: 'León y Rosa del Valor',
    description: 'Retrato realista de león rugiendo con una rosa detallada. Simboliza coraje, liderazgo y el amor como motor de vida.',
    category: 'realismo',
    imageUrl: '/images/portfolio/leon-rosa-valor.jpg',
    imageAlt: 'Tatuaje realista de león rugiendo con una rosa en el brazo',
    tags: ['realismo', 'animales', 'floral', 'black&grey', 'brazo', 'detallado', 'fuerza', 'amor'],
    featured: true,
    createdAt: new Date('2024-06-10'),
    dimensions: { width: 18, height: 32 },
    location: 'brazo',
    client: { name: 'M.', age: 29, consent: true },
    process: { sessions: 2, totalHours: 10, healingTime: '3-5 semanas' }
  },
  {
    id: 'oso-girasol-loto',
    title: 'Oso con Girasol y Loto',
    description: 'Oso en actitud protectora acompañado de loto (pureza) y girasol (lealtad). Contraste entre carácter y calma interior.',
    category: 'realismo',
    imageUrl: '/images/portfolio/oso-girasol-loto.jpg',
    imageAlt: 'Tatuaje realista de oso con flor de loto y girasol en el brazo',
    tags: ['realismo', 'animales', 'botánico', 'black&grey', 'brazo', 'simbolismo'],
    featured: false,
    createdAt: new Date('2024-07-02'),
    dimensions: { width: 12, height: 30 },
    location: 'brazo',
    client: { name: 'J.', age: 31, consent: true },
    process: { sessions: 2, totalHours: 8, healingTime: '3-5 semanas' }
  },
  {
    id: 'reina-aves-peonias',
    title: 'Reina, Aves y Peonías',
    description: 'Perfil femenino coronado con flores y tres aves que representan guía, familia y esperanza. Peonías como símbolo de belleza perdurable.',
    category: 'realismo',
    imageUrl: '/images/portfolio/reina-aves-peonias.jpg',
    imageAlt: 'Tatuaje realista de mujer coronada con flores y aves',
    tags: ['realismo', 'floral', 'retrato', 'black&grey', 'brazo', 'peonías', 'aves'],
    featured: true,
    createdAt: new Date('2024-05-18'),
    dimensions: { width: 16, height: 30 },
    location: 'brazo',
    client: { name: 'A.', age: 27, consent: true },
    process: { sessions: 2, totalHours: 9, healingTime: '3-5 semanas' }
  },
  {
    id: 'mes-amis-emblema',
    title: 'Emblema MES AMIS',
    description: 'Diseño gráfico en blackwork con dotwork y emblema “MES AMIS”. Estética de escudo urbano con rayos y geometría.',
    category: 'blackwork',
    imageUrl: '/images/portfolio/mes-amis-emblema.jpg',
    imageAlt: 'Tatuaje blackwork con emblema y rayos, texto MES AMIS',
    tags: ['blackwork', 'dotwork', 'geométrico', 'tipografía', 'brazo'],
    featured: false,
    createdAt: new Date('2024-04-22'),
    dimensions: { width: 13, height: 26 },
    location: 'brazo',
    client: { name: 'R.', age: 25, consent: true },
    process: { sessions: 1, totalHours: 5, healingTime: '3-4 semanas' }
  },
  {
    id: 'linea-vida-simbolos-conceptual',
    title: 'Línea de Vida Simbólica',
    description: 'Composición vertical de microelementos: árbol, balance, cerebro, viaje astral, corazón, llave antigua, sólidos geométricos, golondrina y montañas.',
    category: 'lineart',
    imageUrl: '/images/portfolio/linea-vida-simbolosonceptual.jpg',
    imageAlt: 'Tatuaje lineart con múltiples símbolos en línea vertical',
    tags: ['lineart', 'simbolismo', 'geométrico', 'minimalista', 'brazo', 'mano'],
    featured: false,
    createdAt: new Date('2024-08-03'),
    dimensions: { width: 6, height: 42 },
    location: 'brazo',
    client: { name: 'E.', age: 33, consent: true },
    process: { sessions: 1, totalHours: 4, healingTime: '2-4 semanas' }
  },
  {
    id: 'girasoles-mariposas-mariquita',
    title: 'Girasoles, Mariposas y Mariquita',
    description: 'Composición botánica con girasoles y mariposas. La mariquita roja simboliza fortuna y nuevos comienzos.',
    category: 'realismo',
    imageUrl: '/images/portfolio/girasoles-mariposas-mariquita.jpg',
    imageAlt: 'Tatuaje floral con girasoles, mariposas y una mariquita',
    tags: ['realismo', 'botánico', 'floral', 'black&grey', 'detalle-color', 'brazo'],
    featured: true,
    createdAt: new Date('2024-09-12'),
    dimensions: { width: 12, height: 32 },
    location: 'brazo',
    client: { name: 'C.', age: 24, consent: true },
    process: { sessions: 2, totalHours: 7, healingTime: '3-5 semanas' }
  },
  {
    id: 'diente-leon-aves',
    title: 'Diente de León y Aves',
    description: 'Soplo de diente de león que se transforma en aves. Pieza delicada que evoca libertad, memoria y deseos cumplidos.',
    category: 'realismo',
    imageUrl: '/images/portfolio/diente-leon-aves.jpg',
    imageAlt: 'Tatuaje delicado de diente de león con aves en el costado',
    tags: ['realismo', 'lineart', 'minimalista', 'costado', 'black&grey', 'aves'],
    featured: false,
    createdAt: new Date('2024-03-28'),
    dimensions: { width: 12, height: 14 },
    location: 'otro',
    client: { name: 'G.A.', age: 26, consent: true },
    process: { sessions: 1, totalHours: 3, healingTime: '2-4 semanas' }
  },
  {
    id: 'tobby-retrato',
    title: 'Tobby – Retrato Canino',
    description: 'Retrato realista de Tobby con pañuelo. Homenaje afectivo a un compañero de vida leal.',
    category: 'realismo',
    imageUrl: '/images/portfolio/tobby-retrato.jpg',
    imageAlt: 'Tatuaje realista de perro con lettering Tobby',
    tags: ['realismo', 'mascotas', 'lettering', 'pierna', 'black&grey'],
    featured: false,
    createdAt: new Date('2024-02-17'),
    dimensions: { width: 12, height: 28 },
    location: 'pierna',
    client: { name: 'D.', age: 30, consent: true },
    process: { sessions: 1, totalHours: 6, healingTime: '3-5 semanas' }
  },
  {
    id: 'rosas-muslo-composicion',
    title: 'Rosas en Muslo – Composición',
    description: 'Ramillete de rosas con hojas y flores pequeñas. Flujo orgánico que estiliza la silueta.',
    category: 'realismo',
    imageUrl: '/images/portfolio/rosas-muslo-composicion.jpg',
    imageAlt: 'Tatuaje de rosas en muslo con composición orgánica',
    tags: ['realismo', 'floral', 'botánico', 'pierna', 'black&grey'],
    featured: false,
    createdAt: new Date('2024-10-05'),
    dimensions: { width: 22, height: 40 },
    location: 'pierna',
    client: { name: 'N.', age: 28, consent: true },
    process: { sessions: 2, totalHours: 8, healingTime: '3-5 semanas' }
  },
  {
    id: 'lobo-guardian',
    title: 'Lobo Guardián',
    description: 'Retrato de lobo con gesto protector. Pieza intensa que representa intuición, familia y valentía.',
    category: 'realismo',
    imageUrl: '/images/portfolio/lobo-guardian.jpg',
    imageAlt: 'Tatuaje realista de lobo con expresión feroz en el brazo',
    tags: ['realismo', 'animales', 'brazo', 'black&grey', 'sombras profundas'],
    featured: true,
    createdAt: new Date('2024-07-21'),
    dimensions: { width: 11, height: 28 },
    location: 'brazo',
    client: { name: 'L.', age: 32, consent: true },
    process: { sessions: 1, totalHours: 6, healingTime: '3-5 semanas' }
  },
  {
    id: 'ascenso-interior-montana-loto',
    title: 'Ascenso Interior – Montaña y Loto',
    description: 'Paisaje simbólico con montaña, cueva y figura en tránsito sobre un loto. Representa elevación espiritual y renacimiento.',
    category: 'realismo',
    imageUrl: '/images/portfolio/ascenso-interior-montana-loto.jpg',
    imageAlt: 'Tatuaje realista con montaña, cueva luminosa y flor de loto en el brazo',
    tags: ['realismo', 'simbolismo', 'paisaje', 'botánico', 'black&grey', 'brazo'],
    featured: false,
    createdAt: new Date('2024-08-09'),
    dimensions: { width: 12, height: 24 },
    location: 'brazo',
    duration: '6 horas',
    client: { name: 'J.', age: 31, consent: true },
    process: { sessions: 1, totalHours: 6, healingTime: '3-5 semanas' }
  },
  {
    id: 'zorro-sakura-neotrad',
    title: 'Zorro y Sakura',
    description: 'Zorro estilizado en marco ornamental con flores de sakura. Pieza elegante que evoca astucia, protección y buenos presagios.',
    category: 'realismo',
    imageUrl: '/images/portfolio/zorro-sakura-neotrad.jpg',
    imageAlt: 'Tatuaje a color de zorro con flores de sakura en el brazo',
    tags: ['color', 'zorro', 'sakura', 'ornamental', 'neotrad', 'brazo'],
    featured: true,
    createdAt: new Date('2024-09-18'),
    dimensions: { width: 9, height: 18 },
    location: 'brazo',
    duration: '5 horas',
    client: { name: 'K.', age: 26, consent: true },
    process: { sessions: 1, totalHours: 5, healingTime: '3-4 semanas' }
  }
]

export const getPortfolioByCategory = (category: string): PortfolioItem[] => {
  return portfolioData.filter(item => item.category === category)
}

export const getFeaturedPortfolio = (): PortfolioItem[] => {
  return portfolioData.filter(item => item.featured)
}

export const getPortfolioByTag = (tag: string): PortfolioItem[] => {
  return portfolioData.filter(item =>
    item.tags.some(itemTag =>
      itemTag.toLowerCase().includes(tag.toLowerCase())
    )
  )
}

