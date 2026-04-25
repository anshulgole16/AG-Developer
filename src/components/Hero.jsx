import { motion } from 'framer-motion'
import { Mail, Briefcase } from 'lucide-react'
import AnimatedCounter from './AnimatedCounter.jsx'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } },
}

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-dark/10 rounded-full blur-[150px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border text-text-secondary text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
          Available for Projects
        </motion.div>

        <motion.h1 variants={item} className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-text-primary leading-[1.1] mb-4">
          Hi, I'm <span className="bg-primary bg-clip-text text-transparent">Anshul Gole</span>
        </motion.h1>

        <motion.p variants={item} className="font-display text-xl md:text-2xl text-text-secondary font-medium mb-6">
          Professional Web Developer
        </motion.p>

        <motion.p variants={item} className="text-text-muted text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          I build beautiful, fast and modern websites for businesses and individuals. 
          From business websites to full portfolios — I put my heart into every project.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <button
            onClick={() => scrollTo('#contact')}
            className="group flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-medium text-sm hover:bg-primary-dark transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/25 cursor-pointer"
          >
            Get In Touch
            <Mail size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollTo('#portfolio')}
            className="group flex items-center gap-2 px-8 py-4 bg-surface text-text-primary border border-border rounded-xl font-medium text-sm hover:border-border-hover hover:bg-surface-hover transition-all hover:scale-105 cursor-pointer"
          >
            View My Work
            <Briefcase size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        <motion.div variants={item} className="flex items-center justify-center gap-12 md:gap-16">
          {[
            { target: 50, label: 'Projects Done' },
            { target: 40, label: 'Happy Clients' },
            { target: 3, label: 'Years Exp' },
          ].map((stat, index) => (
            <AnimatedCounter key={stat.label} target={stat.target} delay={index * 0.2} label={stat.label} />
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-text-secondary" />
        </motion.div>
      </motion.div>
    </section>
  )
}

