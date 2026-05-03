import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight } from 'lucide-react'

export default function LeadCapture() {
  const [isVisible, setIsVisible] = useState(false)
  const [phone, setPhone] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 5000) // Show after 5 seconds
    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (phone.length >= 10) {
      const message = encodeURIComponent(`Hi, I want a free website demo. My number is ${phone} | Source: Lead Capture Popup`)
      window.open(`https://wa.me/918305995654?text=${message}`, '_blank')
      setIsVisible(false)
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 pointer-events-none"
        >
          <div className="max-w-4xl mx-auto pointer-events-auto bg-bg-secondary border border-primary/50 shadow-[0_-10px_40px_rgba(139,92,246,0.2)] rounded-t-2xl md:rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
            
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-2 right-2 md:top-4 md:right-4 text-text-muted hover:text-text-primary transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex-1 text-center md:text-left pt-2 md:pt-0">
              <h4 className="font-display text-lg md:text-xl font-bold text-text-primary flex items-center justify-center md:justify-start gap-2">
                🎯 Get Free Website Demo
              </h4>
              <p className="text-text-secondary text-sm mt-1">
                Enter your WhatsApp number and we'll send you a demo instantly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="w-full md:w-auto flex items-center gap-2">
              <input
                type="tel"
                placeholder="WhatsApp Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full md:w-64 px-4 py-3 rounded-xl bg-surface border border-border text-text-primary text-sm focus:outline-none focus:border-primary transition-colors"
                required
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold text-sm hover:bg-primary-dark transition-colors whitespace-nowrap cursor-pointer"
              >
                Get Demo <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
