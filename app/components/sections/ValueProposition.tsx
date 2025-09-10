'use client'

import { motion, useReducedMotion } from 'framer-motion'

export default function ValueProposition(){
  const prefersReduced = useReducedMotion()
  const items = [
    {t:'100% Personalizado', d:'Nunca repetimos diseños'},
    {t:'Proceso Transparente', d:'Contrato y seguimiento'},
    {t:'Calidad Premium', d:'Técnicas avanzadas'},
    {t:'Sin Prisa', d:'Tiempo que requiera'},
  ]
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
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map(i=> (
            <li key={i.t} className="card-quiet p-5">
              <p className="font-semibold">{i.t}</p>
              <p className="text-mute text-sm mt-1">{i.d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
