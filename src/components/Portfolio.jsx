import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ExternalLink, ShoppingBag, Stethoscope, UtensilsCrossed, Rocket, GraduationCap, HardHat } from 'lucide-react'

const projects = [
  { name: 'FashionHub Store', desc: 'E-commerce website with cart and payment', tag: 'React + Node', category: 'E-Commerce', color: 'from-violet-500/20 to-purple-500/20', icon: ShoppingBag },
  { name: 'MediCare Clinic', desc: 'Doctor appointment booking system', tag: 'WordPress', category: 'Business', color: 'from-emerald-500/20 to-teal-500/20', icon: Stethoscope },
  { name: 'TastyBites Restaurant', desc: 'Restaurant website with online menu', tag: 'HTML/CSS/JS', category: 'Business', color: 'from-amber-500/20 to-orange-500/20', icon: UtensilsCrossed },
  { name: 'StartupLaunch', desc: 'Startup landing page with animations', tag: 'React', category: 'Landing', color: 'from-rose-500/20 to-pink-500/20', icon: Rocket },
  { name: 'EduLearn Platform', desc: 'Online course website with dashboard', tag: 'MERN Stack', category: 'Business', color: 'from-sky-500/20 to-blue-500/20', icon: GraduationCap },
  { name: 'BuildPro Agency', desc: 'Construction company portfolio', tag: 'HTML/CSS', category: 'Portfolio', color: 'from-lime-500/20 to-green-500/20', icon: HardHat },
]

const filters = ['All', 'Business', 'E-Commerce', 'Portfolio', 'Landing']

export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter)

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
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">My Portfolio</h2>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-4" />
          <p className="text-text-secondary mb-8">A selection of recent projects I have built</p>

          <div className="flex flex-wrap justify-center gap-2">
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
            {filtered.map((project) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl overflow-hidden border border-border hover:border-border-hover bg-surface transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`h-40 bg-surface flex items-center justify-center bg-gradient-to-br ${project.color}`}>
                  <project.icon size={48} className="text-text-secondary/50" />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-display text-lg font-semibold text-text-primary">{project.name}</h3>
                    <ExternalLink size={16} className="text-text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-text-secondary text-sm mb-3">{project.desc}</p>
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {project.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

