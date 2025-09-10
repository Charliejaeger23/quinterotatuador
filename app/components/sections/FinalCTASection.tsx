'use client'

import { motion, useReducedMotion } from 'framer-motion'

export default function FinalCTASection(){
  const prefersReduced = useReducedMotion()

  return (
    <section id="contacto" className="section">
      <div className="container-custom max-w-xl">
        <motion.h2
          initial={prefersReduced?{opacity:0}:{opacity:0, y:12}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{duration:0.5}}
          className="font-cinzel text-3xl text-center mb-6"
        >
          ¿Listo para comenzar?
        </motion.h2>
        <motion.p
          initial={prefersReduced?{opacity:0}:{opacity:0, y:12}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{duration:0.5, delay:0.1}}
          className="text-dim text-center mb-8"
        >
          Envíame tu idea y la convertiremos en arte irrepetible.
        </motion.p>
        <form onSubmit={e=>e.preventDefault()} className="space-y-4">
          <input type="text" required aria-label="Nombre" placeholder="Nombre" className="w-full rounded-lg bg-ink-dark border border-white/10 px-4 py-3 text-sm text-white placeholder:text-mute focus:outline-none focus:ring-2 focus:ring-ink-red" />
          <input type="email" required aria-label="Correo" placeholder="Correo" className="w-full rounded-lg bg-ink-dark border border-white/10 px-4 py-3 text-sm text-white placeholder:text-mute focus:outline-none focus:ring-2 focus:ring-ink-red" />
          <textarea aria-label="Idea de tatuaje" placeholder="Idea de tatuaje" rows={4} className="w-full rounded-lg bg-ink-dark border border-white/10 px-4 py-3 text-sm text-white placeholder:text-mute focus:outline-none focus:ring-2 focus:ring-ink-red" />
          <button type="submit" aria-label="Enviar consulta" data-cta="final" className="w-full px-5 py-3 rounded-lg bg-ink-red text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-ink-dark">Enviar consulta</button>
        </form>
        <blockquote className="mt-12 text-center text-dim italic">
          <p>"Aquí no repetimos diseños. Porque nadie repite tu historia."</p>
          <cite className="block mt-4 not-italic text-mute">— Carlos Quintero</cite>
        </blockquote>
      </div>
    </section>
  )
}
