import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const AnimatedCounter = ({ target, label, delay = 0 }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const increment = target / 100
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 30)
    return () => clearInterval(timer)
  }, [target])

  return (
    <div className="text-center">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay, duration: 0.5 }}
        className="font-display text-3xl md:text-4xl font-bold text-primary mb-1"
      >
        {count.toLocaleString()}+
      </motion.div>
      <div className="text-text-muted text-xs md:text-sm uppercase tracking-wider">{label}</div>
    </div>
  )
}

export default AnimatedCounter
