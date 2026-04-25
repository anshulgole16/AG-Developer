import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Zap, Atom, Server, Database, Palette, Smartphone, Wrench } from 'lucide-react'

const skills = [
  { name: 'HTML & CSS', level: 95, icon: Code2, expert: true },
  { name: 'JavaScript', level: 88, icon: Zap },
  { name: 'React.js', level: 82, icon: Atom },
  { name: 'Node.js', level: 75, icon: Server },
  { name: 'MongoDB', level: 70, icon: Database },
  { name: 'UI/UX Design', level: 85, icon: Palette },
  { name: 'Responsive Design', level: 92, icon: Smartphone, expert: true },
  { name: 'WordPress', level: 80, icon: Wrench },
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
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">My Skills</h2>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-4" />
          <p className="text-text-secondary">Technologies I work with</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="spotlight-card group p-6 rounded-2xl bg-surface border border-border hover:border-border-hover transition-all duration-300 hover:-translate-y-1"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
                e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
              }}
            >
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  <skill.icon size={22} />
                </div>
                <h3 className="font-medium text-text-primary mb-1 text-sm">{skill.name}</h3>
                <p className="text-text-muted text-xs mb-3">{skill.expert ? 'Expert' : skill.level >= 80 ? 'Advanced' : 'Intermediate'}</p>
                <div className="h-1.5 bg-bg-tertiary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: i * 0.08 + 0.3, ease: 'easeOut' }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

