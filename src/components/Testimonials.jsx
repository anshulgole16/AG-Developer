import { useRef, useEffect, useState } from 'react'
import { collection, onSnapshot, query, orderBy, limit } from 'firebase/firestore'
import { db } from '../firebase'
import { motion, useInView } from 'framer-motion'
import { Star, Quote, CheckCircle } from 'lucide-react'

const defaultTestimonials = [
  { name: 'Ravi', location: 'Gym Owner • Gwalior', date: 'Jan 2025', rating: 5, text: 'Got my website ready in just 3 days, and clients are already pouring in!', image: 'https://i.pravatar.cc/150?img=11' },
  { name: 'Priya', location: 'Boutique Owner • India', date: 'Feb 2025', rating: 5, text: 'The design is very premium. Online orders have already started coming in.', image: 'https://i.pravatar.cc/150?img=5' },
  { name: 'Amit', location: 'Real Estate Agent • Delhi', date: 'March 2025', rating: 5, text: 'Perfect lead generation website. It is already ranking on Google thanks to the SEO.', image: 'https://i.pravatar.cc/150?img=12' },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [testimonials, setTestimonials] = useState(defaultTestimonials)

  useEffect(() => {
    try {
      const q = query(collection(db, "reviews"), orderBy("date", "desc"), limit(6))
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
            date: new Date(data.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
            verified: true
          })
        })
        setTestimonials([...fetched, ...defaultTestimonials].slice(0, 6))
      }, (error) => {
        console.error("Firebase fetch error:", error)
        // Fallback to defaults on error (e.g. missing indexes or uninitialized db)
      })
      return () => unsubscribe()
    } catch (e) {
      console.log("Firebase not configured yet", e)
    }
  }, [])

  return (
    <section className="py-24 px-6 bg-bg-secondary overflow-hidden">
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

