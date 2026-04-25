import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Star } from 'lucide-react'
import { useToast } from '../context/ToastContext'

export default function FeedbackModal({ open, onClose }) {
  const { addToast } = useToast()
  const [rating, setRating] = useState(5)
  const [hoverRating, setHoverRating] = useState(0)
  const [form, setForm] = useState({ name: '', email: '', text: '' })

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.text) {
      return addToast('Please fill all fields', 'error')
    }
    const stored = JSON.parse(localStorage.getItem('feedback') || '[]')
    stored.push({ ...form, rating, location: 'India', date: new Date().toISOString() })
    localStorage.setItem('feedback', JSON.stringify(stored))
    addToast('Thank you for your feedback!')
    setForm({ name: '', email: '', text: '' })
    setRating(5)
    onClose()
    // Trigger re-render of testimonials
    window.dispatchEvent(new Event('storage'))
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center px-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-bg-secondary border border-border rounded-3xl p-8 shadow-2xl"
          >
            <button onClick={onClose} className="absolute top-4 right-4 p-2 text-text-muted hover:text-text-primary transition-colors cursor-pointer">
              <X size={20} />
            </button>

            <h2 className="font-display text-2xl font-bold text-text-primary mb-2">Share Your Feedback</h2>
            <p className="text-text-secondary text-sm mb-6">Tell us about your experience working with Anshul Gole.</p>

            <div className="space-y-4">
              <div>
                <label className="block text-text-secondary text-xs font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-primary transition-all"
                />
              </div>
              <div>
                <label className="block text-text-secondary text-xs font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-primary transition-all"
                />
              </div>
              <div>
                <label className="block text-text-secondary text-xs font-medium mb-2">Rate Your Experience</label>
                <div className="flex items-center gap-2 p-4 rounded-xl bg-surface border border-border">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="p-1 transition-transform hover:scale-125 cursor-pointer"
                    >
                      <Star
                        size={28}
                        className={(hoverRating ? star <= hoverRating : star <= rating) ? 'text-amber-400 fill-amber-400' : 'text-text-muted'}
                      />
                    </button>
                  ))}
                  <span className="ml-3 text-text-muted text-sm font-medium">
                    {hoverRating || rating} / 5
                  </span>
                </div>
              </div>
              <div>
                <label className="block text-text-secondary text-xs font-medium mb-2">Your Feedback</label>
                <textarea
                  value={form.text}
                  onChange={(e) => setForm({ ...form, text: e.target.value })}
                  placeholder="Share your experience or suggestion..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-primary transition-all resize-none"
                />
              </div>
              <button
                onClick={handleSubmit}
                className="w-full py-3.5 bg-primary text-white rounded-xl font-medium text-sm hover:bg-primary-dark transition-all hover:scale-[1.02] cursor-pointer"
              >
                Submit Feedback
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

