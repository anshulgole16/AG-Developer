import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useScrollDirection } from '../hooks/useScrollDirection'

export default function BackToTop() {
  const { scrollY } = useScrollDirection()

  return (
    <AnimatePresence>
      {scrollY > 500 && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 left-6 z-[100] p-3 rounded-full bg-primary text-white shadow-lg shadow-primary/30 hover:scale-110 transition-transform cursor-pointer"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

