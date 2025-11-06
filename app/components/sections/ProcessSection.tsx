'use client'

import { motion, useReducedMotion } from 'framer-motion'

export default function ProcessSection(){
  const prefersReduced = useReducedMotion()
  const steps = [
    {t:'Consulta', d:'30–45 min · $30 USD (descontable)'},
    {t:'Diseño Anatómico', d:'Boceto único · 3–7 días'},
    {t:'Sesión VIP', d:'2–8 h · técnicas avanzadas'},
    {t:'Aftercare', d:'Seguimiento 30 días'},
  ]
  return (
    <section id="proceso" className="section">
      <div className="container-custom">
        <motion.h2
          initial={prefersReduced?{opacity:0}:{opacity:0, y:12}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{duration:0.5}}
          className="font-cinzel text-3xl text-center mb-8"
        >
          Proceso
        </motion.h2>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map(s => (
            <div key={s.t} className="card-min p-6">
              <h4 className="font-cinzel text-lg">{s.t}</h4>
              <p className="text-mute text-sm mt-2">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
