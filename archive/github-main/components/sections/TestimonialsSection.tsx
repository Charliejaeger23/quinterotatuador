'use client'

import { testimonialsData } from '@/app/data/testimonials'
import { motion, useReducedMotion } from 'framer-motion'

export default function TestimonialsSection(){
  const prefersReduced = useReducedMotion()
  return (
    <section id="testimonios" className="section">
      <div className="container-custom">
        <motion.h2
          initial={prefersReduced?{opacity:0}:{opacity:0, y:12}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{duration:0.5}}
          className="font-cinzel text-3xl text-center mb-8"
        >
          Testimonios
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonialsData.slice(0,6).map(t => (
            <div key={t.id} className="card-min p-6">
              <div className="flex gap-1 mb-3" aria-label="5 estrellas">
                {Array.from({length:5}).map((_,i)=>(<span key={i}>★</span>))}
              </div>
              <p className="text-dim text-sm">{t.comment.length>160?`${t.comment.slice(0,157)}…`:t.comment}</p>
              <p className="text-mute text-xs mt-4">{t.name} — {t.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
