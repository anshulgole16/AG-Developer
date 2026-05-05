import { useRef, useEffect, useState } from 'react'
import { collection, onSnapshot, query } from 'firebase/firestore'
import { db } from '../firebase'
import { motion, useInView } from 'framer-motion'
import { Star, Quote, CheckCircle } from 'lucide-react'

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [testimonials, setTestimonials] = useState(() => {
    try {
      const saved = localStorage.getItem('local_feedbacks')
      return saved ? JSON.parse(saved) : []
    } catch (e) {
      return []
    }
  })

  useEffect(() => {
    try {
      const q = query(collection(db, "reviews"))
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const fetched = []
        snapshot.forEach(doc => {
          const data = doc.data()
          fetched.push({
            name: data.name,
            location: data.business,
            rating: data.rating,
            text: data.feedback,
            image: data.photo,
            rawDate: data.date ? new Date(data.date).getTime() : 0,
            date: data.date ? new Date(data.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'Recent',
            verified: true
          })
        })
        
        setTestimonials(prev => {
          // Merge Firebase data with existing (local) data
          const combined = [...fetched, ...prev]
          // Deduplicate by name and text content to avoid duplicates on refresh
          const unique = combined.filter((v, i, a) => 
            a.findIndex(t => (t.name === v.name && t.text === v.text)) === i
          )
          // Sort descending by date
          unique.sort((a, b) => b.rawDate - a.rawDate)
          const finalData = unique.slice(0, 6)
          localStorage.setItem('local_feedbacks', JSON.stringify(finalData))
          return finalData
        })
      }, (error) => {
        console.error("Firebase fetch error:", error)
      })
      return () => unsubscribe()
    } catch (e) {
      console.log("Firebase not configured yet", e)
    }
  }, [])

  // Optimistic UI Update Listener
  useEffect(() => {
    const handleNewFeedback = (e) => {
      const data = e.detail
      const newReview = {
        name: data.name,
        location: data.business,
        rating: data.rating,
        text: data.feedback,
        image: data.photo,
        rawDate: Date.now(),
        date: 'Just now',
        verified: true
      }
      setTestimonials(prev => {
        const updated = [newReview, ...prev].slice(0, 6)
        localStorage.setItem('local_feedbacks', JSON.stringify(updated))
        return updated
      })
    }
    window.addEventListener('new-feedback', handleNewFeedback)
    return () => window.removeEventListener('new-feedback', handleNewFeedback)
  }, [])

  return (
    <section id="testimonials" className="py-24 px-6 bg-bg-secondary overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">Client Feedback</h2>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-4" />
          <p className="text-text-secondary">Real results from real clients</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((t, i) => (
            <motion.div
              key={`${t.name}-${i}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-8 rounded-2xl bg-surface border border-border hover:border-border-hover transition-all duration-300 hover:-translate-y-1"
            >
              <Quote size={24} className="text-primary/30 mb-4" />
              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className={j < t.rating ? 'text-amber-400 fill-amber-400' : 'text-text-muted'} />
                  ))}
                </div>
                <span className="text-xs text-text-muted font-medium">{t.date}</span>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold overflow-hidden border-2 border-border">
                  {t.image ? <img src={t.image} alt={t.name} className="w-full h-full object-cover" /> : t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="text-text-primary text-sm font-medium flex items-center gap-1">
                    {t.name}
                    {t.verified && <CheckCircle size={14} className="text-[#25D366]" />}
                  </div>
                  <div className="text-text-muted text-xs">{t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

