import { useEffect, useState } from 'react'
import { Coords } from '../types/utils.types'

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState<Coords>({
    x: -100,
    y: -100,
  })

  useEffect(() => {
    const mouseMoveHandler = (event: globalThis.MouseEvent) => {
      const { clientX, clientY } = event
      setMousePosition({ x: clientX, y: clientY })
    }
    document.addEventListener('mousemove', mouseMoveHandler)

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, [])

  return mousePosition
}
