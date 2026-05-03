import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe, Zap, Palette, RefreshCw, Smartphone, Search } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Business Website',
    desc: 'Professional presence for your shop or clinic',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Zap,
    title: 'Landing Page',
    desc: 'Convert visitors into customers',
    color: 'from-amber-500 to-orange-500'
  },
  {
    icon: Palette,
    title: 'Portfolio Website',
    desc: 'Showcase your work beautifully',
    color: 'from-violet-500 to-purple-500'
  },
  {
    icon: RefreshCw,
    title: 'Website Redesign',
    desc: 'Modern look for outdated websites',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile Optimization',
    desc: 'Works perfect on all phones',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: Search,
    title: 'SEO Basics',
    desc: 'Get found on Google search',
    color: 'from-indigo-500 to-blue-500'
  }
]

const phone = '918305995654'

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const handleWhatsApp = (service) => {
    window.open(`https://wa.me/${phone}?text=Hi, I want a ${service}`, '_blank')
  }

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text--center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">
            What You Get
          </h2>
          <div className="w-12 h-1 bg-primary rounded--full mx-auto mb-4" />
          <p className="text-text-secondary max-w-2xl mx-auto">
            Everything you need to grow your business online
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-6 rounded-2xl bg-elevation border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={() => handleWhatsApp(service.title)}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <service.icon size={24} className="text-white" />
              </div>
              <h3 className="font-display text-lg font-semibold text-text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-text-foreground/70 text-sm leading-relaxed mb-4">
                {service.desc}
              </p>
              <button className="text-primary text-sm font-medium hover:underline">
                Get Started →
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center py-8 px-6 bg-elevation/50 rounded-2xl border border-border"
        >
          <p className="text-text-foreground text-lg font-medium">
            ⚡ Live in 3-5 days | 💰 Starting ₹4,999 | 📚 Beginner-friendly support
          </p>
        </motion.div>
      </div>
    </section>
  )
}
