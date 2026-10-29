'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { PenTool, ShieldCheck, Coffee, Eye } from 'lucide-react'

export default function ValueProposition(){
  const prefersReduced = useReducedMotion()
  const items = [
    { t: 'Calidad Premium', d: 'Técnicas avanzadas', Icon: ShieldCheck },
    { t: '100% Personalizado', d: 'Nunca repetimos diseños', Icon: PenTool },
    { t: 'Sin Prisa', d: 'Tiempo que requiera', Icon: Coffee },
    { t: 'Proceso Transparente', d: 'Contrato y seguimiento', Icon: Eye },
  ] as const
  return (
    <section id="why" className="section">
      <div className="container-custom text-center">
        <motion.h2
          initial={prefersReduced?{opacity:0}:{opacity:0, y:12}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{duration:0.5}}
          className="font-cinzel text-3xl mb-8"
        >
          ¿Por qué elegir @quinterotatuador?
        </motion.h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {items.map(({ t, d, Icon })=> (
            <li
              key={t}
              tabIndex={0}
              className="group card-quiet p-4 md:p-5 rounded-xl border border-white/10 transition-colors transition-transform duration-200 hover:bg-white/5 hover:border-white/20 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:bg-white/10 focus-visible:border-white/30 focus-visible:-translate-y-0.5 focus-visible:shadow-md"
            >
              <Icon
                aria-hidden
                className="w-7 h-7 md:w-8 md:h-8 mx-auto mb-3 text-white/80 transition-transform transition-colors duration-200 ease-out group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:text-white group-focus-visible:scale-110 group-focus-visible:-translate-y-0.5 group-focus-visible:text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]"
              />
              <p className="font-semibold">{t}</p>
              <p className="text-mute text-sm mt-1">{d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
