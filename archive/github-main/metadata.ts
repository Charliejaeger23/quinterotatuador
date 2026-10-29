import type { Metadata } from 'next'
import { siteConfig } from './config'

interface GenerateMetadataProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  noIndex?: boolean
}

export function generateMetadata({
  title = siteConfig.title,
  description = siteConfig.description,
  keywords = siteConfig.seo.keywords,
  image = '/images/og-image.jpg',
  url = siteConfig.url,
  noIndex = false
}: GenerateMetadataProps = {}): Metadata {
  
  const fullTitle = title === siteConfig.title ? title : `${title} | ${siteConfig.name}`
  const fullUrl = url.startsWith('http') ? url : `${siteConfig.url}${url}`
  const imageUrl = image.startsWith('http') ? image : `${siteConfig.url}${image}`
  
  // Ensure keywords is always an array
  const keywordsArray = Array.isArray(keywords) ? keywords : []
  
  return {
    title: fullTitle,
    description,
    keywords: keywordsArray.length > 0 ? keywordsArray.join(', ') : undefined,

    // Robots
    robots: noIndex ? 'noindex,nofollow' : 'index,follow',

    // Open Graph
    openGraph: {
      type: 'website',
      title: fullTitle,
      description,
      url: fullUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: 'es_VE',
    },

    // Twitter
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [imageUrl],
      creator: '@quinterotatuador',
    },

    // Additional meta tags
    alternates: {
      canonical: fullUrl,
    },

    // Verification
    verification: {
      google: 'your-google-verification-code', // Replace with actual code
    },
  }
}

// Default metadata for the site
export const defaultMetadata = generateMetadata()

// Home page specific metadata
export const homeMetadata = generateMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.seo.keywords
})

// Structured data for SEO
export function getStructuredData() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": siteConfig.business.name,
      "description": siteConfig.description,
      "url": siteConfig.url,
      "telephone": `+${siteConfig.business.whatsapp}`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Valencia",
        "addressRegion": "Carabobo",
        "addressCountry": "VE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "10.162",
        "longitude": "-68.003"
      },
      "openingHours": "Mo-Sa 09:00-18:00",
      "serviceType": "Tatuajes personalizados",
      "areaServed": [
        {
          "@type": "City",
          "name": "Valencia"
        },
        {
          "@type": "City", 
          "name": "Puerto Cabello"
        }
      ],
      "sameAs": [
        `https://instagram.com/${siteConfig.business.instagram}`,
        `https://facebook.com/${siteConfig.business.facebook}`
      ]
    }
  ]
}