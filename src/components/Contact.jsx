import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import { useToast } from '../context/ToastContext'

const contactInfo = [
  { icon: Phone, label: 'Phone / WhatsApp', value: '+91 8305995654' },
  { icon: Mail, label: 'Email', value: 'anshulgole4@gmail.com' },
  { icon: MapPin, label: 'Location', value: 'Gwalior' },
  { icon: Clock, label: 'Working Hours', value: 'Mon – Sat, 10am – 8pm' },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { addToast } = useToast()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: '', msg: '' })

  const handleSubmit = async () => {
    if (!form.name || (!form.email && !form.phone) || !form.msg) {
      return addToast('Please fill name, contact (email/phone), and message', 'error')
    }
    setLoading(true)
    const submitData = {
      name: form.name,
      email: form.email || '',
      phone: form.phone || '',
      type: form.type || 'General',
      msg: form.msg
    }
    window.dispatchEvent(new CustomEvent('contact-submit', { detail: submitData }))
    setTimeout(() => {
      setLoading(false)
      setForm({ name: '', email: '', phone: '', type: '', msg: '' })
    }, 1500)
  }

  return (
    <section id="contact" className="py-24 px-6 bg-bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">Contact Us</h2>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-4" />
          <p className="text-text-secondary">Let's discuss your project — free consultation, no commitment</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-xl font-semibold text-text-primary mb-6">Get in Touch</h3>
            <div className="space-y-5">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4 hover:translate-x-2 transition-transform cursor-pointer">
                  <div className="w-11 h-11 rounded-xl bg-surface border border-border flex items-center justify-center text-primary hover:bg-primary/10 transition-colors">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <div className="text-text-muted text-xs">{item.label}</div>
                    <div className="text-text-primary text-sm font-medium hover:text-primary transition-colors">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name *"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-5 py-3.5 rounded-xl bg-surface border border-border text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              required
            />
            <input
              type="email"
              placeholder="Email *"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-5 py-3.5 rounded-xl bg-surface border border-border text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            />
            <input
              type="tel"
              placeholder="Phone number *"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full px-5 py-3.5 rounded-xl bg-surface border border-border text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            />
            <input
              type="text"
              placeholder="Project type (Website, App, etc)"
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              className="w-full px-5 py-3.5 rounded-xl bg-surface border border-border text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            />
            <textarea
              placeholder="Tell me about your project *"
              rows={4}
              value={form.msg}
              onChange={(e) => setForm({ ...form, msg: e.target.value })}
              className="w-full px-5 py-3.5 rounded-xl bg-surface border border-border text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
              required
            />
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full py-3.5 bg-primary text-white rounded-xl font-medium text-sm flex items-center justify-center gap-2 hover:bg-primary-dark transition-all hover:scale-[1.02] disabled:opacity-50 cursor-pointer"
            >
              {loading ? (
                <motion.div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} />
              ) : (
                <>
                  Send Message
                  <Send size={14} />
                </>
              )}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

