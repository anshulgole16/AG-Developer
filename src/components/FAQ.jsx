import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'How long does it take to build the website?',
    a: 'A basic website is ready in 3 days, and a custom website takes 5-7 days.'
  },
  {
    q: 'Is hosting included?',
    a: 'Free hosting is included in the Standard and Premium plans. For the Basic plan, you will need to provide your own hosting.'
  },
  {
    q: 'What are the payment terms?',
    a: '50% advance to start the project, and the remaining 50% upon project completion.'
  },
  {
    q: 'Are changes allowed?',
    a: 'Yes, absolutely. We offer revisions to ensure you are 100% satisfied with the result.'
  },
  {
    q: 'Will I get support after delivery?',
    a: 'Yes, every website comes with free support. If you face any issues, we will fix them for you.'
  },
  {
    q: 'Will I get a demo before paying?',
    a: 'Yes, you will get a full demo of your website before the final payment is made.'
  },
  {
    q: 'Do you provide WhatsApp support?',
    a: 'Yes, direct WhatsApp support is available for quick communication.'
  }
]

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section id="faq" className="py-24 px-6 bg-bg-secondary">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Common Questions
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-4" />
          <p className="text-text-secondary">Everything you need to know</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-surface border border-border overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-surface-hover transition-colors"
              >
                <span className="font-medium text-text-primary pr-4">{faq.q}</span>
                <ChevronDown
                  size={20}
                  className={`text-primary flex-shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
                />
              </button>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="px-6 pb-5"
                >
                  <p className="text-text-secondary leading-relaxed">{faq.a}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
