import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url
  const currentDate = new Date()
  
  // Static pages with their update frequencies and priorities
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/servicios`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/proceso`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/testimonios`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/acerca`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.4,
    },
    {
      url: `${baseUrl}/cuidados`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/politica-privacidad`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.2,
    },
    {
      url: `${baseUrl}/terminos-servicio`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.2,
    }
  ]

  // Portfolio category pages
  const portfolioCategories = [
    'blackwork',
    'realismo', 
    'tradicional',
    'geometrico',
    'lineart',
    'cover-up',
    'lettering',
    'portrait'
  ]

  const categoryPages = portfolioCategories.map(category => ({
    url: `${baseUrl}/portfolio/${category}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Service detail pages
  const servicePages = siteConfig.services.map(service => ({
    url: `${baseUrl}/servicios/${service.id}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const blogPages: { url: string; lastModified: Date; changeFrequency: 'weekly'; priority: number }[] = []

  // Combine all pages
  const allPages = [
    ...staticPages,
    ...categoryPages,
    ...servicePages,
    ...blogPages
  ]

  return allPages
}

// Generate robots.txt content
export function generateRobots(): string {
  const baseUrl = siteConfig.url
  
  return `User-agent: *
Allow: /

# Sitemap location
Sitemap: ${baseUrl}/sitemap.xml

# Crawl delay (optional, in seconds)
Crawl-delay: 1

# Specific directives for different bots
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# Block access to admin areas (if any in future)
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Block access to specific file types
Disallow: *.json$
Disallow: *.xml$
Disallow: *.txt$

# Allow important assets
Allow: /*.css$
Allow: /*.js$
Allow: /*.png$
Allow: /*.jpg$
Allow: /*.jpeg$
Allow: /*.gif$
Allow: /*.svg$
Allow: /*.webp$
Allow: /*.avif$`
}