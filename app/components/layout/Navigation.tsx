'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const items = [
  {name:'Inicio', href:'#hero'},
  {name:'Portafolio', href:'#portfolio'},
  {name:'Proceso', href:'#proceso'},
  {name:'Testimonios', href:'#testimonios'},
  {name:'Contacto', href:'#contacto'},
]

export default function Navigation(){
  const [open,setOpen]=useState(false)
  return (
    <nav className="fixed top-0 w-full z-50 bg-ink-black text-white">
      <div className="container-custom flex items-center justify-between py-4">
        <Link href="/" className="font-cinzel text-xl">Quintero<span className="text-ink-red">Tatuador</span></Link>
        <button className="lg:hidden" onClick={()=>setOpen(!open)} aria-label="Menú">
          {open?<X/>:<Menu/>}
        </button>
        <ul className="hidden lg:flex gap-6">
          {items.map(i=> (
            <li key={i.name}>
              <a
                href={i.href}
                className="hover:text-ink-red text-sm focus:outline-none focus:ring-2 focus:ring-ink-red focus:ring-offset-2 focus:ring-offset-ink-black"
                data-cta={i.name==='Contacto'? 'nav-contacto': undefined}
                aria-label={i.name==='Contacto'? 'Ir a contacto': undefined}
                onClick={i.name==='Contacto'? e=>{e.preventDefault();document.querySelector('#contacto')?.scrollIntoView({behavior:'smooth'})}:undefined}
              >
                {i.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {open && (
        <ul className="lg:hidden bg-ink-dark px-4 pb-4 space-y-2">
          {items.map(i=> (
            <li key={i.name}>
              <a
                href={i.href}
                className="block py-2 focus:outline-none focus:ring-2 focus:ring-ink-red focus:ring-offset-2 focus:ring-offset-ink-dark"
                data-cta={i.name==='Contacto'? 'nav-contacto': undefined}
                aria-label={i.name==='Contacto'? 'Ir a contacto': undefined}
                onClick={e=>{setOpen(false);if(i.name==='Contacto'){e.preventDefault();document.querySelector('#contacto')?.scrollIntoView({behavior:'smooth'})}}}
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
