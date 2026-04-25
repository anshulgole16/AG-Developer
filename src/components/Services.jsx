import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Building2, User, ShoppingCart, Newspaper, Rocket, Settings } from 'lucide-react'

const services = [
  { icon: Building2, title: 'Business Website', desc: 'Professional business websites that take your brand online — fast, mobile-friendly and SEO-ready.' },
  { icon: User, title: 'Portfolio Website', desc: 'Personal portfolios that showcase your work beautifully — perfect for freelancers, artists and professionals.' },
  { icon: ShoppingCart, title: 'E-Commerce Store', desc: 'Online shopping stores with payment gateway, product listings and a complete order management system.' },
  { icon: Newspaper, title: 'Blog / News Site', desc: 'Content-driven blogs and news portals with an admin panel and easy content management.' },
  { icon: Rocket, title: 'Landing Page', desc: 'High-converting landing pages for products, services or events — designed to get real results.' },
  { icon: Settings, title: 'Website Maintenance', desc: 'Repairs, updates, speed optimization and security fixes for your existing website.' },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">My Services</h2>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-4" />
          <p className="text-text-secondary">What I can build for you</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-8 rounded-2xl bg-surface border border-border hover:border-border-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-500" />
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:scale-110 transition-transform">
                <service.icon size={22} />
              </div>
              <h3 className="font-display text-lg font-semibold text-text-primary mb-3">{service.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

