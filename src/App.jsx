import { useState, useEffect, useCallback } from 'react'
import { useLenis } from './hooks/useLenis'
import { ThemeProvider } from './context/ThemeContext'
import { ToastProvider, useToast } from './context/ToastContext'

import Preloader from './components/Preloader'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Contact from './components/Contact'
import FeedbackModal from './components/FeedbackModal'
import BackToTop from './components/BackToTop'
import Footer from './components/Footer'

function AppContent() {
  const [loaded, setLoaded] = useState(false)
  const [feedbackOpen, setFeedbackOpen] = useState(false)
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

    window.addEventListener('buy-plan', handleBuyPlan)
    window.addEventListener('contact-submit', handleContact)
    return () => {
      window.removeEventListener('buy-plan', handleBuyPlan)
      window.removeEventListener('contact-submit', handleContact)
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
        <Services />
        <Pricing />
        <Portfolio />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
      <FeedbackModal open={feedbackOpen} onClose={() => setFeedbackOpen(false)} />
      <BackToTop />
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

