import { useState, useEffect } from 'react'

export function useScrollDirection() {
  const [direction, setDirection] = useState('up')
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    let lastScrollY = window.scrollY
    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)
      setDirection(currentScrollY > lastScrollY ? 'down' : 'up')
      lastScrollY = currentScrollY > 0 ? currentScrollY : 0
    }
    window.addEventListener('scroll', updateScrollDirection, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollDirection)
  }, [])

  return { direction, scrollY }
}

