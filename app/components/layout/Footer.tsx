'use client'

import { siteConfig } from '@/lib/config'

export default function Footer(){
  const year = new Date().getFullYear()
  return (
    <footer className="bg-ink-dark text-ink-white">
      <div className="container-custom grid md:grid-cols-2 gap-8 py-10">
        <div>
          <h4 className="font-cinzel text-lg mb-2">Contacto</h4>
          <p className="text-sm text-dim">{siteConfig.business.address}</p>
          <p className="text-sm mt-2"><a href={`tel:${siteConfig.business.whatsapp}`} className="hover:text-ink-red">{siteConfig.business.whatsapp}</a></p>
          <p className="text-sm"><a href={`mailto:${siteConfig.business.email}`} className="hover:text-ink-red">{siteConfig.business.email}</a></p>
        </div>
        <div>
          <h4 className="font-cinzel text-lg mb-2">Redes</h4>
          <div className="flex gap-4">
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-ink-red">Instagram</a>
            <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-ink-red">Facebook</a>
          </div>
        </div>
      </div>
      <p className="text-center text-xs text-mute pb-6">© {year} {siteConfig.business.name}</p>
    </footer>
  )
}
