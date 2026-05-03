import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, Phone, Zap, Clock, Shield } from 'lucide-react'
import { MessageCircle } from 'lucide-react'

const plans = [
  {
    name: 'Basic',
    price: '₹4,999',
    delivery: '3 Days',
    pages: '3 Pages Website',
    support: '1 Revision',
    features: [
      { text: 'Mobile Responsive', included: true },
      { text: 'Basic SEO', included: true },
      { text: 'No Hosting', included: false },
    ],
  },
  {
    name: 'Standard',
    price: '₹9,999',
    popular: true,
    delivery: '5 Days',
    pages: '5 Pages Website',
    support: '3 Revisions',
    features: [
      { text: 'SEO + Speed Optimization', included: true },
      { text: 'WhatsApp Integration', included: true },
      { text: 'Free Hosting Setup', included: true },
    ],
  },
  {
    name: 'Premium',
    price: '₹24,999',
    delivery: '7 Days',
    pages: '10 Pages Website',
    support: 'Unlimited Revisions',
    features: [
      { text: 'Advanced SEO', included: true },
      { text: 'Custom Design', included: true },
      { text: 'Admin Panel', included: true },
    ],
  },
]

const phone = '918305995654'

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const handleWhatsApp = (planName, planPrice) => {
    const cleanPrice = planPrice.replace(',', '')
    const message = encodeURIComponent(`Hi, I want to buy ${planName} Plan (${cleanPrice}) | Source: Pricing Section`)
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
  }

  return (
    <section id="pricing" className="py-24 px-6 bg-bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Simple Pricing, No Hidden Charges
          </h2>
          <div className="w-12 h-1 bg-foreground rounded-full mx-auto mb-4" />
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Pay after seeing your demo website
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative p-8 rounded-2xl bg-elevated transition-all duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? 'ring-2 ring-primary shadow-xl shadow-primary/20' :
                  'border border-border hover:border-primary/50' 
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-sm font-semibold rounded-full shadow-lg flex items-center gap-1">
                  <Zap size={12} /> Most Popular
                </div>
              )}

              <h3 className="text-foreground text-lg font-semibold mb-2 text-center">{plan.name}</h3>
              <div className="text-center mb-2">
                <span className="font-display text-4xl font-bold text-foreground">{plan.price}</span>
              </div>
              
              {/* Quick Info */}
              <div className="flex items-center justify-center gap-4 mb-4 text-sm">
                <div className="flex items-center gap-1 text-foreground/70">
                  <Clock size={14} />
                  {plan.delivery}
                </div>
                <div className="text-primary">•</div>
                <div className="text-foreground/70">{plan.pages}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f.text} className={`flex items-center gap-3 text-sm ${f.included ? 'text-foreground/80' : 'text-foreground/40 line-through'}`}>
                    <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${f.included ? 'bg-primary/20 text-primary' : 'bg-foreground/10 text-foreground/40'}`}>
                      <Check size={12} />
                    </span>
                    {f.text}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-center gap-2 mb-4 text-sm text-foreground/60">
                <Shield size={14} />
                {plan.support} free support
              </div>

              <button
                onClick={() => handleWhatsApp(plan.name, plan.price)}
                className={`w-full py-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all hover:scale-105 cursor-pointer ${
                  plan.popular
                    ? 'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/30'
                    : 'bg-elevated border border-border text-foreground hover:border-primary/50'
                }`}
              >
                <MessageCircle size={16} />
                Start Project
              </button>
            </motion.div>
          ))}
        </div>

        {/* Urgency Box */}
        <div className="text-center mb-8">
          <p className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-amber-500/10 text-amber-500 font-medium text-sm border border-amber-500/20">
            🔥 Only 3 slots available this week
          </p>
        </div>

        {/* Trust Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center py-8 px-6 bg-elevated/50 rounded-2xl border border-border"
        >
          <p className="text-foreground text-lg font-medium flex flex-wrap items-center justify-center gap-6">
            <span className="flex items-center gap-2">
              <Zap size={18} className="text-primary" /> No advance? Let's discuss
            </span>
            <span className="flex items-center gap-2">
              <MessageCircle size={18} className="text-primary" /> Free consultation
            </span>
            <span className="flex items-center gap-2">
              <Shield size={18} className="text-primary" /> 100% Satisfaction Guarantee
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
