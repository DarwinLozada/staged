import { FC, useState } from 'react'
import Head from 'next/head'

import themeColors from '../constants/theme'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import { pageLayoutAnimationElements } from '../helpers/pageLayout.helper'
import useMounted from '../hooks/useMounted'
import Cursor from '../components/Cursor'

interface Props {
  title: string
  onFinishEnterAnimation: () => any
}

const parentVariants = {
  static: {
    x: 0,
  },
  start: {
    transition: {
      staggerChildren: 0.5,
    },
  },
} as Variants

const childVariants = {
  static: {
    x: 0,
    y: 0,
  },
  start: ({ x, y }) => ({
    transition: {
      type: 'tween',
      duration: 2,
      ease: 'easeIn',
    },
    x,
    y,
  }),
} as Variants

const PageLayout: FC<Props> = ({ children, title, onFinishEnterAnimation }) => {
  const [isAnimating, setIsAnimating] = useState(true)

  const isMounted = useMounted()

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="theme-color" content={themeColors.lightCyan} />
      </Head>
      <main>
        <Cursor />
        <AnimatePresence>
          {isAnimating ? (
            <div
              className={`h-screen w-screen absolute filter z-50 ${
                isMounted ? 'brightness-100' : 'brightness-50'
              } duration-[6s]`}
            >
              <motion.ul
                variants={parentVariants}
                initial="static"
                animate="start"
                onAnimationComplete={() => {
                  setIsAnimating(false)
                  onFinishEnterAnimation()
                }}
                className="w-screen h-screen relative filter drop-shadow-lg overflow-hidden flex items-center justify-center"
              >
                {pageLayoutAnimationElements.map(
                  ({ className, xMovement, yMovement }) => (
                    <motion.li
                      variants={childVariants}
                      custom={{ x: xMovement, y: yMovement }}
                      key={className}
                      className={className}
                    />
                  )
                )}
              </motion.ul>
            </div>
          ) : null}
        </AnimatePresence>
        {children}
      </main>
    </>
  )
}

export default PageLayout
