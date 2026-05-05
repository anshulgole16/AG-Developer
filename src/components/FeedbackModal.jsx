import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Star } from 'lucide-react'
import { useToast } from '../context/ToastContext'
import { collection, addDoc } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { db, storage } from '../firebase'

export default function FeedbackModal({ open, onClose }) {
  const { addToast } = useToast()
  const [rating, setRating] = useState(5)
  const [hoverRating, setHoverRating] = useState(0)
  const [form, setForm] = useState({ name: '', business: '', email: '', text: '' })
  const [photoFile, setPhotoFile] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const fileInputRef = useRef(null)

  const handleSubmit = async () => {
    if (!form.name || !form.business || !form.text) {
      return addToast('Please fill all required fields', 'error')
    }
    
    setIsSubmitting(true)
    
    try {
      let photoURL = `https://ui-avatars.com/api/?name=${encodeURIComponent(form.name)}&background=random&color=fff&size=150`
      
      if (photoFile) {
        const storageRef = ref(storage, 'reviews/' + Date.now() + '_' + photoFile.name)
        await uploadBytes(storageRef, photoFile)
        photoURL = await getDownloadURL(storageRef)
      }

      await addDoc(collection(db, "reviews"), {
        name: form.name,
        business: form.business,
        rating,
        feedback: form.text,
        photo: photoURL,
        date: new Date().toISOString()
      })

      addToast('Review submitted successfully!')
      setForm({ name: '', business: '', email: '', text: '' })
      setPhotoFile(null)
      setRating(5)
      onClose()
    } catch (error) {
      console.error("Error adding document: ", error)
      addToast('Failed to submit review. Check Firebase config.', 'error')
    } finally {
      setIsSubmitting(false)
    }
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
                <label className="block text-text-secondary text-xs font-medium mb-2">Business Type (e.g. Gym Owner)</label>
                <input
                  type="text"
                  value={form.business}
                  onChange={(e) => setForm({ ...form, business: e.target.value })}
                  placeholder="Enter your business type"
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-primary transition-all"
                />
              </div>
              <div>
                <label className="block text-text-secondary text-xs font-medium mb-2">Your Photo (Optional)</label>
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={(e) => setPhotoFile(e.target.files[0])}
                  className="w-full px-4 py-2 rounded-xl bg-surface border border-border text-text-primary text-sm focus:outline-none focus:border-primary transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/20 file:text-primary hover:file:bg-primary/30"
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
                disabled={isSubmitting}
                className="w-full py-3.5 bg-primary text-white rounded-xl font-medium text-sm hover:bg-primary-dark transition-all hover:scale-[1.02] disabled:opacity-50 flex justify-center items-center cursor-pointer"
              >
                {isSubmitting ? (
                  <motion.div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} />
                ) : (
                  'Submit Review'
                )}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

