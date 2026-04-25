import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, ArrowUpRight } from 'lucide-react'
import { useToast } from '../context/ToastContext'

const plans = [
  {
    name: 'Starter',
    price: '₹2,999',
    features: [
      { text: '1–3 Page Website', included: true },
      { text: 'Mobile Friendly', included: true },
      { text: 'Basic SEO', included: true },
      { text: 'Contact Form', included: true },
      { text: '7 Days Delivery', included: true },
      { text: 'Custom Backend', included: false },
      { text: 'E-Commerce', included: false },
    ],
  },
  {
    name: 'Professional',
    price: '₹7,999',
    popular: true,
    features: [
      { text: '5–10 Pages Website', included: true },
      { text: 'Mobile Friendly', included: true },
      { text: 'Advanced SEO', included: true },
      { text: 'Custom Design', included: true },
      { text: 'Admin Panel', included: true },
      { text: '14 Days Delivery', included: true },
      { text: '1 Month Support', included: true },
    ],
  },
  {
    name: 'Enterprise',
    price: '₹19,999',
    features: [
      { text: 'Unlimited Pages', included: true },
      { text: 'E-Commerce Store', included: true },
      { text: 'Custom Backend', included: true },
      { text: 'Payment Gateway', included: true },
      { text: 'Database Integration', included: true },
      { text: '30 Days Delivery', included: true },
      { text: '3 Months Support', included: true },
    ],
  },
]

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { addToast } = useToast()

  const handleBuy = (plan, price) => {
    const email = prompt('Enter your Email:')
    if (!email) return addToast('Email is required', 'error')
    const phone = prompt('Enter your Phone Number:')
    if (!phone) return addToast('Phone is required', 'error')

    // EmailJS integration will be wired in App.jsx
    window.dispatchEvent(new CustomEvent('buy-plan', { detail: { plan, price: parseInt(price.replace(/[^0-9]/g, '')), email, phone } }))
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
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">Pricing Plans</h2>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-4" />
          <p className="text-text-secondary max-w-xl mx-auto">Choose a plan that fits your budget — quality guaranteed on every project</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? 'bg-surface border-primary/50 shadow-xl shadow-primary/10'
                  : 'bg-surface border-border hover:border-border-hover'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              <h3 className="text-text-secondary text-sm font-medium mb-2">{plan.name}</h3>
              <div className="font-display text-4xl font-bold text-text-primary mb-6">
                {plan.price} <span className="text-text-muted text-base font-normal">/ project</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f.text} className={`flex items-center gap-3 text-sm ${f.included ? 'text-text-secondary' : 'text-text-muted opacity-40'}`}>
                    <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                      f.included ? 'bg-primary/20 text-primary' : 'bg-bg-tertiary text-text-muted'
                    }`}>
                      {f.included ? <Check size={12} /> : '×'}
                    </span>
                    {f.text}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleBuy(plan.name, plan.price)}
                className={`w-full py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02] cursor-pointer ${
                  plan.popular
                    ? 'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/25'
                    : 'bg-surface-hover text-text-primary border border-border hover:border-primary/50'
                }`}
              >
                Buy Now
                <ArrowUpRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

