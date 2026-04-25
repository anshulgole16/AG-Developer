import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'
import { useMousePosition } from '../hooks/useMousePosition'

export default function CustomCursor() {
  const { x, y } = useMousePosition()
  const [isHovering, setIsHovering] = useState(false)
  const [isTouch, setIsTouch] = useState(false)

  const springConfig = { damping: 25, stiffness: 300 }
  const cursorX = useSpring(x, springConfig)
  const cursorY = useSpring(y, springConfig)

  useEffect(() => {
    cursorX.set(x)
    cursorY.set(y)
  }, [x, y, cursorX, cursorY])

  useEffect(() => {
    if ('ontouchstart' in window) setIsTouch(true)

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea, .cursor-pointer')) {
        setIsHovering(true)
      }
    }
    const handleMouseOut = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea, .cursor-pointer')) {
        setIsHovering(false)
      }
    }
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)
    return () => {
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  if (isTouch) return null

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
      style={{ x: cursorX, y: cursorY }}
    >
      <div
        className={`rounded-full bg-white transition-all duration-200 ${
          isHovering
            ? 'w-12 h-12 -ml-6 -mt-6 opacity-30'
            : 'w-3 h-3 -ml-1.5 -mt-1.5 opacity-100'
        }`}
      />
    </motion.div>
  )
}

