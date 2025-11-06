'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const items = [
  { name: 'Inicio', href: '#hero' },
  { name: 'Proceso', href: '#proceso' },
  { name: 'Portafolio', href: '#portfolio' },
  { name: 'Testimonios', href: '#testimonios' },
  { name: 'Contacto', href: '#contacto' },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)

  const onClickItem = (i: {name: string, href: string}) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    // manejar Contacto con scroll suave
    if (i.name === 'Contacto') {
      e.preventDefault()
      document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })
    }
    setOpen(false)
  }

  return (
    <nav className="w-full bg-ink-black text-ink-white border-b border-white/10">
      <div className="container-custom h-16 flex items-center justify-between">
        <Link href="#hero" className="font-cinzel text-lg">Quinterotatuador</Link>

        {/* mobile toggle */}
        <button
          onClick={() => setOpen(p => !p)}
          aria-expanded={open}
          aria-label="Abrir menú"
          className="lg:hidden p-2 rounded-md hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-ink-red"
        >
          {open ? <X/> : <Menu/>}
        </button>

        {/* desktop */}
        <ul className="hidden lg:flex gap-6">
          {items.map(i => (
            <li key={i.name}>
              <a
                href={i.href}
                onClick={onClickItem(i)}
                className="hover:text-ink-red text-sm focus:outline-none focus:ring-2 focus:ring-ink-red focus:ring-offset-2 focus:ring-offset-ink-black rounded"
                data-cta={i.name === 'Contacto' ? 'nav-contacto' : undefined}
                aria-label={i.name === 'Contacto' ? 'Ir a contacto' : undefined}
              >
                {i.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* mobile drawer */}
      {open && (
        <ul className="lg:hidden bg-ink-dark px-4 pb-4 space-y-2 border-t border-white/10">
          {items.map(i => (
            <li key={i.name}>
              <a
                href={i.href}
                onClick={onClickItem(i)}
                className="block py-2 rounded hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-ink-red focus:ring-offset-2 focus:ring-offset-ink-dark"
                data-cta={i.name === 'Contacto' ? 'nav-contacto' : undefined}
                aria-label={i.name === 'Contacto' ? 'Ir a contacto' : undefined}
              >
                {i.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
