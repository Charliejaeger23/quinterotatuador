'use client'

import { motion } from 'framer-motion'
import { 
  Palette, 
  Users, 
  Award, 
  Shield,
  Heart,
  Zap,
  CheckCircle,
  Star,
  Clock,
  Camera
} from 'lucide-react'

const valueProps = [
  {
    icon: Palette,
    title: "100% Personalizado",
    subtitle: "Nunca repetimos diseños",
    description: "Cada tatuaje nace de tu historia personal. Creamos bocetos únicos adaptados a tu anatomía y significado.",
    features: ["Diseño exclusivo", "Adaptación anatómica", "Sin templates"],
    color: "from-blue-500 to-purple-600"
  },
  {
    icon: Shield,
    title: "Proceso Transparente", 
    subtitle: "Sin sorpresas, con garantías",
    description: "Contrato artístico claro, presupuesto fijo y seguimiento completo desde la consulta hasta la cicatrización.",
    features: ["Contrato artístico", "Presupuesto fijo", "Seguimiento 30 días"],
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: Award,
    title: "Calidad Premium",
    subtitle: "Materiales y técnicas de primer nivel", 
    description: "Espacio higiénico, materiales certificados y técnicas avanzadas de realismo simbólico y blackwork anatómico.",
    features: ["Materiales premium", "Espacio estéril", "Técnicas avanzadas"],
    color: "from-amber-500 to-orange-600"
  },
  {
    icon: Heart,
    title: "Experiencia Completa",
    subtitle: "Más que un tatuaje, una transformación",
    description: "Sesiones VIP, registro fotográfico profesional y aftercare personalizado para una experiencia memorable.",
    features: ["Sesión VIP", "Registro fotográfico", "Aftercare premium"],
    color: "from-rose-500 to-pink-600"
  }
]

const stats = [
  {
    number: "200+",
    label: "Tatuajes Únicos",
    description: "Cada uno con su historia"
  },
  {
    number: "95%", 
    label: "Clientes Satisfechos",
    description: "Superando expectativas"
  },
  {
    number: "5+",
    label: "Años de Experiencia", 
    description: "Perfeccionando el arte"
  },
  {
    number: "100%",
    label: "Seguimiento",
    description: "Acompañamiento completo"
  }
]

const testimonialHighlights = [
  {
    text: "No pensé que se pudiera arreglar, pero Carlos superó todas mis expectativas",
    author: "María V.",
    location: "Valencia"
  },
  {
    text: "El proceso fue transparente desde el inicio. Me sentí en las mejores manos",
    author: "Luis R.",
    location: "Puerto Cabello"
  },
  {
    text: "Mi tatuaje anterior no me representaba. Ahora llevo mi historia en la piel",
    author: "Ana C.",
    location: "Valencia"
  }
]

export default function ValueProposition() {
  return (
    <section id="value-proposition" className="section bg-gradient-to-br from-gray-50 via-gray-100/10 to-gray-50">
      <div className="container-custom">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            ¿Por qué elegir @quinterotatuador?
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            <span className="font-semibold text-black">
              "Aquí no repetimos diseños. Porque nadie repite tu historia."
            </span>
            <br />
            Descubre lo que nos hace diferentes en el mundo del tatuaje personalizado.
          </p>
        </motion.div>

        {/* Value Propositions Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 h-full">
                
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${prop.color} flex items-center justify-center mb-6`}>
                  <prop.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{prop.title}</h3>
                  <p className="text-sm font-semibold text-gray-600 mb-4">{prop.subtitle}</p>
                  <p className="text-secondary leading-relaxed mb-6">{prop.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-2">
                  {prop.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-secondary">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-black to-gray-800 rounded-3xl p-8 md:p-12 text-white mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Resultados que hablan por sí solos
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2 text-white">
                  {stat.number}
                </div>
                <div className="font-semibold mb-1 text-gray-200">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-primary mb-12">
            Lo que dicen nuestros clientes
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonialHighlights.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-start gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-secondary mb-4 italic">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary text-sm">{testimonial.author}</div>
                    <div className="text-xs text-secondary">{testimonial.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-br from-blue-50 to-gray-50 rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            ¿Listo para una experiencia diferente?
          </h3>
          <p className="text-secondary mb-8 max-w-2xl mx-auto">
            No somos un estudio más. Somos artistas comprometidos con transformar tu historia 
            en una obra de arte única que llevarás con orgullo para siempre.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#proceso"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-black text-white hover:bg-gray-800 h-11 px-8 py-3 transition-colors"
            >
              Conoce mi proceso
            </a>
            <a 
              href="#portafolio"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium border border-gray-300 bg-white hover:bg-gray-50 h-11 px-8 py-3 transition-colors"
            >
              Ver trabajos realizados
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}