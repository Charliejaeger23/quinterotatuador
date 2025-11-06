'use client'

import { motion } from 'framer-motion'
import { 
  MessageCircle, 
  Palette, 
  Zap, 
  Heart,
  CheckCircle,
  ArrowRight,
  Clock,
  Star,
  Shield
} from 'lucide-react'
// Simple Button component inline
const Button = ({ children, className = '', variant = 'default', size = 'default', asChild = false, ...props }: any) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50"
  const variants = {
    default: "bg-black text-white hover:bg-gray-800",
    outline: "border border-white bg-transparent hover:bg-white hover:text-black"
  }
  const sizes = {
    default: "h-10 px-4 py-2",
    lg: "h-11 px-8 py-3"
  }
  
  const variantClass = variants[variant as keyof typeof variants] || variants.default
  const sizeClass = sizes[size as keyof typeof sizes] || sizes.default
  
  if (asChild && props.href) {
    return <a className={`${baseClasses} ${variantClass} ${sizeClass} ${className}`} {...props}>{children}</a>
  }
  
  return <button className={`${baseClasses} ${variantClass} ${sizeClass} ${className}`} {...props}>{children}</button>
}
import { siteConfig } from '@/lib/config'

const processSteps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Consulta Personalizada",
    description: "Conversamos sobre tu historia, ideas y visión. Esta consulta tiene un costo de $30 USD que se descuenta de tu tatuaje final.",
    details: ["Análisis de tu concepto", "Propuesta de adaptación anatómica", "Presupuesto detallado"],
    duration: "30-45 min",
    price: "$30 USD"
  },
  {
    icon: Palette,
    number: "02", 
    title: "Diseño Anatómico Exclusivo",
    description: "Creo un boceto único adaptado perfectamente a la zona de tu cuerpo, respetando la anatomía y tu historia personal.",
    details: ["Boceto personalizado", "Adaptación anatómica", "Revisiones incluidas"],
    duration: "3-7 días",
    price: "Incluido"
  },
  {
    icon: Zap,
    number: "03",
    title: "Sesión VIP de Tatuaje", 
    description: "En un ambiente higiénico y profesional, ejecutamos tu diseño con la máxima calidad. Documentamos el proceso.",
    details: ["Ambiente estéril", "Materiales premium", "Registro fotográfico"],
    duration: "2-8 horas",
    price: "Según diseño"
  },
  {
    icon: Heart,
    number: "04",
    title: "Aftercare Premium",
    description: "Seguimiento completo del proceso de cicatrización con guías personalizadas y check-ups de evolución.",
    details: ["Kit de cuidados", "Seguimiento 30 días", "Garantía de calidad"],
    duration: "30 días",
    price: "Incluido"
  }
]

const benefits = [
  {
    icon: CheckCircle,
    title: "100% Personalizado",
    description: "Nunca repetimos diseños. Cada pieza es única."
  },
  {
    icon: Shield,
    title: "Proceso Transparente", 
    description: "Contrato artístico con expectativas claras."
  },
  {
    icon: Star,
    title: "Calidad Premium",
    description: "Materiales de primera y técnicas avanzadas."
  },
  {
    icon: Clock,
    title: "Sin Prisa",
    description: "El tiempo necesario para lograr la excelencia."
  }
]

export default function ProcessSection() {
  const whatsappUrl = `https://wa.me/${siteConfig.business.whatsapp}?text=${encodeURIComponent('Hola Carlos! Me interesa conocer más sobre tu proceso de trabajo. ¿Podríamos agendar una consulta?')}`

  return (
    <section id="proceso" className="section bg-gradient-to-br from-gray-100/5 via-gray-50 to-blue-50/5">
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
            Mi Proceso Único
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Cada tatuaje sigue un proceso estructurado que garantiza resultados excepcionales 
            y una experiencia memorable desde la primera consulta.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-black to-gray-800 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-6 pt-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl flex items-center justify-center mb-4">
                    <step.icon className="w-8 h-8 text-black" />
                  </div>
                  
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-xl font-bold text-primary">{step.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-secondary">
                      <Clock className="w-4 h-4" />
                      {step.duration}
                    </div>
                  </div>
                  
                  <div className="text-sm font-semibold text-black mb-4">{step.price}</div>
                </div>

                {/* Description */}
                <p className="text-secondary mb-6 leading-relaxed">
                  {step.description}
                </p>

                {/* Details */}
                <ul className="space-y-2">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-secondary">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100 mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-primary mb-12">
            ¿Por qué elegir mi proceso?
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-black" />
                </div>
                <h4 className="font-bold text-primary mb-2">{benefit.title}</h4>
                <p className="text-sm text-secondary">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-black to-gray-800 rounded-3xl p-8 md:p-12 text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Listo para comenzar tu proceso?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            La consulta personalizada es el primer paso para transformar tu historia en arte. 
            Agenda ahora y descubre cómo podemos crear algo único para ti.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-100 group"
              asChild
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Agendar Consulta
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-black"
              asChild
            >
              <a href="#portafolio">
                Ver Trabajos Realizados
              </a>
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  )
}