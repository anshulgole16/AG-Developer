# Anshul Gole — Web Developer Portfolio 🚀

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwindcss)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-EA4C89?logo=framer)](https://www.framer.com/motion/)

## Overview

Industry-grade portfolio for **Anshul Gole**, a professional web developer based in Gwalior, India. This is a complete redesign featuring premium animations, glassmorphism UI, smooth scroll interactions, and a modern component-based architecture.

## ✨ What's New (Redesign)

| Feature | Before | After |
|---------|--------|-------|
| **Tech Stack** | Vanilla HTML/CSS/JS | React 19 + Vite + Tailwind v4 + Framer Motion |
| **Animations** | Basic CSS keyframes | GSAP-level scroll reveals, spring physics, staggered animations |
| **Smooth Scroll** | Native CSS | Lenis butter-smooth scrolling |
| **Cursor** | System default | Custom animated cursor with spring follow (desktop) |
| **Preloader** | None | Animated brand preloader with progress bar |
| **Portfolio** | Static emoji cards | Filterable grid with AnimatePresence layout transitions |
| **Icons** | Emojis | Lucide React SVG icons |
| **Notifications** | Browser `alert()` | Custom toast notification system |
| **Theme** | Manual dark toggle | Dark/light with system preference detection + localStorage |
| **Mobile Nav** | No hamburger | Full-screen animated mobile menu |
| **Spotlight Cards** | None | Mouse-tracking radial gradient glow on hover |
| **Forms** | Basic inputs | Floating labels, validation, loading states |

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | React 19 |
| **Build Tool** | Vite 8 |
| **Styling** | Tailwind CSS 4 |
| **Animations** | Framer Motion |
| **Smooth Scroll** | Lenis |
| **Icons** | Lucide React |
| **Utilities** | clsx, tailwind-merge |
| **Email** | EmailJS |
| **PDF** | jsPDF |

## 📁 Project Structure

```
app/
├── index.html              # Entry HTML with fonts & meta tags
├── vite.config.js          # Vite + Tailwind config
├── package.json
├── src/
│   ├── main.jsx            # React entry point
│   ├── App.jsx             # Root component with providers
│   ├── index.css           # Tailwind theme + global styles
│   ├── components/         # All UI components
│   │   ├── Preloader.jsx
│   │   ├── CustomCursor.jsx
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Skills.jsx
│   │   ├── Services.jsx
│   │   ├── Pricing.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Testimonials.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── FeedbackModal.jsx
│   │   ├── BackToTop.jsx
│   │   └── Footer.jsx
│   ├── hooks/              # Custom React hooks
│   │   ├── useMousePosition.js
│   │   ├── useScrollDirection.js
│   │   └── useLenis.js
│   ├── context/            # React context providers
│   │   ├── ThemeContext.jsx
│   │   └── ToastContext.jsx
│   └── utils/
│       └── cn.js           # clsx + tailwind-merge helper
└── dist/                   # Production build output
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (you have v24.14.0 ✅)
- npm 9+ (you have v11.9.0 ✅)

### Development
```bash
cd app
npm install
npm run dev
```
Open `http://localhost:5173/` in your browser.

### Production Build
```bash
cd app
npm run build
```
The `dist/` folder will contain the optimized static files ready for deployment.

## 🌐 Deployment

### Option 1: Netlify / Vercel (Recommended)
1. Push the `app/` folder to a GitHub repo
2. Connect repo to [Netlify](https://netlify.com) or [Vercel](https://vercel.com)
3. Build command: `npm run build`
4. Output directory: `dist`

### Option 2: GitHub Pages
```bash
cd app
npm run build
# Copy dist/ contents to gh-pages branch or use actions
```

### Option 3: Static Hosting
Simply upload the contents of `app/dist/` to any static host.

## 🎨 Design System

| Token | Dark Mode | Light Mode |
|-------|-----------|------------|
| Background | `#070B14` | `#ffffff` |
| Primary | `#8B5CF6` | `#8B5CF6` |
| Accent | `#22D3EE` | `#22D3EE` |
| Text Primary | `#F8FAFC` | `#0f172a` |
| Text Secondary | `#94A3B8` | `#64748b` |

## ⚙️ Customization

- **Colors**: Edit `src/index.css` `@theme` block
- **Content**: Edit individual component files in `src/components/`
- **EmailJS**: Update service/template IDs in `src/App.jsx`
- **Fonts**: Change Google Fonts link in `index.html`

## 📝 Changelog

- **v2.0** — Complete redesign to React + Vite + Tailwind + Framer Motion
  - Preloader, custom cursor, smooth scroll
  - Glassmorphism navbar with active section highlighting
  - Scroll-triggered section animations
  - Portfolio filter with AnimatePresence
  - Spotlight hover cards
  - Toast notification system
  - Mobile hamburger menu
  - Back-to-top button
  - Dark/light theme toggle

## 📧 Contact

**Anshul Gole**  
💻 Web Developer | Gwalior, India  
📧 anshulgole4@gmail.com  
📱 +91 8305995654

---

⭐ **Made with ❤️ | © 2025 Anshul Gole**

