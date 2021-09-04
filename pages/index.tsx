import { AnimatePresence, motion } from 'framer-motion'
import type { NextPage } from 'next'
import { useState } from 'react'
import PageLayout from '../layouts/PageLayout'
import sceneSteps from '../constants/sceneSteps'

const Home: NextPage = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [showContent, setShowContent] = useState(false)

  return (
    <PageLayout
      title="Staged | Experience"
      onFinishEnterAnimation={() => setShowContent(true)}
    >
      <div
        className="flex relative justify-center items-center w-screen h-screen bg-white
      "
      >
        <AnimatePresence>
          {showContent ? (
            <motion.h1
              key={currentStep}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                x: -50,
                transition: {
                  type: 'spring',
                  duration: 1.6,
                },
              }}
              transition={{ ease: 'easeOut', duration: 2 }}
              className="text-4xl absolute"
            >
              {sceneSteps[currentStep].text}
            </motion.h1>
          ) : null}
        </AnimatePresence>
        <button
          className="mt-32"
          onClick={() => setCurrentStep((prev) => (prev === 0 ? 1 : 0))}
        >
          Plus
        </button>
      </div>
    </PageLayout>
  )
}

export default Home
