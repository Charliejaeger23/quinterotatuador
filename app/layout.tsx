import type { Metadata } from 'next'
import { Cinzel, Poppins } from 'next/font/google'
import Script from 'next/script'
import { siteConfig } from '@/lib/config'
import { homeMetadata, getStructuredData } from '@/lib/metadata'
import './globals.css'
import WhatsAppFloat from '@/app/components/layout/WhatsAppFloat' // <- asegúrate de que exista

const cinzel = Cinzel({ subsets:['latin'], display:'swap', variable:'--font-cinzel', weight:['400','500','600','700'] })
const poppins = Poppins({ subsets:['latin'], display:'swap', variable:'--font-poppins', weight:['300','400','500','600','700'] })

export const metadata: Metadata = homeMetadata

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = getStructuredData()

  return (
    <html lang="es" className={`${cinzel.variable} ${poppins.variable}`}>
      <head>
        {structuredData.map((schema, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        ))}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#A51E24" />
        <meta name="msapplication-TileColor" content="#A51E24" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>

      <body className="font-poppins bg-ink-black text-ink-white antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-ink-red text-white px-4 py-2 rounded-lg z-50">
          Saltar al contenido principal
        </a>

        <div className="relative min-h-screen">
          <main id="main-content" className="relative z-10">
            {children}
          </main>
          <WhatsAppFloat /> {/* flotante, siempre visible */}
        </div>

        {siteConfig.analytics.googleAnalyticsId && (
          <>
            <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.analytics.googleAnalyticsId}`} />
            <Script id="google-analytics" strategy="afterInteractive" dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${siteConfig.analytics.googleAnalyticsId}', {
                  page_title: document.title,
                  page_location: window.location.href,
                });
              `,
            }}/>
          </>
        )}
      </body>
    </html>
  )
}
