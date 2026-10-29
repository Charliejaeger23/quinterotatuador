'use client'

import { useState, useMemo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { portfolioData } from '@/app/data/portfolio'

const toTitle = (s: string) => s.split(/[-_\s]+/).map(w=> w? w[0].toUpperCase()+w.slice(1): w).join(' ')

export default function PortfolioSection(){
  const prefersReduced = useReducedMotion()
  const categoryIds = useMemo(() => Array.from(new Set(portfolioData.map(i=>i.category))), [])
  const filters = useMemo(() => [{ id: 'todos', label: 'Todos' }, ...categoryIds.map(id => ({ id, label: toTitle(id) }))], [categoryIds])
  const [filter,setFilter] = useState<string>('todos')
  const items = useMemo(()=>{
    if(filter==='todos') return portfolioData
    const key = filter
    return portfolioData.filter(it=>it.category===key || it.tags.map(t=>t.toLowerCase()).includes(key))
  },[filter])

  return (
    <section id="portfolio" className="section">
      <div className="container-custom">
        <motion.h2
          initial={prefersReduced?{opacity:0}:{opacity:0, y:12}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{duration:0.5}}
          className="font-cinzel text-3xl text-center mb-8"
        >
          Portafolio
        </motion.h2>
        <div className="flex gap-3 mb-6 justify-center">
          {filters.map(f=> (
            <button
              key={f.id}
              onClick={()=>setFilter(f.id)}
              className={`px-3 py-1 border border-white/10 rounded-full text-sm hover:bg-white/10 ${filter===f.id?'bg-white/10':''}`}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map(it=> (
            <figure key={it.id} className="group relative overflow-hidden rounded-xl">
              <img src={it.imageUrl} alt={it.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
              <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition">
                <p className="font-medium">{it.title}</p>
                <p className="text-mute text-xs mt-1">{it.tags.slice(0,2).join(' • ')}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
