import { useState, useEffect, useCallback } from 'react'
import { useLenis } from './hooks/useLenis'
import { ThemeProvider } from './context/ThemeContext'
import { ToastProvider, useToast } from './context/ToastContext'

import Preloader from './components/Preloader'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Pricing from './components/Pricing'
import Maintenance from './components/Maintenance'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import About from './components/About'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import FeedbackModal from './components/FeedbackModal'
import BackToTop from './components/BackToTop'
import Footer from './components/Footer'
import LeadCapture from './components/LeadCapture'
import PolicyView from './components/PolicyView'

function AppContent() {
  const [loaded, setLoaded] = useState(false)
  const [feedbackOpen, setFeedbackOpen] = useState(false)
  const [activePolicy, setActivePolicy] = useState(null)
  const { addToast } = useToast()
  useLenis()

  // EmailJS + jsPDF integration
  useEffect(() => {
    const handleBuyPlan = async (e) => {
      const { plan, price, email, phone } = e.detail
      try {
        // Dynamic import for EmailJS
        const emailjs = (await import('emailjs-com')).default
        emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID)
        await emailjs.send('service_ktm40jh', 'template_43npz7j', {
          plan, price, client_email: email, client_phone: phone,
        })
        addToast('Order placed! Invoice downloading...')
        // Generate PDF
        const { jsPDF } = await import('jspdf')
        const doc = new jsPDF()
        doc.setFontSize(20)
        doc.text('INVOICE', 20, 20)
        doc.setFontSize(12)
        doc.text(`Client Email: ${email}`, 20, 40)
        doc.text(`Phone: ${phone}`, 20, 50)
        doc.text(`Plan: ${plan}`, 20, 60)
        doc.text(`Price: Rs ${price}`, 20, 70)
        doc.text('Status: Confirmed', 20, 90)
        doc.save('invoice.pdf')
      } catch (err) {
        console.error(err)
        addToast('Email failed, but order was saved', 'error')
        const msg = `NEW ORDER ${plan} Rs${price}\nEmail: ${email}\nPhone: ${phone}`
        navigator.clipboard.writeText(msg)
      }
    }

    const handleContact = async (e) => {
      const { name, contact, type, msg } = e.detail
      try {
        const emailjs = (await import('emailjs-com')).default
        emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID)
        await emailjs.send('service_ktm40jh', 'template_43npz7j', {
          from_name: name,
          contact_info: contact,
          project_type: type || 'General',
          message: msg,
        })
        addToast('Message sent! I will get back to you shortly.')
      } catch (err) {
        console.error(err)
        addToast('Message saved. I will contact you soon!', 'error')
      }
    }

    const handleOpenPolicy = (e) => {
      setActivePolicy(e.detail)
    }

    window.addEventListener('buy-plan', handleBuyPlan)
    window.addEventListener('contact-submit', handleContact)
    window.addEventListener('open-policy', handleOpenPolicy)
    return () => {
      window.removeEventListener('buy-plan', handleBuyPlan)
      window.removeEventListener('contact-submit', handleContact)
      window.removeEventListener('open-policy', handleOpenPolicy)
    }
  }, [addToast])

  const openFeedback = useCallback(() => setFeedbackOpen(true), [])

  return (
    <>
      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}
      <CustomCursor />
      <Navbar onFeedbackClick={openFeedback} />
      <main>
        <Hero />
        <Skills />
        <Pricing />
        <Portfolio />
        <Testimonials />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <LeadCapture />
      <PolicyView policyType={activePolicy} onClose={() => setActivePolicy(null)} />
      <FeedbackModal open={feedbackOpen} onClose={() => setFeedbackOpen(false)} />
      <BackToTop />
      
      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/918305995654?text=${encodeURIComponent('Hi, I need a website | Source: Floating Button')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-[#25D366]/40 hover:scale-110 hover:-translate-y-1 transition-all flex items-center justify-center cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
      </a>
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <AppContent />
      </ToastProvider>
    </ThemeProvider>
  )
}

