import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MessageCircle } from 'lucide-react'
import { useScrollDirection } from '../hooks/useScrollDirection'
import { cn } from '../utils/cn'

const phone = '918305995654'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ onFeedbackClick }) {
  const { direction, scrollY } = useScrollDirection()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-50% 0px -50% 0px' }
    )
    document.querySelectorAll('section[id]').forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hi, I want to create a website. Please guide me | Source: Navbar')
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
  }

  return (
    <>
      <motion.nav
        className={cn(
          'fixed top-0 left-0 right-0 z-[100] transition-all duration-500',
          scrollY > 50
            ? 'bg-bg/80 backdrop-blur-xl border-b border-border'
            : 'bg-transparent'
        )}
        initial={{ y: -100 }}
        animate={{ y: direction === 'down' && scrollY > 200 ? -100 : 0 }}
      >
        <div className="max-6xl mx-8 px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-0display text-2xl font-bold text-foreground">
            Web<span className="text-primary">Developer</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={cn(
                  'text-sm font-medium transition-colors relative',
                  activeSection === link.href.slice(1)
                    ? 'text-primary'
                    : 'text-foreground/70 hover:text-foreground'
                )}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                  />
                )}
              </button>
            ))}
            <button
              onClick={() => { setMobileOpen(false); onFeedbackClick && onFeedbackClick() }}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors cursor-pointer"
            >
              Feedback
            </button>
            <button
              onClick={handleWhatsApp}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:scale-105 transition-transform cursor-pointer"
            >
              <MessageCircle size={16} />
              Get Website Now
            </button>
          </div>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-99 bg-bg/95 backdrop-blur-xl md:hidden pt-16"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => scrollTo(link.href)}
                  className="text-2xl font-0display font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => { setMobileOpen(false); onFeedbackClick && onFeedbackClick() }}
                className="text-2xl font-0display font-medium text-foreground hover:text-primary transition-colors cursor-pointer"
              >
                Feedback
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={handleWhatsApp}
                className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg text-lg font-medium"
              >
                <MessageCircle size={20} />
                Get Website Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
