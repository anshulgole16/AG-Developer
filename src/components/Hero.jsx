import { useState, useEffect } from 'react'
import { collection, onSnapshot, query } from 'firebase/firestore'
import { db } from '../firebase'
import { motion } from 'framer-motion'
import { MessageCircle, Rocket, Zap, Wallet, GraduationCap } from 'lucide-react'
import { Phone } from 'lucide-react'

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

const phone = '918305995654'

export default function Hero() {
  const [recentAvatars, setRecentAvatars] = useState(() => {
    try {
      const saved = localStorage.getItem('local_avatars')
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
          if (data.photo) {
            fetched.push({ photo: data.photo, rawDate: data.date ? new Date(data.date).getTime() : 0 })
          }
        })
        
        setRecentAvatars(prev => {
          // Merge and deduplicate avatars
          const fetchedUrls = fetched.sort((a, b) => b.rawDate - a.rawDate).map(f => f.photo)
          const combined = [...fetchedUrls, ...prev]
          const unique = [...new Set(combined)]
          const finalAvatars = unique.slice(0, 3)
          localStorage.setItem('local_avatars', JSON.stringify(finalAvatars))
          return finalAvatars
        })
      })
      return () => unsubscribe()
    } catch (e) {
      console.log(e)
    }
  }, [])

  // Optimistic UI Update Listener
  useEffect(() => {
    const handleNewFeedback = (e) => {
      const newReview = e.detail
      if (newReview.photo) {
        setRecentAvatars(prev => {
          const updated = [newReview.photo, ...prev].slice(0, 3)
          localStorage.setItem('local_avatars', JSON.stringify(updated))
          return updated
        })
      }
    }
    window.addEventListener('new-feedback', handleNewFeedback)
    return () => window.removeEventListener('new-feedback', handleNewFeedback)
  }, [])

  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hi, I want to create a website. Please guide me | Source: Hero Section')
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-primary/20 rounded-full blur-[100px] md:blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 md:w-80 md:h-80 bg-accent/10 rounded-full blur-[80px] md:blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-primary/10 rounded-full blur-[100px] md:blur-[150px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center"
      >
        {/* Headline */}
        <motion.h1 variants={item} className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-text-foreground leading-tight mb-6">
          Get Your Business Website{' '}
          <span className="bg-rainbow bg-clip-text text-transparent">in 3 Days</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p variants={item} className="text-text-foreground/80 text-lg md:text-2xl max-w-2xl mx-auto mb-8 leading-relaxed">
          Starting ₹4,999 | Mobile Optimized | Fast & SEO Ready
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={handleWhatsApp}
            className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] cursor-pointer border border-primary/50"
          >
            <Rocket size={22} className="animate-bounce" />
            Get Website Now
          </button>
          <button
            onClick={() => scrollTo('#pricing')}
            className="flex items-center gap-3 px-8 py-4 bg-surface text-text-primary border border-border rounded-xl font-medium text-base hover:bg-surface-hover hover:border-text-muted transition-all cursor-pointer"
          >
            <Wallet size={20} />
            View Pricing
          </button>
        </motion.div>

        {/* Urgency Line */}
        <motion.p variants={item} className="text-amber-400 font-medium text-sm mb-12 flex items-center justify-center gap-2">
          <Zap size={16} className="animate-pulse" /> Limited slots available this week
        </motion.p>

        {/* Trust Points */}
        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-8 mb-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
              <Rocket size={18} className="text-primary" />
            </div>
            <div className="text-left">
              <div className="text-text-foreground font-medium">15+ Projects</div>
              <div className="text-text-foreground/50 text-sm">Delivered</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
              <Zap size={18} className="text-amber-500" />
            </div>
            <div className="text-left">
              <div className="text-text-foreground font-medium">No advance required</div>
              <div className="text-text-foreground/50 text-sm">Risk-free process</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
              <Phone size={18} className="text-emerald-500" />
            </div>
            <div className="text-left">
              <div className="text-text-foreground font-medium">Free demo before payment</div>
              <div className="text-text-foreground/50 text-sm">100% satisfaction</div>
            </div>
          </div>
        </motion.div>

        {/* Social Proof */}
        <motion.div 
          variants={item} 
          onClick={() => scrollTo('#testimonials')}
          className="px-6 py-4 bg-elevated/50 rounded-2xl border border-border inline-flex items-center gap-3 cursor-pointer hover:bg-elevated hover:scale-105 transition-all"
        >
          <div className="flex -space-x-2">
            {(recentAvatars.length > 0 ? recentAvatars : [1, 2, 3].map(i => `https://i.pravatar.cc/100?img=${i + 10}`)).map((img, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-primary/30 border-2 border-elevated flex items-center justify-center text-xs overflow-hidden"
              >
                <img src={img} alt="Client" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div className="text-left">
            <div className="text-text-foreground font-medium text-sm">Trusted by 10+ businesses</div>
            <div className="text-text-foreground/50 text-xs">Join them today</div>
          </div>
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
          <div className="w-1.5 h-1.5 rounded-full bg-text-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
