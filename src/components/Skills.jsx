import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Zap, Atom, Server, Database, Palette, Smartphone, Wrench } from 'lucide-react'

const services = [
  { name: 'Business Website', desc: 'Professional site for your brand', icon: Server },
  { name: 'Landing Page', desc: 'High-converting one page site', icon: Zap },
  { name: 'Portfolio Website', desc: 'Showcase your work', icon: Palette },
  { name: 'Website Redesign', desc: 'Modernize your old site', icon: Wrench },
  { name: 'SEO Setup', desc: 'Get found on Google', icon: Atom },
  { name: 'Mobile Optimization', desc: 'Perfect look on phones', icon: Smartphone },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-24 px-6 bg-bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">What You Get</h2>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-4" />
          <p className="text-text-secondary">Everything you need to grow online</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="spotlight-card group p-8 rounded-2xl bg-surface border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
                e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
              }}
            >
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <service.icon size={26} />
                </div>
                <h3 className="font-medium text-text-primary mb-2 text-lg">{service.name}</h3>
                <p className="text-text-secondary text-sm">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

