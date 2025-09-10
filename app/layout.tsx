import type { Metadata } from 'next'
import { Cinzel, Poppins } from 'next/font/google'
import Script from 'next/script'
import { siteConfig } from '@/lib/config'
import { homeMetadata, getStructuredData } from '@/lib/metadata'
import WhatsAppFloat from '@/app/components/layout/WhatsAppFloat'
import CTASidebar from '@/app/components/layout/CTASidebar'
import './globals.css'

const cinzel = Cinzel({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cinzel',
  weight: ['400', '500', '600', '700']
})

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = homeMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = getStructuredData()

  return (
    <html lang="es" className={`${cinzel.variable} ${poppins.variable}`}>
      <head>
        {/* Structured Data */}
        {structuredData.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema)
            }}
          />
        ))}
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#A51E24" />
        <meta name="msapplication-TileColor" content="#A51E24" />
        
        {/* Viewport Configuration */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      
      <body className="font-poppins bg-ink-black text-ink-white antialiased">
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-lg z-50"
        >
          Saltar al contenido principal
        </a>
        
        {/* Main Content */}
        <div className="relative min-h-screen">
          <main id="main-content" className="relative z-10">
            {children}
          </main>
          
          {/* WhatsApp Float Button */}
          <WhatsAppFloat />
          
          {/* CTA Sidebar */}
          <CTASidebar />
        </div>
        
        {/* Analytics Scripts */}
        {siteConfig.analytics.googleAnalyticsId && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.analytics.googleAnalyticsId}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${siteConfig.analytics.googleAnalyticsId}', {
                    page_title: document.title,
                    page_location: window.location.href,
                  });
                `,
              }}
            />
          </>
        )}
        
        {siteConfig.analytics.googleTagManagerId && (
          <>
            <Script
              id="google-tag-manager"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','${siteConfig.analytics.googleTagManagerId}');
                `,
              }}
            />
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${siteConfig.analytics.googleTagManagerId}`}
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
              />
            </noscript>
          </>
        )}
        
        {/* Facebook Pixel */}
        {siteConfig.analytics.facebookAppId && (
          <Script
            id="facebook-pixel"
            strategy="afterInteractive"
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
                fbq('init', '${siteConfig.analytics.facebookAppId}');
                fbq('track', 'PageView');
              `,
            }}
          />
        )}
        
        {/* Performance and Error Monitoring */}
        <Script
          id="performance-monitor"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Monitor Core Web Vitals
              function sendWebVitals({name, value, id}) {
                if (typeof gtag !== 'undefined') {
                  gtag('event', name, {
                    event_category: 'Web Vitals',
                    value: Math.round(name === 'CLS' ? value * 1000 : value),
                    event_label: id,
                    non_interaction: true,
                  });
                }
              }
              
              // Error tracking
              window.addEventListener('error', function(e) {
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'exception', {
                    description: e.message,
                    fatal: false
                  });
                }
              });
              
              window.addEventListener('unhandledrejection', function(e) {
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'exception', {
                    description: e.reason,
                    fatal: false
                  });
                }
              });
            `,
          }}
        />
      </body>
    </html>
  )
}