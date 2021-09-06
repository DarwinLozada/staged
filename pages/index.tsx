import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import type { NextPage } from 'next'
import { useState } from 'react'
import PageLayout from '../layouts/PageLayout'
import sceneSteps from '../constants/sceneSteps'

const Home: NextPage = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [showContent, setShowContent] = useState(false)

  const headlineControls = useAnimation()

  const SceneComponent =
    sceneSteps[currentStep].component && sceneSteps[currentStep].component

  return (
    <PageLayout
      title="Staged | Experience"
      onFinishEnterAnimation={() => {
        setShowContent(true)
      }}
    >
      <div
        className="flex flex-col relative justify-center items-center w-screen h-screen bg-white
      "
      >
        <AnimatePresence
          onExitComplete={() => {
            headlineControls.start({
              opacity: 1,
            })
          }}
        >
          {showContent ? (
            <motion.div
              key={currentStep}
              className="flex items-center relative w-full"
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ ease: 'easeOut', duration: 2 }}
              exit={{
                opacity: 0,
                x: -50,
                transition: {
                  type: 'spring',
                  duration: 1.26,
                },
              }}
            >
              <motion.h1
                className="text-4xl text-center absolute w-screen"
                animate={headlineControls}
              >
                {sceneSteps[currentStep].text}
              </motion.h1>
            </motion.div>
          ) : null}
          {SceneComponent ? (
            <SceneComponent headlineControls={headlineControls} />
          ) : null}
        </AnimatePresence>
        <motion.button
          layout
          className="text-3xl font-semibold absolute bg-yellow-400 mt-24"
          onClick={() => {
            if (currentStep < sceneSteps.length) {
              setCurrentStep((prev) => prev + 1)
            }
          }}
        >
          +
        </motion.button>
      </div>
    </PageLayout>
  )
}

export default Home
