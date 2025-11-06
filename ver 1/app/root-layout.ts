import type { Metadata } from 'next'
import { Cinzel, Poppins } from 'next/font/google'
import './globals.css'
import { WhatsAppFloat } from './components/layout/WhatsAppFloat'
import { CTASidebar } from './components/layout/CTASidebar'

const cinzel = Cinzel({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cinzel',
  weight: ['400', '700'],
})

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'Quinterotatuador - Tatuajes Únicos en Valencia, Venezuela',
    template: '%s | Quinterotatuador',
  },
  description: 'Carlos Quintero, tatuador profesional en Valencia, Venezuela. Diseños únicos, realismo, blackwork, arte japonés. Aquí no repetimos diseños porque nadie repite tu historia.',
  keywords: [
    'tatuador valencia venezuela',
    'tatuajes personalizados',
    'blackwork valencia',
    'realismo tatuajes',
    'arte japonés irezumi',
    'carlos quintero tatuador',
    'tatuajes con significado',
    'estudio tatuajes valencia',
    'quinterotatuador',
  ],
  authors: [{ name: 'Carlos Quintero', url: 'https://quinterotatuador.com' }],
  creator: 'Carlos Quintero',
  openGraph: {
    type: 'website',
    locale: 'es_VE',
    url: 'https://quinterotatuador.com',
    siteName: 'Quinterotatuador',
    title: 'Quinterotatuador - Tatuajes Únicos en Valencia, Venezuela',
    description: 'Aquí no repetimos diseños. Porque nadie repite tu historia. Tatuador profesional especializado en realismo, blackwork y arte japonés.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Quinterotatuador - Carlos Quintero Tatuador Profesional',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quinterotatuador - Tatuajes Únicos',
    description: 'Aquí no repetimos diseños. Porque nadie repite tu historia.',
    images: ['/images/twitter-image.jpg'],
    creator: '@quinterotatuador',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://quinterotatuador.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#A51E24" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${cinzel.variable} ${poppins.variable} font-poppins antialiased bg-paper-0 text-ink-1000`}>
        {children}
        <WhatsAppFloat />
        <CTASidebar />
        
        {/* Analytics Scripts */}
        {process.env.NODE_ENV === 'production' && (
          <>
            {/* Google Analytics */}
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_title: document.title,
                    page_location: window.location.href,
                  });
                `,
              }}
            />
            
            {/* Facebook Pixel */}
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', '${process.env.NEXT_PUBLIC_FB_PIXEL_ID}');
                  fbq('track', 'PageView');
                `,
              }}
            />
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: 'none' }}
                src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FB_PIXEL_ID}&ev=PageView&noscript=1`}
              />
            </noscript>
          </>
        )}
      </body>
    </html>
  )
}