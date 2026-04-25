import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">About Me</h2>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center gap-12 max-w-4xl mx-auto"
        >
          <div className="relative flex-shrink-0">
            <motion.img 
              src={new URL('../assets/about logo photo .jpeg', import.meta.url).href}
              alt="Anshul Gole - Logo Photo" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-2xl shadow-primary/30 border-4 border-primary/20 cursor-pointer"
              initial={{ scale: 1, rotate: 0 }}
              whileHover={{ scale: 1.05, rotate: 2, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              loading="lazy"
            />

            <motion.div 
              className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-xl -z-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.2, opacity: 0.8 }}
              transition={{ type: "spring", stiffness: 400 }}
            />
          </div>

          <div className="text-center md:text-left">
            <p className="text-text-secondary leading-relaxed mb-4">
              Hello! I am <strong className="text-text-primary">Anshul Gole</strong>, a passionate web developer based in{' '}
              <strong className="text-text-primary">Gwalior, Madhya pradesh</strong>. Building websites is not just my job — it is my passion.
            </p>
            <p className="text-text-secondary leading-relaxed mb-4">
              Over the past <strong className="text-text-primary">1+ years</strong>, I have built more than 50 websites — for small businesses, startups, portfolios and e-commerce stores. In every project, I focus on design, performance and user experience.
            </p>
            <p className="text-text-secondary leading-relaxed">
              If you want to take your business online or need a brand new portfolio,{' '}
              <strong className="text-text-primary">I am here to help you make it happen.</strong>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
