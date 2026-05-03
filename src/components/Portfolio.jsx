import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Phone } from 'lucide-react'

const projects = [
  { name: 'Clothing Store Website', desc: 'Helps businesses sell products online with smooth checkout', category: 'E-Commerce', clientType: 'Fashion Shop', result: 'Got 20+ leads in 1 week' },
  { name: 'Doctor Booking Website', desc: 'Allows users to book appointments easily online', category: 'Business', clientType: 'Local Clinic', result: 'Increased bookings by 40%' },
  { name: 'Restaurant Website', desc: 'Helps restaurants receive online orders directly', category: 'Business', clientType: 'Restaurant', result: 'Got 50+ online orders' },
  { name: 'Startup Landing Page', desc: 'Converts visitors into leads with proven design', category: 'Landing', clientType: 'Tech Startup', result: 'Boosted conversion to 12%' },
  { name: 'EduLearn Platform', desc: 'Online courses platform with student dashboard', category: 'Business', clientType: 'Student/Tutor', result: 'Onboarded 100+ students' },
  { name: 'BuildPro Agency', desc: 'Showcases services to attract construction leads', category: 'Portfolio', clientType: 'Agency', result: 'Secured 3 major contracts' },
]

const filters = ['All', 'Business', 'E-Commerce', 'Portfolio', 'Landing']

export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeFilter, setActiveFilter] = useState('All')
  const phone = '918305995654'

  const filtered = activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter)

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${phone}?text=I want a website like this`, '_blank')
  }

  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Websites That Deliver Real Results
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-4" />
          <p className="text-text-secondary mb-4">See how I help businesses get more customers online</p>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                  activeFilter === f
                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                    : 'bg-surface text-text-secondary hover:text-text-primary border border-border'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <a href="#" className="h-48 bg-slate-800 flex flex-col items-center justify-center group-hover:bg-slate-700 transition-colors relative overflow-hidden">
                  <div className="w-12 h-12 rounded-full bg-primary/80 flex items-center justify-center text-white mb-2 shadow-lg group-hover:scale-110 transition-transform">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                  <span className="text-white/90 text-sm font-medium z-10">Live Client Website</span>
                  <span className="text-white/50 text-xs mt-1 z-10">(click to open)</span>
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                </a>
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-medium px-2 py-1 bg-surface border border-border rounded-md text-text-secondary">{project.clientType}</span>
                    <span className="text-xs font-medium text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-md">🚀 {project.result}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-text-primary">{project.name}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed flex-1">{project.desc}</p>
                  <div className="buttons flex gap-3 mt-2">
                    <a href="#" className="demo-btn flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-surface text-text-primary border border-border rounded-lg text-sm font-medium hover:border-primary hover:bg-primary/5 transition-all cursor-pointer">
                      🌐 Live Demo
                    </a>
                    <button
                      onClick={handleWhatsApp}
                      className="cta-btn flex-1 px-4 py-2 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-lg text-sm hover:opacity-90 hover:shadow-lg hover:shadow-primary/25 transition-all cursor-pointer"
                    >
                      💬 Get Similar
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

