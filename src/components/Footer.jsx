import { Mail, Phone, Linkedin, Instagram, Wrench, CheckCircle2 } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border bg-bg">
      <div className="max-w-6xl mx-auto text-center">
        {/* Maintenance Box */}
        <div className="max-w-4xl mx-auto mb-16 p-8 rounded-2xl bg-bg-secondary border border-primary/40 shadow-[0_0_30px_rgba(139,92,246,0.15)] relative overflow-hidden text-left">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-dark"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="font-display text-2xl font-bold text-text-primary mb-2 flex items-center justify-center md:justify-start gap-2">
                <Wrench className="text-primary" /> Website Maintenance
              </h3>
              <p className="text-text-secondary text-base mb-3 text-center md:text-left">
                Keep your website fast, secure, and error-free — without any hassle.
                <span className="block mt-1 text-primary font-medium">⚡ Avoid website downtime & errors</span>
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-x-5 gap-y-2 mt-4">
                {['Regular updates', 'Bug fixes', 'Basic SEO checks', 'WhatsApp support'].map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-text-muted font-medium">
                    <CheckCircle2 size={16} className="text-primary" /> {feature}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col items-center md:items-end w-full md:w-auto mt-6 md:mt-0">
              <div className="font-display text-4xl font-bold text-text-primary mb-1">
                ₹1,999<span className="text-text-muted text-lg font-normal">/month</span>
              </div>
              <p className="text-emerald-500 font-medium text-sm mb-4">
                🔥 First 7 days free support
              </p>
              <button
                onClick={() => {
                  const message = encodeURIComponent('Hi, I want website maintenance (₹1999/month) | Source: Maintenance Box')
                  window.open(`https://wa.me/918305995654?text=${message}`, '_blank')
                }}
                className="w-full md:w-auto px-10 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary-dark hover:scale-105 transition-all shadow-[0_0_30px_rgba(139,92,246,0.6)] hover:shadow-[0_0_40px_rgba(139,92,246,0.8)] cursor-pointer"
              >
                Start Maintenance Now
              </button>
              <p className="text-text-muted text-xs font-medium mt-3 flex items-center gap-1">
                ✔ No long-term commitment
              </p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-left border-t border-border/50 pt-12 mt-12 mb-8">
          <div>
            <div className="font-display text-2xl font-bold text-primary mb-4">
              AG<span className="text-text-secondary">-</span>Developer
            </div>
            <p className="text-text-secondary text-sm mb-6 leading-relaxed max-w-sm">
              I build affordable, high-converting websites for businesses. Let's grow your business online.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/in/anshul-gole-3934a6340" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
              <a href="https://www.instagram.com/anshul._.editor/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="mailto:anshulgole4@gmail.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-text-primary mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-text-primary mb-4">Ready to Grow?</h4>
            <p className="text-text-secondary text-sm mb-4">
              🚀 Need a website that actually gets customers? Let's talk today.
            </p>
            <button
              onClick={() => {
                const message = encodeURIComponent('Hi, I want to start my project | Source: Footer CTA')
                window.open(`https://wa.me/918305995654?text=${message}`, '_blank')
              }}
              className="px-6 py-2.5 bg-primary/10 text-primary border border-primary/30 rounded-lg text-sm font-bold hover:bg-primary hover:text-white transition-all cursor-pointer"
            >
              Start Your Project Today
            </button>
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between text-text-muted text-xs gap-4">
          <p>© 2025 AG-Developer. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => window.dispatchEvent(new CustomEvent('open-policy', { detail: 'privacy' }))} className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</button>
            <button onClick={() => window.dispatchEvent(new CustomEvent('open-policy', { detail: 'payment' }))} className="hover:text-primary transition-colors cursor-pointer">Payment & Cancellation Policy</button>
            <button onClick={() => window.dispatchEvent(new CustomEvent('open-policy', { detail: 'terms' }))} className="hover:text-primary transition-colors cursor-pointer">Terms & Conditions</button>
          </div>
          <p className="mt-2 md:mt-0">Designed & Developed by Anshul Gole</p>
        </div>
      </div>
    </footer>
  )
}

