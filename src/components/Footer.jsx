import { Heart, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-border bg-bg">
      <div className="max-w-6xl mx-auto text-center">
        <div className="font-display text-xl font-bold text-primary mb-2">
          AG<span className="text-text-secondary">-</span>Developer
        </div>
        <p className="text-text-muted text-sm mb-4">Anshul Gole — Web Developer | Gwalior</p>
        <div className="flex items-center justify-center gap-6 mb-4">
          <a href="https://github.com/anshulgole16/web-dep.-website-.git" target="_blank" rel="noopener" className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all">
            <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12c0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href="mailto:anshulgole4@gmail.com" className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all">
            <Mail size={20} />
          </a>
          <a href="tel:+918305995654" className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all">
            <Phone size={20} />
          </a>
        </div>
        <p className="text-text-muted text-xs flex items-center justify-center gap-1">
          Made with <Heart size={12} className="text-primary fill-primary" /> | © 2025 All rights reserved
        </p>
      </div>
    </footer>
  )
}

