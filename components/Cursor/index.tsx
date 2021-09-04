import { FC } from 'react'
import useMousePosition from '../../hooks/useMousePosition'

const Cursor: FC = () => {
  const { x, y } = useMousePosition()
  return (
    <>
      <div
        style={{
          transform: `translate3d(${x}px, ${y}px, 0)`,
        }}
        className="fixed top-0 left-0 w-6 h-6 border-8 rounded-full 
        transform -translate-y-1/2 -translate-x-1/2 z-[100] pointer-events-none
        border-middleBlueGreen
        "
      />
      <div
        className="fixed w-2 h-2 bg-black rounded-full 
        transform -translate-y-1/2 -translate-x-1/2 z-[100] pointer-events-none
        "
        style={{
          transform: `translate3d(${x - 12}px, ${y - 12}px, 0)`,
        }}
      ></div>
    </>
  )
}

export default Cursor
